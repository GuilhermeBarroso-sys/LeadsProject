export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  created_at: Date
}
export interface FindLead {
  id: number;
}

export interface DeleteLead {
  id: number;
}
export interface CreateLead {
  data: {
    name: string;
    email: string;
    phone: string;
    plan: string;
  }
}


export  interface ILeadRepository {
  findLead: (data : FindLead) =>  Promise<Lead>
  findAllLeads: () => Promise<Lead[]>
  createLead: (param : CreateLead) => Promise<Lead>
  deleteLead: (data : DeleteLead) => Promise<void>
}