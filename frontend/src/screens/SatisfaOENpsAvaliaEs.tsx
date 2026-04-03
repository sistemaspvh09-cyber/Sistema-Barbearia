
import React from 'react';

const SatisfaOENpsAvaliaEs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Authority: Shared Components JSON) */}
<aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#1A1919] z-40 shadow-2xl">
<div className="flex flex-col gap-4 py-8 px-4 h-full">
<div className="px-4 mb-8">
<h1 className="text-[#C8FF00] font-black italic text-2xl tracking-tighter">BarberPro</h1>
<p className="text-on-surface-variant text-xs font-medium">Premium Management</p>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">campaign</span>
<span className="font-medium text-sm">Marketing</span>
</a>
{/* Active Tab: Reviews */}
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 shadow-[0_0_20px_rgba(200,255,0,0.4)] active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">Reviews</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-medium text-sm">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 mx-2 rounded-xl hover:translate-x-1 transition-all duration-300" href="#">
<span className="material-symbols-outlined">confirmation_number</span>
<span className="font-medium text-sm">Coupons</span>
</a>
</nav>
<div className="mt-auto flex flex-col gap-2 pt-6 border-t border-white/5">
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-sm">Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm">Logout</span>
</a>
</div>
</div>
</aside>
{/* TopNavBar (Authority: Shared Components JSON) */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex justify-between items-center px-6 py-4 max-w-full">
<div className="flex items-center gap-4 md:ml-64">
<h2 className="font-['Plus_Jakarta_Sans'] tracking-tight text-xl font-extrabold text-[#C8FF00] tracking-tighter">Gestão de Avaliações</h2>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-1.5 border border-white/5">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none text-sm focus:ring-0 text-on-surface placeholder-on-surface-variant w-48" placeholder="Buscar cliente..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="text-[#A0A0A0] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#A0A0A0] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<img alt="User Profile Avatar" className="w-9 h-9 rounded-full border-2 border-[#C8FF00]/20" data-alt="close-up portrait of a professional barber with a well-groomed beard and stylish hair in a modern barber shop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANaoCe9LXkNkcZodiSlqz5gYYSTcaQqsGYpNs1e9D0jt9vrhpEX0E64Ol2fGAQkD5gikgxNWG4u9YAdFASfFRoZxVAEnM8LpEUwJH45CRMuI6B2ZBVsSmjTJxIlTj2BLAecNOZ5yEQeyzEkYtnDMA1dkp8dEIqDhPde9wZNRrENn_UBXDYv80pAdQBFELK4_7iLK_OeGU-jKF2vl2Ui1AshqDkX_JxkbIuvTcmx8RN05NF2_UxjMd-uFsllygM6EXVJVqf0feogHK7"/>
</div>
</div>
</div>
</header>
{/* Main Canvas */}
<main className="pt-24 pb-24 md:pb-8 md:pl-64 min-h-screen px-4 lg:px-8 bg-background">
<div className="max-w-7xl mx-auto space-y-8">
{/* Bento Grid Summary */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* NPS Score Card */}
<div className="md:col-span-2 glass-card rounded-[1.5rem] p-8 flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Global NPS</span>
<div className="flex items-baseline gap-2 mt-2">
<h3 className="text-6xl font-black text-primary-fixed italic tracking-tighter">84</h3>
<span className="text-primary-fixed-dim text-lg font-bold">+12%</span>
</div>
<p className="text-on-surface-variant text-sm mt-4 max-w-[200px]">Sua zona de excelência está 15% acima da média regional.</p>
</div>
<div className="absolute right-0 bottom-0 opacity-10">
<span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
</div>
</div>
{/* Average Stars */}
<div className="bg-surface-container rounded-[1.5rem] p-6 border border-white/5 flex flex-col items-center justify-center text-center">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Média de Estrelas</span>
<div className="flex items-center gap-1 mb-2">
<span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-4xl font-bold tracking-tight">4.9</span>
</div>
<span className="text-on-surface-variant text-xs">Baseado em 1.240 votos</span>
</div>
{/* Response Rate */}
<div className="bg-surface-container rounded-[1.5rem] p-6 border border-white/5 flex flex-col items-center justify-center text-center">
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Taxa de Resposta</span>
<div className="relative w-20 h-20 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle cx="40" cy="40" fill="transparent" r="36" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
<circle cx="40" cy="40" fill="transparent" r="36" stroke="#C8FF00" strokeDasharray="226" strokeDashoffset="22" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<span className="absolute text-xl font-bold italic">92%</span>
</div>
<span className="text-on-surface-variant text-xs mt-2">Excelente engajamento</span>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Barbeiros Ranking */}
<div className="lg:col-span-1 space-y-6">
<div className="flex items-center justify-between px-2">
<h4 className="text-lg font-bold italic tracking-tight text-white uppercase">Média por Barbeiro</h4>
<span className="material-symbols-outlined text-on-surface-variant">sort</span>
</div>
<div className="space-y-3">
{/* Barbeiro Item */}
<div className="bg-surface-container-low hover:bg-surface-container transition-colors p-4 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<img alt="Barber 1" className="w-10 h-10 rounded-lg object-cover" data-alt="headshot of a young professional barber with tattoos and a trendy undercut hairstyle looking directly at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYRaR5-OGcQsi7w2AxKN8kTX5YxHg9OHcNZRndo5zmizx5R9Gwz7H2oYYY84uotYET5P7wFxRWXmH-3Msn0s_1IwUPmktf_t3ThRCY6ARGj17u7CZ9CXd-L-L66YCkRqa4K0krlT0G0Y3TRdvhI71fFGJ7r06aWUIDcrALSZV8vuLLzzc-D20w3fAThPs8i2HsNFN7tJ7uBH1calGa97fw3lb94qhZIhyDdYQ5HL9yTvskZuAM1DaktzbmtsrmVEARsFOmYMEh9C0"/>
<div>
<p className="font-bold text-sm">Ricardo "The Blade"</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Master Barber</p>
</div>
</div>
<div className="flex items-center gap-1 bg-primary-container/10 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-primary-container text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-primary-container font-bold text-sm">5.0</span>
</div>
</div>
{/* Barbeiro Item */}
<div className="bg-surface-container-low hover:bg-surface-container transition-colors p-4 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<img alt="Barber 2" className="w-10 h-10 rounded-lg object-cover" data-alt="professional portrait of a barber with glasses and a friendly smile in a wood-accented interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Z-tuvCRRnjsfJVfRVJpyNgxrPlkHixZFoe_1H7tJ_xrQ7mzxuGJEmhYj7JK-gs8q7OS6ryhhjzsF5LSowK9yy6No1R67WLcDWe_ylcC0C2AvmuYkdriqxaDsH1UM-tUoJitvXbuy0b2tgNWeh8n2nKFt6FCxmxIEBAKAw7KnKVVRaf6XBnY5zJT_dT3Zb3xO6w2ESOF6_4nnJHcgcI_VJIBI8_ayapLk2dn5M172jjJN-13jq2jEq0oSZIqrsWTQcZG08rxN1vtF"/>
<div>
<p className="font-bold text-sm">Vitor Hugo</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Senior Barber</p>
</div>
</div>
<div className="flex items-center gap-1 bg-primary-container/10 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-primary-container text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-primary-container font-bold text-sm">4.8</span>
</div>
</div>
{/* Barbeiro Item */}
<div className="bg-surface-container-low hover:bg-surface-container transition-colors p-4 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<img alt="Barber 3" className="w-10 h-10 rounded-lg object-cover" data-alt="sharp portrait of a barber with a clean shave and professional uniform against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmgrbb4GBNBeDI3Wg9kvYpugJGrHhxe5zPUL74oIJKTgLXMgW6Y9lwCYSvm1ctbLKNEKR0eXaLov0lweEVVq6cMincn8ovxSO87yiHX8TYKcjrEwh03hkmaJoKg_3IxpjaiXgwIvIKY2aIU6A6JgXpJWQjozjDMa1uXPYNV2iwAnTiBSRO6Q2OeqYh0J1rz2omnSk8ZNahHtC6finoK9HC_X2vJCzJl2v6te9iTMR9yrMCfdFUit7gtFd9QsJMEdw4-oVXq1HXQ3H"/>
<div>
<p className="font-bold text-sm">Marcos Silva</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Barber</p>
</div>
</div>
<div className="flex items-center gap-1 bg-primary-container/10 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-primary-container text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-primary-container font-bold text-sm">4.7</span>
</div>
</div>
</div>
{/* NPS Graph Placeholder */}
<div className="bg-surface-container-highest rounded-2xl p-6 border border-white/5 h-64 flex flex-col justify-between">
<h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Evolução NPS (6 meses)</h4>
<div className="flex items-end justify-between h-32 gap-2 mt-4">
<div className="w-full bg-primary-fixed/10 rounded-t-lg h-[40%]"></div>
<div className="w-full bg-primary-fixed/20 rounded-t-lg h-[55%]"></div>
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[65%]"></div>
<div className="w-full bg-primary-fixed/50 rounded-t-lg h-[85%]"></div>
<div className="w-full bg-primary-fixed/80 rounded-t-lg h-[75%]"></div>
<div className="w-full bg-primary-fixed rounded-t-lg h-[100%] neon-shadow"></div>
</div>
<div className="flex justify-between text-[10px] text-on-surface-variant mt-2 px-1">
<span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span>
</div>
</div>
</div>
{/* Feed de Avaliações */}
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between px-2">
<h4 className="text-lg font-bold italic tracking-tight text-white uppercase">Avaliações Recentes</h4>
<div className="flex gap-2">
<button className="px-3 py-1 text-[10px] font-bold border border-[#C8FF00]/20 rounded-full text-primary-container bg-primary-container/5">TODAS</button>
<button className="px-3 py-1 text-[10px] font-bold border border-white/5 rounded-full text-on-surface-variant hover:border-[#C8FF00]/20 transition-colors">CRÍTICAS</button>
</div>
</div>
<div className="space-y-4">
{/* Review Card 1 */}
<div className="bg-surface-container p-6 rounded-[1.5rem] border border-white/5 space-y-4 hover:border-[#C8FF00]/20 transition-all duration-300">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<img alt="Client 1" className="w-12 h-12 rounded-full ring-2 ring-primary-container/20" data-alt="clean close-up of a smiling male customer after a haircut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRV-yVf0joL-Jvdscn24NRWD3hRYfBsVqjv0kPHVPjb-yANI8B70SSitnCQ2_NdFgS-XsHZI_gdTbV7fPhCqqFhbBBdimTGItrxZqZ4AT6Tb2dQxlOewGyDu3Ajzc4A0NriPrkrawDUs1zPUQ5nFS1XmZtbmZd3YOMIRWNkXOGLg1O3ndANK2_6p6K8td9qsAV9-Yr21O4s1BFDhooN-pFo1hCsQRhsfzR-Y5Uozd80bWytn79pVmrmWUg_IIEKa7eB1dqTWcqH2BV"/>
<div>
<h5 className="font-bold text-white">André Cavalcanti</h5>
<p className="text-xs text-on-surface-variant">Serviço: Corte &amp; Barba (Ricardo)</p>
</div>
</div>
<div className="flex items-center gap-0.5">
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<p className="text-on-surface text-sm leading-relaxed">Experiência impecável como sempre. O Ricardo tem uma mão muito firme e a toalha quente no final é o diferencial. Ambiente sensacional e trilha sonora de primeira.</p>
<div className="flex items-center justify-between pt-2 border-t border-white/5">
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest">há 2 horas</span>
<button className="flex items-center gap-2 text-primary-container font-bold text-xs hover:underline">
<span className="material-symbols-outlined text-sm">reply</span>
                                    RESPONDER
                                </button>
</div>
</div>
{/* Review Card 2 */}
<div className="bg-surface-container p-6 rounded-[1.5rem] border border-white/5 space-y-4 hover:border-[#C8FF00]/20 transition-all duration-300">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<img alt="Client 2" className="w-12 h-12 rounded-full ring-2 ring-primary-container/20" data-alt="portrait of a satisfied customer with a fresh stylish beard fade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO7JivQa2YjxVPlgEZr7b4IJaf-EtEmMrTizOZpPLT874aLFhcJBFTsMrGBUxcPdY_pxxGnWf44asVkh1n8JCoNH9taIOEdEvw7PkauLn0kD5Wid-q4LtOLBFEQI5glI1kk6330Byhb5-xtzcHNSAlbKiruwkhz0eur0dMpiA8_3UBn-ubdHYO2YK6D7j_v9QrGq5ScKADSJw_asox2JwFUVQI4yaEbWnNyUllfCLm4pMfLGcvZLrGMBF5raxmhh_EqmvoamJlDggB"/>
<div>
<h5 className="font-bold text-white">Lucas Ferreira</h5>
<p className="text-xs text-on-surface-variant">Serviço: Barboterapia (Vitor Hugo)</p>
</div>
</div>
<div className="flex items-center gap-0.5">
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[#333] text-lg">star</span>
</div>
</div>
<p className="text-on-surface text-sm leading-relaxed italic text-on-surface-variant">"O atendimento foi bom, mas o café estava frio dessa vez. No mais, corte excelente."</p>
<div className="bg-surface-container-low p-4 rounded-xl border-l-2 border-primary-container">
<p className="text-[10px] font-bold text-primary-container uppercase tracking-widest mb-1">BarberPro Admin respondeu:</p>
<p className="text-xs text-on-surface-variant">"Puxa, Lucas! Mil desculpas pelo café. Já ajustamos nossa máquina. Na próxima o expresso é por nossa conta!"</p>
</div>
<div className="flex items-center justify-between pt-2 border-t border-white/5">
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest">há 1 dia</span>
<span className="flex items-center gap-1 text-[10px] text-primary-container/60 font-bold italic">
<span className="material-symbols-outlined text-xs">check_circle</span>
                                    RESPONDIDO
                                </span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/* BottomNavBar (Authority: Shared Components JSON) */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#0D0D0D]/80 backdrop-blur-md md:hidden rounded-t-[1.5rem] border-t border-[#C8FF00]/15 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-50">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Metrics</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110 active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>thumbs_up_down</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">NPS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-colors active:scale-90 duration-300" href="#">
<span className="material-symbols-outlined">local_offer</span>
<span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Promos</span>
</a>
</nav>

    </div>
  );
};

export default SatisfaOENpsAvaliaEs;
