
import React from 'react';

const PdvMobileSeleODeProdutos: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="bg-[#0D0D0D]/70 backdrop-blur-xl text-white fixed top-0 w-full z-50 border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer">menu</span>
<h1 className="font-headline tracking-tight font-extrabold text-white text-xl">BarberPro</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C8FF00] hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer">shopping_cart</span>
</div>
</div>
</header>
{/* Content Canvas */}
<main className="pt-20 px-4">
{/* Search Bar */}
<div className="mb-6">
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
</div>
<input className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary-container text-on-surface rounded-2xl py-4 pl-12 pr-4 placeholder:text-on-surface-variant/50 font-medium transition-all" placeholder="Buscar produtos ou marcas..." type="text"/>
</div>
</div>
{/* Categories Slider */}
<div className="flex overflow-x-auto gap-3 pb-6 no-scrollbar">
<button className="flex-none px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm tracking-wide neon-glow">
                Todos
            </button>
<button className="flex-none px-6 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm tracking-wide hover:bg-surface-container-high transition-colors">
                Pomadas
            </button>
<button className="flex-none px-6 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm tracking-wide hover:bg-surface-container-high transition-colors">
                Óleos
            </button>
<button className="flex-none px-6 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm tracking-wide hover:bg-surface-container-high transition-colors">
                Shampoos
            </button>
<button className="flex-none px-6 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm tracking-wide hover:bg-surface-container-high transition-colors">
                Acessórios
            </button>
</div>
{/* Product Grid (Asymmetric Bento Style) */}
<div className="grid grid-cols-2 gap-4 pb-24">
{/* Product Card 1 */}
<div className="bg-surface-container rounded-3xl p-4 flex flex-col gap-3 group active:scale-[0.98] transition-all border border-white/5">
<div className="w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-high relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Premium hair pomade tin on a dark reflective surface with cinematic neon green lighting accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBa6BmwFSyBy786_P2O4U6PY3r9_0BkxDEl1KVWYPHL4G5tijPxKE0MT1yZbQEUYujgdHEGEKLbkshrsxfAkdVZrTbKKJwP3KNoFKfGVF6NYtfQ0PwJurCEH3Mho6iVriiP890C1xuzoPK0a4kRSV0kWEfNRCxngE_yS7ijhtIL51fB2fCY2cCnnE_Qgk3fTgf0Mwuu96nri9NFvWIW55AC1ZExcNNvLGZ8rd2O-AGE66w8R9ACgpoQpdNtLo_pJGa1bmmXsOjVnkE"/>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Suavecito</span>
<h3 className="text-on-surface font-bold text-sm leading-tight line-clamp-1">Pomada Matte Firm</h3>
<div className="flex justify-between items-end mt-1">
<span className="text-on-surface font-black text-lg">R$ 89,90</span>
<button className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center active:scale-90 transition-transform neon-glow">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-surface-container rounded-3xl p-4 flex flex-col gap-3 group active:scale-[0.98] transition-all border border-white/5">
<div className="w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-high relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Dark glass bottle of beard oil with a dropper on a minimalist black background with soft rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAWSyeZB1ce4dVq0rBzFsurMDvWqDTbq4CyrvNi1gmTbG1jS_VWAJT4AshEhasNcH1ERCnVlIPRQLxGs6gOu78SuBQyDwGy3eE7IFTTVI4cy-K73EXnnAVbALkDjl25e2abehDE7USil-l1tq4wc3SEHdgk4i0ZS4yoODBLBcL3O5enrgfNhQIMrCezOoIdmorBawHhK_ql9DDbpDiibYQk4kF0GHJl_kNv71tF5IiPPG3UmA_g-u0qZWZdtpsd-g6sdX__RgSqjrg"/>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Barba Forte</span>
<h3 className="text-on-surface font-bold text-sm leading-tight line-clamp-1">Óleo Premium 30ml</h3>
<div className="flex justify-between items-end mt-1">
<span className="text-on-surface font-black text-lg">R$ 54,00</span>
<button className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center active:scale-90 transition-transform neon-glow">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface-container rounded-3xl p-4 flex flex-col gap-3 group active:scale-[0.98] transition-all border border-white/5">
<div className="w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-high relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern professional barber scissors and comb lying on a textured black leather background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApyI-5ApKdET3IWD_tzEkUKv5IxBp-E_1fWDddnJ3AeACRYnCJecHVana6AEjQjy6x0GpxkQfDzHvi5JbUWKIiZAB02VmNcS_Cm7qmxiZISmedaGzTEjWMqNEItWg7sn_dzLxrdveHurHOxeRRoZhfGjBnJ0gnSztz_nNbe2W-dPVocjpKjxhoxi_gpSh9YX64DMiSquVpz8OGW8YOA0X_OW2-q9KsJyQTB7b3Ne0sKKh_llba38cSa30WuGxOzb0-SwhqxD2lwhpt"/>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Aparato</span>
<h3 className="text-on-surface font-bold text-sm leading-tight line-clamp-1">Pente de Carbono</h3>
<div className="flex justify-between items-end mt-1">
<span className="text-on-surface font-black text-lg">R$ 35,00</span>
<button className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center active:scale-90 transition-transform neon-glow">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-surface-container rounded-3xl p-4 flex flex-col gap-3 group active:scale-[0.98] transition-all border border-white/5">
<div className="w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-high relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Minimalist shampoo bottle for men with clean label design against a dark moody studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1YJ-PbrIV9B2ww9bQ1ke4P3zk3BqNfU81VjjNsMpdv23EU9ZFta8fdnwMC9bxYpTwNVk-D5HqGs0u_dSCTRmCpBdzdlvcCDdHIRBvkxw6jdIU4fU3D9aULWYtYvG71Ljq_JdDV9dLX2dPNOVZ8Trn0LbtGg7KT0x4KHABJQGtl8TC1eKO1Sg1qlrGw7b4-MC2ndrxfpk8jzv3tmIyqS22VBsT4pqDjLnyQQrJZwhLv_XfxtadkC6tw0zTKVzHvINPMUX75BI2sJk7"/>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Nivea Men</span>
<h3 className="text-on-surface font-bold text-sm leading-tight line-clamp-1">Shampoo Anticaspa</h3>
<div className="flex justify-between items-end mt-1">
<span className="text-on-surface font-black text-lg">R$ 28,90</span>
<button className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center active:scale-90 transition-transform neon-glow">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
</div>
</main>
{/* Floating PDV Bar (Above Bottom Nav) */}
<div className="fixed bottom-24 left-4 right-4 z-40">
<div className="bg-surface-container-high/90 backdrop-blur-2xl rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Total da Venda</span>
<span className="text-white font-black text-xl">R$ 143,90</span>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-3 rounded-2xl font-extrabold text-sm uppercase tracking-tight flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(200,255,0,0.4)]">
                Revisar Venda
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full h-20 bg-[#1A1919]/70 backdrop-blur-xl flex justify-around items-center px-4 pb-2 z-50 border-t border-[#C8FF00]/15 rounded-t-[24px] shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-1 hover:text-white transition-colors duration-300 active:scale-90 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-plus-jakarta-sans text-[10px] font-bold uppercase tracking-wider">Início</span>
</div>
{/* Active State for PDV (Vendas) */}
<div className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-1 active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>point_of_sale</span>
<span className="font-plus-jakarta-sans text-[10px] font-bold uppercase tracking-wider">Vendas</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-1 hover:text-white transition-colors duration-300 active:scale-90 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-plus-jakarta-sans text-[10px] font-bold uppercase tracking-wider">Produtos</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] px-4 py-1 hover:text-white transition-colors duration-300 active:scale-90 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
<span className="material-symbols-outlined">person</span>
<span className="font-plus-jakarta-sans text-[10px] font-bold uppercase tracking-wider">Perfil</span>
</div>
</nav>

    </div>
  );
};

export default PdvMobileSeleODeProdutos;
