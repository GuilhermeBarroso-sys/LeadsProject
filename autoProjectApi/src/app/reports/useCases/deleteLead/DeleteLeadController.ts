import { Request, Response } from "express";
import { DeleteLeadUseCase } from "./DeleteLeadUseCase";


class DeleteLeadController {
	constructor(private deleteLeadUseCase : DeleteLeadUseCase) {}

	async handle(request: Request, response: Response) {
		try {
			const id = parseInt(request.params.id);
			const lead = await this.deleteLeadUseCase.execute({id});
			return response.status(200).json(lead);
		} catch(err) {
			return response.status(400).json("Record doesn't exist");
		}
	}
}

export { DeleteLeadController };
