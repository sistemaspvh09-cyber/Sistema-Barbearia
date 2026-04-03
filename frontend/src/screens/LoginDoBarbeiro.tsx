
import React from 'react';

const LoginDoBarbeiro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Header / Logo Area */}
<header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5">
<div className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">
            BarberPro
        </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#A0A0A0]" data-icon="help_outline">help_outline</span>
</div>
</header>
{/* Main Content: Login Shell */}
<main className="flex-grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
{/* Background decorative elements */}
<div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C8FF00] rounded-full mix-blend-soft-light filter blur-[120px] opacity-10"></div>
<div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-surface-container-highest rounded-full mix-blend-soft-light filter blur-[120px] opacity-20"></div>
<div className="w-full max-w-md z-10">
{/* Hero Text */}
<div className="text-center mb-10">
<h1 className="text-3xl font-extrabold tracking-tight mb-3">Acesso do Barbeiro</h1>
<p className="text-on-surface-variant font-medium">Pronto para começar seus atendimentos?</p>
</div>
{/* Login Card */}
<div className="bg-surface-container-low rounded-3xl p-8 glass-border shadow-2xl relative overflow-hidden group">
{/* Subtle Top Shine */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8FF00]/20 to-transparent"></div>
<form className="space-y-6">
{/* Email Field */}
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">E-mail Profissional</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-outline" data-icon="mail">mail</span>
<input className="w-full bg-surface-container border-none rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all duration-300" id="email" name="email" placeholder="nome@barberpro.com" type="email"/>
</div>
</div>
{/* Password Field */}
<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="password">Senha</label>
<a className="text-xs font-bold text-[#C8FF00] hover:underline underline-offset-4 transition-all" href="#">Esqueci minha senha</a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-outline" data-icon="lock">lock</span>
<input className="w-full bg-surface-container border-none rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all duration-300" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
</div>
{/* Remember Me (Optional refinement) */}
<div className="flex items-center gap-3 px-1">
<input className="w-5 h-5 rounded bg-surface-container border-outline-variant text-[#C8FF00] focus:ring-offset-[#0D0D0D]" id="remember" type="checkbox"/>
<label className="text-sm text-on-surface-variant font-medium" htmlFor="remember">Lembrar de mim</label>
</div>
{/* Submit Button */}
<button className="glow-button w-full bg-[#C8FF00] text-[#4f6700] font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300" type="submit">
                        Entrar no Meu Painel
                        <span className="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
</div>
{/* Bottom Support Info */}
<div className="mt-8 text-center">
<p className="text-sm text-on-surface-variant">
                    Problemas com o acesso? 
                    <a className="text-on-surface font-bold hover:text-[#C8FF00] transition-colors" href="#">Fale com o suporte.</a>
</p>
</div>
</div>
</main>
{/* Footer Section */}
<footer className="bg-[#0D0D0D] w-full py-8 mt-auto border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto">
<div className="flex items-center gap-4">
<div className="text-[#C8FF00] font-bold">BarberPro</div>
<p className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-[#A0A0A0]">
                    © 2024 BarberPro Precision Management. All rights reserved.
                </p>
</div>
<div className="flex gap-6">
<a className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-[#A0A0A0] hover:text-[#C8FF00] underline-offset-4 hover:underline transition-all duration-300" href="?module=acesso&screen=suporte-echamados">Privacy Policy</a>
<a className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-[#A0A0A0] hover:text-[#C8FF00] underline-offset-4 hover:underline transition-all duration-300" href="?module=acesso&screen=suporte-echamados">Terms of Service</a>
<a className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-[#A0A0A0] hover:text-[#C8FF00] underline-offset-4 hover:underline transition-all duration-300" href="?module=acesso&screen=suporte-echamados">Support</a>
</div>
</div>
</footer>

    </div>
  );
};

export default LoginDoBarbeiro;
