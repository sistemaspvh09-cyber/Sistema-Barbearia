
import React from 'react';

const EntradaDeEstoqueMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex items-center justify-between px-4 h-16 w-full">
<div className="flex items-center gap-3">
<button className="text-[#C8FF00] active:scale-95 transition-all duration-200">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-white text-lg">Entrada de Estoque</h1>
</div>
<div className="text-xl font-black text-[#C8FF00]">BP</div>
</div>
</header>
{/* Main Content */}
<main className="pt-24 px-4 max-w-md mx-auto space-y-6">
{/* Bento-style Info Card */}
<section className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-surface-container p-5 rounded-2xl glass-border shadow-sm flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-surface-container-high flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover opacity-80" data-alt="Close-up of a premium matte hair pomade jar on a dark reflective surface with green neon lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6_QBwULJcgAk7Vtee7mfuRrsypi4wpQAsufk86NBb8Gp1RfTvBGjceu55t9ENNN8sPJ-DsrGQx4vXnw2jOUanNvM8VUNIZdUOjk_C6A-SjzznH361PoSoOmlEyT2EX4aPBH5Pr9mWxA-JSLjAERvOWFBS8V2-TiauDzo0UPzAHAKVbaNqyLJTPyzy1VOVHbBaxL-F0XYzsF8AI6k2FzSuVwdTtYeI1V-ZhJHFElOB6RhI7UyfBZIYlyQuOZypeQE4CeTIq1JHIeQC"/>
</div>
<div>
<p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Produto Selecionado</p>
<h2 className="text-on-surface text-lg font-bold">Pomada Matte Premium</h2>
<p className="text-primary-fixed text-sm font-semibold">SKU: BP-POM-021</p>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl glass-border flex flex-col justify-center">
<span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Estoque Atual</span>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-white">14</span>
<span className="text-on-surface-variant text-xs">unid.</span>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl glass-border flex flex-col justify-center">
<span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Último Custo</span>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-white">R$ 28</span>
<span className="text-on-surface-variant text-xs">,90</span>
</div>
</div>
</section>
{/* Form Section */}
<section className="space-y-4">
{/* Product Selection (Search) */}
<div className="space-y-1.5">
<label className="text-on-surface-variant text-xs font-bold px-1">BUSCAR OUTRO PRODUTO</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm group-focus-within:text-primary-container">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-11 pr-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary-container/30 transition-all duration-300 neon-glow" placeholder="Nome ou código de barras..." type="text"/>
</div>
</div>
{/* Inputs Grid */}
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-on-surface-variant text-xs font-bold px-1">QUANTIDADE</label>
<input className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary-container/30 transition-all duration-300 neon-glow text-center font-bold text-xl" placeholder="0" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-on-surface-variant text-xs font-bold px-1">NOVO CUSTO (UN)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">R$</span>
<input className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-10 pr-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary-container/30 transition-all duration-300 neon-glow font-medium" placeholder="0,00" type="text"/>
</div>
</div>
</div>
{/* Supplier */}
<div className="space-y-1.5">
<label className="text-on-surface-variant text-xs font-bold px-1">FORNECEDOR</label>
<div className="relative">
<select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 text-on-surface appearance-none focus:ring-1 focus:ring-primary-container/30 transition-all duration-300 neon-glow">
<option>Selecione um fornecedor</option>
<option>Barber Supply Co.</option>
<option>Distribuidora Estilo S.A.</option>
<option>Cosméticos Premium Brasil</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
{/* Notes */}
<div className="space-y-1.5">
<label className="text-on-surface-variant text-xs font-bold px-1">OBSERVAÇÕES (OPCIONAL)</label>
<textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary-container/30 transition-all duration-300 neon-glow resize-none" placeholder="Ex: Carga recebida com pequeno amassado na caixa master..." rows="2"></textarea>
</div>
</section>
{/* Action Button */}
<div className="pt-4">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(200,255,0,0.4)] flex items-center justify-center gap-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Confirmar Entrada
            </button>
<p className="text-center text-on-surface-variant text-[10px] mt-4 uppercase tracking-[0.2em] opacity-50 font-bold">Registro irreversível no Log de Inventário</p>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 rounded-t-[24px] bg-[#1A1919]/70 backdrop-blur-xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<div className="flex justify-around items-center h-20 pb-safe px-2">
<div className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90">
<span className="material-symbols-outlined text-2xl">home</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] tracking-wide">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90">
<span className="material-symbols-outlined text-2xl">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] tracking-wide">Agenda</span>
</div>
{/* Active State: Novo (Entrada de estoque is an 'Add/New' action) */}
<div className="flex flex-col items-center justify-center text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.6)] active:scale-90 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] tracking-wide">Novo</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90">
<span className="material-symbols-outlined text-2xl">group</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] tracking-wide">Clientes</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90">
<span className="material-symbols-outlined text-2xl">menu</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] tracking-wide">Menu</span>
</div>
</div>
</nav>

    </div>
  );
};

export default EntradaDeEstoqueMobile;
