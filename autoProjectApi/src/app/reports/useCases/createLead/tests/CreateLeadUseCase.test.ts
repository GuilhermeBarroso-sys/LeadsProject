import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { CreateLeadUseCase } from "../CreateLeadUseCase";
afterEach(() => {
	io.close();
});
describe("Create Lead Use Case test", () => {
	it("Should create a lead without errors", async () => {
		const lead : Lead = {
			id: 1,
			email: "test@gmail.com",
			name: "test",
			phone: "24999367444",
			plan: "basic",
			created_at: new Date()
		}; 
		const leadRepository : ILeadRepository = {
			createLead:async (param : CreateLead ) => {return undefined;},
			deleteLead:async (param : DeleteLead) => {return undefined;},
			findAllLeads:async () => { return [lead];},
			findLead: async (param : FindLead) => {return lead; }
      
		}; 
		const createLeadUseCase =  new CreateLeadUseCase(leadRepository);
	
		await expect(createLeadUseCase.execute({data: lead})).resolves.not.toThrow();
	});

});