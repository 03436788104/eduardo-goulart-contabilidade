import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Aparece após 3 segundos de permanência
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Mostra tooltip após 8s para chamar atenção passiva
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 8000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 14000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Tooltip persuasivo */}
      {showTooltip && (
        <div className="animate-slide-down flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl max-w-[220px] text-right">
          <div>
            <p className="text-foreground text-xs font-bold">Dúvidas?</p>
            <p className="text-muted-foreground text-xs leading-tight">
              Me chame agora. Respondo em minutos!
            </p>
          </div>
          {/* Seta apontando para o botão */}
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-border rotate-180 absolute -bottom-2 right-7" />
        </div>
      )}

      {/* Botão principal com pulse ring */}
      <div className="relative">
        {/* Anel pulsante */}
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          id="floating-whatsapp-btn"
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white
                     shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
