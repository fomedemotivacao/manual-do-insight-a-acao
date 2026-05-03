import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-manual.jpg";
import coverImg from "@/assets/manual-cover.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const CHECKOUT_URL = "https://pay.kiwify.com.br/9h8nNa3";

function CTAButton({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "lg" | "md";
  className?: string;
}) {
  const sizing = size === "lg" ? "px-8 py-5 text-base md:text-lg" : "px-6 py-3.5 text-sm md:text-base";
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener"
      className={`cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta font-semibold tracking-wide text-primary-foreground shadow-cta ${sizing} ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,theme(colors.accent/15),transparent_60%)]" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-7">
          <div className="font-serif text-lg tracking-tight text-foreground">
            Insight <span className="text-accent">à</span> Ação
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground/80 transition hover:border-foreground/40 sm:inline-flex"
          >
            Acessar manual
          </a>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-32">
          <div className="fade-up">
            <SectionLabel>Produto digital · Acesso imediato</SectionLabel>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] text-foreground md:text-6xl lg:text-[4.2rem]">
              Você não tem falta de ideias.
              <br />
              <span className="italic text-primary">Você tem excesso</span> delas
              <br />
              sem nenhuma{" "}
              <span className="text-accent">execução</span>.
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              O <strong className="text-foreground">Manual do Insight à Ação</strong> é o guia direto para quem
              já entendeu o que precisa fazer, mas trava antes de fazer. Sai da paralisia. Organiza a mente.
              Cria constância. Sem motivação vazia, sem fórmula mágica. Só método aplicável na vida real.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTAButton>Quero acessar agora</CTAButton>
              <a
                href="#oferta"
                className="text-sm font-medium uppercase tracking-widest text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
              >
                Ver como funciona ↓
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-widest">Por apenas</span>
                <span className="font-serif text-3xl text-primary">R$ 19,97</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Acesso imediato após a compra
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-foreground/5">
              <img
                src={heroImg}
                alt="Manual aberto sobre uma mesa iluminada por luz natural, símbolo de clareza e ação"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-background/85 p-5 backdrop-blur-md ring-1 ring-foreground/5">
                <p className="font-serif text-lg leading-snug text-foreground">
                  “O problema nunca foi falta de capacidade. Foi falta de método.”
                </p>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-gradient-cta opacity-30 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* DOR / IDENTIFICAÇÃO */}
      <section className="relative bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionLabel>Talvez você se reconheça</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">
            Você sabe exatamente o que precisa fazer.
            <br />
            <span className="italic text-primary">E mesmo assim, não faz.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A informação está aí. As metas estão claras. A vontade existe. Mas, no fim do dia,
            algo continua te puxando de volta para o lugar de antes.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 px-6 sm:grid-cols-2">
          {[
            "Você consome conteúdo o dia inteiro e aplica quase nada.",
            "Começa projetos com energia e abandona poucos dias depois.",
            "Vive cansado mentalmente, mesmo sem ter feito o que importava.",
            "Sente que tem potencial, mas ele continua escondido.",
            "Recomeça toda segunda-feira, todo mês, todo ano.",
            "Sabe o caminho. Só não consegue dar o primeiro passo de verdade.",
          ].map((t, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition hover:border-accent/40 hover:shadow-soft"
            >
              <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 font-serif text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty text-base leading-relaxed text-foreground/85">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE TRAVADO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Por que você continua travado</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">
              Não é falta de capacidade.
              <br />É <span className="text-accent">excesso de ruído</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vivemos uma era em que clareza virou commodity e execução virou raridade.
              Você não precisa de mais um vídeo, mais um podcast, mais uma planilha.
              Você precisa de um caminho curto entre <em>perceber</em> e <em>agir</em>.
            </p>

            <div className="mt-10 space-y-5">
              {[
                ["Insight sem método", "Toda boa ideia morre quando não vira passo concreto."],
                ["Mente desorganizada", "Sem prioridade definida, tudo parece urgente e nada se cumpre."],
                ["Ausência de direção prática", "Falta um sistema simples que sustente a ação no dia ruim, não só no dia bom."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 border-l-2 border-accent/50 pl-5">
                  <div>
                    <p className="font-serif text-xl text-foreground">{title}</p>
                    <p className="mt-1 text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-bordeaux p-10 shadow-elegant md:p-14">
              <p className="font-serif text-3xl leading-snug text-primary-foreground md:text-4xl">
                Insight sem ação é só barulho elegante na cabeça.
              </p>
              <div className="mt-8 h-px w-16 bg-gold/60" />
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-primary-foreground/70">
                A ponte entre saber e fazer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <SectionLabel>O que muda em você</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">
              Menos ruído. Mais movimento.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Clareza mental", "Saiba exatamente o que importa hoje e o que pode esperar."],
              ["Direção prática", "Troque planos genéricos por passos pequenos, possíveis e executáveis."],
              ["Foco real", "Reduza o ruído mental e volte a sentir o prazer de terminar o que começa."],
              ["Menos procrastinação", "Quebre o ciclo do adiamento sem precisar virar outra pessoa."],
              ["Constância sustentável", "Crie uma cadência que sobrevive ao dia ruim e à semana caótica."],
              ["Aprendizado que vira resultado", "Pare de acumular conteúdo. Comece a colher consequências."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-serif text-accent">
                  ✦
                </div>
                <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <CTAButton>Quero esses resultados</CTAButton>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI ENCONTRAR */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <img
              src={coverImg}
              alt="Capa do Manual do Insight à Ação"
              className="float-soft mx-auto w-full rounded-2xl shadow-elegant"
              loading="lazy"
              width={1024}
              height={1536}
            />
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" />
          </div>

          <div>
            <SectionLabel>O que está dentro</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">
              Um método curto. <span className="italic text-primary">E vivo.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nada de teoria infinita. Você vai atravessar uma sequência prática pensada
              para destravar quem pensa demais e age de menos.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                ["Diagnóstico dos seus bloqueios", "Identifique o que, de fato, está te paralisando e pare de lutar contra o inimigo errado."],
                ["Reorganização da mente e das prioridades", "Coloque ordem onde hoje só existe acúmulo. Defina o que merece a sua energia."],
                ["Da percepção ao plano", "Transforme insights soltos em uma direção clara, com começo, meio e movimento."],
                ["Construção de ação simples e repetível", "Crie um padrão pequeno o suficiente para você não desistir."],
                ["Aplicação real na sua rotina", "Adapte tudo à sua vida, mesmo com pouco tempo, energia ou paciência."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-5">
                  <div className="flex-none">
                    <div className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="border-l border-border pl-5">
                    <h3 className="font-serif text-xl text-foreground">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="bg-gradient-bordeaux py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-primary-foreground">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Antes & depois</span>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-balance md:text-5xl">
              A diferença entre quem entende e quem aplica.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">Antes</p>
              <h3 className="mt-4 font-serif text-2xl">A vida em modo rascunho</h3>
              <ul className="mt-6 space-y-3 text-primary-foreground/80">
                <li>Mente cheia, dias vazios.</li>
                <li>Culpa por saber e não fazer.</li>
                <li>Recomeços que duram poucos dias.</li>
                <li>Cansaço sem entrega.</li>
                <li>Sensação constante de estar atrás.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-cream p-8 text-foreground shadow-elegant">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Depois</p>
              <h3 className="mt-4 font-serif text-2xl text-primary">A vida em movimento</h3>
              <ul className="mt-6 space-y-3 text-foreground/80">
                <li>Clareza sobre o que importa hoje.</li>
                <li>Firmeza para fazer o que evitava.</li>
                <li>Ação consistente, mesmo nos dias difíceis.</li>
                <li>Leveza no lugar da pressão.</li>
                <li>Direção, em vez de mais um plano.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Quanto custa continuar travado?</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
            R$ 19,97 é menos do que você gasta em distrações por semana.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Pense em quantas horas você perde escapando, rolando, recomeçando.
            Quanta energia mental se vai todo dia em ideias que não saem do papel.
            O preço não é o do manual. O preço é o de continuar onde você está.
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card p-8 text-left shadow-soft">
            <div className="flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Investimento único</span>
              <span className="font-serif text-4xl text-primary">R$ 19,97</span>
            </div>
            <div className="my-6 rule" />
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>✓ Acesso imediato após o pagamento</li>
              <li>✓ Material 100% digital, leitura fluida</li>
              <li>✓ Aplicável mesmo com rotina apertada</li>
            </ul>
            <div className="mt-7">
              <CTAButton size="md" className="w-full">Garantir o meu acesso</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-elegant">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              <div className="relative bg-gradient-bordeaux p-10 text-primary-foreground md:p-14">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">A oferta</span>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Manual do Insight à Ação
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  O guia prático para quem já entendeu e agora precisa fazer.
                </p>

                <div className="mt-10 flex items-baseline gap-3">
                  <span className="text-sm uppercase tracking-widest text-primary-foreground/60">Hoje por</span>
                  <span className="font-serif text-5xl">R$ 19,97</span>
                </div>
                <p className="mt-2 text-sm text-primary-foreground/70">Pagamento único · Acesso imediato</p>
              </div>

              <div className="p-10 md:p-14">
                <h3 className="font-serif text-2xl text-foreground">Você sai daqui com:</h3>
                <ul className="mt-6 space-y-4 text-foreground/85">
                  {[
                    "Um diagnóstico honesto do que te paralisa",
                    "Um método curto para sair da inércia",
                    "Direção clara para os próximos dias, não para um futuro vago",
                    "Uma forma prática de manter constância sem se forçar",
                  ].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 text-accent">●</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <CTAButton className="w-full sm:w-auto">Quero acessar agora</CTAButton>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Compra 100% segura · Você é redirecionado para o checkout oficial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,theme(colors.accent/20),transparent_60%)]" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>O momento é agora</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl text-balance">
            Você pode fechar essa página
            <br />
            <span className="italic text-primary">ou pode mudar a próxima semana inteira.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            Continuar adiando custa caro, só que de um jeito silencioso.
            R$ 19,97 é o preço da virada de chave entre saber e fazer.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton>Quero o Manual agora</CTAButton>
            <span className="text-sm text-muted-foreground">Acesso imediato · Pagamento único</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="font-serif text-base text-foreground">Manual do Insight à Ação</div>
          <p>© {new Date().getFullYear()} · Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function FAQ() {
  const items: { q: string; a: string }[] = [
    {
      q: "Isso é para mim?",
      a: "Se você se reconhece em consumir muito, planejar muito e executar pouco, sim. O manual foi pensado para quem tem clareza, mas trava na hora de agir.",
    },
    {
      q: "Funciona se eu estiver travado há muito tempo?",
      a: "Funciona melhor ainda. Quanto mais tempo de paralisia, mais valor tem reduzir o caminho entre intenção e ação. O método não exige que você esteja motivado para começar.",
    },
    {
      q: "É muito teórico ou é prático?",
      a: "É direto, prático e enxuto. Não é um livro acadêmico nem um discurso motivacional. É um manual aplicável.",
    },
    {
      q: "Vou conseguir aplicar com rotina corrida?",
      a: "Sim. O método é construído para caber em rotinas reais, com pouco tempo, energia limitada e cabeça cheia. Pequeno, repetível, sustentável.",
    },
    {
      q: "Como recebo o acesso?",
      a: "Após a compra você é direcionado para a área de acesso e recebe tudo por e-mail. Imediato, sem espera.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionLabel>Perguntas honestas</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Antes de você decidir</h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={it.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-6 text-left transition hover:bg-background/60"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-serif text-lg text-foreground md:text-xl">{it.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border text-accent transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden text-muted-foreground transition-all duration-300 ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 pr-12">
                    <p className="text-pretty leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <CTAButton>Quero acessar agora</CTAButton>
        </div>
      </div>
    </section>
  );
}
