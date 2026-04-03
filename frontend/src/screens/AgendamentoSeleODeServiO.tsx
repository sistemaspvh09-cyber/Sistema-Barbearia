
import React from 'react';

const AgendamentoSeleODeServiO: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex justify-between items-center px-6 h-16 w-full max-w-none">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="content_cut">content_cut</span>
<span className="text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</span>
</div>
<div className="flex items-center gap-4">
<button className="active:scale-95 transition-transform text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
{/* Headline Section */}
<section className="mb-10 text-center md:text-left">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-on-surface">Agende seu horário</h1>
<p className="text-on-surface-variant body-md max-w-md">Escolha os serviços de maestria que deseja realizar hoje.</p>
</section>
{/* Category Tabs (Bento Style Preview) */}
<div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
<button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(200,255,0,0.2)]">Corte</button>
<button className="bg-surface-container text-on-surface-variant px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-surface-bright transition-all">Barba</button>
<button className="bg-surface-container text-on-surface-variant px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-surface-bright transition-all">Combos</button>
</div>
{/* Services Grid */}
<div className="space-y-12">
{/* Corte Category */}
<div className="space-y-4">
<h3 className="text-on-primary-fixed text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-primary-container/30"></span>
                    Corte Masculino
                </h3>
<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
{/* Service Card 1 */}
<div className="group relative p-6 rounded-2xl surface-container-low ghost-border hover:bg-surface-container transition-all duration-300 active:scale-[0.98]">
<div className="flex justify-between items-start">
<div className="flex-1">
<h4 className="text-xl font-bold mb-1 group-hover:text-primary-container transition-colors">Corte Clássico</h4>
<div className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 45min
                                    </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="payments">payments</span> R$ 85,00
                                    </span>
</div>
</div>
<div className="selection-indicator opacity-0 group-hover:opacity-100 bg-primary-container text-on-primary p-2 rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined font-bold" data-icon="add">add</span>
</div>
</div>
</div>
{/* Service Card 2 */}
<div className="group relative p-6 rounded-2xl surface-container-low ghost-border hover:bg-surface-container transition-all duration-300 active:scale-[0.98]">
<div className="flex justify-between items-start">
<div className="flex-1">
<h4 className="text-xl font-bold mb-1 group-hover:text-primary-container transition-colors">Degradê Moderno</h4>
<div className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 60min
                                    </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="payments">payments</span> R$ 95,00
                                    </span>
</div>
</div>
<div className="selection-indicator opacity-0 group-hover:opacity-100 bg-primary-container text-on-primary p-2 rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined font-bold" data-icon="add">add</span>
</div>
</div>
</div>
</div>
</div>
{/* Barba Category */}
<div className="space-y-4">
<h3 className="text-on-primary-fixed text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-primary-container/30"></span>
                    Barba &amp; Toalha Quente
                </h3>
<div className="group relative p-6 rounded-2xl surface-container-low ghost-border hover:bg-surface-container transition-all duration-300 active:scale-[0.98]">
<div className="flex justify-between items-start">
<div className="flex-1">
<h4 className="text-xl font-bold mb-1 group-hover:text-primary-container transition-colors">Barba Premium</h4>
<div className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 30min
                                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="payments">payments</span> R$ 65,00
                                </span>
</div>
</div>
<div className="selection-indicator opacity-0 group-hover:opacity-100 bg-primary-container text-on-primary p-2 rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined font-bold" data-icon="add">add</span>
</div>
</div>
</div>
</div>
{/* Combos */}
<div className="space-y-4">
<h3 className="text-on-primary-fixed text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-primary-container/30"></span>
                    Experiências Completas
                </h3>
<div className="relative overflow-hidden group p-6 rounded-2xl bg-surface-container-high ghost-border hover:shadow-[0_0_30px_rgba(200,255,0,0.05)] transition-all duration-300 active:scale-[0.98]">
<div className="absolute top-0 right-0 p-4">
<span className="bg-primary-container text-on-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Destaque</span>
</div>
<div className="flex justify-between items-end">
<div className="flex-1">
<h4 className="text-2xl font-black mb-2 text-on-surface">O Mestre BarberPro</h4>
<p className="text-on-surface-variant text-sm mb-4 max-w-xs">Corte, barba completa, lavagem terapêutica e finalização com balm artesanal.</p>
<div className="flex items-center gap-4 text-primary-container text-sm font-bold">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 90min
                                </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="payments">payments</span> R$ 160,00
                                </span>
</div>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 hover:shadow-[0px_0px_20px_rgba(200,255,0,0.4)] transition-all">
                            Selecionar
                        </button>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar as Progress & Action */}
<div className="fixed bottom-0 left-0 w-full z-50">
{/* Progress Indicator */}
<div className="max-w-3xl mx-auto px-6 mb-4">
<div className="bg-[#1A1919]/80 backdrop-blur-lg p-4 rounded-2xl ghost-border flex items-center justify-between gap-6 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Etapa 01 de 03</span>
<span className="text-sm font-bold text-on-surface">Serviço</span>
</div>
<div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-1/3 shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
</div>
<div className="flex gap-2">
<div className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-2 shadow-[0_0_15px_rgba(200,255,0,0.2)]">
<span className="material-symbols-outlined text-lg" data-icon="flatware">flatware</span>
<span className="font-['Plus_Jakarta_Sans'] text-[8px] font-bold uppercase tracking-widest mt-1">Serviço</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:bg-[#1A1919] transition-all duration-300">
<span className="material-symbols-outlined text-lg" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[8px] font-bold uppercase tracking-widest mt-1">Barbeiro</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:bg-[#1A1919] transition-all duration-300">
<span className="material-symbols-outlined text-lg" data-icon="schedule">schedule</span>
<span className="font-['Plus_Jakarta_Sans'] text-[8px] font-bold uppercase tracking-widest mt-1">Horário</span>
</div>
</div>
</div>
</div>
{/* Background Filler for Safe Area */}
<div className="h-8 bg-background"></div>
</div>

    </div>
  );
};

export default AgendamentoSeleODeServiO;
