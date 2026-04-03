
import React from 'react';

const MeusBenefCiosEPontos: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/15 shadow-[0px_40px_8px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-[#C8FF00]/30 hover:scale-105 transition-transform duration-300">
<img alt="Foto de perfil do cliente" className="w-full h-full object-cover" data-alt="close-up portrait of a stylish man with a well-groomed beard and modern haircut in dramatic low-key lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1HVE2xi2m1wEpArRz3R2Qe5queDv2yS38CMAxlpMkywulLinKmMR1fujBHb_rH_QLc7-TE1GF3Hdwu8mndcN5OMoDOFbtrIbgeoQhtqMyGwPyZi6p-yLb_NSEGdGGSA3JZq_DEssR9-9TYevLwLI4QzHPfPlbj29FBmm-5xBUbCzQyXnrMWfAVwWBXsVRaCg-LG2h27q-3Owh7x3jb6DTLJ2ef49jP8Fyza1aRdzpRuGV9Z8aEY2lqZxlOx30YsZ-zY0SunjNse-N"/>
</div>
<h1 className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-white">Olá, Bruno</h1>
</div>
<div className="flex items-center gap-4">
<span className="text-xl font-black text-[#C8FF00]">BarberPro</span>
<button className="material-symbols-outlined text-[#C8FF00] hover:scale-105 transition-transform duration-300">notifications</button>
</div>
</header>
<main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
{/* Main Rewards Header */}
<section>
<h2 className="text-4xl font-extrabold tracking-tighter mb-2">Clube BarberPro</h2>
<p className="text-on-surface-variant text-sm">Sua fidelidade transformada em estilo e benefícios exclusivos.</p>
</section>
{/* Points Balance Card (Bento Style) */}
<section className="relative overflow-hidden rounded-[24px] bg-surface-container-highest p-8 neon-glow border border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C8FF00]/10 blur-[60px] rounded-full -mr-10 -mt-10"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-[#C8FF00] text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<p className="text-on-surface-variant font-medium uppercase tracking-[0.2em] text-xs mb-1">Saldo Total</p>
<div className="flex items-baseline gap-2">
<span className="text-7xl font-black text-white">120</span>
<span className="text-[#C8FF00] font-bold text-xl">PTS</span>
</div>
<div className="mt-6 w-full bg-white/5 h-2 rounded-full overflow-hidden">
<div className="bg-[#C8FF00] h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
</div>
<p className="mt-3 text-[10px] text-on-surface-variant uppercase tracking-wider">Você está a 30 pontos do próximo resgate VIP</p>
</div>
</section>
{/* Available Rewards */}
<section>
<div className="flex justify-between items-end mb-6">
<h3 className="text-xl font-bold">Prêmios Disponíveis</h3>
<span className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest">Ver Tudo</span>
</div>
<div className="grid grid-cols-1 gap-4">
{/* Reward 1 */}
<div className="glass-card rounded-xl p-4 flex items-center justify-between group active:scale-95 transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-white/5 group-hover:border-[#C8FF00]/30 transition-colors">
<span className="material-symbols-outlined text-2xl text-on-surface">sports_bar</span>
</div>
<div>
<h4 className="font-bold text-white text-base">Cerveja Heineken</h4>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-[#C8FF00]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="text-xs text-on-surface-variant">50 pts</span>
</div>
</div>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider hover:scale-105 transition-transform active:scale-95">Resgatar</button>
</div>
{/* Reward 2 */}
<div className="glass-card rounded-xl p-4 flex items-center justify-between group active:scale-95 transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-white/5 group-hover:border-[#C8FF00]/30 transition-colors">
<span className="material-symbols-outlined text-2xl text-on-surface">sanitizer</span>
</div>
<div>
<h4 className="font-bold text-white text-base">Pomada Matte</h4>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-[#C8FF00]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="text-xs text-on-surface-variant">100 pts</span>
</div>
</div>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider hover:scale-105 transition-transform active:scale-95">Resgatar</button>
</div>
{/* Reward 3 (Locked/Progress) */}
<div className="glass-card rounded-xl p-4 flex items-center justify-between opacity-70 group">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-2xl text-on-surface">content_cut</span>
</div>
<div className="absolute -top-1 -right-1 bg-surface-dim rounded-full p-0.5 border border-white/10">
<span className="material-symbols-outlined text-[10px] text-error">lock</span>
</div>
</div>
<div>
<h4 className="font-bold text-white text-base">Corte Degradê</h4>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="text-xs text-on-surface-variant">150 pts</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[10px] text-error font-black uppercase tracking-widest mb-1">Faltam 30 pts</span>
<div className="w-20 bg-white/5 h-1 rounded-full">
<div className="bg-error h-full w-[80%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
{/* Points History */}
<section className="pb-8">
<h3 className="text-xl font-bold mb-6">Histórico de pontos</h3>
<div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
{/* Entry 1 */}
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border border-[#C8FF00]/30 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#C8FF00]"></div>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-bold text-white">Corte de Cabelo + Barba</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider">12 Jan, 2024 • 14:30</p>
</div>
<span className="text-[#C8FF00] font-bold text-sm">+45 PTS</span>
</div>
</div>
{/* Entry 2 */}
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border border-white/10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-on-surface-variant/30"></div>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-bold text-white">Compra de Balm Signature</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider">05 Jan, 2024 • 18:15</p>
</div>
<span className="text-[#C8FF00] font-bold text-sm">+25 PTS</span>
</div>
</div>
{/* Entry 3 */}
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border border-white/10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-on-surface-variant/30"></div>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-bold text-white">Corte de Cabelo</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider">22 Dez, 2023 • 10:00</p>
</div>
<span className="text-[#C8FF00] font-bold text-sm">+30 PTS</span>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full rounded-t-[24px] z-50 bg-[#1A1919]/70 backdrop-blur-xl border-t border-white/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center h-20 px-4 pb-safe w-full">
<button className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C8FF00] drop-shadow-[0_0_10px_rgba(200,255,0,0.4)] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider">Pontos</span>
</button>
<button className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
<span className="material-symbols-outlined">history</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider">Histórico</span>
</button>
<button className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider">Perfil</span>
</button>
</nav>

    </div>
  );
};

export default MeusBenefCiosEPontos;
