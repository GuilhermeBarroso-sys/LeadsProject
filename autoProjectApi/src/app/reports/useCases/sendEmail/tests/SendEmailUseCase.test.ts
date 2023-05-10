import { io } from "../../../../..";
import { SendEmailUseCase } from "../SendEmailUseCase";
beforeEach(() => {
	io.close();
});
describe("Send Email Use Case test", () => {
	it("Should send an email without errors", async () => {
		const sendEmailUseCase =  new SendEmailUseCase();
	
		await expect(sendEmailUseCase.execute({
			mailService: {
				send: async () => {return undefined;}
			},
			data: {
				body: "test",
				from: "test@gmail.com",
				recipient: "test2@gmail.com",
				subject: "testSubject"
			}
		})).resolves.not.toThrow();
	});

});