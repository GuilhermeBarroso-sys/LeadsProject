
import { PrismaLeadRepository } from "../../repository/prisma/PrismaLeadRepository";
import { prisma } from "../../../../prisma";
import { FindAllLeadUseCase } from "./FindAllLeadUseCase";
import { FindAllLeadController } from "./FindAllLeadController";



export function FindAllLeadFactory() {
	const leadRepository  = new PrismaLeadRepository(prisma);
	const findAllLeadUseCase = new FindAllLeadUseCase(leadRepository);
	const findAllLeadController = new FindAllLeadController(findAllLeadUseCase);
	return findAllLeadController;
}