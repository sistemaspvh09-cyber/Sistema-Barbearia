
import React from 'react';

const PagamentosMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex justify-between items-center px-6 h-16">
<button className="active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 transition-transform duration-300">
<span className="material-symbols-outlined text-[#C8FF00]">menu</span>
</button>
<h1 className="text-xl font-black text-[#C8FF00] font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight">Pagamentos</h1>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8FF00]/30">
<img alt="Foto de Perfil do Barbeiro" className="w-full h-full object-cover" data-alt="Portrait of a professional barber with a confident expression, soft studio lighting, modern minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHaOFGfpAEnJoDPE0RRwopOOQnsrk0kPaZU-Qo51FITiWpTej0yoXohmfErqy4Z48ucaJpYAo8J9Km2ZsYfQYIusKF-aTO3B68K4b5HwKmVsHGRBy5xUiCqAx0uW21UqYclDXyGLyertjk9xNH_CnqHCdWLhqpqgv5W9cOXCor6m1UA7u9edQuf154oiJQFQ_JzPQEp6uZZ8icrHdg29c8TWRRKX_8wrkeNRhgw9OLKTsn8GeVm6nqCiZBYDbYmbXs3lX1abG6LmI"/>
</div>
</div>
</header>
<main className="pt-24 px-6 space-y-8">
{/* Balance Card */}
<section className="relative overflow-hidden rounded-3xl p-8 surface-container glass-card shadow-2xl">
<div className="absolute top-0 right-0 p-4">
<div className="flex items-center gap-2 bg-[#C8FF00]/10 px-3 py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse"></span>
<span className="text-[10px] font-bold text-[#C8FF00] uppercase tracking-widest">Conectado</span>
</div>
</div>
<div className="space-y-1">
<p className="text-on-surface-variant text-sm font-medium">Saldo Disponível</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-bold text-on-surface">R$</span>
<h2 className="text-5xl font-extrabold text-[#C8FF00] tracking-tighter">12.450,80</h2>
</div>
</div>
<div className="mt-8 flex gap-4">
<div className="flex-1 bg-surface-container-high rounded-2xl p-4 border border-[#C8FF00]/5">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">A Receber</p>
<p className="text-lg font-bold">R$ 3.120,00</p>
</div>
<div className="flex-1 bg-surface-container-high rounded-2xl p-4 border border-[#C8FF00]/5">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Últimos 7 dias</p>
<p className="text-lg font-bold text-[#C8FF00]">+12%</p>
</div>
</div>
</section>
{/* Quick Actions Grid */}
<section className="grid grid-cols-3 gap-4">
<button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl surface-container-low hover:scale-105 active:scale-95 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center group-hover:bg-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined text-[#C8FF00] group-hover:text-[#4f6700]">qr_code_2</span>
</div>
<span className="text-[10px] font-bold text-center leading-tight">Gerar Pix</span>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl surface-container-low hover:scale-105 active:scale-95 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center group-hover:bg-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined text-[#C8FF00] group-hover:text-[#4f6700]">link</span>
</div>
<span className="text-[10px] font-bold text-center leading-tight">Link de Pagamento</span>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl surface-container-low hover:scale-105 active:scale-95 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center group-hover:bg-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined text-[#C8FF00] group-hover:text-[#4f6700]">contactless</span>
</div>
<span className="text-[10px] font-bold text-center leading-tight">Cobrar Cartão</span>
</button>
</section>
{/* Recent Transactions */}
<section className="space-y-6">
<div className="flex justify-between items-center">
<h3 className="text-lg font-extrabold tracking-tight">Transações Recentes</h3>
<button className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest">Ver tudo</button>
</div>
<div className="space-y-3">
{/* Item 1 */}
<div className="flex items-center justify-between p-4 rounded-2xl surface-container-low border border-outline-variant/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">photos</span>
</div>
<div>
<p className="font-bold text-sm">Ricardo Oliveira</p>
<p className="text-[10px] text-on-surface-variant">Hoje, 14:30 • Pix</p>
</div>
</div>
<div className="text-right">
<p className="font-extrabold text-sm text-on-surface">R$ 85,00</p>
<span className="inline-block px-2 py-0.5 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-[8px] font-black uppercase">Pago</span>
</div>
</div>
{/* Item 2 */}
<div className="flex items-center justify-between p-4 rounded-2xl surface-container-low border border-outline-variant/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
</div>
<div>
<p className="font-bold text-sm">Marcos Silva</p>
<p className="text-[10px] text-on-surface-variant">Hoje, 12:15 • Crédito</p>
</div>
</div>
<div className="text-right">
<p className="font-extrabold text-sm text-on-surface">R$ 120,00</p>
<span className="inline-block px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[8px] font-black uppercase">Pendente</span>
</div>
</div>
{/* Item 3 */}
<div className="flex items-center justify-between p-4 rounded-2xl surface-container-low border border-outline-variant/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">payments</span>
</div>
<div>
<p className="font-bold text-sm">Lucas Ferreira</p>
<p className="text-[10px] text-on-surface-variant">Ontem, 18:45 • Dinheiro</p>
</div>
</div>
<div className="text-right">
<p className="font-extrabold text-sm text-on-surface">R$ 45,00</p>
<span className="inline-block px-2 py-0.5 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-[8px] font-black uppercase">Pago</span>
</div>
</div>
{/* Item 4 */}
<div className="flex items-center justify-between p-4 rounded-2xl surface-container-low border border-outline-variant/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">photos</span>
</div>
<div>
<p className="font-bold text-sm">Andre Santos</p>
<p className="text-[10px] text-on-surface-variant">Ontem, 16:20 • Pix</p>
</div>
</div>
<div className="text-right">
<p className="font-extrabold text-sm text-on-surface">R$ 210,00</p>
<span className="inline-block px-2 py-0.5 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-[8px] font-black uppercase">Pago</span>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full rounded-t-3xl z-50 bg-[#1A1919]/70 backdrop-blur-xl border-t border-[#C8FF00]/15 shadow-2xl">
<div className="flex justify-around items-center h-20 px-4 pb-safe">
{/* Início */}
<button className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90 transition-transform duration-300">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px]">Início</span>
</button>
{/* Agenda */}
<button className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90 transition-transform duration-300">
<span className="material-symbols-outlined mb-1">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px]">Agenda</span>
</button>
{/* Pagos (Active) */}
<button className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl px-5 py-2 shadow-[0_0_20px_rgba(200,255,0,0.4)] active:scale-90 transition-transform duration-300">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px]">Pagos</span>
</button>
{/* Perfil */}
<button className="flex flex-col items-center justify-center text-[#A0A0A0] px-5 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90 transition-transform duration-300">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px]">Perfil</span>
</button>
</div>
</nav>

    </div>
  );
};

export default PagamentosMobile;
