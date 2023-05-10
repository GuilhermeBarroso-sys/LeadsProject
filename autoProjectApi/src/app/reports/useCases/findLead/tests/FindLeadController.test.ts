import { getMockReq, getMockRes } from "@jest-mock/express";
import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { FindLeadController } from "../FindLeadController";
import { FindLeadUseCase } from "../FindLeadUseCase";

afterEach(() => {
	io.close();
});
describe("Find Lead Controller test", () => {
	it("Should return status 200 without errors", async () => {
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
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const findLeadUseCase =  new FindLeadUseCase(leadRepository);
		const findLeadController = new FindLeadController(findLeadUseCase);
		await expect(findLeadController.handle(request,response)).resolves.not.toThrow();
		expect(response.status).toBeCalledWith(200);
	});

	it("Should return an error with status code 404", async () => {
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
			findLead: async (param : FindLead) => {throw new Error("404"); }
      
		}; 
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const findLeadUseCase =  new FindLeadUseCase(leadRepository);
		const findLeadController = new FindLeadController(findLeadUseCase);
		await findLeadController.handle(request,response);
		expect(response.status).toBeCalledWith(404);
	});




});