
import React from 'react';

const PerformanceDeBarbeirosAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar (Shared Component) */}
<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0px_4px_20px_rgba(0,0,0,0.5)] h-16 flex justify-between items-center px-6">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</span>
</div>
<div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
<a className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">Financeiro</a>
<a className="text-[#C8FF00] font-bold" href="?module=operacao&screen=gest-ode-equipe-admin">Equipe</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">Relatórios</a>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#A0A0A0] cursor-pointer hover:text-[#C8FF00]">notifications</span>
<span className="material-symbols-outlined text-[#A0A0A0] cursor-pointer hover:text-[#C8FF00]">settings</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8FF00]/30">
<img alt="Foto do Perfil do Gestor" data-alt="close-up portrait of a professional male salon manager with a neat beard and stylish hair in a modern barbershop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLr9e7dhQSS7u-drXPt-5TeWmbBjc1hBJvai6cff_AIyHRtgweVRHQ0M1UN4FYpnCMr_0ZkwInyigtOJz_X9oZ84rt4AY6S5WqYXX0ULEhw0Zc_26zzaylbjA7UfUMz_oAEDssvsmBrbC_xQiwogBRohelHC8GIHj43fB9sB6vROpG2KpZ6jXMl24TK8POEFNUoSG1-xrb8J-2YuEWd1LXrrTwM7d_bRQahi4-q4X2E-N4OVG3nD7n6-9MsBNtJXdlombfci4GGVIg"/>
</div>
</div>
</nav>
{/* SideNavBar (Desktop Only) */}
<aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#1A1919] flex-col py-8 gap-2 shadow-2xl z-40 pt-20">
<div className="px-6 mb-8">
<h2 className="text-[#C8FF00] font-bold text-lg">BarberPro Admin</h2>
<p className="text-[#A0A0A0] text-xs">Gestão de Alta Performance</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-semibold">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm font-semibold">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#C8FF00]/10 text-[#C8FF00] border-r-4 border-[#C8FF00] transition-all duration-300" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">group</span>
<span className="text-sm font-semibold">Equipe</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300" href="#">
<span className="material-symbols-outlined">shopping_cart_checkout</span>
<span className="text-sm font-semibold">Checkout</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">
<span className="material-symbols-outlined">analytics</span>
<span className="text-sm font-semibold">Relatórios</span>
</a>
</nav>
<div className="mt-auto px-6 flex flex-col gap-2">
<button className="w-full py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0px_0px_20px_rgba(200,255,0,0.3)]">
                Novo Agendamento
            </button>
<div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white text-sm" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined text-sm">help_center</span> Suporte
                </a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white text-sm" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined text-sm">logout</span> Sair
                </a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="md:ml-64 pt-24 pb-24 px-4 md:px-8">
{/* Header & Filters */}
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Performance da Equipe</h1>
<p className="text-on-surface-variant max-w-xl">Analise a eficiência, retenção e resultados financeiros de cada profissional em tempo real.</p>
</div>
<div className="flex items-center gap-3 bg-surface-container rounded-2xl p-2 border border-white/5">
<button className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest bg-primary-container text-on-primary-container">Este Mês</button>
<button className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">Últimos 90 Dias</button>
<div className="h-8 w-[1px] bg-white/10 mx-1"></div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</header>
{/* Bento Grid Section */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
{/* Featured: Barbeiro do Mês */}
<div className="md:col-span-4 bg-surface-container rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-10 -mt-10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-tighter border border-primary/20">Destaque do Mês</span>
<span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary group-hover:scale-110 transition-transform duration-500">
<img alt="Barbeiro do Mês" data-alt="close-up of a stylish male barber with tattoos and professional attire smiling in a high-end salon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYw5kt6Ggs5QIZm3SWSwQNZi3_HLC_-lQloUErcG1PXkehaaJua6nkmAaKJdU434aN0QH8TM-q7_odSnd5V02EVD1UUp0rcJxgBifc3Ifreou2IBXLpUufquOsJtqoCsZqssU5EIdipHqrx6PfZ4QqEMcaUSwCdAgG64TX_tZl2DPvP8kW4d69dqD_XODFDXyW473_0LV7VtIic0UvfE1sJQjCeqHLu6LOBXJ6dUrEYLg3rTw61VcQXZjjhLJggnfXqt8HMrjVfmLD"/>
</div>
<div>
<h3 className="text-2xl font-bold tracking-tight">Ricardo Silva</h3>
<p className="text-on-surface-variant text-sm">Especialista em Fade</p>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-on-surface-variant text-sm">Faturamento</span>
<span className="text-xl font-bold text-primary">R$ 14.280</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[92%] rounded-full shadow-[0px_0px_10px_rgba(200,255,0,0.5)]"></div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div>
<p className="text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Retenção</p>
<p className="text-lg font-bold">88%</p>
</div>
<div>
<p className="text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Avaliação</p>
<p className="text-lg font-bold flex items-center gap-1">4.9 <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></p>
</div>
</div>
</div>
</div>
</div>
{/* Main Chart: Performance Comparativa */}
<div className="md:col-span-8 bg-surface-container rounded-[2rem] p-8 border border-white/5 relative overflow-hidden">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-bold tracking-tight">Performance Mensal</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-xs text-on-surface-variant">Atual</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<span className="text-xs text-on-surface-variant">Anterior</span>
</div>
</div>
</div>
{/* Mock Chart Visualization */}
<div className="h-48 flex items-end justify-between gap-2 md:gap-4 px-2">
<div className="flex flex-col items-center flex-1 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="bg-white/10 w-full rounded-t-lg transition-all" style={{ height: '40%' }}></div>
<div className="bg-primary w-full rounded-t-lg shadow-[0px_0px_15px_rgba(200,255,0,0.1)] group-hover:shadow-[0px_0px_20px_rgba(200,255,0,0.3)] transition-all" style={{ height: '60%' }}></div>
</div>
<span className="mt-4 text-[10px] text-on-surface-variant font-bold uppercase">Sem 01</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="bg-white/10 w-full rounded-t-lg" style={{ height: '55%' }}></div>
<div className="bg-primary w-full rounded-t-lg shadow-[0px_0px_15px_rgba(200,255,0,0.1)] group-hover:shadow-[0px_0px_20px_rgba(200,255,0,0.3)]" style={{ height: '75%' }}></div>
</div>
<span className="mt-4 text-[10px] text-on-surface-variant font-bold uppercase">Sem 02</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="bg-white/10 w-full rounded-t-lg" style={{ height: '45%' }}></div>
<div className="bg-primary w-full rounded-t-lg shadow-[0px_0px_15px_rgba(200,255,0,0.1)] group-hover:shadow-[0px_0px_20px_rgba(200,255,0,0.3)]" style={{ height: '90%' }}></div>
</div>
<span className="mt-4 text-[10px] text-on-surface-variant font-bold uppercase">Sem 03</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="bg-white/10 w-full rounded-t-lg" style={{ height: '70%' }}></div>
<div className="bg-primary w-full rounded-t-lg shadow-[0px_0px_15px_rgba(200,255,0,0.1)] group-hover:shadow-[0px_0px_20px_rgba(200,255,0,0.3)]" style={{ height: '85%' }}></div>
</div>
<span className="mt-4 text-[10px] text-on-surface-variant font-bold uppercase">Sem 04</span>
</div>
</div>
</div>
</div>
{/* Metrics Row */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div className="bg-surface-container rounded-3xl p-6 border border-white/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">query_stats</span>
</div>
<div>
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Ocupação Média</p>
<p className="text-2xl font-bold">82.4%</p>
<p className="text-xs text-primary font-medium">+4.1% vs mês ant.</p>
</div>
</div>
<div className="bg-surface-container rounded-3xl p-6 border border-white/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">sync_alt</span>
</div>
<div>
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Taxa Retorno</p>
<p className="text-2xl font-bold">64.1%</p>
<p className="text-xs text-primary font-medium">+12% vs mês ant.</p>
</div>
</div>
<div className="bg-surface-container rounded-3xl p-6 border border-white/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div>
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Ticket Médio</p>
<p className="text-2xl font-bold">R$ 112</p>
<p className="text-xs text-error font-medium">-2.3% vs mês ant.</p>
</div>
</div>
<div className="bg-surface-container rounded-3xl p-6 border border-white/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">timer</span>
</div>
<div>
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Tempo Médio</p>
<p className="text-2xl font-bold">38min</p>
<p className="text-xs text-primary font-medium">-5min otimização</p>
</div>
</div>
</div>
{/* Ranking Table */}
<div className="bg-surface-container rounded-[2.5rem] border border-white/5 overflow-hidden">
<div className="p-8 border-b border-white/5 flex justify-between items-center">
<h3 className="text-2xl font-bold tracking-tight">Ranking de Barbeiros</h3>
<button className="flex items-center gap-2 text-primary font-bold text-sm">
                    Ver Relatório Completo <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left">
<thead>
<tr className="text-[10px] uppercase text-on-surface-variant tracking-widest border-b border-white/5">
<th className="px-8 py-4 font-bold">Posição</th>
<th className="px-8 py-4 font-bold">Profissional</th>
<th className="px-8 py-4 font-bold">Faturamento</th>
<th className="px-8 py-4 font-bold">Ocupação</th>
<th className="px-8 py-4 font-bold">Retenção</th>
<th className="px-8 py-4 font-bold">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">01</div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Ricardo Silva" className="w-10 h-10 rounded-xl" data-alt="portrait of a professional male barber with a confident look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK-_VXA4CFw_RBphVH3hNvqvHqk0cMnIo-D4UePw3mA_BnWjsPeAORKc6SdgReCL--bkcBv5Qp3eu7uG95bXPv7XK87BE4Qb9cfY_qC3IrMr93fWvnBnQzkfj2CckenUdll9MdkBgWY7HH4abVNCYx4dDr9ebTQxFE_zWmhZBYdXlUVqqKxjJi5bK706pmJMCqVB-v0U2jEeyULlALhp0VRlVEJZDLPk7ulSui-OwK5JCoL1eAHMMDPcY8OCHPIw9Xo_iX9jBU-fRC"/>
<div>
<p className="font-bold text-on-surface">Ricardo Silva</p>
<p className="text-xs text-on-surface-variant">Master Barber</p>
</div>
</div>
</td>
<td className="px-8 py-6 font-bold">R$ 14.280,00</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2">
<div className="w-12 bg-white/10 h-1.5 rounded-full">
<div className="bg-primary h-full w-[92%] rounded-full"></div>
</div>
<span className="text-xs font-bold">92%</span>
</div>
</td>
<td className="px-8 py-6">
<span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">88%</span>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2 text-xs font-bold text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Em Atendimento
                                </div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant font-black text-xs">02</div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Felipe Costa" className="w-10 h-10 rounded-xl" data-alt="portrait of a focused male hairstylist in a sleek black shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9FR4agtHS_n8Qo14Zff-pZiKU_ru8jPTrS4HaRZZN2eojoxD8dG12zhSEnDGqeTsaZcp7WKb8orZRyFPQY8N6COVXvTGRmsvbjfFnzZVckEqc9uFapWtqSJw3RKHHGVGUv8Keg9RWD1pDzZidTVQ3UYkBGBtbPqFDAdUqjxtp6Zb87SetDNFeC9PhyiamHX60oJZ5L9zBJkVz-8EL1mXQ6H6nMpUFrydF5-iEvzZZiQJ7bSSSg8bCJt-eG2CA-tWGrDDOHsY-W5-6"/>
<div>
<p className="font-bold text-on-surface">Felipe Costa</p>
<p className="text-xs text-on-surface-variant">Senior Barber</p>
</div>
</div>
</td>
<td className="px-8 py-6 font-bold">R$ 11.940,00</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2">
<div className="w-12 bg-white/10 h-1.5 rounded-full">
<div className="bg-primary h-full w-[78%] rounded-full"></div>
</div>
<span className="text-xs font-bold">78%</span>
</div>
</td>
<td className="px-8 py-6">
<span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">72%</span>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-on-surface-variant"></span> Disponível
                                </div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant font-black text-xs">03</div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Tiago Souza" className="w-10 h-10 rounded-xl" data-alt="side profile of a young professional barber with sharp features" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI5stugOkgBWQeoVz-PczrbWGA9BZxl8_3T3nE_lJ04iJ-fzU55OaUGPLOSsCV6HCITAVw2xEy_bl2zw0p3BwaJ58UzscQPHCoksXDMqnC9UTcwPvfolf_9MKnQc-fbvR-3dS0ojJEFPnCZ5Cqu0AcGFw-TCKxYVrfUvGWBpgtomHdbWQkl1pF5IMDn8tolPyS_Kbt6Frl39QbOv16JVrcfP_X1kH0iyWat2XvnI56IjAmmBGspWczd4mv2zG-fGlSdnGlwvaqPl3-"/>
<div>
<p className="font-bold text-on-surface">Tiago Souza</p>
<p className="text-xs text-on-surface-variant">Barber Specialist</p>
</div>
</div>
</td>
<td className="px-8 py-6 font-bold">R$ 10.120,00</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2">
<div className="w-12 bg-white/10 h-1.5 rounded-full">
<div className="bg-primary h-full w-[65%] rounded-full"></div>
</div>
<span className="text-xs font-bold">65%</span>
</div>
</td>
<td className="px-8 py-6">
<span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">68%</span>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-2 text-xs font-bold text-error">
<span className="w-2 h-2 rounded-full bg-error"></span> Ausente
                                </div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only Shared Component) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-20 bg-[#0D0D0D]/80 backdrop-blur-lg border-t border-[#C8FF00]/10 pb-safe rounded-t-3xl shadow-[0px_-10px_30px_rgba(0,0,0,0.8)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Finan.</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-1" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">badge</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Equipe</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">tune</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Ajustes</span>
</a>
</nav>

    </div>
  );
};

export default PerformanceDeBarbeirosAnalytics;
