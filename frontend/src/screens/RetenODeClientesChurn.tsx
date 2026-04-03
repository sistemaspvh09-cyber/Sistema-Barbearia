
import React from 'react';

const RetenODeClientesChurn: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Sidebar Navigation (Desktop) */}
<aside className="fixed left-0 top-0 h-full z-40 h-screen w-64 hidden md:flex flex-col border-r border-[#C8FF00]/10 bg-[#1A1919] shadow-2xl font-['Plus_Jakarta_Sans'] font-medium text-sm">
<div className="p-6">
<h1 className="text-[#C8FF00] font-extrabold text-xl tracking-tighter">BarberPro Admin</h1>
<p className="text-on-surface-variant text-xs mt-1">Unidade Premium</p>
</div>
<nav className="flex-1 px-4 space-y-2 mt-4">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span>
<span>Clientes</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#C8FF00]/10 text-[#C8FF00] border-l-4 border-[#C8FF00] hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">person_remove</span>
<span>Retenção</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">calendar_month</span>
<span>Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Financeiro</span>
</a>
</nav>
<div className="p-4 mt-auto space-y-2">
<button className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(200,255,0,0.2)] hover:scale-105 transition-transform active:scale-95">
                Novo Agendamento
            </button>
<div className="pt-4 border-t border-outline-variant/30">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Configurações</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Sair</span>
</a>
</div>
</div>
</aside>
{/* Top AppBar (Mobile/Web) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-6 h-16 md:pl-72">
<div className="flex items-center gap-4">
<span className="md:hidden text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</span>
<h2 className="hidden md:block font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-[#C8FF00]">Retenção de Clientes</h2>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors scale-95 active:scale-90">notifications</button>
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors scale-95 active:scale-90">account_circle</button>
</div>
</header>
{/* Main Content Canvas */}
<main className="min-h-screen pt-24 pb-32 md:pb-12 px-6 md:pl-72">
{/* Header Section */}
<section className="mb-10">
<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Recuperação de Clientes (Churn)</h1>
<p className="text-on-surface-variant max-w-2xl">Identifique e traga de volta clientes que não visitam a barbearia há algum tempo.</p>
</section>
{/* KPI Bento Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
<div className="glass-card p-6 rounded-3xl group hover:scale-[1.02] transition-transform duration-300">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Clientes Sumidos (30+ dias)</p>
<div className="flex items-end justify-between">
<h3 className="text-4xl font-black text-on-surface">12</h3>
<span className="material-symbols-outlined text-[#C8FF00] opacity-50 group-hover:opacity-100 transition-opacity">running_with_errors</span>
</div>
</div>
<div className="glass-card p-6 rounded-3xl group hover:scale-[1.02] transition-transform duration-300">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Risco Alto (60+ dias)</p>
<div className="flex items-end justify-between">
<h3 className="text-4xl font-black text-on-surface">5</h3>
<span className="material-symbols-outlined text-error opacity-50 group-hover:opacity-100 transition-opacity">warning</span>
</div>
</div>
<div className="glass-card p-6 rounded-3xl group hover:scale-[1.02] transition-transform duration-300">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Possível Perda (90+ dias)</p>
<div className="flex items-end justify-between">
<h3 className="text-4xl font-black text-on-surface">3</h3>
<span className="material-symbols-outlined text-error-dim opacity-50 group-hover:opacity-100 transition-opacity">person_off</span>
</div>
</div>
<div className="glass-card p-6 rounded-3xl bg-primary-container/5 group hover:scale-[1.02] transition-transform duration-300">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Potencial de Recuperação</p>
<div className="flex items-end justify-between">
<h3 className="text-3xl font-black text-[#C8FF00]">R$ 1.200</h3>
<span className="material-symbols-outlined text-[#C8FF00] opacity-100">payments</span>
</div>
</div>
</section>
{/* Filters & Tools */}
<section className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-start md:items-center">
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-primary-container text-on-primary text-xs font-bold uppercase tracking-tighter">Todos</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-tighter hover:text-on-surface transition-colors">30 dias</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-tighter hover:text-on-surface transition-colors">60 dias</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-tighter hover:text-on-surface transition-colors">90 dias</button>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="relative flex-1 md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl pl-10 text-sm focus:ring-1 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant/50" placeholder="Buscar cliente..." type="text"/>
</div>
<button className="p-2 bg-surface-container-high rounded-xl text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</section>
{/* Customer List (Asymmetric Editorial Layout) */}
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/* Client Card 1 */}
<div className="glass-card rounded-3xl overflow-hidden group">
<div className="p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<img className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#C8FF00]/20" data-alt="portrait of a young man with a well-groomed beard and sharp haircut in studio lighting with dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACxzXk-WT3atbrM7qVZ-JOdlrndXJPrQsA_1kG17ZhuTQmJ8bh2RfjRSco_lRqHHO-N9oTiCGAzOHV2tFtu5qPgBSzQbniAdSrEP5kdTzV3n_QtP-E-xeV1RIe6AeZ3amkhy0qZRJDnQfYIO9qQHmln63kDm6hL6PUEY2_ofH1Rl8Qvh8KfA6eCD5QqK8CLPI-rxTCwquRrN20yfalAL0Z5ty0JfrafiXZIjSTVO7W-WAAMsXlL0r-JbyPhQNgH5aAPqL5JfUgVWgN"/>
<div>
<h4 className="font-bold text-lg text-on-surface">Ricardo Almeida</h4>
<span className="text-xs px-2 py-0.5 bg-primary-container/10 text-primary-container rounded-full border border-primary-container/20">Cliente VIP</span>
</div>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Ausente há</p>
<span className="text-xl font-black text-error">45 dias</span>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Última Visita</span>
<span className="text-on-surface font-medium">12 Out, 2023</span>
</div>
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Serviço Comum</span>
<span className="text-on-surface font-medium">Corte + Barba</span>
</div>
</div>
<button className="w-full py-4 bg-[#C8FF00] text-[#4f6700] rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined font-bold">chat</span>
                        Recuperar via WhatsApp
                    </button>
</div>
</div>
{/* Client Card 2 */}
<div className="glass-card rounded-3xl overflow-hidden group">
<div className="p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<img className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#C8FF00]/20" data-alt="professional headshot of a smiling man with textured hair and clean shave against a dark urban backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldhjW_8CPsNGDFBxJlrlVeZWDu8__w9DBqG1U-Xm5Yp1s38uFQtstxzOxkUBUDvrBTW7aSq_PYdLxHR3OXOwyp6ympek1k18DRlfByby1mZGG8BC2ELZz9N484lFzZaIQNYMcnFfAnDbRjhk6gbU9scuWwLGs2iA7f_nvXwCbicVuS-NmL8K4h0GGzZDWxpNSQzc2TY9Ng07uQLAzR0UA3hnPdTvN60sanP5OOGiu7-EsdonKKqbKAEvNlrTy_ff7SOnstXqq7NVQ"/>
<div>
<h4 className="font-bold text-lg text-on-surface">Marcos Oliveira</h4>
<span className="text-xs px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded-full border border-outline-variant/20">Frequente</span>
</div>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Ausente há</p>
<span className="text-xl font-black text-error-dim">72 dias</span>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Última Visita</span>
<span className="text-on-surface font-medium">15 Set, 2023</span>
</div>
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Serviço Comum</span>
<span className="text-on-surface font-medium">Corte Máquina</span>
</div>
</div>
<button className="w-full py-4 bg-[#C8FF00] text-[#4f6700] rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined font-bold">chat</span>
                        Recuperar via WhatsApp
                    </button>
</div>
</div>
{/* Client Card 3 */}
<div className="glass-card rounded-3xl overflow-hidden group">
<div className="p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<img className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#C8FF00]/20" data-alt="fashionable young man with fade haircut and modern style posing in dark cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2x0VT3IRrYt0iaJ8AsDB51_sDI5MBnO_zN9j3cQjqelj0ASmRfJhosRL--8Z4DiNRp1juei4nTbX3jklwHsuy5oZRuar0ClH3kc8nEZy_pi4sTqcmGqqMOYx4xcL4raanDZ-SZt0pgwNuB5zukzkLJ21jgrp1JijmmPahY2OVj2aydsmy_M-mET3u3ZurUFvrVyQAB_opIkwyk-VRtEVy9IwQ_NlywXKYgeK2_xBdbwoyoWTa7mgOHUTBHN-VuqyBSQ-R5uunwIg7"/>
<div>
<h4 className="font-bold text-lg text-on-surface">Lucas Peixoto</h4>
<span className="text-xs px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded-full border border-outline-variant/20">Novo Cliente</span>
</div>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Ausente há</p>
<span className="text-xl font-black text-[#A0A0A0]">32 dias</span>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Última Visita</span>
<span className="text-on-surface font-medium">25 Out, 2023</span>
</div>
<div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Serviço Comum</span>
<span className="text-on-surface font-medium">Combo Premium</span>
</div>
</div>
<button className="w-full py-4 bg-[#C8FF00] text-[#4f6700] rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined font-bold">chat</span>
                        Recuperar via WhatsApp
                    </button>
</div>
</div>
{/* Client Card 4 (Asymmetric sizing/break) */}
<div className="glass-card rounded-3xl overflow-hidden group xl:col-span-2">
<div className="p-6 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<img className="w-16 h-16 rounded-2xl object-cover ring-2 ring-error/20" data-alt="mature man with classic haircut and sophisticated look in moody studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8VgoNU-2EymqxMbVpOQCugLXk9JHwv83pB0GFjPlpWU1fA51JWc3DXgp-vN3sgvtokFe-bPL8jrzO13jokdM5j8PD_U0LotSHVir5dwGj_d7s4N0d9eDRzg-A_PY4KPinbBxWJqi6HKKWERHkYSSnrZabrNU3cYoAgfwcWlG9ZXVk24RwzIaPumz9oBMNeR45kAdhn-lsxxqUw_yatnwCZBCVd-f2Ho3Uy2Da25jh0-EMWUhMvccDzw39eaxgAqDg92o1ROxTBei"/>
<div>
<h4 className="font-bold text-lg text-on-surface">Dr. Roberto Santos</h4>
<span className="text-xs px-2 py-0.5 bg-error/10 text-error rounded-full border border-error/20">Risco Crítico</span>
</div>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Ausente há</p>
<span className="text-xl font-black text-error">104 dias</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-4 italic">"Este cliente costumava vir a cada 15 dias. A ausência de 100+ dias sugere que ele pode ter trocado de barbearia ou se mudado."</p>
</div>
<div className="w-full md:w-64 space-y-4 flex flex-col justify-between">
<div className="bg-surface-container-low p-4 rounded-2xl">
<div className="flex justify-between items-center text-xs mb-2">
<span className="text-on-surface-variant uppercase tracking-wider">Último Gasto</span>
<span className="text-[#C8FF00] font-bold">R$ 180,00</span>
</div>
<div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-[#C8FF00] w-[85%]"></div>
</div>
</div>
<button className="w-full py-4 bg-[#C8FF00] text-[#4f6700] rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined font-bold">chat</span>
                            Recuperar via WhatsApp
                        </button>
</div>
</div>
</div>
</section>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#0D0D0D]/80 backdrop-blur-lg rounded-t-3xl border-t border-[#C8FF00]/15 z-50 flex justify-around items-center px-4 py-3 pb-safe font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-all scale-110 duration-300" href="#">
<span className="material-symbols-outlined">home</span>
<span className="mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(200,255,0,0.4)] transition-all scale-110 duration-300" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="mt-1">Retenção</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-all scale-110 duration-300" href="#">
<span className="material-symbols-outlined">event</span>
<span className="mt-1">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-all scale-110 duration-300" href="#">
<span className="material-symbols-outlined">person</span>
<span className="mt-1">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default RetenODeClientesChurn;
