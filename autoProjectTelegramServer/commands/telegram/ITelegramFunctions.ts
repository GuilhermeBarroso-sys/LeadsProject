import TelegramBot from "node-telegram-bot-api";

export interface ITelegramFunctionParams {
  msg: TelegramBot.Message,
  command: string;
  text: string;
  telegramBot: TelegramBot 
}
