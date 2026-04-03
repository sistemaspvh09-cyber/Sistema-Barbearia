
import React from 'react';

const PGinaDePreOsEPlanos: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Shared Component) */}
<aside className="h-screen w-64 fixed left-0 top-0 flex flex-col border-r border-[#ffffff0a] bg-[#0D0D0D] dark:bg-[#0D0D0D] shadow-[20px_0_40px_rgba(0,0,0,0.4)] hidden md:flex z-50">
<div className="p-6 space-y-8 flex flex-col h-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-2xl" data-weight="fill">content_cut</span>
</div>
<div>
<h1 className="text-2xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Gestão de Elite</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-2">
<div className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Agendamentos</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Barbeiros</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="equalizer">equalizer</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Relatórios</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00]/10 text-[#C8FF00] rounded-xl font-bold border-l-4 border-[#C8FF00] transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Configurações</span>
</div>
</nav>
<div className="mt-auto border-t border-[#ffffff0a] pt-6">
<div className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-['Plus_Jakarta_Sans'] antialiased tracking-tight">Sair</span>
</div>
</div>
</div>
</aside>
{/* TopNavBar (Shared Component) */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl flex items-center justify-between px-8 border-b border-[#ffffff15]">
<div className="flex items-center gap-6">
<h2 className="text-xl font-black text-white font-['Plus_Jakarta_Sans']">BarberPro Admin</h2>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary transition-all" placeholder="Buscar configurações..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 mr-4">
<span className="text-[#A0A0A0] text-sm hover:text-white transition-colors cursor-pointer">Ver Planos</span>
<div className="h-4 w-[1px] bg-outline-variant/30"></div>
<div className="hover:bg-[#C8FF00]/5 rounded-full p-2 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</div>
<div className="hover:bg-[#C8FF00]/5 rounded-full p-2 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="help_outline">help_outline</span>
</div>
</div>
<div className="flex items-center gap-3 pl-4 border-l border-[#ffffff15]">
<div className="text-right">
<p className="text-sm font-bold text-white leading-tight">Admin Master</p>
<p className="text-[10px] text-primary uppercase font-black">Plano Pro</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center glass-border overflow-hidden">
<img alt="Avatar do Administrador" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional modern man with a neat beard in a stylish setting with soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR1v82_4PM8Co0ak2Df8aP85PG6ywSDgScyq-OC1wRXcfAKDxqv_sX88imo00aEbqCpl6KG3rRnu0vi5TuC2DMGozrCbK9vyxnkorFiEBq7YbyJD3mfGm49ObKvSv77rd3NSu8pSU3DKBL44Me3QfL6JE9n-cXKhR4-tgn49V-aE2ijP9DmwhcvHxR8NWdn0pwLAbi4DzWEH1gGg5qC59kbnc1mxrEBJN597xzgrpkU5kh0tJQp5D84_--3zDHh4j-YEV78BicsV6L"/>
</div>
</div>
</div>
</header>
{/* Main Content */}
<main className="ml-64 pt-20 min-h-screen bg-[#0d0d0d]">
<div className="max-w-7xl mx-auto px-8 py-12">
{/* Header Section */}
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-primary-container font-black tracking-[0.2em] uppercase text-xs mb-4 block">Evolução de Gestão</span>
<h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-6">
                    Escolha o plano ideal para sua <span className="text-primary-container italic">evolução</span>
</h1>
<p className="text-on-surface-variant text-lg">
                    Seja você um barbeiro solo ou o dono de uma rede elite, temos a tecnologia de precisão para escalar sua operação.
                </p>
</div>
{/* Pricing Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
{/* Background Decoration */}
<div className="absolute inset-0 bg-primary-container/5 blur-[120px] rounded-full -z-10"></div>
{/* Starter Plan */}
<div className="bg-surface-container-low p-8 rounded-[2rem] glass-border flex flex-col hover:scale-[1.02] transition-transform duration-500">
<div className="mb-8">
<span className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Iniciante</span>
<h3 className="text-3xl font-black text-white mt-2">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-black text-white">R$ 89</span>
<span className="text-on-surface-variant">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>1 Barbeiro Ativo</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>InfinitePay Integrado</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Google Calendar Sync</span>
</li>
<li className="flex items-center gap-3 text-sm text-on-surface-variant/50 line-through">
<span className="material-symbols-outlined">cancel</span>
<span>Webhooks &amp; API</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl border border-outline-variant text-white font-bold hover:bg-surface-container-high transition-colors active:scale-95">
                        Começar Agora
                    </button>
</div>
{/* Pro Plan (Highlighted) */}
<div className="bg-surface-container p-8 rounded-[2rem] glass-border border-primary-container/30 flex flex-col relative scale-105 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] hover:scale-[1.07] transition-transform duration-500">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(200,255,0,0.3)]">
                        Mais Popular
                    </div>
<div className="mb-8">
<span className="text-primary-container text-sm font-bold uppercase tracking-widest">Crescimento</span>
<h3 className="text-3xl font-black text-white mt-2">Pro</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-5xl font-black text-white">R$ 199</span>
<span className="text-on-surface-variant">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Até 5 Barbeiros</span>
</li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>InfinitePay Premium</span>
</li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Google Calendar Sync</span>
</li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Relatórios Avançados</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-primary-container text-on-primary font-black neon-glow transition-all active:scale-95">
                        Assinar Plano Pro
                    </button>
</div>
{/* Elite Plan */}
<div className="bg-surface-container-low p-8 rounded-[2rem] glass-border flex flex-col hover:scale-[1.02] transition-transform duration-500">
<div className="mb-8">
<span className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Mestre</span>
<h3 className="text-3xl font-black text-white mt-2">Elite</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-black text-white">R$ 349</span>
<span className="text-on-surface-variant">/mês</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Até 10 Barbeiros</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>InfinitePay (Taxas Zero)</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Webhooks &amp; API Integrada</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span>Suporte VIP 24/7</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl border border-outline-variant text-white font-bold hover:bg-surface-container-high transition-colors active:scale-95">
                        Escolher Elite
                    </button>
</div>
</div>
{/* Detailed Comparison (Bento Grid Style) */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* Feature Card 1 */}
<div className="bg-surface-container-low p-6 rounded-2xl glass-border border-l-2 border-primary-container/20">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">payments</span>
<h4 className="text-white font-bold mb-2">InfinitePay</h4>
<p className="text-xs text-on-surface-variant">Receba pagamentos direto no agendamento com taxas reduzidas e link de checkout automático.</p>
</div>
{/* Feature Card 2 */}
<div className="bg-surface-container-low p-6 rounded-2xl glass-border border-l-2 border-primary-container/20">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">sync_alt</span>
<h4 className="text-white font-bold mb-2">Webhooks</h4>
<p className="text-xs text-on-surface-variant">Integre o BarberPro com seu CRM ou ferramentas de marketing através de gatilhos em tempo real.</p>
</div>
{/* Feature Card 3 */}
<div className="bg-surface-container-low p-6 rounded-2xl glass-border border-l-2 border-primary-container/20">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">event_available</span>
<h4 className="text-white font-bold mb-2">Google Calendar</h4>
<p className="text-xs text-on-surface-variant">Sincronização bidirecional. O que você marca no app aparece no Google e vice-versa instantaneamente.</p>
</div>
{/* Feature Card 4 */}
<div className="bg-surface-container-low p-6 rounded-2xl glass-border border-l-2 border-primary-container/20">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">security</span>
<h4 className="text-white font-bold mb-2">Segurança Elite</h4>
<p className="text-xs text-on-surface-variant">Backup diário de todos os dados de clientes e financeiro com criptografia de ponta a ponta.</p>
</div>
</div>
{/* Comparison Table for Desktop */}
<div className="mt-20 overflow-hidden rounded-[2rem] bg-surface-container-low glass-border p-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/50">
<th className="p-8 text-on-surface-variant font-bold text-xs uppercase tracking-widest">Funcionalidades</th>
<th className="p-8 text-center text-white font-bold">Starter</th>
<th className="p-8 text-center text-primary-container font-black">Pro</th>
<th className="p-8 text-center text-white font-bold">Elite</th>
</tr>
</thead>
<tbody className="divide-y divide-[#ffffff0a]">
<tr>
<td className="p-8 text-white font-medium">Limite de Barbeiros</td>
<td className="p-8 text-center text-on-surface-variant">1</td>
<td className="p-8 text-center text-white font-bold">Até 5</td>
<td className="p-8 text-center text-white font-bold">Até 10</td>
</tr>
<tr>
<td className="p-8 text-white font-medium">Taxa InfinitePay</td>
<td className="p-8 text-center text-on-surface-variant">Padrão</td>
<td className="p-8 text-center text-white font-bold">Reduzida</td>
<td className="p-8 text-center text-primary-container font-black">Mínima Garantida</td>
</tr>
<tr>
<td className="p-8 text-white font-medium">Relatórios Financeiros</td>
<td className="p-8 text-center text-on-surface-variant">Básicos</td>
<td className="p-8 text-center text-white font-bold">Completos</td>
<td className="p-8 text-center text-white font-bold">Customizados</td>
</tr>
<tr>
<td className="p-8 text-white font-medium">Webhooks &amp; API</td>
<td className="p-8 text-center text-on-surface-variant">
<span className="material-symbols-outlined text-error/30">remove</span>
</td>
<td className="p-8 text-center text-on-surface-variant">
<span className="material-symbols-outlined text-error/30">remove</span>
</td>
<td className="p-8 text-center">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</td>
</tr>
<tr>
<td className="p-8 text-white font-medium">Sincronização Agenda</td>
<td className="p-8 text-center">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</td>
<td className="p-8 text-center">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</td>
<td className="p-8 text-center">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Footer Section */}
<div className="mt-20 flex flex-col items-center justify-center gap-6">
<div className="flex items-center gap-4 px-6 py-3 bg-surface-container rounded-full glass-border">
<span className="text-on-surface-variant text-sm">Precisa de um plano personalizado?</span>
<a className="text-primary-container font-bold text-sm hover:underline" href="#">Falar com Consultor</a>
</div>
<div className="flex gap-8 opacity-40 grayscale contrast-125">
<span className="font-black text-2xl tracking-tighter">InfinitePay</span>
<span className="font-black text-2xl tracking-tighter">Google Cloud</span>
<span className="font-black text-2xl tracking-tighter">Stripe</span>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default PGinaDePreOsEPlanos;
