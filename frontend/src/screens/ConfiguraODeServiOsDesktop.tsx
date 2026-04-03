
import React from 'react';

const ConfiguraODeServiOsDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar Anchor */}
<aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-[#ffffff]/15 bg-[#1A1919] flex flex-col h-full py-6 z-50">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary font-bold" data-icon="content_cut">content_cut</span>
</div>
<div>
<h1 className="text-[#C8FF00] font-black italic tracking-tighter text-xl">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Premium Management</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl group" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl group" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-medium text-sm">Agendamentos</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 mx-2 font-bold shadow-[0_0_20px_rgba(200,255,0,0.2)]" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-medium text-sm">Serviços</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl group" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-medium text-sm">Clientes</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl group" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-medium text-sm">Financeiro</span>
</a>
</nav>
<div className="mt-auto px-2 space-y-1">
<button className="w-[calc(100%-1rem)] mx-2 mb-6 bg-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-container/10">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
<span className="text-sm">Novo Agendamento</span>
</button>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 transition-all hover:bg-[#ffffff]/5 rounded-xl" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-medium text-sm">Suporte</span>
</a>
<a className="flex items-center gap-3 text-error hover:text-error-dim px-4 py-3 mx-2 transition-all hover:bg-error/5 rounded-xl" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-medium text-sm">Sair</span>
</a>
</div>
</aside>
{/* TopAppBar Anchor */}
<header className="fixed top-0 right-0 left-64 h-16 border-b border-[#ffffff]/15 bg-[#0D0D0D]/70 backdrop-blur-xl flex justify-between items-center px-8 w-[calc(100%-16rem)] z-40">
<div className="flex items-center gap-4 bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/20 w-96">
<span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant/50" placeholder="Buscar serviços..." type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors group">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-white" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-primary-container rounded-full border-2 border-background"></span>
</button>
<button className="p-2 hover:bg-white/5 rounded-full transition-colors group">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-white" data-icon="settings">settings</span>
</button>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-xs font-bold text-white">Ricardo Almeida</p>
<p className="text-[10px] text-on-surface-variant">Proprietário</p>
</div>
<img alt="User profile avatar" className="w-9 h-9 rounded-full border border-primary-container/30 object-cover" data-alt="close-up of a stylish male barber with a well-groomed beard and tattoos wearing a professional apron in a high-end barbershop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAzp6UOj1JTYINxA0H1VXkp6UX9GzD351ryu7IzA5nIIsEHK8EmLaSXnHEvnQPyTD2jpHx_l0kY6Svclt4Ge7GTxiXf4sZHlAWV8HHoJBTRyeEHD-5v4zJxw3pFu5e_trAha1b8Z_KjuuL7MSmVIGQLmsgA3sGg-sqaoKKTHH3hYqjHKOGBviWVyev3wqDbbkwrhYdMJPOQrE47N3C45bm7aVP1q58jJ1n6cDuiLWWC5Erp0j98lnsMzlJcAvGjsE2srP6nLEYsLyP"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="pl-64 pt-16 min-h-screen">
<div className="p-8 max-w-7xl mx-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div className="space-y-2">
<div className="flex items-center gap-2 text-primary-container mb-1">
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
<span className="text-[10px] font-bold tracking-[0.2em] uppercase">Gestão de Catálogo</span>
</div>
<h2 className="text-4xl font-extrabold tracking-tight text-white font-headline">Configuração de Serviços</h2>
<p className="text-on-surface-variant max-w-xl text-sm leading-relaxed">Gerencie o catálogo de serviços, preços e durações oferecidos na sua unidade. Mantenha seu menu atualizado para seus clientes.</p>
</div>
<button className="bg-primary-container text-on-primary font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_30px_rgba(200,255,0,0.15)] active:scale-95 group">
<span className="material-symbols-outlined group-hover:rotate-90 transition-transform" data-icon="add">add</span>
          Novo Serviço
        </button>
</div>
{/* Filters & Tabs */}
<div className="flex flex-wrap items-center gap-3 mb-8">
<button className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-bold text-sm transition-all shadow-lg shadow-primary-container/10">Todos</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-white font-medium text-sm transition-all glass-border">Corte</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-white font-medium text-sm transition-all glass-border">Barba</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-white font-medium text-sm transition-all glass-border">Combos</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-white font-medium text-sm transition-all glass-border">Tratamentos</button>
</div>
{/* Services Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/* Service Card 1: Corte Moderno */}
<div className="group relative bg-surface-container rounded-3xl p-6 glass-border hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-4">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary-container" data-icon="content_cut">content_cut</span>
</div>
<div className="mb-6">
<span className="text-[10px] font-bold text-primary-container bg-primary-container/10 px-2 py-1 rounded uppercase tracking-wider">Corte</span>
<h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary-container transition-colors">Corte Moderno</h3>
<p className="text-on-surface-variant text-xs mt-2 line-clamp-2">Corte com degradê, tesoura e finalização premium com pomada matte.</p>
</div>
<div className="flex items-center justify-between py-4 border-y border-white/5 mb-6">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Duração</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="schedule">schedule</span>
<span className="text-sm font-bold text-white">45 min</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Investimento</span>
<span className="text-lg font-black text-primary-container mt-1">R$ 85,00</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-white font-bold text-xs transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
              Editar
            </button>
<button className="w-12 h-10 rounded-xl bg-error/10 hover:bg-error text-error hover:text-on-error transition-all flex items-center justify-center">
<span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
</div>
{/* Service Card 2: Barba Terapia */}
<div className="group relative bg-surface-container rounded-3xl p-6 glass-border hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-4">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary-container" data-icon="face">face</span>
</div>
<div className="mb-6">
<span className="text-[10px] font-bold text-primary-container bg-primary-container/10 px-2 py-1 rounded uppercase tracking-wider">Barba</span>
<h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary-container transition-colors">Barba Terapia</h3>
<p className="text-on-surface-variant text-xs mt-2 line-clamp-2">Toalha quente, óleos essenciais, massagem facial e alinhamento de fios.</p>
</div>
<div className="flex items-center justify-between py-4 border-y border-white/5 mb-6">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Duração</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="schedule">schedule</span>
<span className="text-sm font-bold text-white">30 min</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Investimento</span>
<span className="text-lg font-black text-primary-container mt-1">R$ 55,00</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-white font-bold text-xs transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
              Editar
            </button>
<button className="w-12 h-10 rounded-xl bg-error/10 hover:bg-error text-error hover:text-on-error transition-all flex items-center justify-center">
<span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
</div>
{/* Service Card 3: Combo Master */}
<div className="group relative bg-surface-container rounded-3xl p-6 glass-border hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-4">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary-container" data-icon="auto_fix_high">auto_fix_high</span>
</div>
<div className="mb-6">
<span className="text-[10px] font-bold text-primary-container bg-primary-container/10 px-2 py-1 rounded uppercase tracking-wider">Combos</span>
<h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary-container transition-colors">Combo Master</h3>
<p className="text-on-surface-variant text-xs mt-2 line-clamp-2">Experiência completa: Corte Moderno + Barba Terapia + Lavagem especial.</p>
</div>
<div className="flex items-center justify-between py-4 border-y border-white/5 mb-6">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Duração</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="schedule">schedule</span>
<span className="text-sm font-bold text-white">75 min</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Investimento</span>
<span className="text-lg font-black text-primary-container mt-1">R$ 130,00</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-white font-bold text-xs transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
              Editar
            </button>
<button className="w-12 h-10 rounded-xl bg-error/10 hover:bg-error text-error hover:text-on-error transition-all flex items-center justify-center">
<span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
</div>
{/* Service Card 4: Platinado Polar */}
<div className="group relative bg-surface-container rounded-3xl p-6 glass-border hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-4">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary-container" data-icon="flare">flare</span>
</div>
<div className="mb-6">
<span className="text-[10px] font-bold text-primary-container bg-primary-container/10 px-2 py-1 rounded uppercase tracking-wider">Tratamentos</span>
<h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary-container transition-colors">Platinado Polar</h3>
<p className="text-on-surface-variant text-xs mt-2 line-clamp-2">Descoloração global ultra sônica com matização e hidratação intensa.</p>
</div>
<div className="flex items-center justify-between py-4 border-y border-white/5 mb-6">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Duração</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="schedule">schedule</span>
<span className="text-sm font-bold text-white">180 min</span>
</div>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Investimento</span>
<span className="text-lg font-black text-primary-container mt-1">R$ 250,00</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-white font-bold text-xs transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
              Editar
            </button>
<button className="w-12 h-10 rounded-xl bg-error/10 hover:bg-error text-error hover:text-on-error transition-all flex items-center justify-center">
<span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
{/* Inactive Badge */}
<div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] rounded-3xl flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-0 peer-not-checked:opacity-100 transition-opacity">
<span className="bg-surface-container text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-white/10">Inativo</span>
</div>
</div>
{/* Add New Service Placeholder */}
<button className="group border-2 border-dashed border-outline-variant/30 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary-container hover:bg-primary-container/5 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary-container" data-icon="add_circle">add_circle</span>
</div>
<div className="text-center">
<span className="text-white font-bold block">Adicionar Novo Serviço</span>
<span className="text-on-surface-variant text-xs">Expanda seu catálogo de ofertas</span>
</div>
</button>
</div>
{/* Quick Stats / Insights Section */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Total Serviços</p>
<p className="text-lg font-black text-white leading-none">12</p>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Mais Procurado</p>
<p className="text-lg font-black text-white leading-none">Corte Moderno</p>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
<span className="material-symbols-outlined" data-icon="avg_time">avg_time</span>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Ticket Médio</p>
<p className="text-lg font-black text-white leading-none">R$ 94,50</p>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-2xl border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Status Ativo</p>
<p className="text-lg font-black text-white leading-none">10/12</p>
</div>
</div>
</div>
</div>
</main>
{/* Overlay for Modal Context (Not displayed but structure prepared) */}
<div className="hidden fixed inset-0 bg-background/80 backdrop-blur-md z-[60] flex items-center justify-center p-6">
<div className="bg-surface-container border border-white/10 w-full max-w-lg rounded-3xl shadow-2xl p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-2xl font-bold text-white">Novo Serviço</h2>
<p className="text-on-surface-variant text-sm">Preencha os dados do catálogo</p>
</div>
<button className="p-2 hover:bg-white/5 rounded-full"><span className="material-symbols-outlined" data-icon="close">close</span></button>
</div>
{/* Inputs would go here following the design system rules for inputs */}
</div>
</div>

    </div>
  );
};

export default ConfiguraODeServiOsDesktop;
