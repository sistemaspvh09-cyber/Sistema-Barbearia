
import React from 'react';

const AgendaMultiBarbeiroAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 z-50 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold tracking-tighter text-[#C8FF00] font-['Plus_Jakarta_Sans']">BarberPro</span>
<nav className="hidden md:flex gap-6">
<a className="text-[#A0A0A0] font-medium hover:text-[#C8FF00] hover:scale-105 transition-all duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 hover:scale-105 transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agenda</a>
<a className="text-[#A0A0A0] font-medium hover:text-[#C8FF00] hover:scale-105 transition-all duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">Financeiro</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary-container w-64 transition-all" placeholder="Buscar cliente..." type="text"/>
</div>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary-container/30">
<img alt="User profile avatar" data-alt="close-up portrait of a professional barber with a well-groomed beard and stylish hair in a modern shop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0iWRc3tJVEIw5O2M5yl27XWXOzyl6XEZ5_Jv1gWXk29Gh7OLO8LYvL3cUQ_kuQ6LxtzGIDcPDP6enmycjokbSJ38WSgYSuZBJm24n0b6aKEXiM14Kfr5p20hR1DO-9jPGS46TwDL8zbhFbi0ggI2kqAgztG52RV-AhRzVy2htH9odI5T6kk5VlrfUPwO3zmZi2dv76FqRMoBS_hptvtXwq-l-o0DRZlRjUfUOOFohKe4DvC4bE8Ad_CtuXWlZJxwd-W5eqQ4fp1Gp"/>
</div>
</div>
</header>
{/* SideNavBar (Hidden on Mobile) */}
<aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 py-6 space-y-4 bg-[#1A1919] shadow-2xl z-40 pt-20">
<div className="px-6 mb-4">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Menu Principal</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 mx-2 shadow-[0_0_20px_rgba(200,255,0,0.2)] font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_month</span>
<span>Agenda</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span>
<span>Financeiro</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">groups</span>
<span>Equipe</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined">content_cut</span>
<span>Serviços</span>
</a>
</nav>
<div className="px-4 py-4 mt-auto border-t border-outline-variant/10">
<button className="w-full flex items-center justify-center gap-2 bg-[#C8FF00] text-[#4f6700] py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(200,255,0,0.1)] active:scale-95 transition-all">
<span className="material-symbols-outlined text-lg">add</span>
                Novo Agendamento
            </button>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined">support_agent</span>
<span>Suporte</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-error transition-colors duration-300 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined">logout</span>
<span>Sair</span>
</a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="md:ml-64 pt-20 pb-24 md:pb-8 px-4 md:px-8 min-h-screen bg-surface">
{/* Toolbar & Filters */}
<section className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<h1 className="text-3xl font-extrabold tracking-tight mb-1">Mestre de Agenda</h1>
<p className="text-on-surface-variant font-medium">Sexta-feira, 24 de Maio</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex bg-surface-container rounded-2xl p-1 p-1">
<button className="px-4 py-2 rounded-xl bg-surface-bright text-xs font-bold transition-all">HOJE</button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant text-xs font-bold hover:text-on-surface">AMANHÃ</button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant text-xs font-bold hover:text-on-surface flex items-center gap-2">
                        OUTRA DATA <span className="material-symbols-outlined text-sm">calendar_today</span>
</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/20 mx-2 hidden lg:block"></div>
<div className="flex gap-2">
<span className="px-3 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-[#C8FF00] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_8px_#C8FF00]"></span> Confirmados
                    </span>
<span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)]"></span> Em Espera
                    </span>
<span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,1)]"></span> Pendentes
                    </span>
</div>
</div>
</section>
{/* Multi-Barber Agenda Grid */}
<div className="relative overflow-x-auto no-scrollbar rounded-3xl bg-surface-container-low border border-outline-variant/10 shadow-2xl">
<div className="min-w-[1200px]">
{/* Barber Header Row */}
<div className="sticky top-0 z-30 flex bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/10">
<div className="w-20 flex-shrink-0 flex items-center justify-center border-r border-outline-variant/10">
<span className="material-symbols-outlined text-on-surface-variant">schedule</span>
</div>
{/* Barber Columns Headers */}
<div className="flex flex-1">
{/* Barber 1 */}
<div className="flex-1 min-w-[220px] p-4 border-r border-outline-variant/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber 1" data-alt="portrait of a male barber with glasses and tattoos working in a professional studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmK0oVKfHl2C_8c_ptopzsNcTnmuWGpuBk5tvg6VlNytOuAN2eum8CkmGKDxRUe71xlDe5-r44BE9cQ94z7-my98s0ROneranZpabHfq85OXw3tE81IsR7bl5tALi4MpPpy-NZB-nP8N5-XZrldrps5UdcO65bidFVtt4uFxazcu188Gie1K-KPgdyT1z4_bTdOMazdhKUQqRNDEcF4L4qWkii_Nl7MVzOCIeejvz1nhUhsIEKobo4HkFJYB4762GDFJEXVEhY4U1z"/>
</div>
<div>
<h4 className="text-sm font-bold">Ricardo S.</h4>
<p className="text-[10px] text-primary font-black uppercase tracking-tighter">Master Barber</p>
</div>
</div>
{/* Barber 2 */}
<div className="flex-1 min-w-[220px] p-4 border-r border-outline-variant/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber 2" data-alt="professional male hairstylist with sharp fade haircut and modern clothing looking directly at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmo2t2h3iMfqJC5yPtE-_7MGJEpx6sU37d1p-C0R83Pf-PSTCvZxkan0-4XWlSC2-B9kaZtSxR95seMAPBVBWnO5dF-ncYWwLLLsMalHueJ3vh1RZHYkMB1mfeUW7KqiZFnUpSXlFegzbrLfofNtbStSlwlxk44fVh-MjBxsB7CNZJnYQY6ooDMKds6Z2Wq1RV_NQ9yc5Dn6DngNghQu78dwDXc3sTFY8uNsuc_bXiMFQpgZoE17k6FHnAb6k-UhaiHQjxzx8M-yZR"/>
</div>
<div>
<h4 className="text-sm font-bold">Luan Silva</h4>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Sênior</p>
</div>
</div>
{/* Barber 3 */}
<div className="flex-1 min-w-[220px] p-4 border-r border-outline-variant/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber 3" data-alt="headshot of a young stylish barber with a creative aesthetic and minimalist fashion sense" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE37tumEvCsP3dEfuztty05CFpM9BRyDb7N_NwoHbiM-RgXjwh_L7arU_ckGPQ66UVMA0j_WtsRcXbnhEIB0i-3mAfsCEwj0n2d4NsCwUd2tJXdk0aIc9J_PXYXDwRRjUzBL-yxN8FVSJN5vtdXCdz_Iva59ve2tETpX2j6ZCVBxpbq926JzU2FHzrq-vHDSaCn82ITa5Gc7YXPHsxjBmSSccONOJHfKq25O_c0LMrDp0G7wsEbAxd7bBZLlassHjBEsfq3VQB1Lex"/>
</div>
<div>
<h4 className="text-sm font-bold">André M.</h4>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Sênior</p>
</div>
</div>
{/* Barber 4 */}
<div className="flex-1 min-w-[220px] p-4 border-r border-outline-variant/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber 4" data-alt="portrait of an experienced barber in a vintage shop setting with natural warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBarsc2S99aCvOl8BmhuHGOi9dlyH2z6ff4qw1qqOMKSJleNXjOAlL9iK_R6g1_x1X82VlpxKZU9jGykD3aOOuvoA-DKjYxw7pTw9XzqXuQjliLc11cxIMmCPE31M0MfHF_USvptTSKq_Syg6a6mix8HhRudaQBm2h-YZ1HM_Sko1xjEqDyjNyK_yB6MCeOshktnJntF09ZosUi1MsxV3rP4AXNjjbit2-84VS4aeOgfKX1i2qyAqGN_b02vU7GVczrp5UuTSvgUVda"/>
</div>
<div>
<h4 className="text-sm font-bold">Felipe Rossi</h4>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Pleno</p>
</div>
</div>
{/* Barber 5 */}
<div className="flex-1 min-w-[220px] p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber 5" data-alt="modern close-up of a barber with a focused expression and clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8mACejqVvztNkqlgC38A3t4ulFjkBCnqdc4095x_u1d-S8bWEGL5HGbFqZJ43WCpIYcrnFCsngQigzJ4QmCEmm3DAxctluH2LAiACGEP7RJ3QkeSAaZ16yJOXcMvx2bwRdraETTY9DvAHFm8u4DIUCHDAodTkc23V_9TrtdhI3d0zatf3oLIKAz41qP365QPqmUVZVBnr70x4t_ZfFWCXlyKMadU4i7_l8MzeXzWiSC12-9wARgZdHpoiN8Xj1_Zduc6Nip148XuX"/>
</div>
<div>
<h4 className="text-sm font-bold">Bruno G.</h4>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Junior</p>
</div>
</div>
</div>
</div>
{/* Agenda Body Grid */}
<div className="relative flex min-h-[800px]">
{/* Time Column */}
<div className="w-20 flex-shrink-0 bg-surface-container/30 border-r border-outline-variant/10">
{/* Time Markers */}
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">09:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">10:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5 relative">
<span className="text-xs font-bold text-primary">11:00</span>
{/* Current Time Indicator */}
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary-container z-20 shadow-[0_0_10px_#C8FF00]"></div>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">12:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">13:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">14:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">15:00</span>
</div>
<div className="h-24 flex items-start justify-center pt-4 border-b border-outline-variant/5">
<span className="text-xs font-bold text-on-surface-variant">16:00</span>
</div>
</div>
{/* Grid Columns */}
<div className="flex flex-1 relative">
{/* Barber 1 Column */}
<div className="flex-1 min-w-[220px] border-r border-outline-variant/10 relative">
{/* Appointment Card: Confirmed */}
<div className="absolute top-4 left-2 right-2 h-44 bg-primary-container/10 border-l-4 border-primary-container rounded-r-2xl p-4 glass-card group cursor-pointer transition-all hover:scale-[1.02] hover:z-10 shadow-lg">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-black uppercase text-primary tracking-widest">09:15 - 10:45</span>
<span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h5 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Gustavo Oliveira</h5>
<p className="text-xs text-on-surface-variant mb-3">Corte + Barba + Hidratação</p>
<div className="flex items-center gap-2">
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold">R$ 145,00</span>
</div>
</div>
{/* Appointment Card: Pending */}
<div className="absolute top-[300px] left-2 right-2 h-20 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl p-3 glass-card group cursor-pointer transition-all hover:scale-[1.02] hover:z-10">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-black uppercase text-amber-400 tracking-widest">12:00 - 12:45</span>
<span className="material-symbols-outlined text-sm text-amber-400">pending</span>
</div>
<h5 className="font-bold text-xs">Marcos Vinícius</h5>
<p className="text-[10px] text-on-surface-variant">Corte Degradê</p>
</div>
</div>
{/* Barber 2 Column */}
<div className="flex-1 min-w-[220px] border-r border-outline-variant/10 relative">
{/* Appointment Card: In Wait */}
<div className="absolute top-28 left-2 right-2 h-20 bg-blue-500/5 border-l-4 border-blue-500 rounded-r-2xl p-3 glass-card group cursor-pointer transition-all hover:scale-[1.02] hover:z-10">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">10:00 - 10:45</span>
<span className="material-symbols-outlined text-sm text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_top</span>
</div>
<h5 className="font-bold text-xs">Rodrigo Paes</h5>
<p className="text-[10px] text-on-surface-variant">Sombrancelha + Corte</p>
</div>
<div className="absolute top-[200px] left-2 right-2 h-32 bg-primary-container/10 border-l-4 border-primary-container rounded-r-2xl p-4 glass-card group cursor-pointer transition-all hover:scale-[1.02] hover:z-10">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-black uppercase text-primary tracking-widest">11:00 - 12:00</span>
<span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h5 className="font-bold text-sm mb-1">Carlos Eduardo</h5>
<p className="text-xs text-on-surface-variant">Combo VIP Experience</p>
</div>
</div>
{/* Barber 3 Column */}
<div className="flex-1 min-w-[220px] border-r border-outline-variant/10 relative bg-[#C8FF00]/[0.02]">
<div className="absolute inset-0 timeline-gradient pointer-events-none"></div>
{/* Empty Slot Action */}
<div className="absolute top-4 left-4 right-4 h-12 border-2 border-dashed border-outline-variant/20 rounded-xl flex items-center justify-center group cursor-pointer hover:border-primary-container/50 hover:bg-primary-container/5 transition-all">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">add</span>
</div>
</div>
{/* Barber 4 Column */}
<div className="flex-1 min-w-[220px] border-r border-outline-variant/10 relative">
<div className="absolute top-4 left-2 right-2 h-20 bg-primary-container/10 border-l-4 border-primary-container rounded-r-2xl p-3 glass-card group cursor-pointer transition-all hover:scale-[1.02] hover:z-10">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-black uppercase text-primary tracking-widest">09:00 - 09:45</span>
<span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h5 className="font-bold text-xs text-primary">Tiago Mendes</h5>
<p className="text-[10px] text-on-surface-variant">Barba Terapia</p>
</div>
</div>
{/* Barber 5 Column */}
<div className="flex-1 min-w-[220px] relative">
{/* Grid line placeholders */}
<div className="absolute top-24 w-full h-[1px] bg-outline-variant/5"></div>
<div className="absolute top-48 w-full h-[1px] bg-outline-variant/5"></div>
<div className="absolute top-72 w-full h-[1px] bg-outline-variant/5"></div>
</div>
</div>
</div>
</div>
</div>
{/* Floating FAB (Mobile/Contextual) */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl shadow-[0_0_30px_rgba(200,255,0,0.4)] flex items-center justify-center active:scale-90 transition-all z-50">
<span className="material-symbols-outlined font-bold">add</span>
</button>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#1A1919]/80 backdrop-blur-md border-t border-[#C8FF00]/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-3xl">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110" href="#">
<span className="material-symbols-outlined">event_note</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Grana</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="#">
<span className="material-symbols-outlined">menu</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Menu</span>
</a>
</nav>

    </div>
  );
};

export default AgendaMultiBarbeiroAdmin;
