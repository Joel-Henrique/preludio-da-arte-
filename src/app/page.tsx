'use client';
import { useState } from 'react';
import Link from "next/link";

export default function Home() {
  const reportagens = [
    {
      title: "Teatro em Juiz de Fora",
      description:
        "Das origens dos primeiros palcos até as companhias de maior destaque da atualidade.",
      image: "/teatro.avif",
      href: "/reportagens/teatro",
    },
    {
      title:
        "Leis de Incentivo à Cultura, uma saída para projetos artísticos independentes",
      description:
        "Uma das saídas para aqueles que querem não apenas produzir, mas compartilhar a sua arte, é recorrer a apoiadores externos. Patrocinadores, eventos pagos, doações e principalmente, incentivos fiscais. Descubra algumas das formas de receber benefícios por projetos de leis em Juiz de Fora.",
      image: "/cultura.avif",
      href: "/reportagens/leis-de-incentivo",
    },
    {
      title: "Artesanato: hobby ou profissão?",
      description:
        "O artesanato é uma atividade majoritariamente feminina que se tornou uma fonte de renda para muitas mulheres em momentos difíceis. Descubra a história de feirantes da Praça São Mateus.",
      image: "/prof.avif",
      href: "/reportagens/artesanato",
    },
  ];
  
  return (
    <div >
      {/* Hero */}
      <section className="text-center px-6 bg-[#f9f6ec]">
        <h1 className="text-5xl mt-3 font-bold text-[#790614]">Prelúdio da Arte</h1>
        <p className="mt-2 text-lg text-[#0d0c0c] bold">Projeto Universitário</p>
        <p className="mt-6 mb-6 max-w-2xl mx-auto text-[#0d0c0c] leading-relaxed">
          Este espaço nasce como um convite à escuta e ao olhar. Aqui, a arte não é apenas manifestação, mas prelúdio de histórias que atravessam ruas, palcos e mãos criativas.
        </p>
      </section>

      {/* Conceito */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#790614]">O que é prelúdio?</h2>
          <p className="mt-4 text-base text-[#0d0c0c] leading-relaxed">
            Em música, o prelúdio abre caminhos. No cotidiano, ele é a primeira nota, o passo inicial para algo maior. Na arte, é o instante em que a criação se revela, seja na delicadeza de um bordado, no improviso do teatro ou na força de uma obra coletiva.
          </p>
          <div className="mt-6 text-left bg-[#f9f6ec] rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-center mb-2">prelúdio <span className="font-normal">substantivo masculino</span></p>
            <p className="italic">1. ato preliminar, primeiro passo para (alguma coisa).</p>
            <p className="ml-5">"a negociação ainda está nos p."</p>
            <p className="italic">2. primeira etapa para determinado desfecho.</p>
            <p className="text-sm text-gray-600 mt-2">Definições de Oxford Languages</p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-4 px-6">
        <section className="text-center py-16 px-6 bg-[#f9f6ec]">
          <h1 className="text-5xl font-bold text-[#790614]">
            O Prelúdio da Arte é o Povo
          </h1>
        </section>
        {/* Grid de Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {reportagens.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="bg-white rounded-2xl border border-[#88a1a8] shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition cursor-pointer h-full min-h-[480px] flex flex-col">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-semibold text-[#790614] text-xl mb-2">
                  {item.title}
                </h2>
                <p className="text-[#0d0c0c] leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </div>
  );
}
