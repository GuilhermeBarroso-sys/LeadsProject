import axios from "axios";
import { createReadStream, createWriteStream, unlinkSync } from "fs";
import path from "path";
import { Lead } from "../../..";
import { formatDate } from "../../../helpers/formatDate";
import { randomNumbers } from "../../../helpers/randomNumbers";
import { ITelegramFunctionParams } from "../ITelegramFunctions";

export async function createReport({command,telegramBot, msg, text} : ITelegramFunctionParams) {
	const numbers = randomNumbers({amount: 5});
	const filepath = path.resolve(`tmp/report_${numbers}.xls`);

	try {
		const {data} = await axios.get<Lead[]>("http://localhost:3000/reports/leads");
		const file = createWriteStream(filepath);
		file.write("id,name,email,phone,plan,date\n");
		for(const {id,name,email,phone,plan,created_at} of data) {
			file.write(`${id},${name},${email},${phone},${plan},${formatDate(created_at)}\n`);
		}
		file.end();
		file.on("finish", async () => {
			const filename = `${msg.from.first_name} leads report.xls`;
			const readableFile = createReadStream(filepath);
			telegramBot.sendDocument(process.env.CHAT_ID, readableFile, {caption: "Here your leads report!", reply_to_message_id: msg.message_id}, {filename});

			const hasEmailEntity = msg.entities.find((entity) => entity.type == "email");
			hasEmailEntity && await axios.post("http://localhost:3000/reports/sendEmail", {
				"body": `Hi ${msg.from.first_name}!\n\n Here your leads report`,
				"from": "guibarrosodeoliveira5@gmail.com",
				"recipient": text,
				"subject": "Leads Report",
				attachments: [{
					content: readableFile,
					filename
				}]
			});
			readableFile.on("end", () => unlinkSync(filepath));	
		});

	} catch(err) {

		err.message.includes("404") ?telegramBot.sendMessage(process.env.CHAT_ID,"Sorry, I don't found any leads 😕") : telegramBot.sendMessage(process.env.CHAT_ID,"Something is wrong 🚑, please try again later");
	} 
}