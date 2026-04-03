
import React from 'react';

const ReaDoClienteInCio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/15 shadow-[0px_40px_8px_rgba(0,0,0,0.08)] h-16 flex justify-between items-center px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
<img alt="Foto de perfil do cliente" data-alt="close-up portrait of a stylish young man with a sharp fade haircut and groomed beard, neutral background, soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoO3LxLq1OHRrqZzadJnnjtnojX85C3MLS_O9ay7Pz6vUfbAY_en2U-HeSXVKby9j2_eZ8bEK47UzOc6hKlctuiLZ8gnmvDoAhBg-Arhajcx6qMYWyp3aFGWMyk_i8faJOFCBpkeBySAzJLpkgNhnuyeBhh7YRIaG8wD8U-dMrU8d5Her3g3mrcfmLNGyQxzlBgpHvjlkg_i0iKUI2IHrNGXzW9Y_jAcdTDvCKq6tCEOebfNRJEE3fvOGiynXu4c2c9QL5H6us2Pox"/>
</div>
<h1 className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-white text-lg">Olá, Bruno</h1>
</div>
<button className="text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined text-2xl" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 px-6 space-y-8 max-w-2xl mx-auto">
{/* Cartão de Fidelidade (Style InfinitePay) */}
<section>
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1919] to-[#0D0D0D] p-6 border border-white/10 shadow-2xl group">
{/* Decorative Steel Shine */}
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-container/5 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start mb-10">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Fidelidade BarberPro</p>
<h2 className="text-2xl font-black text-white italic">PLATINUM CLUB</h2>
</div>
<span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<div>
<p className="text-4xl font-black text-white leading-none">120<span className="text-lg text-on-surface-variant font-medium ml-1">/ 150</span></p>
<p className="text-sm text-primary-container font-bold mt-1 neon-text-glow">Próximo: Corte Grátis</p>
</div>
<div className="text-right">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Saldo de Pontos</p>
</div>
</div>
{/* Progress Bar */}
<div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-primary-container w-[80%] rounded-full shadow-[0_0_15px_rgba(200,255,0,0.5)]"></div>
</div>
</div>
<div className="mt-8 flex justify-between items-center opacity-60">
<p className="text-[10px] font-mono tracking-widest text-white">4452 • • • • • • • • 9012</p>
<img alt="Logo icon" className="h-4 grayscale invert" data-alt="abstract geometric vector icon representing precision and grooming tool silhouette, minimalist white on dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLQ4cVVyuOcCiZsI1VAJA1Tk5juPjGBfLuRyG99CDYkOLSIGChekxBPcCx90HZlERwGYZ56TU3FzLRCKVGIUSzjJVGK7BYYbZA1gK_sIgvCggLcK8x1r9bfoGBptaEwChbkeAGbHKyDi7ZRy5EQ3btTTIl3DyMo6YeR6BQLhkB5fxcPbyY7RJlOMkXswd_rT8OzAQe3Wtf5AcD2HztryFtdewj0pJfHL9VABeN9q-V1PDfO6sep_tCD4EK21XJgR9XZdi77MpCWKwm"/>
</div>
</div>
</section>
{/* Seu Próximo Corte */}
<section className="space-y-4">
<h3 className="text-sm uppercase tracking-widest font-extrabold text-on-surface-variant pl-1">Seu Próximo Corte</h3>
<div className="glass-card rounded-3xl p-5 flex items-center gap-4 group hover:bg-surface-container-high transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex flex-col items-center justify-center border border-white/5 group-hover:border-primary-container/30 transition-colors">
<span className="text-primary-container font-black text-xl leading-none">25</span>
<span className="text-[10px] text-on-surface-variant uppercase font-bold">OUT</span>
</div>
<div className="flex-1">
<h4 className="font-bold text-white group-hover:text-primary-container transition-colors">Corte Moderno + Barba</h4>
<p className="text-sm text-on-surface-variant">com Barbeiro Ricardo</p>
<div className="flex items-center gap-2 mt-1 text-primary-container/80 font-medium text-xs">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span>
<span>14:00</span>
</div>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest text-white hover:bg-primary-container hover:text-on-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</section>
{/* Ofertas para Você */}
<section className="space-y-4">
<h3 className="text-sm uppercase tracking-widest font-extrabold text-on-surface-variant pl-1">Ofertas para Você</h3>
<div className="relative overflow-hidden rounded-3xl bg-surface-container-low border border-dashed border-primary-container/40 p-5 flex items-center justify-between group cursor-pointer hover:bg-surface-container transition-colors">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-sm" data-icon="confirmation_number">confirmation_number</span>
<span className="text-xs font-bold text-primary-container uppercase tracking-tighter">Cupom de Aniversário</span>
</div>
<h4 className="text-xl font-black text-white italic">ANIVER20</h4>
<p className="text-xs text-on-surface-variant">Válido para qualquer serviço este mês</p>
</div>
<div className="text-right">
<p className="text-3xl font-black text-white">-20%</p>
<span className="text-[10px] bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-bold">COPIAR</span>
</div>
{/* Cutout Effect */}
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0D0D0D] rounded-full border border-white/10"></div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0D0D0D] rounded-full border border-white/10"></div>
</div>
</section>
{/* Galeria de Estilo */}
<section className="space-y-4 pb-8">
<div className="flex justify-between items-center">
<h3 className="text-sm uppercase tracking-widest font-extrabold text-on-surface-variant pl-1">Galeria de Estilo</h3>
<button className="text-xs font-bold text-primary-container uppercase tracking-widest hover:underline">Ver tudo</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
<img alt="Corte degradê" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="dramatic low-angle shot of a man with a high skin fade and textured top, warm golden backlighting highlighting the silhouette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx3feruFR3Oj6RhazTfrR3cVlEYRd7qwuG2dXCRRKE5H8rVs4GOWugUAiH0Y1S_eJxDqWJgDPBC61JSQ4O2im_5hm-SmiIRyxq7yFOWA5Ig4FfePs1xfDsXVW8QJMfRwfEVe1UEEHcaGTVmImO74o15nKPP0rQfWOZl6s50AIb9zjiG8XkJSBcp5tveGBC0AmH2166EaoJlX9er_f9p8SJoCgI-vvEFHxOTiPPigB1COuymnt7eGY0YY22CNoEYM9qzDy6GzuhZDcC"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
<p className="text-[10px] font-bold text-white uppercase tracking-widest">Skin Fade Pro</p>
</div>
</div>
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
<img alt="Barba alinhada" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close-up of a perfectly groomed long beard and mustache, sharp lines on cheek, cinematic moody lighting with dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUClZp57STBpDZ1EbOInL_Ghg7uVR2cO7w79gmdm3kBL9aSK-t22ia_HBVURif0-lZXxmJgrFiLLv-o4ryPeDDGtE-nUVwAmqNMa1-4DKYZqIBviXtKwRidSseZQncH4ZMl_CNbPE6xNIGdpfJzMbALo1XrcPTcQQXolQX1bC4moDUNpVZNHHbdWr6f-pkr5NfyTbQ7t_iQkr3x_l89032iUHcjdiQ_DN6nhXEnztrCmNYO8J-R63MGSYhyyyumj1i5Pt-q1Ycs3hq"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
<p className="text-[10px] font-bold text-white uppercase tracking-widest">Beard Sculpt</p>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full rounded-t-[24px] z-50 bg-[#1A1919]/70 backdrop-blur-xl border-t border-white/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center h-20 px-4 pb-safe">
{/* Início (Active) */}
<a className="flex flex-col items-center justify-center text-[#C8FF00] drop-shadow-[0_0_10px_rgba(200,255,0,0.4)] transition-all duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider mt-1">Início</span>
</a>
{/* Pontos */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="stars">stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider mt-1">Pontos</span>
</a>
{/* Histórico */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider mt-1">Histórico</span>
</a>
{/* Perfil */}
<a className="flex flex-col items-center justify-center text-[#A0A0A0] hover:text-white transition-colors duration-300 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] uppercase tracking-wider mt-1">Perfil</span>
</a>
</nav>
{/* Floating Action Button (Quick Booking) */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl shadow-[0_10px_30px_rgba(200,255,0,0.3)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300 z-40">
<span className="material-symbols-outlined text-3xl font-bold" data-icon="add">add</span>
</button>

    </div>
  );
};

export default ReaDoClienteInCio;
