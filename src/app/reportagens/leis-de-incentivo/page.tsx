"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Reportagem2() {
    useEffect(() => {
        document.body.classList.add("bg-especial");
        return () => document.body.classList.remove("bg-especial");
    }, []);

    return (
        <div className="min-h-screen text-[#f9f6ec]">
            <div className="mt-12 max-w-3xl mx-auto px-6 space-y-8">

                {/* Título */}
                <h1 className="text-center text-4xl font-extrabold leading-tight">
                    Leis de Incentivo à Cultura, uma saída para projetos artísticos independentes
                </h1>

                {/* Autor */}
                <p className="text-center text-sm opacity-80">
                    <strong>Por Iris Faria</strong>
                </p>

                {/* Citação */}
                <blockquote className="text-center mt-4 text-base italic font-medium opacity-90">
                    “As grandes obras de arte somente são grandes por serem acessíveis e compreendidas por todos.”
                    <br />Leon Tolstói
                </blockquote>

                {/* Texto introdutório */}
                <p className="text-justify leading-relaxed">
                    Artistas independentes, que criam através apenas da sua vontade e materiais próprios, podem não conseguir implementar os seus projetos com toda a magnitude desejada. Uma das saídas para aqueles que querem não apenas produzir, mas compartilhar a sua arte, é recorrer a apoiadores externos. Patrocinadores, eventos pagos, doações e principalmente, incentivos fiscais. Descubra algumas das formas de receber benefícios por projetos de leis em Juiz de Fora.
                </p>

                {/* Seção: Cultura em JF */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-center">
                        Quem cuida da cultura em Juiz de Fora
                    </h2>
                    <p className="text-justify leading-relaxed">
                        Em 1991 surge a mais popular lei de incentivo à cultura do Brasil, conhecida como Lei Rouanet. Ao decorrer destes mais de 30 anos, diversos projetos surgiram com a intenção de incentivar a cultura no país, desde os investimentos federais até os estaduais e municipais. A cidade de Juiz de Fora é a 4ª maior do estado de Minas e possui grande acervo artístico cultural, isso advindo da existência dos projetos da Universidade Federal de Juiz de Fora (UFJF), mas também do setor específico do município para propagação da cultura, a Funalfa (Fundação Cultural Alfredo Ferreira Lage).
                    </p>

                    {/* Imagem com legenda */}
                    <div className="my-8 flex flex-col items-center">
                        <Image
                            src="/fun.avif"
                            alt="Sede da Funalfa localizada na Av. Barão do Rio Branco"
                            width={500}
                            height={350}
                            className="shadow-lg w-full max-w-md h-auto"
                        />
                        <p className="mt-2 text-xs text-center italic opacity-80">
                            Sede da Funalfa localizada na Av. Barão do Rio Branco. Foto: Iris Faria
                        </p>
                    </div>

                    <p className="text-justify leading-relaxed">
                        Algumas cidades, como a de Juiz de Fora, possuem um Fundo Municipal de Incentivo à Cultura (Fumic), e, no município, a Funalfa é a responsável pela sua divisão em diferentes editais. Criada em 14 de setembro de 1978 através da Lei 5.471, é a primeira fundação municipal responsável por cultura no Estado de Minas Gerais. Suas atividades incluem tanto responder pela política cultural, quanto administrar espaços públicos de grande importância, como a Biblioteca Municipal Murilo Mendes, o Centro Cultural Bernardo Mascarenhas (CCBM), o Museu Ferroviário de Juiz de Fora, o Anfiteatro João Carriço, o Centro Cultural Dnar Rocha e o Centro de Artes e Esportes Unificados (CEU/Zona Norte).
                    </p>
                    <p className="text-justify leading-relaxed">
                        Também é função da secretaria gerenciar a Lei Municipal de Incentivo à Cultura (Lei Murilo Mendes) e as atividades do Conselho Municipal de Cultura (Concult), do Conselho Municipal de Preservação do Patrimônio Cultural (Comppac) e do Conselho Gestor do Centro de Artes e Esportes Unificados (Conceu).
                    </p>
                    <p className="text-justify leading-relaxed">
                        Dentro desse objetivo, a Funalfa desenvolveu diferentes formas de trazer e incentivar manifestações culturais na sociedade. Através de editais, abertura e administração de espaços e projetos que difundem a democratização da cultura. A assessora de comunicação da Funalfa, Táscia Souza, detalha quais os principais projetos e programas da Funalfa que funcionam atualmente e quais os objetivos da atual gestão.
                    </p>
                </section>

                {/* Outras seções */}
                <section className="space-y-6">
                    <h3 className="text-1xl font-bold">Gente em Primeiro Lugar</h3>
                    <p className="text-justify leading-relaxed">
                        Entre eles está um dos mais importantes programas de cunho cultural e social do município, o Gente em Primeiro Lugar: “Atualmente, ele é executado pela Associação Municipal de Assistência Comunitária (AMAC). Mas, é um contrato que a AMAC tem com a Funalfa. Quem supervisiona esse trabalho é a Funalfa, que oferece projetos de aulas de dança, aulas de instrumentos musicais, capoeira, tem vários tipos de oficinas de pintura para as pessoas com vulnerabilidade, que não têm acesso de outra forma.” explica Táscia.
                    </p>

                    <h3 className="text-1xl font-bold">Murilão</h3>
                    <p className="text-justify leading-relaxed">
                        Em se tratando dos projetos exclusivos do município, a principal frente da fundação é o Programa Murilo Mendes. Ele advém de um orçamento municipal destinado à cultura e é administrado pela Funalfa, como explica Táscia. “Quando ele se tornou um programa, foi dividido em vários editais diferentes para descentralizar a cultura, tanto no aspecto territorial quanto no aspecto social.” Seu grande diferencial está na forma de aplicação dos investimentos. Surgiu como a primeira lei de repasse direto do Brasil. “Isso faz uma enorme diferença para os artistas e agentes culturais que precisam de financiamento, porque quem passa por uma lei de repasse indireto, como a Lei Rouanet, ou às vezes a Lei Estadual, precisa captar esse recurso depois. Então, muitos projetos são aprovados e não conseguem ser implementados porque não conseguem a captação do recurso.” Essa divisão criou novos editais como o Na quebrada e o Quilombagens, com a maior parte dos recursos concentrado no Murilão, que abarca uma variedade maior de projetos.
                    </p>

                    <h3 className="text-1xl font-bold">Ocupação de espaços públicos</h3>
                    <p className="text-justify leading-relaxed">
                        Uma outra vertente é a liberação de espaços administrados pela Funalfa para ocupação de projetos culturais através editais ou aberturas de pautas. Esta é uma forma para que projetos já existentes, que não possuem um espaço físico, consigam um meio de apresentar e disseminar as suas produções de forma acessível. O Mercado Municipal é um exemplo. O espaço passa atualmente por uma programação da fundação que irá perdurar por três meses, e posteriormente apresentará editais para ocupação dos locais. “Essa atividade no Mercado Municipal é atípica, porque a Funalfa não é uma produtora de eventos, mas, com a inauguração do Mercado, nós recebemos um pedido da prefeita para que montasse uma programação cultural de três meses, para mostrar que ali tem um novo espaço cultural e quais as atividades que podem ser ali desenvolvidas”, afirma Táscia. O projeto se baseia em dias temáticos, com objetivo de estabelecer uma conexão com o público.“Passado esse tempo, a Funalfa mantém essa estrutura de produção para manter o ritmo. Esse espaço vai ser sujeito a estágio de ocupação, assim, os artistas podem também se preparar para a possibilidade de se apresentar no Mercado Ice."
                    </p>

                    <h3 className="text-1xl font-bold">Apoio indireto</h3>
                    <p className="text-justify leading-relaxed">
                        Em casos de apoio indireto, a Funalfa está sempre aberta à divulgação de projetos culturais independentes realizados na cidade. Táscia anuncia que o objetivo da nova gestão é estar aberta a ouvir o que os artistas do município buscam.
                    </p>


                    {/* Player do SoundCloud */}
                    <div className="mt-10 flex flex-col items-center space-y-4">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            className="rounded-lg shadow-lg"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/irisfaria/assessora-da-funalfa-tascia-fala-sobre-visao-da-nova-gestao&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                        ></iframe>
                    </div>

                    <p className="text-justify leading-relaxed">
                        A assessora também diz que um novo site específico para a Funalfa está sendo elaborado. A ideia é facilitar os processos e acesso à informação, abrindo a possibilidade dos produtores culturais, os artistas, registrarem em massa os eventos, assim como divulgar notícias de cultura da cidade e informações sobre os equipamentos culturais. “É uma coisa que a gente está na expectativa de que também ajude de alguma forma os fazedores de cultura na cidade”, conclui.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-center">
                        ​Primeiro Plano
Um dos mais antigos festivais de cinema de Juiz de Fora
                    </h2>
                </section>
            </div>
        </div>
    );
}
