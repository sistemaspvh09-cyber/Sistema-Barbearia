
import React from 'react';

const ConfiguraODeHorRiosDeAtendimento: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Shared Component) */}
<aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/5 bg-[#1A1919] flex flex-col p-4 gap-2 z-40">
<div className="mb-8">
<h1 className="text-2xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-widest text-[#A0A0A0] font-bold">Gestão de Precisão</p>
</div>
<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-300" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-semibold text-sm">Agenda</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-semibold text-sm">Clientes</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-300" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-semibold text-sm">Serviços</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-300" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-semibold text-sm">Financeiro</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 shadow-[0px_0px_20px_rgba(200,255,0,0.2)] font-semibold text-sm" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
<span className="font-semibold text-sm">Configurações</span>
</a>
</nav>
<div className="mt-auto pt-4 border-t border-white/5">
<button className="flex items-center gap-3 text-[#A0A0A0] hover:text-error px-4 py-3 w-full transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="font-semibold text-sm">Sair</span>
</button>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 p-8 lg:p-12 max-w-7xl mx-auto">
{/* Header Section */}
<header className="mb-12 flex justify-between items-end">
<div>
<h2 className="text-4xl font-extrabold tracking-tight mb-2">Configuração de Horários</h2>
<p className="text-on-surface-variant max-w-xl">Gerencie a disponibilidade da sua barbearia. Defina turnos semanais, intervalos de serviço e exceções de calendário com precisão cirúrgica.</p>
</div>
<div className="hidden lg:block">
<div className="bg-surface-container rounded-2xl p-4 glass-border flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Status da Agenda</p>
<p className="text-sm font-bold text-primary-container">Ativa • Sincronizada</p>
</div>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Weekly Grid */}
<section className="lg:col-span-8 space-y-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container">event_repeat</span>
                        Grade Semanal
                    </h3>
<span className="text-xs text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full border border-white/5">Horário de Brasília (GMT-3)</span>
</div>
{/* Day Row Template (Monday Example) */}
<div className="bg-surface-container rounded-3xl p-6 glass-border group hover:bg-surface-container-high transition-colors duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4 min-w-[140px]">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="text-lg font-bold">Segunda</span>
</div>
<div className="flex-1 flex flex-wrap gap-3">
<div className="bg-surface-container-highest rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5 hover:border-primary-container/30 transition-all">
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="08:00"/>
<span className="text-on-surface-variant text-xs">até</span>
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="12:00"/>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<div className="bg-surface-container-highest rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5 hover:border-primary-container/30 transition-all">
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="13:00"/>
<span className="text-on-surface-variant text-xs">até</span>
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="19:00"/>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<button className="w-12 h-12 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
{/* Tuesday (Single Shift) */}
<div className="bg-surface-container rounded-3xl p-6 glass-border group hover:bg-surface-container-high transition-colors duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4 min-w-[140px]">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="text-lg font-bold">Terça</span>
</div>
<div className="flex-1 flex flex-wrap gap-3">
<div className="bg-surface-container-highest rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5">
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="09:00"/>
<span className="text-on-surface-variant text-xs">até</span>
<input className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm font-medium" type="time" value="18:00"/>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<button className="w-12 h-12 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
{/* Sunday (Inactive) */}
<div className="bg-surface-container/50 rounded-3xl p-6 border border-white/5 opacity-60">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4 min-w-[140px]">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="text-lg font-bold">Domingo</span>
</div>
<div className="flex-1">
<p className="text-on-surface-variant italic text-sm">Fechado para atendimentos</p>
</div>
</div>
</div>
</section>
{/* Right Column: Settings & Exceptions */}
<aside className="lg:col-span-4 space-y-8">
{/* Slot Duration Card */}
<section className="bg-surface-container rounded-3xl p-8 glass-border relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">timer</span>
</div>
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container">avg_time</span>
                        Padrão de Serviço
                    </h3>
<div className="space-y-4">
<p className="text-sm text-on-surface-variant">Duração média de cada slot na agenda:</p>
<div className="grid grid-cols-3 gap-2">
<button className="py-3 rounded-xl bg-surface-container-highest border border-white/5 text-sm font-bold hover:border-primary-container transition-all">30 min</button>
<button className="py-3 rounded-xl bg-primary-container text-on-primary font-extrabold text-sm neon-glow">45 min</button>
<button className="py-3 rounded-xl bg-surface-container-highest border border-white/5 text-sm font-bold hover:border-primary-container transition-all">60 min</button>
</div>
<div className="relative pt-4">
<label className="text-[10px] uppercase font-bold text-on-surface-variant mb-1 block">Customizado (minutos)</label>
<input className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-0 transition-all text-sm" placeholder="Outro valor..." type="number"/>
</div>
</div>
</section>
{/* Holiday/Exceptions Card */}
<section className="bg-surface-container rounded-3xl p-8 glass-border">
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container">block</span>
                        Bloqueio de Datas
                    </h3>
<div className="space-y-4 mb-6">
{/* Exception Item */}
<div className="flex items-center justify-between p-3 bg-surface-container-low rounded-2xl border border-white/5">
<div className="flex items-center gap-3">
<div className="bg-error/10 text-error p-2 rounded-lg">
<span className="material-symbols-outlined text-sm">calendar_month</span>
</div>
<div>
<p className="text-sm font-bold">25 de Dezembro</p>
<p className="text-[10px] text-on-surface-variant uppercase">Natal</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
{/* Exception Item */}
<div className="flex items-center justify-between p-3 bg-surface-container-low rounded-2xl border border-white/5">
<div className="flex items-center gap-3">
<div className="bg-error/10 text-error p-2 rounded-lg">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                                01 de Janeiro</div>
<div>
<p className="text-sm font-bold">Ano Novo</p>
<p className="text-[10px] text-on-surface-variant uppercase">Feriado</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
<button className="w-full py-4 rounded-2xl border-2 border-dashed border-white/10 text-on-surface-variant font-bold text-sm flex items-center justify-center gap-2 hover:border-primary-container hover:text-primary-container transition-all">
<span className="material-symbols-outlined">add_circle</span>
                        Adicionar Exceção
                    </button>
</section>
{/* Preview Info */}
<div className="bg-primary-container/5 rounded-3xl p-6 border border-primary-container/10">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-container">lightbulb</span>
<div>
<p className="text-sm font-bold text-on-surface mb-1">Dica de Gestão</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Turnos divididos (com pausa para almoço) ajudam a manter a produtividade da equipe e evitam agendamentos em horários de descanso.</p>
</div>
</div>
</div>
</aside>
</div>
</main>
{/* Floating Action Button: Save Changes */}
<div className="fixed bottom-8 right-8 z-50">
<button className="group relative flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] px-8 py-5 rounded-2xl font-black text-lg neon-glow-active hover:scale-105 transition-all duration-300 active:scale-95 shadow-2xl">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
<span>SALVAR ALTERAÇÕES</span>
<div className="absolute -top-12 right-0 bg-surface-container-highest text-white text-[10px] px-3 py-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold">
                Ctrl + S para salvar rápido
            </div>
</button>
</div>
{/* Notification Toast (Success Mockup) */}
<div className="fixed top-8 right-8 z-[60] flex items-center gap-4 bg-surface-container-highest glass-border px-6 py-4 rounded-2xl shadow-2xl translate-x-[150%] animate-none">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div>
<p className="text-sm font-bold">Horários atualizados!</p>
<p className="text-xs text-on-surface-variant">Sua agenda já está sincronizada.</p>
</div>
</div>

    </div>
  );
};

export default ConfiguraODeHorRiosDeAtendimento;
