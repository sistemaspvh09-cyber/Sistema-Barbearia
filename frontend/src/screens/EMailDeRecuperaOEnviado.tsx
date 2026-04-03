
import React from 'react';

const EMailDeRecuperaOEnviado: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Bar (Linear Flow Suppression Logic Applied: Shared Component Hidden) */}
<header className="fixed top-0 left-0 w-full h-16 flex items-center px-6 bg-transparent">
<div className="text-xl font-extrabold text-primary-container tracking-tight">
            BarberPro
        </div>
</header>
<main className="w-full max-w-md flex flex-col items-center">
{/* Success Visual Container */}
<div className="relative w-full aspect-square max-w-[280px] mb-12 flex items-center justify-center">
{/* Background Decorative Glow */}
<div className="absolute inset-0 bg-primary-container opacity-5 blur-[100px] rounded-full"></div>
{/* Main Icon Circle */}
<div className="relative w-48 h-48 rounded-full border border-outline-variant/20 flex items-center justify-center glass-effect">
<div className="w-32 h-32 rounded-full bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container text-7xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                        send
                    </span>
</div>
{/* Floating Element 1 */}
<div className="absolute -top-2 -right-2 w-12 h-12 rounded-xl glass-effect flex items-center justify-center border border-primary-container/20">
<span className="material-symbols-outlined text-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                    </span>
</div>
</div>
</div>
{/* Content Section */}
<div className="text-center space-y-4 mb-12">
<h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter leading-none">
                E-mail Enviado!
            </h1>
<p className="text-on-surface-variant text-body-md leading-relaxed px-4">
                Enviamos um link de recuperação para <span className="text-on-surface font-semibold">bruno@email.com</span>. Verifique sua caixa de entrada e spam.
            </p>
</div>
{/* Interactive Elements */}
<div className="w-full space-y-6">
<button className="w-full h-14 bg-primary-container text-on-primary-container font-bold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] neon-glow">
                Voltar para o Login
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
</button>
<div className="flex flex-col items-center gap-2">
<p className="text-on-surface-variant text-sm font-medium">Não recebeu o e-mail?</p>
<button className="text-primary-container font-bold text-sm tracking-wide uppercase px-4 py-2 hover:opacity-80 transition-opacity">
                    Reenviar agora
                </button>
</div>
</div>
</main>
{/* Footer Aesthetic */}
<footer className="fixed bottom-8 text-center">
<div className="flex items-center gap-4 opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 cursor-default">
<div className="w-px h-8 bg-outline-variant"></div>
<p className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
                Premium Barbering Experience
            </p>
<div className="w-px h-8 bg-outline-variant"></div>
</div>
</footer>
{/* Image descriptive data for context (Visual Identity Mockup) */}
<div className="hidden" data-alt="close-up of a high-end black metal razor against a dark textured marble surface with sharp lime green neon lighting reflections"></div>

    </div>
  );
};

export default EMailDeRecuperaOEnviado;
