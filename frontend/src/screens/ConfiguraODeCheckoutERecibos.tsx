
import React from 'react';

const ConfiguraODeCheckoutERecibos: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* TopNavBar */}
<header className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0px_4px_20px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</span>
<nav className="hidden md:flex gap-6 ml-8">
<a className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300 font-plus-jakarta-sans font-medium tracking-tight" href="#">Dashboard</a>
<a className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors duration-300 font-plus-jakarta-sans font-medium tracking-tight" href="#">Financeiro</a>
<a className="text-[#C8FF00] font-bold font-plus-jakarta-sans tracking-tight" href="#">Checkout</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">notifications</button>
<button className="material-symbols-outlined text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">settings</button>
<img alt="Foto do Perfil do Gestor" className="w-8 h-8 rounded-full border border-[#C8FF00]/30" data-alt="professional portrait of a barber shop manager with a stylish undercut and groomed beard, neutral expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXrC4aRfE690QTjcyp7QKIKUlS8PXtDOSF3DOI_0oq1hvenCt4OB_9gYB09iMzg5z9_8J6rwXKIViu0FL65QDqGB6yzQn6KbGtHGwyUx76Qaq3-4XweNHlHDWFR_EclQTKLc2oauiP1Wy4RIsnnlpefEjwduuJGZ4VBSRfxtUKemjNMNuqeuwap2LfdDG_lAowwpbtWC0L7pGeWJ314gVmM1BINgSCdK0W_g7-TH1J5-yeqA9oWXdj_mWC-fQDQgzqCtIKBLJqANxV"/>
</div>
</div>
</header>
{/* SideNavBar (Desktop Only) */}
<aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#1A1919] shadow-2xl flex-col py-8 gap-2 z-40 mt-16">
<div className="px-6 mb-8">
<h2 className="text-[#C8FF00] font-bold text-lg">Menu Admin</h2>
<p className="text-[#A0A0A0] text-xs">Gestão de Alta Performance</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300 ease-in-out font-plus-jakarta-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300 ease-in-out font-plus-jakarta-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined">payments</span> Financeiro
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300 ease-in-out font-plus-jakarta-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined">group</span> Equipe
            </a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#C8FF00]/10 text-[#C8FF00] border-r-4 border-[#C8FF00] transition-all duration-300 ease-in-out font-plus-jakarta-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined">shopping_cart_checkout</span> Checkout
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-[#A0A0A0] hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-all duration-300 ease-in-out font-plus-jakarta-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined">analytics</span> Relatórios
            </a>
</nav>
<div className="mt-auto px-6 flex flex-col gap-2">
<a className="flex items-center gap-3 py-2 text-[#A0A0A0] hover:text-[#C8FF00] text-sm" href="#"><span className="material-symbols-outlined">help_center</span> Suporte</a>
<a className="flex items-center gap-3 py-2 text-[#A0A0A0] hover:text-error text-sm" href="#"><span className="material-symbols-outlined">logout</span> Sair</a>
</div>
</aside>
{/* Main Content */}
<main className="md:ml-64 pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
<header className="mb-10">
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 neon-glow">Configurações de Checkout</h1>
<p className="text-on-surface-variant max-w-2xl">Gerencie a experiência de pagamento do cliente, desde a impressão térmica até o envio de recibos digitais via WhatsApp.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Settings Panel */}
<section className="lg:col-span-7 space-y-8">
{/* Receipt Automation & Connectivity */}
<div className="bg-surface-container rounded-xl p-6 border border-white/5 shadow-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-fixed p-2 bg-primary-fixed/10 rounded-lg">print</span>
<h3 className="text-xl font-bold">Impressão e Automação</h3>
</div>
<div className="space-y-6">
{/* Toggle Switch */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
<div>
<p className="font-bold text-on-surface">Recibo Automático</p>
<p className="text-xs text-on-surface-variant">Imprimir após cada pagamento confirmado</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/* Printer Setup */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="flex flex-col items-center justify-center p-6 border-2 border-primary-container/20 hover:border-primary-container bg-surface-container-lowest rounded-2xl transition-all group">
<span className="material-symbols-outlined text-3xl mb-2 text-primary-fixed group-hover:scale-110 transition-transform">bluetooth</span>
<span className="font-semibold text-sm">Parear Bluetooth</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Conectado: MTP-II</span>
</button>
<button className="flex flex-col items-center justify-center p-6 border-2 border-transparent hover:border-primary-container bg-surface-container-low rounded-2xl transition-all group">
<span className="material-symbols-outlined text-3xl mb-2 text-on-surface-variant group-hover:text-primary-fixed transition-colors">usb</span>
<span className="font-semibold text-sm">Conectar USB</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Nenhum Dispositivo</span>
</button>
</div>
</div>
</div>
{/* Digital Engagement */}
<div className="bg-surface-container rounded-xl p-6 border border-white/5 shadow-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-fixed p-2 bg-primary-fixed/10 rounded-lg">chat</span>
<h3 className="text-xl font-bold">Engajamento Digital</h3>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl mb-4">
<div className="flex gap-4 items-center">
<span className="material-symbols-outlined text-[#25D366]">phone_iphone</span>
<div>
<p className="font-bold text-on-surface">Recibo via WhatsApp</p>
<p className="text-xs text-on-surface-variant">Enviar automaticamente para o cliente</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
{/* Receipt Editor */}
<div className="bg-surface-container rounded-xl p-6 border border-white/5 shadow-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-fixed p-2 bg-primary-fixed/10 rounded-lg">edit_note</span>
<h3 className="text-xl font-bold">Conteúdo do Recibo</h3>
</div>
<div className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Cabeçalho (Nome/Logo)</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container outline-none transition-all" type="text" value="BARBERPRO MATRIZ"/>
</div>
<div>
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">CNPJ / Identificador</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container outline-none transition-all" type="text" value="12.345.678/0001-90"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Mensagem de Rodapé</label>
<textarea className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none" rows="3">Obrigado pela preferência! Agende seu próximo corte via App e ganhe 10% de desconto.</textarea>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-xl shadow-[0px_0px_20px_rgba(200,255,0,0.3)] hover:scale-102 active:scale-98 transition-all flex items-center gap-2">
<span className="material-symbols-outlined">save</span>
                        Salvar Configurações
                    </button>
</div>
</section>
{/* Preview Panel */}
<section className="lg:col-span-5 sticky top-24">
<div className="bg-surface-container-high rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden relative">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/10 blur-[80px] rounded-full"></div>
<h4 className="text-xs font-bold text-primary-container uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                        Preview em Tempo Real
                    </h4>
{/* The Thermal Receipt Mockup */}
<div className="bg-white text-black p-6 mx-auto w-full max-w-[280px] thermal-receipt shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-1 flex flex-col items-center">
{/* Top Serrated Edge */}
<div className="w-full flex justify-between gap-1 mb-4">
<div className="w-full h-1 bg-white" style={{ clipPath: 'polygon(0 100%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)' }}></div>
</div>
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<p className="font-extrabold text-sm text-center leading-tight mb-1">BARBERPRO MATRIZ</p>
<p className="text-[10px] mb-4">CNPJ: 12.345.678/0001-90</p>
<div className="w-full border-t border-dashed border-black/30 my-2"></div>
<div className="w-full text-[11px] font-mono space-y-1">
<div className="flex justify-between">
<span>CORTE DEGRADÊ</span>
<span>R$ 45,00</span>
</div>
<div className="flex justify-between">
<span>BARBA TERAPIA</span>
<span>R$ 35,00</span>
</div>
</div>
<div className="w-full border-t border-dashed border-black/30 my-2"></div>
<div className="w-full flex justify-between font-extrabold text-lg mt-2">
<span>TOTAL</span>
<span>R$ 80,00</span>
</div>
<div className="mt-6 mb-4">
<img alt="QR Code" className="w-20 h-20 opacity-80" data-alt="minimal black and white qr code graphic on white thermal paper background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZHQ1Wi4oZfz4EbiSr09AuU1S2b_2f8OW2--WHTOquknePSLLGRf8KF1JkfEzJMVscuCt5uSYsx6cHTSUMzZNfociFe6ffQA3oSqljFznDCVj8qHYBzsR__V0KgwYjTIKprxlNVjL2TI2skkA6y8KsHjQfKQUtZjWZHO0OvmJXea9k_9f1QW_xjoZU-HaUBBuOnGOFiBc5yxXha9ghJL1AVVwQvkEFD3hFYHgnk6fPsIob0z2Ez7XJOkqv_M1qP9axCSNIXV0BzNha"/>
</div>
<p className="text-[10px] text-center italic leading-tight px-4 border-t border-dashed border-black/20 pt-4 mt-2">
                            Obrigado pela preferência! Agende seu próximo corte via App e ganhe 10% de desconto.
                        </p>
<p className="text-[8px] mt-4 opacity-50">24/05/2024 14:32 - PDV #01</p>
{/* Bottom Serrated Edge */}
<div className="w-full flex justify-between gap-1 mt-4">
<div className="w-full h-1 bg-white" style={{ clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)' }}></div>
</div>
</div>
<div className="mt-8 flex justify-center gap-4">
<button className="bg-surface-bright p-3 rounded-full hover:bg-primary-container/20 transition-colors group">
<span className="material-symbols-outlined group-hover:text-primary-container">print</span>
</button>
<button className="bg-surface-bright p-3 rounded-full hover:bg-primary-container/20 transition-colors group">
<span className="material-symbols-outlined group-hover:text-primary-container">share</span>
</button>
<button className="bg-surface-bright p-3 rounded-full hover:bg-primary-container/20 transition-colors group">
<span className="material-symbols-outlined group-hover:text-primary-container">download</span>
</button>
</div>
</div>
</section>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-lg rounded-t-3xl border-t border-[#C8FF00]/10 flex justify-around items-center px-4 h-20 pb-safe shadow-[0px_-10px_30px_rgba(0,0,0,0.8)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Financeiro</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C8FF00] bg-[#C8FF00]/10 rounded-xl px-4 py-1 scale-110 duration-300" href="#">
<span className="material-symbols-outlined">shopping_cart_checkout</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Checkout</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0]" href="#">
<span className="material-symbols-outlined">tune</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Ajustes</span>
</a>
</nav>

    </div>
  );
};

export default ConfiguraODeCheckoutERecibos;
