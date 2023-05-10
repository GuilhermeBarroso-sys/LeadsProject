import { Router } from "express";
import { CreateLeadFactory } from "../useCases/createLead/CreateLeadFactory";
import { DeleteLeadFactory } from "../useCases/deleteLead/DeleteLeadFactory";
import { FindAllLeadFactory } from "../useCases/findAllLead/FindLeadFactory";
import { FindLeadFactory } from "../useCases/findLead/FindLeadFactory";
import { SendEmailFactory } from "../useCases/sendEmail/SendEmailFactory";

const reportsRoutes = Router();

reportsRoutes.get("/leads", (request,response) => {
	return FindAllLeadFactory().handle(request,response);
});

reportsRoutes.get("/leads/:id", (request,response) => {
	return FindLeadFactory().handle(request,response);
});

reportsRoutes.delete("/leads/:id", (request, response) => {
	return DeleteLeadFactory().handle(request, response);
});

reportsRoutes.post("/sendEmail", (request,response) => {
	return SendEmailFactory().handle(request, response);
});

reportsRoutes.post("/leads", (request,response) => {
	return CreateLeadFactory().handle(request,response);
});

export { reportsRoutes };
