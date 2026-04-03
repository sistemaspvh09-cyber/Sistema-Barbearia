
import React from 'react';

const PainelDoBarbeiro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Sidebar Navigation */}
<aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-primary/15 bg-[#0D0D0D] hidden md:flex flex-col py-6 z-50 shadow-[40px_0_40px_rgba(0,0,0,0.5)]">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container font-bold" data-icon="content_cut">content_cut</span>
</div>
<div>
<h1 className="text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Premium Management</p>
</div>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#C8FF00] border-r-4 border-[#C8FF00] bg-gradient-to-r from-[#C8FF00]/10 to-transparent font-medium text-sm tracking-tight transition-all" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] font-medium text-sm tracking-tight transition-all" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                Agenda
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] font-medium text-sm tracking-tight transition-all" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Clientes
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] font-medium text-sm tracking-tight transition-all" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Serviços
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] font-medium text-sm tracking-tight transition-all" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                Financeiro
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] font-medium text-sm tracking-tight transition-all" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Configurações
            </a>
</nav>
<div className="px-4 mt-auto">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-3 rounded-xl font-bold text-sm shadow-[0px_0px_20px_rgba(200,255,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Novo Agendamento
            </button>
<div className="mt-6 border-t border-white/5 pt-6 px-4">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-error transition-colors text-sm font-medium" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                    Sair
                </a>
</div>
</div>
</aside>
{/* Top Navigation */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-260px)] h-16 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8">
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="Buscar na agenda..." type="text"/>
</div>
<nav className="hidden lg:flex items-center gap-6">
<a className="text-[#C8FF00] border-b-2 border-[#C8FF00] pb-1 text-sm font-bold" href="?module=overview">Visão Geral</a>
<a className="text-[#A0A0A0] hover:text-white text-sm font-bold transition-opacity" href="?module=operacao&screen=gest-ode-equipe-admin">Relatórios</a>
<a className="text-[#A0A0A0] hover:text-white text-sm font-bold transition-opacity" href="?module=operacao&screen=gest-ode-equipe-admin">Equipe</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-white transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-white/10">
<div className="text-right hidden sm:block">
<p className="text-sm font-bold leading-none">Carlos Oliveira</p>
<p className="text-[10px] text-on-surface-variant font-medium">Barbeiro Master</p>
</div>
<img alt="Avatar do Usuário" className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" data-alt="close-up portrait of a professional barber with a well-groomed beard in a stylish barbershop setting with warm soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsGdqPw-ck0uEu9qPR_lDkQQgAjBAWsNxTTWSe5V6TVi_XoOj_YozvQdFnoXtHG5fC_dgM4gIsQbYD1KT6mGegzXgO2qFqrer3EIO_OgEuhqFye96QjdqF1V8ZjQBbY4zm4WqtKXblkR84bRhgKlOBUEE0iwDfSo_oVM_L3yo7ICwsd2r_xsyx8f4cc4bOjuSQDU_cAJ6qE2puVydZF7Be-1waeUwiUwKQNRXOLjEnbjbe9bKOthZCJEnPYG9Pk32uhklqXEHVjr63"/>
</div>
</div>
</header>
{/* Main Content */}
<main className="pt-24 pb-12 px-4 md:pl-[284px] md:pr-8 min-h-screen">
{/* Welcome Header */}
<header className="mb-8">
<h2 className="text-3xl font-extrabold tracking-tight">Bom dia, Carlos.</h2>
<p className="text-on-surface-variant mt-1">Aqui está o resumo da sua performance hoje.</p>
</header>
{/* KPI Cards Bento Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass-card p-6 rounded-[24px] group hover:scale-[1.02] transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">+12%</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Meu Faturamento</p>
<h3 className="text-2xl font-black mt-1">R$ 3.200,00</h3>
</div>
<div className="glass-card p-6 rounded-[24px] group hover:scale-[1.02] transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
</div>
<span className="text-[10px] font-bold text-on-surface-variant px-2 py-1 bg-white/5 rounded-full">Hoje</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Meus Agendamentos</p>
<h3 className="text-2xl font-black mt-1">06</h3>
</div>
<div className="glass-card p-6 rounded-[24px] group hover:scale-[1.02] transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
</div>
<span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">Novo</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Meus Clientes</p>
<h3 className="text-2xl font-black mt-1">05</h3>
</div>
<div className="glass-card p-6 rounded-[24px] group hover:scale-[1.02] transition-all duration-300 border-primary/20">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">50%</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Minha Comissão</p>
<h3 className="text-2xl font-black mt-1 text-primary-container">R$ 1.600,00</h3>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Timeline Section */}
<section className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="calendar_today">calendar_today</span>
                        Minha Agenda
                    </h3>
<button className="text-sm font-bold text-primary-container hover:underline">Ver agenda completa</button>
</div>
<div className="glass-card rounded-[32px] overflow-hidden p-6">
<div className="space-y-0 relative">
{/* Timeline Line */}
<div className="absolute left-[23px] top-4 bottom-4 w-px bg-outline-variant/30"></div>
{/* Appointment Item */}
<div className="relative flex gap-6 pb-8 group">
<div className="z-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-primary ring-4 ring-background">
<p className="text-[10px] font-black leading-none">09:00</p>
</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl group-hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold">Ricardo Santos</h4>
<p className="text-xs text-on-surface-variant mt-1">Corte Degradê + Barba Espartana</p>
</div>
<span className="text-[10px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">Confirmado</span>
</div>
</div>
</div>
{/* Appointment Item */}
<div className="relative flex gap-6 pb-8 group">
<div className="z-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant ring-4 ring-background">
<p className="text-[10px] font-black leading-none text-on-surface-variant">10:30</p>
</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl group-hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold">Gabriel Lima</h4>
<p className="text-xs text-on-surface-variant mt-1">Corte Social</p>
</div>
<span className="text-[10px] font-bold bg-white/5 text-on-surface-variant px-3 py-1 rounded-full uppercase tracking-tighter">Em 45 min</span>
</div>
</div>
</div>
{/* Appointment Item */}
<div className="relative flex gap-6 pb-8 group">
<div className="z-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant ring-4 ring-background">
<p className="text-[10px] font-black leading-none text-on-surface-variant">14:00</p>
</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl group-hover:bg-surface-container-high transition-colors opacity-60">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold">Felipe Mendes</h4>
<p className="text-xs text-on-surface-variant mt-1">Combo Barber Day</p>
</div>
<span className="text-[10px] font-bold bg-white/5 text-on-surface-variant px-3 py-1 rounded-full uppercase tracking-tighter">Pendente</span>
</div>
</div>
</div>
{/* Appointment Item (Active/Next) */}
<div className="relative flex gap-6 group">
<div className="z-10 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border-2 border-primary ring-4 ring-background">
<span className="material-symbols-outlined text-on-primary text-xl" data-icon="add" data-weight="fill">add</span>
</div>
<div className="flex-1 border-2 border-dashed border-outline-variant p-4 rounded-2xl flex items-center justify-center group-hover:border-primary/50 transition-colors cursor-pointer">
<p className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">Disponível para encaixe</p>
</div>
</div>
</div>
</div>
</section>
{/* InfinitePay & Wallet Section */}
<section className="lg:col-span-4 space-y-6">
<div>
<h3 className="text-xl font-bold flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="account_balance_wallet">account_balance_wallet</span>
                        Minha InfinitePay
                    </h3>
{/* InfinitePay Card */}
<div className="bg-gradient-to-br from-[#1A1919] to-[#0D0D0D] p-8 rounded-[32px] border border-primary/10 relative overflow-hidden group shadow-2xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Conectado</span>
</div>
<img alt="InfinitePay Logo" className="h-4 opacity-50 grayscale brightness-200" data-alt="minimalist tech logo with clean lines on dark background representive of fintech and digital payments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqTQWz7MI1gg8-uqdELMjy4PsC6XOXlzD4Nvp1mvOZUMButfXQgCGx_ddYvjfjqXm1-lDDIBQu4v7XPP2y0dWUKqtjEdogLd95B_n6pgIcn8WwWQfMwXFKLkY-Zem_e-6Pe8_tEEvsY9AqUf2NK4w-EOHrSliTcBYOQb3K6r4snUWMNZxjmSwX2cAMIPBLJ9Silq24s2cQvVz4tz4s4-ApfRsTfB4ed-bw2D3PK8dQYWGTp0GjXhuGgTMszqEkNHPaezSB1Kcl6YS"/>
</div>
<p className="text-on-surface-variant text-xs font-medium mb-1">Saldo Pessoal</p>
<h4 className="text-3xl font-black mb-10 tracking-tight text-white">R$ 850,20</h4>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-all group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform" data-icon="qr_code_2">qr_code_2</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Gerar PIX</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-all group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform" data-icon="link">link</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Link Pagamento</span>
</button>
</div>
</div>
</div>
{/* Personal Performance Insight */}
<div className="glass-card p-6 rounded-[24px]">
<h4 className="text-sm font-black mb-4 flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                        Meta Mensal
                    </h4>
<div className="flex justify-between text-xs font-bold mb-2">
<span>Progresso (65%)</span>
<span className="text-primary">R$ 4.500,00</span>
</div>
<div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[65%] rounded-full shadow-[0_0_10px_rgba(200,255,0,0.3)]"></div>
</div>
<p className="mt-4 text-[10px] text-on-surface-variant leading-relaxed">
                        Faltam <span className="text-white font-bold">R$ 1.300,00</span> para você atingir sua meta e ganhar o bônus de performance.
                    </p>
</div>
</section>
</div>
</main>
{/* Bottom Navigation (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 rounded-t-[24px] bg-[#1A1919]/80 backdrop-blur-lg border-t border-white/10 flex justify-around items-center px-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#C8FF00] scale-110 duration-200" href="?module=overview">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 px-4 py-1 rounded-xl" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="event_note">event_note</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 px-4 py-1 rounded-xl" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Financeiro</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 px-4 py-1 rounded-xl" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default PainelDoBarbeiro;
