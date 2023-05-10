import SMTPTransport from "nodemailer/lib/smtp-transport";
import { MailService, SendMailData } from "./mailService";
import nodemailer from "nodemailer";
type INodeMailerServiceAuth = {
  user: string;
  pass: string;
}
interface INodemailerMailServiceConstructor {
  host?: string | undefined;
  port?: number | undefined;
  service: string | undefined
  auth: INodeMailerServiceAuth
}
class NodemailerMailService implements MailService {
	private TRANSPORT : nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
	constructor(transportConfig : INodemailerMailServiceConstructor) {
		this.TRANSPORT = nodemailer.createTransport(transportConfig);
	}

	async send ({from, body, recipient, subject, attachments}: SendMailData)  {
		await this.TRANSPORT.sendMail({
			from,
			to: recipient,
			subject,
			text: body,
			attachments
		});
	}

}

export { NodemailerMailService };