
import React from 'react';

const IntegraOGoogleAgendaAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Authority: JSON & Design System) */}
<aside className="hidden md:flex flex-col fixed left-0 top-0 h-full h-screen w-64 border-r border-[#C8FF00]/10 bg-[#1A1919] z-40 shadow-2xl shadow-black font-plus-jakarta text-sm font-semibold">
<div className="p-8">
<h1 className="text-2xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-xs text-on-surface-variant mt-1 opacity-70">Premium Management</p>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 hover:bg-white/5 transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 hover:bg-white/5 transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span>Barbers</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-3 hover:bg-white/5 transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Commission</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 mx-2 transition-all duration-300 shadow-[0px_0px_20px_rgba(200,255,0,0.2)]" href="#">
<span className="material-symbols-outlined">calendar_month</span>
<span>Calendar</span>
</a>
</nav>
<div className="p-6 border-t border-white/5 space-y-4">
<button className="w-full bg-white/5 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
<span className="material-symbols-outlined text-sm">add</span>
                New Appointment
            </button>
<div className="space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-white px-4 py-2 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-lg">help</span>
                    Support
                </a>
<a className="flex items-center gap-3 text-error/70 hover:text-error px-4 py-2 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-lg">logout</span>
                    Logout
                </a>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="md:ml-64 min-h-screen pb-24 md:pb-8">
{/* TopAppBar (Authority: JSON & Design System) */}
<header className="fixed top-0 w-full z-30 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 py-4 md:pr-72 lg:pr-[300px]">
<div className="flex items-center gap-4">
<span className="md:hidden text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</span>
<h2 className="text-[#C8FF00] font-bold text-sm tracking-tight font-plus-jakarta hidden md:block">Configurações de Integração</h2>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-[#A0A0A0] cursor-pointer hover:text-[#C8FF00] transition-colors">notifications</span>
<span className="material-symbols-outlined text-[#C8FF00] cursor-pointer active:scale-95 transition-transform">settings</span>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8FF00]/20">
<img className="w-full h-full object-cover" data-alt="close-up portrait of a professional male barber with styled beard in a dark premium setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgFRyziW-pv_C9ADQn6zIKEfy9HcdPRVsiZ6-63Wnk4gPAsLniYAYsczarc1j5BYfD4seiuhGbWv2LfSKZh23Z1d9VmNnp2Dn34OTXFJsXPDAwZpDMEpqxQ2PoTc2hAapB103bFfdjoLo1eooEmVJwUrja5Gj7ZdbjgkIIIbV7DWT2eQSkrg7pEILEczTt6xeCnV4Yk6Y9DHkd4dEOKAXcFTzELG6tL1GSX5i9SIFWPi1d_nbqC38Eva8544ldlBWw2Fv5atTOhWWO"/>
</div>
</div>
</header>
{/* Canvas Content */}
<div className="pt-24 px-6 max-w-6xl mx-auto">
{/* Bento Hero Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
{/* Information Card */}
<div className="lg:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl text-[#C8FF00]">sync_alt</span>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-bold uppercase tracking-widest mb-4">Sincronização Ativa</span>
<h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">Domine sua agenda com <br/><span className="text-[#C8FF00]">Google Calendar</span></h3>
<p className="text-on-surface-variant body-md max-w-md mb-6 leading-relaxed">
                            Evite conflitos de horários e overbooking. Nossa integração bidirecional garante que qualquer compromisso pessoal no Google reflita instantaneamente no BarberPro, e vice-versa.
                        </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-xs font-medium text-white/80">Tempo Real</span>
</div>
<div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-xs font-medium text-white/80">Bidirecional</span>
</div>
<div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-xs font-medium text-white/80">Privacidade Total</span>
</div>
</div>
</div>
</div>
{/* Quick Stats / Status Card */}
<div className="glass-card rounded-2xl p-8 flex flex-col justify-between border-l-4 border-l-[#C8FF00]">
<div>
<h4 className="text-sm font-bold text-[#A0A0A0] uppercase tracking-widest mb-6">Status da Equipe</h4>
<div className="space-y-6">
<div className="flex justify-between items-end">
<span className="text-4xl font-black text-white">75%</span>
<span className="text-xs text-[#C8FF00] font-bold pb-1">Conectados</span>
</div>
<div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
<div className="bg-[#C8FF00] h-full w-[75%] shadow-[0px_0px_10px_rgba(200,255,0,0.5)]"></div>
</div>
<p className="text-xs text-on-surface-variant leading-tight">
                                3 de 4 barbeiros já sincronizaram suas agendas pessoais.
                            </p>
</div>
</div>
<div className="pt-6">
<button className="text-[10px] font-bold text-[#C8FF00] uppercase tracking-tighter flex items-center gap-2 hover:translate-x-1 transition-transform">
                            Ver Relatório de Conflitos <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Barbers List Section */}
<div className="mb-8 flex items-center justify-between">
<h3 className="text-xl font-extrabold text-white tracking-tight">Gerenciar Barbeiros</h3>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-white/60">filter_list</span>
</button>
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-white/60">search</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Barber Row 1 (Connected) */}
<div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:bg-[#1A1919] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="professional portrait of a barber in his 30s with a sharp haircut and tattoos, neutral expression, moody studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_WLWvkHWgjHjSVvJFG9Rafz6fIHB-N9M6ALfbtUZMuP2CVfCBn71j1wQQlA6vZvLBWmdXWtrSwd_hC1H1LdN4AuU0SiwAdQtVN7eIv5w89qWlcP2RDWyzmX_NCBQD6iCa8ljVWbb9vhZ65nbfl7COncIuiH8mec5Z1GzzFyT7dZo_hDAhvVF5NJC1tKKNEA-gxUIP3P_XWPC52448nimeialIpy8JLiPdZzsLA3D4IcDIz5FTHx9MLUor8_bx1ZY9MCLB2vuZRprR"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#C8FF00] rounded-full animate-pulse"></div>
</div>
</div>
<div>
<h4 className="font-bold text-white text-base">Ricardo 'Ace' Santos</h4>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
<span className="text-xs text-[#A0A0A0]">Agenda principal conectada</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center opacity-100">
<img alt="Google Calendar" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbhNb6ZndJOvXpJCMz3kaDGiAu_X1LNrz--FSA35Ufow46n2uJW0jkhGHUogL9YkD9cekzeMYx4D8-iDYJV-Dtxorga8WrkEN_EeZy7Y3vOb75NC6YjSofDjjxafxCIpCPOPdDuBcEDzRvHMrCVF7lxsPVjJO98VdWo0uqml677r-vwJpL03MYZ9LSgOyBxpimjlyerUizT-64G0318QcEZ-Fh5xIIN24g8ENqM2q2_ZqAgqCS7W0z5IHEcvtC_o0mxprLRw8mD6ZV"/>
<span className="text-[8px] font-bold text-[#C8FF00] uppercase">Ativo</span>
</div>
<button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white transition-all">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Barber Row 2 (Not Connected) */}
<div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:bg-[#1A1919] transition-all duration-300 border-dashed border-white/10">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover grayscale opacity-50" data-alt="portrait of a young black barber with a neat fade haircut, looking confident, dark aesthetic background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG5eZa1sXV78KuxjI9E0xMnVEMzb1RrTLsRtfBZZIu4rgvohrqhSX2aNBlw8ICM7Z1_9G3JgjNrWjLA25m1JeWu8ZrEPxe1qSbKFmvYtbvKV-_2FfTAoGhpQAelzz9wm7lAGL6V3_VjquKkb2Rie0X-UuSw6PiB-sxLsXWNc-ZycDnwRQbIgvdqnTGqVBR47ZPvA6irMCxuZZisslaiEIbI0v1fd-E_sewP9_5OrDLtxKvwyVCXDIMOsBXkOOdRLLYTyBC3oTC4crz"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-white/20 rounded-full"></div>
</div>
</div>
<div>
<h4 className="font-bold text-white/60 text-base">Marcus Vinícius</h4>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-white/20 text-sm">link_off</span>
<span className="text-xs text-[#A0A0A0]">Sem integração ativa</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center opacity-30 grayscale">
<img alt="Google Calendar" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__odPFQGXylWV2kXSXWVGXrnienkVLRJjEb_8BL6Gu58EwB8nX4R4-p3Mmd1Z_rj_--DSNECRZoNiWBjFR7SUAIPJ40iVf6-uVOHr6SJiKxRPHb3Icw9jEVIAZdSZp6pz-dlE2uEiH5ZN10KogpW056W-G_0PjN7qQCmoWPzql1ZOCWa4qbCWyfyIIfOBjhDyk_2GG5v5g9Sz20KMi25tA7FM5tCrL2XUEtKfxc43lD5fIxhCHGNMYuKsIsdfUbM20MPveXfVBO7G"/>
<span className="text-[8px] font-bold text-white/50 uppercase">Off</span>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-4 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-lg active:scale-95">
                            Conectar
                        </button>
</div>
</div>
{/* Barber Row 3 (Connected) */}
<div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:bg-[#1A1919] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="headshot of a mature barber with salt and pepper hair and a well-groomed beard, professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1DBoeTL0_VLPy5P9nlkVcTuDgqTqLoXmp-j1oCg8OjyTvOLW8Ny89oTzqor8opeDAGQqHDo9SxScuqkgQYZVVRDgni4fFhRCxlZcXPjzrAlg-ycjl23sfNPcH01DDj0_TAEdaVs3K7Qnqk-NH-n5cIJ5P4DdW9MFgsvZlc3Siki7hTLn4Bv_9qhz6wJhbVCXH6sGzCIxwGn5Lba81-kaP6F0A0lQe8fgKjN5Ogjv_LQmseyCWcGcK06g_8cEC4s-_GbIYlKakD3Ig"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#C8FF00] rounded-full animate-pulse"></div>
</div>
</div>
<div>
<h4 className="font-bold text-white text-base">Felipe 'Old School'</h4>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
<span className="text-xs text-[#A0A0A0]">Agenda principal conectada</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center opacity-100">
<img alt="Google Calendar" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-kk3wN8VhmZNjPEMgowXD7A7SjUlRpeMiyEUQN1ffzPdjpwvzVurS1FpaRvXM5HldJLmER-vIUnUc_rBNQ0AtDPat75D___G9MwwEGLuD7eB8irnmrQpivna3tFwdZXa19TbaAVXj5kArIvWCSImKuLXineOsB0iEfxB8w82hWZJubaLMmbb9XtxIBjHeGafMXLNc_eN4ORG2iyNFQqZwfeZydocFzaOVGioH1-13MdvyE7oIKduIgPpAGKsCIkBSptTBkqLf_7D7"/>
<span className="text-[8px] font-bold text-[#C8FF00] uppercase">Ativo</span>
</div>
<button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white transition-all">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Barber Row 4 (Connected) */}
<div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:bg-[#1A1919] transition-all duration-300">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="middle-aged male barber with a sharp beard and stylish short hair, smiling slightly, professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFhKPuOTToVbi-Gss7_zwTex3ybMhxh1PPZGYXOjFVgm4fFTqhD_wxEpi92wdvgqrz5TesYV1EIUCkoMmHSlNyB6xbTHQFmq2qZl1w6l1FeAqXOdLQS7o9YjzuNGLLLEUBe0PYfS4VUKsrGr9iWfqLxT4bhg0gnZ3RqeBepGRIRptHkw9K9ITMpfbqozlerTTdUdy_Go5Oprwv13S0q65h8y_K_n-wKNSB3HYO3AEVU3MVljVmfn4RZ97_5xSAqeftFfZ1dVlRomtr"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#C8FF00] rounded-full animate-pulse"></div>
</div>
</div>
<div>
<h4 className="font-bold text-white text-base">André Guedes</h4>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[#C8FF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
<span className="text-xs text-[#A0A0A0]">Agenda principal conectada</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center opacity-100">
<img alt="Google Calendar" className="w-6 h-6 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqq6C0kWNdr5UwVGQNIHXKtayd5cVErs2GxQjGjuaV4Uvp4Vwh2nSFem7Pof35ZZQ9LJ9PIujGHoup4Vpq1K03zwP3gg657bt4tOEJuPiaVkpWN4aN2f4leKK57Dnx5TfNcd4ylNKbYnEnVkHAIB21MEYckfIVx3BxGk7x7x_oa30nf5cFRwNdaNlU3emK-NyvkBEwtSY9YVVA9dbj4a05InX1wChiliF0M0buuGTGRCCbgq0biYXZIR1Tb3HCIUCs07h0AThm9mUK"/>
<span className="text-[8px] font-bold text-[#C8FF00] uppercase">Ativo</span>
</div>
<button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white transition-all">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</div>
{/* BottomNavBar (Authority: JSON & Design System) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-[#0D0D0D]/80 backdrop-blur-lg z-50 rounded-t-[24px] border-t border-[#C8FF00]/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300">
<span className="material-symbols-outlined">home</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300">
<span className="material-symbols-outlined">group</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest">Barbers</span>
</div>
<div className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-white active:scale-90 transition-all duration-300">
<span className="material-symbols-outlined">percent</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest">Comms</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 mb-1 active:scale-90 transition-all duration-300">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
<span className="font-plus-jakarta text-[10px] font-bold uppercase tracking-widest">Settings</span>
</div>
</nav>
</main>
{/* FAB Action (Contextual: On Settings/Config Page) */}
{/* Suppression Logic: Suppress FAB on Settings, Profile, Details per rules */}

    </div>
  );
};

export default IntegraOGoogleAgendaAdmin;
