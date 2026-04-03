
import React from 'react';

const ConfiguraODeLinkAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold text-[#C8FF00] italic font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</span>
<div className="hidden md:flex items-center gap-6">
<span className="text-[#A0A0A0] hover:scale-105 hover:text-[#C8FF00] transition-all duration-300 cursor-pointer text-sm font-medium">Dashboard</span>
<span className="text-[#C8FF00] font-bold hover:scale-105 transition-all duration-300 cursor-pointer text-sm">Configurações</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="bg-surface-container-low border-none rounded-full px-4 py-2 text-xs w-64 focus:ring-1 focus:ring-primary-container" placeholder="Buscar configurações..." type="text"/>
</div>
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img className="w-8 h-8 rounded-full border border-primary/20" data-alt="close-up portrait of a professional male barber with styled hair and beard in a modern dark studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyRQbnLq51pwIFvsM7ArA8EbJNSiee-9eqf_FI8Kglf3WK9umdXoun5EjiY02Is6EWmjzbFZzEqvNTlsq_ydwRoN6fv3smJGgxDTCplT6PZI37ZUxMIWKPm4zdwcWyasJEUxQpPAAJMQXQy-BZyIlGgexgfrkVm5CJ1EBc589-Sso3HNAdclli6YBI85YxmFTUtYECdJGZguL4O41EPx_7ccz3aOt2pbG0YTJH4Bff5MSf-vYS8UxewdTqI3o2cP91EDXyVrU89YB5"/>
</div>
</header>
{/* SideNavBar */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#1A1919] hidden md:flex flex-col py-8 pt-20">
<div className="px-6 mb-8">
<h2 className="text-[#C8FF00] font-black tracking-tighter text-2xl">BarberPro</h2>
<p className="text-[#A0A0A0] text-[10px] uppercase tracking-[0.2em]">Premium Management</p>
</div>
<nav className="flex-grow space-y-1">
<div className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Dashboard</span>
</div>
<div className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Agendamentos</span>
</div>
<div className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Clientes</span>
</div>
<div className="text-[#C8FF00] bg-[#C8FF00]/10 border-r-4 border-[#C8FF00] py-3 px-6 flex items-center gap-4 cursor-default">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Configurações</span>
</div>
</nav>
<div className="mt-auto px-6 space-y-4">
<div className="bg-gradient-to-r from-transparent via-[#C8FF00]/10 to-transparent h-[1px] w-full"></div>
<button className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 scale-102 transition-transform duration-300 neon-glow active:scale-95">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                Novo Pedido
            </button>
<div className="pt-4 space-y-1">
<div className="text-[#A0A0A0] py-2 flex items-center gap-4 hover:text-[#C8FF00] transition-colors duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span className="text-sm">Suporte</span>
</div>
<div className="text-error/70 py-2 flex items-center gap-4 hover:text-error transition-colors duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="text-sm font-semibold">Sair</span>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="md:ml-64 pt-24 px-6 pb-12 min-h-screen">
<div className="max-w-6xl mx-auto">
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Agendamento Online</h1>
<p className="text-on-surface-variant text-lg">Configure como seus clientes encontram e agendam seus serviços na web.</p>
</div>
<div className="flex items-center gap-3 bg-surface-container rounded-full px-5 py-2 glass-border">
<span className="text-sm font-semibold text-primary-container">Status do Link:</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
<span className="text-sm font-medium">Online</span>
</div>
</div>
</header>
{/* Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Link & Share Card */}
<section className="md:col-span-8 bg-surface-container rounded-xl p-8 glass-border relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-container" data-icon="link">link</span>
<h3 className="text-xl font-bold">Link de Agendamento</h3>
</div>
<p className="text-on-surface-variant mb-6 leading-relaxed max-w-md">
                            Compartilhe este link em sua bio do Instagram, WhatsApp e redes sociais para que seus clientes agendem sem precisar de você.
                        </p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-xl border border-outline-variant/20">
<input className="bg-transparent border-none flex-grow text-primary-container font-mono text-sm px-4 focus:ring-0" readOnly="" type="text" value="barberpro.com.br/elite-barber"/>
<button className="bg-primary-container text-on-primary px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all neon-glow">
<span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                                Copiar Link
                            </button>
</div>
<div className="flex gap-4">
<button className="flex-1 bg-surface-container-high py-3 rounded-lg text-sm font-semibold hover:bg-surface-bright transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="share">share</span>
                                Enviar por WhatsApp
                            </button>
<button className="flex-1 bg-surface-container-high py-3 rounded-lg text-sm font-semibold hover:bg-surface-bright transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="open_in_new">open_in_new</span>
                                Abrir Visualização
                            </button>
</div>
</div>
</section>
{/* QR Code Card */}
<section className="md:col-span-4 bg-surface-container rounded-xl p-8 glass-border flex flex-col items-center justify-center text-center">
<h3 className="text-lg font-bold mb-6">QR Code de Balcão</h3>
<div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(200,255,0,0.15)] group cursor-pointer transition-transform duration-500 hover:scale-105">
<div className="w-40 h-40 bg-surface flex items-center justify-center rounded-lg relative">
<img className="w-32 h-32 opacity-90 group-hover:opacity-100 transition-opacity" data-alt="clean black and white qr code centered on a minimal white background with slight shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChZ_Y9EBRvyjB8n-mZ4tRBSO2toVqnrMtHc4Wxn3m1D8YPfBGQW1jmJogO3PgAE8Gpd7CDHgchHqBwuemRyuzUyynfHVgQb3MMzSNpBZoJ6ozD8swYDxl538evhsfYsWIiyT1zjOsOSeM9GPPOGmrVnfvXg-jmOFhtfDPdYmyHeLzfDSm7ffXG4fvGzW9gCc480hfT9ePUvgk7goNzsBsQSsfwXbfA7Heh7O-avJbGH7kyasec5m7XPrXvPnxkTJDNyw8Lv6yQvoV_"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-surface/40 backdrop-blur-[2px] transition-opacity rounded-lg">
<span className="material-symbols-outlined text-primary-container text-4xl" data-icon="fullscreen">fullscreen</span>
</div>
</div>
</div>
<p className="text-xs text-on-surface-variant px-4 mb-6">Imprima e coloque no balcão para facilitar o próximo agendamento do seu cliente.</p>
<button className="w-full border border-primary-container/30 text-primary-container py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-container/10 transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="download">download</span>
                        Baixar Kit para Impressão
                    </button>
</section>
{/* Visibility Controls */}
<section className="md:col-span-6 bg-surface-container rounded-xl p-8 glass-border">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="visibility">visibility</span>
<h3 className="text-lg font-bold">Visibilidade da Agenda</h3>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-14 h-7 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary"></div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
<div className="mt-1">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container" data-icon="calendar_month">calendar_month</span>
</div>
<div>
<h4 className="font-bold text-sm mb-1">Período de Antecedência</h4>
<p className="text-xs text-on-surface-variant">Clientes podem agendar com no máximo 30 dias de antecedência.</p>
</div>
<span className="material-symbols-outlined ml-auto text-on-surface-variant/30 text-sm" data-icon="chevron_right">chevron_right</span>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
<div className="mt-1">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container" data-icon="timer">timer</span>
</div>
<div>
<h4 className="font-bold text-sm mb-1">Tempo Mínimo de Aviso</h4>
<p className="text-xs text-on-surface-variant">Bloquear agendamentos feitos com menos de 2 horas de antecedência.</p>
</div>
<span className="material-symbols-outlined ml-auto text-on-surface-variant/30 text-sm" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
{/* Notification Settings */}
<section className="md:col-span-6 bg-surface-container rounded-xl p-8 glass-border relative overflow-hidden">
<div className="absolute -bottom-10 -right-10 opacity-5">
<span className="material-symbols-outlined text-[160px]" data-icon="chat">chat</span>
</div>
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container" data-icon="notifications_active">notifications_active</span>
<h3 className="text-lg font-bold">Notificações por WhatsApp</h3>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="send">send</span>
</div>
<div>
<span className="block font-bold text-sm">Confirmação de Agendamento</span>
<span className="block text-[10px] text-on-surface-variant">Envia uma mensagem assim que o cliente agendar.</span>
</div>
</div>
<input checked="" className="rounded border-outline-variant bg-transparent text-primary-container focus:ring-primary-container" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="alarm">alarm</span>
</div>
<div>
<span className="block font-bold text-sm">Lembrete (2h antes)</span>
<span className="block text-[10px] text-on-surface-variant">Reduz drasticamente o número de faltas.</span>
</div>
</div>
<input checked="" className="rounded border-outline-variant bg-transparent text-primary-container focus:ring-primary-container" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary-container/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="star">star</span>
</div>
<div>
<span className="block font-bold text-sm">Solicitação de Feedback</span>
<span className="block text-[10px] text-on-surface-variant">Envia o link de avaliação 1h após o serviço.</span>
</div>
</div>
<input className="rounded border-outline-variant bg-transparent text-primary-container focus:ring-primary-container" type="checkbox"/>
</label>
</div>
</section>
{/* Premium CTA/Card */}
<section className="md:col-span-12 mt-4">
<div className="bg-gradient-to-r from-surface-container-high to-surface-container rounded-2xl p-8 glass-border flex items-center gap-8 relative overflow-hidden">
<div className="hidden lg:block w-32 h-32 rounded-2xl overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="professional barber tools like scissors and comb neatly arranged on a dark surface with dramatic warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMINaRpD3R1htKXSRA3vQlLo95o7QyoQ5jaywsCT9SyqG18i9u9Fq2mDz3VB0rh3oIN-zBdYwgSz-BZ8-hg_-Ioqos1skZy20gpnJ9qMv8n-vD6IRF3se_yfkNZejdOdWrm6_dhnL_q_FmAz8KD8p0tzOeYeZ6SRk4ExZlnoPUU5xyjdOQWe625K68FfMEcYl0V3CVHoftIMizNMbGZE6oAiiaOv560sEnUEzX_LqqSF_lPx9yMBvsmQXu_OMfKIDnHKs901OZTtn"/>
</div>
<div className="flex-grow">
<h3 className="text-2xl font-black mb-2 italic">Customize sua experiência Premium</h3>
<p className="text-on-surface-variant text-sm max-w-2xl mb-6">Deseja alterar as cores do seu link, adicionar sua logo ou integrar com o Google Maps? Faça o upgrade para o plano BarberPro Elite e domine o mercado local.</p>
<div className="flex gap-4">
<button className="bg-primary-container text-on-primary px-8 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all">Ver Planos Elite</button>
<button className="text-on-surface-variant text-sm font-semibold hover:text-on-surface transition-colors">Talvez mais tarde</button>
</div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none opacity-20">
<div className="w-full h-full bg-gradient-to-l from-primary-container/20 to-transparent"></div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* Contextual FAB (Suppressed on settings, but keeping for layout reference if it were home) */}
{/* <button className="fixed bottom-8 right-8 bg-primary-container text-on-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center neon-glow">
        <span className="material-symbols-outlined" data-icon="add">add</span>
    </button> */}

    </div>
  );
};

export default ConfiguraODeLinkAdmin;
