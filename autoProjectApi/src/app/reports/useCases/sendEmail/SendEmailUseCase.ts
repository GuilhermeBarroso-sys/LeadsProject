import { io } from "../../../..";
import { SendMailData } from "../../../../services/nodemailer/mailService";
import { MailService } from "../../../../services/nodemailer/mailService";

export interface ISendEmailUseCaseParams {
  mailService: MailService
  data: SendMailData
}
class SendEmailUseCase {
	async execute({mailService, data} : ISendEmailUseCaseParams ) {
		io.emit("hello");
		await mailService.send(data);
	}
}

export { SendEmailUseCase };