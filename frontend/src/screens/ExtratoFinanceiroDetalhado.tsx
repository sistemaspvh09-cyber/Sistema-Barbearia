
import React from 'react';

const ExtratoFinanceiroDetalhado: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Top Navigation Shell */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 shadow-[0_40px_40px_rgba(0,0,0,0.08)] z-50">
<div className="flex items-center gap-8">
<span className="text-xl font-extrabold tracking-tighter text-[#C8FF00]">BarberPro</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-[#A0A0A0] font-medium hover:text-[#C8FF00] hover:scale-105 transition-all duration-300" href="?module=overview">Dashboard</a>
<a className="text-[#A0A0A0] font-medium hover:text-[#C8FF00] hover:scale-105 transition-all duration-300" href="?module=agenda&screen=agenda-multi-barbeiro-admin">Agenda</a>
<a className="text-[#C8FF00] font-bold border-b-2 border-[#C8FF00] pb-1 hover:scale-105 transition-all duration-300" href="?module=financeiro&screen=configura-ofinanceira-admin">Financeiro</a>
<a className="text-[#A0A0A0] font-medium hover:text-[#C8FF00] hover:scale-105 transition-all duration-300" href="?module=operacao&screen=gest-ode-equipe-admin">Equipe</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a stylish modern man with a neat beard and professional haircut against a dark moody background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvQBH6vmkWHEUYc8x323rWK36GQ-ZZiFMxg9hu_vi9AmicH9qLooZ3rI1e27P1TOAYp_kT33C_zT8EBGpOxghPjlP3G_6d-Ly0q1G9Kbc7y2zJM_lI4FRgsgthSvh2h_4JaCD_aKfoeVAqO-d8w3mGdNjzv-sulD5pM8M1DS3iKcPMBwqmUCXkMn8TjJqyYiLNjEPxyGAVEMdGN4DWOeu8nAADAqEPSAwSa0lcbdvJG-EFKrRMVgygLevL5c3KllARnLVjezHVO34P"/>
</div>
</div>
</header>
{/* Side Navigation Shell (Web Only) */}
<aside className="hidden md:flex flex-col fixed left-0 top-0 h-full py-6 space-y-4 bg-[#1A1919] w-64 shadow-2xl z-40 pt-20">
<div className="px-6 mb-4">
<h2 className="text-lg font-black text-[#C8FF00]">BarberPro</h2>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Premium Management</p>
</div>
<div className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 font-semibold text-sm" href="?module=overview">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 font-semibold text-sm" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                Agenda
            </a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 mx-2 shadow-[0_0_20px_rgba(200,255,0,0.2)] font-semibold text-sm active:scale-[0.98] transition-all" href="?module=financeiro&screen=configura-ofinanceira-admin">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Financeiro
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 font-semibold text-sm" href="?module=operacao&screen=gest-ode-equipe-admin">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                Equipe
            </a>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 mx-2 hover:bg-[#C8FF00]/10 hover:text-[#C8FF00] transition-colors duration-300 font-semibold text-sm" href="?module=operacao&screen=configura-ode-servi-os-desktop">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
                Serviços
            </a>
</div>
<div className="px-4 py-4 space-y-1 mt-auto">
<button className="w-full bg-[#C8FF00] text-[#4f6700] rounded-xl py-3 font-bold text-sm shadow-lg mb-6 active:scale-95 transition-transform">
                Novo Agendamento
            </button>
<a className="flex items-center gap-3 text-[#A0A0A0] px-4 py-3 hover:text-[#C8FF00] transition-colors text-sm font-semibold" href="?module=acesso&screen=suporte-echamados">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
                Suporte
            </a>
<a className="flex items-center gap-3 text-error-dim px-4 py-3 hover:text-error transition-colors text-sm font-semibold" href="?module=acesso&screen=tela-de-login">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Sair
            </a>
</div>
</aside>
{/* Main Content Area */}
<main className="md:ml-64 pt-24 pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen">
{/* Header Section & Summary Bento */}
<div className="mb-10">
<h1 className="text-4xl font-extrabold tracking-tighter mb-8 text-on-surface">Extrato Bancário</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Total Balance Card */}
<div className="relative overflow-hidden bg-surface-container rounded-3xl p-8 glass-border group transition-all duration-300 hover:bg-surface-container-high">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest mb-2">Entradas Totais</p>
<div className="flex items-baseline gap-2">
<span className="text-primary-container text-4xl font-black">R$ 14.250,80</span>
<span className="text-primary-container/60 text-sm font-medium">este mês</span>
</div>
<div className="mt-6 flex items-center gap-2 text-[#C8FF00]">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span className="text-xs font-bold">+12% em relação ao mês anterior</span>
</div>
</div>
{/* Appointments Card */}
<div className="bg-surface-container rounded-3xl p-8 glass-border hover:bg-surface-container-high transition-all">
<p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest mb-2">Serviços Realizados</p>
<div className="flex items-baseline gap-2">
<span className="text-on-surface text-4xl font-black">184</span>
<span className="text-on-surface-variant text-sm font-medium">atendimentos</span>
</div>
<div className="mt-6 flex gap-2">
<div className="h-1.5 flex-1 bg-primary-container rounded-full"></div>
<div className="h-1.5 flex-1 bg-primary-container/20 rounded-full"></div>
</div>
</div>
{/* Best Seller Card */}
<div className="bg-surface-container rounded-3xl p-8 glass-border hover:bg-surface-container-high transition-all">
<p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest mb-2">Ticket Médio</p>
<div className="flex items-baseline gap-2">
<span className="text-on-surface text-4xl font-black">R$ 77,45</span>
<span className="text-on-surface-variant text-sm font-medium">por cliente</span>
</div>
<div className="mt-6 flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">Serviço mais vendido:</span>
<span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Corte + Barba</span>
</div>
</div>
</div>
</div>
{/* Filters Section */}
<div className="bg-surface-container-low rounded-3xl p-6 mb-8 glass-border flex flex-col lg:flex-row items-center gap-6">
<div className="w-full lg:w-auto flex-1 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full bg-surface-container-highest border-none rounded-2xl py-3 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-on-surface-variant/50" placeholder="Buscar por cliente ou transação..." type="text"/>
</div>
<div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
<select className="bg-surface-container-highest border-none rounded-2xl py-3 px-4 text-sm font-bold text-on-surface-variant focus:ring-2 focus:ring-primary/30 min-w-[140px]">
<option>Todos Barbeiros</option>
<option>Ricardo Lima</option>
<option>André Santos</option>
</select>
<select className="bg-surface-container-highest border-none rounded-2xl py-3 px-4 text-sm font-bold text-on-surface-variant focus:ring-2 focus:ring-primary/30 min-w-[140px]">
<option>Pagamento</option>
<option>Cartão Crédito</option>
<option>Pix</option>
<option>Dinheiro</option>
</select>
<select className="bg-surface-container-highest border-none rounded-2xl py-3 px-4 text-sm font-bold text-on-surface-variant focus:ring-2 focus:ring-primary/30 min-w-[140px]">
<option>Últimos 30 dias</option>
<option>Este Mês</option>
<option>Personalizado</option>
</select>
<button className="bg-surface-container-highest p-3 rounded-2xl text-on-surface-variant hover:text-primary transition-colors glass-border">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/* Transactions Table (List View) */}
<div className="bg-surface-container rounded-3xl overflow-hidden glass-border">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30">
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Data</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Cliente</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Barbeiro</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Serviço</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Método</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Valor</th>
<th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Status</th>
<th className="px-6 py-5"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
{/* Transaction 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold">Hoje</span>
<span className="text-xs text-on-surface-variant font-medium">14:32</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img alt="Customer avatar" className="w-full h-full object-cover" data-alt="portrait of a young handsome man smiling, urban style, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElisdTSqQ-CJCK0Kpe4BEjAjS7FdhuN1Cyt7MashudSNDU1p8Be-CsCFa_GdE2fvS01YkOa3-BUN03LdeMUgthkQVRfICLycOSgQbhrw6pIUnCbHg3dmnpEGItn5NpJOxocbtzVgvhCOjes6DdyXjCV_KxwzSa8cPLL-1-vFkySwF6JWMjYKe-E3uHEM0_gWOO-KbTmA1UWxQiUk_9U2bJDZ7bHELbP7QVQxlcHdnW7uslB6hIor-awtK5YxWSxybIivj9RhUaxmP"/>
</div>
<span className="text-sm font-bold">Marcos Vinícius</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-on-surface-variant">Ricardo Lima</span>
</td>
<td className="px-6 py-5">
<span className="text-sm font-semibold">Corte Premium</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg" data-icon="credit_card">credit_card</span>
<span className="text-xs font-bold uppercase tracking-wider">Crédito</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-black text-primary-container">R$ 65,00</span>
</td>
<td className="px-6 py-5">
<span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">Pago</span>
</td>
<td className="px-6 py-5 text-right">
<button className="p-2 text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Transaction 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold">Hoje</span>
<span className="text-xs text-on-surface-variant font-medium">12:15</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img alt="Customer avatar" className="w-full h-full object-cover" data-alt="headshot of a mature man with groomed stubble and modern short haircut, dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE2NUfW_ttpLwS1s0mmlGP5s_JEM3HF6JbsRRkwVrEk33EYOyBaVkmJUPIkatmIeRQzJEsDqQ7UdhJsNyRywA7fYWGRKacRYTFQG0oSuy1KUPHPOKv5TRiQ5aPuv_xk8FBb034Y1VIBz-wUozvzWSFvNC2entBNlty2Dx1g9dZG4MibrraiWZujH4RTzOYWC5o7ZgsFoFPlLw-yOeeqt2ky8OowDIp_cQzRIrtmiBBs8UU6IEtIf_kWI9mV-j_SCSWZUh2wEp_K50n"/>
</div>
<span className="text-sm font-bold">Felipe Mendes</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-on-surface-variant">André Santos</span>
</td>
<td className="px-6 py-5">
<span className="text-sm font-semibold">Combo VIP</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg" data-icon="qr_code_2">qr_code_2</span>
<span className="text-xs font-bold uppercase tracking-wider">Pix</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-black text-primary-container">R$ 120,00</span>
</td>
<td className="px-6 py-5">
<span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">Pago</span>
</td>
<td className="px-6 py-5 text-right">
<button className="p-2 text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Transaction 3 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold">Ontem</span>
<span className="text-xs text-on-surface-variant font-medium">19:40</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img alt="Customer avatar" className="w-full h-full object-cover" data-alt="confident young man looking at camera, sleek hair style, cinematic studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfwb_ka_op9YHEkpEvyB2oYznhaFt6xiNeBFbA8TzhDFIfT-6oLHJ84fxDhbgkMuC-19WKqpuhEtPpvptH3dkgcxMkK107n98Q-4t9mtLY-_-msqxPGJVQLD_UOtgX29kwidfNm-O1cQAQJ24Xj8CiwP9WZS87sGk8JWO0c4bfUan3HD7Dslsf0ttLirzNhep511_0GNeUVwJFRw-QkKVtLEntZ6l6FcB45tG_y_ZJZWft0tCDns3ra3doJ4y8WcGaR-bDltZ4QqT8"/>
</div>
<span className="text-sm font-bold">Gustavo Oliveira</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-on-surface-variant">Ricardo Lima</span>
</td>
<td className="px-6 py-5">
<span className="text-sm font-semibold">Barba Moderna</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg" data-icon="payments">payments</span>
<span className="text-xs font-bold uppercase tracking-wider">Dinheiro</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-black text-primary-container">R$ 45,00</span>
</td>
<td className="px-6 py-5">
<span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">Pago</span>
</td>
<td className="px-6 py-5 text-right">
<button className="p-2 text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Transaction 4 - Pending/Draft Example */}
<tr className="hover:bg-error/5 transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold">Ontem</span>
<span className="text-xs text-on-surface-variant font-medium">18:00</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img alt="Customer avatar" className="w-full h-full object-cover" data-alt="close-up of a man with clean shave and classic haircut, profile view, neon highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1_SZPNhk_QwpO8N-2TQ7EH2az51dJL9AgaxL66FvyblTFUcjkcS0ZRrzShAorkgvthuA86cL8UZ7APkWJ8WwFRGznkiPvlyDu9CsQpvdMckAopv5GKF_S9gNVC1hgKI3kT7l534Xzr3wwZWWGuHQhZ7JBrFGqbq-ohSzju6cRjvq2i15Hcvv8Z-GwS1B1DuddnQB65F61HDWUuztqPSRXT91wdY7N345z-q3Vf1W84jR1NyE3HCvSA2AyhHoUMS7MyXXn2a2Gvika"/>
</div>
<span className="text-sm font-bold">Arthur Santos</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-on-surface-variant">André Santos</span>
</td>
<td className="px-6 py-5">
<span className="text-sm font-semibold">Corte + Sobrancelha</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg" data-icon="history">history</span>
<span className="text-xs font-bold uppercase tracking-wider">Aguardando</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-black text-on-surface">R$ 80,00</span>
</td>
<td className="px-6 py-5">
<span className="bg-error/10 text-error px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-error/20">Cancelado</span>
</td>
<td className="px-6 py-5 text-right">
<button className="p-2 text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-outline-variant/10 flex justify-between items-center">
<span className="text-xs text-on-surface-variant font-medium">Mostrando 4 de 1.240 transações</span>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-container text-on-primary-container font-black shadow-[0_0_15px_rgba(200,255,0,0.3)]">
                        1
                    </button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all">
                        2
                    </button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/* Bottom Navigation Shell (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#1A1919]/80 backdrop-blur-md border-t border-[#C8FF00]/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="?module=overview">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="?module=agenda&screen=agenda-multi-barbeiro-admin">
<span className="material-symbols-outlined mb-1" data-icon="event_note">event_note</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Agenda</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110 active:scale-90 transition-all duration-300" href="#">
<span className="material-symbols-outlined mb-1" data-icon="account_balance_wallet">account_balance_wallet</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Grana</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2 hover:text-[#C8FF00] transition-transform" href="#">
<span className="material-symbols-outlined mb-1" data-icon="menu">menu</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
</a>
</nav>
{/* Export FAB */}
<button className="fixed right-6 bottom-24 md:bottom-8 bg-[#C8FF00] text-[#4f6700] w-14 h-14 rounded-2xl shadow-[0_10px_30px_rgba(200,255,0,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
<span className="material-symbols-outlined" data-icon="download">download</span>
<span className="absolute right-full mr-4 bg-surface-container px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant/20">Exportar PDF</span>
</button>

    </div>
  );
};

export default ExtratoFinanceiroDetalhado;
