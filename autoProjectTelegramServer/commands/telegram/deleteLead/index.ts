import axios from "axios";
import { ITelegramFunctionParams } from "../ITelegramFunctions";

export async function deleteLead({telegramBot, command, msg, text} : ITelegramFunctionParams) {
	try {
		await axios.delete(`http://localhost:3000/reports/leads/${text}`);
		telegramBot.sendMessage(process.env.CHAT_ID, `Lead with id ${text} deleted!`);

	} catch(err) {
		telegramBot.sendMessage(process.env.CHAT_ID, "This lead doesn't exist, try again");
	}
}