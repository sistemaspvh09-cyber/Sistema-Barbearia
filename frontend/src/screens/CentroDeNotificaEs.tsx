
import React from 'react';

const CentroDeNotificaEs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar Shell */}
<header className="fixed top-0 w-full border-b border-[#C8FF00]/15 bg-[#0D0D0D]/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 z-50 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-8">
<h1 className="text-xl font-black text-[#C8FF00] italic font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</h1>
<div className="hidden md:flex items-center gap-6">
<a className="text-[#C8FF00] border-b-2 border-[#C8FF00] pb-1 font-['Plus_Jakarta_Sans'] tracking-tight transition-all duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] font-['Plus_Jakarta_Sans'] tracking-tight transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agendamentos</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] font-['Plus_Jakarta_Sans'] tracking-tight transition-all duration-300" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">Clientes</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors p-2" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors p-2" data-icon="help">help</button>
<div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-[#C8FF00]/20">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male barber with a styled beard in a high-end studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhN8W0mcrm9gYzXX1mv-ePWAbV0w6yyoGqpnebeqThHWcBQiXYY_33ovh91_mmzXP8emeJT4U75Tcpj6Z7Fgxw0jp8BkP1-p8s3qwAilSBGwzmg47lP6Wbp0Pts6ktQIEiuMQVhx0Bu7PpxG9TPcdLrDM-TX27kWeWwEo_oTN9q9HM3Dg9n1xVLdmRbeA1oynwxVgAgNWYj4W7tGWXKfr-DUFDEsGbRjqYNgOInR1vwMKNo26m8nviyYKblNwMt1ZljQ8b2NeV9I0J"/>
</div>
</div>
</header>
{/* SideNavBar Shell (Hidden on Mobile) */}
<aside className="fixed left-0 top-0 h-full flex flex-col py-6 z-40 h-screen w-64 border-r border-[#C8FF00]/15 bg-[#0D0D0D] font-['Plus_Jakarta_Sans'] font-medium text-sm hidden lg:flex">
<div className="px-6 mb-10 mt-16">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="cut">cut</span>
</div>
<div>
<div className="text-lg font-extrabold text-[#C8FF00]">BarberPro</div>
<div className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Premium SaaS</div>
</div>
</div>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 bg-[#C8FF00]/10 text-[#C8FF00] rounded-lg px-4 py-3 border-r-4 border-[#C8FF00] scale-98 transition-transform duration-200" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span>Agendamentos</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>Clientes</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Financeiro</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Configurações</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-2 pt-6 border-t border-[#C8FF00]/10">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
<span>Suporte</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-error transition-colors" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Sair</span>
</a>
</div>
</aside>
{/* Main Content (Dashboard Background) */}
<main className="lg:pl-64 pt-16 min-h-screen bg-surface relative overflow-hidden">
{/* Abstract background glow */}
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full"></div>
<div className="p-8 max-w-7xl mx-auto">
<header className="mb-10">
<h2 className="text-4xl font-extrabold tracking-tight mb-2">Visão Geral</h2>
<p className="text-on-surface-variant">Bem-vindo de volta, Carlos. Sua barbearia está com 85% de ocupação hoje.</p>
</header>
{/* Dashboard Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Stat Card 1 */}
<div className="bg-surface-container border border-outline-variant/15 p-6 rounded-xl hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Faturamento Hoje</span>
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="text-3xl font-bold tracking-tighter">R$ 1.280,00</div>
<div className="text-xs text-primary mt-2 font-medium">+12% em relação a ontem</div>
</div>
{/* Stat Card 2 */}
<div className="bg-surface-container border border-outline-variant/15 p-6 rounded-xl hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Agendamentos</span>
<span className="material-symbols-outlined text-primary" data-icon="event_available">event_available</span>
</div>
<div className="text-3xl font-bold tracking-tighter">24</div>
<div className="text-xs text-on-surface-variant mt-2 font-medium">6 horários disponíveis</div>
</div>
{/* Stat Card 3 */}
<div className="bg-primary-container p-6 rounded-xl shadow-[0_0_30px_rgba(200,255,0,0.2)]">
<div className="flex justify-between items-start mb-4">
<span className="text-on-primary-container text-xs font-bold uppercase tracking-widest">Status da Loja</span>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-on-primary-container animate-pulse"></span>
<span className="text-[10px] font-bold text-on-primary-container">ABERTO</span>
</div>
</div>
<div className="text-3xl font-black text-on-primary-container tracking-tighter italic">Premium Experience</div>
<div className="text-xs text-on-primary-container/80 mt-2 font-medium">Próximo fechamento: 21:00</div>
</div>
{/* Active Sessions List */}
<div className="md:col-span-2 bg-surface-container border border-outline-variant/15 p-8 rounded-xl">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-bold">Próximos Cortes</h3>
<button className="text-primary text-sm font-bold hover:underline">Ver Agenda Completa</button>
</div>
<div className="space-y-6">
<div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container-low border-l-4 border-primary">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">14:00</div>
<div className="flex-1">
<div className="font-bold">Ricardo Alcantara</div>
<div className="text-xs text-on-surface-variant">Corte Degradê + Barba</div>
</div>
<div className="text-right">
<div className="text-sm font-bold">R$ 85,00</div>
<div className="text-[10px] text-primary/70 uppercase font-bold">Confirmado</div>
</div>
</div>
<div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container-low border-l-4 border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface-variant">15:30</div>
<div className="flex-1">
<div className="font-bold">Gabriel Meneses</div>
<div className="text-xs text-on-surface-variant">Corte Clássico</div>
</div>
<div className="text-right">
<div className="text-sm font-bold">R$ 55,00</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold">Pendente</div>
</div>
</div>
</div>
</div>
{/* Products/Stock Preview */}
<div className="bg-surface-container border border-outline-variant/15 p-8 rounded-xl">
<h3 className="text-xl font-bold mb-8">Produtos em Destaque</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container-highest">
<img className="w-full h-full object-cover opacity-80" data-alt="Close-up of a premium pomade jar with dark glass and metallic lid on a reflective black surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSPs2vzuOcMYJEeFAM3Nyxc39IOj1U3zqR5yeOLIoqMSEbcQvQJVxv0J6rM8s_SXaPvCpgUN_UfgBc9bsyIDboo1yvwuo9d78BEwutE20a11HjYgfhJZ0eeNItuFLDj-yK_geM7OBnfqfAIhu3KF9ylRS_jqPW9AjMttNUiSlRaw5tQT2ENNWrfLgZn32m6WpdnKFHjEa0o43rLRr2oyW6beNPvFb1wv-bcbCTeXsz-yOL0qUAST2ZuzS0gCE7-pyQ-AJHa0-eurhN"/>
</div>
<div className="flex-1">
<div className="text-sm font-bold">Pomada Matte X</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-1">
<div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container-highest">
<img className="w-full h-full object-cover opacity-80" data-alt="Stylized artistic view of high-grade barber scissors laying on a leather roll under spotlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOU6tV-DWpazmvlMs_LXmHYGmRTU-SKCBI0K9_KXXPqgzJ2X9NblV4ybnio6b-BK5DfrmoFFlNDRjH1oQFTSV4FL-8JDKbTaCzbskiGi_y-Xwc8JxGgpu7QcZH_DdAK0HBmtlcNSfVE9vva-TPz2np1J4pFIU_Q62dhGLpYxdWUKKWaZRs1nX1kOwFTGLT5-4navAEggHRAHkqU9dqWlJpqMWSyxHpyWNnc-sFSbfrCmzMcxMYQ7dj295HqG8Utfr6oZC3qiUul40S"/>
</div>
<div className="flex-1">
<div className="text-sm font-bold">Óleo para Barba</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-1">
<div className="bg-error h-full rounded-full" style={{ width: '15%' }}></div>
</div>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 bg-surface-container-highest hover:bg-surface-container-highest/70 text-sm font-bold rounded-lg transition-colors">Gerenciar Estoque</button>
</div>
</div>
</div>
</main>
{/* Notification Side Drawer Overlay */}
<div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm pointer-events-none"></div> {/* Scrim */}
<aside className="fixed top-0 right-0 h-full w-full max-w-md glass-panel z-[70] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.9)] border-l border-[#C8FF00]/10">
{/* Drawer Header */}
<div className="px-8 py-10 flex justify-between items-center">
<div>
<h2 className="text-2xl font-black italic text-[#C8FF00] tracking-tight neon-glow">Central de Alertas</h2>
<p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">Sincronizado em tempo real</p>
</div>
<button className="w-10 h-10 rounded-full bg-[#1A1919] flex items-center justify-center hover:bg-[#C8FF00] hover:text-[#4f6700] transition-all duration-300">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
{/* Filter Chips */}
<div className="px-8 mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-4 py-1.5 rounded-full bg-[#C8FF00] text-[#4f6700] text-[10px] font-extrabold uppercase whitespace-nowrap">Todos</button>
<button className="px-4 py-1.5 rounded-full bg-[#1A1919] text-[#A0A0A0] hover:text-[#C8FF00] text-[10px] font-extrabold uppercase whitespace-nowrap transition-colors">Vendas</button>
<button className="px-4 py-1.5 rounded-full bg-[#1A1919] text-[#A0A0A0] hover:text-[#C8FF00] text-[10px] font-extrabold uppercase whitespace-nowrap transition-colors">Agenda</button>
<button className="px-4 py-1.5 rounded-full bg-[#1A1919] text-[#A0A0A0] hover:text-[#C8FF00] text-[10px] font-extrabold uppercase whitespace-nowrap transition-colors">Mensagens</button>
</div>
{/* Notification List */}
<div className="flex-1 overflow-y-auto px-8 space-y-4 pb-10">
{/* Category: Novos Agendamentos */}
<div className="space-y-3">
<div className="text-[10px] font-black text-[#A0A0A0] uppercase tracking-[0.2em] flex items-center gap-2">
<span>Novos Agendamentos</span>
<div className="h-[1px] flex-1 bg-[#C8FF00]/10"></div>
</div>
<div className="group relative bg-[#1A1919]/50 hover:bg-[#1A1919] p-4 rounded-xl border-l-2 border-[#C8FF00] transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="event_repeat">event_repeat</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm">Novo Agendamento: Rodrigo S.</h4>
<span className="text-[10px] text-[#A0A0A0]">2 min ago</span>
</div>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Corte Degradê + Sobrancelha para amanhã às 10:30.</p>
<div className="mt-3 flex gap-2">
<button className="text-[10px] font-bold text-[#C8FF00] underline">Confirmar</button>
<button className="text-[10px] font-bold text-[#A0A0A0] hover:text-white transition-colors">Reagendar</button>
</div>
</div>
</div>
</div>
</div>
{/* Category: Pagamentos Confirmados */}
<div className="space-y-3 pt-4">
<div className="text-[10px] font-black text-[#A0A0A0] uppercase tracking-[0.2em] flex items-center gap-2">
<span>Finanças</span>
<div className="h-[1px] flex-1 bg-[#C8FF00]/10"></div>
</div>
<div className="group relative bg-[#1A1919]/50 hover:bg-[#1A1919] p-4 rounded-xl border-l-2 border-[#485e00] transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm">Pagamento Confirmado</h4>
<span className="text-[10px] text-[#A0A0A0]">15 min ago</span>
</div>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Recebimento de R$ 120,00 referente ao Combo Premium (Lucas O.).</p>
</div>
</div>
</div>
</div>
{/* Category: Alertas de Estoque */}
<div className="space-y-3 pt-4">
<div className="text-[10px] font-black text-[#A0A0A0] uppercase tracking-[0.2em] flex items-center gap-2">
<span>Estoque Crítico</span>
<div className="h-[1px] flex-1 bg-error/20"></div>
</div>
<div className="group relative bg-[#1A1919]/50 hover:bg-[#1A1919] p-4 rounded-xl border-l-2 border-error transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm text-error">Estoque Baixo: Pós-Barba</h4>
<span className="text-[10px] text-[#A0A0A0]">1h ago</span>
</div>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Resta apenas 1 unidade do Gel Pós-Barba Refrescante em estoque.</p>
<button className="mt-3 px-4 py-2 bg-error/10 text-error hover:bg-error hover:text-white rounded-lg text-[10px] font-bold transition-all">Solicitar Reposição</button>
</div>
</div>
</div>
</div>
{/* Category: Suporte */}
<div className="space-y-3 pt-4">
<div className="text-[10px] font-black text-[#A0A0A0] uppercase tracking-[0.2em] flex items-center gap-2">
<span>Mensagens do Sistema</span>
<div className="h-[1px] flex-1 bg-[#C8FF00]/10"></div>
</div>
<div className="group relative bg-[#1A1919]/50 hover:bg-[#1A1919] p-4 rounded-xl border-l-2 border-outline transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-[#A0A0A0]">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm">Suporte BarberPro</h4>
<span className="text-[10px] text-[#A0A0A0]">3h ago</span>
</div>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Seu ticket #4492 foi atualizado. Clique para ver a resposta da nossa equipe.</p>
</div>
</div>
</div>
</div>
</div>
{/* Drawer Footer */}
<div className="p-8 border-t border-[#C8FF00]/10 bg-[#0D0D0D]">
<button className="w-full py-4 bg-[#C8FF00] hover:bg-[#b8e600] text-[#4f6700] rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 scale-100 active:scale-95 shadow-[0_0_20px_rgba(200,255,0,0.2)]">
<span>Marcar Tudo como Lido</span>
<span className="material-symbols-outlined text-sm" data-icon="done_all">done_all</span>
</button>
</div>
</aside>
{/* FAB Suppression Rule Applied: No FAB on Notification/Detail Overlay */}

    </div>
  );
};

export default CentroDeNotificaEs;
