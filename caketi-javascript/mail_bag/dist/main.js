import path from "path";
import express, 
    { Express, NextFunction, Request, Response } from "express";
import { serverInfo } from "./serverInfo";
import * as IMAP from "./IMAP";
import * as SMTP from "./SMTP";
import * as Contacts from "./Contacts";
import { IContact } from "./Contacts";

const app: Express = express();
app.use(express.json()); // parsing incomming request bodies that contain JSON

app.use("/",
    express.static(path.join(__dirname, "../../client/dist"))
);

app.use(function(inRequest: Request, inResponse: Response,
inNext: NextFunction){
    inResponse.header("Access-Control-Allow-Origin", "*");
    inResponse.header("Access-Control-Allow-Methods",
    "GET,POST,DELETE,OPTIONS");
    inResponse.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept");
    inNext();
});

app.get("/mailboxes",   
    async (inRequest: Request, inResponse: Response) => {
        try {
            const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);
            const mailboxes: IMAP.IMailbox[] = await imapWorker.listMailboxes();
            iniResponse.json(mailboxes);
        } catch (inError){
            inResponse.send("error");
        }
    }
)
// REST endpoint : list messages
app.get("/mailboxes/:mailbox",
    async (inRequest: Request, inResponse: Response) => {
        try {
            const imapWorker: IMAP.Worker  = new IMAP.Worker(serverInfo);
            const messages: IMAP.IMessage[] = await imapWorker.lsitMessages({
                mailbox: inRequest.params.mailbox
            });
            inResponse.json(messages);
        } catch (inError) {
            inResponse.send("error");
        }
    }
);
// REST endpoint : get a message
app.get("/messages/:mailbox/:id",
    async (inRequest: Request, inResponse: Response) => {
        try {
            const imapWorker: IMAP.worker = new IMAP.worker(serverInfo);
            const messageBody: string  = await imapWorker.getMessageBody({
                mailbox : inRequest.params.mailbox,
                id  :   parseInt(inRequest.params.id, 10)
            });
            inResponse.send(messageBody);
        } catch (inError) {
            inResponse.send("error");
        }
    }
);
// REST endpoint Delete a message

app.delete("/messages/:mailbox/:id",
    async (inRequest: Request, inResponse: Response) => {
        try {
            const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);
            const imapWorker.deleteMessage({
                mailbox:    inRequest.params.mailbox,
                id :    parseInt(inRequest.params.id, 10)
            });
            inResponse.send("ok");
        } catch (inError) {
            inResponse.send("error");
        }
    }
);
// REST  endpoint : send a message
app.post("/messages",
    async (inRequest: Request, inResponse: Response) => {
        try {
            const smtpWorker: SMTP.Worker  = new SMTP.Worker(serverInfo);
            await smtpWorker.sendMessage(inRequest.body);
            inResponse.send("ok");
        } catch (inError) {
            inResponse.send("error");
        }
    }
);

// REST endpoint : list contacts 
app.get("/contacts", 
    async (inRequest: Request, inResponse: Response) => {
        try {
            const contactsWorker: Contacts.Worker = new Contacts.Worker();
            const contacts: IContact[] = await contactsWorker.listContacts();
            inResponse.json(contacts);
        } catch (inError) {
            inResponse.send("error");
        }
    }
);

// add contact
app.post("/contacts", 
    async (inRequest: Request, inResponse: Response) => {
        try {
            const contactsWorker: Contacts.Worker = new Contacts.Woker();
            const contact: IContact = await contactsWorker.addContact(inRequest.body);
            inResponse.json(contact);
        } catch (inError) {
            inResponse.send("error");
        }
    }
);
//delete contacts
app.delete("/contacts/:id",
    async (inRequest: Request, inResponse: Response) => {
        try {
            const contactsWorker: Contacts.Woker = new Contacts.Woker();
            await contactsWorker.deleteContact(inRequest.params.id);
            inResponse.send("ok");
        } catch (inError) {
            inResponse.send("error");
        }
    }
);