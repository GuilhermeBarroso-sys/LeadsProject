import { Request, Response } from "express";
import { FindLeadUseCase } from "./FindLeadUseCase";


class FindLeadController {
	constructor(private findLeadUseCase : FindLeadUseCase) {}

	async handle(request: Request, response: Response) {
		try {
			const id = parseInt(request.params.id);
			const lead = await this.findLeadUseCase.execute({id});
			return response.status(200).json(lead);
		} catch(err) {
			return err.message == 404 ? response.status(404).json("Lead not found") :response.status(500).json("Server Error, details: " + err.message);
		}
	}
}

export { FindLeadController };