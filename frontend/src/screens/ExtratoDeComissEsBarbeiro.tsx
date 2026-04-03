
import React from 'react';

const ExtratoDeComissEsBarbeiro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="bg-[#0D0D0D]/70 backdrop-blur-xl text-[#C8FF00] font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight fixed top-0 w-full z-50 border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-2xl active:scale-95 transition-transform" data-icon="menu">menu</span>
<h1 className="text-xl font-black text-[#C8FF00]">Comissões</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border border-[#C8FF00]/30 active:scale-95 transition-transform">
<img alt="Foto de perfil do barbeiro" className="w-full h-full object-cover" data-alt="Close-up profile photo of a stylish modern barber with a groomed beard and tattoos, wearing a professional black apron in a high-end studio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJVQjvU8PYcDg43_pjS5B-Zs9YiLVdd2SR3GUmPlwCb70cKJLdsPLR55pLMd_oA477gT4i6d00tvEVEMFgjmoKJqh2rImO9l6C97uAZvrita4eBTVnMPBTI7NxumBr7b-gzlio7jARLD_yAdugUi8yRKR0YYnvBWQZrYh5O1mWTkDkYPdmgA7IoLDTF9qEF7QkSdYYGbzNcvZFroEFdOLXNdpo7lS0K9nF776VkA7Rwkn7pt9biDvqipyCBKQf0VumzOvC2ch6KAh"/>
</div>
</header>
<main className="pt-24 px-6 max-w-md mx-auto space-y-8">
{/* KPI Bento Grid */}
<section className="grid grid-cols-2 gap-4">
<div className="glass-card p-5 rounded-2xl flex flex-col justify-between h-40">
<div>
<span className="material-symbols-outlined text-[#C8FF00] mb-2" data-icon="pending_actions">pending_actions</span>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Minha Comissão (Pendente)</p>
</div>
<div className="mt-2">
<p className="text-2xl font-black text-[#C8FF00] tracking-tight">R$ 1.420,00</p>
<p className="text-[10px] text-on-surface-variant font-medium mt-1">Estimado para 48h</p>
</div>
</div>
<div className="bg-[#1A1919] p-5 rounded-2xl flex flex-col justify-between h-40 border border-white/5">
<div>
<span className="material-symbols-outlined text-primary-fixed mb-2" data-icon="account_balance_wallet">account_balance_wallet</span>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Total Recebido (Mês)</p>
</div>
<div className="mt-2">
<p className="text-2xl font-black text-white tracking-tight">R$ 5.890,50</p>
<div className="flex items-center gap-1 text-[#C8FF00] mt-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
<p className="text-[10px] font-bold">+12% vs abr</p>
</div>
</div>
</div>
</section>
{/* Quick Action Button */}
<button className="w-full bg-[#C8FF00] py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-[0_0_25px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined text-[#4f6700] font-bold" data-icon="account_balance">account_balance</span>
<span className="text-[#4f6700] font-extrabold uppercase tracking-wider text-sm">Ver Detalhes do Pagamento</span>
</button>
{/* Transactions List */}
<section className="space-y-4">
<div className="flex justify-between items-end mb-2 px-1">
<h2 className="text-lg font-black tracking-tight text-white uppercase italic">Transações Recentes</h2>
<p className="text-xs text-[#C8FF00] font-bold">Maio 2024</p>
</div>
{/* Transaction Item 1 */}
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4 active:scale-[0.98] transition-transform">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#C8FF00] border border-[#C8FF00]/10">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold text-white">Corte Degradê + Barba</h3>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 font-bold uppercase">Disponível</span>
</div>
<p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Hoje, 14:30 • Total R$ 85,00</p>
<div className="flex items-center gap-2 mt-2">
<p className="text-sm font-black text-[#C8FF00]">Comissão: R$ 42,50</p>
</div>
</div>
</div>
{/* Transaction Item 2 */}
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant border border-white/5">
<span className="material-symbols-outlined" data-icon="shutter_speed">shutter_speed</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold text-white">Coloração Premium</h3>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase">Processando</span>
</div>
<p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Hoje, 11:15 • Total R$ 120,00</p>
<div className="flex items-center gap-2 mt-2">
<p className="text-sm font-black text-white/90">Comissão: R$ 60,00</p>
</div>
</div>
</div>
{/* Transaction Item 3 */}
<div className="bg-surface-container-low/50 p-4 rounded-2xl border border-white/5 flex items-center gap-4 opacity-80">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant border border-white/5">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold text-white">Corte Kids</h3>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-on-surface-variant border border-white/10 font-bold uppercase">Paga</span>
</div>
<p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Ontem, 17:45 • Total R$ 50,00</p>
<div className="flex items-center gap-2 mt-2">
<p className="text-sm font-black text-white/60 line-through">Comissão: R$ 25,00</p>
</div>
</div>
</div>
{/* Transaction Item 4 */}
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#C8FF00] border border-[#C8FF00]/10">
<span className="material-symbols-outlined" data-icon="face_retouching_natural">face_retouching_natural</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold text-white">Limpeza de Pele</h3>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 font-bold uppercase">Disponível</span>
</div>
<p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Ontem, 14:00 • Total R$ 65,00</p>
<div className="flex items-center gap-2 mt-2">
<p className="text-sm font-black text-[#C8FF00]">Comissão: R$ 32,50</p>
</div>
</div>
</div>
</section>
{/* Footer Visual Hint */}
<div className="flex flex-col items-center gap-4 py-8">
<div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest text-center">Pagamentos processados via InfinitePay</p>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-on-surface-variant" data-icon="verified_user">verified_user</span>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-on-surface-variant" data-icon="security">security</span>
</div>
</div>
</div>
</main>
{/* BottomNavBar */}
<nav className="bg-[#1A1919]/80 backdrop-blur-lg fixed bottom-0 w-full rounded-t-[24px] z-50 border-t border-[#C8FF00]/10 shadow-[0_-10px_40px_rgba(200,255,0,0.05)] flex justify-around items-center h-20 pb-safe px-2">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-all duration-300 active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-2xl px-4 py-2 shadow-[0_0_15px_rgba(200,255,0,0.2)] active:scale-90 transition-transform cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="payments" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Comissões</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-all duration-300 active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Serviços</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-all duration-300 active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default ExtratoDeComissEsBarbeiro;
