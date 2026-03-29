import { Check, Clock, Heart, ShieldCheck, Star, ArrowRight } from "lucide-react";
import ebookCover from "@/assets/ebook-rotina-real.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-primary py-3 text-center">
        <p className="text-primary-foreground text-sm font-medium tracking-wide">
          ✅ Parabéns! Sua compra do eBook <strong>Amamentação Sem Lágrimas</strong> foi confirmada.
        </p>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              Oferta exclusiva de pós-compra
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
              Agora que você já tem a base, deixe a amamentação{" "}
              <em className="text-primary">caber na sua vida real</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Aprenda a organizar mamadas, ordenha, armazenamento e retorno à rotina —
              sem improviso e sem se sentir perdida.
            </p>
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Quero adicionar agora <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex-shrink-0 md:w-[340px]">
            <img
              src={ebookCover}
              alt="eBook Amamentação e Rotina Real por Carolina Souza"
              width={800}
              height={1024}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="bg-accent/40 py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            Muitas mães melhoram a pega, mas continuam{" "}
            <em className="text-primary">travadas na rotina</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Você já deu o primeiro passo aprendendo sobre pega e dor. Mas na prática,
            a vida real cobra mais: ordenha, armazenamento, volta ao trabalho, rede de apoio
            com opiniões demais… Sem um plano, a insegurança volta.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-foreground">
            O que muda com o <em className="text-primary">Amamentação e Rotina Real</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Ordenha sem complicação",
                desc: "Técnicas simples que encaixam no seu dia, sem stress.",
              },
              {
                icon: ShieldCheck,
                title: "Armazenamento organizado",
                desc: "Saiba exatamente como guardar e usar o leite com segurança.",
              },
              {
                icon: Star,
                title: "Volta ao trabalho com planejamento",
                desc: "Um plano prático para manter a amamentação mesmo voltando à rotina.",
              },
              {
                icon: Heart,
                title: "Rotina de mamadas com menos caos",
                desc: "Mais previsibilidade, menos ansiedade e mais confiança.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow"
              >
                <div className="bg-accent rounded-lg p-3 flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra benefit */}
          <div className="mt-8 bg-accent/50 border border-border rounded-xl p-6 text-center max-w-2xl mx-auto">
            <Heart className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
              Rede de apoio sem palpites atrapalhando
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aprenda a filtrar conselhos, estabelecer limites e contar com quem realmente ajuda.
            </p>
          </div>
        </div>
      </section>

      {/* What you feel */}
      <section className="bg-accent/40 py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-10 text-foreground">
            Depois desse guia, você vai sentir
          </h2>
          <div className="space-y-4">
            {[
              "Mais previsibilidade na rotina com o bebê",
              "Menos ansiedade para sair de casa ou descansar",
              "Mais confiança para se organizar sem depender de ninguém",
              "Segurança para voltar ao trabalho sem culpa",
              "Clareza sobre o que funciona para você e seu bebê",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card rounded-lg px-5 py-4 border border-border"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Oferta especial — só agora
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Amamentação e Rotina Real
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Guia digital premium para organizar mamadas, ordenha, armazenamento e retorno ao trabalho.
          </p>

          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-muted-foreground line-through text-lg">R$67</span>
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary">R$37</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">
              Valor exclusivo de pós-compra. Essa oferta não estará disponível depois.
            </p>

            <a
              href="#"
              className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity mb-4"
            >
              Sim, quero adicionar Amamentação e Rotina Real
            </a>

            <p className="text-xs text-muted-foreground">
              Acesso imediato · Leia no celular, tablet ou computador · Acesso vitalício
            </p>
          </div>

          <a
            href="#"
            className="inline-block mt-8 text-sm text-muted-foreground underline hover:text-foreground transition-colors"
          >
            Não, obrigada. Quero seguir sem esse complemento.
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} maecomcalma.com.br — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
