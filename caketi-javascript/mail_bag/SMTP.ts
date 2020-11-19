import Mail from "nodemailer/lib/mailer";
import * as nodemailer from "nodemailer";
import { SendMailOptions, SentMessageInfo } from "nodemailer";
import { IServerInfo } from "./ServerInfo";


const nodemailer = require("nodemailer");
export class Worker {
    private static serverInfo: IServerInfo;
    constructor(inServerInfo: IServerInfo){
        Worker.serverInfo = inServerInfo;
    }

/*  So, with Promise<string>, we’re essentially saying to
Chapter 8 Delivering the Goods: MailBag, the Server
195
TypeScript: “this function returns a Promise, but it promises to return a string eventually,
so make sure the variable that the returned value goes into is that type.” The generic
variable declaration is how we express that promised final type to TypeScript
*/
    public sendMessage(inOptions: SendMailOptions):
    Promise<string> {
    return new Promise((inResolve, inReject) => {
    const transport: Mail = nodemailer.createTransport(Worker.serverInfo.smtp);
    transport.sendMail(inOptions,
    (inError: Error | null, inInfo: SentMessageInfo) => {
    if (inError) {
        inReject(inError);
    } else { 
        inResolve();
    }
    }
    );
    });
   }
}