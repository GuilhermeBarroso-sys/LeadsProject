import { Request, Response } from "express";
import { MailService } from "../../../../services/nodemailer/mailService";
import { CreateLeadUseCase } from "./CreateLeadUseCase";

class CreateLeadController {
	constructor(private createLeadUseCase : CreateLeadUseCase) {}

	async handle(request: Request, response: Response) {
		try {
			const {data} = request.body;
			await this.createLeadUseCase.execute({data});
			return response.status(201).send();
		} catch(err) {
			return response.status(500).json("Server Error, details: " + err.message);
		}
	}
}

export { CreateLeadController };