
import React from 'react';

const AuditoriaDoSistemaLogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (Authority: JSON) */}
<aside className="fixed left-0 top-0 h-full flex flex-col p-4 gap-2 bg-[#1A1919] h-screen w-64 border-r border-white/5 z-50">
<div className="flex items-center gap-3 px-2 mb-8">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined text-inverse-primary" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div>
<h1 className="text-2xl font-extrabold text-[#C8FF00] leading-none tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Premium Management</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="?module=overview">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined">calendar_today</span> Agenda
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined">groups</span> Clients
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined">content_cut</span> Services
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="#">
<span className="material-symbols-outlined">badge</span> Team
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="#">
<span className="material-symbols-outlined">payments</span> Finance
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="#">
<span className="material-symbols-outlined">receipt_long</span> Payments
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-xl font-medium text-sm" href="#">
<span className="material-symbols-outlined">military_tech</span> Loyalty
            </a>
{/* Active State: Settings (Auditoria sits under Settings) */}
<a className="flex items-center gap-3 px-4 py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl shadow-[0_0_20px_rgba(200,255,0,0.2)] font-bold text-sm" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span> Settings
            </a>
</nav>
<div className="mt-auto pt-4 border-t border-white/5">
<button className="w-full bg-primary-container text-[#4f6700] py-3 rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span> New Appointment
            </button>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 flex-1 min-h-screen relative">
{/* TopNavBar (Authority: JSON) */}
<header className="sticky top-0 z-50 flex justify-between items-center px-6 h-16 w-full bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-xs">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-full focus:ring-1 focus:ring-[#C8FF00] text-on-surface" placeholder="Search logs..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-zinc-400">
<span className="material-symbols-outlined text-[#C8FF00]">shield_person</span>
<span className="text-xs font-bold tracking-tight uppercase">Security Audit Mode</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="text-zinc-400 hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined">settings</span></button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
<img alt="Admin profile" className="w-full h-full object-cover" data-alt="close-up portrait of a professional male administrator in a modern office with subtle cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCGLjjz8Tg5fIFOmK8HS9czP-CNaekci2X2hRxARf_LFBwHEsn6DRUnVEhPepvoL7l-jMLA3Fd4yPdny7nZCipXtsYbCQ-4sZq0gdoEc76S4GlQ01OLfnlWjEuVB33cSHZDIhRT_Tberv83RbiEQ07cp2DKfj2vZoEn8a3GxBYPQMzJOAXpZ7apu8AY8EZWkUGKbfCoYwAFHFhgCV4gG8AQ5Xj-4qUBloquJQCbtwFyi6we2TrSMSDKFXoBppyolJeowVhK7fSRuCk"/>
</div>
</div>
</div>
</header>
{/* Audit Page Content */}
<div className="p-8 space-y-8">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<nav className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
<span>Settings</span>
<span className="material-symbols-outlined text-[10px]">chevron_right</span>
<span className="text-[#C8FF00]">System Logs &amp; Audit</span>
</nav>
<h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">Security Audit</h2>
<p className="text-on-surface-variant mt-2 max-w-xl">Comprehensive activity tracking for your establishment. Monitor changes, system health, and staff performance with cryptographic integrity.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-on-surface hover:bg-white/5 transition-all text-sm font-semibold">
<span className="material-symbols-outlined text-lg">download</span> Export Report
                    </button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-inverse-primary hover:scale-[1.02] transition-all text-sm font-bold shadow-[0_0_20px_rgba(200,255,0,0.2)]">
<span className="material-symbols-outlined text-lg">sync</span> Refresh Logs
                    </button>
</div>
</div>
{/* Bento Filter Bar */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="md:col-span-1 bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-white/5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Filter by User</label>
<select className="bg-transparent border-none text-on-surface font-semibold p-0 focus:ring-0 cursor-pointer">
<option>All Personnel</option>
<option>Admin (Tiago)</option>
<option>Carlos (Barber)</option>
<option>Julia (Reception)</option>
<option>System Automatic</option>
</select>
</div>
<div className="md:col-span-1 bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-white/5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Action Type</label>
<select className="bg-transparent border-none text-on-surface font-semibold p-0 focus:ring-0 cursor-pointer">
<option>All Activities</option>
<option>Price Changes</option>
<option>Staff Profile</option>
<option>System Backups</option>
<option>Financial Record</option>
</select>
</div>
<div className="md:col-span-1 bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-white/5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Date Range</label>
<div className="flex items-center gap-2 text-on-surface font-semibold cursor-pointer">
<span className="material-symbols-outlined text-lg text-[#C8FF00]">calendar_month</span>
<span>Oct 24 - Oct 31, 2023</span>
</div>
</div>
<div className="md:col-span-1 bg-surface-container rounded-2xl p-4 flex flex-col gap-2 border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Integrity Check</label>
<div className="flex items-center gap-2 text-[#C8FF00] font-bold">
<span className="material-symbols-outlined text-lg">verified_user</span>
<span>Chain Verified</span>
</div>
</div>
</div>
{/* Audit Logs Timeline */}
<div className="bg-surface-container-low rounded-2xl border border-white/5 overflow-hidden">
<div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-high/30">
<h3 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[#C8FF00]">list_alt</span>
                        Real-time Audit Trail
                    </h3>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-zinc-400 font-mono">2,482 TOTAL EVENTS</span>
</div>
<div className="divide-y divide-white/5">
{/* Log Entry 1 */}
<div className="p-6 flex items-start gap-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#C8FF00]/30 transition-colors">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-[#C8FF00]">person_edit</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<h4 className="text-on-surface font-bold text-lg">Admin updated price of service <span className="text-[#C8FF00]">Haircut</span></h4>
<span className="text-xs font-mono text-zinc-500">2 mins ago</span>
</div>
<p className="text-sm text-on-surface-variant">Admin Tiago changed base price from <span className="text-zinc-300">$35.00</span> to <span className="text-primary font-bold">$40.00</span> for Premium Cut.</p>
<div className="flex items-center gap-4 mt-3">
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-0.5 rounded">ID: #LOG-9921</span>
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-blue-400/80 font-bold bg-blue-500/10 px-2 py-0.5 rounded">IP: 192.168.1.45</span>
</div>
</div>
</div>
{/* Log Entry 2 */}
<div className="p-6 flex items-start gap-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#C8FF00]/30 transition-colors">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-[#C8FF00]">badge</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<h4 className="text-on-surface font-bold text-lg">Barber <span className="text-[#C8FF00]">Carlos</span> changed his specialty</h4>
<span className="text-xs font-mono text-zinc-500">14 mins ago</span>
</div>
<p className="text-sm text-on-surface-variant">Profile update: Added <span className="text-zinc-300">"Master Shave"</span> and <span className="text-zinc-300">"Beard Sculpting"</span> to skill certifications.</p>
<div className="flex items-center gap-4 mt-3">
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-0.5 rounded">ID: #LOG-9918</span>
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#C8FF00]/80 font-bold bg-[#C8FF00]/10 px-2 py-0.5 rounded">MOBILE APP</span>
</div>
</div>
</div>
{/* Log Entry 3 */}
<div className="p-6 flex items-start gap-6 bg-[#C8FF00]/5 hover:bg-[#C8FF00]/10 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center shrink-0 border border-[#C8FF00]/20">
<span className="material-symbols-outlined text-[#C8FF00]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<h4 className="text-on-surface font-bold text-lg">System automatic backup completed</h4>
<span className="text-xs font-mono text-zinc-400">1 hour ago</span>
</div>
<p className="text-sm text-[#C8FF00]/80">Encrypted database snapshot successfully stored in AWS S3 (Virginia-1). Total size: 482MB.</p>
<div className="flex items-center gap-4 mt-3">
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-0.5 rounded">ID: #LOG-9890</span>
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-400 font-bold bg-white/5 px-2 py-0.5 rounded">HASH: 8e2a...f91c</span>
</div>
</div>
</div>
{/* Log Entry 4 */}
<div className="p-6 flex items-start gap-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#C8FF00]/30 transition-colors">
<span className="material-symbols-outlined text-zinc-400 group-hover:text-[#C8FF00]">receipt_long</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<h4 className="text-on-surface font-bold text-lg">Inventory restocked: <span className="text-[#C8FF00]">Premium Pomade</span></h4>
<span className="text-xs font-mono text-zinc-500">3 hours ago</span>
</div>
<p className="text-sm text-on-surface-variant">Receptionist Julia updated stock count. Initial: 12 units. Final: 60 units. Supplier: BarberSupply Co.</p>
<div className="flex items-center gap-4 mt-3">
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-0.5 rounded">ID: #LOG-9877</span>
</div>
</div>
</div>
{/* Log Entry 5 */}
<div className="p-6 flex items-start gap-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center shrink-0 border border-error/20">
<span className="material-symbols-outlined text-error">gpp_maybe</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<h4 className="text-error font-bold text-lg">Failed login attempt detected</h4>
<span className="text-xs font-mono text-error/70">5 hours ago</span>
</div>
<p className="text-sm text-on-surface-variant">Multiple failed attempts on account <span className="text-zinc-300">carlos.barber@barberpro.com</span>. Source IP: 45.12.89.231 (Lagos, NG).</p>
<div className="flex items-center gap-4 mt-3">
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-0.5 rounded">ID: #LOG-9852</span>
<span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-error font-bold bg-error/10 px-2 py-0.5 rounded">SECURITY ALERT</span>
</div>
</div>
</div>
</div>
{/* Footer Pagination */}
<div className="p-6 bg-surface-container-high/30 flex items-center justify-between">
<button className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-on-surface transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">arrow_back_ios</span> Previous
                    </button>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-lg bg-primary-container text-inverse-primary font-bold text-xs">1</button>
<button className="w-8 h-8 rounded-lg text-zinc-500 font-bold text-xs hover:bg-white/5">2</button>
<button className="w-8 h-8 rounded-lg text-zinc-500 font-bold text-xs hover:bg-white/5">3</button>
<span className="text-zinc-600">...</span>
<button className="w-8 h-8 rounded-lg text-zinc-500 font-bold text-xs hover:bg-white/5">42</button>
</div>
<button className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-on-surface transition-colors flex items-center gap-1">
                        Next <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
</button>
</div>
</div>
{/* Stats Grid Footer */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-surface-container border border-white/5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Active Sessions</span>
<span className="material-symbols-outlined text-[#C8FF00]">devices</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface tracking-tighter">08</div>
<p className="text-xs text-on-surface-variant mt-1">4 Web, 3 Mobile, 1 Terminal</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-surface-container border border-white/5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Storage Status</span>
<span className="material-symbols-outlined text-[#C8FF00]">database</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface tracking-tighter">14.2 GB</div>
<div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-[#C8FF00] h-full" style={{ width: '65%' }}></div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-surface-container border border-white/5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Uptime</span>
<span className="material-symbols-outlined text-[#C8FF00]">bolt</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface tracking-tighter">99.98%</div>
<p className="text-xs text-on-surface-variant mt-1">Last incident: 14 days ago</p>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default AuditoriaDoSistemaLogs;
