
import React from 'react';

const SucessoNoResgate: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar Fragment (Fixed as per JSON but without nav for transactional focus) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex items-center justify-between px-6 h-16 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex items-center gap-3">
<span className="text-xl font-black text-[#C8FF00] tracking-tighter font-headline uppercase">BARBERPRO</span>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
<img alt="Ricardo Almeida" data-alt="professional male avatar with stylish haircut and groomed beard for premium barber service profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhQ_YMOFPXjKGB4C3ZSZHvzPMR02XN7DUNmh7FeJzkgtQfFXxIb9jdWq3qKL7N3lMcyvva02JXP4Elv3v2EuM6qN-5jXFlRvbqbOfKJtHTX7qrQSAEw9eiYwMc0wyJ6dMVBaqM4hwfeLBRR2s6PA_2vgC2TLNS2ZNXQwQQRrsFIDe8b5KU9krzujoP-oNiT2AmFnv3HZ079ROfWNyXAkPnwz_ullnq2UjIE-yMmrpRjITF4UJIiRf3ZYAZQCKgHwEeTnd5aa86RHb8"/>
</div>
</header>
<main className="min-h-screen pt-16 pb-12 flex flex-col items-center justify-center px-6 bg-mesh">
{/* Success Content Container */}
<div className="w-full max-w-md flex flex-col items-center text-center">
{/* Check Icon with Neon Glow */}
<div className="relative mb-8">
<div className="absolute inset-0 bg-primary-container/20 blur-3xl rounded-full"></div>
<div className="relative w-32 h-32 bg-surface-container rounded-full flex items-center justify-center border border-primary/20 glow-primary">
<span className="material-symbols-outlined text-primary-fixed text-7xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
</div>
{/* Headlines */}
<h1 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tighter uppercase text-on-surface mb-2">
                Resgate Confirmado!
            </h1>
<p className="text-on-surface-variant font-medium mb-12 max-w-[280px]">
                Corte Grátis resgatado para <span className="text-on-surface">Ricardo Almeida</span>
</p>
{/* Voucher Card (Bento/Glassmorphism style) */}
<div className="w-full bg-surface-container border border-outline-variant/15 p-8 rounded-3xl relative overflow-hidden mb-12 shadow-2xl">
{/* Decorative steel texture */}
<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-gradient-to-br from-surface-tint to-transparent"></div>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Código do Voucher</p>
<div className="flex items-center justify-center gap-3 mb-2">
<span className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-primary-fixed">BP-9982X</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent my-6"></div>
<p className="text-xs text-on-surface-variant/80 font-medium">Apresente este código na sua próxima visita para validar o benefício.</p>
</div>
{/* Details List */}
<div className="w-full grid grid-cols-1 gap-4 mb-12">
<div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-lg">event_available</span>
<span className="text-sm font-semibold text-on-surface-variant">Data do Resgate</span>
</div>
<span className="text-sm font-bold">24 Mai, 2024</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-lg">monetization_on</span>
<span className="text-sm font-semibold text-on-surface-variant">Pontos Utilizados</span>
</div>
<span className="text-sm font-bold text-primary-fixed">-500 pts</span>
</div>
</div>
{/* Primary Action */}
<button className="w-full py-5 bg-primary-container text-inverse-primary font-headline font-extrabold text-sm uppercase tracking-widest rounded-2xl shadow-[0px_0px_20px_rgba(200,255,0,0.2)] hover:shadow-[0px_0px_30px_rgba(200,255,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300">
                Finalizar e Voltar
            </button>
{/* Secondary Decorative Info */}
<div className="mt-8 flex items-center gap-2 text-on-surface-variant/40">
<span className="material-symbols-outlined text-sm">verified_user</span>
<span className="text-[10px] uppercase font-bold tracking-widest">Segurança Garantida BarberPro</span>
</div>
</div>
</main>
{/* Background Decorative Elements */}
<div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    </div>
  );
};

export default SucessoNoResgate;
