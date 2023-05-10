import { FindLeadUseCase } from "./FindLeadUseCase";
import { PrismaLeadRepository } from "../../repository/prisma/PrismaLeadRepository";
import { prisma } from "../../../../prisma";
import { FindLeadController } from "./FindLeadController";


export function FindLeadFactory() {
	const leadRepository  = new PrismaLeadRepository(prisma);
	const findLeadUseCase = new FindLeadUseCase(leadRepository);
	const findLeadController = new FindLeadController(findLeadUseCase);
	return findLeadController;
}