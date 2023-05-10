import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import io from "socket.io-client";
import { ITelegramFunctionParams } from "./commands/telegram/ITelegramFunctions";
import { deleteLead } from "./commands/telegram/deleteLead";
import { telegramSendEmail } from "./commands/telegram/sendEmail";
import { createReport } from "./commands/telegram/sendReport";
import { newLead } from "./events/newLead";
const socket = io("http://localhost:3001");
interface ICommandsHandle {
  command: Record<string, (data : ITelegramFunctionParams) => void>
}
export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  created_at: Date
}
export const telegramBot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
	polling: true
});


const commands : ICommandsHandle = {
	command: {
		"/email": telegramSendEmail,
		"/report": createReport,
		"/deleteLead": deleteLead
	}
};

telegramBot.on("message", (msg) => {
	try {
		const commandInputted = msg.text.slice(0, msg.entities[0].length);
		const text = msg.text.replace(commandInputted, "").trimStart();
		const {command} = commands;
		command[commandInputted]({msg, text, command: commandInputted, telegramBot});
	} catch(err) {
		telegramBot.sendMessage(process.env.CHAT_ID, "Invalid command!");
	}

});

socket.on("newLead", (lead : Lead) => {

	newLead({lead, telegramBot});
});