
import React from 'react';

const PagamentosInfinitepay: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Execution from JSON) */}
<aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-[#C8FF00]/15 bg-[#0D0D0D] flex flex-col py-6 z-50 hidden md:flex shadow-[40px_0_40px_rgba(0,0,0,0.5)]">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-2xl" data-icon="content_cut">content_cut</span>
</div>
<div>
<h1 className="text-xl font-black text-[#C8FF00] tracking-tighter leading-tight">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Premium Management</p>
</div>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Clientes</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Serviços</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#C8FF00] border-r-4 border-[#C8FF00] bg-gradient-to-r from-[#C8FF00]/10 to-transparent transition-all duration-300 scale-[1.02]" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Configurações</span>
</a>
</nav>
<div className="mt-auto px-4">
<button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-2xl flex items-center justify-center gap-2 mb-6 hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_20px_rgba(200,255,0,0.15)]">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                Novo Agendamento
            </button>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-error transition-colors" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">Sair</span>
</a>
</div>
</aside>
{/* TopNavBar (Execution from JSON) */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-260px)] h-16 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8">
<div className="flex items-center gap-8">
<h2 className="hidden md:block text-[#C8FF00] font-black font-['Plus_Jakarta_Sans'] text-base">Financeiro</h2>
<div className="hidden lg:flex items-center gap-6">
<a className="text-[#C8FF00] border-b-2 border-[#C8FF00] pb-1 font-bold text-sm" href="?module=overview">Visão Geral</a>
<a className="text-[#A0A0A0] hover:text-white transition-opacity font-bold text-sm" href="?module=operacao&screen=gest-ode-equipe-admin">Relatórios</a>
<a className="text-[#A0A0A0] hover:text-white transition-opacity font-bold text-sm" href="?module=operacao&screen=gest-ode-equipe-admin">Equipe</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="p-2 text-[#A0A0A0] hover:text-white transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</button>
</div>
<div className="h-8 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-xs font-bold text-white leading-none">André Machado</p>
<p className="text-[10px] text-[#A0A0A0] leading-tight">Master Barber</p>
</div>
<img alt="Avatar do Usuário" className="w-10 h-10 rounded-full border-2 border-[#C8FF00]/20 object-cover" data-alt="close-up portrait of a professional barber with a neat beard in a stylish shop setting, high-end photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJojrJyCzZZrVznJtavS0vi7ZNcP0DGpRARgOiQqokT6EtKzuTpaaSk8oPciDbLZy6Fd5oj-9C2jnGaW_ZKEhFF3RGnBLyH5uhlIZEYHcZWsmyGy7-ayCJ1v3RSoTxAksCF_NzLvZK7S4ovKMh4JpGtgPXNsOPnK3t8okcWPUHvOtCmV4aRiT6KXzrf49EQ_CnVOXoW33Ll8MvQxpSuyx9ikvI5sRugU2YX9vV5xke4EugW5zNnGVTE3h4Fl6I1KHQAodn15zdz9V"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="pt-24 pb-24 md:pl-[260px] min-h-screen">
<div className="max-w-7xl mx-auto px-6 md:px-10">
{/* Hero Bento Grid Section */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* Main Balance Card (InfinitePay Style) */}
<div className="lg:col-span-8 p-8 rounded-3xl bg-gradient-to-br from-[#1A1919] to-[#0D0D0D] border border-white/5 relative overflow-hidden group">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C8FF00]/10 rounded-full blur-[80px] group-hover:bg-[#C8FF00]/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div>
<span className="text-on-surface-variant text-sm font-semibold tracking-wide uppercase">Saldo Disponível</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-[#C8FF00] text-3xl font-black">R$</span>
<h3 className="text-6xl font-black text-white tracking-tighter">12.500,00</h3>
<button className="ml-4 p-2 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>
</div>
<div className="bg-surface-container-high px-4 py-2 rounded-2xl border border-white/5 flex items-center gap-2">
<span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-white">Sua Conta InfinitePay está ativa</span>
</div>
</div>
<div className="flex flex-wrap gap-4 mt-8">
<button className="flex-1 min-w-[140px] py-4 bg-primary-container text-on-primary font-black rounded-2xl flex flex-col items-center justify-center gap-2 neon-glow transition-all duration-300 active:scale-95 group">
<span className="material-symbols-outlined text-3xl" data-icon="qr_code_2">qr_code_2</span>
<span className="text-xs uppercase tracking-tighter">Gerar QR Code Pix</span>
</button>
<button className="flex-1 min-w-[140px] py-4 bg-surface-bright text-white font-black rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined text-3xl" data-icon="link">link</span>
<span className="text-xs uppercase tracking-tighter">Link de Pagamento</span>
</button>
<button className="flex-1 min-w-[140px] py-4 bg-surface-bright text-white font-black rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined text-3xl" data-icon="credit_card">credit_card</span>
<span className="text-xs uppercase tracking-tighter">Cobrar no Cartão</span>
</button>
</div>
</div>
</div>
{/* Secondary Info Card */}
<div className="lg:col-span-4 grid grid-rows-2 gap-6">
<div className="p-6 rounded-3xl bg-surface-container border border-white/5 flex flex-col justify-between">
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-on-surface-variant">Próximo Recebimento</span>
<span className="material-symbols-outlined text-primary" data-icon="event_repeat">event_repeat</span>
</div>
<div>
<p className="text-2xl font-black text-white">R$ 1.420,50</p>
<p className="text-xs text-on-surface-variant mt-1">Previsto para amanhã, 14/10</p>
</div>
</div>
<div className="p-6 rounded-3xl bg-surface-container border border-white/5 flex flex-col justify-between group hover:border-[#C8FF00]/30 transition-colors">
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-on-surface-variant">Configurações de Taxa</span>
<span className="material-symbols-outlined text-[#A0A0A0] group-hover:text-primary transition-colors" data-icon="tune">tune</span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-widest rounded-xl transition-all">Ajustar Plano de Recebimento</button>
</div>
</div>
</div>
{/* Transactions Section */}
<div className="mt-12">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-black tracking-tighter">Transações Recentes</h2>
<p className="text-on-surface-variant text-sm mt-1">Acompanhe seu fluxo de caixa em tempo real</p>
</div>
<button className="text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                        Ver extrato completo
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="bg-surface-container rounded-3xl border border-white/5 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-white/5">
<th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Data &amp; Hora</th>
<th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Cliente</th>
<th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Método</th>
<th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Valor</th>
<th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-8 py-5">
<p className="text-sm font-bold text-white">Hoje, 14:20</p>
<p className="text-[10px] text-on-surface-variant uppercase">ID: 849201</p>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-black">RM</div>
<span className="text-sm font-medium text-white">Ricardo Mendes</span>
</div>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg text-[#A0A0A0]" data-icon="qr_code">qr_code</span>
<span className="text-xs text-on-surface-variant">Pix</span>
</div>
</td>
<td className="px-8 py-5">
<span className="text-sm font-black text-white">R$ 85,00</span>
</td>
<td className="px-8 py-5 text-right">
<span className="px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-black uppercase rounded-full">Pago</span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-8 py-5">
<p className="text-sm font-bold text-white">Hoje, 13:45</p>
<p className="text-[10px] text-on-surface-variant uppercase">ID: 849198</p>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-black">JS</div>
<span className="text-sm font-medium text-white">Juliana Silva</span>
</div>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg text-[#A0A0A0]" data-icon="credit_card">credit_card</span>
<span className="text-xs text-on-surface-variant">Crédito 1x</span>
</div>
</td>
<td className="px-8 py-5">
<span className="text-sm font-black text-white">R$ 120,00</span>
</td>
<td className="px-8 py-5 text-right">
<span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-black uppercase rounded-full">Pendente</span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-8 py-5">
<p className="text-sm font-bold text-white">Hoje, 11:15</p>
<p className="text-[10px] text-on-surface-variant uppercase">ID: 849150</p>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-black">FP</div>
<span className="text-sm font-medium text-white">Felipe Prado</span>
</div>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg text-[#A0A0A0]" data-icon="payments">payments</span>
<span className="text-xs text-on-surface-variant">Link</span>
</div>
</td>
<td className="px-8 py-5">
<span className="text-sm font-black text-white">R$ 45,00</span>
</td>
<td className="px-8 py-5 text-right">
<span className="px-3 py-1 bg-error/10 text-error text-[10px] font-black uppercase rounded-full">Falhou</span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-8 py-5">
<p className="text-sm font-bold text-white">Ontem, 19:00</p>
<p className="text-[10px] text-on-surface-variant uppercase">ID: 849002</p>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-black">AM</div>
<span className="text-sm font-medium text-white">Arthur Melo</span>
</div>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg text-[#A0A0A0]" data-icon="qr_code">qr_code</span>
<span className="text-xs text-on-surface-variant">Pix</span>
</div>
</td>
<td className="px-8 py-5">
<span className="text-sm font-black text-white">R$ 60,00</span>
</td>
<td className="px-8 py-5 text-right">
<span className="px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-black uppercase rounded-full">Pago</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Ad/Promo Card */}
<div className="mt-12 p-1 rounded-3xl bg-gradient-to-r from-primary-container via-white to-primary-container">
<div className="bg-surface-container rounded-[22px] p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h4 className="text-2xl font-black text-white tracking-tight">InfiniteTap: Transforme seu celular em maquininha</h4>
<p className="text-on-surface-variant mt-2 text-sm">Aceite cartões direto no seu smartphone sem custo de aluguel. Ative agora na sua conta BarberPro.</p>
<button className="mt-6 px-6 py-3 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:bg-white/90 transition-all">Saber Mais</button>
</div>
<div className="w-full md:w-64 h-40 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C8FF00]/20 to-transparent"></div>
<span className="material-symbols-outlined text-6xl text-[#C8FF00]" data-icon="contactless">contactless</span>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Execution from JSON) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 rounded-t-[24px] border-t border-white/10 bg-[#1A1919]/80 backdrop-blur-lg flex justify-around items-center px-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] transition-transform active:scale-110" href="?module=overview">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] transition-transform active:scale-110" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="event_note">event_note</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] transition-transform active:scale-110" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="account_balance_wallet" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Financeiro</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] transition-transform active:scale-110" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default PagamentosInfinitepay;
