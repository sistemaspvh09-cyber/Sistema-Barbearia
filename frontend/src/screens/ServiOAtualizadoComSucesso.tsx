
import React from 'react';

const ServiOAtualizadoComSucesso: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Sidebar Navigation */}
<aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#1A1919] border-r border-[#ffffff]/15 flex flex-col h-full py-6 z-40">
<div className="px-8 mb-10">
<h1 className="text-[#C8FF00] font-black italic text-2xl tracking-tighter">BarberPro</h1>
<p className="text-on-surface-variant text-xs font-medium mt-1">Premium Management</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium text-sm">Agendamentos</span>
</a>
{/* Active Tab: Serviços */}
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 mx-2 font-bold shadow-[0_0_20px_rgba(200,255,0,0.2)]" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium text-sm">Serviços</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">group</span>
<span className="font-medium text-sm">Clientes</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm">Financeiro</span>
</a>
</nav>
<div className="mt-auto px-2 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined">help</span>
<span className="font-medium text-sm">Suporte</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium text-sm">Sair</span>
</a>
</div>
</aside>
{/* Top Navigation Bar */}
<header className="fixed top-0 right-0 left-64 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#ffffff]/15 flex justify-between items-center px-8 w-full z-30 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm">search</span>
<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary-fixed text-on-surface" placeholder="Buscar serviços..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30">
<img className="h-full w-full object-cover" data-alt="Close-up of a professional barber with a confident expression and stylish grooming in a high-end studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg_HoKAIZcSzWohsgmgundgI1QR1TZVs746CQOkmzR1w6UkUmy8q1akUjTtGHEsBqHhly-U5GjanCC0ueHMEnji4WOPGcB1RMfYCGASB8mj4axwkH9jAyIAHIT6TqzMq73n4Q8hnhA8DnJ0pA-ZP6Go0ElawKyL81q--8q-O_fiGrY8xyN7A3erHPWnKKRJf5elcA08-Xmdkio3PX_qQHdXu6HyqgI12B3g6Et6KLv2E4DxF_tNTlnPezauFeTw3Vizf3jn9AhloL_"/>
</div>
</div>
</header>
{/* Main Content Canvas (Background for the Modal) */}
<main className="ml-64 pt-16 p-8 min-h-screen bg-surface">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Serviços</h2>
<p className="text-on-surface-variant">Gerencie o catálogo de serviços da sua barbearia.</p>
</div>
<button className="bg-primary-container text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(200,255,0,0.2)] hover:scale-[1.02] transition-transform active:scale-95">
<span className="material-symbols-outlined">add</span>
                Novo Agendamento
            </button>
</div>
{/* Placeholder Grid for Context */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 select-none pointer-events-none">
<div className="bg-surface-container rounded-2xl p-6 border border-white/5">
<div className="flex justify-between mb-4">
<span className="material-symbols-outlined text-primary-fixed text-3xl">content_cut</span>
<span className="text-primary-fixed font-bold">R$ 60,00</span>
</div>
<h3 className="font-bold text-lg mb-1">Corte Degradê</h3>
<p className="text-sm text-on-surface-variant mb-4">Acabamento preciso com máquina e tesoura.</p>
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span> 45 min
                </div>
</div>
<div className="bg-surface-container rounded-2xl p-6 border border-white/5">
<div className="flex justify-between mb-4">
<span className="material-symbols-outlined text-primary-fixed text-3xl">face</span>
<span className="text-primary-fixed font-bold">R$ 45,00</span>
</div>
<h3 className="font-bold text-lg mb-1">Barba Terapia</h3>
<p className="text-sm text-on-surface-variant mb-4">Toalha quente e massagem facial relaxante.</p>
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span> 30 min
                </div>
</div>
</div>
</main>
{/* Modal Overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
{/* Modal Container */}
<div className="glass-panel w-full max-w-2xl rounded-[1.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
{/* Subtle Glow Effect */}
<div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed/10 blur-[80px] rounded-full pointer-events-none"></div>
{/* Modal Header */}
<div className="px-8 py-6 flex justify-between items-center border-b border-white/10">
<div>
<h3 className="text-xl font-bold tracking-tight text-on-surface">Editar Serviço</h3>
<p className="text-xs text-on-surface-variant mt-1">Preencha os detalhes do serviço abaixo.</p>
</div>
<button className="p-2 hover:bg-white/5 rounded-full transition-colors active:scale-95 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Modal Body */}
<form className="p-8 space-y-6 custom-scrollbar max-h-[716px] overflow-y-auto">
{/* Main Info Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-2 md:col-span-1 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nome do Serviço</label>
<input className="w-full bg-surface-container-low border border-white/5 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary-fixed focus:border-primary-fixed text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-all" placeholder="Ex: Corte Premium" type="text" value="Corte Degradê"/>
</div>
<div className="col-span-2 md:col-span-1 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Categoria</label>
<div className="relative">
<select className="w-full bg-surface-container-low border border-white/5 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary-fixed text-on-surface appearance-none outline-none cursor-pointer">
<option>Corte</option>
<option>Barba</option>
<option>Combo</option>
<option>Tratamento</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-lg">expand_more</span>
</div>
</div>
<div className="col-span-2 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Descrição</label>
<textarea className="w-full bg-surface-container-low border border-white/5 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary-fixed text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-all resize-none" placeholder="Descreva os diferenciais deste serviço..." rows="3">Corte moderno com degradê nas laterais, acabamento na navalha e finalização com pomada matte premium.</textarea>
</div>
<div className="col-span-2 md:col-span-1 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Preço</label>
<div className="relative flex items-center">
<span className="absolute left-4 text-primary-fixed font-bold">R$</span>
<input className="w-full bg-surface-container-low border border-white/5 rounded-xl pl-12 pr-4 py-3 focus:ring-1 focus:ring-primary-fixed text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-all" placeholder="0,00" step="0.01" type="number" value="85.00"/>
</div>
</div>
<div className="col-span-2 md:col-span-1 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Duração</label>
<div className="relative">
<select className="w-full bg-surface-container-low border border-white/5 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary-fixed text-on-surface appearance-none outline-none cursor-pointer"><option>15 minutos</option><option>30 minutos</option><option selected="">45 minutos</option><option>60 minutos</option><option>90 minutos</option></select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-lg">schedule</span>
</div>
</div>
</div>
{/* Icon Selection Grid */}
<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Ícone do Serviço</label>
<div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
<button className="aspect-square flex items-center justify-center rounded-xl bg-primary-container text-on-primary border border-primary-fixed shadow-[0_0_15px_rgba(200,255,0,0.15)] ring-2 ring-primary-fixed transition-all" type="button">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</button>
<button className="aspect-square flex items-center justify-center rounded-xl bg-surface-container-highest/50 text-on-surface-variant border border-white/5 hover:border-white/20 transition-all" type="button">
<span className="material-symbols-outlined">face</span>
</button>
<button className="aspect-square flex items-center justify-center rounded-xl bg-surface-container-highest/50 text-on-surface-variant border border-white/5 hover:border-white/20 transition-all" type="button">
<span className="material-symbols-outlined">cleaning_services</span>
</button>
<button className="aspect-square flex items-center justify-center rounded-xl bg-surface-container-highest/50 text-on-surface-variant border border-white/5 hover:border-white/20 transition-all" type="button">
<span className="material-symbols-outlined">spa</span>
</button>
<button className="aspect-square flex items-center justify-center rounded-xl bg-surface-container-highest/50 text-on-surface-variant border border-white/5 hover:border-white/20 transition-all" type="button">
<span className="material-symbols-outlined">brush</span>
</button>
<button className="aspect-square flex items-center justify-center rounded-xl bg-surface-container-highest/50 text-on-surface-variant border border-white/5 hover:border-white/20 transition-all" type="button">
<span className="material-symbols-outlined">dry</span>
</button>
</div>
</div>
{/* Active Toggle */}
<div className="flex items-center justify-between p-4 bg-surface-container-highest/30 rounded-2xl border border-white/5">
<div>
<span className="block font-bold text-sm">Serviço Ativo</span>
<span className="text-xs text-on-surface-variant">Disponibilizar para agendamento online imediato.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</form>
{/* Modal Footer */}
<div className="px-8 py-6 bg-surface-container-highest/30 border-t border-white/10 flex justify-end items-center gap-4">
<button className="px-6 py-3 rounded-xl font-bold text-on-surface-variant hover:text-white transition-colors">
                    Cancelar
                </button>
<button className="bg-primary-container text-on-primary font-bold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.2)] hover:scale-[1.02] transition-transform active:scale-95 opacity-80 pointer-events-none"><div className="flex items-center gap-2">
<span className="material-symbols-outlined font-bold">check</span>
<span>Salvo</span>
</div></button>
</div>
</div>
</div>
<div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-surface-container-high border border-primary-fixed/30 text-on-surface px-6 py-4 rounded-2xl shadow-2xl animate-bounce-short">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<div>
<p className="font-bold text-sm">Sucesso!</p>
<p className="text-xs text-on-surface-variant">Serviço atualizado com sucesso!</p>
</div>
<button
  className="ml-4 text-on-surface-variant hover:text-white"
  onClick={(event) => event.currentTarget.parentElement?.remove()}
>
<span className="material-symbols-outlined text-base">close</span>
</button>
</div>
<style>{`
@keyframes bounce-short {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}
.animate-bounce-short {
    animation: bounce-short 2s ease-in-out infinite;
}
`}</style>
    </div>
  );
};

export default ServiOAtualizadoComSucesso;
