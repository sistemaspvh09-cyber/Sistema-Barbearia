
import React from 'react';

const CentralDeAjudaTutoriais: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar */}
<header className="fixed top-0 w-full z-50 glass-header border-b border-primary/15 h-16 flex justify-between items-center px-6">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-primary-container italic tracking-tight font-headline">BarberPro</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-on-surface-variant hover:text-primary-container transition-all duration-300 font-medium text-sm" href="#">Dashboard</a>
<a className="text-on-surface-variant hover:text-primary-container transition-all duration-300 font-medium text-sm" href="#">Agenda</a>
<a className="text-on-surface-variant hover:text-primary-container transition-all duration-300 font-medium text-sm" href="#">Financeiro</a>
<a className="text-primary-container border-b-2 border-primary-container pb-1 font-medium text-sm" href="#">Suporte</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-all rounded-full">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-all rounded-full">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
<img alt="User profile avatar" data-alt="Close-up portrait of a professional male barber with styled hair and beard in a modern setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoj_gl7YAD1xxuo4GAMDRzyrsnh51bPBEawDCbkK0WvaR_crIuHTOL3wwPcGoJ40q6lWAnlvL5W85vU3GwrPcWHCdj-eQyWaqn2sOPE83W_KZRcMDitx3P9yoW77vPVCJ5w3FmYqMjgZbXA1NddiQvkHp9h6z1t-Q-Gt6mBW81hqOAVGIV-wOKwhODDdGrQ1DrmGiewLvrwRXrgczfeb0JIKZSTy2qO38--TUax6IOgmbW4DbU6wR2uVZDtVQ52xhETR9HQctDdbuD"/>
</div>
</div>
</header>
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-full w-64 bg-surface border-r border-primary/15 py-6 flex flex-col z-40 mt-16">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 py-4">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary font-bold" data-icon="cut">cut</span>
</div>
<div>
<h2 className="text-lg font-extrabold text-primary-container leading-none">BarberPro</h2>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Premium SaaS</p>
</div>
</div>
<button className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 neon-glow transition-all duration-300 scale-100 active:scale-95">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                Novo Agendamento
            </button>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                Agendamentos
            </a>
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                Clientes
            </a>
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Financeiro
            </a>
<a className="flex items-center gap-3 bg-primary-container/10 text-primary-container rounded-lg px-4 py-3 border-r-4 border-primary-container font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                Suporte
            </a>
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Configurações
            </a>
</nav>
<div className="px-3 mt-auto space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors px-4 py-3 rounded-lg font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Sair
            </a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 pt-24 px-8 pb-12">
{/* Hero Section / Search */}
<section className="max-w-5xl mx-auto mb-16 text-center">
<h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-on-surface">Como podemos <span className="text-primary-container">ajudar</span> hoje?</h1>
<p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">Explore nossa base de conhecimento ou fale com um especialista para impulsionar seu negócio.</p>
<div className="relative max-w-3xl mx-auto group">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary-container transition-colors" data-icon="search">search</span>
</div>
<input className="w-full bg-surface-container border-none rounded-2xl py-6 pl-14 pr-6 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary-container/30 transition-all text-lg shadow-2xl" placeholder="Busque por 'Como configurar pagamentos' ou 'Novo funcionário'..." type="text"/>
<div className="absolute inset-y-0 right-4 flex items-center">
<kbd className="hidden md:inline-flex items-center px-2 py-1 font-sans text-xs font-semibold text-on-surface-variant bg-surface border border-outline-variant rounded-md">CMD + K</kbd>
</div>
</div>
</section>
{/* Category Grid (Bento Style) */}
<section className="max-w-7xl mx-auto mb-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* Configurações */}
<div className="md:col-span-2 group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:translate-y-[-4px] ghost-border">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-primary-container/20 text-8xl group-hover:text-primary-container/40 transition-all" data-icon="settings">settings</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-container" data-icon="settings">settings</span>
</div>
<h3 className="text-2xl font-bold mb-2">Configurações</h3>
<p className="text-on-surface-variant text-sm mb-6 max-w-[240px]">Gerencie sua conta, equipe, horários e preferências da barbearia.</p>
<a className="inline-flex items-center gap-2 text-primary-container font-bold group-hover:gap-4 transition-all" href="#">
                            Ver Documentação
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
{/* Financeiro */}
<div className="group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:translate-y-[-4px] ghost-border">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-container" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<h3 className="text-xl font-bold mb-2">Financeiro</h3>
<p className="text-on-surface-variant text-sm mb-6">Relatórios de vendas, fluxo de caixa e comissões.</p>
<a className="text-primary-container font-bold text-sm inline-flex items-center gap-1" href="#">
                        Explorar
                        <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* InfinitePay Integration */}
<div className="group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:translate-y-[-4px] ghost-border">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-container" data-icon="contactless">contactless</span>
</div>
<h3 className="text-xl font-bold mb-2">InfinitePay</h3>
<p className="text-on-surface-variant text-sm mb-6">Saiba como integrar e gerenciar seus recebimentos.</p>
<a className="text-primary-container font-bold text-sm inline-flex items-center gap-1" href="#">
                        Ler guias
                        <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Agendamentos */}
<div className="group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:translate-y-[-4px] ghost-border">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-container" data-icon="event_note">event_note</span>
</div>
<h3 className="text-xl font-bold mb-2">Agenda</h3>
<p className="text-on-surface-variant text-sm mb-6">Configuração de serviços e horários automáticos.</p>
<a className="text-primary-container font-bold text-sm inline-flex items-center gap-1" href="#">
                        Saiba mais
                        <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Suporte Direto */}
<div className="md:col-span-3 group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:translate-y-[-4px] ghost-border flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-2xl font-bold mb-4">Ainda com dúvidas?</h3>
<p className="text-on-surface-variant mb-6">Nossa equipe de especialistas está disponível 24/7 para ajudar você a escalar sua operação.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary-container text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 neon-glow">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                                Iniciar Chat ao Vivo
                            </button>
<button className="bg-surface-bright text-on-surface font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                                Enviar Ticket
                            </button>
</div>
</div>
<div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
<img alt="Support workspace" className="w-full h-full object-cover" data-alt="Modern workspace with tech gadgets and high-end lighting representing 24/7 digital support environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4H9nYZ_MR-wFJMMOQnOg7qtp2S3Hx3nI115_HAR_mFQfDZdG_srv7NTFlcHW4GCADh3DEwJMjhXx9YhXHamt3srYhqB0Y8rKxE_l9O_vffg7-Ln3gqjc2GYjZKx1V-snYu0RWkmOi5o9KwVJ1h1dPhSAaiqooVrIzB5WIhobs0BVPKWDc-QmSqLnjuiwUG4y1srDkgloCUNvty7MI87HrJXXifOWxHFpD9FRSfYlltBxU0QtCVCfpAiEYj5TRyZCFim_AEme5fMA"/>
</div>
</div>
</div>
</section>
{/* Popular Articles & Video Tutorials */}
<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
{/* Popular Articles */}
<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-extrabold flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="article">article</span>
                        Artigos Populares
                    </h2>
<a className="text-on-surface-variant hover:text-primary-container text-sm font-medium transition-colors" href="#">Ver todos os artigos</a>
</div>
<div className="space-y-4">
<a className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="text-on-surface-variant font-mono text-xs">01</div>
<h4 className="font-semibold group-hover:text-primary-container transition-colors">Como integrar minha máquina InfinitePay?</h4>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="text-on-surface-variant font-mono text-xs">02</div>
<h4 className="font-semibold group-hover:text-primary-container transition-colors">Configurando comissões diferenciadas para barbeiros</h4>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="text-on-surface-variant font-mono text-xs">03</div>
<h4 className="font-semibold group-hover:text-primary-container transition-colors">Automatizando lembretes de agendamento via WhatsApp</h4>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="text-on-surface-variant font-mono text-xs">04</div>
<h4 className="font-semibold group-hover:text-primary-container transition-colors">Exportando relatórios mensais para contabilidade</h4>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
</a>
</div>
</div>
{/* Video Tutorials */}
<div>
<h2 className="text-2xl font-extrabold flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container" data-icon="play_circle">play_circle</span>
                    Tutoriais em Vídeo
                </h2>
<div className="space-y-6">
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-2xl overflow-hidden mb-3 border border-outline-variant/30">
<img alt="Tutorial Video" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A cinematic video thumbnail showing a barber performing a haircut with professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0m2hrZ9XhRnbAUoq0NSFke5hTjdl2BaKyH3NAjVKBlAcopE_7ZjE6zOeRXXfUqKVtQl6IQckuDetFYDm8VksfpE5X2OiF7FLMRX0-zsMtDWrr9ax9KO9rqiD-utBeImmRMqutI7ue5b1TdjpdgDWITuQqCqopdgbnjnSNr4dUC9bQdBL9y3PVLu5z0S67C2t0Gum79t9bfWCXKivZY9M2Tz1nLaSC9rY26a7tpv9LvTCixV51tt4wExapB2IWGnpchkKqIFt3nRyS"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
<div className="w-12 h-12 rounded-full bg-primary-container/90 text-on-primary flex items-center justify-center scale-100 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-[10px] font-bold">12:45</div>
</div>
<h4 className="font-bold text-sm mb-1 group-hover:text-primary-container transition-colors">Masterclass: Gestão Completa no BarberPro</h4>
<p className="text-xs text-on-surface-variant">Publicado em 15 Jan, 2024</p>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-2xl overflow-hidden mb-3 border border-outline-variant/30">
<img alt="Tutorial Video" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Stylized close-up of a digital payment terminal with neon light reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG_i6sf3HYQtRce9Xns8eLz6bnI5E6P6tKnq3mVVh1Ufm9QYQ8ErfAnpHHOJCHIGvG-VL6M2on1XLfFNQeROZc9cdc7zyH0RNqtc8YsLSSXua9ZTJlFHpnv4JOEOm4GAlEhveFeqsLMkwVvj5OWWHX8j6R6QrddPYboVR_-nqJbCObjA7uGXJv_ynPbzZseE4xWLXRk57kKH5i3zI1nF0dC7mZdvVnA98d0BzwF8YA4pgjcwdP_2eRANM61tsKbzbwh8L7t-MemyKP"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
<div className="w-12 h-12 rounded-full bg-primary-container/90 text-on-primary flex items-center justify-center scale-100 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-[10px] font-bold">05:20</div>
</div>
<h4 className="font-bold text-sm mb-1 group-hover:text-primary-container transition-colors">Configurando pagamentos InfinitePay</h4>
<p className="text-xs text-on-surface-variant">Publicado em 02 Fev, 2024</p>
</div>
</div>
</div>
</section>
</main>
{/* Floating Quick Action (Help Focused) */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-14 h-14 bg-primary-container text-on-primary rounded-full shadow-[0_0_30px_rgba(200,255,0,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined font-bold text-3xl" data-icon="support_agent">support_agent</span>
</button>
</div>

    </div>
  );
};

export default CentralDeAjudaTutoriais;
