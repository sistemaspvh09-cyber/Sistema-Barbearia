
import React from 'react';

const PainelAdministrativo: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-[#C8FF00]/15 bg-[#0D0D0D] flex flex-col py-6 z-50 hidden md:flex shadow-[40px_0_40px_rgba(0,0,0,0.5)]">
<div className="px-6 mb-10">
<h1 className="text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Premium Management</p>
</div>
<nav className="flex-1 space-y-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#C8FF00] border-r-4 border-[#C8FF00] bg-gradient-to-r from-[#C8FF00]/10 to-transparent font-medium text-sm transition-all duration-300 scale-[1.02]" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">
<span className="material-symbols-outlined">calendar_month</span>
                Agenda
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">
<span className="material-symbols-outlined">group</span>
                Clientes
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">
<span className="material-symbols-outlined">content_cut</span>
                Serviços
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">
<span className="material-symbols-outlined">payments</span>
                Financeiro
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">
<span className="material-symbols-outlined">settings</span>
                Configurações
            </a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0px_0px_20px_rgba(200,255,0,0.4)] transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined">add</span>
                Novo Agendamento
            </button>
<div className="mt-6 pt-6 border-t border-white/5">
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-error transition-colors font-medium text-sm" href="#">
<span className="material-symbols-outlined">logout</span>
                    Sair
                </a>
</div>
</div>
</aside>
{/* TopNavBar */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-260px)] h-16 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8">
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary transition-all" placeholder="Buscar cliente ou barbeiro..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-white transition-opacity">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-white transition-opacity">history</span>
<span className="material-symbols-outlined cursor-pointer hover:text-white transition-opacity">account_balance_wallet</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-xs font-bold text-white">João Silva</p>
<p className="text-[10px] text-primary font-black uppercase tracking-tighter">Administrador</p>
</div>
<img alt="Avatar do Usuário" className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" data-alt="close-up portrait of a professional man in a clean dark studio with minimalist aesthetic and sharp lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf4_lQKrhAAjFJ5mmQYTlggFjdWG1ZGR75GgCOJtB8WY8zce67ZW01vxMgHdi27vvnYO4r6VPPpUtEnytctrdip--rQcYnuKjmu7nlaHS33GF8219QB-EY5W9PJbeU8mIecnruXj7J4haF5nbCatTRJfodDzoOqaBHAuT6lFt-AqwVIyUegeg6Fy7Q-cz5xtn-QYP7qmIKZ2nJcGHvHwrNvZaulKsglME-jCktpbOeHKM4l2vnOju-6rqylN4u3fLlfZBgeM9PfYAa"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="md:ml-[260px] pt-24 pb-20 px-4 md:px-10 max-w-[1600px] mx-auto min-h-screen">
{/* Welcome Header & Period Selector */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h2 className="text-3xl font-extrabold tracking-tight text-white mb-1">Boa tarde, João</h2>
<p className="text-on-surface-variant font-medium">Veja como está o desempenho da sua unidade hoje.</p>
</div>
<div className="flex bg-surface-container rounded-xl p-1 glass-border">
<button className="px-4 py-2 text-xs font-bold rounded-lg bg-surface-bright text-white shadow-lg transition-all">Hoje</button>
<button className="px-4 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-white transition-all">7 dias</button>
<button className="px-4 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-white transition-all">30 dias</button>
</div>
</section>
{/* KPI Cards Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
<div className="bg-surface-container p-6 rounded-3xl glass-border hover:bg-surface-container-high transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-xl">
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">+12%</span>
</div>
<p className="text-on-surface-variant text-sm font-medium mb-1">Faturamento Global</p>
<h3 className="text-2xl font-black tracking-tight">R$ 15.420,00</h3>
</div>
<div className="bg-surface-container p-6 rounded-3xl glass-border hover:bg-surface-container-high transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-xl">
<span className="material-symbols-outlined text-blue-400">event_available</span>
</div>
<span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">Meta 80%</span>
</div>
<p className="text-on-surface-variant text-sm font-medium mb-1">Agendamentos do Dia</p>
<h3 className="text-2xl font-black tracking-tight">24</h3>
</div>
<div className="bg-surface-container p-6 rounded-3xl glass-border hover:bg-surface-container-high transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-xl">
<span className="material-symbols-outlined text-purple-400">group</span>
</div>
<span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">+5 novos</span>
</div>
<p className="text-on-surface-variant text-sm font-medium mb-1">Clientes Atendidos</p>
<h3 className="text-2xl font-black tracking-tight">18</h3>
</div>
<div className="bg-surface-container p-6 rounded-3xl glass-border hover:bg-surface-container-high transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-500/10 rounded-xl">
<span className="material-symbols-outlined text-orange-400">trending_up</span>
</div>
<span className="text-[10px] font-bold text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">+R$ 12,00</span>
</div>
<p className="text-on-surface-variant text-sm font-medium mb-1">Ticket Médio</p>
<h3 className="text-2xl font-black tracking-tight">R$ 85,00</h3>
</div>
</section>
{/* Bento Grid Main Content */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Agenda de Hoje - 7 Columns */}
<section className="lg:col-span-7 space-y-6">
<div className="flex items-center justify-between">
<h4 className="text-xl font-bold tracking-tight">Agenda de Hoje</h4>
<button className="text-xs font-bold text-primary hover:underline">Ver agenda completa</button>
</div>
<div className="bg-surface-container rounded-[2rem] p-8 glass-border relative overflow-hidden">
<div className="absolute left-12 top-10 bottom-10 w-px bg-outline-variant/30"></div>
<div className="space-y-10 relative">
{/* Item 1 */}
<div className="flex gap-6 items-start group">
<div className="bg-surface-container-high px-3 py-1.5 rounded-lg border border-white/5 text-xs font-bold z-10 w-16 text-center">09:00</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl glass-border group-hover:bg-surface-bright transition-all">
<div className="flex justify-between items-center mb-2">
<p className="font-bold text-white">Ricardo Oliveira</p>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary uppercase">Concluído</span>
</div>
<div className="flex gap-4 text-xs text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">content_cut</span> Corte Degradê</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> Barbeiro Leo</span>
</div>
</div>
</div>
{/* Item 2 */}
<div className="flex gap-6 items-start group">
<div className="bg-surface-container-high px-3 py-1.5 rounded-lg border border-white/5 text-xs font-bold z-10 w-16 text-center">10:30</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent transition-all">
<div className="flex justify-between items-center mb-2">
<p className="font-bold text-white">Marcos Vinícius</p>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 uppercase">Em andamento</span>
</div>
<div className="flex gap-4 text-xs text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">content_cut</span> Combo Barba &amp; Corte</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> Barbeiro Pedro</span>
</div>
</div>
</div>
{/* Item 3 */}
<div className="flex gap-6 items-start group">
<div className="bg-surface-container-high px-3 py-1.5 rounded-lg border border-white/5 text-xs font-bold z-10 w-16 text-center">11:15</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl glass-border group-hover:bg-surface-bright transition-all">
<div className="flex justify-between items-center mb-2">
<p className="font-bold text-white">Arthur Menezes</p>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 uppercase">Aguardando</span>
</div>
<div className="flex gap-4 text-xs text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">content_cut</span> Navalhado</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> Barbeiro Bruno</span>
</div>
</div>
</div>
{/* Item 4 */}
<div className="flex gap-6 items-start group">
<div className="bg-surface-container-high px-3 py-1.5 rounded-lg border border-white/5 text-xs font-bold z-10 w-16 text-center">13:00</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl glass-border group-hover:bg-surface-bright transition-all">
<div className="flex justify-between items-center mb-2">
<p className="font-bold text-white">Guilherme Santos</p>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 uppercase">Agendado</span>
</div>
<div className="flex gap-4 text-xs text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">content_cut</span> Corte Social</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> Barbeiro Leo</span>
</div>
</div>
</div>
{/* Item 5 */}
<div className="flex gap-6 items-start group">
<div className="bg-surface-container-high px-3 py-1.5 rounded-lg border border-white/5 text-xs font-bold z-10 w-16 text-center">14:30</div>
<div className="flex-1 bg-surface-container-low p-4 rounded-2xl glass-border group-hover:bg-surface-bright transition-all">
<div className="flex justify-between items-center mb-2">
<p className="font-bold text-white">Lucas Lima</p>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 uppercase">Agendado</span>
</div>
<div className="flex gap-4 text-xs text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">content_cut</span> Barboterapia</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> Barbeiro Pedro</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Ranking & Financeiro - 5 Columns */}
<section className="lg:col-span-5 space-y-8">
{/* Ranking de Barbeiros */}
<div>
<h4 className="text-xl font-bold tracking-tight mb-4">Ranking de Barbeiros</h4>
<div className="bg-surface-container rounded-[2rem] p-6 glass-border">
<div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
{/* Barbeiro 1 */}
<div className="flex flex-col items-center gap-3 min-w-[100px] group">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover border-2 border-primary group-hover:scale-110 transition-transform duration-300" data-alt="portrait of a bearded barber with tattoos in a professional shop setting with warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZbwBFqqVVBjVL7tjMXRmr6xexXLia1bvSZsNuHjllKzt7MX_yS--S_02rpXqhcQFV8dZZZ07wQC9wdWWaDunIXk7psbtotiz-6bamRIDrjlYT4jNTY6AKu1o-RBo0qYdOhtZLTdT1py32ILlMy5UPh59sdLqbvgQppC7eEV9r4LcV_OLlXXOI857g7q40ALyAyztWHAx4pNG5z35gKrkGrR1sF9OXlL_autCQcO4DpHu6rao7ayKkUQguKSuAmbf_PA65eM81W42"/>
<div className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">1</div>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Leo</p>
<p className="text-[10px] text-primary font-bold">R$ 4.2k</p>
</div>
</div>
{/* Barbeiro 2 */}
<div className="flex flex-col items-center gap-3 min-w-[100px] group">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform duration-300" data-alt="close up of a professional male stylist with a friendly expression in a modern bright salon background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8NLMULkB7gRB4c7JjQyal5bnElbNHqFu-Rhnv4V95VdNopx0hgVKhUC63NoGmzcbe6n-Gv5YfTNx2XbCtJZyHafNgB9s_LB7pUMwaliThzQBUKL6Z3YuhKiQ26g9QaWu9zEsw9nPnwoDjJIszz6RqdhrrwCU5cbz5PJ8W5ktzEFGK7MLohMTIOPxqpzixfQ7iQc3sSOn0PsP9GvAyHgnfA_hHEVINQmn-Ra3dojmQX0LGtyXSN8214J2HmZTuePGx07mAT0A52WNr"/>
<div className="absolute -bottom-1 -right-1 bg-surface-bright text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-white/10">2</div>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Pedro</p>
<p className="text-[10px] text-on-surface-variant font-bold">R$ 3.8k</p>
</div>
</div>
{/* Barbeiro 3 */}
<div className="flex flex-col items-center gap-3 min-w-[100px] group">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform duration-300" data-alt="sharp portrait of a barber in a black t-shirt standing in front of grooming tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuTHo6bH_WZqx-xJtCQTTfEOtAHzJZGVaAT_orz7z5EZ_lB7Cngxq4UhICmzzraSsjDkriCi0sd_A3IcNkElMJBlWiriM4PX6La3xVb-O_9W79sXu4PvIaQFxIzIQ7YzZmhuxQRawHn8lPyxbHyhTlSZuK-IS8vaSiF0vSrh57944ZKACwuid59-MxB-SV4xioXb35YpXkeWGaW04nHEurb7qyCc17FQbZwQpXHfxXpZcSWYtp0cER2hDp1z4P9EGGOCtrVl7rmwpT"/>
<div className="absolute -bottom-1 -right-1 bg-surface-bright text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-white/10">3</div>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Bruno</p>
<p className="text-[10px] text-on-surface-variant font-bold">R$ 3.1k</p>
</div>
</div>
{/* Barbeiro 4 */}
<div className="flex flex-col items-center gap-3 min-w-[100px] group">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform duration-300" data-alt="headshot of a smiling young professional against a soft blurred background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRYdOa9Mdd4BEzypb_I424BFaQJ0-7d_uUz4KbhxSlgeswhTKcdaWfwj4_hFjHC9dr4rIIqKoPBh41gG4i4gbEQ1at3YVkM-55ldgmS4d097rt8hy71BDFVS8KJJ-G2KYlCDKHmWg2673rR-yDOOy9HZSHSrbN2UvwNETPvRm-wMe72SfsZ1bR3KWY0tQHMnrIVlo5SP7MAnu54zgJxJG_eDSyYlA2aeuyfiZBnYMI8Bmw6kagUByJRww921lvTg6BWdZMC_Mk_zFE"/>
<div className="absolute -bottom-1 -right-1 bg-surface-bright text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-white/10">4</div>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Daniel</p>
<p className="text-[10px] text-on-surface-variant font-bold">R$ 2.5k</p>
</div>
</div>
</div>
</div>
</div>
{/* Últimas Transações */}
<div>
<h4 className="text-xl font-bold tracking-tight mb-4">Últimas Transações</h4>
<div className="bg-surface-container rounded-[2rem] p-6 glass-border flex flex-col gap-4">
{/* Transação 1 */}
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">qr_code_2</span>
</div>
<div>
<p className="text-xs font-bold text-white">Pix</p>
<p className="text-[10px] text-on-surface-variant">Ricardo Oliveira</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold text-white">R$ 65,00</p>
<p className="text-[10px] text-on-surface-variant">09:45</p>
</div>
</div>
{/* Transação 2 */}
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="material-symbols-outlined">credit_card</span>
</div>
<div>
<p className="text-xs font-bold text-white">Cartão</p>
<p className="text-[10px] text-on-surface-variant">João Mendes</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold text-white">R$ 120,00</p>
<p className="text-[10px] text-on-surface-variant">09:12</p>
</div>
</div>
{/* Transação 3 */}
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="text-xs font-bold text-white">Dinheiro</p>
<p className="text-[10px] text-on-surface-variant">André Silva</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold text-white">R$ 45,00</p>
<p className="text-[10px] text-on-surface-variant">Ontem</p>
</div>
</div>
<button className="w-full mt-2 py-3 border border-white/5 rounded-xl text-xs font-bold text-on-surface-variant hover:text-white hover:bg-white/5 transition-all">
                            Ver extrato completo
                        </button>
</div>
</div>
</section>
</div>
</main>
{/* Floating Action Button */}
<button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-[#C8FF00] text-[#4f6700] rounded-full shadow-[0px_10px_30px_rgba(200,255,0,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50">
<span className="material-symbols-outlined text-3xl font-bold">add</span>
</button>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 rounded-t-[24px] border-t border-white/10 bg-[#1A1919]/80 backdrop-blur-lg flex justify-around items-center px-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#C8FF00] scale-110 duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5" href="#">
<span className="material-symbols-outlined">event_note</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Financeiro</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default PainelAdministrativo;
