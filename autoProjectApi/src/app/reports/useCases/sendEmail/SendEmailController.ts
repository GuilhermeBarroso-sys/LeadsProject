import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";
import { MailService } from "../../../../services/nodemailer/mailService";

class SendEmailController {
	constructor(private sendEmailUseCase : SendEmailUseCase, private mailService : MailService) {}
	async handle(request: Request, response: Response) {
		try {

			const {body, from, recipient, subject, attachments} = request.body;
			await  this.sendEmailUseCase.execute({
				data: {
					body,
					from,
					recipient,
					subject,
					attachments
				},
				mailService: this.mailService
			});
			return response.status(204).send();
		} catch(err) {
			console.log(err.message);
		
			return response.status(500).json("Server Error, details: " + err.message);
		}
	}
}

export { SendEmailController };