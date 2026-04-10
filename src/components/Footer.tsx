import { MessageCircle, Instagram, Mail, Shield } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => (
  <footer className="bg-foreground py-14 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Grid superior */}
      <div className="grid md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-white/10">

        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: "var(--emerald-gradient)" }}
            >
              EG
            </div>
            <div>
              <p className="font-extrabold text-white text-base tracking-tight">Eduardo Goulart</p>
              <p className="text-white/40 text-xs">Orientação Financeira Pessoal</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            Ajudando pessoas a organizarem suas finanças, saírem das dívidas e construírem um futuro financeiro mais seguro.
          </p>
          <div className="flex items-center gap-1.5 text-white/40 text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>Atendimento ético e transparente</span>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <p className="text-white/70 font-bold text-xs uppercase tracking-widest mb-4">Navegação</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="text-white/70 font-bold text-xs uppercase tracking-widest mb-4">Contato</p>
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </div>
              WhatsApp
            </a>
            <a
              href="mailto:eduardo@exemplo.com"
              className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <Mail className="w-4 h-4 text-white/50 group-hover:text-white" />
              </div>
              E-mail
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-white" />
              </div>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
        <p>© {new Date().getFullYear()} Eduardo Goulart — Todos os direitos reservados.</p>
        <p>Desenvolvido com foco em conversão · Atendimento 100% online.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
