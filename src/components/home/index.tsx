import Link from "next/link";
import Navbar from "../navbar/navbar";
import React, { useState, useEffect } from "react";
import Carousel from "../carousel/carousel";
import Form from "./form";

export default function Home () {

    const AlternatingWords = () => {
        const words = ['Engajamento', 'Desenvolvimento', 'Conversão', 'Tráfego'];
        const [wordIndex, setWordIndex] = useState(0);
        
        useEffect(() => {
          const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 3000);
        
          return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
        }, []);
    
        return (
          <h1 className="text-orange-600 font-semibold text-8xl text-left">
            {words[wordIndex]}
          </h1>
        );
      };

    return (
        <>
         <Navbar/>
              <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                    }}
                >
                    <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                        <h1 className="text-white font-semibold text-6xl text-left">
                        Desbloqueamos o potencial do seu negócio com
                        </h1>
                        <AlternatingWords />
                        <p className="mt-4 text-2xl text-slate-200 text-left">
                        Potencialize seus resultados comerciais, impulsionando suas vendas e alavancando seu sucesso empresarial.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    >
                    <polygon
                        className="text-slate-200 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                    </svg>
                </div>
                </div>

                <section className="pb-20 bg-slate-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Diagnóstico</h6>
                            <p className="mt-2 mb-4 text-slate-500">
                            Fazemos uma auditoria em todos os
                            processos para identificar problemas e
                            oportunidades com análise de seus ativos de
                            marketing e vendas
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-700">
                            <i className="fa-solid fa-arrows-up-down-left-right"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Orientação</h6>
                            <p className="mt-2 mb-4 text-slate-500">
                            Recomendamos as soluções e estratégias
                            mais adequadas à sua empresa necessárias
                            para desenvolver o planejamento e alcançar
                            os resultados projetados
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-700">
                            <i className="fa-solid fa-gear"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Execução</h6>
                            <p className="mt-2 mb-4 text-slate-500">
                            Executamos qualquer ação apontada no
                            projeto que esteja fora do alcance de sua
                            empresa
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <Carousel /> 
                </div>
                </section>

{/*                 <section className="relative py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    >
                    <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                        <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-200">
                            <i className="fas fa-rocket text-xl"></i>
                        </div>
                        <h3 className="text-3xl font-semibold">A growing company</h3>
                        <p className="mt-4 text-lg leading-relaxed text-slate-500">
                            The extension comes with three pre-built pages to help you
                            get started faster. You can change the text and images and
                            youre good to go.
                        </p>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-100 mr-3">
                                    <i className="fas fa-fingerprint"></i>
                                </span>
                                </div>
                                <div>
                                <h4 className="text-slate-500">
                                    Carefully crafted components
                                </h4>
                                </div>
                            </div>
                            </li>
                            <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-100 mr-3">
                                    <i className="fab fa-html5"></i>
                                </span>
                                </div>
                                <div>
                                <h4 className="text-slate-500">
                                    Amazing page examples
                                </h4>
                                </div>
                            </div>
                            </li>
                            <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-100 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                </span>
                                </div>
                                <div>
                                <h4 className="text-slate-500">
                                    Dynamic components
                                </h4>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}

{/*                 <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                        <p className="text-lg leading-relaxed m-4 text-slate-500">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                        potentially record maximum.
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                        <img
                            alt="..."
                            src="/img/team-1-800x800.jpg"
                            className="shadow-lg rounded-full mx-auto max-w-120-px"
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Ryan Tompson</h5>
                            <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                            Web Developer
                            </p>
                            <div className="mt-6">
                            <button
                                className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                        <img
                            alt="..."
                            src="/img/team-2-800x800.jpg"
                            className="shadow-lg rounded-full mx-auto max-w-120-px"
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Romina Hadid</h5>
                            <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                            Marketing Specialist
                            </p>
                            <div className="mt-6">
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                        <img
                            alt="..."
                            src="/img/team-3-800x800.jpg"
                            className="shadow-lg rounded-full mx-auto max-w-120-px"
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Alexa Smith</h5>
                            <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                            UI/UX Designer
                            </p>
                            <div className="mt-6">
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-slate-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                        <img
                            alt="..."
                            src="/img/team-4-470x470.png"
                            className="shadow-lg rounded-full mx-auto max-w-120-px"
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Jenna Kardi</h5>
                            <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                            Founder and CEO
                            </p>
                            <div className="mt-6">
                            <button
                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-slate-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}

                <section className="pb-20 relative block bg-slate-900">


                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                    <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold text-indigo-300">
                        Potencialize seus resultados abandonando fórmulas ineficazes e aproveitando seu tempo de forma estratégica
                        </h2>
                        <p className="text-2xl leading-relaxed mt-4 mb-4 text-white italic">
                        Desperte a excelência: <br/> uma nova era de conquistas aguarda sua empresa
                        </p>
                    </div>
                    </div>
{/*                     <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                        </div>
                        <h6 className="text-xl mt-5 font-semibold text-white">
                        Excelent Services
                        </h6>
                        <p className="mt-2 mb-4 text-slate-400">
                        Some quick example text to build on the card title and make up
                        the bulk of the cards content.
                        </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-poll text-xl"></i>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-white">
                        Grow your market
                        </h5>
                        <p className="mt-2 mb-4 text-slate-400">
                        Some quick example text to build on the card title and make up
                        the bulk of the cards content.
                        </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-white">
                        Launch time
                        </h5>
                        <p className="mt-2 mb-4 text-slate-400">
                        Some quick example text to build on the card title and make up
                        the bulk of the cards content.
                        </p>
                    </div>
                    </div> */}
                </div>
                </section>
                <section id="contact" className="relative block py-24 lg:pt-0 bg-slate-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


{/*                 <section id="contact" className="relative block py-24 lg:pt-0 bg-white">
                    <div className='text-white text-center md:p-10 p-5 pb-10 mt-20'>
                        <div className='max-w-xl mx-auto'>
                            <div className='text-6xl mb-5 text-slate-900'>
                                Leve sua empresa para o próximo nível. <br /> Vamos conversar?
                            </div>
                            <div className='flex items-center justify-center'>
                                <a 
                                    href='https://api.whatsapp.com/send?phone=5548991572012'
                                    target='_blank' 
                                    rel="noreferrer">
                                    <div className='relative flex flex-col md:flex-row gap-5 items-center justify-center border-2 rounded-lg border-orange-600 px-10 py-10'>
                                        <i className="text-9xl fa-brands fa-whatsapp text-green-500"></i>
                                        <div className='text-left text-slate-900'>
                                            <div className='font-bold text-2xl text-slate-900'>Atendimento via Whatsapp</div>
                                            <div>Envie mensagem para</div>
                                            <div>(48) 99157-2012</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
                <footer className="flex md:flex-row md:justify-evenly gap-y-5 flex-col justify-center items-center p-10 px-3 z-99999 bg-slate-900">
                    <div className="px-4 text-center md:text-left">
                        <img className="w-64" src="img/logo.png" alt="logo" />
                    </div>
                    <div className="px-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            <span className="text-white">ACOMPANHE</span>
                        </h3>
                        <ul className="flex justify-center md:justify-start">
                            <li className="text-white mx-2">
                            <a href="https://www.instagram.com/4marketbrasil" target="_blank" rel="noopener noreferrer">
                                <i className="text-5xl fa-brands fa-instagram"></i>
                            </a>
                            </li>
                            <li className="text-white mx-2">
                            <a href="https://www.linkedin.com/company/4market" target="_blank" rel="noopener noreferrer">
                                <i className="text-5xl fa-brands fa-linkedin"></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </main>
        </>
       

    )
}