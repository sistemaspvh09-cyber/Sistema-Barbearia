
import React from 'react';

const GestODeEquipeAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#C8FF00]/15 bg-[#1A1919]/70 backdrop-blur-xl flex flex-col py-8 z-50 shadow-[40px_0_80px_rgba(0,0,0,0.5)]">
<div className="px-6 mb-10">
<h1 className="text-2xl font-black italic text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mt-1">Premium Management</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-medium">Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">group</span>
<span className="font-medium">Clientes</span>
</a>
{/* Active Tab: Equipe */}
<a className="flex items-center gap-3 px-4 py-3 text-[#C8FF00] bg-[#C8FF00]/10 border-r-4 border-[#C8FF00] font-bold cursor-pointer active:scale-95 duration-300" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium">Equipe</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Configurações</span>
</a>
</nav>
<div className="px-6 mt-auto">
<div className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl ghost-border-15">
<img className="w-10 h-10 rounded-full" data-alt="close-up portrait of a professional male salon manager with styled beard and modern glasses in a high-end environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHNxTJC1lX98d9LeojtdKskbcbxlc1Wv_H3JR8-f20zcPXwIjABekN58MSEsxs72QRYAHZPiu0xpzKCvm6233wtCmtM-bAtHRESoCkMIGO0p11P1eCt5uiMyaDWV2Fou765gE6G0x9jgp5-pm2ZbOss02Lxv8CBq_CnEfE1p0qHSrGirj6MgmZ-KP_CdZi9bXrJgndUrBqNkmGnNLawqGewBYLsx2Oyw2nIEWgwnkraN3tEnR-aSHzVCUBAoYbRJT49TQlABiLH1sL"/>
<div className="overflow-hidden">
<p className="text-sm font-bold truncate">Admin Master</p>
<p className="text-[10px] text-on-surface-variant truncate">Premium Plan</p>
</div>
</div>
</div>
</aside>
{/* Main Content Shell */}
<main className="ml-64 min-h-screen">
{/* TopAppBar */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 border-b border-white/5 bg-[#0D0D0D]/80 backdrop-blur-md flex justify-between items-center px-8 z-40 transition-all ease-in-out">
<h2 className="text-xl font-bold tracking-tight text-on-surface">Gestão de Equipe</h2>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary-fixed-dim w-64 transition-all" placeholder="Buscar barbeiro..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-[#C8FF00] transition-colors">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-[#C8FF00] transition-colors">dark_mode</button>
<div className="h-8 w-8 rounded-full bg-primary-container p-0.5">
<img className="w-full h-full rounded-full object-cover" data-alt="professional portrait of a user with a friendly expression and neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY1KiBZLNatg5gpo5c2y8ru8xv58yWa40dAZgFlNJc-wCbkd_qOWBazjAD2Sb4Ko2x3LKAhmrGp-IRsRQgfX_GhK7_MVdZtjromCa762e1r1pG4epXYbyuteOhPCgYPD_lRtYUsMahWSLSdW0eWHU9y7CrF5VU80wTp3nYsNEy3aS6I3wQjdO9kziCx0-YeeE0TVD6o5jstj3xVTBxpvXiXTuNFaa1cOBHQe6bgAyV77rSbmAlYrhUdlxL97iL51Bres-_8uines68"/>
</div>
</div>
</div>
</header>
{/* Canvas Area */}
<div className="pt-28 px-10 pb-12">
{/* Header Action Row */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="space-y-4 max-w-md">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-black uppercase tracking-widest rounded-full">Capacidade da Unidade</span>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-3xl font-extrabold tracking-tighter">3 de 10 <span className="text-on-surface-variant text-lg font-medium">Barbeiros</span></span>
<span className="text-primary-container font-bold text-sm">30%</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-fixed-dim rounded-full shadow-[0_0_10px_rgba(200,255,0,0.5)]" style={{ width: '30%' }}></div>
</div>
</div>
</div>
<button className="flex items-center gap-2 px-8 py-4 bg-[#C8FF00] text-[#4f6700] font-black text-sm rounded-xl neon-glow transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase tracking-tight">
<span className="material-symbols-outlined">person_add</span>
                    Convidar Novo Barbeiro
                </button>
</div>
{/* Team Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Barber Card: Thiago */}
<div className="group relative bg-surface-container rounded-xl overflow-hidden ghost-border-15 transition-all duration-300 hover:translate-y-[-4px]">
<div className="absolute top-4 right-4 z-10">
<span className="flex items-center gap-1.5 px-3 py-1 bg-primary-container/20 text-primary-container rounded-full text-[10px] font-bold border border-primary-container/30">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                            Ativo
                        </span>
</div>
<div className="p-6">
<div className="flex items-start gap-5 mb-6">
<div className="relative">
<div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="professional male barber with sharp beard and modern hairstyle posing in a studio with dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEf6692H3FIAWdqMjMCd7jFDlpRqxb8BcF5-sEI9TSqySw_a51MkCo3G0NFfnX7kwcmDNRfyJSFxBW09mJxib4EpD4VDobaLVjBHRo6WuKuuAUCUdLdEicL6xW5Dj_Ezk0bbc6hfoW14hGGIvpjrbZ1na28E_AcenrXcqkExwxRPHPKq_PNIG5LaBno-5SpooMgTWMeDxfAbXJZ7qnBP9F5YJeUmXAkG2CtA0rtQ8XroNQHhRcrJPEJpxZwaJkhUxGNSJxdnOqtR8x"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-background p-1 rounded-lg ghost-border-15">
<span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
</div>
<div>
<h3 className="text-xl font-extrabold tracking-tight">Thiago Silva</h3>
<p className="text-on-surface-variant text-sm font-medium">Especialista em Degradê</p>
<div className="flex gap-1 mt-2">
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Comissão</p>
<p className="text-lg font-black text-primary-container">40%</p>
</div>
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Faturamento</p>
<p className="text-lg font-black">R$ 8.420</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-3 bg-surface-bright text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">Detalhes</button>
<button className="w-12 h-12 flex items-center justify-center bg-surface-bright rounded-lg hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</div>
</div>
<div className="h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
</div>
{/* Barber Card: Marcus */}
<div className="group relative bg-surface-container rounded-xl overflow-hidden ghost-border-15 transition-all duration-300 hover:translate-y-[-4px]">
<div className="absolute top-4 right-4 z-10">
<span className="flex items-center gap-1.5 px-3 py-1 bg-primary-container/20 text-primary-container rounded-full text-[10px] font-bold border border-primary-container/30">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                            Ativo
                        </span>
</div>
<div className="p-6">
<div className="flex items-start gap-5 mb-6">
<div className="relative">
<div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="professional barber with modern style and tattoos on neck posing in a professional studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW1XYv6I6nLfkpSnhjnN_k1h8Ed-fxD0UhhTOrH4jBy56HfQZoIZtEQqhT8k0mR3mfGgECXqudWYxiMVOaCimjX_-2iPPzhGtEb_92i2wGRukIhQrbyO1ZabpqVgTdHYtjNpRWcCG6d5vqhBGmslnuWrKl3qdbsFsDKfXnbTi3llyCBwj74LfZCjgmg53d6TNZCQ3pE7J4Dg8XEM9k_PM7Z9lmXa1B4BTaKuspkUUhDF46_QjTci4BSFOmn_i8UZUSsFAofFPHnhxx"/>
</div>
</div>
<div>
<h3 className="text-xl font-extrabold tracking-tight">Marcus Viana</h3>
<p className="text-on-surface-variant text-sm font-medium">Barboterapia &amp; Visagismo</p>
<div className="flex gap-1 mt-2">
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">star</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Comissão</p>
<p className="text-lg font-black text-primary-container">35%</p>
</div>
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Faturamento</p>
<p className="text-lg font-black">R$ 6.150</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-3 bg-surface-bright text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">Detalhes</button>
<button className="w-12 h-12 flex items-center justify-center bg-surface-bright rounded-lg hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</div>
</div>
<div className="h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
</div>
{/* Barber Card: Felipe */}
<div className="group relative bg-surface-container rounded-xl overflow-hidden ghost-border-15 transition-all duration-300 hover:translate-y-[-4px]">
<div className="absolute top-4 right-4 z-10">
<span className="flex items-center gap-1.5 px-3 py-1 bg-primary-container/20 text-primary-container rounded-full text-[10px] font-bold border border-primary-container/30">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                            Ativo
                        </span>
</div>
<div className="p-6">
<div className="flex items-start gap-5 mb-6">
<div className="relative">
<div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/5">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="young male barber with short hair and clean look wearing a professional black apron in a high-end salon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbt7oJ7kIoEYayONAv3VZmngvZKcy8eqpTo5EVYR7ka3W5dzxN8hyArOdqnYeKDUuInZMT8cLlU1PPaJxZH0TH68EYzgDTCUUZ2LcjP9_Hz3Ta0l4b2s45BWhhzgTZFsGTDBC5dL8rHto6XzwWfBwkqsc4UC45y3wmY-26UPSKWnPGpTSobYIU5XDDiWQYf1bPaBcahmkItPNfsiYMfDXrGOzKca-1ukbAo--05kiMWUOU36SstNvGOQz0m6Ht2n6NvskjJqoc3Lhp"/>
</div>
</div>
<div>
<h3 className="text-xl font-extrabold tracking-tight">Felipe Costa</h3>
<p className="text-on-surface-variant text-sm font-medium">Corte Social &amp; Clássico</p>
<div className="flex gap-1 mt-2">
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">star</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">star</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Comissão</p>
<p className="text-lg font-black text-primary-container">30%</p>
</div>
<div className="bg-surface-container-low p-4 rounded-xl ghost-border-15">
<p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Faturamento</p>
<p className="text-lg font-black">R$ 4.890</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-3 bg-surface-bright text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">Detalhes</button>
<button className="w-12 h-12 flex items-center justify-center bg-surface-bright rounded-lg hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</div>
</div>
<div className="h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
</div>
{/* Empty Slot / Add New Action */}
<div className="group border-2 border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center p-12 hover:border-primary-container/30 transition-all cursor-pointer bg-white/[0.02]">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">add</span>
</div>
<p className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">Vaga Disponível</p>
<p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest mt-1">Slot 4 de 10</p>
</div>
</div>
{/* Footer Stats */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="p-6 bg-surface-container rounded-2xl ghost-border-15 border-l-4 border-[#C8FF00]">
<p className="text-xs font-bold text-on-surface-variant mb-2">Faturamento Total Equipe</p>
<p className="text-2xl font-black">R$ 19.460,00</p>
</div>
<div className="p-6 bg-surface-container rounded-2xl ghost-border-15">
<p className="text-xs font-bold text-on-surface-variant mb-2">Ticket Médio</p>
<p className="text-2xl font-black">R$ 78,50</p>
</div>
<div className="p-6 bg-surface-container rounded-2xl ghost-border-15">
<p className="text-xs font-bold text-on-surface-variant mb-2">Serviços Realizados</p>
<p className="text-2xl font-black">248</p>
</div>
<div className="p-6 bg-surface-container rounded-2xl ghost-border-15">
<p className="text-xs font-bold text-on-surface-variant mb-2">Satisfação Geral</p>
<div className="flex items-center gap-2">
<p className="text-2xl font-black">4.9</p>
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default GestODeEquipeAdmin;
