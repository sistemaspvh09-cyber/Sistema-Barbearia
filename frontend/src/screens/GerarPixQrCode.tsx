
import React from 'react';

const GerarPixQrCode: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="flex items-center justify-between px-4 h-16 w-full bg-[#0D0D0D] dark:bg-[#0D0D0D] border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-4">
<button className="text-[#C8FF00] hover:opacity-80 transition-opacity scale-95 active:transition-transform duration-200">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-on-surface text-lg">Gerar Cobrança Pix</h1>
</div>
<div className="w-10"></div> {/* Spacer for centering title if needed */}
</header>
<main className="flex-1 flex flex-col items-center px-6 py-8 pb-32 max-w-md mx-auto w-full">
{/* Success Indicator */}
<div className="mb-6 flex flex-col items-center">
<div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1", fontSize: '32px' }}>check_circle</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">QR Code gerado com sucesso</p>
</div>
{/* Central Billing Card */}
<div className="w-full bg-surface-container rounded-3xl p-8 flex flex-col items-center qr-glow glass-border relative overflow-hidden mb-8">
{/* Tonal Shine Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-surface-tint/5 to-transparent pointer-events-none"></div>
<div className="text-center mb-8 relative z-10">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 block">Valor Total</span>
<h2 className="text-4xl font-extrabold text-on-surface tracking-tight">R$ 85,00</h2>
</div>
{/* QR Code Container */}
<div className="bg-white p-4 rounded-2xl mb-6 relative z-10 shadow-2xl">
<img alt="QR Code para pagamento Pix" className="w-48 h-48" data-alt="A clean high-contrast black and white QR code centered on a pure white square background with rounded corners" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xjkEqDHOQvJBznQgcW1fxEGjpTVn3rao4Q0fsTDNV7VXgqyLR_NCLZr23vzJ952B7NYkGt5OKPcfZy7rVvtmKpEH6D_i9xsC4J5nv6eN8nDbXHvrIwmf-Xw-ehVY-zvE4ylvrCur1G8zw8FrZBTw9f955ucfBvEB3qs9XXGLmss-mLAlFFW9so1jPwcwS4WLE4-iX3ERdRkcwHXu1-q1MFd62wOHOPg7i8rbx2cfv7fHaDbNLXnjwBh1s9eQjewadeRmUfGwUadh"/>
</div>
<div className="flex items-center gap-2 text-primary-container relative z-10">
<span className="material-symbols-outlined text-sm">qr_code_scanner</span>
<p className="text-sm font-semibold tracking-wide">Escaneie o código para pagar</p>
</div>
</div>
{/* Secondary Actions Section */}
<div className="w-full space-y-3 mb-10">
<button className="w-full h-14 bg-surface-container-high rounded-2xl flex items-center justify-between px-6 glass-border hover:bg-surface-bright transition-all active:scale-[0.98]">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">content_copy</span>
<span className="text-sm font-bold text-on-surface">Copiar código Pix (Copia e Cola)</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
</button>
<button className="w-full h-14 bg-surface-container-high rounded-2xl flex items-center justify-between px-6 glass-border hover:bg-surface-bright transition-all active:scale-[0.98]">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">share</span>
<span className="text-sm font-bold text-on-surface">Compartilhar Link</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
</button>
</div>
{/* Primary Action */}
<button className="w-full h-16 bg-[#C8FF00] text-[#4f6700] rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(200,255,0,0.3)] hover:scale-[1.02] active:scale-[0.95] transition-all duration-300">
            Finalizar
            <span className="material-symbols-outlined">done_all</span>
</button>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full h-20 bg-[#1A1919]/70 dark:bg-[#1A1919]/70 backdrop-blur-xl border-t border-white/5 rounded-t-3xl flex justify-around items-center px-6 pb-safe z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium mt-1">Agendas</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-3 py-1 scale-110 duration-300">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium mt-1">Pagamentos</span>
</div>
<div className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium mt-1">Perfil</span>
</div>
</nav>

    </div>
  );
};

export default GerarPixQrCode;
