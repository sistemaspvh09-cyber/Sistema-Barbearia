
import React from 'react';

const GestODeDespesasDetalhada: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Desktop) */}
<aside className="hidden md:flex flex-col py-8 gap-2 h-screen w-64 fixed left-0 top-0 bg-[#1A1919] shadow-2xl z-40">
<div className="px-6 mb-8">
<h1 className="text-xl font-extrabold text-primary-container tracking-tighter">BarberPro Admin</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Gestão de Alta Performance</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-white/5 transition-all duration-300 ease-in-out group" href="?module=overview">
<span className="material-symbols-outlined text-xl group-hover:text-primary-container">dashboard</span>
<span className="font-semibold text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#C8FF00]/10 text-[#C8FF00] border-r-4 border-[#C8FF00] transition-all duration-300 ease-in-out" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined text-xl">payments</span>
<span className="font-semibold text-sm">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-white/5 transition-all duration-300 ease-in-out group" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined text-xl group-hover:text-primary-container">group</span>
<span className="font-semibold text-sm">Equipe</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-white/5 transition-all duration-300 ease-in-out group" href="#">
<span className="material-symbols-outlined text-xl group-hover:text-primary-container">shopping_cart_checkout</span>
<span className="font-semibold text-sm">Checkout</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-white/5 transition-all duration-300 ease-in-out group" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">
<span className="material-symbols-outlined text-xl group-hover:text-primary-container">analytics</span>
<span className="font-semibold text-sm">Relatórios</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-1">
<button className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary py-3 rounded-xl font-bold text-sm mb-4 hover:scale-105 active:scale-95 transition-transform shadow-[0px_0px_20px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined text-lg">add_circle</span>
                Novo Agendamento
            </button>
<a className="flex items-center gap-3 px-6 py-2 text-[#A0A0A0] hover:text-white transition-colors" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined text-xl">help_center</span>
<span className="font-semibold text-sm">Suporte</span>
</a>
<a className="flex items-center gap-3 px-6 py-2 text-error hover:text-error-container transition-colors" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined text-xl">logout</span>
<span className="font-semibold text-sm">Sair</span>
</a>
</div>
</aside>
{/* TopNavBar (Mobile & Content Anchor) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0px_4px_20px_rgba(0,0,0,0.5)] h-16 flex justify-between items-center px-6 md:pl-72">
<div className="flex items-center gap-4">
<span className="md:hidden text-xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</span>
<h2 className="hidden md:block text-xl font-bold text-on-surface">Gestão de Despesas</h2>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none text-xs focus:ring-0 text-on-surface w-32" placeholder="Buscar transação..." type="text"/>
</div>
<button className="p-2 text-on-surface-variant hover:text-primary-container transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary-container/30">
<img alt="Gestor" className="w-full h-full object-cover" data-alt="close-up portrait of a professional male barber with styled hair and beard looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu-bHylV_hxwLG5EJj82psUGDr3NdcuYh0M_cHgWrY53rMYv9Wn76Z9muuf2CNrYwHnb5Aeim9He3AGoR2XCZFOWu1NBpwRKvI_L78-Z4o1Ow1pHI7zAZ6zMQFpJrnTMhrLSxTCIiWVtRQ8ikyT2YL-SrsX9BlLH6CYFjU-J7VvIXlMcQog0GKV9y5GHsznLZlkWqdSDJ6Ii_DfHMdLP4EyVob_V1IxKSEW5nqrBFGE9Ar5GFYoxQTbHD0vCknvjMm55kPV-muif9X"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="pt-24 pb-24 md:pb-8 px-6 md:pl-72 min-h-screen">
{/* Action Header & Filters */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
<div className="space-y-1">
<h1 className="text-3xl font-extrabold tracking-tight">Dashboard Financeiro</h1>
<p className="text-on-surface-variant text-sm">Visão consolidada das saídas de caixa da unidade.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center bg-surface-container rounded-xl p-1 border border-outline-variant/10">
<button className="px-4 py-2 text-xs font-bold bg-primary-container text-on-primary rounded-lg">MÊS ATUAL</button>
<button className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:text-on-surface">ÚLTIMOS 90 DIAS</button>
</div>
<select className="bg-surface-container border-none text-xs font-bold rounded-xl px-4 py-2.5 focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>Todas Categorias</option>
<option>Fixas</option>
<option>Variáveis</option>
</select>
<button className="flex items-center gap-2 bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0px_0px_20px_rgba(200,255,0,0.4)]">
<span className="material-symbols-outlined text-lg">add_card</span>
                    LANÇAR NOVA DESPESA
                </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
{/* Summary Card 1: Total */}
<div className="glass-card p-6 rounded-[1.5rem] flex flex-col justify-between hover:scale-[1.02] transition-transform">
<div className="flex justify-between items-start">
<div className="p-2 bg-error/10 rounded-lg">
<span className="material-symbols-outlined text-error">trending_down</span>
</div>
<span className="text-[10px] font-bold text-error bg-error/10 px-2 py-1 rounded-full">+12% vs mês ant.</span>
</div>
<div className="mt-4">
<p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Total Despesas</p>
<h3 className="text-3xl font-extrabold mt-1">R$ 14.250,00</h3>
</div>
</div>
{/* Summary Card 2: Fixas */}
<div className="glass-card p-6 rounded-[1.5rem] flex flex-col justify-between border-l-4 border-l-primary-container/30">
<div className="p-2 bg-primary-container/10 w-fit rounded-lg">
<span className="material-symbols-outlined text-primary-container">account_balance</span>
</div>
<div className="mt-4">
<p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Despesas Fixas</p>
<h3 className="text-2xl font-bold mt-1 text-on-surface">R$ 8.400,00</h3>
<div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-primary-container h-full w-[58%]"></div>
</div>
</div>
</div>
{/* Summary Card 3: Variáveis */}
<div className="glass-card p-6 rounded-[1.5rem] flex flex-col justify-between">
<div className="p-2 bg-tertiary-container/10 w-fit rounded-lg">
<span className="material-symbols-outlined text-tertiary-fixed">shopping_bag</span>
</div>
<div className="mt-4">
<p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Despesas Variáveis</p>
<h3 className="text-2xl font-bold mt-1 text-on-surface">R$ 5.850,00</h3>
<div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-tertiary-fixed h-full w-[42%]"></div>
</div>
</div>
</div>
{/* Donut Chart / Pie Chart Representation */}
<div className="glass-card p-6 rounded-[1.5rem] flex flex-col md:col-span-3 lg:col-span-1">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Por Categoria</p>
<div className="relative w-32 h-32 mx-auto my-2">
{/* Fake SVG Pie Chart */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="40, 100" strokeWidth="6"></path>
<path className="text-error" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-40" strokeWidth="6"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset="-65" strokeWidth="6"></path>
<path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="6"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-lg font-bold">100%</span>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex justify-between items-center text-[10px]">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-container"></div> Aluguel</span>
<span className="font-bold">40%</span>
</div>
<div className="flex justify-between items-center text-[10px]">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-error"></div> Produtos</span>
<span className="font-bold">25%</span>
</div>
<div className="flex justify-between items-center text-[10px]">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div> Marketing</span>
<span className="font-bold">20%</span>
</div>
<div className="flex justify-between items-center text-[10px]">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Luz/Água</span>
<span className="font-bold">15%</span>
</div>
</div>
</div>
</div>
{/* Recent Expenses Table */}
<div className="glass-card rounded-[1.5rem] overflow-hidden">
<div className="px-6 py-5 border-b border-outline-variant/10 flex justify-between items-center">
<h3 className="font-bold text-lg">Lançamentos Recentes</h3>
<button className="text-xs text-primary-container font-bold hover:underline">Ver tudo</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
<th className="px-6 py-4">Data</th>
<th className="px-6 py-4">Categoria</th>
<th className="px-6 py-4">Descrição</th>
<th className="px-6 py-4 text-right">Valor</th>
<th className="px-6 py-4 text-center">Status</th>
<th className="px-6 py-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">
{/* Row 1 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4 text-sm font-medium">12/10/2023</td>
<td className="px-6 py-4">
<span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full">Luz/Água</span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Conta de energia - Unidade Matriz</td>
<td className="px-6 py-4 text-sm font-bold text-right">R$ 450,00</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-3 py-1 rounded-full border border-primary-container/20">Pago</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">more_vert</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4 text-sm font-medium">10/10/2023</td>
<td className="px-6 py-4">
<span className="bg-error/10 text-error text-[10px] font-bold px-2 py-1 rounded-full">Produtos</span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Estoque de Pomadas e Shampoos</td>
<td className="px-6 py-4 text-sm font-bold text-right">R$ 2.150,00</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-3 py-1 rounded-full border border-primary-container/20">Pago</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">more_vert</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4 text-sm font-medium">05/10/2023</td>
<td className="px-6 py-4">
<span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-2 py-1 rounded-full">Aluguel</span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Aluguel mensal - Sala 402</td>
<td className="px-6 py-4 text-sm font-bold text-right">R$ 5.200,00</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<span className="bg-error/10 text-error text-[10px] font-bold px-3 py-1 rounded-full border border-error/20">Atrasado</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">more_vert</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4 text-sm font-medium">03/10/2023</td>
<td className="px-6 py-4">
<span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded-full">Marketing</span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Anúncios Instagram/Facebook</td>
<td className="px-6 py-4 text-sm font-bold text-right">R$ 800,00</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<span className="bg-outline/20 text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full">Pendente</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-white/5 flex items-center justify-between border-t border-outline-variant/10">
<p className="text-xs text-on-surface-variant">Exibindo 4 de 128 lançamentos</p>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-2 rounded-lg bg-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-lg flex justify-around items-center px-4 h-20 pb-safe rounded-t-3xl border-t border-[#C8FF00]/10 shadow-[0px_-10px_30px_rgba(0,0,0,0.8)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-1 scale-110 duration-300" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Finanças</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">badge</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Equipe</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">tune</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Ajustes</span>
</a>
</nav>
{/* Floating Action Button (Mobile Contextual) */}
<button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary-container text-on-primary rounded-full shadow-[0px_0px_30px_rgba(200,255,0,0.5)] flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </div>
  );
};

export default GestODeDespesasDetalhada;
