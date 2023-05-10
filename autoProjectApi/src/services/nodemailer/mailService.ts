import internal from "stream";

type TAttachments = [{
  filename: string;
  content : string | Buffer | internal.Readable
  contentType: string
}]

export interface SendMailData {
  from: string;
  recipient: string | Array<string>;
  subject: string ;
  body: string;
  attachments?: TAttachments | undefined;
}


export interface MailService {
  send: (data : SendMailData) => Promise<void>
}