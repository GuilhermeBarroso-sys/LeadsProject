import { getMockReq, getMockRes } from "@jest-mock/express";
import { io } from "../../../../..";
import { SendEmailController } from "../SendEmailController";
afterEach(() => {
	io.close();
});
describe("Send Email Controller tests", () => {

	it("Should return status 204", async () => {
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const sendEmailController = new SendEmailController(
			{
				execute: async () => {return undefined;}
			},
			{
				send: async () => {return undefined;}
			} 
		);
		
		await expect(sendEmailController.handle(request,response)).resolves.not.toThrow();
		expect(response.status).toHaveBeenCalledWith(204);
	});
	it("Should return status code 500", async () => {
		const request = getMockReq({});
		const {res : response} = getMockRes();
		const sendEmailController = new SendEmailController(
			{
				execute: async () => {throw new Error("Server Error");}
			},
			{
				send: async () => {throw new Error("Server Error");}
			} 
		);
		
		await sendEmailController.handle(request,response);
		expect(response.status).toHaveBeenCalledWith(500);
	});
});