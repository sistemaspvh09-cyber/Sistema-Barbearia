
import React from 'react';

const ConfiguraODoPerfilPBlico: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Sidebar Navigation */}
<aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-[#1A1919] border-r border-[#A0A0A0]/10 shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-50">
<div className="flex flex-col gap-y-2 p-4 h-full">
<div className="mb-8 px-2">
<span className="text-lg font-black text-white tracking-tighter">BarberPro</span>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Painel de Gestão</p>
</div>
<nav className="flex flex-col gap-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span> Dashboard
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_month</span> Agendamentos
                </a>
{/* Active Tab */}
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl font-bold shadow-[0_0_15px_rgba(200,255,0,0.3)] active:scale-[0.98] transition-all font-['Plus_Jakarta_Sans'] text-sm" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined">storefront</span> Perfil Público
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">group</span> Equipe
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined">payments</span> Financeiro
                </a>
</nav>
<div className="mt-auto pt-4 border-t border-outline-variant/10 flex flex-col gap-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:bg-white/5 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined">help_outline</span> Suporte
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error/10 rounded-xl hover:translate-x-1 transition-all duration-300 font-['Plus_Jakarta_Sans'] text-sm font-medium" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined">logout</span> Sair
                </a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="ml-64 min-h-screen">
{/* Top App Bar */}
<header className="bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#A0A0A0]/15 shadow-2xl shadow-black/50 sticky top-0 z-40 flex justify-between items-center w-full px-8 py-4">
<div className="flex flex-col">
<h1 className="text-xl font-extrabold text-[#C8FF00] tracking-tighter font-['Plus_Jakarta_Sans']">Configurações do Perfil</h1>
<p className="text-xs text-on-surface-variant">Personalize como os clientes veem sua barbearia no app</p>
</div>
<div className="flex items-center gap-4">
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-2.5 rounded-xl font-bold text-sm neon-shadow transition-all active:scale-95 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">save</span>
                    Salvar Perfil Público
                </button>
<div className="flex items-center gap-2 ml-4">
<button className="text-[#A0A0A0] hover:text-white transition-colors duration-300 material-symbols-outlined">notifications</button>
<button className="text-[#A0A0A0] hover:text-white transition-colors duration-300 material-symbols-outlined">settings</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional portrait of a barber in a clean modern shop setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYSqzRSlXUtc31UG5C-cphdpyO_7vtEkR7dT3Mel8g1k7H2NVMXX2sQaxT_eX29jcKAeKLkEBKHNg6SF8QOzV_W0dm9ja8WA0DDFwnqwIKh7Oo-gPABPumxLVYikjoYrJ84a9bg3IVUpHiEGyc842sFQblWdL8cPMH3nOeki5Be9x4R2UJe2xsldtCeMuUV4txDeHI7-EsyW_iTMUuMBpz-5iUxswA5w1euUtWvCjerPMnb0gmmBg5O2iPuze39A7B45AH9rAutry6"/>
</div>
</div>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto grid grid-cols-12 gap-8">
{/* Left Column: Basic Info & Social */}
<div className="col-span-12 lg:col-span-7 space-y-8">
{/* Basic Info Card */}
<section className="bg-surface-container p-8 rounded-xl glass-border shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container">info</span>
<h2 className="text-lg font-bold tracking-tight">Informações Básicas</h2>
</div>
<div className="space-y-6">
<div className="group">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Nome da Barbearia</label>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 px-4 rounded-t-lg transition-all" placeholder="Ex: BarberPro Premium" type="text" value="Vintage Blade Studio"/>
</div>
<div>
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Descrição Premium (Bio)</label>
<textarea className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 px-4 rounded-t-lg transition-all resize-none" placeholder="Conte a história da sua barbearia..." rows="4">Referência em cortes clássicos e barboterapia moderna. Ambiente exclusivo com café gourmet, trilha sonora em vinil e os melhores especialistas da região.</textarea>
<p className="text-[10px] text-on-surface-variant mt-2 text-right italic">Máximo 250 caracteres</p>
</div>
</div>
</section>
{/* Social Media Card */}
<section className="bg-surface-container p-8 rounded-xl glass-border shadow-2xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container">share</span>
<h2 className="text-lg font-bold tracking-tight">Presença Digital</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">photo_camera</span>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 pl-12 pr-4 rounded-t-lg transition-all" placeholder="Instagram" type="text" value="@vintageblade_studio"/>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">chat</span>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 pl-12 pr-4 rounded-t-lg transition-all" placeholder="WhatsApp" type="text" value="+55 11 99999-9999"/>
</div>
<div className="md:col-span-2 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">social_leaderboard</span>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 pl-12 pr-4 rounded-t-lg transition-all" placeholder="Página do Facebook" type="text" value="facebook.com/vintageblade"/>
</div>
</div>
</section>
{/* Style Gallery Card */}
<section className="bg-surface-container p-8 rounded-xl glass-border shadow-2xl">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container">gallery_thumbnail</span>
<h2 className="text-lg font-bold tracking-tight">Galeria de Estilo</h2>
</div>
<button className="text-xs font-bold text-primary-container flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-sm">add_a_photo</span> Adicionar Foto
                        </button>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="close-up of a sharp fade haircut with precise line-up in a professional studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChL8nVF0feKV-nSNBYSwp6XDHm4CYi6hvUJrpbj_Q-t1mtLMrw40md_bcWyuWGZPZTHf-7vl-QWXf9m-R6MVjeUsk9dfyakGlJmqS8TzJmyku_-r7hMgc9YkptlSX7yhmoLwCTKGpSFCwgAVfX7K1Ppy41W_UbH-92HfufwgHzmyqj4lohqDj1sdyXcqyBwlgr68ynqizP2xbQN1vPN3rnRoyvirIDh-5rfeHNPh8Krfz0U8cypyhlXG8Zm7YQuAIbnzDTNNyioHR5"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80 transition-colors">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="modern barber shop interior with luxury leather chairs and warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-JzN8wyQ1bEuavTjD8ua1pTpVgfdICOT0higJtZaqpHbikaMV4eomo9nk7mcvcEqXHlGQeW97P4LFIWaShEkfqY4mkDprxsOEoeJ6HSSYosikSZrUAKTo_zem7ua80QRbaC37OQ9h0_k3r0cBfoyJx876nCvn-v0tksCSK8z0ya_DB7vU96EkC-bGr4GaALlafLNDtwa2XraK3SmbJrp7nAULNt0otyjtP_gRo07GMbPgd4GEPcLrwax_fzEXRAXfF-VBPM5mFsw"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80 transition-colors">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
</div>
<div className="aspect-square rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all cursor-pointer">
<span className="material-symbols-outlined text-3xl mb-2">upload_file</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
</div>
</div>
</section>
</div>
{/* Right Column: Location & Hours */}
<div className="col-span-12 lg:col-span-5 space-y-8">
{/* Location Card */}
<section className="bg-surface-container p-8 rounded-xl glass-border shadow-2xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container">map</span>
<h2 className="text-lg font-bold tracking-tight">Localização</h2>
</div>
<div className="space-y-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3 pl-12 pr-4 rounded-t-lg transition-all text-sm" type="text" value="Av. Paulista, 1000 - Bela Vista, São Paulo"/>
</div>
<div className="h-48 w-full rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="minimalist dark map interface showing a specific urban pin location with neon green accent" data-location="São Paulo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjVcoHNuOMWD_slCneF8RM6hyN1RaiLjc9A7pLfPuViHhHqEAgkO9sAHpOC935I5YoYdB4HLfS-EkS_e6K1NnLKxxGoc_flVOC2u72VgETB0SOb32PuY7DEKx1e3hwLuZLntnavIFFxaD9jzTr-B4_NMUPP1VHFQ1tkstqJ1Osys51mBcFC13obWyUBTkQkcao9eSYbaBv4W7BWlU_u-wL2fXxaxSjTOb5g9cOq5JfFBS88hydIwn6O1woKPn736OAq3wmTjBNO6Lf"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<span className="material-symbols-outlined text-primary-container text-4xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
</div>
<button className="absolute bottom-4 right-4 z-30 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-white glass-border">Abrir no Maps</button>
</div>
</div>
</section>
{/* Business Hours Card */}
<section className="bg-surface-container p-8 rounded-xl glass-border shadow-2xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container">schedule</span>
<h2 className="text-lg font-bold tracking-tight">Horário Público</h2>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/50 glass-border">
<span className="text-sm font-semibold">Segunda - Sexta</span>
<div className="flex items-center gap-2">
<input className="w-16 bg-transparent border-0 border-b border-outline-variant/50 text-center text-sm p-1 focus:ring-0 focus:border-primary" type="text" value="09:00"/>
<span className="text-xs opacity-50">às</span>
<input className="w-16 bg-transparent border-0 border-b border-outline-variant/50 text-center text-sm p-1 focus:ring-0 focus:border-primary" type="text" value="20:00"/>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/50 glass-border">
<span className="text-sm font-semibold">Sábado</span>
<div className="flex items-center gap-2">
<input className="w-16 bg-transparent border-0 border-b border-outline-variant/50 text-center text-sm p-1 focus:ring-0 focus:border-primary" type="text" value="08:00"/>
<span className="text-xs opacity-50">às</span>
<input className="w-16 bg-transparent border-0 border-b border-outline-variant/50 text-center text-sm p-1 focus:ring-0 focus:border-primary" type="text" value="18:00"/>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-error/5 glass-border border-error/20">
<span className="text-sm font-semibold text-error">Domingo</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-error">Fechado</span>
</div>
<div className="pt-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-10 h-5 bg-surface-container-highest rounded-full transition-colors group-hover:bg-primary-container/20"></div>
<div className="dot absolute left-1 top-1 bg-on-surface-variant w-3 h-3 rounded-full transition-all transform translate-x-5 !bg-primary-container"></div>
</div>
<span className="text-xs font-medium text-on-surface-variant">Mostrar horários de feriados</span>
</label>
</div>
</div>
</section>
{/* Premium Badge Preview */}
<div className="bg-primary-container/10 p-6 rounded-xl border border-primary-container/20 flex items-center gap-4 group cursor-help">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(200,255,0,0.2)]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<div>
<h4 className="text-sm font-bold text-primary-container">Selo de Verificação Ativo</h4>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Perfil Premium BarberPro</p>
</div>
</div>
</div>
</div>
{/* Footer Floating Action (Mobile only indicator or extra space) */}
<div className="p-8 mt-auto flex justify-end gap-4 bg-surface-container-low/50 backdrop-blur-sm border-t border-outline-variant/10">
<button className="px-6 py-2.5 rounded-xl font-bold text-sm text-on-surface-variant hover:text-white transition-all">Descartar Alterações</button>
<button className="bg-[#C8FF00] text-[#4f6700] px-8 py-2.5 rounded-xl font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-lg">public</span>
                Publicar Perfil
            </button>
</div>
</main>

    </div>
  );
};

export default ConfiguraODoPerfilPBlico;
