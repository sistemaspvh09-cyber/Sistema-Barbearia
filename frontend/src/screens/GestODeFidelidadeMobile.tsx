
import React from 'react';

const GestODeFidelidadeMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/15 shadow-[0px_0px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 h-16">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant/30">
<img className="w-full h-full object-cover" data-alt="Close-up of a professional barber with tattoos working in a high-end dark studio with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4JBnJWwvxc06JnbEfpJ9bmapE3-6lHDqBnO_53VuUmarRbxgi_krEmh17GQU8kqMJtZsor0kMylZSkXJoLiisuyExCRXxMk29HWEAyqnCjD8cDUhaQ8forOT5o_3w5WcOV5DBNL6rwYwa4ncUYfNl-zVz6Val11hd4wncVnxdR7SI_lUTDXewonRh5uLSt6e9j9KIAlo_ioZ4VeFzIGeN8wbTz4R6W9RjxWXqrfEcqnVkr1Pj7D-71LkXSVN0V5_vze3O9XCi-m4Y"/>
</div>
<h1 className="text-xl font-black text-white font-['Plus_Jakarta_Sans'] tracking-tight">Loyalty Program</h1>
</div>
<button className="text-[#C8FF00] hover:scale-105 active:scale-95 transition-all duration-300">
<span className="material-symbols-outlined">notifications</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-md mx-auto space-y-8">
{/* Welcome Section */}
<section>
<h2 className="text-3xl font-extrabold tracking-tight mb-2">Programa de Fidelidade</h2>
<p className="text-on-surface-variant text-sm">Gerencie recompensas e engajamento dos seus clientes VIP.</p>
</section>
{/* Configuration Card */}
<section className="bg-surface-container rounded-3xl p-6 glass-border shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-bold">Configuração de Pontos</h3>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">Pontos por Real Gasto</label>
<div className="relative">
<input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-5 text-primary-container font-bold focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all outline-none" type="number" value="1"/>
<span className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">pts/R$</span>
</div>
</div>
<p className="text-[10px] text-on-surface-variant/60 leading-relaxed italic">
                    Cada R$ 1,00 gasto em serviços ou produtos equivale a 1 ponto de fidelidade para o cliente.
                </p>
</div>
</section>
{/* Rewards List */}
<section>
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-bold tracking-tight">Recompensas</h3>
<button className="text-primary-container text-xs font-bold uppercase tracking-wider hover:opacity-80">Ver Todas</button>
</div>
<div className="flex flex-col gap-4">
{/* Reward Item 1 */}
<div className="bg-surface-container rounded-3xl p-5 flex items-center gap-4 glass-border group hover:bg-surface-container-high transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">award_star</span>
</div>
<div className="flex-1">
<h4 className="font-bold text-white">Corte Grátis</h4>
<div className="flex items-center gap-1 text-primary-container font-bold text-sm">
<span>100</span>
<span className="text-[10px] uppercase">pts</span>
</div>
</div>
<button className="bg-surface-container-highest text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition-colors">Editar</button>
</div>
{/* Reward Item 2 */}
<div className="bg-surface-container rounded-3xl p-5 flex items-center gap-4 glass-border group hover:bg-surface-container-high transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">redeem</span>
</div>
<div className="flex-1">
<h4 className="font-bold text-white">Desconto 20%</h4>
<div className="flex items-center gap-1 text-primary-container font-bold text-sm">
<span>50</span>
<span className="text-[10px] uppercase">pts</span>
</div>
</div>
<button className="bg-surface-container-highest text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition-colors">Editar</button>
</div>
</div>
</section>
{/* Top Customers */}
<section>
<h3 className="text-lg font-bold tracking-tight mb-4">Clientes Engajados</h3>
<div className="space-y-4">
{/* Customer 1 */}
<div className="bg-surface-container rounded-3xl p-5 glass-border">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container/30">
<img className="w-full h-full object-cover" data-alt="Portrait of a stylish man with a clean beard and fade haircut in a modern studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFdL4B399G_ws-UQ1TRsGY5fB1zVbNRMo2PCqrAXtk0-Bn-v7AhbLgGzdJrAdDpESJXj-WEMH9igLxLFOj-Kunq2GRPR4AUS8vsxYVuJVjMA1jN1chAyHtxBGh0rO_FuLP_A_7CLYlQlgD-PMKtrgRSVVGFIlRt3nNWWKHNGwbiUhvh3oyqukNdKDlyWN-hiJRWPrDEAjEgkvEpAPVL2RryFzAqm--_HEDslXqMOv8-3xL38sVz83dHg-v4JTxL51CPLhFpQRTzWGR"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-white">Ricardo Almeida</h4>
<p className="text-xs text-on-surface-variant">Cliente Ouro</p>
</div>
<div className="text-right">
<span className="text-primary-container font-black text-lg">120</span>
<span className="text-[10px] block text-on-surface-variant uppercase font-bold">Total pts</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
<span>Próxima Recompensa</span>
<span>80%</span>
</div>
<div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container shadow-[0px_0px_10px_rgba(200,255,0,0.5)] w-[80%] rounded-full"></div>
</div>
</div>
</div>
{/* Customer 2 */}
<div className="bg-surface-container rounded-3xl p-5 glass-border opacity-80">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-outline-variant/30">
<img className="w-full h-full object-cover" data-alt="Close up of a handsome man with groomed facial hair smiling slightly in a warm interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG4vJ-kXTX-Vyi17dYm2NYq-eHI8DBc2POEAH9WpU6TVlirOgU7RX_TXg_sSBDQ2My5hsYgldFMIweWH2SZXV-dfS1Ly6pYsnsdM-3FOwHc32a6oVSySNoFCOn_mGO-HcEoZ8w02_VxHBrFdi5i3gnwWsUH7-YzxQevAPJvt3JNqtLOTVGSyROvZ1eEktfO_YdIBb25f_EPW5D6F1T5LcGei3kHhRENht5Ukw54yD9PidcuOam39k-P8QD-sUpKn5maI99e15bl-0w"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-white">Thiago Souza</h4>
<p className="text-xs text-on-surface-variant">Cliente Prata</p>
</div>
<div className="text-right">
<span className="text-white font-black text-lg">45</span>
<span className="text-[10px] block text-on-surface-variant uppercase font-bold">Total pts</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
<span>Próxima Recompensa</span>
<span>45%</span>
</div>
<div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-white w-[45%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
</main>
{/* FAB */}
<button className="fixed bottom-24 right-6 w-16 h-16 bg-[#C8FF00] text-[#4f6700] rounded-2xl shadow-[0px_0px_30px_rgba(200,255,0,0.4)] flex items-center justify-center active:scale-90 transition-all duration-300 z-50 group">
<span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-90 transition-transform">add</span>
</button>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 bg-[#1A1919]/70 backdrop-blur-xl border-t border-white/15 rounded-t-[24px] shadow-[0px_-4px_20px_rgba(0,0,0,0.5)] flex justify-around items-center px-4 py-3 h-20 md:hidden">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-3 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-3 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] mt-1">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-3 shadow-[0px_0px_20px_rgba(200,255,0,0.4)] transition-all active:scale-90" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] p-3" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] mt-1">Fidelidade</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-3 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">menu</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[10px] mt-1">Mais</span>
</a>
</nav>

    </div>
  );
};

export default GestODeFidelidadeMobile;
