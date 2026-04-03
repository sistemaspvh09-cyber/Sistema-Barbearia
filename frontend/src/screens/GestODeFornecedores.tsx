
import React from 'react';

const GestODeFornecedores: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Authority: JSON) */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col h-screen w-64 border-r border-white/10 bg-[#0D0D0D] shadow-[40px_0_40px_rgba(0,0,0,0.5)]">
<div className="p-8">
<span className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</span>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">Management SaaS</p>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">calendar_today</span> Agenda
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">groups</span> Clients
            </a>
{/* Active State: Inventory (Contextual for Suppliers/Purchasing) */}
<a className="flex items-center gap-3 px-4 py-3 text-[#C8FF00] bg-white/5 rounded-lg border-l-4 border-[#C8FF00]" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">payments</span> Finance
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">badge</span> Team
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors hover:bg-white/5 hover:scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined">settings</span> Settings
            </a>
</nav>
<div className="p-6">
<button className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-bold text-sm tracking-tight flex items-center justify-center gap-2 neon-glow transition-all active:scale-95">
<span className="material-symbols-outlined">add</span> New Appointment
            </button>
</div>
</aside>
{/* TopNavBar (Authority: JSON) */}
<header className="fixed top-0 right-0 left-64 h-16 px-8 flex justify-between items-center z-30 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5">
<div className="flex items-center flex-1">
<div className="relative w-96 group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#C8FF00]/50 transition-all placeholder:text-on-surface-variant" placeholder="Search suppliers or orders..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-[#C8FF00] transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#C8FF00] rounded-full border-2 border-[#0D0D0D]"></span>
</button>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-right">
<p className="text-xs font-bold">Admin User</p>
<p className="text-[10px] text-on-surface-variant">Store Manager</p>
</div>
<img className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-[#C8FF00]/50 transition-colors" data-alt="close-up portrait of a professional male manager in a modern studio with sharp lighting and dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-cRAuY-JV8PVMZZ7ZrGcU9sj82hZGkmlOofP9s0RDId1snxXi3qLGs0eL-c2K-U-N5Sf1A8jdRW6U4voqiQQmC_Fao9Td09Vnn0chhHW88cD6Bu_KrTaXaFL21Mve1XqCoJ2mk_yNEkAx_PIlKrvjlLvssg5rl-ogfHG34a9ODzia8m4orI2Rt0Pe5HuHEgszEGOrv7Or6i4Di2ODTIm0vYPFUO6L7tjsf11IXaw0kN24Do10ZbOJ-4qXG5eY1g-jQi6TzNx7ByVa"/>
</div>
</div>
</header>
{/* Main Content */}
<main className="ml-64 pt-24 p-8 min-h-screen bg-background">
{/* Header Actions */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
<div>
<h1 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">Suprimentos &amp; Compras</h1>
<p className="text-on-surface-variant font-medium">Gerencie sua cadeia de suprimentos com precisão editorial.</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 bg-surface-container text-on-surface font-bold rounded-xl glass-border hover:bg-surface-container-high transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-xl">person_add</span>
                    Novo Fornecedor
                </button>
<button className="px-6 py-3 bg-primary-container text-on-primary font-bold rounded-xl neon-glow transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                    Nova Compra
                </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-6">
{/* Suppliers Table Section (Major Content) */}
<div className="col-span-12 lg:col-span-8 bg-surface-container rounded-2xl p-1 glass-border overflow-hidden">
<div className="p-6 flex justify-between items-center border-b border-white/5">
<h2 className="text-xl font-bold tracking-tight">Fornecedores Homologados</h2>
<span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">12 Ativos</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-on-surface-variant text-[10px] uppercase tracking-widest border-b border-white/5">
<th className="px-6 py-4 font-bold">Fornecedor</th>
<th className="px-6 py-4 font-bold">CNPJ</th>
<th className="px-6 py-4 font-bold">Categoria</th>
<th className="px-6 py-4 font-bold">Contato</th>
<th className="px-6 py-4 font-bold text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">content_cut</span>
</div>
<div>
<p className="font-bold text-sm">Blade &amp; Steel Co.</p>
<p className="text-xs text-on-surface-variant">Lâminas e Tesouras</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">12.345.678/0001-90</td>
<td className="px-6 py-5">
<span className="px-2 py-1 rounded bg-surface-container-high text-[10px] font-bold text-on-surface border border-white/10 uppercase">Ferramentas</span>
</td>
<td className="px-6 py-5 text-sm">contato@bladesteel.com</td>
<td className="px-6 py-5 text-right">
<button className="text-on-surface-variant hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">sanitizer</span>
</div>
<div>
<p className="font-bold text-sm">Grooming Essentials</p>
<p className="text-xs text-on-surface-variant">Cosméticos Masculinos</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">98.765.432/0001-21</td>
<td className="px-6 py-5">
<span className="px-2 py-1 rounded bg-surface-container-high text-[10px] font-bold text-on-surface border border-white/10 uppercase">Higiene</span>
</td>
<td className="px-6 py-5 text-sm">vendas@grooming.com.br</td>
<td className="px-6 py-5 text-right">
<button className="text-on-surface-variant hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">chair</span>
</div>
<div>
<p className="font-bold text-sm">Vintage Furniture</p>
<p className="text-xs text-on-surface-variant">Mobiliário de Luxo</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">45.221.009/0001-11</td>
<td className="px-6 py-5">
<span className="px-2 py-1 rounded bg-surface-container-high text-[10px] font-bold text-on-surface border border-white/10 uppercase">Móveis</span>
</td>
<td className="px-6 py-5 text-sm">atendimento@vintage.com</td>
<td className="px-6 py-5 text-right">
<button className="text-on-surface-variant hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-white/5 flex justify-center">
<button className="text-[10px] font-bold uppercase tracking-widest text-[#C8FF00] hover:underline">Ver Todos Fornecedores</button>
</div>
</div>
{/* Recent Orders Section (Side Panel) */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container rounded-2xl p-6 glass-border flex-1">
<h2 className="text-xl font-bold tracking-tight mb-6">Ordens Recentes</h2>
<div className="space-y-6">
{/* Order Item */}
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low glass-border relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#C8FF00]"></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">#ORD-2024-001</p>
<span className="px-2 py-0.5 rounded text-[8px] font-black bg-[#C8FF00]/10 text-[#C8FF00] uppercase border border-[#C8FF00]/20">Recebido</span>
</div>
<h3 className="font-bold text-sm mb-1">Kit Lâminas Premium x50</h3>
<p className="text-xs text-on-surface-variant">Blade &amp; Steel Co.</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-sm font-extrabold">R$ 1.250,00</span>
<span className="text-[10px] text-on-surface-variant">12 Mai, 2024</span>
</div>
</div>
</div>
{/* Order Item */}
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5 relative group">
<div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">#ORD-2024-002</p>
<span className="px-2 py-0.5 rounded text-[8px] font-black bg-yellow-500/10 text-yellow-500 uppercase border border-yellow-500/20">Pendente</span>
</div>
<h3 className="font-bold text-sm mb-1">Tônico de Barba Oak</h3>
<p className="text-xs text-on-surface-variant">Grooming Essentials</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-sm font-extrabold">R$ 840,00</span>
<span className="text-[10px] text-on-surface-variant">15 Mai, 2024</span>
</div>
</div>
</div>
{/* Order Item */}
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5 relative group opacity-60">
<div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">#ORD-2024-003</p>
<span className="px-2 py-0.5 rounded text-[8px] font-black bg-error/10 text-error uppercase border border-error/20">Cancelado</span>
</div>
<h3 className="font-bold text-sm mb-1">Cadeira Executiva Noir</h3>
<p className="text-xs text-on-surface-variant">Vintage Furniture</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-sm font-extrabold">R$ 4.500,00</span>
<span className="text-[10px] text-on-surface-variant">10 Mai, 2024</span>
</div>
</div>
</div>
</div>
</div>
{/* Stats Card */}
<div className="bg-[#C8FF00] rounded-2xl p-6 shadow-[0px_20px_40px_rgba(200,255,0,0.15)]">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-on-primary text-3xl">trending_up</span>
<p className="text-[10px] font-black uppercase tracking-widest text-on-primary-container">Budget Mensal</p>
</div>
<h3 className="text-3xl font-extrabold text-on-primary tracking-tighter">R$ 15.400</h3>
<div className="mt-4 w-full bg-on-primary/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-on-primary h-full" style={{ width: '65%' }}></div>
</div>
<p className="mt-2 text-[10px] font-bold text-on-primary/70 uppercase">65% utilizado do limite previsto</p>
</div>
</div>
</div>
{/* Featured Section: Insights */}
<div className="mt-12">
<h2 className="text-sm font-black uppercase tracking-[0.3em] text-on-surface-variant mb-6 text-center">Insights de Performance</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-8 rounded-2xl glass-border hover:scale-[1.02] transition-all">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Ticket Médio Compra</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold">R$ 1.840</span>
<span className="text-xs text-[#C8FF00] font-bold">+12%</span>
</div>
</div>
<div className="bg-surface-container-low p-8 rounded-2xl glass-border hover:scale-[1.02] transition-all">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Tempo de Entrega</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold">4.2 Dias</span>
<span className="text-xs text-[#C8FF00] font-bold">-0.5d</span>
</div>
</div>
<div className="bg-surface-container-low p-8 rounded-2xl glass-border hover:scale-[1.02] transition-all">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Ruptura de Estoque</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold">2.1%</span>
<span className="text-xs text-error font-bold">+0.4%</span>
</div>
</div>
</div>
</div>
</main>
{/* Background Decoration for Neon Noir Feel */}
<div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C8FF00]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

    </div>
  );
};

export default GestODeFornecedores;
