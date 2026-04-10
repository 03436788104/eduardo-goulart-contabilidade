import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Search, HelpCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Tenho%20uma%20d%C3%BAvida%20que%20n%C3%A3o%20estava%20no%20FAQ.";

type FAQCategory = "geral" | "atendimento" | "resultado" | "pagamento";

interface FAQ {
  q: string;
  a: string;
  category: FAQCategory;
}

const faqs: FAQ[] = [
  {
    category: "geral",
    q: "Pra quem é esse serviço?",
    a: "Para qualquer pessoa física que queira organizar suas finanças, sair de dívidas ou ter mais controle sobre o próprio dinheiro. Eduardo não atende empresas — o foco é exclusivamente em finanças pessoais.",
  },
  {
    category: "geral",
    q: "É diferente de uma consultoria de investimentos?",
    a: "Sim. O foco aqui é organização financeira: controle de gastos, plano para sair de dívidas e educação financeira prática. Não há indicação nem gestão de carteira de investimentos.",
  },
  {
    category: "atendimento",
    q: "Como funciona o atendimento?",
    a: "Tudo 100% online via WhatsApp. Você me conta sua situação, eu analiso e crio um plano personalizado. Depois te acompanho na execução mês a mês para garantir que o plano está funcionando.",
  },
  {
    category: "atendimento",
    q: "Preciso enviar documentos ou extratos?",
    a: "Não é obrigatório, mas ajuda muito. Quanto mais informação você compartilhar sobre sua situação real, mais preciso será o diagnóstico e o plano de ação.",
  },
  {
    category: "atendimento",
    q: "Eduardo é contador formado?",
    a: "Está no último semestre de Ciências Contábeis, com formação técnica sólida. O atendimento é focado em orientação, organização e planejamento financeiro pessoal — sempre com total transparência sobre a atuação.",
  },
  {
    category: "resultado",
    q: "Em quanto tempo vejo resultados?",
    a: "A maioria dos clientes percebe mudanças concretas já no primeiro mês de organização. Para planejamento de dívidas, os resultados mais expressivos costumam aparecer de 2 a 3 meses.",
  },
  {
    category: "resultado",
    q: "E o Imposto de Renda?",
    a: "Eduardo auxilia na organização dos documentos e esclarece dúvidas sobre o processo. Ele não assina declarações nem assume responsabilidade técnica, mas você vai se sentir muito mais seguro e preparado na hora de declarar.",
  },
  {
    category: "resultado",
    q: "Funciona se eu já estiver muito endividado?",
    a: "Sim — aliás, é exatamente para isso que o serviço foi pensado. O plano identifica as dívidas de maior custo, prioriza o que atacar primeiro e cria uma estratégia viável para sair do vermelho mesmo com orçamento apertado.",
  },
  {
    category: "pagamento",
    q: "Quais as formas de pagamento?",
    a: "Pix e transferência bancária. Os valores e condições são combinados diretamente após o diagnóstico inicial, de acordo com o serviço e o perfil de cada cliente.",
  },
  {
    category: "pagamento",
    q: "Existe algum serviço gratuito?",
    a: "O primeiro contato e o diagnóstico inicial são totalmente gratuitos e sem compromisso. Eduardo avalia sua situação e apresenta o que pode ser feito antes de qualquer cobrança.",
  },
];

const categories: { id: FAQCategory | "todas"; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "geral", label: "Geral" },
  { id: "atendimento", label: "Atendimento" },
  { id: "resultado", label: "Resultados" },
  { id: "pagamento", label: "Pagamento" },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "todas">("todas");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchCategory = activeCategory === "todas" || faq.category === activeCategory;
    const matchSearch = search.trim() === "" ||
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="fade-up text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
          <p className="section-subtitle">
            Respostas directas para as dúvidas mais comuns. Não achou a sua?
            <strong className="text-foreground"> Fale pelo WhatsApp.</strong>
          </p>
        </div>

        {/* Busca */}
        <div className="fade-up mb-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              id="faq-search"
              placeholder="Buscar dúvida..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-premium pl-11"
            />
          </div>
        </div>

        {/* Filtros por categoria */}
        <div className="fade-up flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-white shadow-sm"
                  : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: "var(--hero-gradient)" }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="fade-up">
          {filtered.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card !p-0 overflow-hidden !border-border/50 !rounded-2xl"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-foreground font-semibold hover:no-underline text-base [&>svg]:text-primary">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed text-sm">
                    <div className="border-l-2 border-border pl-4">
                      {faq.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">Nenhuma dúvida encontrada para "{search}"</p>
              <p className="text-sm mt-1">Tente outra palavra-chave ou fale diretamente pelo WhatsApp.</p>
            </div>
          )}
        </div>

        {/* CTA footer */}
        <div className="fade-up text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Sua dúvida não está aqui? Fale diretamente comigo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar dúvida pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
