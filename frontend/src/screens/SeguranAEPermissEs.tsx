
import React from 'react';

const SeguranAEPermissEs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Bar */}
<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-6 h-16 shadow-[0px_4px_30px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-[#C8FF00] italic tracking-tight font-['Plus_Jakarta_Sans']">BarberPro Enterprise</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/10 focus-within:border-primary/50 transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant/50 w-64" placeholder="Buscar permissões..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="text-[#A0A0A0] hover:text-white transition-colors p-2 hover:bg-[#C8FF00]/10 rounded-full">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 transition-all" title="Segurança">
<span className="material-symbols-outlined" data-icon="security">security</span>
</button>
<button className="text-[#A0A0A0] hover:text-white transition-colors p-2 hover:bg-[#C8FF00]/10 rounded-full">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-[#C8FF00]/30 ml-2">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a professional administrator with a sharp look and modern haircut in a stylish studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDorC6Y5SNLdJsuyqG3QJivsYJFM5kB-GibmdE3_fILHriBfi4cxTGs1y4K4Cq0iJZd1UsUdEhZj2Qag0su17HeZtd5lGTS7bn-271yjT6TUS5eU3t-r2mIfCQzkoxG_n6Y3k0xNXrKfP9JB228_ZNjBFXckDeDrXRYJXfGxzBa4ZLADpD963bEJL3kFjj65bCzI97JyIbGCru73egrBDHiJU_ujUHZ6n0-twERfRzoRDwCq87I1fKhzeUgK3rEx1Eu8HjiQSltS1tG"/>
</div>
</div>
</div>
</nav>
{/* Side Navigation Bar */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#1A1919] flex flex-col py-6 gap-4 shadow-[10px_0_30px_rgba(0,0,0,0.3)] pt-20">
<div className="px-6 mb-6">
<h2 className="text-lg font-black text-white">BarberPro Admin</h2>
<p className="text-xs text-on-surface-variant/70 uppercase tracking-widest font-medium">SaaS Enterprise v2.0</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center px-6 py-3 text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-white/5 transition-all duration-300 group" href="?module=overview">
<span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300" data-icon="dashboard">dashboard</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center px-6 py-3 text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-white/5 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300" data-icon="monitoring">monitoring</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Monitoramento</span>
</a>
<a className="flex items-center px-6 py-3 text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-white/5 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300" data-icon="psychology">psychology</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Insights IA</span>
</a>
<a className="flex items-center px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl mx-2 shadow-[0_0_15px_rgba(200,255,0,0.3)] transition-all duration-300" href="#">
<span className="material-symbols-outlined mr-3" data-icon="shield_lock" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Segurança</span>
</a>
<a className="flex items-center px-6 py-3 text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-white/5 transition-all duration-300 group" href="#">
<span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300" data-icon="group">group</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Usuários</span>
</a>
<a className="flex items-center px-6 py-3 text-[#A0A0A0] hover:text-[#C8FF00] hover:bg-white/5 transition-all duration-300 group" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">
<span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300" data-icon="analytics">analytics</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Relatórios</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-4">
<button className="w-full py-3 px-4 bg-surface-container-highest/50 border border-outline-variant/20 rounded-xl text-[#C8FF00] text-xs font-bold hover:bg-[#C8FF00]/10 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">list_alt</span>
                Ver Logs do Sistema
            </button>
<div className="pt-4 border-t border-outline-variant/10 space-y-1">
<a className="flex items-center px-6 py-2 text-[#A0A0A0] hover:text-white transition-all text-sm" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="help_center">help_center</span>
                    Suporte
                </a>
<a className="flex items-center px-6 py-2 text-error/80 hover:text-error transition-all text-sm" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="logout">logout</span>
                    Sair
                </a>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
<header className="mb-10 flex justify-between items-end">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 font-headline">Segurança e Permissões</h1>
<p className="text-on-surface-variant max-w-2xl text-lg">Gerencie os níveis de acesso IAM e funções administrativas do ecossistema BarberPro.</p>
</div>
<button className="bg-[#C8FF00] text-[#4f6700] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0px_0px_20px_rgba(200,255,0,0.4)] hover:scale-[1.02] transition-all duration-300">
<span className="material-symbols-outlined">add</span>
                Criar Nova Função
            </button>
</header>
<div className="grid grid-cols-12 gap-8">
{/* Left Column: Roles Table */}
<div className="col-span-12 xl:col-span-5 space-y-8">
<section className="glass-panel rounded-3xl p-6 overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00]">badge</span>
                            Funções Ativas
                        </h3>
<span className="text-xs bg-[#C8FF00]/10 text-[#C8FF00] px-3 py-1 rounded-full font-bold uppercase tracking-wider">3 Funções base</span>
</div>
<div className="space-y-4">
{/* Admin Role */}
<div className="p-4 rounded-2xl bg-surface-container-highest/40 border-l-4 border-[#C8FF00] flex items-center justify-between cursor-pointer hover:bg-surface-container-highest/60 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
</div>
<div>
<h4 className="font-bold text-white group-hover:text-[#C8FF00] transition-colors">Admin</h4>
<p className="text-xs text-on-surface-variant">Acesso total irrestrito ao sistema</p>
</div>
</div>
<div className="text-right">
<span className="text-xs font-bold text-[#C8FF00]">3 Membros</span>
<span className="material-symbols-outlined block text-on-surface-variant text-sm">chevron_right</span>
</div>
</div>
{/* Barbeiro Role */}
<div className="p-4 rounded-2xl bg-surface-container/50 border-l-4 border-transparent hover:border-outline-variant flex items-center justify-between cursor-pointer hover:bg-surface-container-highest/40 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined">content_cut</span>
</div>
<div>
<h4 className="font-bold text-white group-hover:text-primary transition-colors">Barbeiro</h4>
<p className="text-xs text-on-surface-variant">Gestão de agenda e perfil próprio</p>
</div>
</div>
<div className="text-right">
<span className="text-xs font-bold text-on-surface-variant">12 Membros</span>
<span className="material-symbols-outlined block text-on-surface-variant text-sm">chevron_right</span>
</div>
</div>
{/* Recepcionista Role */}
<div className="p-4 rounded-2xl bg-surface-container/50 border-l-4 border-transparent hover:border-outline-variant flex items-center justify-between cursor-pointer hover:bg-surface-container-highest/40 transition-all group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<h4 className="font-bold text-white group-hover:text-primary transition-colors">Recepcionista</h4>
<p className="text-xs text-on-surface-variant">Agendamentos e fluxo de caixa</p>
</div>
</div>
<div className="text-right">
<span className="text-xs font-bold text-on-surface-variant">4 Membros</span>
<span className="material-symbols-outlined block text-on-surface-variant text-sm">chevron_right</span>
</div>
</div>
</div>
</section>
<section className="glass-panel rounded-3xl p-6">
<h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00]">group</span>
                        Membros com esta Função
                    </h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-[#C8FF00]/20" data-alt="Close-up of a smiling male barber with a well-groomed beard and tattoos in a dimly lit barber shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTDZ6CHTJbpeuqTlYbx0Q4sZ7jhYQ4NJxsaYRz3g-HQF3ZYOe5LpY6loZOSe304FaKj4DM9iaxxFtGWjr7Fm4B9oDdSypQqw50Z7ki9slsYuZRX5kU-3762-coYZivV3GxFsMe69UN5rgQ-QgEuOkkBqhoSBxEfO3gQ_SH7lUKNa9d1ZMOLD2PlmvqnfLYiteBLQLi0s-XU9EkGAiITxLSuA8kIIwuE4kZRRXnoWAEuQsm53MMWh2cC3MxfSoZrEMyACU_1iDm0bqn"/>
<div>
<p className="text-sm font-bold text-white">Ricardo Santos</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Último acesso: há 10min</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">person_remove</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-[#C8FF00]/20" data-alt="Portrait of a professional young woman with elegant makeup and dark hair in a modern corporate setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJY7QvKx89UZnJrRO1j4lJyzgk9F478luvtdJ6z5WQ97y0_hbL1RUXkvDUrh7QsvxksNdDhyNNvlUv5ow04LXP6KpJ0wd9PLOvBqvVxEuMGmemvtzDjqEenTOCneSai4-TqvVzBtHmYZfCPPUId3Lf0jtB-KMhRtwG34bagskXnc1u-rrFWxSYWAVGFDaxv5xc9KVW-RXz_FWrGoOiIpzm5UWt5-AcqaT-oyz5nE3GpKae5wamWZCaEhuOQJ4IraS-N04GwIEZyVTQ"/>
<div>
<p className="text-sm font-bold text-white">Ana Paula Lima</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Último acesso: Ontem</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">person_remove</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-[#C8FF00]/20" data-alt="Stylish man with short hair and modern glasses looking directly at the camera with a confident expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqXwPSBgiIMCTgtJhszCBjNcn-Hx2FLVxc8kfgBOWeg_lJi45M9oIAOQx_UnElzwh4P_QSbiIRgZr2Se3VvI_zmpJOHhueV-7j1VY10i9EnvLquj_ao3AeZG-WdM_o-gT794a8Y3E22YLVzwkeL8D0ovtpsxqcm5fdx8Ko9-SbiUMw--WZXSylj7_F26Gxhun5a20wsdYqtJGG7vPxzNbhYaFzqonLuElu9DTCSYM7BkRxdO26qS6Z0QAmlo9SojvLDzhyYX-xojYx"/>
<div>
<p className="text-sm font-bold text-white">Marcos Oliveira</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Último acesso: há 2 dias</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-sm">person_remove</span>
</button>
</div>
</div>
<button className="w-full mt-6 py-2 rounded-xl border border-dashed border-outline-variant hover:border-primary/40 hover:text-primary transition-all text-sm text-on-surface-variant">
                        + Adicionar membro a Admin
                    </button>
</section>
</div>
{/* Right Column: Permission Details */}
<div className="col-span-12 xl:col-span-7">
<section className="glass-panel rounded-3xl p-8 h-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="text-2xl font-black text-white">Editar Permissões: Admin</h2>
<span className="bg-[#C8FF00] text-[#4f6700] text-[10px] px-2 py-0.5 rounded font-black">SISTEMA</span>
</div>
<p className="text-on-surface-variant text-sm">Modifique o que usuários com esta função podem ver e fazer.</p>
</div>
<div className="flex gap-3">
<button className="px-5 py-2.5 rounded-xl border border-outline-variant text-sm font-bold hover:bg-surface-container-highest transition-all">Descartar</button>
<button className="px-5 py-2.5 rounded-xl bg-[#C8FF00] text-[#4f6700] text-sm font-bold shadow-[0px_4px_15px_rgba(200,255,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all">Salvar Alterações</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Module: Geral */}
<div className="bg-surface-container/30 rounded-2xl p-6 border border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">settings_suggest</span>
</div>
<h4 className="font-bold text-white">Módulo Geral</h4>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Visualizar Dashboard</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Gerenciar Unidades</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Configurações de Marca</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
</div>
</div>
{/* Module: Financeiro */}
<div className="bg-surface-container/30 rounded-2xl p-6 border border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">payments</span>
</div>
<h4 className="font-bold text-white">Financeiro</h4>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Acessar Relatórios Fiscais</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Gerenciar Pagamentos</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Exportar Dados Bancários</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
</div>
</div>
{/* Module: Agenda & Clientes */}
<div className="bg-surface-container/30 rounded-2xl p-6 border border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">calendar_month</span>
</div>
<h4 className="font-bold text-white">Agenda &amp; Clientes</h4>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Visualizar Todas Agendas</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Sobrescrever Horários</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Base de Dados de Clientes</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
</div>
</div>
{/* Module: Segurança (IAM) */}
<div className="bg-surface-container/30 rounded-2xl p-6 border border-[#C8FF00]/10 shadow-[inset_0_0_20px_rgba(200,255,0,0.05)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">security</span>
</div>
<h4 className="font-bold text-white">Segurança (IAM)</h4>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-[#C8FF00] font-bold">Gerenciar Funções Admin</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Redefinir Senhas Master</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">Acessar Logs de Auditoria</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8FF00] peer-checked:after:bg-[#4f6700]"></div>
</div>
</label>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-error/5 border border-error/10 rounded-2xl">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-error mt-0.5">warning</span>
<div>
<h5 className="text-error font-bold mb-1">Zona Crítica</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Alterar as permissões de 'Admin' afeta o acesso estrutural do sistema. Certifique-se de que pelo menos um usuário mantenha permissões de Gerenciamento de Funções para evitar bloqueio total do painel.</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* Contextual Floating Action Button */}
<div className="fixed bottom-8 right-8 z-50 group">
<div className="absolute bottom-full right-0 mb-4 flex flex-col items-end gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
<span className="bg-[#1A1919] text-[#C8FF00] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#C8FF00]/20 shadow-xl">Exportar Regras</span>
<span className="bg-[#1A1919] text-[#C8FF00] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#C8FF00]/20 shadow-xl">Clonar Função</span>
</div>
<button className="w-14 h-14 bg-[#C8FF00] rounded-full flex items-center justify-center text-[#4f6700] shadow-[0px_0px_30px_rgba(200,255,0,0.4)] hover:scale-110 active:scale-95 transition-all duration-300">
<span className="material-symbols-outlined text-3xl">bolt</span>
</button>
</div>

    </div>
  );
};

export default SeguranAEPermissEs;
