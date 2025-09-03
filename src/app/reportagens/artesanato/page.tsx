"use client";

import { useEffect } from "react";
import Image from "next/image";
export default function Reportagem1() {
    useEffect(() => {
        document.body.classList.add("bg-especial");
        return () => document.body.classList.remove("bg-especial");
    }, []);

    return (
        <div className="min-h-screen text-[#f9f6ec]">
            <div className="mt-10 max-w-3xl mx-auto space-y-1 px-4">
                {/* Título */}
                <h1 className="text-[#f9f6ec] text-center text-4xl font-bold">
                    Artesanato: hobby ou profissão?
                </h1>

            <p className="text-center mt-4 font-semibold text-sm ">
            O artesanato é uma atividade majoritariamente feminina que se tornou
            <br />
            uma fonte de renda para muitas mulheres em momentos difíceis.
            <br />
            Descubra a história de feirantes da Praça São Mateus.
            </p>


                <p className="mt-5">
                    <strong>Por Iris Faria, leitura por Iris Faria</strong>
                </p>

                {/* Player do SoundCloud */}
                <div className="mt-5 10 flex flex-col items-center space-y-1">
                    <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/irisfaria/audio-reportagem&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    ></iframe>
                </div>

                {/* Texto em "quadradinhos" justificados */}
                <div className="mt-5 space-y-1">
                    <h2 className="text-2xl font-bold">Raízes da cultura</h2>
                    <p className="text-justify mt-5">
                        As artes manuais são uma das primeiras manifestações humanas de utilidades e artes,
                        com sua produção comumente relacionada a mulheres. O artesanato é historicamente uma
                        ferramenta cultural, social e pode gerar grande força econômica em pequenas sociedades,
                        como aponta o{" "}
                        <a
                            href="https://www.sbpcnet.org.br/livro/lavras/resumos/1217.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            artigo escrito por Thiago de Souza Santos
                        </a>{" "}
                        para o XIX Congresso de Pós-graduação da UFLA em 2010.
                    </p>

                    <p className="text-justify">
                        O artesanato pode ser entendido como a produção de materiais através do uso das mãos.
                        Isso não isenta o uso de ferramentas simples como pinceis e agulhas, pois o trabalho
                        exercido ainda é completamente dependente do manuseio por quem o realiza. Acontece que
                        o artesanato tem com ele uma associação que vem também de{" "}
                        <a
                            href="https://www.sbpcnet.org.br/livro/lavras/resumos/1217.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            classe social
                        </a>
                        , como aponta o artigo publicado por Ricardo Gomes no Centro Nacional de Folclore e
                        Cultura Popular (CNFCP) em 2003 intitulado “Artesanato e arte popular: duas faces de
                        uma mesma moeda ?”.
                    </p>
                </div>

                <div className="space-y-1 mt-5">
                    <h2 className="text-2xl font-bold">Empreendedorismo e arte</h2>
                    <p className="text-justify mt-5">
                        Em sua síntese o artesanato foi adotado pela população como uma expressão artística
                        manual de quem possui poucos recursos, mas também como um produto comercial. Através
                        dessa busca por produtos manuais, muitas donas de casa enxergaram na produção que já
                        realizavam desde a infância como uma fonte de renda.{" "}
                        <a
                            href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/elas-empreendem/panorama-do-empreendedorismo-feminino-no-brasil/estudo-do-empreendedorismo-feminino.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            Pesquisas realizadas em 2024
                        </a>{" "}
                        do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que o artesanato é
                        responsável pela movimentação anual de até R$ 100 bilhões, o que significa 3% do
                        Produto Interno Bruto (PIB). 67% dos municípios brasileiros têm sua economia impactada
                        de forma direta pelo comércio e produtos artesanais, sendo a maior parte das pessoas
                        que trabalham no ramo, mulheres. O Serviço Brasileiro de Apoio às Micro e Pequenas
                        Empresas (SEBRAE) aponta que 77% dos artesãos brasileiros são mulheres, a esmagadora
                        maioria.
                    </p>

                    <p className="text-justify">
                        Após um período tão complicado como a pandemia da Covid-19, muitas mulheres enxergaram
                        uma solução naquela arte que já produziam. A maioria começa a aprender ainda nova com a
                        família, com fins domésticos, e então começa a transformar isso em forma de
                        empreendimento. A força do empreendedorismo feminino levou o governo federal a
                        estabelecer no dia 10 de abril de 2024 o{" "}
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/D11994.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            Decreto nº 11.994
                        </a>{" "}
                        que instituiu a Estratégia Nacional de Empreendedorismo Feminino (Elas Empreendem) e o
                        Comitê de Empreendedorismo Feminino.
                    </p>

                    <p className="text-justify">
                        Entre as propostas foi criado o{" "}
                        <a
                            href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/elas-empreendem/ela-pode-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            Ela Pode
                        </a>
                        , uma série de capacitações de habilidades socioemocionais, além de conteúdos
                        diretamente ligados ao empreendedorismo. O projeto foi estabelecido em parceria com o
                        Instituto Rede Mulher Empreendedora, que visa a atuação conjunta para o desenvolvimento
                        de artesãs e empreendedoras. Há também participação fundamental no Programa do
                        Artesanato Brasilero (PAB). O projeto já está em prática mas depende de terceiros como
                        Prefeituras e ONGs adotarem suas ideias para que haja espaço físico e estrutura para
                        sua realização.
                    </p>

                    <p className="text-justify">
                        Uma opção para aquelas mulheres que ainda buscam uma forma de empreender e aprender
                        como começar e no que investir, é através dos cursos gratuitos do Portal Sebrae de{" "}
                        <a
                            href="https://sebrae.com.br/sites/PortalSebrae/empreendedorismofeminino"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            empreendedorismo feminino
                        </a>.
                    </p>
                </div>

                <div className="space-y-1 mt-5">
                    <h2 className="text-2xl font-bold mt-5">As artesãs de Juiz de Fora </h2>
                    <p className="text-justify mt-5">Na cidade de Juiz de Fora, o artesanato possui espaço cultural já demarcado através da venda em feiras. Com a reabertura do Mercado Municipal, uma área inteira foi desenvolvida para artesãos possuírem uma espécie de feira fixa para a venda de seus produtos. Há também as feiras que existem a anos na cidade e já possuem sua relevância cultural como a Marchê que ocorre normalmente na galeria do Pró-música em períodos próximos a datas comemorativas e a feirinha de todo sábado na pracinha do São Mateus. Nesta última, foi possível encontrar três artesãs com propósitos e histórias totalmente diferentes, que as levaram a vender seus produtos ali.
                    </p>

                    <p className="text-justify">
                        Há aquelas que viram no artesanato a oportunidade de uma mudança de carreira para uma vida mais leve. Haline Maia era professora de Gastronomia e coordenadora no CES, no qual atuou durante anos. O trabalho estava sendo motivo de, acima de tudo, estresse e cansaço, foi então que vislumbrou o artesanato como uma saída. Ela disse: “Um dia, depois de uma reunião do colegiado, meu marido, que também é professor e coordenador, marcou um encontro aqui no São Mateus pra gente tomar um café num sábado de manhã. Eu passei aqui pela praça e vi as pessoas. Os artesãos todos com umas carinhas felizes, distraídas, relaxados.”
                    </p>

                    <div className="my-8 flex flex-col items-center">
                        <Image
                            src="/haline.avif"
                            alt="Barraca da Thiline na praça do São Mateus"
                            width={400}
                            height={300}
                            className="shadow-lg h-auto w-[400px]"
                        />
                        <p className="mt-2 text-xs text-center text-[#f9f6ec] italic">
                            Barraca da Thiline na praça do São Mateus. Foto: Iris Faria
                        </p>
                    </div>



                    <p className="text-justify">
                        Haline começou a venda tanto pela internet como nas feiras. Seu aprendizado veio inteiro após a escolha de mudar de vida. Através de vídeos e materiais online conseguiu seguir por um novo caminho. Como ela conta: “Eu fui, aos poucos, transformando isso em uma mudança de carreira. Nunca tinha costurado, comprei uma máquina de costura, desmanchei um quarto de hóspede e comecei.” Para isso criou sua própria marca, a “Thiline”, se registrou como MEI e vende, através da internet, para todos os lugares do país. Ela relata que hoje, ganha por mês quase a mesma quantia que ganhava quando era professora, com um ganho imenso ainda maior em saúde mental.
                    </p>

                    <div className="flex flex-col md:flex-row items-start gap-6 my-8">
                        {/* Texto à esquerda */}
                        <div className="md:w-2/3">
                            <p className="text-justify">
                                Diferente de Haline, Adriana Aparecida largou o emprego de costureira numa fábrica de roupas infantis logo no começo da pandemia. Para se ocupar em casa, começou a produzir bonecas de pano para a sobrinha. E como já possuía certa habilidade foi se aperfeiçoando através de vídeos na internet. Adriana lembra: “Eu comecei a fazer, comecei a postar, o pessoal começou gostando. Aí, eu resolvi fazer mesmo para vender. Na verdade, eu não comecei aqui.  Eu sou de Pequeri, outra cidade vizinha aqui. Lá tinha o pessoal do artesanato, eu comecei a fazer lá, a participar da feira e foi dando certo.”
                            </p>
                        </div>

                        {/* Imagem à direita, comprida */}
                        <div className="md:w-1/3 flex flex-col items-center">
                            <Image
                                src="/adriana.avif"
                                alt="Barraca da Thiline na praça do São Mateus"
                                width={1000}   // resolução maior carregada
                                height={1500}  // resolução maior carregada
                                className="shadow-lg h-[250px] w-[250px] object-cover rounded-lg"
                            />
                            <p className="mt-2 text-xs text-center text-[#f9f6ec] italic">
                                Barraca da Thiline na praça do São Mateus. Foto: Iris Faria
                            </p>
                        </div>


                    </div>
                    <p className="text-justify">
                        Ainda trabalhando de forma informal, conseguiu um espaço na feira do São Mateus em Juiz de Fora, na qual todos os sábados expõe as suas bonecas. Como uma forma de começar a profissionalizar seu trabalho, Adriana criou o perfil drica.artesanatos e está se organizando para obter a 
                        {" "}
                        <a
                            href="https://www.gov.br/pt-br/servicos/obter-carteira-nacional-do-artesao-sistema-de-informacoes-cadastrais-do-artesanato-brasileiro-sicab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9f6ec] underline"
                        >
                            Carteira Nacional do Artesão
                        </a>.
                         Este é um documento responsável para registrar aqueles que produzem artesanato para que possuam acesso a programas do governo como o PAB, acesso a feiras nacionais, a microcrédito e à capacitação técnica, gerencial e de comercialização e a isenção do ICMS na comercialização dos produtos em alguns estados.
                    </p>

                    <p className="text-justify mt-4">
                        Giseli Maria Lhamas encontrou no artesanato uma ocupação para a aposentadoria. Após uma vida trabalhando como desenhista na Rede Ferroviária se percebeu sem uma ocupação. Ao organizar os panos de prato em casa, notou que restavam poucos, e costurou ela mesma. Desde criança a mãe tinha ensinado todas as filhas a costurar, bordar, e produzir itens manuais.                     </p>
                    <p className="text-justify">
                        A sobrinha então encomendou 60 panos de prato para o aniversário do filho. Dali ela começou a produzir mais para entregar como presentes e até fazer vendas que surgiam como encomendas. “Isso se chama relaxar, porque depois que você fica desde os sete anos até os 53 com horário fixo, e de repente você não tem horário, se não arrumar alguma coisa pra fazer, você entra em parafuso, em depressão. E não me importo se eu vender muito ou não, porque isso aqui é minha terapia.”                     </p>

                    <div className="my-8 flex flex-col items-center">
                        <Image
                            src="/gis.avif"
                            alt="Barraca Eu Que Fiz na praça do São Mateus. Foto: Iris Faria"
                            width={400}
                            height={300}
                            className="shadow-lg h-auto w-[400px]"
                        />
                        <p className="mt-2 text-xs text-center text-[#f9f6ec] italic">
                            Barraca Eu Que Fiz na praça do São Mateus. Foto: Iris Faria
                        </p>
                    </div>
                    <p className="text-justify mt-4">
                        O artesanato e arte transpõe as barreiras entre o lazer e o sustento de alguém, permitindo para muitos uma forma de manter uma casa e ainda assim, ser feliz.
                    </p>
                </div>

            </div>
        </div>
    );
}
