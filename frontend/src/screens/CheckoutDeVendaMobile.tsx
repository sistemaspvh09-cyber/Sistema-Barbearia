
import React from 'react';

const CheckoutDeVendaMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-4">
<button className="active:scale-95 transition-all duration-300">
<span className="material-symbols-outlined text-[#C8FF00]">arrow_back</span>
</button>
<h1 className="font-plus-jakarta-sans tracking-tight font-extrabold text-white text-lg">Finalizar Venda</h1>
</div>
<div className="text-[#C8FF00] font-black text-xl">BarberPro</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-md mx-auto">
{/* Summary Section */}
<section className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Resumo dos Itens</h2>
<span className="text-xs bg-surface-container-high px-2 py-1 rounded-full text-primary">2 ITENS</span>
</div>
<div className="space-y-3">
{/* Item Card 1 */}
<div className="bg-surface-container p-4 rounded-3xl flex items-center justify-between group transition-all duration-300 hover:bg-surface-container-high">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-container-highest">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Premium hair pomade jar in minimalist black packaging with matte texture on a dark reflective surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4o-NVGvirWZIvLzbbJX2Ceqknqn1EnkqSozzRwduq-c_pltbS_B7Rv_Zg5VNCBZbNw6Oh9AS5LgQ1_NBRo1Y0oQbBtu5tgrjvePGXJIOolrurbmlYeDOQkquVnMbz0q-qPDGtU7_2Xkz61k_xhlbSlT9lYSm_kXMP8E5ppQD4rGwtKrP3PEMXElKio4GSoSBGFWSr5nldjaYTYPsePzRMOZbg5kDRrXWps6VqO8thL2opjhVNx4w4AsohGtBqgFObIRsU43vDcxe"/>
</div>
<div>
<p className="font-bold text-on-surface">Pomada Matte</p>
<p className="text-xs text-on-surface-variant">1x R$ 75,00</p>
</div>
</div>
<button className="p-2 text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
{/* Item Card 2 */}
<div className="bg-surface-container p-4 rounded-3xl flex items-center justify-between group transition-all duration-300 hover:bg-surface-container-high">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-container-highest">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Beard oil bottle with glass dropper against a dark elegant background with green accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH2fgU1cyKtfcoRwfg9LbBpQln_LlREmzf2CugC7gi7-kfsfHrAo39AEVM4Kx-RtRlg4lR-9LJ-3hxAX0-uc4VNgCqbhAbLp7kGme1ZLBV6__A4tirHKXgREqUu-mTmoJKj7Yox_9c0Zgv2C4fD-UI8_r0sc8oGgDDoFhH2Dhj0F2Z0GbNu2VoyzZOqXvzoAk6ErA1rlOl5qh_tCDiWwvdNEJHCaHzyPmlsPZ7rgaCUelxX5MOs_JfKOfBz1aJ1ZTEC8jDIcrCmS_8"/>
</div>
<div>
<p className="font-bold text-on-surface">Óleo de Barba</p>
<p className="text-xs text-on-surface-variant">1x R$ 50,00</p>
</div>
</div>
<button className="p-2 text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</section>
{/* Total Highlights */}
<div className="relative mb-10 overflow-hidden bg-primary-container p-6 rounded-3xl shadow-[0_20px_40px_rgba(200,255,0,0.15)] group">
<div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-on-primary-container opacity-5 rounded-full blur-2xl"></div>
<div className="flex justify-between items-end">
<div>
<p className="text-on-primary-container font-bold text-xs uppercase tracking-wider mb-1">Total da Venda</p>
<h3 className="text-on-primary-container font-black text-4xl tracking-tight">R$ 125,00</h3>
</div>
<div className="text-on-primary-container/60">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
</div>
</div>
</div>
{/* Payment Method Section */}
<section className="mb-10">
<h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">Escolha o Pagamento</h2>
<div className="grid grid-cols-1 gap-4">
{/* Pix */}
<button className="flex items-center justify-between p-5 rounded-3xl bg-surface-container border-2 border-primary-container/40 ring-4 ring-primary-container/10 transition-all active:scale-[0.98]">
<div className="flex items-center gap-4">
<div className="bg-primary-container/20 w-12 h-12 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container text-2xl">qr_code_2</span>
</div>
<div className="text-left">
<p className="font-bold text-white">Pix</p>
<p className="text-[10px] text-primary-container font-bold uppercase">Aprovação Imediata</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-primary-container flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
</div>
</button>
{/* Card */}
<button className="flex items-center justify-between p-5 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all active:scale-[0.98]">
<div className="flex items-center gap-4">
<div className="bg-surface-container-highest w-12 h-12 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-white text-2xl">credit_card</span>
</div>
<div className="text-left">
<p className="font-bold text-white">Cartão</p>
<p className="text-[10px] text-on-surface-variant font-medium uppercase">Crédito ou Débito</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
</button>
{/* Cash */}
<button className="flex items-center justify-between p-5 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all active:scale-[0.98]">
<div className="flex items-center gap-4">
<div className="bg-surface-container-highest w-12 h-12 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-white text-2xl">payments</span>
</div>
<div className="text-left">
<p className="font-bold text-white">Dinheiro</p>
<p className="text-[10px] text-on-surface-variant font-medium uppercase">Pagamento no Balcão</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
</button>
</div>
</section>
{/* Guarantee Text */}
<p className="text-center text-on-surface-variant/40 text-[10px] uppercase font-bold tracking-[0.2em]">100% em Português • BarberPro Cloud</p>
</main>
{/* Fixed Footer Action */}
<div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background/95 to-transparent">
<button className="w-full bg-[#C8FF00] text-[#4f6700] py-5 rounded-2xl font-black text-lg uppercase tracking-tight flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] neon-glow active:scale-95">
            Confirmar Pagamento R$ 125,00
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</div>

    </div>
  );
};

export default CheckoutDeVendaMobile;
