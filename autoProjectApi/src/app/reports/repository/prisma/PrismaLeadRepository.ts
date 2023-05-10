import { Lead, PrismaClient } from "@prisma/client";
import { CreateLead, DeleteLead, FindLead, ILeadRepository } from "../ILeadRepository";

class PrismaLeadRepository implements ILeadRepository {
	constructor(private prisma : PrismaClient) {}
	async createLead({data} : CreateLead ) {
		const newLead = await this.prisma.lead.create({
			data
		});
		return newLead;
	}
  
	async findLead ({id}: FindLead) {
		const lead = await this.prisma.lead.findFirst({
			where: {
				id
			}
		});
		return lead;
	}

	async findAllLeads() {
		const leads = await this.prisma.lead.findMany();
		return leads;
	}

	async deleteLead({id} : DeleteLead) {
		await this.prisma.lead.delete({
			where: {
				id
			}
		});
	}
}

export { PrismaLeadRepository };