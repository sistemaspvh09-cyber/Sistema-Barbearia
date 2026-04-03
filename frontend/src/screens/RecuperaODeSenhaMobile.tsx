
import React from 'react';

const RecuperaODeSenhaMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Bar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex items-center justify-between px-6 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<button className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-105 transition-transform duration-300 active:scale-95 text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-xl text-[#C8FF00]">BarberPro</span>
<div className="w-10"></div> {/* Spacer for symmetry */}
</header>
{/* Main Content Canvas */}
<main className="pt-24 pb-12 px-6 min-h-screen flex flex-col bg-mesh">
{/* Hero Branding Section */}
<div className="mb-12 mt-4">
<div className="inline-flex items-center justify-center p-3 rounded-2xl bg-surface-container-high mb-6 border border-outline-variant/20">
<span className="material-symbols-outlined text-[#C8FF00] text-3xl" data-icon="lock_reset">lock_reset</span>
</div>
<h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-3 leading-tight">
                Esqueci minha senha
            </h1>
<p className="text-on-surface-variant leading-relaxed">
                Não se preocupe, acontece com os melhores. Insira seu e-mail e enviaremos um código de recuperação.
            </p>
</div>
{/* Form Section */}
<section className="glass-card rounded-[32px] p-8 neon-glow mb-8">
<form className="space-y-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">E-mail Cadastrado</label>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-[#C8FF00] transition-colors duration-300">
<span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
</div>
<input className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-[#C8FF00] transition-all duration-300" id="email" placeholder="seu@email.com" type="email"/>
</div>
</div>
<button className="w-full bg-[#C8FF00] text-[#4f6700] font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(200,255,0,0.4)]" type="submit">
<span className="material-symbols-outlined font-bold" data-icon="send">send</span>
<span>Enviar Código</span>
</button>
</form>
</section>
{/* Auxiliary Navigation */}
<div className="mt-auto flex flex-col items-center gap-6">
<a className="text-on-surface-variant hover:text-[#C8FF00] transition-colors duration-300 flex items-center gap-2 group" href="#">
<span className="text-sm font-medium">Lembrou sua senha?</span>
<span className="text-sm font-bold text-[#C8FF00] group-hover:underline underline-offset-4 decoration-[#C8FF00]/30">Entrar</span>
</a>
{/* Editorial / Lifestyle Visual Accent */}
<div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden grayscale opacity-40 mix-blend-luminosity mt-4">
<img alt="Barbearia Profissional" className="w-full h-full object-cover" data-alt="cinematic close-up of a high-end barber shop interior with dark leather chairs and warm spotlights on vintage mirrors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz6fJpxjQV74XyjG-fkfBrx9iu3YPg8-Ys_jx1QEqPMRAMXmwknJgFRrTkfvZZAJKgLnCMjdfW33TWFBS2Mt2zhrnnzYsJrbNoArmi2OXDaRTa1cPXUNSswG7x2-SXbTHV_29YRagbEeswapI9CaHP3iRB7c81YjBxsFnwMjxCewYK4lbqkHiiP5p74YkzsCYFBAHiHENOFCJ21rlU3LbjT1PGhrI_y4NDF9nNq-tegF7LtVwBxNO0ctfsLwDBtURQne5yobaX3EJf"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
</div>
</div>
</main>
{/* Support Help Footer */}
<footer className="px-8 pb-10 text-center">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40">
            Precisa de ajuda? <a className="text-[#C8FF00]/60 hover:text-[#C8FF00]" href="#">Fale com o suporte</a>
</p>
</footer>

    </div>
  );
};

export default RecuperaODeSenhaMobile;
