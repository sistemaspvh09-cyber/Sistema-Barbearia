
import React from 'react';

const RedefinirSenhaMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="bg-[#0D0D0D]/70 backdrop-blur-xl text-[#C8FF00] font-plus-jakarta-sans antialiased tracking-tight fixed top-0 w-full z-50 border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4">
<button className="active:scale-95 transition-transform duration-200">
<span className="material-symbols-outlined text-[#C8FF00]">arrow_back_ios_new</span>
</button>
<span className="text-xl font-extrabold tracking-tighter text-[#C8FF00] uppercase">BarberPro</span>
</div>
<button className="active:scale-95 transition-transform duration-200">
<span className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300">help_outline</span>
</button>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center justify-center px-6 pt-20 pb-32">
{/* Aesthetic Background Elements */}
<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/5 rounded-full blur-[100px]"></div>
<div className="absolute top-1/2 -right-32 w-80 h-80 bg-primary-container/3 rounded-full blur-[120px]"></div>
</div>
<div className="w-full max-w-md space-y-8 relative z-10">
{/* Header Section */}
<div className="space-y-2 text-center">
<h1 className="text-3xl font-extrabold tracking-tight neon-glow">Criar Nova Senha</h1>
<p className="text-on-surface-variant text-sm font-medium px-4">Escolha uma senha forte para sua segurança</p>
</div>
{/* Reset Password Card */}
<div className="bg-surface-container p-8 rounded-[24px] ghost-border shadow-2xl space-y-6">
{/* Input Group: New Password */}
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-[0.1em] uppercase text-on-surface-variant ml-1">Nova Senha</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">lock</span>
<input className="w-full h-14 bg-surface-container-low rounded-xl pl-12 pr-4 border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container bg-transparent transition-all outline-none placeholder:text-outline/50" placeholder="••••••••" type="password"/>
</div>
</div>
{/* Input Group: Confirm Password */}
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-[0.1em] uppercase text-on-surface-variant ml-1">Confirmar Senha</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">verified_user</span>
<input className="w-full h-14 bg-surface-container-low rounded-xl pl-12 pr-4 border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container bg-transparent transition-all outline-none placeholder:text-outline/50" placeholder="••••••••" type="password"/>
</div>
</div>
{/* Password Strength Checklist (Premium Pattern) */}
<div className="grid grid-cols-2 gap-3 py-2">
<div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-xs text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Mín. 8 caracteres
                    </div>
<div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-xs">circle</span>
                        Letra maiúscula
                    </div>
<div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-xs">circle</span>
                        Número ou Símbolo
                    </div>
<div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-xs">circle</span>
                        Sem espaços
                    </div>
</div>
{/* Primary Action */}
<button className="w-full h-14 bg-[#C8FF00] text-[#4f6700] font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(200,255,0,0.3)] hover:shadow-[0_0_25px_rgba(200,255,0,0.5)]">
                    Salvar Nova Senha
                    <span className="material-symbols-outlined">security</span>
</button>
</div>
{/* Help/Alt Action */}
<div className="text-center">
<button className="text-sm font-bold text-on-surface-variant hover:text-[#C8FF00] transition-colors flex items-center justify-center gap-2 mx-auto">
                    Não recebeu o código? <span className="text-[#C8FF00]">Tentar novamente</span>
</button>
</div>
</div>
</main>
{/* BottomNavBar (Suppressed as per logic for Transactional/Security Focus, but included because it was specifically requested in prompt: "Manter BottomNavBar") */}
{/* The prompt overrides the 'Linear/Transactional' suppression rule because it explicitly asked for it */}
<nav className="bg-[#1A1919]/80 backdrop-blur-lg text-[#C8FF00] text-[10px] font-bold tracking-wide uppercase fixed bottom-0 w-full z-50 rounded-t-[24px] border-t border-[#C8FF00]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<div className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-safe">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:bg-[#C8FF00]/5 transition-all active:scale-90 duration-300" href="?module=overview">
<span className="material-symbols-outlined mb-1">grid_view</span>
<span>Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:bg-[#C8FF00]/5 transition-all active:scale-90 duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined mb-1">event_available</span>
<span>Agenda</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:bg-[#C8FF00]/5 transition-all active:scale-90 duration-300" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined mb-1">content_cut</span>
<span>Serviços</span>
</a>
{/* Perfil is Active because Reset Password is an Account-related action */}
<a className="flex flex-col items-center justify-center text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.6)] active:scale-90 transition-all duration-300" href="?module=clientes&screen=perfil-detalhado-do-cliente-crm">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
<span>Perfil</span>
</a>
</div>
</nav>

    </div>
  );
};

export default RedefinirSenhaMobile;
