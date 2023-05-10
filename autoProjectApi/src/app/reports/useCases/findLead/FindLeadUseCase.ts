import { io } from "../../../..";
import { CreateLead, FindLead, ILeadRepository } from "../../repository/ILeadRepository";


class FindLeadUseCase {
	constructor(private leadRepository : ILeadRepository) {}
	async execute({id} : FindLead ) {
		const lead = await this.leadRepository.findLead({
			id
		});
		if(!lead) {
			throw new Error("404");
		}
		return lead;
	}
}

export { FindLeadUseCase };