import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

// IDs de seção para o IntersectionObserver de seção ativa
const sectionIds = navLinks.map(l => l.href.replace("#", ""));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll progress bar + scrolled state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver — mais preciso que scroll position
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -65% 0px", // ativa quando a seção está no terço superior do viewport
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: scrolled ? "0 1px 24px hsl(222 47% 11% / 0.08)" : "none",
      }}
    >
      {/* ── Scroll Progress Bar ── */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: "var(--emerald-gradient)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs
                        transition-transform duration-200 group-hover:scale-105"
            style={{ background: scrolled ? "var(--hero-gradient)" : "rgba(255,255,255,0.15)" }}
          >
            EG
          </div>
          <span
            className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Eduardo Goulart
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
                {/* Indicador de seção ativa */}
                {isActive(link.href) && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      background: scrolled ? "var(--hero-gradient)" : "white",
                    }}
                  />
                )}
              </a>
            </li>
          ))}

          <li className="ml-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-btn"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold
                         transition-all duration-200 hover:-translate-y-0.5 ${
                scrolled
                  ? "text-white hover:shadow-lg"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25"
              }`}
              style={scrolled ? { background: "var(--hero-gradient)", boxShadow: "0 4px 16px hsl(222 84% 38% / 0.3)" } : {}}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
            scrolled
              ? "text-foreground hover:bg-secondary"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <div className={`transition-all duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </button>
      </nav>

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/96 backdrop-blur-xl border-b border-border/50 px-4 pb-5 pt-2">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-primary/8 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {isActive(link.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center !py-3 !text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
