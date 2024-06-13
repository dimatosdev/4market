import type { NextApiRequest, NextApiResponse } from 'next';
import { SendEmail, Email } from "../../utils/sendmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  
    if (req.method === 'POST') {
        const { name, email, phone, company, invoicing, segment, investment } = req.body.data;
        const html = `
            <p>Orçamento</p>
            <p>Nome: ${name}</p>
            <p>Email: ${email}</p>
            <p>Telefone: ${phone}</p>
            <p>Empresa: ${company}</p>
            <p>Faturamento: ${invoicing}</p>
            <p>Segmento: ${segment}</p>
            <p>Investimento: ${investment}</p>
        `;
        
        const mailOptions: Email = {
            from: 'guilherme@4market.com.br',
            to: 'guilherme@4market.com.br',
            cc: 'dimatosdev@gmail.com',
            subject: 'Contato Site',
            html: html,
        };

        const emailInstance = new SendEmail(mailOptions);
        const sent = await emailInstance.execute();

        res.status(200).json(sent);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
