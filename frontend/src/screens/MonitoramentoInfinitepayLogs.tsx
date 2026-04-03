
import React from 'react';

const MonitoramentoInfinitepayLogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar Shell */}
<aside className="fixed left-0 top-0 h-full flex flex-col p-4 gap-2 h-screen w-64 border-r border-white/5 bg-[#1A1919] z-40 hidden md:flex">
<div className="flex items-center gap-3 px-2 mb-8">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h1 className="text-2xl font-extrabold text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Premium Management</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium text-sm">Agenda</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-medium text-sm">Clients</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium text-sm">Services</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.2)]" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="font-bold text-sm">Payments</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-medium text-sm">Finance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl group" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium text-sm">Settings</span>
</a>
</nav>
<div className="mt-auto pt-4 border-t border-white/5">
<button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                New Appointment
            </button>
</div>
</aside>
{/* Main Canvas */}
<main className="md:ml-64 min-h-screen">
{/* TopAppBar */}
<header className="sticky top-0 z-50 flex justify-between items-center px-6 h-16 w-full bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-4">
<h2 className="font-['Plus_Jakarta_Sans'] tracking-tight text-xl font-black text-[#C8FF00] tracking-tighter">InfinitePay Webhooks</h2>
<span className="px-2 py-0.5 rounded bg-primary-container/10 text-[#C8FF00] text-[10px] font-bold tracking-widest uppercase">Live Monitor</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6 mr-6">
<span className="text-[#C8FF00] font-bold cursor-pointer hover:text-[#C8FF00] transition-colors duration-300 text-sm">Monitor</span>
<span className="text-zinc-400 cursor-pointer hover:text-[#C8FF00] transition-colors duration-300 text-sm">Endpoints</span>
<span className="text-zinc-400 cursor-pointer hover:text-[#C8FF00] transition-colors duration-300 text-sm">API Keys</span>
</div>
<div className="flex gap-2">
<button className="p-2 text-zinc-400 hover:text-[#C8FF00] transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-zinc-400 hover:text-[#C8FF00] transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Admin profile" data-alt="close-up portrait of a professional barber admin in a modern dark studio setting with soft neon rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz7ZVPJL4aFPZkruITcngLkVTF96GpZeruNroSE11Kb9v1ktHm-gcC5tvDmbzXR4AZI2UicRZ4mRSf9csnntdUWuwwoJMgXxBF2bUmrGS6Gh4_kTea8i718d-JIeeO9HWXLil5Wwia9RnxTnp11TQkESIg32XMn_lz5s5-1a5ORNBJbJHIakJIQKcitWh-y53Kn5wC74do7d_OARTTmrxEkqCX1BhlJtyVjgLTQW2BxvgfXnbbQT8BBhXhcevKvPVH0WmddtzsGpO7"/>
</div>
</div>
</header>
{/* Content Body */}
<div className="p-6 max-w-7xl mx-auto space-y-8">
{/* Health Stats Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{/* Integration Health */}
<div className="col-span-1 md:col-span-2 glass-panel p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1">Integration Health</p>
<h3 className="text-3xl font-extrabold text-white tracking-tight">Active &amp; Stable</h3>
</div>
<div className="bg-primary-container/20 p-2 rounded-xl">
<span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
<div>
<p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Uptime</p>
<p className="text-sm font-bold text-white">99.99%</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Success Rate</p>
<p className="text-sm font-bold text-primary-fixed">99.8%</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Last Sync</p>
<p className="text-sm font-bold text-white">2m ago</p>
</div>
</div>
</div>
{/* Live Traffic Card */}
<div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center gap-2 group">
<div className="relative w-16 h-16 mb-2">
<div className="absolute inset-0 bg-primary-container/20 rounded-full animate-ping"></div>
<div className="relative z-10 w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container text-3xl">sensors</span>
</div>
</div>
<p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">Live Traffic</p>
<p className="text-2xl font-black text-white tracking-tighter">428 <span className="text-xs text-zinc-500 font-medium">req/hr</span></p>
</div>
{/* Error Rate Card */}
<div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center gap-2">
<div className="w-16 h-16 bg-error-container/20 rounded-full flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-error text-3xl">warning</span>
</div>
<p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">Error Rate (24h)</p>
<p className="text-2xl font-black text-error-dim tracking-tighter">0.02%</p>
</div>
</div>
{/* Webhook Log Table Section */}
<section className="glass-panel rounded-2xl overflow-hidden">
<div className="px-6 py-5 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h4 className="text-lg font-extrabold text-white tracking-tight">Webhook History</h4>
<p className="text-sm text-on-surface-variant">Real-time incoming payload monitor from InfinitePay API</p>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
<input className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary-container w-full md:w-64 transition-all" placeholder="Search event ID..." type="text"/>
</div>
<button className="bg-surface-container-high hover:bg-surface-container-highest px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">filter_list</span>
                            Filter
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Event Type</th>
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Transaction ID</th>
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Timestamp</th>
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Duration</th>
<th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
{/* Row 1 */}
<tr className="neon-glow-hover transition-all duration-300">
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/10 text-primary-fixed text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                                        200 OK
                                    </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">payment.succeeded</span>
<span className="text-[10px] text-zinc-500 font-medium">Source: infinitepay.gateway</span>
</div>
</td>
<td className="px-6 py-5 font-mono text-xs text-zinc-400">tx_821k092lsk1</td>
<td className="px-6 py-5 text-sm text-white">Hoje, 14:22:10</td>
<td className="px-6 py-5 text-sm text-zinc-500">124ms</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="neon-glow-hover transition-all duration-300">
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/10 text-error text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        500 ERR
                                    </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">payout.created</span>
<span className="text-[10px] text-error-dim font-medium">Internal Timeout</span>
</div>
</td>
<td className="px-6 py-5 font-mono text-xs text-zinc-400">py_912u821zzpa</td>
<td className="px-6 py-5 text-sm text-white">Hoje, 14:18:45</td>
<td className="px-6 py-5 text-sm text-zinc-500">2.4s</td>
<td className="px-6 py-5 text-right">
<button className="bg-primary-container/10 text-primary-fixed hover:bg-primary-container hover:text-on-primary-container px-3 py-1 rounded-lg text-[10px] font-black transition-all">
                                        RETRY
                                    </button>
</td>
</tr>
{/* Row 3 */}
<tr className="neon-glow-hover transition-all duration-300">
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/10 text-primary-fixed text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                                        200 OK
                                    </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">subscription.updated</span>
<span className="text-[10px] text-zinc-500 font-medium">Source: infinitepay.recorrencia</span>
</div>
</td>
<td className="px-6 py-5 font-mono text-xs text-zinc-400">sub_112v776nnm2</td>
<td className="px-6 py-5 text-sm text-white">Hoje, 13:55:01</td>
<td className="px-6 py-5 text-sm text-zinc-500">89ms</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="neon-glow-hover transition-all duration-300">
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/10 text-primary-fixed text-[10px] font-black uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                                        200 OK
                                    </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">payment.succeeded</span>
<span className="text-[10px] text-zinc-500 font-medium">Source: infinitepay.gateway</span>
</div>
</td>
<td className="px-6 py-5 font-mono text-xs text-zinc-400">tx_102m882psla3</td>
<td className="px-6 py-5 text-sm text-white">Hoje, 13:42:12</td>
<td className="px-6 py-5 text-sm text-zinc-500">110ms</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-surface-container-low/30 border-t border-white/5 flex justify-between items-center">
<p className="text-xs text-zinc-500">Exibindo 4 de 2,450 eventos</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container text-zinc-500 hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-container text-on-primary-container font-bold text-xs">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container text-zinc-500 hover:text-white transition-all">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container text-zinc-500 hover:text-white transition-all">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container text-zinc-500 hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</section>
{/* Debug & Payload View Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 glass-panel p-6 rounded-2xl">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Last Received Payload</h4>
<button className="text-xs font-bold text-primary-fixed flex items-center gap-1">
<span className="material-symbols-outlined text-sm">content_copy</span>
                            Copy JSON
                        </button>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-white/5 overflow-x-auto">
<pre className="text-xs font-mono text-primary/70 leading-relaxed">{`{
  "event": "payment.succeeded",
  "created_at": "2023-10-27T14:22:10Z",
  "data": {
    "id": "tx_821k092lsk1",
    "amount": 15000,
    "currency": "BRL",
    "status": "approved",
    "customer": {
      "name": "Ricardo S. Oliveira",
      "email": "ricardo@example.com"
    },
    "metadata": {
      "service": "Corte de Cabelo + Barba",
      "barber_id": "bb_009"
    }
  }
}`}</pre>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Integrations Docs</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-primary-fixed">menu_book</span>
</div>
<div>
<p className="text-xs font-bold text-white">Webhook Guide</p>
<p className="text-[10px] text-zinc-500">Security &amp; Signatures</p>
</div>
</li>
<li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-primary-fixed">code</span>
</div>
<div>
<p className="text-xs font-bold text-white">API Reference</p>
<p className="text-[10px] text-zinc-500">InfinitePay V2 REST</p>
</div>
</li>
<li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-primary-fixed">support_agent</span>
</div>
<div>
<p className="text-xs font-bold text-white">Developer Support</p>
<p className="text-[10px] text-zinc-500">Integration Tickets</p>
</div>
</li>
</ul>
</div>
<div className="mt-8 p-4 bg-primary-container/5 rounded-xl border border-primary-container/10">
<p className="text-[10px] text-primary-fixed font-bold uppercase tracking-tighter mb-2">System Status</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></div>
<span className="text-xs text-white">All systems operational</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar for Mobile */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0D0D0D]/90 backdrop-blur-lg border-t border-white/5 flex items-center justify-around px-4 z-50">
<a className="flex flex-col items-center gap-1 text-zinc-500" href="#">
<span className="material-symbols-outlined text-xl">dashboard</span>
<span className="text-[10px] font-bold">Início</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="#">
<span className="material-symbols-outlined text-xl">calendar_today</span>
<span className="text-[10px] font-bold">Agenda</span>
</a>
<a className="flex flex-col items-center gap-1 text-[#C8FF00]" href="#">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<span className="text-[10px] font-bold">Finance</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
<span className="text-[10px] font-bold">Config</span>
</a>
</nav>

    </div>
  );
};

export default MonitoramentoInfinitepayLogs;
