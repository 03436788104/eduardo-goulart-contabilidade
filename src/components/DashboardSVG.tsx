import { useEffect, useRef, useState } from "react";

const DashboardSVG = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[580px] mx-auto animate-float-gentle">
      {/* ── Mockup Glass Card ── */}
      <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/10]">
        
        {/* Top bar */}
        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>

        {/* Content area */}
        <div className="p-6 h-full flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-white/10 rounded-full animate-pulse" />
              <div className="h-6 w-36 bg-white/20 rounded-full" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            </div>
          </div>

          {/* Mini Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="h-2 w-12 bg-white/10 rounded-full" />
              <div className="h-4 w-20 bg-emerald-400/30 rounded-full" />
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="h-2 w-12 bg-white/10 rounded-full" />
              <div className="h-4 w-20 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="flex-1 w-full bg-white/5 rounded-2xl p-4 flex flex-col gap-3">
             <div className="flex justify-between">
                <div className="h-2 w-16 bg-white/10 rounded-full" />
                <div className="h-2 w-8 bg-white/10 rounded-full" />
             </div>
             <div className="flex-1 flex items-end gap-2 pb-2">
                {[40, 70, 45, 90, 65, 80, 55, 95, 75, 60].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-emerald-500/40 to-emerald-400/80 rounded-t-sm transition-all duration-1000"
                    style={{ 
                      height: inView ? `${h}%` : '0%',
                      transitionDelay: `${i * 100}ms` 
                    }}
                  />
                ))}
             </div>
          </div>
        </div>

        {/* Floating elements above mockup */}
        <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl animate-float">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">✓</div>
              <div className="space-y-1">
                 <p className="text-[10px] text-white/50 font-bold uppercase">Última ação</p>
                 <p className="text-xs text-white font-bold">Reserva de emergência +R$ 450</p>
              </div>
           </div>
        </div>

        <div className="absolute -bottom-4 -left-6 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl animate-float-gentle" style={{ animationDelay: '2s' }}>
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">!</div>
              <div className="space-y-1">
                 <p className="text-[10px] text-white/50 font-bold uppercase">Alerta de gastos</p>
                 <p className="text-xs text-white font-bold">Lazer atingiu 85% do limite</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSVG;
