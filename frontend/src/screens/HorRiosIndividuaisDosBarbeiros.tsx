
import React from 'react';

const HorRiosIndividuaisDosBarbeiros: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#ffffff]/15 shadow-[0px_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex justify-between items-center h-16 px-6 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter font-['Plus_Jakarta_Sans']">BarberPro</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-[#A0A0A0] font-medium text-sm hover:scale-105 hover:text-[#C8FF00] transition-all duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] font-medium text-sm hover:scale-105 hover:text-[#C8FF00] transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Barbeiros</a>
<a className="text-[#C8FF00] font-bold text-sm hover:scale-105 hover:text-[#C8FF00] transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agendamentos</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">notifications</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#ffffff]/15">
<img className="w-full h-full object-cover" data-alt="close-up of a professional male barber with a well-groomed beard and stylish hair in a modern barber shop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOXRfWyKy9ueN-rLEAIYHHrR0sGDMyW_BGIh-5TZNfAuExYhHCz2M4xBGpEinnv4In-VlNUEgKtYJEYnk-tdhg6jIiew9i4NbF02rP_9pEGT0eFbMSSOSL5zzogmidv7yEj-vE6U2VmnQ79uVjbz-yqMqsMOCB3TIZYecDIDLzeHpw0A9Xvvrexpq81G92NNz7-bY6cFBmYwfZUq-JoCGMiBbAQrjtfESVJ4UVyEEeNbMs0CJEmH73N_2DpvUnA4qav5mT99cSBKn"/>
</div>
</div>
</div>
</header>
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-[#1A1919] border-r border-[#ffffff]/10 hidden md:flex flex-col py-8">
<div className="px-6 mb-10">
<h2 className="text-[#C8FF00] font-black text-lg tracking-tight">Admin Console</h2>
<p className="text-[#A0A0A0] text-xs font-semibold uppercase tracking-widest">Gestão de Unidade</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 hover:bg-[#ffffff]/5 rounded-xl transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 hover:bg-[#ffffff]/5 rounded-xl transition-all duration-300" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm">Barbeiros</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 px-4 py-3 shadow-[0px_0px_20px_rgba(200,255,0,0.3)] scale-100" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm">Agendamentos</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 hover:bg-[#ffffff]/5 rounded-xl transition-all duration-300" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm">Relatórios</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 mx-2 hover:bg-[#ffffff]/5 rounded-xl transition-all duration-300" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined">settings</span>
<span className="font-['Plus_Jakarta_Sans'] font-semibold text-sm">Configurações</span>
</a>
</nav>
<div className="px-4 mt-auto">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 text-white rounded-xl font-semibold text-sm transition-all border border-white/5">
<span className="material-symbols-outlined text-sm">logout</span>
                Sair
            </button>
</div>
</aside>
{/* Main Content */}
<main className="pt-20 md:pl-64 min-h-screen bg-surface">
<div className="p-6 lg:p-10 max-w-7xl mx-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h1 className="text-4xl font-extrabold tracking-tight mb-2 text-on-surface">Horários da Equipe</h1>
<p className="text-on-surface-variant max-w-xl">Configure a disponibilidade individual de cada profissional. Sincronização automática com agendas externas habilitada.</p>
</div>
<div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/15">
<span className="material-symbols-outlined text-[#4285F4] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
<span className="text-xs font-medium text-on-surface-variant">Sincronizado com Google Calendar</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Barber Selection Sidebar */}
<div className="lg:col-span-3 space-y-4">
<h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Barbeiros</h3>
<div className="space-y-2">
{/* Active Barber */}
<div className="flex items-center gap-4 p-3 bg-primary-container text-on-primary-container rounded-xl shadow-[0px_10px_30px_rgba(200,255,0,0.15)] cursor-pointer transition-all duration-300 border border-primary-fixed/20">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="portrait of a confident barber with tattoos and stylish haircut in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8jYNBXBAPv37kxuFtpmHFayBpDL9T4ufAPKoLOFSgLg43NTVWgxQUaJG9r5kPg8aO_nVwpIsVuLXHdCoo43BVtJUw7y0Cth3Gyztvbwt_Mgugnngy5-2dqrkIdnZEldlwKLY3CkoXR1pvjWUhe1jA-EM7ldLiM0-IlYOiiQ2AZ2bY0ng9rzLASXrAjxVzBvHzc8yU4KcFtAS62KzBiyHuUBvbFTvChnvfnclfUve3_fazVUEaiTpmpJpNPcCGbVOSmaumyc6_mmU-"/>
<div>
<p className="font-bold text-sm">Ricardo 'The Blade'</p>
<p className="text-[10px] font-medium opacity-70">Sênior &amp; Visagista</p>
</div>
</div>
{/* Barber 2 */}
<div className="flex items-center gap-4 p-3 bg-surface-container hover:bg-surface-container-high rounded-xl cursor-pointer transition-all duration-300 border border-outline-variant/10 group">
<img className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="professional male barber with apron in a high-end barbershop environment with vintage tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FF5DxqT6h-arzg_GINKklI4rTbvGnhfWR18kqh8X8xLMQeVJBFFgAQkgINa5wbpaGxo2xIxMEav5iXnQu0f3HJcg0vmYEz4pSAkBN7FWqra73ji728nLfx87EhWd6l5Q-sMVS_h9q93vk2m3DZhKRaEnZxl8WiCtnY5FF7nCsL9RYfHa_rL4KuiI8zWv8ODPvNHrIyZzvBOcshwMYtmmp5hVdQfpxJd-s5qaMN7_M-A1RxdWxsAgetIvZKyJJKes4mv-RwH9TUVA"/>
<div>
<p className="font-bold text-sm text-on-surface group-hover:text-primary-fixed transition-colors">Marcos Lemos</p>
<p className="text-[10px] font-medium text-on-surface-variant">Especialista em Barba</p>
</div>
</div>
{/* Barber 3 */}
<div className="flex items-center gap-4 p-3 bg-surface-container hover:bg-surface-container-high rounded-xl cursor-pointer transition-all duration-300 border border-outline-variant/10 group">
<img className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="young professional barber focusing on a haircut with precise movements and high-end tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1UBxn--gm99Xhdxqq4OgsTyRHGGEuenlzoqH-i5DQF24kCfGD2qUNHw_0VLtLTEpiWHEdaE5uVx_oCTkJsJ-t1fcsOM1bNLizGPQbzVyax767WSmXg9SmCOhGShtusew7_dl-GQyW05Bj7Q0RKqYoowu0MRDvG_1bAav7oFSL7EnfqU-6DZR5eBDhrAzj8Q67LRnrW2zN8WPftRi_t0M9lcwHc3uOetcIOkixuNFjvjwYbQMv0vcI3cBjgrcWe0X_c2UzAnFIa9nn"/>
<div>
<p className="font-bold text-sm text-on-surface group-hover:text-primary-fixed transition-colors">Ana Silva</p>
<p className="text-[10px] font-medium text-on-surface-variant">Colorimetria &amp; Corte</p>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 p-3 mt-6 border-2 border-dashed border-outline-variant/30 text-on-surface-variant hover:text-primary-fixed hover:border-primary-fixed/50 rounded-xl transition-all duration-300">
<span className="material-symbols-outlined">add</span>
<span className="text-sm font-bold">Novo Barbeiro</span>
</button>
</div>
{/* Schedule Grid */}
<div className="lg:col-span-9">
<div className="glass-card rounded-3xl p-6 lg:p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-bold tracking-tight">Grade Semanal: Ricardo</h2>
<div className="flex gap-2">
<span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">GMT -03:00</span>
</div>
</div>
<div className="space-y-4">
{/* Day Row: Seg */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Segunda</span>
</div>
<div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
<div className="space-y-1">
<p className="text-[10px] font-bold text-on-surface-variant uppercase px-1">Início Turno</p>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="09:00"/>
</div>
<div className="space-y-1">
<p className="text-[10px] font-bold text-on-surface-variant uppercase px-1">Início Almoço</p>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="12:00"/>
</div>
<div className="space-y-1">
<p className="text-[10px] font-bold text-on-surface-variant uppercase px-1">Fim Almoço</p>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="13:00"/>
</div>
<div className="space-y-1">
<p className="text-[10px] font-bold text-on-surface-variant uppercase px-1">Fim Turno</p>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="18:00"/>
</div>
</div>
</div>
{/* Day Row: Ter */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Terça</span>
</div>
<div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="09:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="12:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="13:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="20:00"/>
</div>
</div>
{/* Day Row: Quarta (Inactive Example) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/5 opacity-50">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface-variant">Quarta</span>
</div>
<div className="md:col-span-10">
<p className="text-sm font-medium italic text-on-surface-variant/60">Folga semanal ou indisponível</p>
</div>
</div>
{/* Day Row: Qui */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Quinta</span>
</div>
<div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="09:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="12:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="13:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="18:00"/>
</div>
</div>
{/* Day Row: Sex */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Sexta</span>
</div>
<div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="09:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="12:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="13:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="21:00"/>
</div>
</div>
{/* Day Row: Sáb */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Sábado</span>
</div>
<div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="08:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="12:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="13:00"/>
<input className="w-full bg-surface-container-highest border-0 rounded-lg text-sm font-medium text-white focus:ring-1 focus:ring-primary-fixed" type="time" value="16:00"/>
</div>
</div>
{/* Day Row: Dom */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="md:col-span-2 flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
<span className="font-bold text-on-surface">Domingo</span>
</div>
<div className="md:col-span-10">
<p className="text-sm font-medium italic text-on-surface-variant/60">Fechado</p>
</div>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-outline-variant/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-lg">info</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                                    Alterações nos horários afetarão agendamentos futuros.<br/>
                                    Os clientes com horários já marcados não serão notificados automaticamente.
                                </p>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-[#C8FF00] text-[#4f6700] rounded-xl font-bold shadow-[0px_0px_25px_rgba(200,255,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">save</span>
                                Salvar Horários
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#1A1919] border-t border-[#ffffff]/10 flex items-center justify-around z-50 px-2">
<button className="flex flex-col items-center justify-center gap-1 text-[#A0A0A0]">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Início</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#A0A0A0]">
<span className="material-symbols-outlined">content_cut</span>
<span className="text-[10px] font-bold">Equipe</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#C8FF00]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
<span className="text-[10px] font-bold">Agenda</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#A0A0A0]">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-bold">Relatos</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-[#A0A0A0]">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-bold">Ajustes</span>
</button>
</nav>

    </div>
  );
};

export default HorRiosIndividuaisDosBarbeiros;
