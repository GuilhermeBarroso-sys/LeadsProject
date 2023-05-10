import { io } from "../../../..";
import { FindLead, ILeadRepository } from "../../repository/ILeadRepository";


class FindAllLeadUseCase {
	constructor(private leadRepository : ILeadRepository) {}
	async execute() {
		const leads = await this.leadRepository.findAllLeads();
		if(!leads.length) {
			throw new Error("404");
		}
		return leads;
	}
}

export { FindAllLeadUseCase };