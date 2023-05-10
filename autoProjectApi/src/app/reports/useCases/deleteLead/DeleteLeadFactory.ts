import { prisma } from "../../../../prisma";
import { PrismaLeadRepository } from "../../repository/prisma/PrismaLeadRepository";
import { DeleteLeadController } from "./DeleteLeadController";
import { DeleteLeadUseCase } from "./DeleteLeadUseCase";



export function DeleteLeadFactory() {
	const leadRepository  = new PrismaLeadRepository(prisma);
	const deleteLeadUseCase = new DeleteLeadUseCase(leadRepository);
	const deleteLeadController = new DeleteLeadController(deleteLeadUseCase);
	return deleteLeadController;
}