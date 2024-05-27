import Head from "next/head";

export default function Seo({ pageTitle }: { pageTitle?: String}){
    return (
        <>
        <Head>
        <title>
            {pageTitle && `${pageTitle} || 4Market`}
        </title>
        {/* Configura o modo de compatibilidade do navegador */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* Define as palavras-chave para SEO */}
        <meta
            name="keywords"
            content="pesquisa personalizada avançada, agência, agente, negócios, limpo, corporativo, diretório, google maps"
        />
        {/* Define a descrição da página */}
        <meta
            name="description"
            content="4Market - Agência de Marketing Digital"
        />
        {/* Define um metadado personalizado */}
        <meta name="ibthemes" content="ATFN" />
        {/* Define a configuração de visualização da página para dispositivos móveis */}
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Define o ícone da página */}
        <link rel="icon" href="/favicon.ico" />
        </Head>
    </>
    )
}