
import React from 'react';

const PainelAdminMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 h-16 w-full shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional barber with a groomed beard in a dark studio setting with neon green highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASHSkQu34-gZo1r5ARK6s8ITRM_tbTmP7pwxtk1hgaY_AAdZeHrexf-UnILSsWHvpKbKf3gAdprxOwY4tzzxVtWPUpv-pygy4vK3seiiYLX0-ACkA2_ftkLaJI_bgY_n3OW4j1fMskDRcuojEat1O8zZZq-HRKItnPEgADz45WJAz6iTV2cwJR6vZSY_-aR_mED09r588CGBv5uA_ckGQmI7x5gekgXaKH4aGUH39mWsizIymKfKOAgoLMtxqtRkvM4S2ydvucE7_8"/>
</div>
<span className="text-xl font-black text-[#C8FF00] italic font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</span>
</div>
<button className="text-[#C8FF00] hover:opacity-80 transition-opacity duration-300 active:scale-95 active:transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 px-6 space-y-8">
{/* Welcome Header */}
<section>
<div className="flex items-center gap-2 mb-1">
<span className="text-on-surface-variant text-sm font-medium tracking-wide">Bem-vindo de volta,</span>
</div>
<div className="flex items-center justify-between">
<h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Boa tarde, João</h1>
<span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-3 py-1 rounded-full border border-primary-container/20 uppercase tracking-widest">Admin</span>
</div>
</section>
{/* KPI Cards Section (Horizontal Scroll on Mobile) */}
<section className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
{/* Revenue Card */}
<div className="min-w-[280px] bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="payments">payments</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xl" data-icon="trending_up">trending_up</span>
<span className="text-xs font-bold uppercase tracking-widest">Receita Global</span>
</div>
<div className="flex flex-col">
<span className="text-primary text-4xl font-extrabold tracking-tighter">R$ 12.450</span>
<span className="text-on-surface-variant text-xs mt-1">+12% em relação a ontem</span>
</div>
</div>
</div>
{/* Appointments Card */}
<div className="min-w-[280px] bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="event_available">event_available</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xl" data-icon="calendar_month">calendar_month</span>
<span className="text-xs font-bold uppercase tracking-widest">Agendamentos</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface text-4xl font-extrabold tracking-tighter">42 <span className="text-lg text-on-surface-variant">Hoje</span></span>
<span className="text-primary text-xs mt-1">8 slots restantes</span>
</div>
</div>
</div>
{/* Clients Card */}
<div className="min-w-[280px] bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="person_add">person_add</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xl" data-icon="group">group</span>
<span className="text-xs font-bold uppercase tracking-widest">Clientes Atendidos</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface text-4xl font-extrabold tracking-tighter">28</span>
<span className="text-on-surface-variant text-xs mt-1">6 novos clientes hoje</span>
</div>
</div>
</div>
</section>
{/* Today's Agenda Section */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<h2 className="text-xl font-extrabold tracking-tight text-on-surface">Agenda de Hoje</h2>
<button className="text-primary text-xs font-bold uppercase tracking-widest hover:opacity-70">Ver Tudo</button>
</div>
<div className="space-y-4">
{/* Timeline Item 1 (Active/Soon) */}
<div className="flex gap-4">
<div className="flex flex-col items-center pt-2">
<span className="text-primary text-sm font-bold">14:30</span>
<div className="w-px h-full bg-outline-variant/30 mt-2"></div>
</div>
<div className="flex-1 bg-surface-container-high rounded-2xl p-5 border-l-4 border-primary">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-bold text-on-surface">Ricardo Almeida</h3>
<p className="text-xs text-on-surface-variant">Corte &amp; Barba Premium</p>
</div>
<span className="bg-primary text-on-primary text-[10px] font-black px-2 py-0.5 rounded uppercase">Em 15 min</span>
</div>
<div className="flex items-center gap-3">
<img alt="Barber" className="w-6 h-6 rounded-full" data-alt="Portrait of a young professional barber with tattoos and stylish glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Tfmq0m-jfy0gV1vW7P-jW90x-NhQZNk4IhxDVIM8qyTDxiWiXeQcSxu5ikFIT5DH8GOH8BkNtCVKDHjFfPI11oKbRmBMcPRHsoR_hs7R9PTJOlzdNC8_df1ZyS_qC-3-epv7elDYMBPdOCKD58L2tzEK6tvo4w-npvnkMoh88RC0eeYSUgjUSJkUDeqspk3qQ_DAJ2D_eS1B-o5RqqJ7qt5EG0etk_icqMp3t1wDckkfDYa2pRVjKsnpV_SiMlIsClfAiAMrZEFW"/>
<span className="text-xs font-medium text-on-surface-variant">Barbeiro: Lucas M.</span>
</div>
</div>
</div>
{/* Timeline Item 2 */}
<div className="flex gap-4">
<div className="flex flex-col items-center pt-2">
<span className="text-on-surface-variant text-sm font-bold">15:15</span>
<div className="w-px h-full bg-outline-variant/30 mt-2"></div>
</div>
<div className="flex-1 bg-surface-container rounded-2xl p-5 glass-border">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-bold text-on-surface">Marcos Silva</h3>
<p className="text-xs text-on-surface-variant">Degradê Navalhado</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="Barber" className="w-6 h-6 rounded-full" data-alt="Headshot of a smiling barber with short dark hair in a clean uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMIolROUgWtqwBRrGMb0hWYpcgsXF4CY_VUd6uxutk0vfyMMK5O8GXRmTTAng0OfzGRaMeM5RSHULbhBXQNg6jYs1pfUVwE6ejYhPtIp50apZAY4e8cX4KlyKB5bUNisUWS7Ad4xi7WrZrB1Y2mkD6sBanHKeabh50H8jOubmQes-DuBxzUymXFDheak6hdqjDdVgbEZYdTuJt8JmKkl8whF36sZgl1UWQheF_QDCkPFT1WogmBUyf5wSuvo50XBnKIAdLEGABxy-S"/>
<span className="text-xs font-medium text-on-surface-variant">Barbeiro: André K.</span>
</div>
</div>
</div>
{/* Timeline Item 3 (Completed) */}
<div className="flex gap-4 opacity-50">
<div className="flex flex-col items-center pt-2">
<span className="text-on-surface-variant text-sm font-bold">13:00</span>
<div className="w-px h-full bg-outline-variant/30 mt-2"></div>
</div>
<div className="flex-1 bg-surface-container-low rounded-2xl p-5 glass-border">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-bold text-on-surface">Fabiano Costa</h3>
<p className="text-xs text-on-surface-variant">Aparo de Barba</p>
</div>
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
</div>
</div>
</div>
</section>
{/* Barber Ranking Section */}
<section className="space-y-6">
<h2 className="text-xl font-extrabold tracking-tight text-on-surface">Top Barbeiros</h2>
<div className="grid grid-cols-2 gap-4">
{/* Barber 1 */}
<div className="bg-surface-container-highest rounded-2xl p-4 glass-border flex flex-col items-center text-center gap-3">
<div className="relative">
<img alt="Lucas M." className="w-16 h-16 rounded-full object-cover border-2 border-primary" data-alt="Portrait of a young male barber with tattoos and stylish glasses, professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAtwE0Afs0GFbxVYOmS-3CDW9qkSE3q27HBVi03GTdxb3gnsKss-wLetQSUPmPr1TZ_7cMnhRerbQeXuqXH-aA3F-5Deens7-4Y5uRxpfP7RFJT0M2Il8mqELxXSVWJeE6v_MnsUzsFc6rnYcvT8MBWLFCpp38mK_boI-CtO2e9NuMK4zWwEzl7yBUrx-SqiQhJOyXdyu2tHqkga94XJeRpZfKoOa2p3nb7_IN-2DBuQdNQmkcpfOEVOwK7UpvgR20gJO4ITGNZ4Vc"/>
<div className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full">1º</div>
</div>
<div>
<h4 className="font-bold text-sm text-on-surface">Lucas M.</h4>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">R$ 3.240,00</p>
</div>
<div className="flex gap-1">
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
{/* Barber 2 */}
<div className="bg-surface-container-highest rounded-2xl p-4 glass-border flex flex-col items-center text-center gap-3">
<div className="relative">
<img alt="André K." className="w-16 h-16 rounded-full object-cover border-2 border-outline-variant" data-alt="Professional male barber with a clean haircut and a confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgFjwCHiYW07CHNSXc7D2VbV55ZDaa__eKfSqcyk0Vz5h4FsnOKQL_L4x8gDpO-v7XXSCJyqQeqb_LfnK0XFW4MsCBYzObb08IjCjg7KgNb4VPjA5cc9zuTMatVx8XytQQXzCIRd89shZAkH02m-UrMKwrlfNxFhfFnLMRoNT_9eiPP9qQHuvxMeh2604OM5X0igtRzFLM5UH6z5-sGsaXghmRXidhZtcbAde-6lFfAbtMDkcneB9xWU8Xb4QLZmo5g0lRtX3CjF9J"/>
<div className="absolute -bottom-1 -right-1 bg-surface-bright text-on-surface text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full">2º</div>
</div>
<div>
<h4 className="font-bold text-sm text-on-surface">André K.</h4>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">R$ 2.890,00</p>
</div>
<div className="flex gap-1">
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[10px] text-on-surface-variant/30" data-icon="star">star</span>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full rounded-t-[24px] z-50 bg-[#1A1919]/70 backdrop-blur-md border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex justify-around items-center pt-3 pb-6 px-4 w-full">
{/* Inicio (Active) */}
<a className="flex flex-col items-center justify-center text-[#C8FF00] scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Início</span>
</a>
{/* Agenda */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Agenda</span>
</a>
{/* Novo+ */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined text-4xl" data-icon="add_circle" style={{ fontVariationSettings: "'FILL' 1", fontSize: '40px', color: '#C8FF00', opacity: '1' }}>add_circle</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight sr-only">Novo+</span>
</a>
{/* Clientes */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Clientes</span>
</a>
{/* Menu */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] opacity-60 hover:text-[#C8FF00] hover:opacity-100 transition-all active:scale-90 cubic-bezier(0.4,0,0.2,1)" href="#">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-tight">Menu</span>
</a>
</nav>

    </div>
  );
};

export default PainelAdminMobile;
