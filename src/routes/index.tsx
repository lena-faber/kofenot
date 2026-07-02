function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="mx-auto max-w-[1760px] border-t border-[rgba(0,255,0,0.12)] px-6 pb-36 pt-20 lg:px-8"
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-kicker">Uneven little machine</p>
            <h2 className="section-title">
              <br />
              A desk accident.
            </h2>
          </div>
          <div className="rotate-[-3deg] rounded-sm border border-red-500 bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_0_32px_rgba(220,38,38,0.65)]">
            Spill alert
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:flex lg:items-start lg:justify-between">
        {benefitModes.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.055} className={card.tileClass}>
            <BenefitMosaicCard card={card} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BenefitMosaicCard({
  card,
  index,
}: {
  card: {
    image: string;
    mode: string;
    title: string;
    body: string;
    command: string;
    tileClass: string;
    imageClass: string;
    tone: string;
  };
  index: number;
}) {
  const isHero = index === 0;

  return (
    <article
      className="group relative flex h-full min-h-[360px] w-full flex-col overflow-hidden bg-black transition duration-300 hover:-translate-y-2"
    >
      <div className="group/image relative shrink-0 bg-black overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`block w-full object-cover opacity-95 transition duration-500 group-hover/image:opacity-100 ${card.imageClass}`}
        />
      </div>

      <div className={`flex-1 bg-[#080908] p-4 md:p-5 ${isHero ? "lg:p-6" : ""}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-black px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
            {card.mode}
          </span>
          <span className="rounded-sm border border-[color:var(--neon)] bg-[color:var(--neon)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black">
            {card.command}
          </span>
        </div>

        <h3
          className={`font-black italic leading-none text-white ${
            isHero ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {card.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm font-semibold leading-snug text-white/72 md:text-base">
          {card.body}
        </p>
      </div>
    </article>
  );
}
