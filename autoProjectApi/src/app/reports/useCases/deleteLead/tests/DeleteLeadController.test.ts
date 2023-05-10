import { getMockReq, getMockRes } from "@jest-mock/express";
import { io } from "../../../../..";
import { CreateLead, DeleteLead, FindLead, ILeadRepository, Lead } from "../../../repository/ILeadRepository";
import { DeleteLeadController } from "../DeleteLeadController";
import { DeleteLeadUseCase } from "../DeleteLeadUseCase";

afterEach(() => {
	io.close();
});
describe("Delete Lead Controller test", () => {
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
		const deleteLeadUseCase =  new DeleteLeadUseCase(leadRepository);
		const deleteLeadController = new DeleteLeadController(deleteLeadUseCase);
		await expect(deleteLeadController.handle(request,response)).resolves.not.toThrow();
		expect(response.status).toBeCalledWith(200);
	});

	it("Should return an error with status code 400", async () => {
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
			deleteLead:async (param : DeleteLead) => {throw new Error("Lead doesn't exist");},
			findAllLeads:async () => { return [lead];},
			findLead: async (param : FindLead) => {throw new Error("404"); }
      
		}; 
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const deleteLeadUseCase =  new DeleteLeadUseCase(leadRepository);
		const deleteLeadController = new DeleteLeadController(deleteLeadUseCase);
		await deleteLeadController.handle(request,response);
		expect(response.status).toBeCalledWith(400);
	});




});