
import React from 'react';

const CadastrarNovoProduto: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* BACKGROUND CONTENT (Estoque Screen) */}
<div className="min-h-screen flex flex-col opacity-40 grayscale-[0.5] pointer-events-none">
{/* TopNavBar Execution */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_40px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-8 h-20">
<div className="text-2xl font-extrabold text-[#C8FF00] tracking-tighter font-['Plus_Jakarta_Sans']">BarberPro</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agenda</a>
<a className="text-[#C8FF00] border-b-2 border-[#C8FF00] pb-1 font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">Estoque</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">Clientes</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="?module=financeiro&screen=configura-ofinanceira-admin">Financeiro</a>
</nav>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#A0A0A0]">notifications</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" data-alt="Professional headshot of a middle-aged male barber with a neat beard in a stylish barbershop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfO743Wdszs0_Ypdsd12h5SEcj-tLQ43FshFqr9aZs4NQ65rtyKSS1wGUgPt4HTMErRhH3VmgWVTgUUNTuYy0R3BxoWWG0F_9ixcURn1y_LTaaX9CDF-bEoxxBLvzbIbnQnFB__7dGLR27rIWEdX4Jb9Lok88vhdiOLrRnkQiewvblFz46kuCB8TWvHVN-ZrE7uJM-ARhV4rqomW18B7rOMp11DM9gszATgnvu2cObL-9VdJpUCJPDJ0dgH6rjd6xe2z0fO90JKMPv"/>
</div>
</div>
</header>
{/* SideNavBar Execution */}
<aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-[#1A1919] flex flex-col py-6 gap-2">
<div className="px-6 mb-6">
<h2 className="text-[#C8FF00] font-bold font-['Plus_Jakarta_Sans']">Gestão de Estoque</h2>
<p className="text-xs text-[#A0A0A0]">Controle de Insumos</p>
</div>
<div className="space-y-1">
<div className="text-[#A0A0A0] hover:text-white px-4 flex items-center gap-3 py-3 rounded-xl mx-2 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-medium">Visão Geral</span>
</div>
<div className="bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 shadow-[0_0_20px_rgba(200,255,0,0.2)] flex items-center gap-3 py-3 px-4 translate-x-1 transition-transform">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium">Produtos</span>
</div>
<div className="text-[#A0A0A0] hover:text-white px-4 flex items-center gap-3 py-3 rounded-xl mx-2 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined">local_shipping</span>
<span className="font-medium">Fornecedores</span>
</div>
<div className="text-[#A0A0A0] hover:text-white px-4 flex items-center gap-3 py-3 rounded-xl mx-2 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined">swap_horiz</span>
<span className="font-medium">Movimentações</span>
</div>
</div>
</aside>
{/* Content Canvas Placeholder */}
<main className="ml-64 mt-20 p-8 flex-1">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-3xl font-extrabold tracking-tight">Estoque de Produtos</h1>
<p className="text-on-surface-variant">Gerencie seus insumos e produtos de revenda.</p>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-3 rounded-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined">add</span> Novo Produto
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Mock Cards */}
<div className="bg-surface-container rounded-xl p-6 ghost-border">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-[#C8FF00]">soap</span>
</div>
<span className="bg-primary-container/10 text-primary-fixed text-xs px-2 py-1 rounded">Em estoque</span>
</div>
<h3 className="font-bold text-lg">Pomada Modeladora Matte</h3>
<p className="text-on-surface-variant text-sm mb-4">SKU: BARB-001 • Categoria: Finalizadores</p>
<div className="flex justify-between items-end">
<span className="text-2xl font-bold">R$ 45,90</span>
<span className="text-sm text-on-surface-variant">42 unidades</span>
</div>
</div>
{/* Repeat cards for background depth */}
<div className="bg-surface-container rounded-xl p-6 ghost-border"></div>
<div className="bg-surface-container rounded-xl p-6 ghost-border"></div>
</div>
</main>
</div>
{/* MODAL OVERLAY */}
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
{/* Backdrop */}
<div className="absolute inset-0 bg-black/80 backdrop-blur-2xl"></div>
{/* Modal Container */}
<div className="relative w-full max-w-4xl bg-[#0D0D0D] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] ghost-border animate-in fade-in zoom-in duration-300">
{/* Header */}
<div className="flex items-center justify-between px-8 py-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[#C8FF00]">inventory_2</span>
</div>
<h2 className="text-xl font-extrabold tracking-tight">Cadastrar Novo Produto</h2>
</div>
<button className="p-2 hover:bg-white/5 rounded-full transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">close</span>
</button>
</div>
{/* Form Body */}
<div className="px-8 py-8 max-h-[768px] overflow-y-auto no-scrollbar">
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10">
{/* Product Photo Section */}
<div className="md:col-span-4 space-y-4">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Foto do Produto</label>
<div className="relative group cursor-pointer aspect-square rounded-2xl bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-3 hover:border-[#C8FF00] hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-4xl text-outline">add_a_photo</span>
<p className="text-xs text-center text-on-surface-variant px-4">Arraste a imagem ou <span className="text-[#C8FF00]">clique para buscar</span></p>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
<p className="text-[10px] text-on-surface-variant leading-relaxed text-center">Formatos aceitos: JPG, PNG. Tamanho máximo 2MB.</p>
</div>
{/* Basic Info Section */}
<div className="md:col-span-8 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Nome do Produto</label>
<input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface placeholder:text-outline transition-all py-3 px-4" placeholder="Ex: Óleo para Barba Wood" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Marca</label>
<input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface placeholder:text-outline transition-all py-3 px-4" placeholder="Ex: BarberPro Essentials" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">SKU</label>
<div className="relative">
<input className="w-full bg-surface-container border-none rounded-xl text-on-surface-variant py-3 px-4 font-mono" readOnly="" type="text" value="BPR-7729-XT"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm text-outline">lock</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Categoria</label>
<div className="relative">
<select className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface appearance-none py-3 px-4">
<option>Selecione uma categoria</option>
<option>Cabelo</option>
<option>Barba</option>
<option>Finalizadores</option>
<option>Acessórios</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
</div>
{/* Financial Section */}
<div className="bg-surface-container-low/50 rounded-2xl p-6 ghost-border space-y-6">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-[#C8FF00] text-sm">payments</span>
<h3 className="text-sm font-bold uppercase tracking-wider">Informações Financeiras</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="text-xs text-on-surface-variant">Preço de Custo (R$)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm">R$</span>
<input className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface py-3 pl-10 pr-4" placeholder="0,00" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-on-surface-variant">Preço de Venda (R$)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm">R$</span>
<input className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface py-3 pl-10 pr-4" placeholder="0,00" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-on-surface-variant">Margem de Lucro (%)</label>
<div className="h-[48px] bg-primary-container/10 border border-[#C8FF00]/20 rounded-xl flex items-center justify-between px-4">
<span className="text-[#C8FF00] font-bold text-lg">0.00%</span>
<div className="px-2 py-0.5 bg-[#C8FF00] text-[#4f6700] text-[10px] font-extrabold rounded-full tracking-tighter">CALCULADO</div>
</div>
</div>
</div>
</div>
{/* Inventory Control */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-sm">inventory</span>
<h3 className="text-sm font-bold uppercase tracking-wider">Controle de Estoque</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-on-surface-variant">Qtd. Atual</label>
<input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface py-3 px-4" type="number" value="0"/>
</div>
<div className="space-y-2">
<label className="text-xs text-on-surface-variant">Qtd. Mínima</label>
<div className="relative">
<input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-[#C8FF00] text-on-surface py-3 px-4" type="number" value="5"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm text-error" title="Alerta de estoque baixo">warning</span>
</div>
</div>
</div>
</div>
<div className="bg-[#C8FF00]/5 rounded-2xl p-5 border border-[#C8FF00]/10 flex gap-4 items-start">
<span className="material-symbols-outlined text-[#C8FF00] mt-1">lightbulb</span>
<div className="space-y-1">
<p className="text-sm font-bold text-[#C8FF00]">Dica de Gestão</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Produtos com margem acima de 60% são ideais para promoções relâmpago e comissões extras para os barbeiros.</p>
</div>
</div>
</div>
</form>
</div>
{/* Footer Actions */}
<div className="px-8 py-6 border-t border-white/5 flex items-center justify-end gap-4 bg-surface-container-low/30">
<button className="px-6 py-3 rounded-xl font-bold text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all">
                    Cancelar
                </button>
<button className="px-8 py-3 rounded-xl font-extrabold text-[#4f6700] bg-[#C8FF00] neon-glow hover:neon-glow-strong hover:scale-[1.02] active:scale-95 transition-all">
                    Salvar Produto
                </button>
</div>
</div>
</div>

    </div>
  );
};

export default CadastrarNovoProduto;
