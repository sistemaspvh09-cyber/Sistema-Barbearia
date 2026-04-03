
import React from 'react';

const EntrarOuCriarConta: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Background Decoration */}
<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-container/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] bg-primary-container/3 rounded-full blur-[150px]"></div>
</div>
{/* Main Auth Container */}
<main className="w-full max-w-[480px] space-y-8">
{/* Brand Header (Simplified TopAppBar context) */}
<header className="text-center space-y-2">
<h1 className="font-headline font-black text-4xl sm:text-5xl text-primary-container uppercase tracking-tighter">
                BarberPro
            </h1>
<p className="text-on-surface-variant font-medium tracking-wide text-sm sm:text-base">
                EXPERIÊNCIA PREMIUM EM CADA CORTE
            </p>
</header>
{/* Auth Card */}
<div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl relative">
{/* Tabs Navigation */}
<nav className="flex w-full mb-8 bg-surface-container-low p-1.5 rounded-xl">
<button className="flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-lg bg-primary-container text-on-primary-container shadow-lg">
                    Entrar
                </button>
<button className="flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-lg text-on-surface-variant hover:text-on-surface">
                    Cadastrar
                </button>
</nav>
{/* Login Section (Active by default) */}
<section className="space-y-6">
<div className="space-y-4">
{/* Email Input */}
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant ml-1">E-mail</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors" data-icon="mail">mail</span>
<input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface placeholder:text-outline transition-all focus:ring-0" placeholder="seu@email.com" type="email"/>
</div>
</div>
{/* Password Input */}
<div className="space-y-1.5">
<div className="flex justify-between items-center ml-1">
<label className="text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">Senha</label>
<a className="text-xs font-bold text-primary-container hover:underline tracking-tighter" href="#">Esqueceu?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors" data-icon="lock">lock</span>
<input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface placeholder:text-outline transition-all focus:ring-0" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
{/* Primary Action */}
<button className="w-full h-14 bg-primary-container text-on-primary font-black text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300 scale-100 active:scale-[0.98] neon-glow">
                    Acessar Conta
                </button>
{/* Divider */}
<div className="relative flex items-center py-4">
<div className="flex-grow border-t border-outline-variant/20"></div>
<span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">Ou continue com</span>
<div className="flex-grow border-t border-outline-variant/20"></div>
</div>
{/* Social Login */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-3 h-12 bg-surface-container-high border border-outline-variant/20 rounded-xl hover:bg-surface-bright transition-colors group">
<img alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100" data-alt="minimalist color google logo icon on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZL68vS__pF9F7yWtQRpTtNljrZlfixl7lZoYc2krbVcn3hZ5aOLgKW7kHe0e65zlPj2WT5kdwKpS59ZhbByEXYYInJFb6mc241fhl_PxJoxdhb-WQL1KbuI01uF7QXoxGKekE5-M7-1YHq5Xxz2xuZjmtscaLnsT0X68OIJBRIRpYCvAhlzrMJ83pOZblnN5k4lsYPb_a1-_TvSAUsFesd5uuRd60XpTVa1RwmKhOBRbanX95d-uN1dwpi_CIn-XSueTGzFDA8NL"/>
<span className="text-xs font-bold tracking-tight">Google</span>
</button>
<button className="flex items-center justify-center gap-3 h-12 bg-surface-container-high border border-outline-variant/20 rounded-xl hover:bg-surface-bright transition-colors group">
<span className="material-symbols-outlined text-xl opacity-80 group-hover:opacity-100" data-icon="phone_iphone">phone_iphone</span>
<span className="text-xs font-bold tracking-tight">Apple</span>
</button>
</div>
</section>
</div>
{/* Visual Credibility Section */}
<footer className="flex flex-col items-center space-y-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional barber with tattoos and focused expression cutting hair in dark studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMFR87R--RXd8DynXiru7cWfTXqQPuBLCM7FyT-f4DtLzUPwA51hOCrmAcRXvK6OQ90d2hNXCOWP4WyXByHEHvMrLaCUvbA7XvCZf_eJtYAT8v9h-2PFugIHwNzvbLUPQhdN10gKan4zAmPMOUIq4w7_vtxVBE6Ie88z9V2fd2fPWicB-pTOssyxdK2htMCueljDcTkcXp6gvALHdS_BBJuKVkbbVuRDnndDK3YIu2yGlo_1nVt4p0Hg8Ac2YeFhRqOvDneKgEWFhc"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
<img className="w-full h-full object-cover" data-alt="modern barbershop interior with neon lighting and premium black chairs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4sszASQrt-OZFI355QyJU5R8enHmHuak1l7uVDOCvRPqMvkwjQJIioUymQVovhuuN5Orw4NBQY5Pc85cr_cHKZ_zvuZYQJgvgGNuUNZwQZWNHeZcYn_wPsWEQBVBh4uEjh7KMjmBGA1VDcalq8p4D1n_Hz9x2DvBxeMZlPGfQBRsO2xtolUq3eiDsoTm76TxS0fIBkt33LOl9ru8Wu6BkpWWKkFiRNaZwx8NnfJsdzsrJnzAqU1zsApHEkOvEWo9eccRbrrZ2ylqt"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-primary-container flex items-center justify-center">
<span className="text-[10px] font-black text-on-primary">5k+</span>
</div>
</div>
<p className="text-on-tertiary-fixed-variant text-xs text-center max-w-[280px] leading-relaxed">
                Junte-se a mais de <span className="text-primary-container font-bold">5.000 clientes</span> que valorizam a precisão e o estilo.
            </p>
</footer>
</main>
{/* Background Image Asset (Abstract Neon) */}
<div className="fixed bottom-0 left-0 w-full h-64 -z-20 opacity-20 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="abstract architectural lines with neon green light reflections on dark metallic surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9-CHN925rGfQTfTeXAdgDt9B72lBU4RBX-7BiQVcpNPdmBxGiA9dB2TcW3tOrXnGZtjErBXwsQrDLkx459JGjoLrknTvf-FgUF8owa0UbgdUh0_4vNE64bwyi4d1_7VzexVKQ-zFgKCIs9Uz3xlKrI1qHlcLUTD9rJ8G-i13zbDw5jwRTOL2TtBbie0xubOPbE4hVGFCC1vm7_9TPMaNKGewB84AlskSU2TY1KUgOBnKYPm3WqA1TRB6GyTSTNfMl1lG2FtatXqyD"/>
</div>

    </div>
  );
};

export default EntrarOuCriarConta;
