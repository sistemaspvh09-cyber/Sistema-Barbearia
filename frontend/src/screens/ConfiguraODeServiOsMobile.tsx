
import React from 'react';

const ConfiguraODeServiOsMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional barber with stylish haircut and beard looking confident in a high-end studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC27jAUKOvLtdwDSzYwOy4hYeQ4ixG_plXMf_3CwAUeTWxUVqlYWRvubAWfEBXgOXkW3Vwc6-jIoDtaV-1Bt9op_8ActlL_AOmVfz9UjDD9DrF78hTmMQ01fYTOVIJTlnWGJyuiQk9EPjpuoTyYVytw5IimFrPNiTktugzSlTV6DSrh-7SbOjDh9kA0G5CHxeDtqYt20DFpRVkh-SGZg8wBsdzCVP9BwC2Lf3hPP6I5-OG9P4eJyR5a6YFVs7eJj4dOT3CMtE4r_1C5"/>
</div>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-xl font-black text-[#C8FF00]">BarberPro</span>
</div>
<button className="text-[#C8FF00] hover:opacity-80 transition-opacity duration-300 active:scale-95 transition-transform">
<span className="material-symbols-outlined">notifications</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-md mx-auto min-h-screen">
{/* Section Header */}
<div className="mb-8">
<h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-2">Serviços</h1>
<p className="text-on-surface-variant text-sm">Gerencie seu catálogo de serviços e preços.</p>
</div>
{/* Filter Chips */}
<div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
<button className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container text-sm font-bold whitespace-nowrap active:scale-95 transition-all">Todos</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface-variant text-sm font-medium whitespace-nowrap glass-border active:scale-95 transition-all">Corte</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface-variant text-sm font-medium whitespace-nowrap glass-border active:scale-95 transition-all">Barba</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface-variant text-sm font-medium whitespace-nowrap glass-border active:scale-95 transition-all">Combos</button>
</div>
{/* Services Grid */}
<div className="space-y-4">
{/* Service Card 1 */}
<div className="bg-surface-container-low rounded-[24px] p-5 glass-border neo-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined text-2xl">content_cut</span>
</div>
<div>
<h3 className="font-bold text-lg text-on-surface">Corte Degradê</h3>
<div className="flex items-center gap-2 text-on-surface-variant text-xs mt-0.5">
<span className="material-symbols-outlined text-sm">schedule</span>
                                45 min
                            </div>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-lg">R$ 85,00</span>
</div>
</div>
<div className="flex gap-2 pt-2 border-t border-outline-variant/10">
<button className="flex-1 py-3 rounded-xl bg-surface-container-highest text-on-surface text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-lg">edit</span>
                        Editar
                    </button>
<button className="px-4 py-3 rounded-xl bg-surface-container-highest text-error text-sm font-bold flex items-center justify-center hover:bg-error/10 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
{/* Service Card 2 */}
<div className="bg-surface-container-low rounded-[24px] p-5 glass-border neo-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined text-2xl">face_6</span>
</div>
<div>
<h3 className="font-bold text-lg text-on-surface">Barba Premium</h3>
<div className="flex items-center gap-2 text-on-surface-variant text-xs mt-0.5">
<span className="material-symbols-outlined text-sm">schedule</span>
                                30 min
                            </div>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-lg">R$ 60,00</span>
</div>
</div>
<div className="flex gap-2 pt-2 border-t border-outline-variant/10">
<button className="flex-1 py-3 rounded-xl bg-surface-container-highest text-on-surface text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-lg">edit</span>
                        Editar
                    </button>
<button className="px-4 py-3 rounded-xl bg-surface-container-highest text-error text-sm font-bold flex items-center justify-center hover:bg-error/10 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
{/* Service Card 3 (Combo) */}
<div className="relative overflow-hidden bg-surface-container-low rounded-[24px] p-5 glass-border neo-shadow group">
<div className="absolute top-0 right-0 p-3">
<span className="bg-[#C8FF00] text-on-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Popular</span>
</div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00] flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div>
<h3 className="font-bold text-lg text-on-surface">Combo Completo</h3>
<div className="flex items-center gap-2 text-on-surface-variant text-xs mt-0.5">
<span className="material-symbols-outlined text-sm">schedule</span>
                                75 min
                            </div>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-lg">R$ 130,00</span>
</div>
</div>
<div className="flex gap-2 pt-2 border-t border-outline-variant/10">
<button className="flex-1 py-3 rounded-xl bg-surface-container-highest text-on-surface text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-lg">edit</span>
                        Editar
                    </button>
<button className="px-4 py-3 rounded-xl bg-surface-container-highest text-error text-sm font-bold flex items-center justify-center hover:bg-error/10 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
</div>
{/* Floating Action Button (Contextual) */}
<button className="fixed bottom-24 right-6 w-16 h-16 rounded-2xl bg-[#C8FF00] text-on-primary shadow-[0_0_30px_rgba(200,255,0,0.3)] flex items-center justify-center active:scale-90 transition-all z-40">
<span className="material-symbols-outlined text-3xl">add</span>
</button>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 rounded-t-[24px] bg-[#1A1919]/70 backdrop-blur-xl border-t border-[#C8FF00]/15 shadow-[0_-4px_40px_rgba(0,0,0,0.5)] flex justify-around items-center w-full h-20 px-4 pb-safe">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300" href="?module=overview">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl py-1 px-3 active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Novo+</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined">group</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Clientes</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined">menu</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider mt-1">Menu</span>
</a>
</nav>

    </div>
  );
};

export default ConfiguraODeServiOsMobile;
