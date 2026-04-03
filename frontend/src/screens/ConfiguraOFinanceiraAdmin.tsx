
import React from 'react';

const ConfiguraOFinanceiraAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (from JSON) */}
<aside className="flex flex-col h-full sticky top-0 left-0 h-screen w-64 border-r border-[#ffffff15] bg-[#0D0D0D] dark:bg-[#0D0D0D] shadow-[40px_0_40px_rgba(0,0,0,0.5)] z-50">
<div className="p-8">
<h1 className="text-2xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-[#A0A0A0] uppercase tracking-widest mt-1 font-bold">Elite Management</p>
</div>
<nav className="flex-1 px-4 space-y-2 custom-scrollbar overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-medium" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="tracking-tight">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="tracking-tight">Transações</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-medium" href="?module=financeiro&screen=relat-rio-de-comiss-es-por-barbeiro">
<span className="material-symbols-outlined" data-icon="percent">percent</span>
<span className="tracking-tight">Comissões</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-medium" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="tracking-tight">Barbeiros</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-medium" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="tracking-tight">Serviços</span>
</a>
{/* Active Tab */}
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#C8FF00] bg-[#C8FF0010] border-r-2 border-[#C8FF00] font-bold transition-all duration-300 shadow-[0_0_15px_rgba(200,255,0,0.1)]" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="tracking-tight">Configurações</span>
</a>
</nav>
<div className="px-4 py-6 border-t border-[#ffffff10] space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white transition-all duration-300" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span className="text-sm font-medium">Suporte</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-error transition-all duration-300" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="text-sm font-medium">Sair</span>
</a>
</div>
</aside>
<main className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
{/* TopAppBar (from JSON) */}
<header className="flex justify-between items-center px-8 py-4 sticky top-0 w-full bg-[#0D0D0D]/70 backdrop-blur-xl z-40 border-b border-[#ffffff15]">
<div className="flex items-center gap-6">
<h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-[#C8FF00]">Painel Financeiro</h2>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm" data-icon="search">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-[#C8FF00] transition-all" placeholder="Buscar configurações..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
</div>
<div className="h-10 w-10 rounded-full overflow-hidden border border-[#ffffff15]">
<img alt="Usuário Admin" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male manager in a dark studio setting with soft dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjnRG7X_rkF8OLlx816FKCVSuNTjQKBgqrGktwkhafQZgsjKYohvbztuLtd737DVKJrRrBaDSmUdl5RDb7nT5oIzacId18C29jZyki-Opyl9rAGtybOXCoEmZGKACeWqKXnnyL28nCZXapUGTyPjPq5bIo-5I6Zs-yQbczBAQKfKrZXZVkLfRSi4-5gD_TMHxZs7edB0LMpsADFTRHz1GgmwZTthNVyixKvp6FgQ_Rx1sPtvQOY4Z7NMeMaGCjSoQLiyRkI78kHWeh"/>
</div>
</div>
</header>
{/* Content Canvas */}
<div className="flex-1 overflow-y-auto custom-scrollbar p-8">
<div className="max-w-6xl mx-auto space-y-8">
{/* Hero/Bento Grid Start */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* InfinitePay Integration (Main Card) */}
<div className="md:col-span-8 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#C8FF00] opacity-5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="space-y-1">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#C8FF00]"></span>
<span className="text-xs font-bold uppercase tracking-widest text-[#C8FF00]">Conectado via BarberPro Cloud</span>
</div>
<h3 className="text-3xl font-extrabold tracking-tight">Integração InfinitePay</h3>
</div>
<div className="bg-primary-container p-3 rounded-xl">
<span className="material-symbols-outlined text-on-primary-container" data-icon="bolt" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-on-surface-variant text-sm font-medium mb-1">Saldo disponível para saque</p>
<h4 className="text-5xl font-black tracking-tighter text-white">R$ 14.280,50</h4>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 rounded-xl bg-primary-container text-on-primary-container font-bold text-sm flex items-center gap-2 neon-glow transition-all active:scale-95">
                                        Configurar Webhooks
                                        <span className="material-symbols-outlined text-sm" data-icon="settings_input_component">settings_input_component</span>
</button>
<button className="px-6 py-3 rounded-xl border border-outline-variant text-white font-bold text-sm hover:bg-white/5 transition-all">
                                        Desconectar
                                    </button>
</div>
</div>
</div>
</div>
{/* Quick Status Sidebar in Bento */}
<div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between border-primary/10">
<div className="space-y-6">
<h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Próximo Repasse</h4>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Data Estimada</span>
<span className="font-bold">25 Out, 2023</span>
</div>
<div className="flex justify-between items-center text-primary-container">
<span className="font-medium">Total Acumulado</span>
<span className="font-black text-xl">R$ 8.412,00</span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant/30">
<div className="flex items-center gap-3 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="verified_user">verified_user</span>
<span>Ambiente de Produção Seguro</span>
</div>
</div>
</div>
{/* Commission Configuration Section */}
<div className="md:col-span-6 glass-card rounded-2xl p-8 border-l-4 border-primary-container">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="percent">percent</span>
</div>
<div>
<h3 className="text-xl font-bold">Comissões Globais</h3>
<p className="text-sm text-on-surface-variant">Defina a porcentagem padrão da casa.</p>
</div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Comissão Padrão da Casa</label>
<div className="relative">
<input className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-4 px-6 text-2xl font-black focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all" type="number" value="50"/>
<span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl font-black text-on-surface-variant">%</span>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-high rounded-xl">
<div className="flex flex-col">
<span className="font-bold">Personalização por Barbeiro</span>
<span className="text-xs text-on-surface-variant">Permite sobrescrever a taxa global em perfis individuais.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-lowest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</div>
{/* Payout Rules Section */}
<div className="md:col-span-6 glass-card rounded-2xl p-8">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="calendar_today">calendar_today</span>
</div>
<div>
<h3 className="text-xl font-bold">Regras de Repasse</h3>
<p className="text-sm text-on-surface-variant">Frequência de fechamento e pagamentos.</p>
</div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Ciclo de Fechamento</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-3 px-4 rounded-xl border border-primary-container bg-primary-container/10 text-primary-container font-bold text-sm transition-all">Semanal</button>
<button className="py-3 px-4 rounded-xl border border-outline-variant text-on-surface-variant font-medium text-sm hover:border-white transition-all">Quinzenal</button>
<button className="py-3 px-4 rounded-xl border border-outline-variant text-on-surface-variant font-medium text-sm hover:border-white transition-all">Mensal</button>
</div>
</div>
<div className="p-4 bg-[#C8FF0008] border border-[#C8FF0015] rounded-xl flex gap-4">
<span className="material-symbols-outlined text-primary-container" data-icon="info">info</span>
<p className="text-xs leading-relaxed text-on-surface-variant">
                                    Seus fechamentos ocorrerão toda <span className="text-white font-bold">Segunda-feira</span> às 08:00 AM, processando automaticamente as comissões da semana anterior via Pix InfinitePay.
                                </p>
</div>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex justify-end items-center gap-4 pt-4 border-t border-outline-variant/30">
<button className="px-8 py-3 rounded-xl border border-outline-variant text-on-surface-variant font-bold hover:text-white transition-all">
                        Descartar Alterações
                    </button>
<button className="px-10 py-3 rounded-xl bg-primary-container text-on-primary-container font-black text-sm uppercase tracking-widest neon-glow transition-all active:scale-95">
                        Salvar Configurações
                    </button>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default ConfiguraOFinanceiraAdmin;
