
import React from 'react';

const AgendamentoProfissionalEHorRio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex justify-between items-center px-6 h-16 w-full max-w-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="content_cut">content_cut</span>
<h1 className="text-xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
</div>
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</button>
</div>
</header>
<main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
{/* Selected Service Indicator */}
<section className="relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/15 p-5 shadow-2xl">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl" data-icon="content_cut">content_cut</span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-1">Serviço Selecionado</p>
<h2 className="text-xl font-extrabold tracking-tight">Corte Degradê</h2>
</div>
<div className="text-right">
<p className="text-[#C8FF00] text-2xl font-black tracking-tighter">R$ 85,00</p>
<p className="text-on-surface-variant text-xs">45 min</p>
</div>
</div>
</section>
{/* Barber Selection Section */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<h3 className="text-lg font-extrabold tracking-tight">Escolha o Barbeiro</h3>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Especialistas</span>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
{/* Barber Card 1 (Active) */}
<div className="flex-shrink-0 flex flex-col items-center gap-3 group">
<div className="relative p-1 rounded-full border-2 border-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.2)]">
<img alt="Thiago" className="w-20 h-20 rounded-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-300" data-alt="Close-up portrait of a professional barber with a neat beard and stylish haircut in a high-end salon setting with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZviPpmnOae34Ja5pzgyVSysw7F3PffNmUZSV1wtwfOjSLcLwgcr07xqVKZZdeVYUG0XIf-LIGUP37N5K6D29741kOFnx9pZ5ynSMizQGv0G1vdtUKCfP33lxIYYgmJhPZqyCzJ1043Xe5zVmNq-g2aaSkP6B792x4sSOwthIlW5eF47gaisQ0_67PMxr-ntCuJ3c8MPAJXfhbOrE9dOwasyzG3K-cc77GkEGhmEe5jofIa_CeqwwOzHnxtcBiddUfifyNXB-W9N2I"/>
<div className="absolute bottom-0 right-0 bg-[#C8FF00] text-[#4f6700] rounded-full p-1 border-2 border-surface">
<span className="material-symbols-outlined text-[14px]" data-icon="check" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
</div>
</div>
<div className="text-center">
<p className="font-bold text-sm">Thiago</p>
<p className="text-[10px] text-on-surface-variant leading-tight">Mestre do Degradê</p>
</div>
</div>
{/* Barber Card 2 */}
<div className="flex-shrink-0 flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<div className="p-1 rounded-full border-2 border-transparent">
<img alt="Marcus" className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Portrait of a young male barber smiling, blurred barbershop background with professional equipment and industrial decor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1mLmY_MFQTkR-tIpI26rctpcp1nYRDxqqwZz_8qE7i850OlMFVEQMp5jWzHgRsPJj8zvuP6QjnSGk3gHtMrkm7voCjcrHMrCI4GnYHvL53Z14LhcmPfirROAH5b7EKQ4mbLKMY_SGwO_epeQqOgL35RQGmqZlTEOkKKommLZyq7HkMIWsjbfhCIgGrbdFdOHKN23e4f0ramYfaAEkdGcQ3LbwxqC5dzI1FdOLGY0WTMkTK5XCbVZGp0WJFdmy8FmLFXNflMyaYA0Q"/>
</div>
<div className="text-center">
<p className="font-bold text-sm">Marcus</p>
<p className="text-[10px] text-on-surface-variant leading-tight">Visagista</p>
</div>
</div>
{/* Barber Card 3 */}
<div className="flex-shrink-0 flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<div className="p-1 rounded-full border-2 border-transparent">
<img alt="Felipe" className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Man with a groomed beard and classic hair styling in a moody dark interior barber shop environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZbsawY9TNuEJq13mO3ENeJZ5grHFxXrO6eFMQd7zaMWvhlLOt8uQOeBqQu5CFJX4CKYojHNt5utqxnnxcqeYlQo1Eb1bk1ErI_4sOWLaL2SFSdNbC9_jTq0iOJsPQDpSIyaFXz3gHSARtWucutztq680U9dw2vJwgtbUoJSpXr8fi9lSqNyisiEbORJ_Uw3WJePldzHImy9IW4HqN4hrbBqL76emBAZGCFU-z1b1F997B3V1jK5rcgBxisO10iaLv6iU31cvQL9eU"/>
</div>
<div className="text-center">
<p className="font-bold text-sm">Felipe</p>
<p className="text-[10px] text-on-surface-variant leading-tight">Barba &amp; Toalha</p>
</div>
</div>
{/* Barber Card 4 */}
<div className="flex-shrink-0 flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<div className="p-1 rounded-full border-2 border-transparent">
<img alt="André" className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Close up of a professional male stylist looking confident in a modern studio with cool lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_qw6rdggLOrEIXGDwOsqiKd-XABwXl-sNLU04-pmmCTKVlNxhpBE_XJzyBskmyye-LJTlOavpV_u30G4T5ogNC6onTRECGBGIpmbCWx49NdML3GthRBtkKJghPyEoCN1cTkBmcn6T3wPBEuwmbGAfm-uG-nZykRXiszuRSz-h0WyI3X8zak1CibTGpYIsV_soS07zFQUiwhffTJKjAo7YByk7q4hIV7LVL3vKIAucG4Wc7gOCYADpvnhnVGAbFNSFQtZo_97HgSB"/>
</div>
<div className="text-center">
<p className="font-bold text-sm">André</p>
<p className="text-[10px] text-on-surface-variant leading-tight">Corte Old School</p>
</div>
</div>
</div>
</section>
{/* Date Selection Section */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<h3 className="text-lg font-extrabold tracking-tight">Escolha o Horário</h3>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Outubro</span>
</div>
{/* Horizontal Calendar */}
<div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-surface-container border border-outline-variant/10 opacity-50">
<span className="text-[10px] font-bold uppercase opacity-60">Seg</span>
<span className="text-xl font-black">21</span>
</div>
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/30 shadow-[0_0_20px_rgba(200,255,0,0.1)]">
<span className="text-[10px] font-bold uppercase text-[#C8FF00]">Ter</span>
<span className="text-xl font-black text-[#C8FF00]">22</span>
</div>
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-surface-container border border-outline-variant/10">
<span className="text-[10px] font-bold uppercase opacity-60">Qua</span>
<span className="text-xl font-black">23</span>
</div>
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-surface-container border border-outline-variant/10">
<span className="text-[10px] font-bold uppercase opacity-60">Qui</span>
<span className="text-xl font-black">24</span>
</div>
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-surface-container border border-outline-variant/10">
<span className="text-[10px] font-bold uppercase opacity-60">Sex</span>
<span className="text-xl font-black">25</span>
</div>
<div className="flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-surface-container border border-outline-variant/10">
<span className="text-[10px] font-bold uppercase opacity-60">Sáb</span>
<span className="text-xl font-black">26</span>
</div>
</div>
{/* Time Slots Grid */}
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">09:00</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">10:30</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold opacity-30 cursor-not-allowed line-through">11:00</button>
<button className="py-3 px-4 rounded-xl bg-[#C8FF00] text-[#4f6700] text-sm font-black shadow-[0_0_20px_rgba(200,255,0,0.4)] scale-105">14:00</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">14:30</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">15:00</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">16:30</button>
<button className="py-3 px-4 rounded-xl bg-surface-container border border-outline-variant/10 text-sm font-bold hover:border-[#C8FF00]/50 transition-colors">18:00</button>
</div>
</section>
</main>
{/* Fixed Action Bar & Progress */}
<footer className="fixed bottom-0 left-0 w-full z-50">
{/* Progress Bar (Step 2 of 3) */}
<div className="bg-[#1A1919]/90 backdrop-blur-md px-6 pt-4 pb-2 border-t border-[#C8FF00]/10">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Progresso</span>
<span className="text-[10px] font-bold text-[#C8FF00] uppercase tracking-widest">Etapa 2 de 3</span>
</div>
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-[#C8FF00] w-2/3 shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
</div>
</div>
{/* Bottom Navigation Shell (Labels from JSON) */}
<nav className="bg-[#1A1919]/80 backdrop-blur-lg flex justify-around items-center h-20 px-4 pb-safe border-t border-[#C8FF00]/10 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-1 hover:bg-[#1A1919] transition-all duration-300 active:scale-90 transition-transform">
<span className="material-symbols-outlined mb-1" data-icon="flatware">flatware</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest">Serviço</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(200,255,0,0.2)] active:scale-90 transition-transform">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest">Barbeiro</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-1 hover:bg-[#1A1919] transition-all duration-300 active:scale-90 transition-transform">
<span className="material-symbols-outlined mb-1" data-icon="schedule">schedule</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest">Horário</span>
</div>
</nav>
{/* CTA Button Overlaid */}
<div className="absolute -top-16 right-6">
<button className="bg-[#C8FF00] text-[#4f6700] flex items-center gap-2 px-8 py-4 rounded-full font-black shadow-[0_10px_30px_rgba(200,255,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
<span>PRÓXIMO</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</footer>

    </div>
  );
};

export default AgendamentoProfissionalEHorRio;
