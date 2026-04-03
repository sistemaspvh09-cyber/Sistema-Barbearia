
import React from 'react';

const PagamentoAprovadoInfinitetap: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Header / TopAppBar */}
<header className="fixed top-0 w-full z-50 flex items-center px-4 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15">
<div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
<button className="text-[#C8FF00] hover:opacity-80 transition-opacity p-2 active:scale-95 duration-300">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="text-[#C8FF00] font-plus-jakarta-sans font-bold tracking-tight text-lg">Pagamento</h1>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32 max-w-2xl mx-auto w-full">
{/* Success Animation/Icon Area */}
<div className="relative mb-8">
<div className="w-24 h-24 rounded-full bg-[#C8FF00] flex items-center justify-center shadow-[0_0_50px_rgba(200,255,0,0.4)] animate-pulse">
<span className="material-symbols-outlined text-[#4f6700] text-5xl font-bold" data-icon="check" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
</div>
</div>
{/* Success Message */}
<div className="text-center mb-10">
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Pagamento Aprovado!</h2>
<p className="text-on-surface-variant text-base">Transação realizada com sucesso.</p>
</div>
{/* Transaction Details Card (Bento Style) */}
<div className="w-full grid grid-cols-1 gap-4">
{/* Main Details Card */}
<div className="relative overflow-hidden bg-surface-container rounded-3xl p-8 border border-outline-variant/10 shadow-2xl">
<div className="absolute inset-0 receipt-pattern"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em] mb-2">Valor Total</span>
<div className="text-5xl font-black text-[#C8FF00] tracking-tighter mb-8">R$ 85,00</div>
<div className="w-full space-y-5">
<div className="flex justify-between items-center py-3 border-b border-outline-variant/15">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-lg" data-icon="person">person</span>
<span className="text-on-surface-variant font-medium">Barbeiro</span>
</div>
<span className="text-on-surface font-bold">Ricardo "Blade" Santos</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-outline-variant/15">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-lg" data-icon="credit_card">credit_card</span>
<span className="text-on-surface-variant font-medium">Método</span>
</div>
<span className="text-on-surface font-bold">Cartão de Crédito</span>
</div>
<div className="flex justify-between items-center py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-lg" data-icon="calendar_month">calendar_month</span>
<span className="text-on-surface-variant font-medium">Data e Hora</span>
</div>
<div className="text-right">
<div className="text-on-surface font-bold">24 Mai 2024</div>
<div className="text-on-surface-variant text-xs font-medium">14:32:15</div>
</div>
</div>
</div>
</div>
</div>
{/* Secondary Actions Row */}
<div className="grid grid-cols-2 gap-4">
<button className="bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-outline-variant/10 active:scale-95">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="receipt_long">receipt_long</span>
<span className="text-sm font-bold text-on-surface">Ver Comprovante</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-outline-variant/10 active:scale-95">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="share">share</span>
<span className="text-sm font-bold text-on-surface">Enviar WhatsApp</span>
</button>
</div>
</div>
</main>
{/* Bottom Navigation / Primary Action */}
<div className="fixed bottom-0 w-full z-50 px-6 pb-10 pt-4 bg-[#0D0D0D]/80 backdrop-blur-xl">
<div className="max-w-2xl mx-auto">
<button className="w-full bg-[#C8FF00] text-[#4f6700] font-plus-jakarta-sans font-extrabold text-lg py-5 rounded-2xl shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                Finalizar
                <span className="material-symbols-outlined font-bold" data-icon="done_all">done_all</span>
</button>
</div>
</div>

    </div>
  );
};

export default PagamentoAprovadoInfinitetap;
