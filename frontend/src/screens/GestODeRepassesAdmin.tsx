
import React from 'react';

const GestODeRepassesAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar Component */}
<aside className="flex flex-col h-full sticky top-0 left-0 h-screen w-64 border-r border-[#ffffff15] bg-[#0D0D0D] dark:bg-[#0D0D0D] shadow-[40px_0_40px_rgba(0,0,0,0.5)] z-50">
<div className="p-8">
<h1 className="text-2xl font-black text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[#A0A0A0] text-xs font-['Plus_Jakarta_Sans'] tracking-tight font-medium">Elite Management</p>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Transações</span>
</a>
{/* Active Tab: Comissões */}
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#C8FF00] bg-[#C8FF0010] border-r-2 border-[#C8FF00] font-bold font-['Plus_Jakarta_Sans'] tracking-tight transition-all duration-300 scale-102 shadow-[0_0_15px_rgba(200,255,0,0.2)]" href="#">
<span className="material-symbols-outlined" data-icon="percent">percent</span>
<span>Comissões</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>Barbeiros</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span>Serviços</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#ffffff08] transition-all duration-300 font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Configurações</span>
</a>
</nav>
<div className="p-4 border-t border-[#ffffff10]">
<button className="w-full py-3 bg-[#C8FF00] text-[#4f6700] rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform neon-glow">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                Novo Agendamento
            </button>
</div>
<div className="px-4 py-6 space-y-2">
<a className="flex items-center gap-3 px-4 py-2 text-[#A0A0A0] hover:text-white transition-all text-sm" href="#">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
                Suporte
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-error hover:text-error-dim transition-all text-sm" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Sair
            </a>
</div>
</aside>
<main className="flex-1 flex flex-col min-h-screen">
{/* TopAppBar Component */}
<header className="flex justify-between items-center px-8 py-4 sticky top-0 w-full bg-[#0D0D0D]/70 backdrop-blur-xl z-40 border-b border-[#ffffff15]">
<div className="flex items-center gap-6 flex-1">
<h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-[#C8FF00]">Painel Financeiro</h2>
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#C8FF00] transition-all outline-none" placeholder="Buscar por barbeiro..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-[#A0A0A0] hover:text-[#C8FF00] transition-colors">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</button>
<div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-xs font-bold">Admin</p>
<p className="text-[10px] text-on-surface-variant">Unidade Matriz</p>
</div>
<img alt="Usuário Admin" className="w-10 h-10 rounded-full object-cover border border-[#C8FF00]/30" data-alt="Close-up professional headshot of a modern creative business administrator in a dark studio setting with cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUWt6btqEtEcpUbz76qOXz39n_ul41KCfDIFMHDjJvfEHh6iJuOSa6CqAvr7KgE2nzKwWp9BdG2pnVQieHAweDu_ubmbfa2OayQdiA5jOunpLRuNQQ9lEFxbcTjavr2beGNGbqnXmhP-6nYYKKjSIUZ3PFYpcuIoWrQO0xnxYrQh_pOpEKGsONlGEm48Mopy93p8whbzlGyjxzHMTv9mthf6kFkFrlY6NUe0t2xP4ZxMRG5IcoU1rnXdB3tCSJpXfA-9UU9gxEitUU"/>
</div>
</div>
</header>
<div className="p-8 space-y-8">
{/* Finance Overview Cards */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="pending_actions">pending_actions</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Total a Pagar (Geral)</p>
<h3 className="text-3xl font-black mt-2 tracking-tight">R$ 14.280,50</h3>
<div className="mt-4 flex items-center gap-2 text-error text-xs">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span>+12% em relação a semana passada</span>
</div>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="check_circle">check_circle</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Comissões Pagas (Mês)</p>
<h3 className="text-3xl font-black mt-2 tracking-tight">R$ 38.900,00</h3>
<div className="mt-4 flex items-center gap-2 text-[#C8FF00] text-xs">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
<span>85% das metas mensais atingidas</span>
</div>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border border-l-4 border-l-[#C8FF00] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="monitoring">monitoring</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Lucro Líquido Estimado</p>
<h3 className="text-3xl font-black mt-2 tracking-tight text-[#C8FF00]">R$ 22.145,00</h3>
<div className="mt-4 flex items-center gap-2 text-on-surface-variant text-xs">
<span className="material-symbols-outlined text-sm" data-icon="info">info</span>
<span>Após deduções de taxas e insumos</span>
</div>
</div>
</section>
{/* Main Content Area: Barber Commissions Table */}
<section className="bg-surface-container rounded-2xl glass-border overflow-hidden">
<div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
<div>
<h4 className="text-xl font-bold">Gestão de Repasses</h4>
<p className="text-on-surface-variant text-sm">Controle de pagamentos pendentes e histórico mensal</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                            Filtrar
                        </button>
<button className="bg-surface-container-high px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                            Exportar Relatório
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-on-surface-variant text-xs uppercase tracking-widest bg-surface-container-low/50">
<th className="px-8 py-4 font-semibold">Barbeiro</th>
<th className="px-6 py-4 font-semibold">Saldo Pendente</th>
<th className="px-6 py-4 font-semibold">Total Pago (Mês)</th>
<th className="px-6 py-4 font-semibold">Status</th>
<th className="px-6 py-4 font-semibold text-right">Ação</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
{/* Barber Row 1 */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Ricardo Silva" className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Portrait of a modern male barber with tattoos and stylish hair in a rustic barbershop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoIdeTDBpQ3qQAeLBrYuXXYKyv7ixz_x1N-USScR9rGNNTRp_axueADb1iWWwTFfzTdgppZfVCYMDmR0E9KX4tPCaFJGtW3W4Df2TVAi0R4kvD5G_MXQq_d0c7nhhy3rdmzJuFgeJpaqxS8PwpZZcb5wtPnU2MlbPNDjY704JWBZIyJE8DusITgvAQ4eIb1IP-m07HBcTUvSbVVLT7oA6hoggdHK8hQFTYDvl7Cy0jtMbgvT46CKASMJD8iNVleoBy2Jk2mEdtyhsP"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C8FF00] rounded-full border-2 border-surface-container"></div>
</div>
<div>
<p className="font-bold text-sm">Ricardo Silva</p>
<p className="text-xs text-on-surface-variant">Master Barber</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="font-bold text-error">R$ 2.450,00</span>
</td>
<td className="px-6 py-5">
<span className="text-on-surface-variant">R$ 8.200,00</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full uppercase tracking-tighter border border-error/20">A pagar</span>
</td>
<td className="px-6 py-5 text-right">
<button className="bg-[#C8FF00] text-[#4f6700] px-4 py-2 rounded-lg text-xs font-bold hover:shadow-[0_0_15px_rgba(200,255,0,0.4)] transition-all">
                                        Pagar Agora
                                    </button>
</td>
</tr>
{/* Barber Row 2 */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Lucas Oliveira" className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Young professional male barber smiling, wearing a clean white shirt in a modern minimalist barber shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk75Y_9O-40B5Mo6ymrwAGjb01aklOwYbNQFzcdtaM1Ychb7ZE9Vn7bOzH_pUSD4wk3KpvSxPrpus8VZnnoDayWFSEzZccItVC4C1BOoIkOYecWizgA2Szmavsw1Bpp5DzoEJzaY3KyiISYfNLaoNCG0ASKPJNQg8FmN6a4Xi2MhYXJ3SVPDgbwvJuzAJnmxLVXmkfQn_Q0sDoIpNiuu1ffRR7b15YxS5rJqc1qPwkdUa5MMkvh4Xcwp9wGofuH5t9W8l3FPazL_1t"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C8FF00] rounded-full border-2 border-surface-container"></div>
</div>
<div>
<p className="font-bold text-sm">Lucas Oliveira</p>
<p className="text-xs text-on-surface-variant">Senior Stylist</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="font-bold">R$ 0,00</span>
</td>
<td className="px-6 py-5">
<span className="text-on-surface-variant">R$ 5.400,00</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-bold rounded-full uppercase tracking-tighter border border-[#C8FF00]/20">Em dia</span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-on-surface-variant/50 cursor-not-allowed px-4 py-2 rounded-lg text-xs font-bold border border-outline-variant/20">
                                        Pagar Agora
                                    </button>
</td>
</tr>
{/* Barber Row 3 */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="André Santos" className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Close-up of a masculine barber with a groomed beard and focused expression in a dimly lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMA3c7XcopvqreUa9fafy4RO69cIyg96-MGfopsnHvlOytHDRTogc1eWz6CkHhoEKqNuPHCI6GSiY5CqHQpHXlk4JCpBZh_8wVFeo2ZOQf1jwWlvPOHh4T96OGH4RsYHuKrhZiyzPn1w6nZS_2ndLh_Ttncdh0eHWaTxJNFD8Vlbf6Qx2Jyzcc1uIjg6-F8LLlf-mW7sTH6odlyjzPx5RtsZTvssdFThMsaJ0i-PbYEzeVOieKEm-mCqJQM0gi0-2A-UjL_9S0nnlh"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-error rounded-full border-2 border-surface-container"></div>
</div>
<div>
<p className="font-bold text-sm">André Santos</p>
<p className="text-xs text-on-surface-variant">Barber Specialist</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="font-bold text-error">R$ 1.120,00</span>
</td>
<td className="px-6 py-5">
<span className="text-on-surface-variant">R$ 6.100,00</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full uppercase tracking-tighter border border-error/20">A pagar</span>
</td>
<td className="px-6 py-5 text-right">
<button className="bg-[#C8FF00] text-[#4f6700] px-4 py-2 rounded-lg text-xs font-bold hover:shadow-[0_0_15px_rgba(200,255,0,0.4)] transition-all">
                                        Pagar Agora
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 bg-surface-container-low/30 flex justify-between items-center text-xs text-on-surface-variant">
<p>Mostrando 3 de 12 barbeiros registrados</p>
<div className="flex gap-2">
<button className="p-2 bg-surface-container-high rounded-lg hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span></button>
<button className="px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] rounded-lg font-bold">1</button>
<button className="px-3 py-1 hover:bg-surface-container-high rounded-lg transition-colors">2</button>
<button className="px-3 py-1 hover:bg-surface-container-high rounded-lg transition-colors">3</button>
<button className="p-2 bg-surface-container-high rounded-lg hover:text-[#C8FF00] transition-colors"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</section>
{/* Payment Summary Preview Section (Glassmorphism Modal-like card) */}
<section className="bg-surface-container-high/80 backdrop-blur-xl rounded-2xl p-8 glass-border max-w-2xl mx-auto border-t-2 border-t-[#C8FF00]">
<div className="flex items-start justify-between mb-8">
<div>
<h5 className="text-2xl font-black tracking-tight">Resumo de Pagamento</h5>
<p className="text-on-surface-variant text-sm mt-1">Conferência final antes da liberação do TED/PIX</p>
</div>
<div className="w-12 h-12 bg-[#C8FF00]/10 rounded-full flex items-center justify-center text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</div>
</div>
<div className="space-y-6">
<div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Barbeiro selecionado</span>
<span className="font-bold">Ricardo Silva</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Comissão Acumulada (Cortes)</span>
<span className="font-bold">R$ 2.100,00</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Comissão Acumulada (Produtos)</span>
<span className="font-bold">R$ 350,00</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-lg font-bold">Total Líquido a Transferir</span>
<span className="text-2xl font-black text-[#C8FF00]">R$ 2.450,00</span>
</div>
</div>
<div className="mt-10 flex gap-4">
<button className="flex-1 py-4 bg-[#C8FF00] text-[#4f6700] rounded-xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all neon-glow">
                        Confirmar e Pagar via PIX
                    </button>
<button className="px-6 py-4 border border-outline-variant rounded-xl text-on-surface-variant font-bold text-sm hover:bg-surface-bright transition-all">
                        Cancelar
                    </button>
</div>
<div className="mt-6 flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl">
<span className="material-symbols-outlined text-on-tertiary" data-icon="shield">shield</span>
<p className="text-[10px] text-on-tertiary-fixed leading-tight">
                        Esta transação será registrada e o extrato de comissão será enviado automaticamente para o e-mail do colaborador após a confirmação.
                    </p>
</div>
</section>
</div>
</main>

    </div>
  );
};

export default GestODeRepassesAdmin;
