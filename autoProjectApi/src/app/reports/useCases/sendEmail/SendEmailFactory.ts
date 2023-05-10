import { NodemailerMailService } from "../../../../services/nodemailer/nodemailerMailService";
import { SendEmailController } from "./SendEmailController";
import { SendEmailUseCase } from "./SendEmailUseCase";

export function SendEmailFactory() {
	const nodemailer = new NodemailerMailService({
		service:"gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});
	const sendEmailUseCase = new SendEmailUseCase();
	const sendEmailController = new SendEmailController(sendEmailUseCase, nodemailer);
	return sendEmailController;
}