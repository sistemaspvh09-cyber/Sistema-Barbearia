
import React from 'react';

const DashboardDeMarketingEGrowth: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 py-4 max-w-full shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter font-['Plus_Jakarta_Sans']">BarberPro</span>
<div className="hidden md:flex gap-6">
<a className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 font-['Plus_Jakarta_Sans'] tracking-tight hover:scale-105 transition-transform duration-300" href="?module=overview">Marketing</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight hover:scale-105 transition-transform duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] tracking-tight hover:scale-105 transition-transform duration-300" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">Relatórios</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:block relative">
<input className="bg-surface-container-low border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary-fixed w-64 text-on-surface-variant" placeholder="Buscar métricas..." type="text"/>
</div>
<button className="text-[#A0A0A0] hover:text-white transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#A0A0A0] hover:text-white transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary-container/20">
<img alt="User Profile Avatar" data-alt="Close-up portrait of a professional male barber with a well-groomed beard and stylish hair in a modern barbershop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgco2_A43t3oS78bjFlwVBbMYhjVYgh8vbw3j3KtLbTO-nMUeF6dmEWFRz9Qz9c03dA0QIcuFIRQyp1pGPX5Db0T5Qe48lWT2sfjfQK99Gk6GSqAbfuXOZi_YQ-V7ND-YpQMQv17sLcG5w3u-KLxpK-tR911LS0RUceAUWGpQyVdXKQOTl--SrCCC-3h-_S69dlfe-GzGep2lOPgUP6va_-vrS0XmI7Bm6kGzIW7LparxhShV3_JhP1J0rbTl2cJJMfezW4x2l4Dfs"/>
</div>
</div>
</nav>
{/* SideNavBar */}
<aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#1A1919] shadow-2xl z-40 py-8 px-4 gap-4">
<div className="mb-8 px-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">content_cut</span>
</div>
<div>
<h2 className="text-[#C8FF00] font-black italic font-['Plus_Jakarta_Sans']">BarberPro</h2>
<p className="text-xs text-[#A0A0A0] font-medium">Premium Management</p>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 py-3 px-4 bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 shadow-[0_0_20px_rgba(200,255,0,0.4)] active:scale-98 transition-transform font-['Plus_Jakarta_Sans'] font-medium text-sm" href="?module=marketing&screen=dashboard-de-marketing-egrowth">
<span className="material-symbols-outlined">campaign</span> Marketing
            </a>
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">star</span> Reviews
            </a>
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">ads_click</span> Campaigns
            </a>
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">confirmation_number</span> Coupons
            </a>
</nav>
<button className="bg-primary-container text-on-primary font-bold py-3 rounded-xl mx-2 mb-6 shadow-lg active:scale-95 transition-all">
            New Campaign
        </button>
<div className="border-t border-white/5 pt-4 flex flex-col gap-1">
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined">help</span> Support
            </a>
<a className="flex items-center gap-3 py-3 px-4 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] font-medium text-sm" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined">logout</span> Logout
            </a>
</div>
</aside>
{/* Main Content */}
<main className="md:ml-64 pt-24 pb-24 px-6 min-h-screen">
<header className="mb-10">
<h1 className="text-4xl font-extrabold tracking-tight mb-2">Marketing &amp; Growth</h1>
<p className="text-on-surface-variant max-w-2xl">Otimize seu alcance e converta mais clientes com inteligência de dados em tempo real.</p>
</header>
{/* Bento Grid Metrics */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div className="md:col-span-2 bg-surface-container rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
<span className="material-symbols-outlined text-9xl">link</span>
</div>
<div>
<span className="text-primary-fixed text-sm font-bold uppercase tracking-widest mb-4 block">Link de Agendamento</span>
<h3 className="text-5xl font-black mb-2">12.4k</h3>
<p className="text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed text-sm">trending_up</span>
<span className="text-primary-fixed font-bold">+18.5%</span> visitas este mês
                    </p>
</div>
<div className="mt-8">
<div className="w-full h-16 bg-gradient-to-t from-primary-fixed/20 to-transparent rounded-lg flex items-end gap-1 px-2">
<div className="w-full bg-primary-fixed h-1/2 rounded-t-sm opacity-30"></div>
<div className="w-full bg-primary-fixed h-3/4 rounded-t-sm opacity-50"></div>
<div className="w-full bg-primary-fixed h-1/2 rounded-t-sm opacity-40"></div>
<div className="w-full bg-primary-fixed h-5/6 rounded-t-sm opacity-80"></div>
<div className="w-full bg-primary-fixed h-full rounded-t-sm"></div>
<div className="w-full bg-primary-fixed h-2/3 rounded-t-sm opacity-60"></div>
</div>
</div>
</div>
<div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between border-l-4 border-primary-container">
<div>
<span className="text-on-surface-variant text-sm font-bold block mb-1">Conversão Geral</span>
<h3 className="text-3xl font-black italic">8.2%</h3>
</div>
<div className="bg-surface-container-highest rounded-full h-2 w-full mt-4">
<div className="bg-primary-container h-full rounded-full w-[8.2%] shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
</div>
<p className="text-xs text-on-surface-variant mt-4">Meta mensal: 10%</p>
</div>
<div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between">
<div>
<span className="text-on-surface-variant text-sm font-bold block mb-1">Custo por Lead</span>
<h3 className="text-3xl font-black">R$ 4,12</h3>
</div>
<div className="mt-auto">
<span className="text-error text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> 2.1% vs anterior
                    </span>
</div>
</div>
</div>
{/* Conversion Funnel */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
<div className="lg:col-span-2 bg-surface-container rounded-xl p-8">
<h3 className="text-xl font-bold mb-8 flex items-center gap-3">
<span className="material-symbols-outlined text-primary-fixed">filter_alt</span> Funil de Conversão Online
                </h3>
<div className="space-y-6">
<div className="relative">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium">Visitas ao Link</span>
<span className="text-sm font-bold">12,400</span>
</div>
<div className="w-full h-12 bg-primary-container rounded-xl flex items-center px-4 relative overflow-hidden">
<div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
<span className="text-on-primary font-black italic">100%</span>
</div>
</div>
<div className="relative flex justify-center">
<div className="w-4 h-6 border-l-2 border-r-2 border-primary-fixed/20"></div>
</div>
<div className="relative w-[85%] mx-auto">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-on-surface-variant">Selecionou Serviço</span>
<span className="text-sm font-bold text-on-surface-variant">3,120</span>
</div>
<div className="w-full h-12 bg-primary-container/60 rounded-xl flex items-center px-4">
<span className="text-white font-black italic">25%</span>
</div>
</div>
<div className="relative flex justify-center">
<div className="w-4 h-6 border-l-2 border-r-2 border-primary-fixed/10"></div>
</div>
<div className="relative w-[70%] mx-auto">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-on-surface-variant">Agendou Horário</span>
<span className="text-sm font-bold text-primary-fixed">1,016</span>
</div>
<div className="w-full h-12 bg-primary-container/20 rounded-xl flex items-center px-4 border border-primary-fixed/30">
<span className="text-primary-fixed font-black italic">8.2%</span>
</div>
</div>
</div>
</div>
{/* Traffic Sources */}
<div className="bg-surface-container rounded-xl p-8">
<h3 className="text-xl font-bold mb-8">Fontes de Tráfego</h3>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[#E1306C]">photo_camera</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">Instagram Ads</span>
<span className="text-xs text-on-surface-variant">45%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[45%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[#4285F4]">search</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">Google Maps</span>
<span className="text-xs text-on-surface-variant">30%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[30%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[#25D366]">chat</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">WhatsApp Direct</span>
<span className="text-xs text-on-surface-variant">15%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[15%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined">link</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">Outros / Direto</span>
<span className="text-xs text-on-surface-variant">10%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[10%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Active Coupons */}
<div className="bg-surface-container rounded-xl p-8 mb-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<h3 className="text-xl font-bold flex items-center gap-3">
<span className="material-symbols-outlined text-primary-fixed">confirmation_number</span> Cupons Ativos e Performance
                </h3>
<button className="bg-surface-container-highest hover:bg-surface-bright text-white px-4 py-2 rounded-lg text-sm font-bold transition-all border border-white/5">
                    Ver todos os cupons
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Coupon Card 1 */}
<div className="bg-surface-container-low rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/5 rounded-full blur-2xl group-hover:bg-primary-fixed/10 transition-all"></div>
<div className="flex justify-between items-start mb-6">
<div>
<span className="bg-primary-fixed/10 text-primary-fixed text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">20% OFF</span>
<h4 className="text-xl font-black italic mt-2">TERCAMALUCA</h4>
</div>
<span className="text-primary-fixed material-symbols-outlined">bolt</span>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-on-surface-variant text-xs mb-1">Taxa de Uso</p>
<p className="text-2xl font-black">64%</p>
</div>
<div className="text-right">
<p className="text-on-surface-variant text-xs mb-1">Agendamentos</p>
<p className="text-lg font-bold">342</p>
</div>
</div>
<div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full">
<div className="h-full bg-primary-fixed w-[64%] shadow-[0_0_8px_rgba(200,255,0,0.4)]"></div>
</div>
</div>
{/* Coupon Card 2 */}
<div className="bg-surface-container-low rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<div>
<span className="bg-primary-fixed/10 text-primary-fixed text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">R$ 15 OFF</span>
<h4 className="text-xl font-black italic mt-2">BEMVINDO</h4>
</div>
<span className="text-on-surface-variant material-symbols-outlined">person_add</span>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-on-surface-variant text-xs mb-1">Taxa de Uso</p>
<p className="text-2xl font-black text-on-surface-variant">28%</p>
</div>
<div className="text-right">
<p className="text-on-surface-variant text-xs mb-1">Agendamentos</p>
<p className="text-lg font-bold">156</p>
</div>
</div>
<div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full">
<div className="h-full bg-primary-fixed/40 w-[28%]"></div>
</div>
</div>
{/* Coupon Card 3 */}
<div className="bg-surface-container-low rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<div>
<span className="bg-primary-fixed/10 text-primary-fixed text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">Combo Especial</span>
<h4 className="text-xl font-black italic mt-2">BARBACABEL</h4>
</div>
<span className="text-on-surface-variant material-symbols-outlined">content_cut</span>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-on-surface-variant text-xs mb-1">Taxa de Uso</p>
<p className="text-2xl font-black text-on-surface-variant">41%</p>
</div>
<div className="text-right">
<p className="text-on-surface-variant text-xs mb-1">Agendamentos</p>
<p className="text-lg font-bold">203</p>
</div>
</div>
<div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full">
<div className="h-full bg-primary-fixed/60 w-[41%]"></div>
</div>
</div>
</div>
</div>
{/* Marketing Insights Bento */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-high rounded-3xl p-8 relative overflow-hidden group border border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">psychology</span>
</div>
<h3 className="text-xl font-bold">Growth Insight</h3>
</div>
<p className="text-on-surface-variant leading-relaxed">
                    Seu tráfego do <strong className="text-white">Instagram</strong> converte 3x mais quando os usuários clicam em cupons nos primeiros 10 segundos de visita. Considere fixar o "TERCAMALUCA" nos seus stories em destaque.
                </p>
<div className="mt-8 flex gap-3">
<button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg font-bold text-sm active:scale-95 transition-all">Aplicar Estratégia</button>
<button className="bg-surface-container-highest text-white px-4 py-2 rounded-lg font-bold text-sm">Dispensar</button>
</div>
</div>
<div className="bg-surface-container-high rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold mb-4">Performance Semanal</h3>
<div className="flex items-end gap-2 h-40">
<div className="flex-1 bg-primary-container/20 hover:bg-primary-container transition-all h-[40%] rounded-t-lg relative group">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Seg: 45</span>
</div>
<div className="flex-1 bg-primary-container/20 hover:bg-primary-container transition-all h-[60%] rounded-t-lg relative group">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ter: 82</span>
</div>
<div className="flex-1 bg-primary-container/20 hover:bg-primary-container transition-all h-[55%] rounded-t-lg relative group">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Qua: 74</span>
</div>
<div className="flex-1 bg-primary-container/20 hover:bg-primary-container transition-all h-[80%] rounded-t-lg relative group">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Qui: 110</span>
</div>
<div className="flex-1 bg-primary-container h-full rounded-t-lg relative group shadow-[0_0_15px_rgba(200,255,0,0.3)]">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] p-1 rounded opacity-100 transition-opacity whitespace-nowrap">Hoje: 142</span>
</div>
</div>
</div>
<div className="flex justify-between text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mt-4">
<span>Seg</span>
<span>Ter</span>
<span>Qua</span>
<span>Qui</span>
<span>Hoje</span>
</div>
</div>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#0D0D0D]/80 backdrop-blur-md z-50 md:hidden rounded-t-[1.5rem] border-t border-[#C8FF00]/15 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Metrics</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110 shadow-[0_0_15px_rgba(200,255,0,0.5)] active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">NPS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">local_offer</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Promos</span>
</a>
</nav>
{/* Contextual FAB (Hidden as per hierarchy rules for Dashboard) */}

    </div>
  );
};

export default DashboardDeMarketingEGrowth;
