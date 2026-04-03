
import React from 'react';

const RelatRioDeComissEsPorBarbeiro: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Authority: JSON + Design System) */}
<aside className="h-screen w-64 fixed left-0 top-0 flex flex-col border-r border-[#ffffff0a] bg-[#0D0D0D] shadow-[20px_0_40px_rgba(0,0,0,0.4)] z-50 hidden md:flex">
<div className="p-8 flex flex-col h-full space-y-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-2xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h1 className="text-2xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Gestão de Elite</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-medium">Agendamentos</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-medium">Barbeiros</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00]/10 text-[#C8FF00] rounded-xl font-bold border-l-4 border-[#C8FF00] transition-all duration-300 cursor-pointer active:scale-95" href="?module=financeiro&screen=relat-rios-de-faturamento-desktop">
<span className="material-symbols-outlined" data-icon="equalizer">equalizer</span>
<span className="font-medium">Relatórios</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-white transition-all duration-300 hover:bg-[#1A1919] hover:scale-[1.02] cursor-pointer active:scale-95" href="?module=operacao&screen=painel-administrativo">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-medium">Configurações</span>
</a>
</nav>
<button className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-bold text-sm neon-glow transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                Novo Agendamento
            </button>
<div className="pt-6 border-t border-[#ffffff0a]">
<a className="flex items-center gap-3 px-4 py-3 text-[#A0A0A0] hover:text-error transition-all duration-300" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-medium">Sair</span>
</a>
</div>
</div>
</aside>
{/* Main Canvas */}
<main className="md:ml-64 min-h-screen flex flex-col">
{/* TopNavBar (Authority: JSON + Design System) */}
<header className="h-20 flex items-center justify-between px-8 w-full bg-[#0D0D0D]/70 backdrop-blur-xl sticky top-0 z-40">
<div className="flex items-center gap-4">
<h2 className="text-xl font-black text-white tracking-tight">Relatórios de Comissões</h2>
<div className="h-4 w-px bg-outline-variant/30"></div>
<nav className="flex gap-6">
<a className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 transition-colors" href="#">Detalhado</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors" href="#">Mensal</a>
<a className="text-[#A0A0A0] hover:text-white transition-colors" href="#">Anual</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full glass-border">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none text-sm text-on-surface focus:ring-0 w-48 placeholder:text-on-surface-variant" placeholder="Buscar relatório..." type="text"/>
</div>
<div className="flex items-center gap-3">
<div className="hover:bg-[#C8FF00]/5 rounded-full p-2 transition-colors cursor-pointer relative">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</div>
<div className="hover:bg-[#C8FF00]/5 rounded-full p-2 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="help_outline">help_outline</span>
</div>
<div className="h-10 w-10 rounded-full overflow-hidden glass-border">
<img alt="Avatar do Administrador" className="w-full h-full object-cover" data-alt="professional male avatar for administrator profile with clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLnYlI5Omfoxg0-HA_s7d3HIdy3jd7Q1eF4BBHF-oX_8JnkrwzOBp2QmJFJYr2DKIRbu72j8yJloLElIY-_uXKkm5Rn0zoZtomH2XrdKuivNmpM454rnEW1GQebsENISDtIiMSTk87pqxHWMFSzfnuJzMLaqDKRzlyoyoPvrbWyCbYyDJvrJm4KysoiObjHGINq2tMP-omy7r_Oc90K5st0ZEbRwYkz3gbr94u24Z3mCNs1gbWJuDkViGE6jj-YMFaFKi54Ye0rpvm"/>
</div>
</div>
</div>
</header>
{/* Content Area */}
<section className="p-8 space-y-8">
{/* Summary Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container rounded-2xl p-6 relative overflow-hidden glass-border group transition-all duration-300 hover:bg-surface-container-high">
<div className="flex justify-between items-start mb-4">
<div className="space-y-1">
<p className="text-on-surface-variant text-sm font-medium tracking-wide">TOTAL BRUTO</p>
<h3 className="text-3xl font-black text-white">R$ 12.450,00</h3>
</div>
<div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-on-surface-variant group-hover:text-primary-container transition-colors">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-primary-dim font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span>
                        +12% em relação ao mês anterior
                    </div>
<div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12">
<span className="material-symbols-outlined text-9xl" data-icon="payments">payments</span>
</div>
</div>
<div className="bg-surface-container rounded-2xl p-6 relative overflow-hidden glass-border group transition-all duration-300 hover:bg-surface-container-high">
<div className="flex justify-between items-start mb-4">
<div className="space-y-1">
<p className="text-on-surface-variant text-sm font-medium tracking-wide">TOTAL COMISSÕES</p>
<h3 className="text-3xl font-black text-[#C8FF00]">R$ 4.357,50</h3>
</div>
<div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined" data-icon="account_balance_wallet" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-xs">info</span>
                        Média de 35% por serviço
                    </div>
<div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12">
<span className="material-symbols-outlined text-9xl" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
</div>
<div className="bg-surface-container-highest rounded-2xl p-6 relative overflow-hidden border border-[#C8FF00]/10 group transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
<div className="flex justify-between items-start mb-4">
<div className="space-y-1">
<p className="text-on-surface-variant text-sm font-medium tracking-wide">LUCRO LÍQUIDO</p>
<h3 className="text-3xl font-black text-white">R$ 8.092,50</h3>
</div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="show_chart">show_chart</span>
</div>
</div>
<div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden mt-2">
<div className="h-full bg-primary-container w-[65%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
<span>Margem operacional</span>
<span className="text-white">65%</span>
</div>
</div>
</div>
{/* Filters & Actions */}
<div className="flex flex-wrap items-center justify-between gap-6 bg-surface-container-low p-6 rounded-2xl glass-border">
<div className="flex flex-wrap items-center gap-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Barbeiro</label>
<select className="bg-surface-container-highest border-none rounded-xl text-sm font-semibold text-white px-4 py-2.5 min-w-[200px] focus:ring-1 focus:ring-primary-container cursor-pointer appearance-none">
<option>Todos os Profissionais</option>
<option>Ricardo "The Blade" Silva</option>
<option>Arthur Fade</option>
<option>Gabriel Tesoura</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Período (Mês)</label>
<select className="bg-surface-container-highest border-none rounded-xl text-sm font-semibold text-white px-4 py-2.5 min-w-[180px] focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>Outubro 2023</option>
<option>Setembro 2023</option>
<option>Agosto 2023</option>
</select>
</div>
<button className="mt-5 p-2.5 bg-surface-container-highest text-on-surface rounded-xl hover:bg-surface-variant transition-colors glass-border">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-highest text-white text-sm font-bold glass-border hover:bg-surface-variant transition-all duration-300">
<span className="material-symbols-outlined text-sm">download</span>
                        Exportar CSV
                    </button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary text-sm font-black neon-glow transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined text-sm" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>picture_as_pdf</span>
                        Gerar Relatório PDF
                    </button>
</div>
</div>
{/* Detailed Table Container */}
<div className="bg-surface-container rounded-3xl overflow-hidden glass-border">
<div className="p-6 flex items-center justify-between border-b border-[#ffffff0a]">
<h4 className="font-bold text-lg">Listagem Detalhada</h4>
<span className="text-xs text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">Exibindo 24 registros</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high/50">
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Data</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Serviço</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Valor Bruto</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Comissão %</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Vlr. Comissão</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant">Status</th>
<th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-[#ffffff0a]">
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">24 Out 2023</span>
<span className="text-[10px] text-on-surface-variant">14:30h</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary-container">content_cut</span>
</div>
<span className="text-sm font-medium">Corte Degradê + Barba</span>
</div>
</td>
<td className="px-6 py-5 text-sm font-semibold">R$ 85,00</td>
<td className="px-6 py-5">
<span className="text-xs font-bold bg-surface-variant px-2 py-1 rounded">40%</span>
</td>
<td className="px-6 py-5 text-sm font-bold text-primary-dim">R$ 34,00</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-black uppercase tracking-tighter">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                        Processado
                                    </span>
</td>
<td className="px-6 py-5 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">24 Out 2023</span>
<span className="text-[10px] text-on-surface-variant">15:15h</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary-container">content_cut</span>
</div>
<span className="text-sm font-medium">Corte Infantil</span>
</div>
</td>
<td className="px-6 py-5 text-sm font-semibold">R$ 45,00</td>
<td className="px-6 py-5">
<span className="text-xs font-bold bg-surface-variant px-2 py-1 rounded">30%</span>
</td>
<td className="px-6 py-5 text-sm font-bold text-primary-dim">R$ 13,50</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-black uppercase tracking-tighter">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                        Processado
                                    </span>
</td>
<td className="px-6 py-5 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">24 Out 2023</span>
<span className="text-[10px] text-on-surface-variant">16:40h</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary-container">face</span>
</div>
<span className="text-sm font-medium">Combo Premium (VIP)</span>
</div>
</td>
<td className="px-6 py-5 text-sm font-semibold">R$ 180,00</td>
<td className="px-6 py-5">
<span className="text-xs font-bold bg-surface-variant px-2 py-1 rounded">35%</span>
</td>
<td className="px-6 py-5 text-sm font-bold text-primary-dim">R$ 63,00</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-black uppercase tracking-tighter">
<span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                                        Pendente
                                    </span>
</td>
<td className="px-6 py-5 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">23 Out 2023</span>
<span className="text-[10px] text-on-surface-variant">10:00h</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary-container">colorize</span>
</div>
<span className="text-sm font-medium">Pigmentação Barba</span>
</div>
</td>
<td className="px-6 py-5 text-sm font-semibold">R$ 60,00</td>
<td className="px-6 py-5">
<span className="text-xs font-bold bg-surface-variant px-2 py-1 rounded">40%</span>
</td>
<td className="px-6 py-5 text-sm font-bold text-primary-dim">R$ 24,00</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-black uppercase tracking-tighter">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                        Processado
                                    </span>
</td>
<td className="px-6 py-5 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-[#ffffff0a] flex items-center justify-between">
<div className="text-sm text-on-surface-variant">Página 1 de 4</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center hover:bg-surface-variant transition-colors disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary-container font-black flex items-center justify-center border border-primary-container/30">1</button>
<button className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center hover:bg-surface-variant transition-colors">2</button>
<button className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center hover:bg-surface-variant transition-colors">3</button>
<button className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Footer Stats or Notes */}
<div className="flex gap-6">
<div className="flex-1 bg-surface-container p-6 rounded-2xl glass-border flex items-center gap-6">
<div className="w-16 h-16 rounded-full bg-[#C8FF00]/10 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-[#C8FF00]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
<div>
<h5 className="text-lg font-bold text-white">Barbeiro do Mês</h5>
<p className="text-sm text-on-surface-variant">Ricardo "The Blade" Silva lidera com R$ 1.840,00 em comissões.</p>
</div>
<button className="ml-auto text-[#C8FF00] font-bold text-sm uppercase tracking-widest hover:underline">Ver Ranking</button>
</div>
<div className="w-1/3 bg-[#C8FF00] rounded-2xl p-6 flex flex-col justify-center items-center text-on-primary group hover:scale-[1.02] transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl mb-2" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
<h5 className="text-center font-black leading-tight">UPGRADE PARA PRO<br/><span className="text-xs font-medium opacity-80 uppercase tracking-widest">Automação de Pagamentos</span></h5>
</div>
</div>
</section>
{/* Signature Scroll To Top (FAB Suppression: Active on Detail/Task screen - Hide) */}
</main>

    </div>
  );
};

export default RelatRioDeComissEsPorBarbeiro;
