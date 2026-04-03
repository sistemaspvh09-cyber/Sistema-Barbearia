
import React from 'react';

const RelatRiosDeFaturamentoDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/15 flex justify-between items-center px-6 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</span>
<div className="hidden md:flex items-center gap-6">
<a className="text-zinc-400 font-medium hover:text-[#C8FF00] transition-colors duration-300" href="?module=overview">Dashboard</a>
<a className="text-zinc-400 font-medium hover:text-[#C8FF00] transition-colors duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agenda</a>
<a className="text-[#C8FF00] font-bold" href="?module=financeiro&screen=configura-ofinanceira-admin">Financeiro</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-surface-container-high rounded-full px-4 py-1.5 border border-white/5">
<span className="material-symbols-outlined text-zinc-500 text-lg mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface-variant w-48" placeholder="Buscar relatório..." type="text"/>
</div>
<button className="text-zinc-400 hover:text-[#C8FF00] transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-[#C8FF00]/30 shadow-[0_0_10px_rgba(200,255,0,0.2)]">
<img alt="User Profile Avatar" data-alt="Close-up portrait of a stylish male administrator with sharp beard and modern haircut in a professional studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7GUBqINBXgORbEvaGGwhvtO6U-Bl9z4FGvRoxWHrivhW2HQ6u24EapxsAC8KRroWSbf8goiTKEKRHEmuufo7dvEd_wQz966zc4_MEGNyl6oJ5J4FjVTM1ZLKRP9C6O0BALH0CKTczxfwx34SnrB_Gf7xc-mtFvIMBYbSBAIblnEUbZyqn_e6tgt_H2ViWrkqM4n_XRrSVaT_sDzu2D-liPbcyl4lBdLTDULWO0aSYe-rixhaQfB34ydsp7Uu1mP3XRdeEo8FrsqxN"/>
</div>
</div>
</nav>
{/* SideNavBar (Desktop Only) */}
<aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 z-40 bg-[#1A1919] flex-col p-4 gap-2 pt-20">
<div className="flex items-center gap-3 px-3 mb-6">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container font-bold">analytics</span>
</div>
<div>
<h2 className="text-lg font-black text-[#C8FF00] leading-none">BarberPro</h2>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Elite Management</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium text-sm">Agenda</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 bg-[#C8FF00] text-[#4f6700] rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">group</span>
<span className="font-medium text-sm">Clientes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium text-sm">Serviços</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">badge</span>
<span className="font-medium text-sm">Equipe</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=operacao&screen=gest-ode-estoque-desktop">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium text-sm">Estoque</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-all duration-300" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium text-sm">Configurações</span>
</a>
</nav>
<button className="mt-auto flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-error transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium text-sm">Logout</span>
</button>
</aside>
{/* Main Content */}
<main className="lg:ml-64 pt-24 pb-12 px-6">
{/* Header Section */}
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div className="space-y-1">
<h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Relatórios de Faturamento</h1>
<p className="text-on-surface-variant font-medium">Análise detalhada do desempenho financeiro da unidade.</p>
</div>
<div className="flex items-center gap-3">
<div className="bg-surface-container-high px-4 py-2.5 rounded-xl border border-white/5 flex items-center gap-3 cursor-pointer hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
<span className="text-sm font-semibold">Últimos 30 dias</span>
<span className="material-symbols-outlined text-zinc-500 text-sm">expand_more</span>
</div>
<button className="bg-white/5 hover:bg-white/10 text-on-surface px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2 transition-all active:scale-95">
<span className="material-symbols-outlined text-xl">file_download</span>
<span className="text-sm font-bold">Exportar</span>
</button>
</div>
</header>
{/* KPI Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{/* Revenue Card */}
<div className="bg-surface-container p-6 rounded-2xl relative overflow-hidden group border border-white/5 transition-all hover:bg-surface-container-high">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-primary">payments</span>
</div>
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Receita Bruta</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-sm font-bold text-zinc-500">R$</span>
<h3 className="text-3xl font-black">42.850,00</h3>
</div>
<div className="flex items-center gap-1.5 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>+12.5% vs mês anterior</span>
</div>
</div>
{/* Ticket Card */}
<div className="bg-surface-container p-6 rounded-2xl border border-white/5 transition-all hover:bg-surface-container-high">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Ticket Médio</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-sm font-bold text-zinc-500">R$</span>
<h3 className="text-3xl font-black">84,50</h3>
</div>
<div className="flex items-center gap-1.5 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>+4.2% estável</span>
</div>
</div>
{/* Appointments Card */}
<div className="bg-surface-container p-6 rounded-2xl border border-white/5 transition-all hover:bg-surface-container-high">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Total de Atendimentos</p>
<div className="flex items-baseline gap-2 mb-2">
<h3 className="text-3xl font-black">507</h3>
<span className="text-sm font-bold text-zinc-500">Cortes</span>
</div>
<div className="flex items-center gap-1.5 text-error text-xs font-bold">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span>-2.1% meta diária</span>
</div>
</div>
{/* Net Profit Card */}
<div className="bg-surface-container p-6 rounded-2xl border border-white/5 transition-all hover:bg-surface-container-high">
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Lucro Líquido</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-sm font-bold text-zinc-500">R$</span>
<h3 className="text-3xl font-black text-primary">21.425,00</h3>
</div>
<div className="flex items-center gap-1.5 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">verified</span>
<span>50% margem operacional</span>
</div>
</div>
</section>
{/* Charts Section */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
{/* Line Chart Mockup */}
<div className="lg:col-span-2 bg-surface-container p-8 rounded-2xl border border-white/5">
<div className="flex items-center justify-between mb-8">
<h4 className="text-lg font-bold">Evolução de Faturamento</h4>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-xs font-medium text-zinc-400">Este mês</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-zinc-700"></span>
<span className="text-xs font-medium text-zinc-400">Mês anterior</span>
</div>
</div>
</div>
{/* SVG Chart Mockup */}
<div className="relative h-64 w-full flex items-end justify-between pt-10">
<svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 300">
{/* Background Grid */}
<line stroke="white" strokeOpacity="0.05" x1="0" x2="1000" y1="0" y2="0"></line>
<line stroke="white" strokeOpacity="0.05" x1="0" x2="1000" y1="100" y2="100"></line>
<line stroke="white" strokeOpacity="0.05" x1="0" x2="1000" y1="200" y2="200"></line>
<line stroke="white" strokeOpacity="0.05" x1="0" x2="1000" y1="300" y2="300"></line>
{/* Area Gradient */}
<path d="M0,300 L0,150 C200,100 400,250 600,120 C800,80 1000,180 1000,180 L1000,300 Z" fill="url(#gradient-chart)" fillOpacity="0.1"></path>
<defs>
<lineargradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#C8FF00"></stop>
<stop offset="100%" stopColor="#C8FF00" stopOpacity="0"></stop>
</lineargradient>
</defs>
{/* Line Path */}
<path d="M0,150 C200,100 400,250 600,120 C800,80 1000,180 1000,180" fill="none" stroke="#C8FF00" strokeLinecap="round" strokeWidth="4"></path>
</svg>
{/* Days Labels */}
<span className="text-[10px] text-zinc-600 font-bold uppercase">Semana 1</span>
<span className="text-[10px] text-zinc-600 font-bold uppercase">Semana 2</span>
<span className="text-[10px] text-zinc-600 font-bold uppercase">Semana 3</span>
<span className="text-[10px] text-zinc-600 font-bold uppercase">Semana 4</span>
</div>
</div>
{/* Doughnut Chart Mockup */}
<div className="bg-surface-container p-8 rounded-2xl border border-white/5 flex flex-col">
<h4 className="text-lg font-bold mb-8">Métodos de Pagamento</h4>
<div className="flex-1 flex flex-col items-center justify-center">
<div className="relative w-44 h-44 mb-8">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="#262626" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#C8FF00" strokeDasharray="45, 100" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#A0A0A0" strokeDasharray="20, 100" strokeDashoffset="-45" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Principal</span>
<span className="text-xl font-black">Pix</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 w-full">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[11px] font-bold text-zinc-400">Pix (45%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-400"></span>
<span className="text-[11px] font-bold text-zinc-400">Crédito (35%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-600"></span>
<span className="text-[11px] font-bold text-zinc-400">Débito (15%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="text-[11px] font-bold text-zinc-400">Dinheiro (5%)</span>
</div>
</div>
</div>
</div>
</section>
{/* Lower Grid: Table + DRE */}
<section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
{/* Performance Table */}
<div className="xl:col-span-2 bg-surface-container rounded-2xl border border-white/5 overflow-hidden">
<div className="p-6 border-b border-white/5 flex items-center justify-between">
<h4 className="text-lg font-bold">Desempenho por Barbeiro</h4>
<button className="text-primary text-sm font-bold hover:underline">Ver tudo</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high/50">
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Barbeiro</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Atendimentos</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Faturamento</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Comissão</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Rank</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden border border-primary/20">
<img alt="Barber Carlos" data-alt="Portrait of a professional barber with tattoos and a sleek black apron in a high-end barbershop environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkJubbhDxYsa3bj2t1G07Gd6dtIlMWdQvjpz_42kz0MQxAD9d2GvYiQpo74sEHPHVdfWbrVKvGfLpAx4tsfS7UYt3b0m2H2QkxK1EcOZRotegi0OFIeO3rXjUqLifsQN8uSTIXL5gvt8Ey0RQPSIq0aUzPGenioSnwk6Zpz8Z5sDPxtsGkOOltJqV1y7JCX63DF4ZdRAQwrvFZQ7Jc0ZmcXtXCOOF5pxNuoiEQiMK9aO30pHyUZREh1brUjyzJBYIqqnvbSEf6a0Pz"/>
</div>
<div>
<p className="text-sm font-bold">Carlos "The Blade"</p>
<p className="text-[10px] text-zinc-500">Master Barber</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">142</td>
<td className="px-6 py-4 text-right font-bold text-primary">R$ 12.450,00</td>
<td className="px-6 py-4 text-right font-medium text-zinc-400">R$ 4.980,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black">#1</span>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden border border-white/10">
<img alt="Barber Andre" data-alt="Close up of a smiling young male barber with short hair and modern tools in his hand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_KZLCPVQIMRvmMtAZ88aEYD_gx8DaSnSyNKKIkUEME4Ob8BBnfiYrjfzuGrDeXcLKpB8OTtXeDw3C3RAYdCdZWbKHys8KbxwJMsXGqX3dkA8VyzA9fyuR_nkIyTYZUd9vKru420E5vTlRoLg-EyrFDmjvR3JDoRCj9BdO09fcAbla7GwtAS-rQyZMUhaof-QMVjZS6rLv4Cy2Kfvnab81yLl0N64hKQ6_vbV4Owo5RAn1lD9mI7IfhLRmR1Pr8DHMbz87T3gt_Es"/>
</div>
<div>
<p className="text-sm font-bold">André Silva</p>
<p className="text-[10px] text-zinc-500">Senior Barber</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">128</td>
<td className="px-6 py-4 text-right font-bold">R$ 10.880,00</td>
<td className="px-6 py-4 text-right font-medium text-zinc-400">R$ 4.352,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-black">#2</span>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden border border-white/10">
<img alt="Barber Julio" data-alt="Portrait of a focused male barber specializing in artistic line work and fades" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqc_H2yoWdwNshoxN-JKnlSsLRz6cN6qos8QVpT85cqhV5woVtHE-EXSY9ez_qGi4rDC3X6lcn0s5UDXV_844Wi42AlEVtMmS3WKHo6ne5FsL5hyVxgCkU8MV37GPSRi4pqdLG7x51PeXbt9loTgibNXzLj8XAyJJJOdhLIhZwdVRKFDmz2rm56iz2OujUWDDe_lrxDHL6ewfGrkPFpqsn1LeD2W1IlAjQeBVL4u0gIws1OeQmmfyg3FRdLSBzBVTAX5u_8PWBKUhn"/>
</div>
<div>
<p className="text-sm font-bold">Julio César</p>
<p className="text-[10px] text-zinc-500">Junior Barber</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">95</td>
<td className="px-6 py-4 text-right font-bold">R$ 7.600,00</td>
<td className="px-6 py-4 text-right font-medium text-zinc-400">R$ 2.280,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-black">#3</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* DRE Card */}
<div className="bg-surface-container rounded-2xl border border-white/5 overflow-hidden flex flex-col">
<div className="p-6 bg-surface-container-high flex items-center gap-3">
<span className="material-symbols-outlined text-primary">receipt_long</span>
<h4 className="text-lg font-bold">Demonstrativo (DRE)</h4>
</div>
<div className="p-8 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div className="flex justify-between items-center group">
<span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors cursor-default">(+) Receita Bruta</span>
<span className="font-bold">R$ 42.850,00</span>
</div>
<div className="flex justify-between items-center group">
<span className="text-sm font-bold text-zinc-400 group-hover:text-error transition-colors cursor-default">(-) Comissões Pagas</span>
<span className="font-bold text-error">- R$ 13.420,00</span>
</div>
<div className="flex justify-between items-center group pb-4 border-b border-white/5">
<span className="text-sm font-bold text-zinc-400 group-hover:text-error transition-colors cursor-default">(-) Despesas Operacionais</span>
<span className="font-bold text-error">- R$ 8.005,00</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-lg font-black text-on-surface">(=) Lucro Líquido</span>
<div className="text-right">
<p className="text-2xl font-black text-primary">R$ 21.425,00</p>
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Margem: 50,0%</p>
</div>
</div>
</div>
<div className="bg-surface-container-high/50 p-4 rounded-xl border border-dashed border-white/10 mt-auto">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-sm text-primary">lightbulb</span>
<p className="text-[11px] font-bold text-zinc-300">Dica de Gestão</p>
</div>
<p className="text-[11px] text-zinc-500 leading-relaxed italic">Suas comissões estão dentro da meta (31%). Considere otimizar as despesas fixas para aumentar a margem em 5% no próximo trimestre.</p>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#1A1919]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-16 px-4 z-50">
<a className="flex flex-col items-center gap-1 text-zinc-500" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-[#C8FF00]" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="text-[10px] font-bold">Finanças</span>
</a>
<div className="relative -top-4">
<button className="bg-primary-container h-12 w-12 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,255,0,0.4)] active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-primary-container font-black">add</span>
</button>
</div>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span>
<span className="text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default RelatRiosDeFaturamentoDesktop;
