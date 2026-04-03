
import React from 'react';

const ComissEsPersonalizadasAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Desktop Shell) */}
<aside className="hidden md:flex flex-col fixed left-0 top-0 h-full h-screen w-64 border-r border-[#C8FF00]/10 bg-[#1A1919] z-50 shadow-2xl shadow-black">
<div className="px-6 py-8">
<h1 className="text-2xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mt-1">Premium Management</p>
</div>
<nav className="flex-1 px-4 space-y-2 mt-4">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-semibold text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-semibold text-sm">Barbers</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 shadow-[0px_0px_20px_rgba(200,255,0,0.2)]" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-semibold text-sm">Commission</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5" href="#">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-semibold text-sm">Calendar</span>
</a>
</nav>
<div className="p-4 mt-auto border-t border-white/5">
<button className="w-full bg-white/5 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                New Appointment
            </button>
<div className="mt-4 flex flex-col gap-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-2 text-xs font-medium" href="#">
<span className="material-symbols-outlined text-lg">help</span> Support
                </a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-2 text-xs font-medium" href="#">
<span className="material-symbols-outlined text-lg">logout</span> Logout
                </a>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-64 pb-24 md:pb-8">
{/* TopAppBar */}
<header className="fixed top-0 right-0 left-0 md:left-64 z-40 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<h2 className="font-headline text-xl font-extrabold tracking-tighter text-[#C8FF00]">Comissões</h2>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8FF00]/20">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="Close-up professional portrait of a business administrator in a dark studio setting with subtle neon green backlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsdp86BbZbP4UmBaceCQGQ31igbgGNiT8PnUhkROqkV1I9LsjY3MFCQ-XFaVN78JSy-GfetFQOmLcsBPYfleQZAFsbOa955RrQGzUsPpBqQZrpAZSB5BKuPphtJ79qxH2bJc-tN2LdFX07KmMCkUu690RO8PQI9Y4HZtav-PPXb1Oez3pPTBi36G4jhXf-NMUNKdnPCOyDWGbuBAZtnUtW7U5gs4PrrhL9o2-RlYIlcpiJGIo77ObXjrDAozLcpprc9u5KnPP_gcwq"/>
</div>
</div>
</header>
{/* Content Area */}
<div className="mt-24 px-6 max-w-6xl mx-auto space-y-8">
{/* Bento Grid Header Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Barber Selection Card */}
<div className="lg:col-span-2 glass-card rounded-2xl p-6 flex items-center justify-between group">
<div className="flex items-center gap-6">
<div className="relative">
<div className="absolute inset-0 bg-[#C8FF00] blur-2xl opacity-10 group-hover:opacity-25 transition-opacity"></div>
<img alt="Barber avatar" className="w-20 h-20 rounded-2xl object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-transparent group-hover:border-[#C8FF00]/40" data-alt="High-contrast editorial portrait of a skilled male barber with tattoos and a groomed beard, atmospheric dark background with rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGFfWCfupZTtkGLSgK_oYvnl9SvJ8BBWu8dwanvciZEFXreMZ2RrkADd-jzch_nIRXaZzV1wDzKtWtf9Whb9ex8nkVFc56fr2g1NbY3BIUOYqkZynvzMSQz1YHgdpaqifguZKIdKLZ8VMF5TJZEPfGTJmiGk_1w-fnBUbKY-Ri5YDJxwhlcg7sTP6TZmmV8OjJVV-fg5t0C0nUClozoop0AKHebocnUa0vmpT8xKUtlvnKsSbujaQsMFdvNhojAqLxHoiJoeC2xkM"/>
</div>
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#C8FF00]/60">Barbeiro Selecionado</span>
<h3 className="text-2xl font-black tracking-tight mt-1">Ricardo "The Blade" Santos</h3>
<div className="flex items-center gap-2 mt-2">
<span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse"></span>
<span className="text-on-surface-variant text-sm font-medium">Sênior • 8 anos de experiência</span>
</div>
</div>
</div>
<button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-colors">ALTERAR BARBEIRO</button>
</div>
{/* Global Override Card */}
<div className="glass-card rounded-2xl p-6 flex flex-col justify-center">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Taxa de Comissão Global</label>
<div className="mt-4 relative">
<input className="bg-surface-container-low border-none focus:ring-2 focus:ring-[#C8FF00] text-4xl font-black text-[#C8FF00] w-full rounded-xl py-4 pl-6 pr-12 transition-all" type="number" value="45"/>
<span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-on-surface-variant">%</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-3 italic leading-relaxed">Esta taxa será aplicada a todos os serviços, exceto onde houver regras específicas abaixo.</p>
</div>
</div>
{/* Service Specific List */}
<div className="space-y-4">
<div className="flex items-center justify-between px-2">
<h4 className="font-headline text-lg font-bold">Regras por Serviço</h4>
<span className="text-xs font-medium text-on-surface-variant">4 Serviços Ativos</span>
</div>
<div className="grid grid-cols-1 gap-3">
{/* Service Row 1 */}
<div className="surface-container border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center group-hover:bg-[#C8FF00]/10 transition-colors">
<span className="material-symbols-outlined text-[#C8FF00]">content_cut</span>
</div>
<div>
<h5 className="font-bold text-white">Corte Degradê Premium</h5>
<p className="text-xs text-on-surface-variant">Valor base: R$ 85,00</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<span className="block text-[10px] uppercase font-bold text-on-surface-variant mb-1">Comissão Diferenciada</span>
<div className="flex items-center gap-3">
<div className="relative w-32">
<input className="w-full bg-surface-container-low border border-white/5 rounded-lg py-2 pl-4 pr-10 text-sm font-bold focus:ring-[#C8FF00] focus:border-[#C8FF00]" placeholder="45" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant">%</span>
</div>
<button className="text-error opacity-40 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-xl">delete_sweep</span>
</button>
</div>
</div>
</div>
</div>
{/* Service Row 2 */}
<div className="surface-container border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center group-hover:bg-[#C8FF00]/10 transition-colors">
<span className="material-symbols-outlined text-[#C8FF00]">face_retouching_natural</span>
</div>
<div>
<h5 className="font-bold text-white">Barba Terapia com Toalha Quente</h5>
<p className="text-xs text-on-surface-variant">Valor base: R$ 60,00</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<span className="block text-[10px] uppercase font-bold text-on-surface-variant mb-1">Comissão Diferenciada</span>
<div className="flex items-center gap-3">
<div className="relative w-32">
<input className="w-full bg-surface-container-low border border-[#C8FF00]/30 rounded-lg py-2 pl-4 pr-10 text-sm font-bold text-[#C8FF00] focus:ring-[#C8FF00]" type="number" value="50"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C8FF00]/70 font-bold">%</span>
</div>
<button className="text-error opacity-100 transition-opacity">
<span className="material-symbols-outlined text-xl">delete_sweep</span>
</button>
</div>
</div>
</div>
</div>
{/* Service Row 3 */}
<div className="surface-container border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center group-hover:bg-[#C8FF00]/10 transition-colors">
<span className="material-symbols-outlined text-[#C8FF00]">brush</span>
</div>
<div>
<h5 className="font-bold text-white">Combo: Corte + Barba + Pigmentação</h5>
<p className="text-xs text-on-surface-variant">Valor base: R$ 140,00</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<span className="block text-[10px] uppercase font-bold text-on-surface-variant mb-1">Comissão Diferenciada</span>
<div className="flex items-center gap-3">
<div className="relative w-32">
<input className="w-full bg-surface-container-low border border-white/5 rounded-lg py-2 pl-4 pr-10 text-sm font-bold focus:ring-[#C8FF00] focus:border-[#C8FF00]" placeholder="45" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant">%</span>
</div>
<button className="text-error opacity-40 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-xl">delete_sweep</span>
</button>
</div>
</div>
</div>
</div>
{/* Add Rule Button */}
<button className="mt-2 border-2 border-dashed border-white/10 hover:border-[#C8FF00]/30 rounded-2xl p-6 flex items-center justify-center gap-3 text-on-surface-variant hover:text-[#C8FF00] transition-all group">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-bold text-sm tracking-tight">Adicionar Regra Diferenciada</span>
</button>
</div>
</div>
{/* Sticky Save Footer for Desktop Integration */}
<div className="pt-6 flex justify-end gap-4">
<button className="px-8 py-4 text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-colors">DESCARTAR</button>
<button className="bg-[#C8FF00] text-[#4f6700] px-12 py-4 rounded-xl font-black text-sm shadow-[0px_0px_30px_rgba(200,255,0,0.3)] hover:scale-102 hover:shadow-[0px_0px_40px_rgba(200,255,0,0.5)] transition-all active:scale-95">
                    SALVAR REGRAS
                </button>
</div>
</div>
</main>
{/* BottomNavBar (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-[#0D0D0D]/80 backdrop-blur-lg z-50 rounded-t-[24px] border-t border-[#C8FF00]/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest mt-1">Barbers</span>
</a>
<div className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 mb-1 active:scale-90 transition-all duration-300">
<span className="material-symbols-outlined">percent</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest mt-1">Comms</span>
</div>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
</a>
</nav>

    </div>
  );
};

export default ComissEsPersonalizadasAdmin;
