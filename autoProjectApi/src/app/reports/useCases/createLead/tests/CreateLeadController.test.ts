import { getMockReq, getMockRes } from "@jest-mock/express";
import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { CreateLeadController } from "../CreateLeadController";
import { CreateLeadUseCase } from "../CreateLeadUseCase";
afterEach(() => {
	io.close();
});
describe("Create Lead Controller test", () => {
	it("Should return status 201 without errors", async () => {
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
		const createLeadUseCase =  new CreateLeadUseCase(leadRepository);
		const createLeadController = new CreateLeadController(createLeadUseCase);
		await expect(createLeadController.handle(request,response)).resolves.not.toThrow();
		expect(response.status).toBeCalledWith(201);
	});

	it("Should return an error with status code 500", async () => {
		const lead : Lead = {
			id: 1,
			email: "test@gmail.com",
			name: "test",
			phone: "24999367444",
			plan: "basic",
			created_at: new Date()
		}; 
		const leadRepository : ILeadRepository = {
			createLead:async (param : CreateLead ) => {throw new Error("Error");},
			deleteLead:async (param : DeleteLead) => {return undefined;},
			findAllLeads:async () => { return [lead];},
			findLead: async (param : FindLead) => {return lead; }
      
		}; 
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const createLeadUseCase =  new CreateLeadUseCase(leadRepository);
		const createLeadController = new CreateLeadController(createLeadUseCase);
		await createLeadController.handle(request,response);
		expect(response.status).toBeCalledWith(500);
	});
});