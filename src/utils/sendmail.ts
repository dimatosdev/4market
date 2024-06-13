import nodemailer from 'nodemailer';

export type Email = { 
    from: string,
    to: string,  
    cc: string,
    subject: string, 
    html: string, 
};

export class SendEmail {
    private params: Email;

    constructor(params: Email) {     
        this.params = params;
    }

    public async execute() {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: { 
                user: 'noreply@mardejurere.com', 
                pass: 'dM ar@275LOL',
            },
            tls: { 
                rejectUnauthorized: false,
            },
        });   

        const mailOptions = {
            from: this.params.from,
            to: this.params.to,
            cc: this.params.cc,
            subject: this.params.subject,
            html: this.params.html,
        };

        try {
            const sent = await transporter.sendMail(mailOptions); 
            if (sent.accepted.length > 0) {
                return { status: true, message: "Mensagem Enviada!" };
            }
            return { status: false, message: "A mensagem não pode ser enviada!" };
        } catch (error) {
            if (error instanceof Error) {
                return { status: false, message: `Erro ao enviar mensagem: ${error.message}` };
            }
            return { status: false, message: "Erro ao enviar mensagem: Erro desconhecido" };
        }
    }
}
