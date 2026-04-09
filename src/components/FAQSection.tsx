import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const faqs = [
  {
    q: "Pra quem é esse serviço?",
    a: "Para qualquer pessoa física que queira organizar suas finanças, sair de dívidas ou ter mais controle sobre seu dinheiro. Não atendo empresas.",
  },
  {
    q: "Como funciona o atendimento?",
    a: "Tudo é feito 100% online via WhatsApp. Você me conta sua situação, eu analiso e crio um plano personalizado. Depois, te acompanho na execução.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Depende da sua situação, mas a maioria dos clientes percebe mudanças já no primeiro mês de organização. O planejamento de dívidas costuma mostrar resultados em 2 a 3 meses.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Pix, transferência bancária ou a combinar, de acordo com a sua necessidade.",
  },
  {
    q: "Você é contador formado?",
    a: "Estou no último semestre de Ciências Contábeis. Atuo com suporte, organização e orientação financeira pessoal — sempre com transparência sobre minha atuação.",
  },
  {
    q: "E o Imposto de Renda?",
    a: "Ajudo na organização dos documentos e tiro dúvidas sobre o processo. Não assino declarações nem assumo responsabilidade técnica, mas garanto que você vai se sentir muito mais seguro.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Dúvidas? A gente responde</h2>
        <p className="fade-up section-subtitle text-center mb-12">As perguntas mais comuns sobre o atendimento</p>

        <div className="fade-up">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card !p-0 overflow-hidden border-border/50"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-foreground font-semibold hover:no-underline text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="fade-up text-center mt-12">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas? Fale diretamente comigo.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
