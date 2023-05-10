import { Request, Response } from "express";
import { FindAllLeadUseCase } from "./FindAllLeadUseCase";


class FindAllLeadController {
	constructor(private findAllLeadUseCase : FindAllLeadUseCase) {}

	async handle(request: Request, response: Response) {
		try {
			const leads = await this.findAllLeadUseCase.execute();
			return response.status(200).json(leads);
		} catch(err) {
			return err.message == 404 ? response.status(404).json("Lead not found") :response.status(500).json("Server Error, details: " + err.message);
		}
	}
}

export { FindAllLeadController };