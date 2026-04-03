
import React from 'react';

const PainelBarbeiroMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a male barber with a well-groomed beard in a modern dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkUqKUHK2mqW2dUjP7gsVLqeRfd_q052mr5ozdevF_ayRYZdPgU_MQY5-g7C-Gg5glx37Kof6YCMO56svAMHCCQ5NKz1_gkIrtLF_dFyk-wq9St7j_DxEpplXKHKtVFOfTFjH86JvtdApJFYghMkgF-1T7FMzgWl3QBOc4O0-ZXun0CgiVi4vQJ045aAMZpLmR9vHBpy_bK-MXmW3fX8QGhH0cLUWyoPCzqYvhRjZB9UkO4HcwPJDjbTqewH-ctFmEWuPbERSJ7ucA"/>
</div>
<div className="flex flex-col">
<span className="text-xl font-black text-[#C8FF00] italic leading-none font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</span>
<span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Master Barber</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-[#A0A0A0] hover:opacity-80 transition-opacity duration-300">
<span className="material-symbols-outlined text-2xl" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="mt-20 px-6 space-y-8">
{/* Header Greeting */}
<section className="flex flex-col gap-1">
<h1 className="text-2xl font-extrabold tracking-tight text-on-surface">Bom dia, Carlos</h1>
<div className="flex items-center gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20 tracking-wider uppercase">Senior Barber Gold</span>
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-on-surface-variant font-medium">Disponível agora</span>
</div>
</section>
{/* KPI Cards - Bento Style */}
<section className="grid grid-cols-2 gap-4">
<div className="col-span-2 glass-card p-5 rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="payments">payments</span>
</div>
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Receita Mensal</p>
<h3 className="text-3xl font-black text-primary tracking-tighter">R$ 8.420,50</h3>
<div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-400">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span>+12.5% vs mês anterior</span>
</div>
</div>
<div className="glass-card p-5 rounded-3xl">
<p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-1">Agendamentos</p>
<div className="flex items-baseline gap-1">
<h3 className="text-2xl font-black text-on-surface">42</h3>
<span className="text-on-surface-variant text-xs font-medium">Hoje</span>
</div>
<div className="mt-2 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full w-[85%] rounded-full"></div>
</div>
</div>
<div className="glass-card p-5 rounded-3xl">
<p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-1">Comissão (30%)</p>
<h3 className="text-2xl font-black text-on-surface">R$ 2.526</h3>
<p className="text-[10px] text-on-surface-variant font-medium mt-1">Previsão para dia 05</p>
</div>
</section>
{/* InfinitePay Card */}
<section className="glass-card p-6 rounded-3xl border-l-4 border-primary">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-on-surface rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-surface text-2xl font-bold" data-icon="account_balance_wallet" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
</div>
<div>
<h4 className="text-sm font-bold text-on-surface">Conexão InfinitePay</h4>
<p className="text-[10px] text-green-400 font-bold flex items-center gap-1">
<span className="w-1 h-1 bg-green-400 rounded-full"></span> Conectado
                        </p>
</div>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-2xl font-extrabold text-sm hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(200,255,0,0.2)]">
<span className="material-symbols-outlined text-lg" data-icon="qr_code_2">qr_code_2</span>
                    Gerar Pix
                </button>
<button className="flex items-center justify-center gap-2 bg-surface-container-high text-on-surface py-3 rounded-2xl font-extrabold text-sm hover:bg-surface-bright active:scale-95 transition-all border border-outline-variant/20">
<span className="material-symbols-outlined text-lg" data-icon="link">link</span>
                    Link de Pagamento
                </button>
</div>
</section>
{/* Personal Agenda Section */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<div>
<h2 className="text-xl font-extrabold text-on-surface">Minha Agenda</h2>
<p className="text-xs text-on-surface-variant font-medium">Terça-feira, 24 de Outubro</p>
</div>
<button className="text-primary text-xs font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">
                    Ver Tudo
                </button>
</div>
{/* Timeline */}
<div className="space-y-3">
{/* Appointment 1 (Active/Next) */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary">
<div className="absolute -left-[5px] top-4 w-[12px] h-[12px] rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
<div className="bg-surface-container-highest p-4 rounded-2xl flex justify-between items-center group active:scale-[0.98] transition-all">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-primary text-sm font-black">09:00</p>
<p className="text-[10px] text-on-surface-variant font-bold">45 min</p>
</div>
<div>
<h5 className="text-sm font-bold text-on-surface">Ricardo Almeida</h5>
<p className="text-xs text-on-surface-variant">Cabelo + Barba Premium</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black rounded-md border border-primary/20 uppercase tracking-tighter">Confirmado</span>
<span className="text-sm font-black text-on-surface">R$ 120,00</span>
</div>
</div>
</div>
{/* Appointment 2 */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-outline-variant/30">
<div className="absolute -left-[5px] top-4 w-[12px] h-[12px] rounded-full bg-surface-container border-2 border-outline-variant/50"></div>
<div className="bg-surface-container p-4 rounded-2xl flex justify-between items-center opacity-80">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-on-surface text-sm font-black">10:30</p>
<p className="text-[10px] text-on-surface-variant font-bold">30 min</p>
</div>
<div>
<h5 className="text-sm font-bold text-on-surface">Marcelo Silva</h5>
<p className="text-xs text-on-surface-variant">Corte Masculino</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[9px] font-black rounded-md uppercase tracking-tighter">Pendente</span>
<span className="text-sm font-black text-on-surface">R$ 75,00</span>
</div>
</div>
</div>
{/* Appointment 3 */}
<div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-outline-variant/30">
<div className="absolute -left-[5px] top-4 w-[12px] h-[12px] rounded-full bg-surface-container border-2 border-outline-variant/50"></div>
<div className="bg-surface-container p-4 rounded-2xl flex justify-between items-center opacity-80">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-on-surface text-sm font-black">11:15</p>
<p className="text-[10px] text-on-surface-variant font-bold">30 min</p>
</div>
<div>
<h5 className="text-sm font-bold text-on-surface">Felipe Costa</h5>
<p className="text-xs text-on-surface-variant">Design de Barba</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black rounded-md border border-primary/20 uppercase tracking-tighter">Confirmado</span>
<span className="text-sm font-black text-on-surface">R$ 55,00</span>
</div>
</div>
</div>
</div>
</section>
{/* Quick Categories */}
<section className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
<button className="whitespace-nowrap px-6 py-3 bg-primary text-on-primary rounded-2xl font-bold text-sm transition-all shadow-[0_5px_15px_rgba(200,255,0,0.15)]">Cortes do Dia</button>
<button className="whitespace-nowrap px-6 py-3 bg-surface-container text-on-surface-variant rounded-2xl font-bold text-sm border border-white/5 hover:bg-surface-bright transition-all">Produtos</button>
<button className="whitespace-nowrap px-6 py-3 bg-surface-container text-on-surface-variant rounded-2xl font-bold text-sm border border-white/5 hover:bg-surface-bright transition-all">Dicas Premium</button>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full rounded-t-[24px] z-50 bg-[#1A1919]/70 backdrop-blur-md border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex justify-around items-center pt-3 pb-6 px-4 w-full">
<a className="flex flex-col items-center justify-center text-[#C8FF00] scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="calendar_today">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Agenda</span>
</a>
<div className="relative -top-8">
<button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_8px_20px_rgba(200,255,0,0.4)] flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-3xl font-bold" data-icon="add">add</span>
</button>
</div>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="group">group</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Clientes</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="menu">menu</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Menu</span>
</a>
</nav>
<style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `}</style>

    </div>
  );
};

export default PainelBarbeiroMobile;
