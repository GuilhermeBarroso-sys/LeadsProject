import { io } from "../../../..";
import { CreateLead, ILeadRepository } from "../../repository/ILeadRepository";


class CreateLeadUseCase {
	constructor(private leadRepository : ILeadRepository) {}
	async execute({data} : CreateLead ) {
		const lead = await this.leadRepository.createLead({
			data
		});

		io.emit("newLead", lead);
	}
}

export { CreateLeadUseCase };