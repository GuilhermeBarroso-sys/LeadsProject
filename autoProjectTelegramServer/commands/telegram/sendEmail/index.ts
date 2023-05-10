import axios from "axios";
import { ITelegramFunctionParams } from "../ITelegramFunctions";
import { Lead } from "../../..";
import { formatDate } from "../../../helpers/formatDate";

export async function telegramSendEmail({text, telegramBot, msg } : ITelegramFunctionParams ) {
	try {
		const [email, id] = text.split(" ");
		const {data} = await axios.get<Lead>(`http://localhost:3000/reports/leads/${id}`);
		
		await axios.post("http://localhost:3000/reports/sendEmail", {
			"body": `New lead! Check it:\n\nId: ${data.id}\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nPlan: ${data.plan}\nDate: ${formatDate(data.created_at)}`,
			"from": "guibarrosodeoliveira5@gmail.com",
			"recipient": email,
			"subject": `New Lead | Plan ${data.plan}`
		});
		telegramBot.sendMessage(process.env.CHAT_ID, "Email sent!", {
			reply_to_message_id: msg.message_id
		});
    
	} catch(err) {
		err.message.includes("404") ? telegramBot.sendMessage(process.env.CHAT_ID,"Sorry, I don't found the lead 😕") : telegramBot.sendMessage(process.env.CHAT_ID,"Something is wrong 🚑, please try again later");
	}
} 