// components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'; // Importando o componente Link

interface SlideContent {
    id: number;
    title: string;
    paragraphs: string[];
    linkText: string;
    imageUrl: string;
}

const slidesContent: SlideContent[] = [
    {
        id: 1,
        title: "Engajamento",
        paragraphs: [
            "Criamos relacionamentos, gerando confiança e interesse",
            "Ao desenvolver estratégias eficazes de engajamento, você não apenas atrai a atenção do seu público, mas também o mantém interessado e envolvido com suamarca ao longo do tempo."
        ],
        linkText: "Fale com um especialista",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    {
        id: 2,
        title: "Desenvolvimento",
        paragraphs: [
            "Aprimoramento de sistemas e estratégias",
            "Isso envolve a identificação de desafios empresariais, a criação de soluções inovadoras e a implementação de medidas para otimizar processos e alcançar objetivos organizacionais"
        ],
        linkText: "Fale com um especialista",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    {
        id: 3,
        title: "Conversão",
        paragraphs: [
            "Ponto crucial em que o interesse é transformado em ação",
            "Resultando em mais vendas e receita para sua empresa,"
        ],
        linkText: "Fale com um especialista",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    {
        id: 4,
        title: "Tráfego",
        paragraphs: [
            "Ponto crucial em que o interesse é transformado em ação",
            "Resultando em mais vendas e receita para sua empresa,"
        ],
        linkText: "Fale com um especialista",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    
];

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {slidesContent.map(slide => (
                <>
                <div key={slide.id} className="flex flex-wrap items-center mt-32">
                    <div  className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 className="text-4xl mb-2 font-semibold leading-normal">
                            {slide.title}
                        </h3>
                        {slide.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-2xl font-light leading-relaxed mt-4 mb-4 text-slate-900">
                                {paragraph}
                            </p>
                        ))}
                        <Link href="/" passHref>
                            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {slide.linkText}
                            </button>
                        </Link>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                            <img
                                alt="..."
                                src={slide.imageUrl}
                                className="w-full align-middle rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                </>


            ))}
        </Slider>
    );
};

export default Carousel;
