import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { FindAllLeadUseCase } from "../FindAllLeadUseCase";

afterEach(() => {
	io.close();
});
describe("Find All Lead Use Case test", () => {
	it("Shouldn't throw an error", async () => {
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
		const findAllLeadUseCase =  new FindAllLeadUseCase(leadRepository);
		await expect(findAllLeadUseCase.execute()).resolves.not.toThrow();
	});

});