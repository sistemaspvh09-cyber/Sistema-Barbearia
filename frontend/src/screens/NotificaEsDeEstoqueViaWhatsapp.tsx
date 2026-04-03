
import React from 'react';

const NotificaEsDeEstoqueViaWhatsapp: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Desktop Sidebar Navigation */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 h-full w-64 border-r border-[#C8FF00]/10 bg-[#0D0D0D] shadow-2xl z-50">
<div className="p-8">
<h1 className="text-[#C8FF00] font-black italic text-2xl tracking-tighter">BarberPro</h1>
<p className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest opacity-60">Premium Management</p>
</div>
<div className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-xl duration-300" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-xl duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium text-sm">Agendamentos</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-[#C8FF00] border-r-2 border-[#C8FF00] bg-gradient-to-r from-[#C8FF00]/10 to-transparent rounded-r-none rounded-xl" href="?module=operacao&screen=gest-ode-estoque-desktop">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium text-sm">Estoque</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-xl duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm">Financeiro</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-[#1A1919] hover:text-[#C8FF00] transition-colors rounded-xl duration-300" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium text-sm">Configurações</span>
</a>
</div>
<div className="p-4 mt-auto border-t border-outline-variant/10">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-3 rounded-xl font-bold text-sm neo-glow transition-all">
                Novo Agendamento
            </button>
<div className="mt-6 flex flex-col gap-2">
<a className="flex items-center gap-4 px-4 py-2 text-gray-500 hover:text-[#C8FF00] text-sm" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined text-base">help_outline</span>
                    Suporte
                </a>
<a className="flex items-center gap-4 px-4 py-2 text-gray-500 hover:text-error text-sm" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined text-base">logout</span>
                    Sair
                </a>
</div>
</div>
</nav>
{/* Top App Bar (Mobile) */}
<header className="md:hidden fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</span>
<div className="flex gap-4">
<span className="material-symbols-outlined text-[#C8FF00]">notifications</span>
<span className="material-symbols-outlined text-[#C8FF00]">settings</span>
</div>
</header>
{/* Main Content Canvas */}
<main className="md:ml-64 min-h-screen pt-24 pb-32 md:pt-12 md:pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
{/* Header Section */}
<header className="mb-12">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                Notificações de <span className="text-[#C8FF00]">Estoque</span>
</h2>
<p className="text-on-surface-variant max-w-xl text-lg">
                Mantenha seu inventário sob controle com alertas automáticos via WhatsApp.
            </p>
</header>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Main Configuration Card (Col 1-7) */}
<section className="lg:col-span-7 space-y-8">
<div className="bg-surface-container p-8 rounded-[24px] glass-border relative overflow-hidden group">
{/* Subtle Glow Decor */}
<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C8FF00]/5 blur-[100px] pointer-events-none"></div>
<div className="flex items-center justify-between mb-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#C8FF00]/10 rounded-xl flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
</div>
<h3 className="text-xl font-bold">Ativar Alertas de Estoque Baixo</h3>
</div>
{/* Toggle Switch */}
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#C8FF00]"></div>
</label>
</div>
<form className="space-y-8">
{/* WhatsApp Input */}
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-sm">phone_iphone</span>
                                WhatsApp de Destino
                            </label>
<input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-5 py-4 focus:border-[#C8FF00] focus:ring-0 transition-all text-on-surface placeholder:text-outline" placeholder="+55 (00) 00000-0000" type="text"/>
</div>
{/* Message Template */}
<div className="space-y-3">
<div className="flex justify-between items-end">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
                                    Mensagem Personalizada
                                </label>
<span className="text-[10px] text-[#C8FF00]/60 font-bold uppercase tracking-tighter">Tags permitidas</span>
</div>
<textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-5 py-4 focus:border-[#C8FF00] focus:ring-0 transition-all text-on-surface custom-scrollbar" placeholder="Olá! O produto {nome_produto} está com estoque baixo. Quantidade atual: {quantidade_atual}. Favor repor." rows="4"></textarea>
<div className="flex gap-2 flex-wrap mt-2">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[11px] font-bold text-on-surface-variant cursor-pointer hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors">{nome_produto}</span>
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[11px] font-bold text-on-surface-variant cursor-pointer hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors">{quantidade_atual}</span>
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[11px] font-bold text-on-surface-variant cursor-pointer hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors">{sku}</span>
</div>
</div>
{/* Frequency Selector */}
<div className="space-y-4">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Frequência de Envio</label>
<div className="grid grid-cols-3 gap-3">
<button className="bg-[#C8FF00]/10 border border-[#C8FF00] text-[#C8FF00] py-4 rounded-xl text-sm font-bold transition-all" type="button">Imediato</button>
<button className="bg-surface-container-low border border-outline-variant/20 text-on-surface-variant py-4 rounded-xl text-sm font-bold hover:bg-surface-container-highest transition-all" type="button">Diário</button>
<button className="bg-surface-container-low border border-outline-variant/20 text-on-surface-variant py-4 rounded-xl text-sm font-bold hover:bg-surface-container-highest transition-all" type="button">Semanal</button>
</div>
</div>
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-5 rounded-2xl font-black text-lg uppercase tracking-wider neo-glow transition-all duration-300 flex items-center justify-center gap-3" type="button">
<span className="material-symbols-outlined">save</span>
                            Salvar Configurações
                        </button>
</form>
</div>
</section>
{/* History and Logs (Col 8-12) */}
<section className="lg:col-span-5 space-y-6">
<div className="bg-surface-container p-8 rounded-[24px] glass-border flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-bold">Últimos Alertas Enviados</h3>
<span className="material-symbols-outlined text-on-surface-variant">history</span>
</div>
<div className="space-y-4">
{/* Alert Item */}
<div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/5 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-bold text-on-surface group-hover:text-[#C8FF00] transition-colors">Pomada Matte Premium</h4>
<p className="text-xs text-on-surface-variant">Restante: 02 unidades</p>
</div>
<span className="bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] px-2 py-1 rounded-md font-black uppercase">Entregue</span>
</div>
<div className="flex justify-between items-center text-[11px] text-outline">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                    15 Out, 14:30
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">phone_iphone</span>
                                    +55 11 99...
                                </div>
</div>
</div>
{/* Alert Item */}
<div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/5 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-bold text-on-surface group-hover:text-[#C8FF00] transition-colors">Lâmina de Barbear Silver</h4>
<p className="text-xs text-on-surface-variant">Restante: 05 pacotes</p>
</div>
<span className="bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] px-2 py-1 rounded-md font-black uppercase">Entregue</span>
</div>
<div className="flex justify-between items-center text-[11px] text-outline">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                    14 Out, 09:15
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">phone_iphone</span>
                                    +55 11 99...
                                </div>
</div>
</div>
{/* Alert Item */}
<div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/5 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-bold text-on-surface group-hover:text-[#C8FF00] transition-colors">Óleo para Barba Wood</h4>
<p className="text-xs text-on-surface-variant">Restante: 01 unidade</p>
</div>
<span className="bg-error/10 text-error text-[10px] px-2 py-1 rounded-md font-black uppercase">Erro de Envio</span>
</div>
<div className="flex justify-between items-center text-[11px] text-outline">
<div className="flex items-center gap-1 text-error/60">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                    12 Out, 18:00
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">phone_iphone</span>
                                    +55 11 99...
                                </div>
</div>
</div>
</div>
{/* Decorative Graphic */}
<div className="mt-auto pt-10">
<div className="w-full h-32 bg-gradient-to-t from-primary/5 to-transparent rounded-t-[40px] border-t border-primary/10 flex items-center justify-center">
<div className="flex gap-4">
<div className="w-1 bg-[#C8FF00]/30 h-12 rounded-full"></div>
<div className="w-1 bg-[#C8FF00] h-16 rounded-full shadow-[0_0_10px_#C8FF00]"></div>
<div className="w-1 bg-[#C8FF00]/50 h-8 rounded-full"></div>
<div className="w-1 bg-[#C8FF00]/20 h-10 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Bottom Navigation Bar (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#0D0D0D]/80 backdrop-blur-md border-t border-[#C8FF00]/20 rounded-t-[24px] z-50 shadow-[0_-10px_40px_rgba(200,255,0,0.05)]">
<a className="flex flex-col items-center justify-center text-gray-500 active:bg-[#C8FF00]/5 p-2 transition-all" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.6)] p-2 transition-all" href="?module=operacao&screen=gest-ode-estoque-desktop">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Estoque</span>
</a>
<a className="flex flex-col items-center justify-center text-gray-500 active:bg-[#C8FF00]/5 p-2 transition-all" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Alertas</span>
</a>
<a className="flex flex-col items-center justify-center text-gray-500 active:bg-[#C8FF00]/5 p-2 transition-all" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default NotificaEsDeEstoqueViaWhatsapp;
