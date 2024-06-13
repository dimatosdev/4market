import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    invoicing: string;
    segment: string;
    investment: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        invoicing: "",
        segment: "",
        investment: ""
    });

    const [sendConfirm, setSendConfirm] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/mail", { data: formData });
            if (response.status === 200) {
                setSendConfirm(response.data.message);
            }
        } catch (error) {
            setSendConfirm("Erro ao enviar mensagem. Tente novamente.");
        }
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                    Sua empresa no próximo nível
                </h4>
                <h4 className="text-2xl font-semibold">
                    Vamos Conversar?
                </h4>
                <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="name">
                        Nome
                    </label>
                    <input
                        id="form_name"
                        name="name"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Qual seu nome?"
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        id="form_email"
                        name="email"
                        type="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="E-mail corporativo"
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="phone">
                        Telefone
                    </label>
                    <input
                        id="form_phone"
                        name="phone"
                        type="tel"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Telefone para contato"
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="company">
                        Nome da Empresa
                    </label>
                    <input
                        id="form_company"
                        name="company"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Qual é o nome da sua empresa?"
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="invoicing">
                        Faixa de Faturamento
                    </label>
                    <select
                        id="form_invoicing"
                        name="invoicing"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange}
                    >
                        <option value="">Selecione a faixa de faturamento</option>
                        <option value="ate_50mil">Até 50 mil</option>
                        <option value="51mil_a_70mil">De 51 mil à 70 mil</option>
                        <option value="71mil_a_100mil">De 71 mil à 100 mil</option>
                        <option value="101mil_a_400mil">De 101 mil à 400 mil</option>
                        <option value="401mil_a_1milhao">De 401 mil à 1 milhão</option>
                        <option value="1milhao_a_4milhoes">De 1 à 4 milhões</option>
                        <option value="4milhoes_a_16milhoes">De 4 à 16 milhões</option>
                        <option value="16milhoes_a_40milhoes">De 16 à 40 milhões</option>
                        <option value="mais_de_40milhoes">Mais de 40 milhões</option>
                    </select>
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="segment">
                        Segmento
                    </label>
                    <select
                        id="form_segment"
                        name="segment"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange}
                    >
                        <option value="">Selecione o segmento</option>
                        <option value="servico">Serviço</option>
                        <option value="varejo">Varejo</option>
                        <option value="industria">Indústria</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="foodservice">Food Service</option>
                        <option value="educacao">Educação</option>
                        <option value="imobiliaria">Imobiliária</option>
                        <option value="saas">Saas</option>
                        <option value="financas">Finanças</option>
                        <option value="franquia">Franquia</option>
                        <option value="telecom">Telecom</option>
                        <option value="energiasolar">Energia Solar</option>
                        <option value="turismo">Turismo</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="investment">
                        Investimento de marketing
                    </label>
                    <select
                        id="form_investment"
                        name="investment"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange}
                    >
                        <option value="">Quanto sua empresa investe mensalmente em Marketing Digital?</option>
                        <option value="nao_invisto">Ainda não invisto</option>
                        <option value="ate_5mil">Até R$ 5.000,00</option>
                        <option value="6mil_a_20mil">De R$ 6.000,00 à R$ 20.000,00</option>
                        <option value="21mil_a_50mil">De R$ 21.000,00 à R$ 50.000,00</option>
                        <option value="acima_de_50mil">Acima de R$ 50.000,00</option>
                    </select>
                </div>

                <div className="text-center mt-6">
                    {sendConfirm && (
                        <div>
                            {sendConfirm === "Mensagem Enviada!"
                                ? `${sendConfirm} Em breve entraremos em contato!`
                                : `${sendConfirm} Envie um email para contato@ivm360.com.br`}
                            <br />
                        </div>
                    )}
                    <button 
                        type="submit"
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </form>
    );
}
