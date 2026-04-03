
import React from 'react';

const ResgateDePontosSeleO: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Anchor (Task-Focused: Suppressed standard nav, using specific header) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex items-center justify-between px-6 h-16 w-full">
<h1 className="text-xl font-headline font-extrabold uppercase tracking-tighter text-on-surface">Resgatar Pontos</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors active:scale-90 duration-300">
<span className="material-symbols-outlined text-on-surface">close</span>
</button>
</div>
</header>
<main className="pt-24 px-6 max-w-2xl mx-auto">
{/* Customer Profile Card (The Anchor) */}
<section className="mb-10">
<div className="surface-container rounded-xl p-6 relative overflow-hidden group">
{/* Subtle Steel Texture */}
<div className="absolute inset-0 bg-gradient-to-tr from-surface-tint/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-5 relative z-10">
<div className="w-20 h-20 rounded-full border-2 border-primary-fixed p-1">
<img alt="Avatar do cliente" className="w-full h-full rounded-full object-cover" data-alt="Professional studio portrait of a stylish man with a well-groomed beard, sharp facial features, looking directly at camera, dark moody background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxTJVIRq85Myn5Gif4nbkoHRn56AHie4-DscackxXAoAtSoa06y1TAp-pi7pXdNlenH9LXQA4yMW0Q1T-NpG29n19R2CBIWqdysCUCH6RCGOvsep83PpIfrwEqg0gXuVQ5_f2u0mNYH-A9as6rCbSXfaf8f11zrzR14lTWEj1AfM1CIVS4qXxdHFNsSpDt3ka-J_sb0ZS4_XrucEjn7htlIT9fh38-DUMmudg4_KaJg4Xrp-jTQM5QpuPr-dWG1L4TSPrnR7kqu2JO"/>
</div>
<div>
<h2 className="text-2xl font-headline font-extrabold tracking-tight">Ricardo Almeida</h2>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="text-primary-fixed font-bold text-lg tracking-widest uppercase">120 <span className="text-[10px] font-medium opacity-80">pontos acumulados</span></span>
</div>
</div>
</div>
</div>
</section>
{/* Rewards Grid (The Bento Hierarchy) */}
<section className="space-y-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Recompensas Disponíveis</h3>
<span className="text-xs text-on-surface-variant/60">Selecione uma opção</span>
</div>
{/* Reward Item: Available (Corte Grátis) */}
<div className="surface-container rounded-xl p-5 border border-primary-fixed/30 neon-glow relative transition-all duration-300 hover:scale-[1.02] cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="w-12 h-12 bg-primary-fixed/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h4 className="text-lg font-bold text-on-surface">Corte Grátis</h4>
<p className="text-sm text-on-surface-variant">Qualquer estilo de corte (Tesoura ou Máquina)</p>
</div>
</div>
<div className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-black tracking-tighter">
                        100 PTS
                    </div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
<span className="text-[10px] font-bold text-primary-fixed uppercase tracking-widest">Resgate Disponível</span>
</div>
</div>
{/* Reward Item: Available (Lavagem Premium) */}
<div className="surface-container-low rounded-xl p-5 border border-transparent hover:border-primary-fixed/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center group-hover:bg-primary-fixed/10 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed">water_drop</span>
</div>
<div>
<h4 className="text-lg font-bold text-on-surface">Lavagem Premium</h4>
<p className="text-sm text-on-surface-variant">Produtos importados e massagem capilar</p>
</div>
</div>
<div className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold tracking-tighter">
                        50 PTS
                    </div>
</div>
</div>
{/* Reward Item: Unavailable (Combo Completo) */}
<div className="surface-container-lowest opacity-40 rounded-xl p-5 border border-transparent grayscale">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">face_6</span>
</div>
<div>
<h4 className="text-lg font-bold text-on-surface">Combo Completo</h4>
<p className="text-sm text-on-surface-variant">Corte, Barba e Sobrancelha</p>
</div>
</div>
<div className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold tracking-tighter">
                        200 PTS
                    </div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Faltam 80 pontos</span>
</div>
</div>
{/* Reward Item: Unavailable (Produtos Home-care) */}
<div className="surface-container-lowest opacity-40 rounded-xl p-5 border border-transparent grayscale">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">sanitizer</span>
</div>
<div>
<h4 className="text-lg font-bold text-on-surface">Kit Pomada + Óleo</h4>
<p className="text-sm text-on-surface-variant">Linha exclusiva BarberPro</p>
</div>
</div>
<div className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold tracking-tighter">
                        150 PTS
                    </div>
</div>
</div>
</section>
{/* Info Section */}
<section className="mt-8 p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low/50">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-sm">info</span>
<p className="text-xs text-on-surface-variant leading-relaxed">
                    Ao realizar o resgate, os pontos serão debitados automaticamente da sua conta. O voucher gerado tem validade de 30 dias para uso na unidade selecionada.
                </p>
</div>
</section>
</main>
{/* Fixed Action Bar (Floating FAB Logic for focus) */}
<div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent pt-12">
<div className="max-w-2xl mx-auto">
<button className="w-full h-14 bg-primary-fixed text-on-primary-fixed-variant font-headline font-extrabold uppercase tracking-widest rounded-xl neon-glow-active active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
                Resgatar agora
            </button>
</div>
</div>

    </div>
  );
};

export default ResgateDePontosSeleO;
