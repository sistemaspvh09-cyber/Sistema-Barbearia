
import React from 'react';

const GerarPixValor: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="flex items-center justify-between px-4 h-16 w-full fixed top-0 z-50 border-b border-white/10 glass-header">
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95 transition-all text-on-surface">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="text-xl font-extrabold tracking-tight text-[#C8FF00] font-headline">Gerar Cobrança Pix</h1>
</div>
<div className="w-10"></div> {/* Spacer for symmetry */}
</header>
{/* Main Content Canvas */}
<main className="flex-1 flex flex-col pt-16 pb-40">
{/* Value Display Area */}
<section className="flex-1 flex flex-col items-center justify-center px-6">
<div className="text-on-surface-variant text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                VALOR DA COBRANÇA
            </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-on-surface/40">R$</span>
<div className="text-6xl font-extrabold tracking-tighter text-on-surface flex items-center">
                    0,00<span className="cursor-pulsing"></span>
</div>
</div>
{/* Quick Chips */}
<div className="flex gap-3 mt-12">
<button className="px-4 py-2 rounded-full bg-surface-container border border-white/5 text-sm font-semibold hover:bg-surface-bright active:scale-95 transition-all text-on-surface">
                    + R$ 10
                </button>
<button className="px-4 py-2 rounded-full bg-surface-container border border-white/5 text-sm font-semibold hover:bg-surface-bright active:scale-95 transition-all text-on-surface">
                    + R$ 50
                </button>
<button className="px-4 py-2 rounded-full bg-surface-container border border-white/5 text-sm font-semibold hover:bg-surface-bright active:scale-95 transition-all text-on-surface">
                    + R$ 100
                </button>
</div>
</section>
{/* Custom Numeric Keyboard & Action */}
<section className="px-4 pb-24">
{/* Action Button */}
<div className="mb-6">
<button className="w-full h-16 bg-[#C8FF00] text-[#0D0D0D] rounded-2xl font-extrabold text-lg shadow-[0_0_30px_rgba(200,255,0,0.2)] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    Continuar
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
</button>
</div>
{/* Modern Calculator Keyboard */}
<div className="grid grid-cols-3 gap-2">
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">1</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">2</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">3</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">4</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">5</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">6</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">7</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">8</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">9</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">,</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">0</button>
<button className="h-16 flex items-center justify-center text-2xl font-bold bg-surface-container-low rounded-xl active-scale hover:bg-surface-container-high text-on-surface">
<span className="material-symbols-outlined text-3xl">backspace</span>
</button>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-6 pb-safe bg-[#1A1919]/70 backdrop-blur-xl z-50 rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<button className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium">Agendas</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-3 py-1 scale-110 duration-300">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium">Pagamentos</span>
</button>
<button className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium">Perfil</span>
</button>
</nav>
{/* Background Decoration for Premium Feel */}
<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute -top-[20%] -right-[10%] w-[60%] h-[40%] bg-[#C8FF00]/5 blur-[120px] rounded-full"></div>
<div className="absolute top-[40%] -left-[20%] w-[50%] h-[50%] bg-[#C8FF00]/3 blur-[100px] rounded-full"></div>
</div>

    </div>
  );
};

export default GerarPixValor;
