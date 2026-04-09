const Footer = () => (
  <footer className="py-8 px-4 bg-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} Eduardo Goulart — Orientação financeira pessoal. Atendimento 100% online.
      </p>
    </div>
  </footer>
);

export default Footer;
