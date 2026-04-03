
import React from 'react';

const PerfilPBlicoDaBarbearia: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Fixed Header Background Shell */}
<header className="fixed top-0 left-0 right-0 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-8">
<div className="flex items-center gap-2">
<span className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</span>
</div>
<div className="flex items-center gap-6">
<button className="text-gray-400 hover:text-[#C8FF00] transition-colors font-semibold">Galeria</button>
<button className="text-gray-400 hover:text-[#C8FF00] transition-colors font-semibold">Serviços</button>
<button className="text-gray-400 hover:text-[#C8FF00] transition-colors font-semibold">Localização</button>
<div className="flex items-center gap-2 ml-4">
<span className="material-symbols-outlined text-gray-400">notifications</span>
<span className="material-symbols-outlined text-gray-400">help_outline</span>
</div>
</div>
</header>
<main className="pt-16 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Hero Section / Cover */}
<section className="relative mt-8 group">
<div className="w-full h-80 rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Luxury modern barbershop interior with dark wood, leather chairs, and moody ambient neon lighting at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKBcDVluGSj4qQ7Zg3FG7YKXwoX2ofZvJ2kmQu2flazvKWpfBIIBts0vC6uicSNqgVW3jYAH5ZmjFRy8hnc8E7IvyE_ad3pRtCURTbCWooJ_0_n-foheTDXOH9ygaTpJE_9e_n8h6J4-KhAO4dVBSGeZQPVg2UXIAPG3X7UgpyR9YXN__Ucf9ebmrYdU_T5-0g9w_HrvHb4BFYh56S9-p__AMq0t9ZXWwky6YHC-DfQ37CnrSE8XSgkC2llZGRfnnVzvHKr524XN0y"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute -bottom-12 left-12 flex items-end gap-6">
<div className="w-32 h-32 rounded-xl border-4 border-[#0D0D0D] overflow-hidden bg-surface-container neo-shadow">
<img className="w-full h-full object-cover" data-alt="Close-up of a sharp professional barber logo featuring shears and a razor on a dark textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCESFSfxNxh4jhqFPLZ3u9XVbb5SaG1_L4FtOhYPzgrE1XKxUpchy2Vo7ISGQr_fzK8SDYmvT561SmokX_A7LDSCjrCKvIBa3V2lIiwkYoeHbPSo0vznt4p2jyuNmAU_lHezQcbX2m7ttrMlAt0STm3N-oDWoNclJH-iEIPxKhr9I5HGrl7YENKWbgwzxyMLr7CtvNjuVk-qTuGIlH351vAcqSw9P5rukiZvtqSdXH1CG35G6PDXziTLiENBhaRfGDzzTz2KC7RmElw"/>
</div>
<div className="pb-4">
<h1 className="text-4xl font-extrabold tracking-tight text-white mb-1">Elite Grooming Studio</h1>
<p className="text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                        Referência em Visagismo &amp; Estética Masculina
                    </p>
</div>
</div>
</section>
{/* Bento Grid Gallery */}
<section className="mt-24">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-bold tracking-tight text-white">Galeria de Estilo</h2>
<p className="text-on-surface-variant text-sm mt-1">Nossa curadoria de cortes e finalizações premium.</p>
</div>
<button className="text-[#C8FF00] font-bold text-sm hover:underline">Ver todas</button>
</div>
<div className="grid grid-cols-12 gap-4 h-[600px]">
<div className="col-span-8 h-full rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional barber performing a precise skin fade on a male client with focus on the razor technique" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5L8_QUZ1s_jcM8CvqRtOWRTJZ_v3020U41Q8VLOqN0sxTrJ8HNch5Nil5nygg62AB0EPoufwH6cterZ8G5CQ-A5_-znRwBL7CuDvsBAEv_if_B4DkWxoDcYuacRIz0KEyouoTucq-psFnHK8mMAJ3BfHqheUZw8M3_0AtvQZm0He6pEZrl0Fw17NS0CMQcg2zAjMAKG1nR2gKoq4v9nt_MTZqjK5bY2rKsSPry3nBgF53P_Mb4L9nZIjL0P_3pUBcJwvCRnQWeg09"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="col-span-4 grid grid-rows-2 gap-4 h-full">
<div className="rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of a well groomed beard and mustache with sharp clean lines in a high contrast setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH1iZrOxGOumg2mPXBU9UD8HL2m5HknDRVUNuDOkiwGMKtNX7KD-BPgKy8u7utpH2Z-WKWVrGBs-ptrJrxErE8my5KmZ3EG6_WRSXOtjqh18XUNXkhHWr6-V_Q334DTQAPq8BEDTtPWVR8EmEt1AAaxCZn3bzPz-GfmZ_KmLylD6H29oHb8gl5-GYwaCd_0KJUjV-0mjA5v8nLhgmJjj02lpLZompUoXKa4HNsGOVHGG6dqKnQ7JQlPgbJSObb5RJW8wrrcNTuo6Br"/>
</div>
<div className="rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Classic barber accessories including scissors and combs resting on a clean metallic surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzv1ftaqBro7ZTF_lWbiQJFR7TZRpY1i3l5SiqN74zQsTjWIabyvLpmPQEVjeq_81rOzmztW5EFS9eB5rBq4V0_usPH_I-UR0gr01yl7kbwNDsCtUEkF08hYJEs3Nx7b138lx6djwswBDv2DwQl9dhAj-Bm8pmocvhiuhAxLzKmWVv1L5QoFdyps9DyRED8k6Sgzd4Ts9MB8lWMe1s673aHUzvyfKOG3xB_B37Xx_DTcrBXzIpClHjczOz4sv2LQo_5_vG7dScvWJ2"/>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="mt-20">
<h2 className="text-2xl font-bold tracking-tight text-white mb-8">Nossos Serviços</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Service Card */}
<div className="glass-card p-6 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-white/10 transition-all">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">content_cut</span>
</div>
<div>
<h3 className="font-bold text-lg text-white">Corte Social Premium</h3>
<p className="text-on-surface-variant text-sm">Corte clássico com acabamento na navalha.</p>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-xl">R$ 65</span>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">45 min</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-white/10 transition-all">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">face</span>
</div>
<div>
<h3 className="font-bold text-lg text-white">Barba de Respeito</h3>
<p className="text-on-surface-variant text-sm">Design de barba com toalha quente.</p>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-xl">R$ 45</span>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">30 min</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-white/10 transition-all">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">cleaning_services</span>
</div>
<div>
<h3 className="font-bold text-lg text-white">Combo Elite</h3>
<p className="text-on-surface-variant text-sm">Corte + Barba + Sobrancelha.</p>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-xl">R$ 100</span>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">75 min</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-white/10 transition-all">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">brush</span>
</div>
<div>
<h3 className="font-bold text-lg text-white">Pigmentação Capilar</h3>
<p className="text-on-surface-variant text-sm">Correção de falhas e realce de linhas.</p>
</div>
</div>
<div className="text-right">
<span className="text-[#C8FF00] font-extrabold text-xl">R$ 35</span>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">20 min</p>
</div>
</div>
</div>
</section>
{/* Floating CTA Button */}
<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
<button className="bg-[#C8FF00] text-[#4f6700] px-10 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 shadow-[0px_10px_30px_rgba(200,255,0,0.3)] hover:scale-105 active:scale-95 transition-all neon-glow">
<span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                Agendar Agora
            </button>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-low border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<h4 className="text-xl font-extrabold text-[#C8FF00] mb-6">BarberPro</h4>
<p className="text-on-surface-variant leading-relaxed max-w-xs">
                    Transformando o conceito de barbearia tradicional em uma experiência digital de luxo e precisão.
                </p>
</div>
<div>
<h4 className="font-bold text-white mb-6">Localização</h4>
<div className="flex gap-3 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-[#C8FF00]">location_on</span>
<p>Av. das Nações Unidas, 14401<br/>Chácara Santo Antônio, São Paulo - SP</p>
</div>
<div className="flex gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-[#C8FF00]">schedule</span>
<p>Seg - Sáb: 09:00 - 21:00</p>
</div>
</div>
<div>
<h4 className="font-bold text-white mb-6">Siga-nos</h4>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#C8FF00]/10 transition-colors" href="#">
<img className="w-5 h-5 opacity-70" data-alt="Instagram icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwt211UHJuEMhA_Av6xsjjx6ew_TPV51kNhrq4ydM3dwBL8FW6SyXamRINIEVMTFfHyw7MyESm07H1RrIa44N-y1sctyN1Bq__rL_dC_QkF81Nb7V5WLXR3yulQp-UeHYqfX1iZUqyRhjiZH9D7LxKLPmu8bp-ikiaBY-1Men_3BX6cHRowYINfFA7_NQyNY4c9sg5eTDjRhJIOwKf8OWA0wrM9940pSuNkk86ZgjMMTUfOzZgpEkBL4_-lxTjeDw7pwP95zRVgLMP"/>
</a>
<a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#C8FF00]/10 transition-colors" href="#">
<img className="w-5 h-5 opacity-70" data-alt="WhatsApp icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcD4iitGAKx5nOjioBuo7WR9LWL16E-8SAzHbPLesMdU9MuCiV9WIraBx_sRxSS2n6cDS9rwyYinNCRF3TuiIds79Gi8rbYXZ-g09BS6PLXWu00VtStFw1oES-JzGRGOwsDF-Asi2k7L7qr2cmV-xtWEWWxjaQqSBSg51QFT9gFW7RN1OwZGSOtRpROKYY6yhBitmQ3-br0Vxj1v6QA1SwOy2KpXcCP5LxxDygOBpKiQp-qag9VvOaBT5CkW3KJBINQ_F40SOh1Z6"/>
</a>
<a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#C8FF00]/10 transition-colors" href="#">
<span className="material-symbols-outlined text-white/70">share</span>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-white/5 text-center text-on-surface-variant text-xs tracking-widest uppercase">
            © 2024 BarberPro Technology. Todos os direitos reservados.
        </div>
</footer>

    </div>
  );
};

export default PerfilPBlicoDaBarbearia;
