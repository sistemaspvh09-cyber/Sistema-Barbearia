
import React from 'react';

const ConfiguraODeWebhooksAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar Shell */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col p-4 w-64 bg-[#0D0D0D] border-r border-[#1A1919]/15">
<div className="mb-10 px-4">
<h1 className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 font-bold">Management Console</p>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-[#1A1919]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-[#1A1919]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                Agendamentos
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-[#1A1919]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Clientes
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-[#1A1919]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
                Serviços
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-[#1A1919]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Financeiro
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#C8FF00] bg-[#1A1919] rounded-xl font-bold text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" data-icon="webhook">webhook</span>
                Webhooks
            </a>
</nav>
<div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/10">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-colors text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Configurações
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-colors text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Sair
            </a>
</div>
</aside>
{/* TopAppBar Shell */}
<header className="fixed top-0 right-0 left-64 z-30 flex justify-between items-center px-8 h-20 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#1A1919]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-4">
<div className="bg-surface-container-high p-2 rounded-lg border border-outline-variant/10">
<span className="material-symbols-outlined text-primary-container" data-icon="webhook">webhook</span>
</div>
<div>
<h2 className="font-headline font-bold text-lg text-on-surface">Integração InfinitePay</h2>
<p className="text-xs text-on-surface-variant tracking-wide">Gerenciamento de API e Notificações</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="hover:text-white transition-all active:opacity-80"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="hover:text-white transition-all active:opacity-80"><span className="material-symbols-outlined" data-icon="help">help</span></button>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-2.5 rounded-xl font-bold text-sm shadow-[0px_0px_20px_rgba(200,255,0,0.2)] hover:shadow-[0px_0px_25px_rgba(200,255,0,0.4)] hover:scale-[1.02] transition-all">
                Salvar Alterações
            </button>
</div>
</header>
{/* Main Content Canvas */}
<main className="ml-64 pt-28 pb-12 px-12 min-h-screen">
<div className="max-w-6xl mx-auto">
{/* Header Section */}
<div className="mb-10">
<h3 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Configurações de Webhook (InfinitePay)</h3>
<p className="text-on-surface-variant max-w-2xl leading-relaxed">Gerencie os endpoints de notificação para receber atualizações de pagamento em tempo real e automatize seu fluxo de trabalho.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/* Left Column: Primary Configs */}
<div className="lg:col-span-2 space-y-8">
{/* Main Card: Endpoint & Secret */}
<section className="bg-surface-container rounded-2xl p-8 glass-border shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-[100px] -mr-32 -mt-32"></div>
<div className="relative space-y-6">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary-container" data-icon="link">link</span>
<h4 className="text-lg font-bold text-on-surface">Endpoint de Produção</h4>
</div>
<div className="space-y-4">
{/* URL Field */}
<div className="group">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">URL do Webhook</label>
<div className="flex gap-3">
<div className="relative flex-grow">
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 text-on-surface-variant font-medium text-sm focus:ring-2 focus:ring-primary-container transition-all" readOnly="" type="text" value="https://api.barberpro.com/v1/webhooks/infinitepay/receive"/>
</div>
<button className="bg-surface-container-highest px-4 rounded-xl glass-border hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
</div>
{/* Secret Key Field */}
<div className="group">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Chave Secreta de Assinatura</label>
<div className="flex gap-3">
<div className="relative flex-grow">
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 text-on-surface-variant font-mono text-sm focus:ring-2 focus:ring-primary-container transition-all" readOnly="" type="password" value="sk_infinite_92384729384792384"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
<button className="text-on-surface-variant hover:text-primary-container transition-colors"><span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span></button>
<button className="text-on-surface-variant hover:text-primary-container transition-colors"><span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span></button>
</div>
</div>
<button className="bg-surface-container-highest px-4 rounded-xl glass-border hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
</button>
</div>
<p className="text-[11px] text-on-surface-variant/60 mt-2 px-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="shield">shield</span>
                                        Use esta chave para validar a autenticidade das notificações recebidas.
                                    </p>
</div>
</div>
</div>
</section>
{/* Event Selection Section */}
<section className="bg-surface-container rounded-2xl p-8 glass-border shadow-lg">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="checklist">checklist</span>
<h4 className="text-lg font-bold text-on-surface">Eventos Assinados</h4>
</div>
<span className="text-[11px] bg-primary-container/10 text-primary-container px-2 py-1 rounded-full font-bold uppercase tracking-wider">4 Selecionados</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Checkbox Item 1 */}
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-outline-variant/20">
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">payment.succeeded</span>
<span className="text-xs text-on-surface-variant">Disparado quando um pagamento é concluído.</span>
</div>
<input checked="" className="w-5 h-5 rounded border-none bg-surface-bright text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</label>
{/* Checkbox Item 2 */}
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-outline-variant/20">
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">payment.failed</span>
<span className="text-xs text-on-surface-variant">Notifica falhas no processamento de cartão.</span>
</div>
<input checked="" className="w-5 h-5 rounded border-none bg-surface-bright text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</label>
{/* Checkbox Item 3 */}
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-outline-variant/20">
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">appointment.canceled</span>
<span className="text-xs text-on-surface-variant">Sincroniza cancelamentos com a agenda.</span>
</div>
<input checked="" className="w-5 h-5 rounded border-none bg-surface-bright text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</label>
{/* Checkbox Item 4 */}
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-outline-variant/20">
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">payout.scheduled</span>
<span className="text-xs text-on-surface-variant">Aviso de agendamento de depósito bancário.</span>
</div>
<input checked="" className="w-5 h-5 rounded border-none bg-surface-bright text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</label>
</div>
</section>
</div>
{/* Right Column: Logs & Quick Stats */}
<div className="space-y-8">
{/* Connection Status */}
<section className="bg-surface-container-high rounded-2xl p-6 glass-border">
<div className="flex items-center gap-4 mb-6">
<div className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></div>
<span className="text-sm font-bold text-on-surface">Status: Ativo</span>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary-container/20 text-primary-container hover:bg-primary-container/5 transition-all font-bold text-sm">
<span className="material-symbols-outlined text-sm" data-icon="activity">search_activity</span>
                                Testar Conexão
                            </button>
</div>
</section>
{/* Logs Table */}
<section className="bg-surface-container rounded-2xl overflow-hidden glass-border shadow-lg">
<div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
<h4 className="font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container" data-icon="history">history</span>
                                Logs Recentes
                            </h4>
<button className="text-[10px] font-bold text-primary-container hover:underline">Ver Todos</button>
</div>
<div className="p-4 space-y-3">
{/* Log Item 1 */}
<div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4 group hover:bg-surface-container-highest transition-all">
<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<span className="text-[10px] font-bold">200</span>
</div>
<div className="flex-grow">
<p className="text-[11px] font-bold text-on-surface">payment.succeeded</p>
<p className="text-[10px] text-on-surface-variant font-mono">#92837...482</p>
</div>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">2m atrás</span>
</div>
{/* Log Item 2 */}
<div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4 group hover:bg-surface-container-highest transition-all">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
<span className="text-[10px] font-bold">400</span>
</div>
<div className="flex-grow">
<p className="text-[11px] font-bold text-on-surface">payment.failed</p>
<p className="text-[10px] text-on-surface-variant font-mono">#11283...910</p>
</div>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">15m atrás</span>
</div>
{/* Log Item 3 */}
<div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4 group hover:bg-surface-container-highest transition-all">
<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<span className="text-[10px] font-bold">200</span>
</div>
<div className="flex-grow">
<p className="text-[11px] font-bold text-on-surface">appointment.canceled</p>
<p className="text-[10px] text-on-surface-variant font-mono">#82736...112</p>
</div>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">1h atrás</span>
</div>
{/* Log Item 4 */}
<div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4 group hover:bg-surface-container-highest transition-all">
<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<span className="text-[10px] font-bold">200</span>
</div>
<div className="flex-grow">
<p className="text-[11px] font-bold text-on-surface">payment.succeeded</p>
<p className="text-[10px] text-on-surface-variant font-mono">#44521...889</p>
</div>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">3h atrás</span>
</div>
{/* Log Item 5 */}
<div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4 group hover:bg-surface-container-highest transition-all">
<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<span className="text-[10px] font-bold">200</span>
</div>
<div className="flex-grow">
<p className="text-[11px] font-bold text-on-surface">payout.scheduled</p>
<p className="text-[10px] text-on-surface-variant font-mono">#12093...772</p>
</div>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">6h atrás</span>
</div>
</div>
</section>
{/* Stats Card */}
<div className="bg-primary-container rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-8xl" data-icon="shield_check" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
</div>
<h5 className="text-[#4f6700] font-bold text-sm mb-1">Taxa de Entrega</h5>
<p className="text-4xl font-extrabold text-[#394b00] tracking-tighter">98.4%</p>
<p className="text-[10px] text-[#4f6700]/70 font-bold mt-2 uppercase tracking-widest">Últimos 30 dias</p>
</div>
</div>
</div>
</div>
</main>
{/* Success Toast (Visual Reference only) */}
<div className="fixed bottom-8 right-8 z-50 transform translate-y-24 opacity-0 transition-all duration-500 pointer-events-none">
<div className="bg-surface-container-highest glass-border px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div>
<p className="font-bold text-on-surface">Configurações Salvas!</p>
<p className="text-xs text-on-surface-variant">Seus webhooks foram atualizados com sucesso.</p>
</div>
</div>
</div>

    </div>
  );
};

export default ConfiguraODeWebhooksAdmin;
