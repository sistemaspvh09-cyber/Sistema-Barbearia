
import React from 'react';

const GestODeCuponsECampanhas: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Bar (Mobile & Contextual) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 py-4 max-w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter font-['Plus_Jakarta_Sans']">BarberPro</span>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-8">
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=marketing&screen=dashboard-de-marketing-egrowth">Marketing</a>
<a className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 font-['Plus_Jakarta_Sans'] tracking-tight" href="#">Campaigns</a>
</nav>
<div className="flex items-center gap-3">
<button className="text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-primary/20">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a professional barber with a styled beard and modern haircut in a dimly lit studio environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_HMSnSeKbKLghBAGyeuiwFd38CnLFl-nQk9Ss2h78pmklmZVVdmGDO70oxol9qiL5Q7N1_UK1dMjK1ItGiyM0J2SNqWXftgNBY7v4R0O_p9qTmlNrM8_dmk4Md68evBDMAMUUr_olJlhdrpTQWKD6ZNCrr7mBazNhPV1rMbtU6kieicsN5NnzIXu0vDQiPaX8rdhewrDwzFvToNb02mMmz-WXiB8YxZDazcznWGUU9aV-dU2botmtbVgx77MGMYg4ejgrhhsrOyU"/>
</div>
</div>
</div>
</header>
{/* Side Navigation Bar (Desktop) */}
<aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#1A1919] shadow-2xl py-8 px-4 z-40">
<div className="mb-10 px-4">
<h1 className="text-[#C8FF00] font-black italic text-2xl tracking-tighter">BarberPro</h1>
<p className="text-on-surface-variant text-xs font-medium mt-1">Premium Management</p>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="?module=marketing&screen=dashboard-de-marketing-egrowth">
<span className="material-symbols-outlined">campaign</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Marketing</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">star</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Reviews</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">confirmation_number</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Coupons</span>
</a>
</nav>
<div className="mt-auto flex flex-col gap-2 border-t border-white/5 pt-6">
<button className="mb-4 bg-[#C8FF00] text-[#4f6700] py-3 px-4 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(200,255,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all">
                New Campaign
            </button>
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-white transition-colors" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined">help</span>
<span className="font-medium text-sm">Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-white transition-colors" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium text-sm">Logout</span>
</a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="md:ml-64 pt-24 pb-32 px-6 lg:px-12 min-h-screen">
{/* Header Section */}
<header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-2">Campanhas &amp; Cupons</h2>
<p className="text-on-surface-variant max-w-xl">Gerencie suas promoções sazonais, fidelize clientes com cupons exclusivos e impulsione o faturamento da sua barbearia.</p>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-[1.05] transition-all active:scale-95">
<span className="material-symbols-outlined">add_circle</span>
                Criar Nova Campanha
            </button>
</header>
{/* Bento Grid: Management & Creation */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
{/* Quick Creator Card */}
<section className="lg:col-span-5 bg-surface-container rounded-[2rem] p-8 glass-border relative overflow-hidden group shadow-2xl">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-9xl">confirmation_number</span>
</div>
<h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary-fixed">
                    Gerador de Cupom Rápido
                </h3>
<form className="space-y-6 relative z-10">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Código do Cupom</label>
<input className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed transition-all placeholder:text-white/10 uppercase font-black tracking-widest" placeholder="EX: CORTEVIP20" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Tipo de Valor</label>
<select className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed">
<option>Porcentagem (%)</option>
<option>Valor Fixo (R$)</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Valor</label>
<input className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed" placeholder="20" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Validade</label>
<input className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed" type="date"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Limite de Uso</label>
<input className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed" placeholder="50" type="number"/>
</div>
</div>
<button className="w-full py-4 bg-surface-bright text-primary-fixed font-bold rounded-xl border border-primary-fixed/20 hover:bg-primary-fixed hover:text-on-primary-fixed transition-all" type="button">
                        Ativar Cupom Imediatamente
                    </button>
</form>
</section>
{/* Active Campaigns Highlight */}
<section className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Card 1 */}
<div className="bg-surface-container rounded-[2rem] p-6 glass-border flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
<div>
<div className="flex justify-between items-start mb-4">
<span className="bg-primary-fixed/10 text-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Ativa</span>
<span className="text-on-surface-variant text-xs">Expira em 4 dias</span>
</div>
<h4 className="text-xl font-bold mb-2">Verão BarberPro</h4>
<p className="text-on-surface-variant text-sm mb-6">Desconto progressivo em combos de barba e cabelo para fidelização.</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-2xl font-black text-on-surface">142 <span className="text-xs font-normal text-on-surface-variant">usos</span></span>
<span className="text-primary-fixed font-bold">R$ 2.450,00</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary-fixed h-full w-[70%]" style={{ boxShadow: '0 0 10px rgba(200, 255, 0, 0.5)' }}></div>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container rounded-[2rem] p-6 glass-border flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
<div>
<div className="flex justify-between items-start mb-4">
<span className="bg-primary-fixed/10 text-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Ativa</span>
<span className="text-on-surface-variant text-xs">Recorrente</span>
</div>
<h4 className="text-xl font-bold mb-2">Primeira Vez</h4>
<p className="text-on-surface-variant text-sm mb-6">Cupom automático para novos clientes via app BarberPro.</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-2xl font-black text-on-surface">89 <span className="text-xs font-normal text-on-surface-variant">usos</span></span>
<span className="text-primary-fixed font-bold">R$ 1.120,00</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary-fixed h-full w-[45%]" style={{ boxShadow: '0 0 10px rgba(200, 255, 0, 0.5)' }}></div>
</div>
</div>
</div>
{/* Banner/Stat Card */}
<div className="md:col-span-2 bg-gradient-to-br from-primary-fixed/20 to-transparent rounded-[2rem] p-8 glass-border flex items-center justify-between">
<div>
<span className="text-primary-fixed font-black text-4xl block">+24%</span>
<span className="text-on-surface-variant text-sm uppercase font-bold tracking-widest">Aumento de conversão este mês</span>
</div>
<div className="hidden sm:block">
<img alt="Growth Stats" className="h-20 w-40 opacity-40" data-alt="abstract geometric pattern with rising lines and dots in neon green and black colors symbolizing financial growth and success" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEAT5y0VdlDRGhXM81jnOOjcumIFviYV3Ayc_jAcVbxRPip992bnYP7-sJ5NrDuunTsAjaY-fMfX1_z4RvYSTmKlO6hxXpF0JhtKQ1h7AoBSdnGxgjTIuNaVfVxFZBcSP__ujRm9WlcEsd2bY2dJ2sZPnuNoSQoBXeylAHz7fpKef1E8We9bqyOxsVhCkXLuoj01U7G9mhIDsMFbUX5sJgWp7ZC2thxd-EyFFN49KozN4MtQH9xx27Nh4jYaQD4n5dKC78dW40eZSh"/>
</div>
</div>
</section>
</div>
{/* History Table Section */}
<section className="bg-surface-container rounded-[2rem] p-8 glass-border shadow-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold">Histórico de Campanhas</h3>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-white/5 text-on-surface-variant text-xs font-bold uppercase tracking-widest">
<th className="pb-4 px-4">Campanha</th>
<th className="pb-4 px-4">Código</th>
<th className="pb-4 px-4">Performance</th>
<th className="pb-4 px-4">Data Fim</th>
<th className="pb-4 px-4">Status</th>
<th className="pb-4 px-4 text-right">Ações</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
<td className="py-6 px-4 font-bold">Black Friday 2023</td>
<td className="py-6 px-4"><span className="bg-surface-container-highest px-3 py-1 rounded text-primary-fixed font-mono">BLACK50</span></td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="text-on-surface font-bold">452 usos</span>
<span className="text-error text-[10px] flex items-center"><span className="material-symbols-outlined text-xs">trending_down</span> 4%</span>
</div>
</td>
<td className="py-6 px-4 text-on-surface-variant">30 Nov, 2023</td>
<td className="py-6 px-4">
<span className="bg-secondary-container/30 text-secondary-fixed-dim px-2 py-1 rounded-full text-[10px] font-bold uppercase">Encerrada</span>
</td>
<td className="py-6 px-4 text-right">
<button className="text-on-surface-variant group-hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
<td className="py-6 px-4 font-bold">Aniversário BarberPro</td>
<td className="py-6 px-4"><span className="bg-surface-container-highest px-3 py-1 rounded text-primary-fixed font-mono">BDAY10</span></td>
<td className="py-6 px-4">
<div className="flex items-center gap-2">
<span className="text-on-surface font-bold">210 usos</span>
<span className="text-primary-fixed text-[10px] flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 12%</span>
</div>
</td>
<td className="py-6 px-4 text-on-surface-variant">15 Out, 2023</td>
<td className="py-6 px-4">
<span className="bg-secondary-container/30 text-secondary-fixed-dim px-2 py-1 rounded-full text-[10px] font-bold uppercase">Encerrada</span>
</td>
<td className="py-6 px-4 text-right">
<button className="text-on-surface-variant group-hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>
{/* Bottom Navigation Bar (Mobile only) */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#0D0D0D]/80 backdrop-blur-md md:hidden z-50 rounded-t-[1.5rem] border-t border-[#C8FF00]/15 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Metrics</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110 active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Promos</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors" href="#">
<span className="material-symbols-outlined">thumbs_up_down</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">NPS</span>
</a>
</nav>
{/* Contextual FAB (Only on main dashboard-like screens) */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-primary-container text-on-primary-container rounded-full shadow-[0_10px_40px_rgba(200,255,0,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
</button>

    </div>
  );
};

export default GestODeCuponsECampanhas;
