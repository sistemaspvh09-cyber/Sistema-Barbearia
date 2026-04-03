
import React from 'react';

const TelaDeLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
<main className="w-full max-w-md flex flex-col items-center space-y-12">
{/* Logo Section */}
<div className="flex flex-col items-center space-y-2">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary-container">
                BarberPro
            </h1>
<p className="text-on-surface-variant font-medium tracking-wide text-xs uppercase opacity-80">
                A Estética da Precisão
            </p>
</div>
{/* Login Form Card */}
<div className="w-full glass-card rounded-3xl p-8 md:p-10 space-y-8 neon-glow">
<div className="space-y-2">
<h2 className="text-2xl font-bold text-on-surface tracking-tight">Bem-vindo de volta</h2>
<p className="text-on-surface-variant text-sm">Acesse sua conta para gerenciar sua agenda.</p>
</div>
<form action="#" className="space-y-6">
{/* Email Input */}
<div className="space-y-2">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="email">E-mail</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary-container transition-colors">
<span className="material-symbols-outlined">mail</span>
</div>
<input className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm rounded-2xl block pl-12 pr-4 py-4 focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none placeholder:text-outline" id="email" name="email" placeholder="seu@email.com" required="" type="email"/>
</div>
</div>
{/* Password Input */}
<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="password">Senha</label>
<a className="text-xs font-bold text-primary-container hover:underline transition-all" href="#">Esqueci minha senha</a>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary-container transition-colors">
<span className="material-symbols-outlined">lock</span>
</div>
<input className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm rounded-2xl block pl-12 pr-4 py-4 focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none placeholder:text-outline" id="password" name="password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
{/* Submit Button */}
<button className="w-full bg-primary-container text-on-primary font-bold py-4 rounded-2xl neon-glow-btn transition-all duration-300 active:scale-95 transform hover:scale-[1.02] flex items-center justify-center space-x-2" type="submit">
<span>Entrar</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</form>
{/* Social Login Divider */}
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-outline-variant/20"></div>
<span className="flex-shrink mx-4 text-outline text-[10px] font-bold uppercase tracking-[0.2em]">Ou continue com</span>
<div className="flex-grow border-t border-outline-variant/20"></div>
</div>
{/* Social Buttons */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center space-x-2 bg-surface-container text-on-surface py-3 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-xl">google</span>
<span className="text-xs font-bold">Google</span>
</button>
<button className="flex items-center justify-center space-x-2 bg-surface-container text-on-surface py-3 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>ios</span>
<span className="text-xs font-bold">Apple</span>
</button>
</div>
</div>
{/* Footer Link */}
<p className="text-on-surface-variant text-sm">
            Não tem uma conta? 
            <a className="text-primary-container font-bold hover:underline ml-1" href="#">Criar conta</a>
</p>
{/* Aesthetic Decoration */}
<div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
</main>
{/* Visual Accents (Neon Noir Style) */}
<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-container/5 blur-[120px] rounded-full"></div>
<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary-container/5 blur-[120px] rounded-full"></div>
</div>

    </div>
  );
};

export default TelaDeLogin;
