
import React from 'react';

const SuporteEChamados: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar Shell */}
<header className="fixed top-0 w-full border-b border-[#C8FF00]/15 bg-[#0D0D0D]/70 backdrop-blur-xl z-50 flex justify-between items-center px-6 h-16 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-[#C8FF00] italic font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</span>
<nav className="hidden md:flex gap-6 items-center h-full">
<a className="text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">Agendamentos</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-[#1A1919] transition-all duration-300 font-medium text-sm" href="#">Clientes</a>
<a className="text-[#C8FF00] border-b-2 border-[#C8FF00] pb-1 font-medium text-sm" href="#">Suporte</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface placeholder:text-on-surface-variant" placeholder="Buscar chamados..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined" data-icon="help">help</span></button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined" data-icon="support_agent">support_agent</span></button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-[#C8FF00]/30 ml-2">
<img alt="User profile avatar" data-alt="Professional headshot of a male barber with a well-groomed beard in dark cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8fVQ7Kana3FMJkw8TeCl-S0gnXiENG5CIrpLE3Wkye7cz8dR2zGLiWDZuS66RkXVzGFFnvYDRRQ3RaW_KuR-Btb7dTGnXdmhG3vlgRJn2iIK2udg83Rl-mBsccE4bhX_ZxYvI4FxX8Hqy3H6pNcYLTjcqLs3wTYBfsTCGzSOUpIV6tEHvn7ozRE1-wDX5-PfN5lYAgiAryiwEQNOTsUwmT8bqfnjyQeo8l8JNB5qrnN_YDV10l9rx9QLnrB_q3OpSVOuKOkOkuqjq"/>
</div>
</div>
</div>
</header>
{/* SideNavBar Shell (Desktop) */}
<aside className="fixed left-0 top-0 h-full w-64 bg-[#0D0D0D] border-r border-[#C8FF00]/15 flex flex-col py-6 z-40 pt-20 hidden lg:flex">
<div className="px-4 mb-8">
<div className="p-4 rounded-xl bg-surface-container flex items-center gap-3 border border-outline-variant/10">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="content_cut" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h3 className="font-extrabold text-[#C8FF00] text-sm leading-tight">BarberPro</h3>
<p className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Premium SaaS</p>
</div>
</div>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span> Agendamentos
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span> Clientes
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span> Financeiro
            </a>
<a className="flex items-center gap-3 bg-[#C8FF00]/10 text-[#C8FF00] rounded-lg px-4 py-3 border-r-4 border-[#C8FF00] font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="contact_support" style={{ fontVariationSettings: "'FILL' 1" }}>contact_support</span> Suporte
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span> Configurações
            </a>
</nav>
<div className="px-4 mt-auto">
<button className="w-full bg-primary-container text-on-primary-container font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all scale-100 active:scale-95 duration-200">
<span className="material-symbols-outlined text-xl" data-icon="add_circle">add_circle</span>
                Novo Chamado
            </button>
<div className="mt-6 border-t border-outline-variant/10 pt-4 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-2 hover:text-white transition-colors text-sm" href="#">
<span className="material-symbols-outlined text-lg" data-icon="logout">logout</span> Sair
                </a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="lg:ml-64 pt-24 px-6 pb-12 min-h-screen">
<div className="max-w-7xl mx-auto">
{/* Header Section */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-white italic">Centro de Suporte <span className="text-[#C8FF00]">Técnico</span></h1>
<p className="text-on-surface-variant max-w-xl text-lg">Gerencie seus chamados e obtenha auxílio da nossa equipe de especialistas para manter sua barbearia operando em alta performance.</p>
</div>
<div className="flex gap-4">
<div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center min-w-[120px]">
<span className="text-2xl font-black text-white">12</span>
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Total</span>
</div>
<div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center min-w-[120px] border-[#C8FF00]/30">
<span className="text-2xl font-black text-[#C8FF00]">02</span>
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Abertos</span>
</div>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* Ticket History Table (Bento Primary) */}
<div className="lg:col-span-8 space-y-6">
<div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
<div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
<h2 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="history">history</span>
                                Histórico de Chamados
                            </h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs font-bold text-white hover:bg-surface-bright transition-colors">Todos</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface-variant hover:text-white transition-colors">Em Aberto</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface-variant hover:text-white transition-colors">Resolvidos</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low text-on-surface-variant uppercase text-[10px] font-bold tracking-widest">
<tr>
<th className="px-6 py-4">ID</th>
<th className="px-6 py-4">Assunto</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Prioridade</th>
<th className="px-6 py-4">Data</th>
<th className="px-6 py-4">Ação</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5 text-sm font-medium text-on-surface-variant">#BP-8942</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-white font-semibold text-sm">Falha na integração de pagamentos</span>
<span className="text-[11px] text-on-surface-variant">Financeiro • Terminal 04</span>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase border border-orange-500/20">Em Análise</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="text-xs font-medium">Urgente</span>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant">Hoje, 14:20</td>
<td className="px-6 py-5">
<button className="p-2 rounded-lg bg-surface-container-highest text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5 text-sm font-medium text-on-surface-variant">#BP-8810</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-white font-semibold text-sm">Dúvida sobre relatório mensal</span>
<span className="text-[11px] text-on-surface-variant">Suporte Geral</span>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2.5 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-black uppercase border border-[#C8FF00]/20">Aberto</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-medium">Média</span>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant">Ontem, 09:15</td>
<td className="px-6 py-5">
<button className="p-2 rounded-lg bg-surface-container-highest text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5 text-sm font-medium text-on-surface-variant">#BP-8705</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-white font-semibold text-sm text-on-surface-variant line-through">Atualização de horários de feriado</span>
<span className="text-[11px] text-on-surface-variant">Configurações</span>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2.5 py-1 rounded-full bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-black uppercase border border-outline-variant/20">Resolvido</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></div>
<span className="text-xs font-medium text-on-surface-variant">Baixa</span>
</div>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant">12 Mai, 2024</td>
<td className="px-6 py-5">
<button className="p-2 rounded-lg bg-surface-container-highest text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low border-t border-outline-variant/10 flex justify-center">
<button className="text-xs font-bold text-[#C8FF00] hover:underline uppercase tracking-widest">Ver Histórico Completo</button>
</div>
</div>
</div>
{/* Create Ticket Form (Bento Secondary) */}
<aside className="lg:col-span-4 space-y-6">
<div className="glass-card p-6 rounded-2xl border-l-4 border-l-[#C8FF00] shadow-xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-[120px]" data-icon="add_task">add_task</span>
</div>
<h2 className="font-bold text-xl mb-6">Novo Ticket</h2>
<form className="space-y-4">
<div>
<label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Assunto do Chamado</label>
<input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none transition-all placeholder:text-on-tertiary-fixed-variant" placeholder="Ex: Problema no App de Agendamento" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Departamento</label>
<select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none transition-all appearance-none">
<option>Suporte Técnico</option>
<option>Financeiro</option>
<option>Comercial</option>
</select>
</div>
<div>
<label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Prioridade</label>
<select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none transition-all appearance-none">
<option>Normal</option>
<option>Urgente</option>
<option>Crítico</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Descrição</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none transition-all placeholder:text-on-tertiary-fixed-variant resize-none" placeholder="Descreva o problema com o máximo de detalhes..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-4 cursor-pointer hover:text-white transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="attach_file">attach_file</span>
<span className="text-xs font-medium">Anexar prints ou arquivos</span>
</div>
<button className="w-full bg-primary-container text-on-primary-container font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] transition-all uppercase tracking-tighter active:scale-95 duration-200" type="submit">
                                Enviar Solicitação
                            </button>
</form>
</div>
{/* Quick Support Links */}
<div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
<h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-widest mb-4">Recursos Úteis</h3>
<div className="space-y-3">
<a className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-400" data-icon="book">book</span>
<span className="text-sm font-semibold">Central de Ajuda</span>
</div>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="arrow_forward">arrow_forward</span>
</a>
<a className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-purple-400" data-icon="video_library">video_library</span>
<span className="text-sm font-semibold">Tutoriais em Vídeo</span>
</div>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="arrow_forward">arrow_forward</span>
</a>
<a className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-pink-400" data-icon="verified">verified</span>
<span className="text-sm font-semibold">Status do Sistema</span>
</div>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</aside>
</div>
</div>
</main>
{/* Floating Integrated Chat */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
{/* Chat Window (Simulated Open State) */}
<div className="mb-4 w-80 md:w-96 glass-card rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden max-h-[500px] hidden" id="support-chat">
<div className="bg-[#C8FF00] p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full border-2 border-[#0D0D0D]" data-alt="Close up portrait of a friendly tech support agent woman with dark hair and soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6L81O38Bv-A-swSgcIU4TpQyCfzaMbuHCmcXe7uEc91wzCuNSmU4PbY-TBuwqjx_R2rjSjGeNJwlI3x4gsXlHL5I4dmj2wsEqC5LSLG7sYTMtrUjC0TYxaW1821rnIkOaQugGicucOdV8D2KzNbelBxz5HgbkQkmzlab0C7IqILOzFaQz64NaXRzgC0J8vTqHjr_vCZWbcBNF8QctayxrWO9bbsdjAt22SlmOOQDTMtmEIyf4a0q-uA9_8cab2ep32d5sPhEhlgUc"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0D0D0D]"></div>
</div>
<div>
<h4 className="text-[#0D0D0D] font-bold text-sm leading-none">Amanda Santos</h4>
<span className="text-[#0D0D0D]/70 text-[10px] font-bold">Especialista de Suporte</span>
</div>
</div>
<button className="text-[#0D0D0D]/50 hover:text-[#0D0D0D] transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar min-h-[300px] bg-surface-container-low/50">
<div className="flex flex-col gap-1 max-w-[80%]">
<span className="text-[10px] text-on-surface-variant ml-1">Amanda • 14:30</span>
<div className="bg-surface-container p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                        Olá! Como posso ajudar na sua experiência com o BarberPro hoje? 👋
                    </div>
</div>
<div className="flex flex-col gap-1 max-w-[80%] self-end">
<span className="text-[10px] text-on-surface-variant mr-1 text-right">Você • 14:32</span>
<div className="bg-primary-container text-on-primary-container p-3 rounded-2xl rounded-tr-none text-sm font-medium leading-relaxed">
                        Estou com dificuldade de sincronizar minha agenda com o Google Calendar.
                    </div>
</div>
<div className="flex flex-col gap-1 max-w-[80%]">
<span className="text-[10px] text-on-surface-variant ml-1 text-on-primary">Amanda • Digitante...</span>
<div className="bg-surface-container p-3 rounded-2xl rounded-tl-none flex gap-1">
<div className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:-0.15s]"></div>
<div className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:-0.3s]"></div>
</div>
</div>
</div>
<div className="p-4 bg-surface-container border-t border-outline-variant/10">
<div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-3 py-2 border border-outline-variant/10 focus-within:border-[#C8FF00]/40 transition-colors">
<input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 outline-none text-on-surface" placeholder="Escreva sua mensagem..." type="text"/>
<button className="p-1.5 text-[#C8FF00] hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
</button>
</div>
</div>
</div>
{/* Chat Toggle Button */}
<button className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_30px_rgba(200,255,0,0.5)] hover:scale-110 transition-all duration-300 relative group">
<div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-black flex items-center justify-center border-2 border-surface text-white">1</div>
<span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform" data-icon="forum" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
</button>
</div>

    </div>
  );
};

export default SuporteEChamados;
