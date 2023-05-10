import { telegramBot } from "../../..";



export interface ISendMessageParams {
  msg: string
}
export function telegramSendMessage({msg} : ISendMessageParams) {
	telegramBot.sendMessage(process.env.CHAT_ID, msg);
}