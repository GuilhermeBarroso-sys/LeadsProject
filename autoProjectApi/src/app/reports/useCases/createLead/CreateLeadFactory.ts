import { CreateLeadUseCase } from "./CreateLeadUseCase";
import { PrismaLeadRepository } from "../../repository/prisma/PrismaLeadRepository";
import { prisma } from "../../../../prisma";
import { CreateLeadController } from "./CreateLeadController";


export function CreateLeadFactory() {
	const leadRepository  = new PrismaLeadRepository(prisma);
	const createLeadUseCase = new CreateLeadUseCase(leadRepository);
	const createLeadController = new CreateLeadController(createLeadUseCase);
	return createLeadController;
}