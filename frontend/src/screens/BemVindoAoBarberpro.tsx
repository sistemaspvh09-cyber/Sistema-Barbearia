
import React from 'react';

const BemVindoAoBarberpro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Hero Background Section */}
<div className="fixed inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 via-transparent to-background/90 z-10"></div>
<div className="absolute inset-0 bg-noise z-20 pointer-events-none"></div>
<img alt="Professional Barber Background" className="w-full h-full object-cover" data-alt="Cinematic close-up of a professional barber trimming a sharp beard, dark moody lighting with neon green highlights and soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZBMozZXaJKtVZKF4OAnC0wIp2toNgTkUDNPeI0ZHivZvVfS378km5UIZZ1DbDu4FBud_VuROTZyYyDCmpzJ9FFsuaIFwk_h3LxOCOs3A8KW6tQqb9Decgh22uR3dxfnW4dV7522aAN0Dv5y5IK7rORyLbJTdA5KSpwzLG6uyNJXfELzWoaH4PeJa6cIak-rt4fB_RW3EbyMCsF6jqgpYquLkGAj0RqrZft9rL9EHM_jpZV6CQ_coiy8nCDnd2nYoi37pAKG_-r2f"/>
</div>
{/* Main Content Canvas */}
<main className="relative z-30 flex flex-col items-center justify-between h-full px-8 pt-20 pb-12 text-center max-w-lg mx-auto">
{/* Identity Header */}
<div className="flex flex-col items-center gap-6 animate-fade-in">
<div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-[2.5rem] glass-border shadow-2xl relative">
<div className="absolute inset-0 bg-primary-container/10 rounded-[2.5rem] blur-xl"></div>
<span className="material-symbols-outlined text-primary-container text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div className="space-y-2">
<h1 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold tracking-tighter text-white uppercase neon-glow">
                    Barber<span className="text-primary-container">Pro</span>
</h1>
<p className="text-on-surface-variant text-base font-medium tracking-wide">
                    Sua melhor versão começa aqui.
                </p>
</div>
</div>
{/* Action Cluster */}
<div className="w-full space-y-4">
{/* Primary Action */}
<button className="group w-full h-14 bg-[#C8FF00] hover:bg-[#b8e600] text-[#4f6700] rounded-xl font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0px_0px_20px_rgba(200,255,0,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
<span className="material-symbols-outlined text-xl">login</span>
                Entrar com Minha Conta
            </button>
{/* Secondary Action */}
<button className="w-full h-14 bg-transparent border border-[#C8FF00]/30 hover:bg-[#C8FF00]/5 text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined text-xl">person_add</span>
                Criar Novo Perfil
            </button>
{/* Tertiary Footer Link */}
<div className="pt-6">
<a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white font-semibold text-xs uppercase tracking-widest transition-colors duration-300 group" href="#">
                    Continuar como Convidado
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* System Branding Anchor */}
<div className="flex items-center gap-2 opacity-30">
<div className="h-[1px] w-8 bg-on-surface-variant"></div>
<span className="text-[10px] font-bold uppercase tracking-widest">Estética de Precisão</span>
<div className="h-[1px] w-8 bg-on-surface-variant"></div>
</div>
</main>
{/* Visual Accents (Neon Noir Aesthetics) */}
<div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[40%] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none z-10"></div>
<div className="fixed top-[10%] right-[-5%] w-[30%] h-[30%] bg-primary-container/5 blur-[100px] rounded-full pointer-events-none z-10"></div>

    </div>
  );
};

export default BemVindoAoBarberpro;
