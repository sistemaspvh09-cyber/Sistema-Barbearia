
import React from 'react';

const DashboardDeFidelidadeAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar Execution */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#0D0D0D] w-64 border-r border-white/10 shadow-[40px_0_40px_rgba(0,0,0,0.5)]">
<div className="p-8">
<h1 className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">Management SaaS</p>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium tracking-tight text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium tracking-tight text-sm">Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg" href="?module=overview">
<span className="material-symbols-outlined">groups</span>
<span className="font-medium tracking-tight text-sm">Clients</span>
</a>
{/* Dashboard Active State Logic Applied to Loyalty Tab */}
<a className="flex items-center gap-3 px-4 py-3 text-[#C8FF00] bg-white/5 rounded-lg border-l-4 border-[#C8FF00]" href="?module=clientes&screen=dashboard-de-fidelidade-admin">
<span className="material-symbols-outlined">stars</span>
<span className="font-medium tracking-tight text-sm">Fidelidade</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium tracking-tight text-sm">Inventory</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium tracking-tight text-sm">Finance</span>
</a>
</nav>
<div className="p-4 mt-auto">
<button className="w-full bg-[#C8FF00] text-[#4f6700] font-bold py-3 rounded-xl flex items-center justify-center gap-2 neon-glow transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined">add_circle</span>
<span className="text-sm">New Appointment</span>
</button>
<div className="mt-6 flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium tracking-tight text-sm">Settings</span>
</div>
</div>
</aside>
{/* TopNavBar Execution */}
<header className="fixed top-0 right-0 left-64 h-16 px-8 flex justify-between items-center z-30 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5">
<div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96 glass-border focus-within:ring-1 focus-within:ring-[#C8FF00]/50 transition-all">
<span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
<input className="bg-transparent border-none text-sm focus:ring-0 placeholder:text-on-surface-variant w-full" placeholder="Pesquisar clientes ou prêmios..." type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="text-gray-400 hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-gray-400 hover:text-[#C8FF00] transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-semibold text-sm">Support</span>
</button>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="text-right">
<p className="text-xs font-bold leading-none">Admin User</p>
<p className="text-[10px] text-on-surface-variant">Proprietário</p>
</div>
<img className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#C8FF00] transition-colors" data-alt="close-up of a stylish professional man with groomed beard in a modern setting with warm cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvYiZqimNUktA7rnSEp1LnlO2QAKCmy1HvvBGWhDmP9aRVN5hq0KOM9iovRkPZ_p87LTWRNKkfHl6_f0j7PY-0DdT5gw6MreaHt1ae4gV6B2X8IgCYY4N23P4ISJzFpKZxKQDAEkMC49EjNw4tqPWdZaPdGldGeWLWIfTkKpSuad6ef6ORqeq_1LMfjOdK0wyDr2po-l0lmSIVtsLzEV7DXkzhwlgufuHB5idq1buytx1vPBHi5H8BJrLGqfUy184A6UW8a6gsT0Vx"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="fixed inset-0 left-64 top-16 p-8 overflow-y-auto custom-scrollbar">
<div className="max-w-7xl mx-auto space-y-8">
{/* Headline Section */}
<div className="flex flex-col">
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Fidelidade &amp; Recompensas</h2>
<p className="text-on-surface-variant body-md mt-1 italic">Gerencie o engajamento e a retenção de seus clientes com precisão.</p>
</div>
{/* KPI Cards Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* KPI 1 */}
<div className="bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>toll</span>
</div>
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Total de Pontos em Circulação</p>
<div className="flex items-baseline gap-2 mt-4">
<h3 className="text-4xl font-extrabold text-[#C8FF00]">248.500</h3>
<span className="text-xs text-primary-fixed-dim">+12% este mês</span>
</div>
<div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#C8FF00] w-[75%]"></div>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
</div>
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Resgates no Mês</p>
<div className="flex items-baseline gap-2 mt-4">
<h3 className="text-4xl font-extrabold text-white">142</h3>
<span className="text-xs text-on-surface-variant">Objetivo: 200</span>
</div>
<div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/40 w-[60%]"></div>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container rounded-2xl p-6 glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Prêmio Mais Trocado</p>
<div className="mt-4">
<h3 className="text-2xl font-extrabold text-white">Corte Master</h3>
<p className="text-sm text-[#C8FF00] mt-1 font-medium">85 trocas realizadas</p>
</div>
</div>
</div>
{/* Main Dashboard Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Evolution Chart Section */}
<div className="lg:col-span-2 bg-surface-container rounded-2xl p-8 glass-border">
<div className="flex justify-between items-center mb-10">
<div>
<h4 className="text-xl font-bold">Evolução de Resgates</h4>
<p className="text-sm text-on-surface-variant">Resgates diários nos últimos 30 dias</p>
</div>
<select className="bg-surface-container-low border-white/5 rounded-lg text-xs text-on-surface font-semibold focus:ring-[#C8FF00]">
<option>Últimos 30 dias</option>
<option>Últimos 90 dias</option>
</select>
</div>
{/* SVG Chart Simulation */}
<div className="relative h-64 w-full">
<svg className="w-full h-full" viewBox="0 0 800 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#C8FF00" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#C8FF00" stopOpacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,180 Q100,160 200,170 T400,100 T600,120 T800,40 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>
<path d="M0,180 Q100,160 200,170 T400,100 T600,120 T800,40" fill="none" stroke="#C8FF00" strokeWidth="4"></path>
<circle cx="200" cy="170" fill="#C8FF00" r="4"></circle>
<circle cx="400" cy="100" fill="#C8FF00" r="4"></circle>
<circle cx="600" cy="120" fill="#C8FF00" r="4"></circle>
<circle cx="800" cy="40" fill="#C8FF00" r="6" stroke="#0D0D0D" strokeWidth="2"></circle>
</svg>
<div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">
<span>01 Jan</span>
<span>08 Jan</span>
<span>15 Jan</span>
<span>22 Jan</span>
<span>30 Jan</span>
</div>
</div>
</div>
{/* Top Customers List */}
<div className="bg-surface-container rounded-2xl p-8 glass-border flex flex-col h-full">
<h4 className="text-xl font-bold mb-6">Maiores Saldos</h4>
<div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
{/* Customer Item */}
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/5" data-alt="portrait of a confident man with stylish haircut in moody dark studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA944Bz4YKhkJZYScWtLCRQDUn4IdooBrVol3KaK3YB6J7__pYVUHW-dORzGJj3ig2uCVClN-JPZgUSK5dQ9MJC9um6zRKV9lKUso-5x9_KJiK8zMzCT4YJVteE926ok_NvzDhEduJMsdA2EcBzHqnVk2fdob2yKMZ7mzgJnANxTT1BW0YiNA_90-K7AcF9kIjKbVDjZCWPpB7txIOGZRJ8hCCH5O66_dzflJAESRvEUOs-IN5maccr3lyoz0wqolink_Kug5d2FWGh"/>
<div>
<p className="font-bold text-sm">Ricardo Oliveira</p>
<p className="text-xs text-on-surface-variant">Cliente VIP</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-extrabold text-[#C8FF00]">4.250 pts</p>
<span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-on-surface-variant">Top #1</span>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/5" data-alt="close up of a professional man in business attire looking at camera with shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0rMGpp1GkJenaOZnDwKcr_0d_tpvbE4L0rdCbizavppkzzL1VlUUfPDqEx0lWqFDPovqH1al2Ow7GCAxfwuRjhb2vsM3K0dkgWsOaLO_BkOFhS7K0vHhtoWu5SjRLVNdnvUJu3SqCwdF0WOJ80H2sksIb2hVncxHPlkYZUaLhvg3X1hx8HT36K2ISKBLPgw8mtrNbpnpDr1hCGI6yGgYK25K-FUcO2-xHKnps0DkHWqQpM_qrS5aG-1YHmxm_vREwUNubEzz02Xkl"/>
<div>
<p className="font-bold text-sm">Marcos Vinícius</p>
<p className="text-xs text-on-surface-variant">Frequente</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-extrabold text-white">3.100 pts</p>
<span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-on-surface-variant">Top #2</span>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/5" data-alt="modern young man with well-maintained beard looking away in an urban setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXcnYt_RMtg_9dbzRh9FezLW9tWC9KhlfL9XqJzDgyNWI3lxoINJWGNqP0lHL4G21g2hUD_xaOy_qyXg1U0sFs-9mRLL5GoOh4ep7R2P6F9vF1S8WcBBBjPKfrx9tOxZ0P8B4fG5pWiA7hL5kXbNZuSPVJBQODt0Q24HoxesAt9ZwWVfUWi7zYD7vOmfx8rGl4qkCfsHiq7Ddq1EhzgRgO9Zj1SJAJq_Sb19y_XtoyzKQvFECZ3LmEP9W9wTccAzUYny5YE1jJHPuO"/>
<div>
<p className="font-bold text-sm">Felipe Santos</p>
<p className="text-xs text-on-surface-variant">Novato</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-extrabold text-white">2.850 pts</p>
<span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-on-surface-variant">Top #3</span>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/5" data-alt="clean cut male profile portrait with sharp focus on facial features and soft background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6n0Mty5MJoxSGdv1zA4vKCgx_BnNpFoHBInot5gvuEFM-GlSNvxk3PBw_IBYLH3hv-V5lWiCuH7lKT8DEGJWr0qoeR4uF55SOsjMBwZ5VsBd4QI1-BhW8CvD1M4dm8UqBzToqxvw1oztujK1521ejsPAUbdBeamd_3KHX59dJpa3t3h-xH21ZM45op03oMDeSI_QULDviuFp-yndYSmoNHPPNlrIaVgl8XzsWI94efwA8Q5U8VihU2az6_PKl7n1hF08LhGW9WxR5"/>
<div>
<p className="font-bold text-sm">Gustavo Lima</p>
<p className="text-xs text-on-surface-variant">Frequente</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-extrabold text-white">1.920 pts</p>
<span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-on-surface-variant">Top #4</span>
</div>
</div>
</div>
</div>
</div>
{/* Rewards Management Table */}
<div className="bg-surface-container rounded-2xl overflow-hidden glass-border">
<div className="p-8 flex justify-between items-center border-b border-white/5">
<div>
<h4 className="text-xl font-bold">Catálogo de Prêmios</h4>
<p className="text-sm text-on-surface-variant">Configuração de custos e disponibilidade</p>
</div>
<button className="bg-surface-container-highest text-white font-bold py-2 px-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                        Novo Prêmio
                    </button>
</div>
<table className="w-full text-left">
<thead>
<tr className="bg-white/2 text-[10px] uppercase tracking-widest text-on-surface-variant">
<th className="px-8 py-4 font-bold">Prêmio</th>
<th className="px-8 py-4 font-bold">Custo (Pontos)</th>
<th className="px-8 py-4 font-bold">Resgates Totais</th>
<th className="px-8 py-4 font-bold">Status</th>
<th className="px-8 py-4 font-bold text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/2 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#C8FF00]/10 rounded-lg flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined">content_cut</span>
</div>
<span className="font-bold">Corte Master</span>
</div>
</td>
<td className="px-8 py-5 font-bold">500 pts</td>
<td className="px-8 py-5 text-on-surface-variant">1,240</td>
<td className="px-8 py-5">
<span className="bg-primary/10 text-[#C8FF00] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C8FF00]/20">Ativo</span>
</td>
<td className="px-8 py-5 text-right">
<button className="text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/2 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">soap</span>
</div>
<span className="font-bold">Shampoo Premium 200ml</span>
</div>
</td>
<td className="px-8 py-5 font-bold">850 pts</td>
<td className="px-8 py-5 text-on-surface-variant">420</td>
<td className="px-8 py-5">
<span className="bg-primary/10 text-[#C8FF00] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C8FF00]/20">Ativo</span>
</td>
<td className="px-8 py-5 text-right">
<button className="text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/2 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center text-error">
<span className="material-symbols-outlined">brush</span>
</div>
<span className="font-bold">Combo Barba &amp; Bigode</span>
</div>
</td>
<td className="px-8 py-5 font-bold">400 pts</td>
<td className="px-8 py-5 text-on-surface-variant">890</td>
<td className="px-8 py-5">
<span className="bg-error/10 text-error text-[10px] font-bold px-2.5 py-1 rounded-full border border-error/20">Esgotado</span>
</td>
<td className="px-8 py-5 text-right">
<button className="text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/2 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">face_6</span>
</div>
<span className="font-bold">Massagem Facial Relax</span>
</div>
</td>
<td className="px-8 py-5 font-bold">1,200 pts</td>
<td className="px-8 py-5 text-on-surface-variant">150</td>
<td className="px-8 py-5">
<span className="bg-primary/10 text-[#C8FF00] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C8FF00]/20">Ativo</span>
</td>
<td className="px-8 py-5 text-right">
<button className="text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Footnote / Status */}
<div className="flex items-center justify-between py-10 opacity-50">
<p className="text-xs">© 2024 BarberPro Dashboard System</p>
<div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#C8FF00]"></span> Sistema Online</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/20"></span> Sincronizado</span>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default DashboardDeFidelidadeAdmin;
