
import React from 'react';

const RedefinirSenhaDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Bar (Shared Component Logic Applied) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] font-plus-jakarta-sans antialiased tracking-tight h-16 flex items-center justify-between px-8">
<div className="text-xl font-extrabold tracking-tighter text-[#C8FF00] uppercase">
            BarberPro
        </div>
<div className="flex items-center gap-4">
<button className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
</header>
<main className="flex-grow flex items-center justify-center p-6 mt-16">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/3 rounded-full blur-[100px]"></div>
</div>
{/* Reset Password Card */}
<div className="w-full max-w-[480px] glass-card rounded-[24px] p-10 relative z-10 shadow-2xl">
<div className="mb-10 text-center">
<h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-3">Nova Senha</h1>
<p className="text-on-surface-variant text-sm font-medium">Crie uma senha forte para proteger sua conta no BarberPro.</p>
</div>
<form className="space-y-8">
{/* Field: Nova Senha */}
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-widest text-[#A0A0A0] px-1">Nova Senha</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">lock</span>
<input className="w-full bg-surface-container-low border-0 rounded-xl py-4 pl-12 pr-12 text-on-surface focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline/50" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary-container transition-colors" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
{/* Strength Meter */}
<div className="pt-2 px-1">
<div className="flex justify-between items-center mb-1.5">
<span className="text-[10px] font-bold uppercase tracking-wider text-primary-container">Força da Senha: Forte</span>
</div>
<div className="flex gap-1.5 h-1">
<div className="flex-1 bg-primary-container rounded-full password-strength-meter"></div>
<div className="flex-1 bg-primary-container rounded-full password-strength-meter"></div>
<div className="flex-1 bg-primary-container rounded-full password-strength-meter"></div>
</div>
</div>
</div>
{/* Field: Confirmar Nova Senha */}
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-widest text-[#A0A0A0] px-1">Confirmar Nova Senha</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">lock</span>
<input className="w-full bg-surface-container-low border-0 rounded-xl py-4 pl-12 pr-12 text-on-surface focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline/50" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary-container transition-colors" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
{/* Action Button */}
<div className="pt-4">
<button className="glow-button w-full bg-primary-container text-on-primary font-extrabold py-5 rounded-xl uppercase tracking-tighter text-lg transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                        Redefinir Senha
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>arrow_forward</span>
</button>
</div>
{/* Back to Login */}
<div className="text-center pt-2">
<a className="text-sm font-bold text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center gap-1 group" href="#">
<span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Voltar para o Login
                    </a>
</div>
</form>
</div>
{/* Aesthetic Background Elements */}
<div className="hidden lg:block fixed left-12 bottom-12 max-w-xs opacity-40">
<div className="space-y-4">
<div className="h-[1px] w-12 bg-primary-container"></div>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Estética da Precisão • BarberPro v2.0</p>
</div>
</div>
</main>
{/* Footer Decoration */}
<footer className="h-16 flex items-center justify-center px-8 text-[10px] font-bold text-[#A0A0A0] uppercase tracking-widest">
        © 2024 BarberPro Sistemas de Gestão S.A.
    </footer>

    </div>
  );
};

export default RedefinirSenhaDesktop;
