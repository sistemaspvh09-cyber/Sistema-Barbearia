
import React from 'react';

const AgendaPremium: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Shared Component) */}
<aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-primary-container/15 bg-[#0D0D0D] hidden md:flex flex-col py-6 shadow-[40px_0_40px_rgba(0,0,0,0.5)] z-50">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h1 className="text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Premium Management</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm tracking-tight">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#C8FF00] border-r-4 border-[#C8FF00] bg-gradient-to-r from-[#C8FF00]/10 to-transparent transition-all duration-300" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
<span className="font-medium text-sm tracking-tight">Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-medium text-sm tracking-tight">Clientes</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium text-sm tracking-tight">Serviços</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm tracking-tight">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-[#1A1919] transition-all duration-300" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium text-sm tracking-tight">Configurações</span>
</a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full py-4 bg-primary-container text-on-primary rounded-2xl font-bold text-sm shadow-[0_0_20px_rgba(200,255,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                Novo Agendamento
            </button>
<button className="w-full mt-4 flex items-center gap-3 px-4 py-3 rounded-lg text-[#A0A0A0] hover:text-white transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium text-sm tracking-tight">Sair</span>
</button>
</div>
</aside>
{/* TopNavBar (Shared Component) */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-260px)] h-16 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8">
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-8">
<a className="text-[#A0A0A0] font-bold text-base hover:text-white transition-opacity" href="#">Visão Geral</a>
<a className="text-[#C8FF00] font-bold text-base border-b-2 border-[#C8FF00] pb-1" href="#">Relatórios</a>
<a className="text-[#A0A0A0] font-bold text-base hover:text-white transition-opacity" href="#">Equipe</a>
</div>
</div>
<div className="flex items-center gap-5">
<button className="text-on-surface-variant hover:text-white transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined">history</span>
</button>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-bold leading-none">Ricardo Almeida</p>
<p className="text-[10px] text-on-surface-variant">Admin</p>
</div>
<img alt="Avatar do Usuário" className="w-10 h-10 rounded-full border border-primary-container/30 object-cover" data-alt="close-up portrait of a stylish male barber with neat beard and groomed hair in a professional studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dGmVBc6h_71wwFUgMr1i-rM1gdLOVL6VNoTZ6-RlEwOyHYk-jL3nSFesF7M90zqgBrairpeWDrnWx6R53WIZuNyq57AmB63zLNrplo37QG9qeoKeyiL1yQbWiwqXkodhT71WyM3vZFD8VO8L6k7APFwomoJVNp2zUiGaZVpCPTf_m0Mdn1Ur93BubK9LZRkofRUvjcBL54Wz1Dq4l1WyEdnKFeUXMIuTQI4gbEzs_l5QlhH7VnKN21FsTIVogD1OWRMfv038BeJm"/>
</div>
</div>
</header>
{/* Main Content */}
<main className="pt-24 pb-24 md:pb-8 pl-4 pr-4 md:pl-[284px] md:pr-8 min-h-screen">
{/* Header & Filters Bento Grid */}
<div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<h2 className="text-4xl font-black tracking-tighter text-on-surface mb-2">Agenda Semanal</h2>
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="p-2 hover:bg-surface-container rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
<span className="text-lg font-bold text-on-surface">12 — 18 de Maio, 2024</span>
<button className="p-2 hover:bg-surface-container rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
<button className="px-4 py-1.5 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-wider text-white">Hoje</button>
</div>
</div>
{/* Filters Bar */}
<div className="flex flex-wrap items-center gap-3">
<div className="bg-surface-container-low p-1.5 rounded-2xl flex items-center glass-border">
<button className="px-6 py-2 bg-primary-container text-on-primary rounded-xl font-bold text-sm transition-all">Semana</button>
<button className="px-6 py-2 text-on-surface-variant hover:text-white rounded-xl font-bold text-sm transition-all">Dia</button>
</div>
<div className="relative group">
<button className="flex items-center gap-3 px-5 py-3 bg-surface-container-low glass-border rounded-2xl text-on-surface-variant group-hover:text-white transition-all">
<img className="w-6 h-6 rounded-full object-cover" data-alt="portrait of a professional barber with tattoos and a clean haircut in a dark uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBToL34KkOCuxz2AM0__cX38KMIXAlqxVOk9CxqCv1XGpv2i3KCGPArr_rEsqlZXsAGpTjNukX4uwETx4sdAloW2v2r_A8IuejrcogGb0H8tYfi8WPV2fE0bEqy7P4sRhjMqVmbXU0s2f453vfWutn9-21vN9ml73Y3Y9Q9bihlzjv80FP91X8fuM8J5TF-V_i_l-3k_neg1zkh7ZQBadWQPWAZVeWnHezrAoU_2b6S393y8gDgnUrvGDv3y0kzE-_RIM3dYtZrxdsh"/>
<span className="text-sm font-bold text-on-surface">Todos Barbeiros</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<button className="flex items-center gap-2 px-5 py-3 bg-surface-container-low glass-border rounded-2xl text-on-surface-variant hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">filter_list</span>
<span className="text-sm font-bold">Filtros</span>
</button>
</div>
</div>
{/* Weekly Calendar View */}
<div className="bg-surface-container-low rounded-3xl overflow-hidden glass-border shadow-2xl">
{/* Calendar Header Days */}
<div className="calendar-grid border-b border-white/5 bg-surface-container-high/50">
<div className="p-4"></div>
<div className="p-4 text-center border-l border-white/5">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Seg</p>
<p className="text-2xl font-black">12</p>
</div>
<div className="p-4 text-center border-l border-white/5 bg-primary-container/5">
<p className="text-[10px] font-black text-primary-fixed uppercase tracking-widest">Ter</p>
<p className="text-2xl font-black text-primary-fixed">13</p>
</div>
<div className="p-4 text-center border-l border-white/5">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Qua</p>
<p className="text-2xl font-black">14</p>
</div>
<div className="p-4 text-center border-l border-white/5">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Qui</p>
<p className="text-2xl font-black">15</p>
</div>
<div className="p-4 text-center border-l border-white/5">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Sex</p>
<p className="text-2xl font-black">16</p>
</div>
<div className="p-4 text-center border-l border-white/5">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Sáb</p>
<p className="text-2xl font-black">17</p>
</div>
<div className="p-4 text-center border-l border-white/5 opacity-40">
<p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Dom</p>
<p className="text-2xl font-black">18</p>
</div>
</div>
{/* Calendar Body Grid */}
<div className="h-[600px] overflow-y-auto relative custom-scrollbar">
{/* Time Indicators */}
<div className="absolute w-full h-full pointer-events-none">
<div className="h-[80px] border-b border-white/5 flex items-start p-2"><span className="text-[10px] font-bold text-on-surface-variant/50">08:00</span></div>
<div className="h-[80px] border-b border-white/5 flex items-start p-2"><span className="text-[10px] font-bold text-on-surface-variant/50">09:00</span></div>
<div className="h-[80px] border-b border-white/5 flex items-start p-2"><span className="text-[10px] font-bold text-on-surface-variant/50">10:00</span></div>
<div className="h-[80px] border-b border-white/5 flex items-start p-2"><span className="text-[10px] font-bold text-on-surface-variant/50">11:00</span></div>
<div className="h-[80px] border-b border-white/5 flex items-start p-2"><span className="text-[10px] font-bold text-on-surface-variant/50">12:00</span></div>
</div>
{/* Slots Container */}
<div className="calendar-grid min-h-full">
<div className="w-[80px]"></div>
{/* Seg */}
<div className="border-l border-white/5 relative h-[800px]">
{/* Appointment Card */}
<div className="absolute top-[85px] left-1 right-1 h-[70px] bg-primary-container/20 border-l-4 border-primary-container rounded-lg p-2 cursor-pointer hover:bg-primary-container/30 transition-colors">
<p className="text-[10px] font-bold text-primary-fixed uppercase leading-tight">09:00 - 09:45</p>
<p className="text-xs font-black text-white truncate">Marcos Silveira</p>
<p className="text-[10px] text-on-surface-variant">Corte Degradê</p>
</div>
</div>
{/* Ter */}
<div className="border-l border-white/5 relative bg-primary-container/[0.02]">
<div className="absolute top-[165px] left-1 right-1 h-[150px] bg-white/5 border-l-4 border-white/20 rounded-lg p-2 flex flex-col justify-between">
<div>
<p className="text-[10px] font-bold text-on-surface-variant uppercase leading-tight">10:00 - 11:30</p>
<p className="text-xs font-black text-white">Bruno Fonseca</p>
<p className="text-[10px] text-on-surface-variant">Barba &amp; Cabelo</p>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/10 text-white w-fit uppercase">Confirmado</span>
</div>
</div>
{/* Qua */}
<div className="border-l border-white/5 relative"></div>
{/* Qui */}
<div className="border-l border-white/5 relative">
<div className="absolute top-[245px] left-1 right-1 h-[70px] bg-error/10 border-l-4 border-error rounded-lg p-2">
<p className="text-[10px] font-bold text-error uppercase leading-tight">11:00 - 11:45</p>
<p className="text-xs font-black text-white">Indisponível</p>
<p className="text-[10px] text-on-surface-variant">Manutenção</p>
</div>
</div>
{/* Sex */}
<div className="border-l border-white/5 relative"></div>
{/* Sáb */}
<div className="border-l border-white/5 relative"></div>
{/* Dom */}
<div className="border-l border-white/5 relative bg-white/[0.01]"></div>
</div>
</div>
</div>
</main>
{/* Modal Overlay (Novo Agendamento) */}
<div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
<div className="w-full max-w-2xl bg-surface-container rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10">
{/* Modal Header */}
<div className="p-8 border-b border-white/5 flex items-center justify-between">
<div>
<h3 className="text-2xl font-black tracking-tight text-white">Novo Agendamento</h3>
<p className="text-on-surface-variant text-sm">Preencha os detalhes para reservar o horário.</p>
</div>
<button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-8 space-y-8">
{/* Step 1: Client Selection */}
<div className="space-y-4">
<label className="text-xs font-black uppercase tracking-widest text-primary-fixed">Buscar Cliente</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">person_search</span>
<input className="w-full pl-12 pr-6 py-4 bg-surface-container-low glass-border rounded-2xl focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none text-white transition-all" placeholder="Nome ou telefone do cliente..." type="text"/>
</div>
</div>
{/* Step 2: Service Grid */}
<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-black uppercase tracking-widest text-primary-fixed">Serviço</label>
<span className="text-xs text-on-surface-variant font-bold">Ver catálogo completo</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="p-4 rounded-2xl border-2 border-primary-container bg-primary-container/10 flex items-center gap-4 text-left transition-all">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">content_cut</span>
</div>
<div>
<p className="text-sm font-bold text-white">Corte Social</p>
<p className="text-xs font-black text-primary-fixed">R$ 55,00</p>
</div>
</button>
<button className="p-4 rounded-2xl border-2 border-white/5 bg-surface-container-low flex items-center gap-4 text-left hover:border-white/20 transition-all group">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-on-surface-variant group-hover:bg-white/10">
<span className="material-symbols-outlined">face</span>
</div>
<div>
<p className="text-sm font-bold text-white">Barba Completa</p>
<p className="text-xs font-black text-on-surface-variant">R$ 40,00</p>
</div>
</button>
</div>
</div>
{/* Step 3: Date & Time */}
<div className="grid grid-cols-2 gap-6">
<div className="space-y-4">
<label className="text-xs font-black uppercase tracking-widest text-primary-fixed">Data</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_today</span>
<input className="w-full pl-12 pr-6 py-4 bg-surface-container-low glass-border rounded-2xl focus:ring-2 focus:ring-primary-container outline-none text-white appearance-none" type="date" value="2024-05-13"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-black uppercase tracking-widest text-primary-fixed">Horário</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">schedule</span>
<select className="w-full pl-12 pr-6 py-4 bg-surface-container-low glass-border rounded-2xl focus:ring-2 focus:ring-primary-container outline-none text-white appearance-none">
<option>09:00</option>
<option selected="">10:00</option>
<option>11:00</option>
<option>14:00</option>
</select>
</div>
</div>
</div>
{/* Step 4: Notes */}
<div className="space-y-4">
<label className="text-xs font-black uppercase tracking-widest text-primary-fixed">Notas / Observações</label>
<textarea className="w-full px-6 py-4 bg-surface-container-low glass-border rounded-2xl focus:ring-2 focus:ring-primary-container outline-none text-white h-24 resize-none transition-all" placeholder="Ex: Cliente prefere degradê navalhado..."></textarea>
</div>
</div>
{/* Modal Footer */}
<div className="p-8 bg-surface-container-low/50 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:flex-1 py-5 bg-primary-container text-on-primary rounded-2xl font-black text-base shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Finalizar Agendamento
                </button>
<button className="w-full sm:w-auto px-8 py-5 bg-[#25D366]/10 text-[#25D366] rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.33 0 .142 5.39.14 11.946c0 2.094.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.715 0 12.026-5.39 12.028-11.947a11.85 11.85 0 00-3.589-8.441z"></path></svg>
                    Confirmar via WhatsApp
                </button>
</div>
</div>
</div>
{/* BottomNavBar (Shared Component Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 rounded-t-[24px] border-t border-white/10 bg-[#1A1919]/80 backdrop-blur-lg flex justify-around items-center px-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 transition-all duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] active:bg-white/5 transition-all duration-200 scale-110" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 transition-all duration-200" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Financeiro</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] active:bg-white/5 transition-all duration-200" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">Perfil</span>
</a>
</nav>
{/* Contextual FAB for New Appointment on Mobile */}
<button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary-container text-on-primary rounded-2xl shadow-2xl flex items-center justify-center z-40 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-2xl font-bold">add</span>
</button>

    </div>
  );
};

export default AgendaPremium;
