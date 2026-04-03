
import React from 'react';

const SolicitarRecuperaODeSenha: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation (Shell suppressed per rules for Transactional screen, but keeping TopAppBar structure from JSON as anchor) */}
<header className="flex items-center w-full px-4 h-16 fixed top-0 z-50 bg-transparent">
<button className="flex items-center justify-center w-10 h-10 rounded-full transition-transform scale-95 active:scale-90 hover:opacity-80">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="arrow_back">arrow_back</span>
</button>
</header>
<main className="flex-grow flex items-center justify-center px-6 relative overflow-hidden">
{/* Ambient Background Aesthetic */}
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary-container/10 rounded-full blur-[100px]"></div>
<div className="w-full max-w-md z-10">
{/* Glassmorphism Card */}
<div className="glass-panel p-8 md:p-10 rounded-xl">
{/* Header Section */}
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-surface-container-highest">
<span className="material-symbols-outlined text-primary-fixed text-3xl" data-icon="lock_reset">lock_reset</span>
</div>
<h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-3 font-headline">Recuperar Senha</h1>
<p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                        Esqueceu sua senha? Não se preocupe. Digite seu e-mail abaixo e enviaremos as instruções para você.
                    </p>
</div>
{/* Form Section */}
<form className="space-y-6">
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">E-mail</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary-fixed transition-colors text-xl" data-icon="mail">mail</span>
</div>
<input className="w-full bg-surface-container-low border-none text-on-surface rounded-xl py-4 pl-12 pr-4 focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline" id="email" name="email" placeholder="exemplo@email.com" type="email"/>
</div>
</div>
<button className="w-full bg-[#C8FF00] hover:bg-primary-fixed-dim text-[#4f6700] font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] neon-glow flex items-center justify-center gap-2" type="submit">
<span>Enviar Instruções</span>
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</form>
{/* Footer Action */}
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary-fixed transition-colors group" href="#">
<span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform" data-icon="arrow_back">arrow_back</span>
                        Voltar para o login
                    </a>
</div>
</div>
{/* Additional Branding Context */}
<div className="mt-8 flex justify-center opacity-40">
<div className="flex items-center gap-2">
<div className="w-6 h-[2px] bg-primary-container"></div>
<span className="text-xs font-bold tracking-[0.2em] text-[#C8FF00] uppercase">BarberPro Elite</span>
<div className="w-6 h-[2px] bg-primary-container"></div>
</div>
</div>
</div>
</main>
{/* Visual Decoration / Editorialism */}
<div className="hidden lg:block fixed bottom-12 left-12 max-w-[200px]">
<div className="relative h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Barber profile" className="object-cover h-full w-full" data-alt="close-up of professional barber tools and a vintage barber chair in a dark moody high-end barbershop with neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCaRI645SH5SHWGRG1JMtvE_sKat51a2TXKreHU6_LDdFYi7pZ2swXMi6yexZ3YYCZCb135hC0Sv0AnRqVSnFH3G9WuXwOzSpm3YI8zLwBMSXvyZwM1sVzGkPiy6eB4q2HFAOStFMHs7VLUaDvn6g1iIOeh-TTpIBDWB5xxFiS0VHcP-9hZJU482uPPlCPt04t0TTZ-LLoLk-KjX4WtIFP-7Xv6U1yIBSCssxxXgQm9KpfipwBt5smAxWFGSHQpYzRrGdM83F4AQWJ"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
<p className="text-[10px] uppercase tracking-tighter mt-2 text-outline">Professional Standard Since 2024</p>
</div>

    </div>
  );
};

export default SolicitarRecuperaODeSenha;
