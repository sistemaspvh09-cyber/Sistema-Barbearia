
import React from 'react';

const CentralDeAniversariantesMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-[#1A1919] flex flex-col p-4 gap-2 font-['Plus_Jakarta_Sans'] text-sm font-medium">
<div className="px-4 py-6 mb-4">
<h1 className="text-lg font-black text-[#C8FF00]">BarberPro</h1>
<p className="text-[10px] text-[#A0A0A0] uppercase tracking-widest font-bold">Premium Management</p>
</div>
<nav className="flex flex-col gap-1 flex-1">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span>Agendamentos</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all duration-300" href="#">
<span className="material-symbols-outlined">campaign</span>
<span className="font-bold">Marketing</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined">group</span>
<span>Clientes</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Financeiro</span>
</a>
</nav>
<div className="mt-auto pt-4 flex flex-col gap-1 border-t border-white/5">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-3 rounded-xl font-bold mb-4 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                Novo Agendamento
            </button>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl transition-all duration-300" href="#">
<span className="material-symbols-outlined">help</span>
<span>Suporte</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl transition-all duration-300" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Sair</span>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 ml-64 min-h-screen">
{/* TopAppBar */}
<header className="fixed top-0 right-0 left-64 z-30 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex justify-between items-center px-8 h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C8FF00]">cake</span>
<h2 className="text-[#C8FF00] font-['Plus_Jakarta_Sans'] tracking-tight font-bold text-lg">Central de Aniversariantes</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative flex items-center bg-surface-container-low px-4 py-2 rounded-full glass-border">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-48" placeholder="Buscar cliente..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">settings</span></button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8FF00]/30 hover:scale-105 transition-transform duration-300">
<img alt="User avatar" data-alt="Professional portrait of a barber shop owner with a stylish beard and modern haircut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKphP4Tu3214zNHcdUA24RU7OO4D9yFoJldHRgkI1LEj8YHEeAg-czzZLQzAzgshwubOEidb_8App6IWh-Vn94S7EWYh2GgMCK1VApDH0v-bOtZmw5pCJPZCuorqli30dUDHE2v0ccWqdYzrGAjyEsC9fJlQcD0uHTt5GWV7BCvOHA7Ir4QPSrjdY3cL2ioYdYvYeO-JCXW8ujMmRFGy5qTJq5szNCQcC4bAJhk8ud33IbGZkKBSXxN5m245GkZOPt9TGPjQltXrN"/>
</div>
</div>
</div>
</div>
</header>
{/* Page Content */}
<div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
{/* Header Section */}
<div className="mb-10">
<h3 className="text-4xl font-extrabold text-on-surface mb-2 tracking-tight">Central de Aniversariantes</h3>
<p className="text-on-surface-variant text-lg">Encante seus clientes no dia especial deles e impulsione sua retenção.</p>
</div>
{/* KPI Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8FF00]/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
<span className="material-symbols-outlined text-[#C8FF00] mb-4">cake</span>
<p className="text-on-surface-variant text-sm font-medium mb-1 uppercase tracking-wider">Mês Atual</p>
<h4 className="text-3xl font-bold text-on-surface">42</h4>
<p className="text-[10px] text-primary-container mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +12% vs mês anterior
                    </p>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8FF00]/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
<span className="material-symbols-outlined text-[#C8FF00] mb-4">send</span>
<p className="text-on-surface-variant text-sm font-medium mb-1 uppercase tracking-wider">Enviadas Hoje</p>
<h4 className="text-3xl font-bold text-on-surface">08</h4>
<p className="text-[10px] text-on-surface-variant mt-2">Próxima automação: 09:00</p>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8FF00]/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
<span className="material-symbols-outlined text-[#C8FF00] mb-4">confirmation_number</span>
<p className="text-on-surface-variant text-sm font-medium mb-1 uppercase tracking-wider">Cupons Resgatados</p>
<h4 className="text-3xl font-bold text-on-surface">15</h4>
<p className="text-[10px] text-primary-container mt-2 flex items-center gap-1">
                        Taxa de conversão: 35.7%
                    </p>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8FF00]/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
<span className="material-symbols-outlined text-[#C8FF00] mb-4">volunteer_activism</span>
<p className="text-on-surface-variant text-sm font-medium mb-1 uppercase tracking-wider">Taxa de Retorno</p>
<h4 className="text-3xl font-bold text-on-surface">82%</h4>
<p className="text-[10px] text-on-surface-variant mt-2">Clientes retidos via marketing</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Main List Column */}
<div className="lg:col-span-2 flex flex-col gap-6">
<div className="flex items-center justify-between mb-2">
<h5 className="text-xl font-bold text-on-surface">Aniversariantes da Semana</h5>
<button className="text-sm font-bold text-[#C8FF00] hover:underline transition-all">Ver calendário completo</button>
</div>
{/* Client Birthday Cards */}
<div className="grid grid-cols-1 gap-4">
{/* Card 1 */}
<div className="bg-surface-container-low p-4 rounded-2xl glass-border flex items-center justify-between hover:bg-surface-container transition-all duration-300 group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Cliente" className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Close-up portrait of a young man with a sharp fade haircut and artistic tattoos on his neck in a professional barber shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORod5raNZlHIi1xJ_e0uO6ZpSb2UysFgDdFQ7B06NLz48zjpv3L80zynAiU3xe8V5eR7m-hXnW1fa2jFgv8UpGraU-lhQFdAD-4x5k4PG2B5o1KiuqtPuMGdXFjW5L6EhTX1W2s8zMeaJ4AF3-fxOP1_mU4hrYfvOJdNBg31DFgRP6wrl1iCFie-4PQ_Wquv3GWamI5Gtfu6w7m3OFtMG1ZEbvsa-Xr420nL0LA0dyfRMdsEmuOS6DMJ25hP5jqKsN5hKlRylNJOg"/>
<div className="absolute -top-1 -right-1 bg-[#C8FF00] text-[#4f6700] p-0.5 rounded-full scale-75">
<span className="material-symbols-outlined text-[14px] font-bold">cake</span>
</div>
</div>
<div>
<h6 className="font-bold text-on-surface">Bruno Oliveira</h6>
<p className="text-xs text-on-surface-variant">Hoje, 24 de Outubro</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-error/10 text-error uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> Pendente
                                </span>
<button className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-sm">chat</span> Enviar Parabéns
                                </button>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-low p-4 rounded-2xl glass-border flex items-center justify-between hover:bg-surface-container transition-all duration-300 group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Cliente" className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Portrait of a sophisticated man with silver hair and a well-groomed beard wearing a dark linen shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_67LfH6JEeZplAkiqW7Vh_z6JBk156-6lFRIn1Z2g5g5hRzZPxoHRyr0a7gzbIR6J2LyS3rSRx6mrkjnACHaHDEts89KTK8AZENr8kIOvcTh8u3sv0ytfzoMQiOGolYk92uauPG0R7PVVake-mMmC8TZ2w_ELrjC0mwMD53r2a8YnJKeyOz3JZUyYodMvnA_pPRDpTZ5K18u9clbXA8yws855PMGuz63AcXUYEPqtHnYJUorI4PbEEJM5PR2f43Mm-3fnPm51adDu"/>
</div>
<div>
<h6 className="font-bold text-on-surface">Ricardo Mendes</h6>
<p className="text-xs text-on-surface-variant">Amanhã, 25 de Outubro</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#C8FF00]/10 text-[#C8FF00] uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Enviado
                                </span>
<button className="flex items-center gap-2 bg-surface-container-highest text-on-surface-variant px-4 py-2 rounded-xl text-xs font-bold opacity-50 cursor-not-allowed">
<span className="material-symbols-outlined text-sm">chat</span> Enviado via WhatsApp
                                </button>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-low p-4 rounded-2xl glass-border flex items-center justify-between hover:bg-surface-container transition-all duration-300 group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Cliente" className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Energetic young man with modern wavy hair looking directly at camera with a confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTP4JCaE4OK92_9qassVx1IljZxBTMIsyy_bIeh7Yg8TGzXZTjeX6CEHgeKHzqY3IbSfbCqUd3O1u4ig_i73pBcMNTereb1bkTPjz0c1iA8cJyMwLNYLXOwT_JaqcOQmuL78VvYKYZ3pc8l8lK4QhUj6EGtnz7PLAuhNv6bADyd1H3zAsEx6y7f8XMF7spzztxSTYoT1KodIdh1UiuvysHC4qAPPq76104ftr6Y7uBKKfbT7X1xR-NGT5YWqrFBiZKWjdrE7UPfxPz"/>
</div>
<div>
<h6 className="font-bold text-on-surface">Lucas Santos</h6>
<p className="text-xs text-on-surface-variant">27 de Outubro</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-error/10 text-error uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Pendente
                                </span>
<button className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-sm">chat</span> Enviar Parabéns
                                </button>
</div>
</div>
</div>
{/* Automation Editor Card */}
<div className="bg-surface-container p-8 rounded-3xl glass-border mt-4">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-[#C8FF00]/10 rounded-lg">
<span className="material-symbols-outlined text-[#C8FF00]">settings_suggest</span>
</div>
<h5 className="text-xl font-bold text-on-surface">Configuração de Automação</h5>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00]"></div>
<span className="ms-3 text-xs font-bold text-on-surface uppercase tracking-widest">Ativada</span>
</label>
</div>
<div className="space-y-4">
<div>
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Mensagem Personalizada</label>
<div className="bg-surface-container-low p-4 rounded-2xl glass-border">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-on-surface resize-none" rows="4">Fala {nome_cliente}, parabéns pelo seu dia! 🎂 Para comemorar, o BarberPro preparou um presente: {cupom_desconto} na sua próxima visita. Vem dar aquele tapa no visual! ✂️</textarea>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs font-bold text-on-surface-variant hover:text-[#C8FF00] transition-colors">{nome_cliente}</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs font-bold text-on-surface-variant hover:text-[#C8FF00] transition-colors">{cupom_desconto}</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs font-bold text-on-surface-variant hover:text-[#C8FF00] transition-colors">{horario}</button>
</div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-[#C8FF00]/5 rounded-2xl border border-[#C8FF00]/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#C8FF00]">schedule</span>
<div>
<p className="text-sm font-bold text-on-surface">Envio agendado</p>
<p className="text-[10px] text-on-surface-variant uppercase">Todos os dias às 09:00</p>
</div>
</div>
<button className="text-xs font-bold text-[#C8FF00] hover:scale-105 transition-all">Alterar horário</button>
</div>
</div>
</div>
</div>
{/* Sidebar Content Column */}
<div className="flex flex-col gap-6">
{/* Special Offer Card */}
<div className="bg-surface-container-high p-6 rounded-3xl glass-border relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C8FF00]/10 rounded-full blur-3xl"></div>
<span className="material-symbols-outlined text-[#C8FF00] mb-4 text-3xl">card_giftcard</span>
<h5 className="text-xl font-extrabold text-on-surface mb-2">Oferta Especial</h5>
<p className="text-xs text-on-surface-variant mb-6 leading-relaxed">Defina o benefício que será enviado automaticamente para seus clientes.</p>
<div className="space-y-4">
<div className="p-4 bg-surface-container rounded-2xl border-2 border-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.1)]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-black text-[#C8FF00] uppercase tracking-widest">Selecionado</span>
<span className="material-symbols-outlined text-[#C8FF00] text-sm">check_circle</span>
</div>
<p className="text-2xl font-black text-on-surface">20% OFF</p>
<p className="text-[10px] text-on-surface-variant">Desconto em qualquer serviço</p>
</div>
<div className="p-4 bg-surface-container rounded-2xl glass-border hover:border-[#C8FF00]/30 transition-all cursor-pointer group">
<p className="text-xl font-bold text-on-surface group-hover:text-[#C8FF00] transition-colors">Cerveja Grátis</p>
<p className="text-[10px] text-on-surface-variant">Voucher para Heineken 330ml</p>
</div>
<div className="p-4 bg-surface-container rounded-2xl glass-border hover:border-[#C8FF00]/30 transition-all cursor-pointer group">
<p className="text-xl font-bold text-on-surface group-hover:text-[#C8FF00] transition-colors">Combo Vip</p>
<p className="text-[10px] text-on-surface-variant">Corte + Barba por R$ 80,00</p>
</div>
<button className="w-full mt-4 py-3 rounded-xl border border-dashed border-outline-variant text-on-surface-variant text-xs font-bold hover:text-[#C8FF00] hover:border-[#C8FF00] transition-all">
                                + Criar Nova Oferta
                            </button>
</div>
</div>
{/* Preview Card */}
<div className="bg-[#1A1919] p-6 rounded-3xl border border-white/5">
<p className="text-xs font-black text-[#C8FF00] uppercase tracking-widest mb-4">Preview do WhatsApp</p>
<div className="bg-[#0b141a] rounded-2xl p-3 shadow-xl">
<div className="bg-[#dcf8c6] rounded-lg p-3 relative shadow-sm">
<p className="text-[13px] text-gray-800">
                                    Fala <strong>Bruno</strong>, parabéns pelo seu dia! 🎂 Para comemorar, o BarberPro preparou um presente: <strong>20% OFF</strong> na sua próxima visita. Vem dar aquele tapa no visual! ✂️
                                </p>
<p className="text-[9px] text-gray-400 text-right mt-1">09:00</p>
<div className="absolute -left-2 top-0 w-4 h-4 bg-[#dcf8c6] rotate-45 -z-10"></div>
</div>
</div>
</div>
{/* Quick Tip */}
<div className="bg-surface-container p-6 rounded-3xl glass-border">
<div className="flex items-center gap-3 mb-3">
<span className="material-symbols-outlined text-[#C8FF00]">lightbulb</span>
<span className="text-xs font-bold text-on-surface uppercase tracking-widest">Dica Premium</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                            Clientes que recebem mimos no aniversário retornam 3x mais rápido à barbearia. Use o cupom para aumentar sua frequência mensal!
                        </p>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default CentralDeAniversariantesMarketing;
