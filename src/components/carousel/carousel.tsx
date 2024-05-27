// components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface SlideContent {
    id: number;
    title: string;
    paragraphs: string[];
    linkText: string;
    imageUrl: string;
    serviceTitle: string;
    serviceText: string;
}

const slidesContent: SlideContent[] = [
    {
        id: 1,
        title: "Engajamento",
        paragraphs: [
            "Criamos relacionamentos, gerando confiança e interesse",
            "Ao desenvolver estratégias eficazes de engajamento, você não apenas atrai a atenção do seu público, mas também o mantém interessado e envolvido com sua marca ao longo do tempo."
        ],
        linkText: "Check Notus NextJS!",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        serviceTitle: "Top Notch Services",
        serviceText: "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens."
    },
    // Adicione mais slides se necessário
];

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {slidesContent.map(slide => (
                <div key={slide.id} className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            {slide.title}
                        </h3>
                        {slide.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                                {paragraph}
                            </p>
                        ))}
                        <a href="/">
                            <div className="font-bold text-slate-700 mt-8">
                                {slide.linkText}
                            </div>
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                            <img
                                alt="..."
                                src={slide.imageUrl}
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <h4 className="text-xl font-bold text-white">
                                    {slide.serviceTitle}
                                </h4>
                                <p className="text-md font-light mt-2 text-white">
                                    {slide.serviceText}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
