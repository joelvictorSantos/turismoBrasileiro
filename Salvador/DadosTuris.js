let pontosTuristicosPara = [
    {
        titulo: "Mercado Vero-Peso",
        descricao: "Um verdadeiro show de cores, aromas e sabores. Neste mercado tradicional, você encontrará uma infinidade de produtos regionais, desde frutas exóticas até artesanato local. É um lugar perfeito para experimentar a culinária paraense e conhecer a cultura local. Endereço: Blvd. Castilhos França - Campina, Belém - PA, 66013-030, Brasil.",
    
    },
    {
        titulo: "Mangal das Garças",
        descricao: "Um refúgio ecológico no coração da cidade. Este parque urbano oferece uma vista deslumbrante da baía do Guajará e abriga diversas espécies de aves. É um local ideal para relaxar e apreciar a natureza. Endereço: R. Carneiro da Rocha, s/n - Cidade Velha, Belém - PA, 66020-160, Brasil.",
     
    },
    {
        titulo: "Teatro da Paz",
        descricao: "Um dos mais belos teatros do Brasil, com uma arquitetura neoclássica que impressiona. O Teatro da Paz é palco de diversas apresentações artísticas e culturais. Endereço: Avenida da Paz - Praça da República, S/N - Campina, Belém - PA, 66017-060, Brasil.",
        
    },
    {
        titulo: "Estação das Docas",
        descricao: "Um complexo cultural e de lazer à beira da baía do Guajará. A Estação oferece uma vista panorâmica da cidade, restaurantes, bares, lojas e espaços para eventos. Endereço: Av. Mal. Hermes, S/N - Campina, Belém - PA, 66010-020, Brasil.",
     
    }  
];
let pontosTuristicosAmazonas = [
    {
        titulo: "Encontro das Águas",
        descricao: "Um espetáculo natural único, onde as águas dos rios Negro e Solimões se encontram sem se misturar, formando um contraste visual impressionante. É um dos cartões postais de Manaus e um ponto de parada obrigatório para quem visita a cidade. Endereço: Encontro das Águas, Careiro da Várzea - AM, 69255-000, Brasil.",
        imagem: "imageManaus/encontroAguas.png",
    },
    {
        titulo: "Centro Histórico de Manaus",
        descricao: "Um mergulho na história da cidade, com construções coloniais bem preservadas e o imponente Teatro Amazonas. O centro histórico abriga diversos museus, igrejas e casarões que contam a história da borracha. Endereço: Centro, Manaus - AM, Brasil.",
        imagem: "imageManaus/historicomanaus.png",
    },
    {
        titulo: "Mercado Municipal de Manaus",
        descricao: "Um verdadeiro paraíso para os sentidos, com uma grande variedade de produtos regionais, como frutas exóticas, peixes e artesanato. É o lugar ideal para experimentar a culinária local e comprar souvenirs. Endereço: R. dos Barés, 46 - Centro, Manaus - AM, 69009-365, Brasil.",
        imagem: "imageManaus/mercado.png",
    }
];
let pontosTuristicosSalvador = [
    {
        titulo: "Pelourinho",
        descricao: "Um dos centros históricos mais importantes do Brasil, reconhecido pela UNESCO. Suas ruas de paralelepípedos, construções coloniais coloridas e vida noturna vibrante o tornam um dos principais destinos turísticos da Bahia. Endereço: Pelourinho, Salvador - BA, Brasil.",
        imagem: "imageSalvador/pelou.png",
    },
    {
        titulo: "Praia de Porto da Barra",
        descricao: "Uma das praias mais famosas de Salvador, conhecida por suas águas cristalinas, coqueiros e a vista para o Farol da Barra. É um local ideal para relaxar e praticar esportes aquáticos. Endereço: Porto da Barra, Salvador - BA, Brasil.",
        imagem: "imageSalvador/praiaporto.png",
    },
    {
        titulo: "Farol da Barra",
        descricao: "Um dos cartões postais de Salvador, oferecendo uma vista panorâmica da cidade. É um local histórico e romântico, perfeito para apreciar o pôr do sol. Endereço: Farol da Barra, Salvador - BA, Brasil.",
        imagem: "imageSalvador/farol.png",
    }
];
let pontosTuristicosRecife = [
    {
        titulo: "Recife Antigo",
        descricao: "O coração histórico da cidade, com construções coloniais, pontes e uma atmosfera vibrante. É um dos centros históricos mais importantes do Brasil. Endereço: Recife Antigo, Recife - PE, Brasil."
    },
    {
        titulo: "Olinda",
        descricao: "Uma cidade histórica e charmosa, Patrimônio Mundial da UNESCO, famosa por seu Carnaval, ladeiras coloridas e igrejas barrocas. Endereço: Olinda - PE, Brasil."
    },
    {
        titulo: "Porto de Galinhas",
        descricao: "Um dos destinos turísticos mais populares do Brasil, conhecido por suas piscinas naturais, praias paradisíacas e resorts de luxo. Endereço: Porto de Galinhas, Ipojuca - PE, Brasil."
    }
];
let pontosTuristicosFortaleza = [
    {
        titulo: "Praia de Iracema",
        descricao: "Uma das praias mais famosas de Fortaleza, com uma orla vibrante, bares, restaurantes e uma vista deslumbrante do mar. Endereço: Praia de Iracema, Fortaleza - CE, Brasil."
    },
    {
        titulo: "Praia de Meireles",
        descricao: "Outra praia muito popular em Fortaleza, com uma infraestrutura completa e uma atmosfera mais tranquila. Endereço: Praia de Meireles, Fortaleza - CE, Brasil."
    },
    {
        titulo: "Centro Dragão do Mar de Arte e Cultura",
        descricao: "Um complexo cultural que oferece diversas opções de lazer e entretenimento, como teatros, cinemas, museus e espaços para eventos. Endereço: Rua Dragão do Mar, 81 - Praia de Iracema, Fortaleza - CE, 60020-900, Brasil."
    }
];
let pontosTuristicosNatal = [
    {
        titulo: "Praia de Ponta Negra",
        descricao: "Uma das praias mais famosas de Natal, com uma orla vibrante, bares, restaurantes e o icônico Morro do Careca. É um ponto de encontro para turistas e locais. Endereço: Ponta Negra, Natal - RN, Brasil."
    },
    {
        titulo: "Forte dos Reis Magos",
        descricao: "Uma fortaleza histórica em formato de estrela, com vista para o mar. É um importante patrimônio cultural da cidade. Endereço: Forte dos Reis Magos, Natal - RN, Brasil."
    },
    {
        titulo: "Maior Cajueiro do Mundo",
        descricao: "Uma árvore gigante, considerada a maior do mundo de sua espécie, com uma copa que abriga diversas pessoas. Endereço: Pirangi do Norte, Natal - RN, Brasil."
    }
];
let pontosTuristicosMaceio = [
    {
        titulo: "Praia de Pajuçara",
        descricao: "Uma das praias mais famosas de Maceió, com piscinas naturais, artesanato local e uma vida noturna agitada. É um dos cartões postais da cidade. Endereço: Pajuçara, Maceió - AL, Brasil."
    },
    {
        titulo: "Praia de Ponta Verde",
        descricao: "Vizinha da Pajuçara, a Praia de Ponta Verde oferece uma orla extensa, ideal para caminhadas e prática de esportes aquáticos. Endereço: Ponta Verde, Maceió - AL, Brasil."
    },
    {
        titulo: "Pontal da Barra",
        descricao: "Um bairro charmoso, conhecido por seus restaurantes, bares e a vista para o mar. É um ótimo lugar para aproveitar a vida noturna da cidade. Endereço: Pontal da Barra, Maceió - AL, Brasil."
    }
];
let pontosTuristicosSaoPaulo = [
    {
        titulo: "Avenida Paulista",
        descricao: "Coração financeiro e cultural de São Paulo, a Avenida Paulista é um boulevard vibrante repleto de arranha-céus históricos, lojas de grife, museus renomados como o MASP, e diversas opções de gastronomia. Endereço: Avenida Paulista, Bela Vista, São Paulo - SP, Brasil."
    },
    {
        titulo: "Bairro da Liberdade",
        descricao: "Um pedacinho do Japão em São Paulo, o bairro da Liberdade oferece uma imersão na cultura oriental. Explore suas ruas e descubra templos budistas, lojas de produtos típicos, restaurantes com a melhor culinária japonesa e festivais coloridos que celebram as tradições nipo-brasileiras. Endereço: Liberdade, São Paulo - SP, Brasil."
    },
    {
        titulo: "Museu de Arte de São Paulo (MASP)",
        descricao: "Ícone da arquitetura moderna, o MASP abriga uma das mais importantes coleções de arte da América Latina. Suas obras-primas, suspensas sobre um vão livre, proporcionam uma experiência única aos visitantes. Endereço: Avenida Paulista, 1578, Bela Vista, São Paulo - SP, Brasil."
    }
];
let pontosTuristicosRioDeJaneiro = [
    {
        titulo: "Cristo Redentor",
        descricao: "Uma das novas Sete Maravilhas do Mundo Moderno, o Cristo Redentor é um ícone mundial e oferece uma vista panorâmica da cidade. Localizado no Morro do Corcovado, é um ponto turístico imperdível. Endereço: Corcovado, Rio de Janeiro - RJ"
    },
    {
        titulo: "Praia de Copacabana",
        descricao: "Uma das praias mais famosas do mundo, Copacabana é conhecida por sua orla extensa, calçadão e vida noturna agitada. É um dos principais destinos turísticos do Rio de Janeiro. Endereço: Av. Atlântica, Rio de Janeiro - RJ"
    },
    {
        titulo: "Praia de Ipanema",
        descricao: "Vizinha de Copacabana, Ipanema é famosa por sua beleza natural, areia clara e mar cristalino. É um lugar ideal para relaxar e praticar esportes aquáticos. Endereço: Av. Vieira Souto, Rio de Janeiro - RJ"
    }

];
let pontosTuristicosBeloHorizonte = [
    {
        titulo: "Mercado Central",
        descricao: "Um dos principais pontos turísticos da cidade, o Mercado Central é um lugar vibrante para experimentar a culinária mineira e encontrar diversos produtos artesanais. Endereço: Av. Augusto de Lima, 1546 - Centro, Belo Horizonte - MG"
    },
    {
        titulo: "Praça da Liberdade",
        descricao: "Um dos principais centros de cultura e lazer da cidade, a Praça da Liberdade abriga museus, bibliotecas e diversas opções de entretenimento. Endereço: Praça da Liberdade, Funcionários, Belo Horizonte - MG"
    }
];
let pontosTuristicosGoiania = [
    {
        titulo: "Parque Vaca Brava",
        descricao: "Um dos principais pontos de encontro da cidade, o Parque Vaca Brava oferece diversas opções de lazer, como pista de cooper, áreas verdes e um lago. Endereço: Avenida T-9, Setor Bueno, Goiânia - GO"
    },
    {
        titulo: "Jardim Botânico",
        descricao: "Um refúgio para quem busca contato com a natureza, o Jardim Botânico de Goiânia possui uma rica variedade de plantas e animais. Endereço: Rua 4, Setor Oeste, Goiânia - GO"
    }
];
let pontosTuristicosCuiabaEPantanal = [
    {
        titulo: "Pantanal Mato-Grossense",
        descricao: "Uma das maiores áreas úmidas do mundo, o Pantanal oferece diversas opções de ecoturismo, como safáris fotográficos e passeios de barco. Endereço: Várzea do Rio Paraguai, Mato Grosso"
    },
    {
        titulo: "Arena Pantanal",
        descricao: "Construída para a Copa do Mundo de 2014, a Arena Pantanal é um dos mais modernos estádios do Brasil. Endereço: Av. Miguel Sutil, s/n - Verdão, Cuiabá - MT"
    }
];
let pontosTuristicosCampoGrandeEPantanal = [
    {
        titulo: "Parque das Nações Indígenas",
        descricao: "Um dos principais pontos turísticos da cidade, o parque oferece diversas atividades culturais e de lazer, como o Museu das Culturas Dom Bosco e o Aquário do Pantanal. Endereço: Avenida Afonso Pena, s/n, Centro, Campo Grande - MS"
    },
    {
        titulo: "Pantanal Sul-Mato-Grossense",
        descricao: "A maior área úmida do planeta, o Pantanal oferece diversas opções de ecoturismo, como safáris fotográficos e observação de animais. Endereço: Várzea do Rio Paraguai, Mato Grosso do Sul"
    },
    {
        titulo: "Bioparque Pantanal",
        descricao: "Um aquário imersivo que simula os diversos ecossistemas do Pantanal, com a possibilidade de interagir com diversas espécies. Endereço: Avenida Gury Marques, s/n, Jardim Paulista, Campo Grande - MS"
    }
];
let pontosTuristicosFlorianopolis = [
    {
        titulo: "Praia de Jurerê Internacional",
        descricao: "Uma das praias mais famosas de Florianópolis, conhecida por suas águas cristalinas e infraestrutura completa. Endereço: Jurerê Internacional, Florianópolis - SC"
    },
    {
        titulo: "Praia de Canasvieiras",
        descricao: "Uma praia bastante procurada por famílias, com águas calmas e diversas opções de restaurantes e bares. Endereço: Canasvieiras, Florianópolis - SC"
    },
    {
        titulo: "Lagoa da Conceição",
        descricao: "Um dos cartões postais de Florianópolis, a lagoa oferece diversas atividades náuticas e uma vista deslumbrante. Endereço: Lagoa da Conceição, Florianópolis - SC"
    }
];
let pontosTuristicosPortoAlegre = [
    {
        titulo: "Orla do Guaíba",
        descricao: "Um dos principais cartões postais da cidade, a orla oferece uma vista panorâmica do lago e diversas opções de lazer, como ciclovias e áreas de convivência. Endereço: Beira Rio, Porto Alegre - RS"
    },
    {
        titulo: "Parque Farroupilha (Parque da Redenção)",
        descricao: "Um dos maiores parques urbanos da América Latina, o Parque Farroupilha é um local perfeito para atividades ao ar livre e eventos culturais. Endereço: Rua José do Patrocínio, s/n, Centro Histórico, Porto Alegre - RS"
    },
    {
        titulo: "Mercado Público",
        descricao: "Um dos mais antigos mercados da América Latina, o Mercado Público é um local ideal para experimentar a culinária gaúcha e comprar produtos artesanais. Endereço: Rua dos Andradas, 300, Centro Histórico, Porto Alegre - RS"
    }
];