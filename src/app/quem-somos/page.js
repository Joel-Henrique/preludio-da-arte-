'use client';
import { Mail, Instagram } from "lucide-react";
import { useRef } from "react";

export default function QuemSomos() {
    const scrollRef = useRef(null);

    return (

        <div className="min-h-screen text-[#0d0c0c]">
            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Título */}
                <h1 className=" text-[#790614] text-center text-5xl font-bold mb-12">
                    Quem somos?
                </h1>

                {/* Seção principal */}
                <div className="md:flex md:items-center md:gap-8 mb-16">
                    {/* Foto */}
                    <img
                        src="/iris.avif" // substitua pelo caminho da imagem
                        alt="Iris Faria"
                        className="rounded-xl shadow-lg w-full md:w-1/3 object-cover"
                    />

                    {/* Texto */}
                    <div className="mt-6 md:mt-0 md:w-2/3">
                        <h2 className="text-2xl font-bold mb-2">Iris Faria</h2>
                        <p className="italic mb-4">
                            Estudante de Jornalismo <br />
                            Universidade Federal de Juiz de Fora
                        </p>

                        <div className="mb-4 space-y-2">
                            <p className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#790614]" />
                                <a
                                    href="mailto:irisfariadeassis@estudante.ufjf.br"
                                    className="hover:underline"
                                >
                                    irisfariadeassis@estudante.ufjf.br
                                </a>
                            </p>

                            <p className="flex items-center gap-2">
                                <Instagram className="w-5 h-5 text-[#790614]" />
                                <a
                                    href="https://www.instagram.com/irisfaria01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    @irisfaria01
                                </a>
                            </p>
                        </div>

                        <p>
                            Uma estudante apaixonada pela arte e cultura local que encontrou
                            uma forma de falar sobre o tema através deste projeto experimental
                            desenvolvido para a disciplina Laboratório de Jornalismo Digital da UFJF,
                            ministrada pela professora Telma Johnson.
                        </p>
                    </div>
                </div>

                {/* Seção Sobre mim */}
                <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
                <p className="mb-8">
                    Entrei na faculdade de Jornalismo em 2022 com apenas 17 anos. Minha escolha
                    pela profissão já era direcionada pela minha paixão em cultura, mais cultura
                    brasileira. Consumi desde sempre de cinema, literatura e música nacional,
                    tornando esse hábito um firme amor por mostrar isso não só para meus amigos,
                    mas para o mundo, ou seja, experiência de campo. <br /><br />
                    Hoje, com 21 anos, estagio na área de assessoria de imprensa da Câmara e
                    trabalho de forma independente como fotógrafa. Fui também bolsista de Fotografia
                    na Diretoria de Imagem Institucional da UFJF, estagiei de Atendimento e Social Media
                    na Agência GoldGrow e sou membro participante da Acesso Comunicação Jr.
                </p>

                {/* Seção Galeria */}
                <div className="relative bg-[#5b0c0c] py-10">
                    <h2 className="text-3xl font-bold text-[#f9f6ec] text-center mb-6">
                        Minha Galeria
                    </h2>

                    {/* Botão Esquerda */}
                    <button
                        onClick={() =>
                            scrollRef.current.scrollBy({
                                left: -scrollRef.current.offsetWidth,
                                behavior: "smooth",
                            })
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#790614] text-white p-3 rounded-full shadow-md hover:bg-[#a31824] z-10"
                    >
                        ◀
                    </button>

                    {/* Container scroll horizontal */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory px-6"
                    >
                        {[
                            "/f1.avif",
                            "/f2.avif",
                            "/f3.avif",
                            "/f4.avif",
                            "/f5.avif",
                            "/f6.avif",
                            "/f7.avif",
                            "/f8.avif",
                            "/f9.avif",
                            "/f99.avif",
                            "/f10.avif",
                        ].map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 snap-center flex items-center justify-center w-72 h-96"
                            >
                                <img
                                    src={src}
                                    alt={`foto ${index + 1}`}
                                    className="w-full h-full object-cover object-center rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>





                    {/* Botão Direita */}
                    <button
                        onClick={() =>
                            scrollRef.current.scrollBy({
                                left: scrollRef.current.offsetWidth,
                                behavior: "smooth",
                            })
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#790614] text-white p-3 rounded-full shadow-md hover:bg-[#a31824] z-10"
                    >
                        ▶
                    </button>
                </div>

                {/* Bloco Saiba mais */}
                {/* Bloco Saiba mais */}
                <div className="mt-5">
                    <div className="bg-[#f9f6ec] border-2 border-[#790614] rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-2xl font-bold text-[#790614] mb-3">Saiba mais</h3>
                        <p className="text-[#0d0c0c] mb-6">
                            Confira todos os meus links de redes sociais, materiais e projetos já desenvolvidos.
                        </p>
                        <a
                            href="https://campsite.bio/irisfaria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#790614] text-[#f9f6ec] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#a31824] transition"
                        >
                            Acessar meus links
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}
