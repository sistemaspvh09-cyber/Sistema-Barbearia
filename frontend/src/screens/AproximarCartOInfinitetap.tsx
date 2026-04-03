
import React from 'react';

const AproximarCartOInfinitetap: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 flex items-center px-4 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15">
<button className="text-[#C8FF00] hover:opacity-80 transition-opacity active:scale-95 duration-300">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="ml-4 text-xl font-extrabold text-[#C8FF00] font-plus-jakarta-sans tracking-tight">Pagamento</h1>
</header>
<main className="relative h-screen flex flex-col items-center justify-center px-6 pt-16 pb-32">
{/* NFC Interaction Area (Phone Simulation Background) */}
<div className="relative w-full max-w-xs aspect-[9/16] glass-card rounded-[3rem] p-4 flex flex-col items-center overflow-hidden">
{/* Simulated Camera/Sensors */}
<div className="w-24 h-6 bg-surface-container-highest rounded-full mb-8"></div>
{/* Instruction Text */}
<div className="text-center mt-10 z-10">
<p className="text-on-surface-variant font-medium tracking-wide mb-2">InfiniteTap</p>
<h2 className="text-2xl font-extrabold leading-tight">Aproxime o cartão no verso</h2>
</div>
{/* Tap Indicator Area (The Neon Heart) */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-b from-[#C8FF00]/20 to-transparent blur-3xl opacity-50"></div>
<div className="mt-16 flex flex-col items-center justify-center flex-1 w-full relative">
{/* Visual Feedback for Tap */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 rounded-full border-2 border-[#C8FF00]/30 pulse-animation"></div>
<div className="w-64 h-64 rounded-full border border-[#C8FF00]/10 pulse-animation" style={{ animationDelay: '0.5s' }}></div>
</div>
{/* Animated NFC Icon */}
<div className="relative z-10 bg-[#C8FF00] p-6 rounded-full shadow-[0_0_50px_rgba(200,255,0,0.5)]">
<span className="material-symbols-outlined text-[#4f6700] !text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>contactless</span>
</div>
</div>
{/* Hint text */}
<div className="mt-auto mb-10 px-6 text-center z-10">
<p className="text-sm text-on-surface-variant">Posicione o cartão ou celular próximo à parte superior traseira do aparelho.</p>
</div>
</div>
{/* Price Summary & Action */}
<div className="fixed bottom-32 left-0 w-full px-6 flex flex-col gap-4">
<div className="flex items-center justify-between p-5 glass-card rounded-2xl">
<div>
<p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Total a pagar</p>
<p className="text-3xl font-black text-[#C8FF00]">R$ 85,00</p>
</div>
<div className="text-right">
<p className="text-xs text-on-surface-variant">Venda Débito</p>
<p className="text-xs text-on-surface-variant">BarberPro Premium</p>
</div>
</div>
{/* Cancel Button */}
<button className="w-full py-4 rounded-xl border border-error/30 text-error font-bold hover:bg-error/5 transition-colors active:scale-95 duration-300">
                Cancelar Pagamento
            </button>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 bg-[#1A1919]/70 backdrop-blur-xl rounded-t-3xl border-t border-[#C8FF00]/15 shadow-[0_-4px_40px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors cursor-pointer active:scale-105 duration-300">
<span className="material-symbols-outlined">home</span>
<span className="font-plus-jakarta-sans text-[10px] font-medium tracking-tight">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors cursor-pointer active:scale-105 duration-300">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-plus-jakarta-sans text-[10px] font-medium tracking-tight">Agenda</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl px-5 py-2 shadow-[0_0_20px_rgba(200,255,0,0.3)] active:scale-105 duration-300">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>contactless</span>
<span className="font-plus-jakarta-sans text-[10px] font-medium tracking-tight">Pagamentos</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors cursor-pointer active:scale-105 duration-300">
<span className="material-symbols-outlined">person</span>
<span className="font-plus-jakarta-sans text-[10px] font-medium tracking-tight">Perfil</span>
</div>
</nav>
{/* Background Decoration */}
<div className="fixed top-0 right-0 w-96 h-96 bg-[#C8FF00]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="fixed bottom-0 left-0 w-64 h-64 bg-[#C8FF00]/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

    </div>
  );
};

export default AproximarCartOInfinitetap;
