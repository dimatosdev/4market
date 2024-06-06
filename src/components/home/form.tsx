export default function Form() {
    return (
        <form>
            <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                    Sua empresa no próximo nível
                </h4>
                <h4 className="text-2xl font-semibold">
                    Vamos Conversar?
                </h4>
                <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="full-name">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Qual seu nome?"
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="E-mail corporativo"
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="phone">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Telefone para contato"
                    />
                </div>
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="full-name">
                        Nome da Empresa
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Qual seu nome da sua empresa?"
                    />
                </div>
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="revenue">
                        Faixa de Faturamento
                    </label>
                    <select className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option value="">Selecione a faixa de faturamento</option>
                        <option value="1">Até 50 mil</option>
                        <option value="2">De 51 mil à 70 mil</option>
                        <option value="3">De 71 mil à 100 mil</option>
                        <option value="4">De 101 mil à 400 mil</option>
                        <option value="5">De 401 à 1 milhão</option>
                        <option value="5">De 1 à 4 milhões</option>
                        <option value="5">De 4 à 16 milhões</option>
                        <option value="5">De 16 à 40 milhões</option>
                        <option value="5">Mais de 40 milhões</option>
                    </select>
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="segment">
                        Segmento
                    </label>
                    <select className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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
                    <select className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option value="">Quanto sua empresa investe mensalmente em Marketing Digital?</option>
                        <option value="servico">Ainda não invisto</option>
                        <option value="varejo">Até R$ 5.000,00</option>
                        <option value="industria">De R$ 6.000,00 à R$ 20.000,00</option>
                        <option value="ecommerce">De R$ 21.000,00 à R$ 50.000,00</option>
                        <option value="foodservice">Acima de R$ 50.000,00</option>
                    </select>
                </div>

                <div className="text-center mt-6">
                    <button 
                        type="submit"
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </form>
    )
}