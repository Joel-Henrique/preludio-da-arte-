'use client';
import Link from "next/link";

export default function Reportagens() {
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
    <section className="py-4 px-6 bg-[#f9f6ec] min-h-screen">
      {/* Título */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#790614] mb-4">
          Reportagens
        </h1>
        <p className="text-[#0d0c0c] text-lg md:text-xl italic max-w-3xl mx-auto">
          “A arte diz o indizível; exprime o inexprimível; traduz o intraduzível.” <br />
          <span className="font-semibold">Leonardo Da Vinci</span>
        </p>
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
  );
}
