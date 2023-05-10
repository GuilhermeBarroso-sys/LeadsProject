import TelegramBot from "node-telegram-bot-api";
import { Lead } from "..";
import { formatDate } from "../helpers/formatDate";
interface INewLeadParams {
  lead: Lead,
  telegramBot: TelegramBot
}
export function newLead({lead :{id,email, name, phone, plan, created_at}, telegramBot} : INewLeadParams) {
	
	const formattedDate = formatDate(created_at);
	telegramBot.sendMessage(process.env.CHAT_ID, 
		`
New lead! Check it:
Id: ${id}
Name: ${name}
Email: ${email}
Phone: ${phone}
Plan: ${plan}
Date: ${formattedDate}

If you would like that I send this lead to your email, type /sendEmail with your gmail and the lead id.

Example:

/email example@gmail.com ${id}
`
	);
}