
import React from 'react';

const PGinaDeErro404: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Supressed Navigation Shell based on "Success/Error/Focused Journey" rule */}
{/* Main Content Canvas */}
<main className="w-full max-w-4xl flex flex-col items-center justify-center text-center space-y-12">
{/* Brand Identity Section */}
<header className="mb-4">
<h1 className="text-3xl font-black tracking-tighter text-primary-container font-headline flex items-center gap-2">
<span className="material-symbols-outlined text-4xl" data-icon="content_cut">content_cut</span>
                BarberPro
            </h1>
</header>
{/* Hero Error State Section */}
<section className="relative flex flex-col items-center">
{/* Visual Anchor: Broken Scissors Neon Icon */}
<div className="relative mb-8">
<div className="absolute inset-0 bg-primary-container/20 blur-[80px] rounded-full"></div>
<div className="relative glass-card p-10 rounded-[3rem] shadow-2xl">
<div className="flex items-center justify-center relative">
{/* Scissors Icon with "Broken" effect using rotation and split */}
<div className="flex gap-4 items-center">
<span className="material-symbols-outlined text-9xl text-primary-container transform -rotate-45 opacity-80" data-icon="content_cut">content_cut</span>
<div className="h-24 w-[2px] bg-error rotate-12 opacity-50"></div>
<span className="material-symbols-outlined text-7xl text-on-surface-variant transform rotate-[160deg] opacity-40 translate-y-8" data-icon="content_cut">content_cut</span>
</div>
</div>
</div>
{/* Neon Noir Accents */}
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl"></div>
</div>
{/* Error Message Typography */}
<div className="space-y-4 max-w-xl">
<h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface font-headline leading-tight">
                    Ops! Corte <span className="text-primary-container underline decoration-primary-container/30">mal feito</span>.
                </h2>
<p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                    Página não encontrada ou em manutenção. Nosso barbeiro digital está afiando as tesouras para voltar logo.
                </p>
</div>
</section>
{/* Action Section */}
<section className="flex flex-col sm:flex-row gap-6 mt-8">
<a className="group relative px-8 py-4 bg-primary-container text-on-primary rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(200,255,0,0.2)] hover:shadow-[0_0_30px_rgba(200,255,0,0.4)] flex items-center gap-3" href="?module=overview">
<span className="material-symbols-outlined font-bold" data-icon="dashboard">dashboard</span>
                Voltar ao Dashboard
            </a>
<a className="px-8 py-4 bg-surface-container border border-outline-variant/20 text-on-surface rounded-xl font-bold text-lg transition-all duration-300 hover:bg-surface-container-high hover:text-primary-container flex items-center gap-3" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
                Falar com Suporte
            </a>
</section>
{/* Background Editorial Imagery */}
<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-container/10 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-surface-tint/5 blur-[120px] rounded-full"></div>
{/* Contextual Background Image (Muted) */}
<div className="absolute inset-0 grayscale mix-blend-overlay">
<img alt="" className="w-full h-full object-cover" data-alt="dramatic interior of a luxury barber shop with leather chairs and moody lighting in black and white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC56g9lhQAE7lttIUtd0fEpaXOjfY6hHqfbW1c4b-bI4hVQv4LDZqbs4Y3zLB2RpIg2w-avJJEi_Iwd82P_o4icJUa6diZDB9aW-kgzO9Bu6vyx3LF0mJZihUgTN8QcyuPX9Xyhps-Z2Yp4EKE3BLCB6jQIw1fPeqIDGD4g6nQwOMKhNU6zZwkgg_W0NhYwEQO7sIAwIXC4_RrP6LeQ6oenIGFx4ZUEjajEJak4KKCpj0MPQ0N-PAhApceS2Xf_OZxJbvycjeB4_TGr"/>
</div>
</div>
</main>
{/* Footer Identity (Minimal) */}
<footer className="mt-auto py-8 text-on-surface-variant/40 text-xs font-bold tracking-widest uppercase flex items-center gap-4">
<span>© 2024 BarberPro Premium</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>Status do Sistema: Operacional</span>
</footer>

    </div>
  );
};

export default PGinaDeErro404;
