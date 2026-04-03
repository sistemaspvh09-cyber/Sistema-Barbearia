
import React from 'react';

const HistRicoDeAgendamentosCliente: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex items-center justify-between px-6 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-4">
<button className="text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95 transition-all cubic-bezier(0.4,0,0.2,1)">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="text-xl font-black text-[#C8FF00] font-['Plus_Jakarta_Sans'] tracking-tight">BarberPro</h1>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#A0A0A0]">notifications</span>
</div>
</header>
<main className="pt-20 px-6 max-w-lg mx-auto">
{/* Header Section */}
<section className="mb-8">
<h2 className="text-3xl font-extrabold tracking-tight mb-2">Histórico</h2>
<p className="text-on-surface-variant text-sm font-medium">Gerencie seus compromissos e estilo.</p>
</section>
{/* Tabs Navigation */}
<div className="flex gap-2 mb-8 p-1 bg-surface-container-low rounded-2xl">
<button className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-primary-container text-on-primary shadow-lg transition-all duration-300">
                Próximos
            </button>
<button className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all duration-300">
                Passados
            </button>
</div>
{/* Section: Próximos */}
<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-on-surface font-bold text-lg">Agendamentos Ativos</h3>
<span className="px-3 py-1 bg-primary-container/10 text-primary-dim text-[10px] font-black uppercase tracking-widest rounded-full">2 pendentes</span>
</div>
{/* Active Card 1 */}
<div className="glass-card rounded-3xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
<div className="flex items-start gap-4">
<div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/30">
<img className="w-full h-full object-cover" data-alt="Professional male barber with stylish beard and tattoos working in a high-end modern barbershop with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmHLPBkD6jUIHuOLnYK9avBNVWHhfsA5HgFkst6WWPwFVKTbwTQ2ntDaEarKeJXMk5xFKU4zaBr-9-h_HYsciH0wH6KyckQG4V1JKA7UItE2hsvHbvmreBdOsKzhbub1J2bjKDBR8eTqZveR3tHDWpSJiX7RwyNDw33wPFjc1XVgnWiQKJ-_FQL_jZoBge0NCadsFaVEAII2y0wcbG1FRgHL3Wcaj0381xRHght1kzkoLWV3FydJHozzqdlW6zuIxrkuyQRTX_bdCB"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-lg leading-tight">Corte de Cabelo &amp; Barba</h4>
<span className="text-primary-dim font-black text-sm">R$ 85</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">com <span className="text-on-surface font-semibold">Ricardo Silva</span></p>
<div className="flex items-center gap-4 py-3 border-t border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dim text-lg">calendar_today</span>
<span className="text-xs font-bold text-on-surface">14 Nov, 2023</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dim text-lg">schedule</span>
<span className="text-xs font-bold text-on-surface">14:30</span>
</div>
</div>
</div>
</div>
<div className="mt-4 flex gap-3">
<button className="flex-1 py-3 bg-surface-container-highest rounded-xl text-xs font-bold hover:bg-surface-variant transition-colors">Reagendar</button>
<button className="flex-1 py-3 bg-primary-container text-on-primary rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(200,255,0,0.2)] hover:scale-105 active:scale-95 transition-all">Check-in</button>
</div>
</div>
{/* Active Card 2 */}
<div className="glass-card rounded-3xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
<div className="flex items-start gap-4">
<div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/30">
<img className="w-full h-full object-cover" data-alt="Close up of a skilled barber detailing a client's beard in a luxury grooming lounge with dark wood and industrial accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD4PJMuM2Fxw52D701dqPfVm09vzP6W6IBk-6at8hfIOWRJ8LIu8phZU7pEx09lat3gvYTg4e6sqUKhLdVdu5KaZmcw0cMi2-eOcySOJCJ0aiWGeA5R_Vhik2Fr6ypD4hGAvbnD7V0xuEDYLbxu6sjyfkmhOk8Jp_wKGXHqxqvqmfsTWeHWRoh_8ySNfUZDszGybTniAPS0OdIDqYk5VN6uRXoryRcq2QgEzmwibaq-xdp7IEsk_tHUMO2Pwfbndto_xPCH80Jsmdf"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-lg leading-tight">Barboterapia Luxo</h4>
<span className="text-primary-dim font-black text-sm">R$ 60</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">com <span className="text-on-surface font-semibold">Marcos Oliveira</span></p>
<div className="flex items-center gap-4 py-3 border-t border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dim text-lg">calendar_today</span>
<span className="text-xs font-bold text-on-surface">22 Nov, 2023</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dim text-lg">schedule</span>
<span className="text-xs font-bold text-on-surface">10:00</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Section: Passados */}
<div className="mt-12 space-y-6">
<h3 className="text-on-surface font-bold text-lg">Finalizados recentemente</h3>
{/* Past Card 1 */}
<div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-3xl p-4 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover grayscale" data-alt="Profile portrait of a professional barber in a dark uniform standing in a moody studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1meuWYlNGiTDKREqtvORdubJ5d_pbAKpEJKeQ2y1aAqR1kRHmJqD7P84X1YWOQQ5P9BM1CxZuyymFMU1zZXBh1QaaYz_u-s5vd8eVN9LlL8bB7KJ25PNozgJgUkr86yyjCYoksCcGvmahmVgv6PZvTZ7EPf6-4D3Yb3AC7PgrULA_CniAxc2fE6X7RCVpPRU-dHKnfNIODQQsHg2dV4xVv7upiv8qIYRV64YsaZeiSz6GReM6ilbR6liSpjeJYjQkklYeQWDGWjRS"/>
</div>
<div>
<p className="text-xs text-on-surface-variant">25 Out, 2023</p>
<h4 className="text-sm font-bold">Corte Social Clássico</h4>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Concluído</span>
<div className="flex text-primary-dim gap-0.5">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
</div>
<button className="w-full py-2 bg-surface-container border border-outline-variant/20 rounded-xl text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:border-primary-container/40 transition-colors">Repetir Serviço</button>
</div>
{/* Past Card 2 */}
<div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-3xl p-4 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover grayscale" data-alt="Barber tools on a dark tray including scissors and clippers with selective focus and moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPoUJfZ-qPJzYNUWkq01Xrqb3J1WKPLWoe-gbTTtUr72tl-Bohb_wE1cP4UGc-FBI-7NMBqLcV8xiL1u_yollljHP4WZ3GKn1WBVscX30uwEaueOwYAuiHhKUvVGTJ8Me7vW27dlmnAHx2yQ-X_7zN96ExuruPb7Amzk3FSVmPEozTmy3-lDGQf8KwMufTnjPWxhjiXDaqnplwGDpvb3PYhvQ6flIJik_lCQcNrjJuvuqiE1KmASTYw2iYdbesukTlpBNPLc8tXdU6"/>
</div>
<div>
<p className="text-xs text-on-surface-variant">10 Out, 2023</p>
<h4 className="text-sm font-bold">Aparagem de Barba</h4>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] font-black uppercase text-error mb-1">Cancelado</span>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#1A1919]/70 backdrop-blur-xl border-t border-[#C8FF00]/15 rounded-t-[24px] z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
{/* Início */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider">Início</span>
</a>
{/* Agenda */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined mb-1">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider">Agenda</span>
</a>
{/* Histórico (ACTIVE) */}
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-2xl px-4 py-2 shadow-[0_0_20px_rgba(200,255,0,0.2)] active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined mb-1">history</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider">Histórico</span>
</a>
{/* Perfil */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-2 hover:text-[#C8FF00] transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider">Perfil</span>
</a>
</nav>

    </div>
  );
};

export default HistRicoDeAgendamentosCliente;
