import { getMockReq, getMockRes } from "@jest-mock/express";
import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { FindAllLeadController } from "../FindAllLeadController";
import { FindAllLeadUseCase } from "../FindAllLeadUseCase";

afterEach(() => {
	io.close();
});
describe("Find All Lead Controller test", () => {
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
		const findAllLeadUseCase =  new FindAllLeadUseCase(leadRepository);
		const findAllLeadController = new FindAllLeadController(findAllLeadUseCase);
		await expect(findAllLeadController.handle(request,response)).resolves.not.toThrow();
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
			findAllLeads:async () => { throw new Error("404");},
			findLead: async (param : FindLead) => {throw new Error("404"); }
      
		}; 
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const findAllLeadUseCase =  new FindAllLeadUseCase(leadRepository);
		const findAllLeadController = new FindAllLeadController(findAllLeadUseCase);
		await findAllLeadController.handle(request,response);
		expect(response.status).toBeCalledWith(404);
	});




});