let dados = [
    {
        titulo: "Belém - PA",
        descricao: "Belém, a capital do Pará, combina rica cultura amazônica e natureza exuberante. A cidade destaca-se pelo Mercado Ver-o-Peso, um vibrante mercado de cores e sabores, e o Mangal das Garças, um refúgio natural no coração urbano. A arquitetura colonial preservada pode ser admirada no Teatro da Paz e na Basílica de Nossa Senhora de Nazaré, enquanto a Estação das Docas oferece uma vista deslumbrante da baía do Guajará, com opções gastronômicas e de lazer.",
        link: "Belem/Idexe.html",
    },
    {
        titulo: "Manaus - AM",
        descricao: "A capital amazonense é um portal para a floresta. O encontro das águas dos rios Negro e Solimões é um espetáculo natural imperdível, e o Centro Histórico abriga construções coloniais e o famoso Teatro Amazonas. O Mercado Municipal de Manaus oferece uma rica variedade de produtos regionais, e a Ponta Negra é um ponto de encontro para quem busca lazer e diversão.",
        link: "Manau/Idexe.html",
    },
    {
        titulo: "Salvador - BA",
        descricao: "A capital baiana é um verdadeiro caldeirão cultural. O Pelourinho, Patrimônio Mundial da UNESCO, encanta com sua arquitetura colonial e vida noturna agitada. As praias de Salvador, como a de Porto da Barra e a do Farol da Barra, são famosas por suas águas cristalinas e paisagens deslumbrantes. O Elevador Lacerda oferece uma vista panorâmica da cidade, e o Carnaval de Salvador é um dos maiores do mundo.",
        link: "Salvador/Idexe.html",
    },
    {
        titulo: "Recife - PE",
        descricao: "A Veneza brasileira possui um centro histórico rico em cultura e história, com construções coloniais e pontes que cruzam os rios. Olinda, cidade vizinha, é um Patrimônio Mundial da UNESCO e famosa por seu Carnaval e pelas ladeiras coloridas. Porto de Galinhas, com suas piscinas naturais, é um dos destinos mais procurados do Nordeste.",
        link: "Recefi/Idexe.html",
    },
    {
        titulo: "Fortaleza - CE",
        descricao: "A capital cearense oferece praias urbanas, como a de Iracema e a de Meireles, além de dunas e lagoas. O Centro Dragão do Mar de Arte e Cultura é um complexo cultural que abriga teatros, cinemas e museus. Jericoacoara, um paraíso para os amantes do kitesurf, é um dos destinos mais charmosos do estado.",
        link: "Fortaleza/Idexe.html",
    },
    {
        titulo: "Natal - RN",
        descricao: "A cidade do sol nascente encanta com suas praias urbanas, como a de Ponta Negra e a do Forte dos Reis Magos. O maior cajueiro do mundo é uma atração imperdível, e a Praia de Pipa, com suas falésias e piscinas naturais, é um dos destinos mais procurados do estado.",  
        link: "https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)",
    },
    {
    titulo: "Maceió - AL",
        descricao: "A capital alagoana oferece praias urbanas, como a de Pajuçara e a de Ponta Verde, além de piscinas naturais e lagoas. O artesanato local é uma das marcas registradas da cidade, e o bairro do Pontal da Barra é conhecido por seus restaurantes e bares.", 
        link: "https://pt.wikipedia.org/wiki/Macei%C3%B3",
    },
    {
    titulo: "São Paulo - SP",
        descricao: "A maior cidade da América Latina oferece uma infinidade de opções para todos os gostos. A Avenida Paulista é um dos principais centros financeiros e culturais da cidade, enquanto o bairro da Liberdade é um reduto da cultura japonesa. O Museu de Arte de São Paulo (MASP) é um dos mais importantes da América Latina, e o Parque Ibirapuera é um dos maiores parques urbanos do mundo.", 
        link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo",
    },
    {
    titulo: "Rio de Janeiro - RJ",
        descricao: "A Cidade Maravilhosa é um dos destinos turísticos mais famosos do mundo. O Cristo Redentor e o Pão de Açúcar são ícones da cidade, e as praias de Copacabana e Ipanema são mundialmente conhecidas. O Carnaval carioca é um dos maiores do mundo, e o centro histórico da cidade, com seus casarões coloniais, é um patrimônio histórico.",
        link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
    },
    {
    titulo: "Belo Horizonte - MG",
        descricao: "A capital mineira é um centro cultural e gastronômico, com uma vida noturna agitada e uma rica história. O Mercado Central é um dos principais pontos turísticos da cidade, e a Praça da Liberdade é um dos principais centros de cultura e lazer.",
        link: "https://pt.wikipedia.org/wiki/Belo_Horizonte",
    },
    {
    titulo: "Goiânia - GO",
        descricao: "A capital goiana é um centro urbano moderno, com uma vida noturna agitada e uma rica gastronomia. O Parque Vaca Brava é um dos principais pontos de encontro da cidade, e o Jardim Botânico é um refúgio para quem busca contato com a natureza.",
        link: "https://pt.wikipedia.org/wiki/Goi%C3%A2nia",
    },
    {
    titulo: "Cuiabá - MT",
        descricao: "A capital mato-grossense é um importante centro econômico e cultural da região. O Pantanal Mato-Grossense, uma das maiores áreas úmidas do mundo, está localizado no estado e oferece diversas opções de ecoturismo, como safáris fotográficos e passeios de barco.",
        link: "https://pt.wikipedia.org/wiki/Cuiab%C3%A1",
    },
    {
    titulo: "Campo Grande - MS",
        descricao: "A capital sul-mato-grossense é um importante centro de distribuição e logística. O Pantanal Sul-Mato-Grossense também está presente neste estado, oferecendo diversas opções de ecoturismo.",
        link: "https://pt.wikipedia.org/wiki/Campo_Grande_(Mato_Grosso_do_Sul)",
    },
    {
    titulo: "Florianópolis - SC",
        descricao: "A Ilha da Magia é um dos destinos turísticos mais populares do Brasil. A cidade oferece praias paradisíacas, como a de Jurerê Internacional e a de Canasvieiras, além de trilhas ecológicas e paisagens exuberantes.",
        link: "https://pt.wikipedia.org/wiki/Florian%C3%B3polis",
    },
    {
    titulo: "Porto Alegre - RS",
        descricao: "A capital gaúcha é um importante centro cultural e econômico da região. O Guaíba, um dos maiores lagos da América do Sul, corta a cidade e oferece diversas opções de lazer.",
        link: "https://pt.wikipedia.org/wiki/Porto_Alegre",
    }
];
