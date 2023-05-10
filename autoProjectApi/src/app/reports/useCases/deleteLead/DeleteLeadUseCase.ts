import { DeleteLead, ILeadRepository } from "../../repository/ILeadRepository";


class DeleteLeadUseCase {
	constructor(private leadRepository : ILeadRepository) {}
	async execute({id} : DeleteLead ) {
		await this.leadRepository.deleteLead({id});
	}
}

export { DeleteLeadUseCase };
