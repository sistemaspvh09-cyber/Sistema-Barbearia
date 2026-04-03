
import React from 'react';

const OnboardingDeBarbeiro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Header / Progress Indicator */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-primary/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center px-6 py-4 max-w-5xl mx-auto w-full">
<span className="text-2xl font-extrabold tracking-tighter text-primary-container">BarberPro</span>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end">
<span className="text-[10px] uppercase tracking-widest font-bold text-primary-container">Progresso do Perfil</span>
<span className="text-xs text-on-surface-variant font-medium">Passo 1 de 3: Identidade</span>
</div>
<div className="w-32 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-primary-container shadow-[0_0_10px_rgba(200,255,0,0.5)]"></div>
</div>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow pt-32 pb-12 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
{/* Left Column: Context & Inspiration */}
<div className="lg:col-span-5 space-y-8">
<section>
<h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                    Bem-vindo à <span className="text-primary-container">Precisão</span>.
                </h1>
<p className="text-on-surface-variant text-lg leading-relaxed">
                    Sua jornada para o topo começa aqui. Vamos configurar sua estação de trabalho digital em poucos minutos.
                </p>
</section>
<div className="space-y-4">
{/* Bento Info Cards */}
<div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
<div className="flex items-start gap-4">
<div className="bg-primary-container/10 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary-container" data-icon="badge">badge</span>
</div>
<div>
<h3 className="font-bold text-white mb-1">Perfil Profissional</h3>
<p className="text-sm text-on-surface-variant">Como os clientes verão sua arte e currículo.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl opacity-50">
<div className="flex items-start gap-4">
<div className="bg-outline-variant/20 p-3 rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<h3 className="font-bold text-white mb-1">Pagamentos InfinitePay</h3>
<p className="text-sm text-on-surface-variant">Receba instantaneamente por cada corte.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl opacity-50">
<div className="flex items-start gap-4">
<div className="bg-outline-variant/20 p-3 rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="calendar_today">calendar_today</span>
</div>
<div>
<h3 className="font-bold text-white mb-1">Sua Primeira Agenda</h3>
<p className="text-sm text-on-surface-variant">Defina horários e serviços exclusivos.</p>
</div>
</div>
</div>
</div>
</div>
{/* Right Column: Form Container */}
<div className="lg:col-span-7 bg-surface-container rounded-3xl p-8 lg:p-12 border border-primary/5 shadow-2xl">
<div className="mb-10">
<span className="inline-block px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Passo 01</span>
<h2 className="text-3xl font-bold text-white">Complete seu Perfil</h2>
<p className="text-on-surface-variant mt-2">Personalize sua identidade na BarberPro.</p>
</div>
<form className="space-y-8">
{/* Profile Picture Upload */}
<div className="flex items-center gap-6">
<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-surface-container-high border-2 border-dashed border-outline-variant flex items-center justify-center overflow-hidden transition-all group-hover:border-primary-container">
<span className="material-symbols-outlined text-3xl text-outline" data-icon="add_a_photo">add_a_photo</span>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary-container text-inverse-primary w-8 h-8 rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</div>
</div>
<div>
<p className="font-bold text-white">Foto de Perfil</p>
<p className="text-xs text-on-surface-variant mt-1">Recomendado: 500x500px, estilo editorial.</p>
</div>
</div>
{/* Input Fields */}
<div className="space-y-6">
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Nome Artístico</label>
<input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-container transition-all placeholder:text-outline" placeholder="Ex: Lucas 'The Blade' Silva" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Especialidade Principal</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<button className="px-4 py-3 rounded-xl border border-primary-container bg-primary-container/10 text-primary-container text-sm font-bold transition-all" type="button">Barba &amp; Cabelo</button>
<button className="px-4 py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant text-sm font-medium hover:border-primary-container transition-all" type="button">Fade Master</button>
<button className="px-4 py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant text-sm font-medium hover:border-primary-container transition-all" type="button">Visagismo</button>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Sobre você (Bio)</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-container transition-all placeholder:text-outline resize-none" placeholder="Conte brevemente sua experiência..." rows="3"></textarea>
</div>
</div>
{/* Action Bar */}
<div className="pt-6 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-outline-variant/10">
<button className="text-on-surface-variant font-bold hover:text-white transition-colors flex items-center gap-2" type="button">
                        Pular por enquanto
                    </button>
<button className="w-full md:w-auto bg-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(200,255,0,0.3)]" type="submit">
                        Próximo Passo: Conectar InfinitePay
                    </button>
</div>
</form>
</div>
</main>
{/* Footer */}
<footer className="w-full py-12 px-6 border-t border-primary/10 bg-[#0D0D0D]">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
<span className="text-xl font-bold text-white">BarberPro</span>
<p className="font-body text-sm text-gray-500">© 2024 BarberPro. A Estética da Precisão.</p>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-primary-container transition-colors text-sm" href="#">Termos</a>
<a className="text-gray-500 hover:text-primary-container transition-colors text-sm" href="#">Privacidade</a>
<a className="text-gray-500 hover:text-primary-container transition-colors text-sm" href="#">Suporte</a>
</div>
</div>
</footer>
{/* Background Decoration */}
<div className="fixed top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="fixed bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary-container/3 blur-[100px] rounded-full pointer-events-none"></div>

    </div>
  );
};

export default OnboardingDeBarbeiro;
