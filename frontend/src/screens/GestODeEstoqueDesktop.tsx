
import React from 'react';

const GestODeEstoqueDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (As defined in Shared Components) */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#1A1919] flex flex-col py-8">
<div className="px-6 mb-10">
<h1 className="text-[#C8FF00] font-black tracking-tighter text-2xl">BarberPro</h1>
<p className="text-on-surface-variant text-xs mt-1">Premium Management</p>
</div>
<nav className="flex-1 flex flex-col">
{/* Dashboard */}
<a className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
{/* Agendamentos */}
<a className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium text-sm">Agendamentos</span>
</a>
{/* Clientes */}
<a className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-medium text-sm">Clientes</span>
</a>
{/* Estoque (Active) */}
<a className="text-[#C8FF00] bg-[#C8FF00]/10 border-r-4 border-[#C8FF00] py-3 px-6 flex items-center gap-4 transition-transform duration-300 scale-102" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium text-sm">Estoque</span>
</a>
{/* Financeiro */}
<a className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm">Financeiro</span>
</a>
{/* Relatórios */}
<a className="text-[#A0A0A0] py-3 px-6 flex items-center gap-4 hover:bg-[#C8FF00]/5 hover:text-[#C8FF00] transition-colors duration-300" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-medium text-sm">Relatórios</span>
</a>
</nav>
<div className="mt-auto px-6 space-y-4">
<button className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 neon-glow transition-all duration-300 active:scale-95">
<span className="material-symbols-outlined text-lg">add_circle</span>
<span>Novo Pedido</span>
</button>
<div className="bg-gradient-to-r from-transparent via-[#C8FF00]/10 to-transparent h-[1px] w-full my-4"></div>
<a className="text-[#A0A0A0] flex items-center gap-4 hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="text-sm">Suporte</span>
</a>
<a className="text-error flex items-center gap-4 hover:brightness-110 transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm font-semibold">Sair</span>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-64 min-h-screen pb-12">
{/* TopAppBar (As defined in Shared Components) */}
<header className="fixed top-0 right-0 left-64 z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 flex justify-between items-center px-8 h-16 shadow-[0_40px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10 w-96">
<span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant" placeholder="Buscar produto por nome ou SKU..." type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="relative text-on-surface-variant hover:text-[#C8FF00] transition-all duration-300 hover:scale-105 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-[#0D0D0D]"></span>
</button>
<button className="text-on-surface-variant hover:text-[#C8FF00] transition-all duration-300 hover:scale-105 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-right">
<p className="text-xs font-bold tracking-tight text-on-surface">Admin BarberPro</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Unidade Matriz</p>
</div>
<img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-[#C8FF00]/30 transition-transform group-hover:scale-110" data-alt="Close up portrait of a professional male barber with styled hair and beard in a dark uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB86vILSQP5wUM3RWs-DfImPNcXz6GkZyruz0cje58EOWMBet8G4RM_vEaz0mXclziSp5QNU7K5jm0iFJe5Ri9guoBQ4I-lmjhk7cksiqDso5jiM1z_EOY8gQmkJqQqlaNx7zc6ODkqG9rcYpRIYtDMtCV4ek6bfpBJHei3DrplF6ch6i5u7XqLa_YkuBzzKtkeI5I7pqlBBJD89aeG_Ee4_9vgLrUXXSX3-_b53-DJRYmSHuKtwWyK9jHPhErP-91CUQJLDoTYUYiL"/>
</div>
</div>
</header>
{/* Content Canvas */}
<div className="mt-16 px-8 pt-8">
{/* Page Header */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Gestão de Estoque</h2>
<p className="text-on-surface-variant mt-1">Controle e reposição de produtos da unidade</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-2.5 rounded-xl bg-surface-container-highest border border-outline-variant/20 text-on-surface font-semibold text-sm hover:bg-surface-bright transition-all duration-300 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">input</span>
                        Registrar Entrada
                    </button>
<button className="px-6 py-2.5 rounded-xl bg-primary-container text-on-primary font-bold text-sm neon-glow transition-all duration-300 active:scale-95 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">add</span>
                        Novo Produto
                    </button>
</div>
</div>
{/* Key Metrics Bar (Bento style) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
<p className="text-on-surface-variant text-sm font-medium mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">payments</span>
                        Valor em Estoque
                    </p>
<h3 className="text-2xl font-black text-on-surface">R$ 14.580,00</h3>
<p className="text-[10px] text-primary-container mt-2 font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
                        +4.2% em relação ao mês anterior
                    </p>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full blur-3xl group-hover:bg-error/10 transition-all"></div>
<p className="text-on-surface-variant text-sm font-medium mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-error text-lg">warning</span>
                        Itens em Baixo Estoque
                    </p>
<h3 className="text-2xl font-black text-on-surface">12 Produtos</h3>
<p className="text-[10px] text-error mt-2 font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">priority_high</span>
                        Ação imediata necessária
                    </p>
</div>
<div className="bg-surface-container p-6 rounded-2xl glass-border relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
<p className="text-on-surface-variant text-sm font-medium mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">inventory</span>
                        Produtos Ativos
                    </p>
<h3 className="text-2xl font-black text-on-surface">86 SKUs</h3>
<p className="text-[10px] text-on-surface-variant mt-2 font-bold">Total cadastrado no sistema</p>
</div>
</div>
{/* Search & Filter Bar */}
<div className="bg-surface-container-low p-4 rounded-2xl mb-6 flex flex-wrap gap-4 items-center">
<div className="flex-1 min-w-[240px] bg-surface-container px-4 py-2.5 rounded-xl glass-border flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface" placeholder="Filtrar produtos..." type="text"/>
</div>
<div className="flex gap-2">
<select className="bg-surface-container border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-primary focus:border-primary">
<option>Todas Categorias</option>
<option>Pomadas</option>
<option>Shampoos</option>
<option>Acessórios</option>
<option>Óleos</option>
</select>
<select className="bg-surface-container border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-primary focus:border-primary">
<option>Status do Estoque</option>
<option>Em estoque</option>
<option>Baixo</option>
<option>Esgotado</option>
</select>
</div>
<button className="ml-auto p-2.5 bg-surface-container rounded-xl text-on-surface-variant hover:text-on-surface transition-colors glass-border">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
{/* Inventory Table */}
<div className="bg-surface-container rounded-2xl overflow-hidden glass-border">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-highest/50">
<tr>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Produto</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">SKU</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Categoria</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Preços (Custo/Venda)</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Margem</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Estoque Atual</th>
<th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
{/* Product Row 1 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
<img alt="Product Image" className="w-full h-full object-cover" data-alt="Premium tin of hair pomade with professional black and gold labeling on a dark marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKc6DSwyiLCeAp7x_2IBxKnx5I3gUZipaHXKiTFY1rfCmdFjFprXp0n8HO3SBXOL3N0pQus5MQWoMk5LUML8bZLhG_9XonzgCPEzEeVPPXrKzR92ej1jor4o7ZnmGKLkhVpCbenSXrR_eimiC-q-Afp0xdpRFvaylf5IuIgtTSL947fNWD-O_ZEuraia6i1Q9HeCoGLiy6SXoyPZuPQhA4f-gwDW7LplKF7qWFf6WsBjZPW56hTKDCwvUgQaDUmDuDQ0m0IqU_cKW-"/>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Pomada Matte Suavecitto</p>
<p className="text-xs text-on-surface-variant">Suavecitto Premium</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant font-mono">SUP-MAT-001</td>
<td className="px-6 py-4">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">Pomadas</span>
</td>
<td className="px-6 py-4">
<div className="text-sm">
<p className="text-on-surface-variant">Custo: <span className="text-on-surface">R$ 45,00</span></p>
<p className="text-on-surface-variant">Venda: <span className="text-primary-container">R$ 89,90</span></p>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-primary-container">49.9%</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-bold mb-1">
<span>42 un</span>
<span className="text-primary-container uppercase text-[9px]">Normal</span>
</div>
<div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[80%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Product Row 2 (Low Stock) */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
<img alt="Product Image" className="w-full h-full object-cover" data-alt="Bottles of luxury men's shampoo and conditioner with minimalist white and black design on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1TAc4PSssKL0Uyk2K4SmRONifF3tDbPuFddWc1P4DiBU2gBWMUac8wdSzTGBw_jt5aveAEUCs6tll1FGHN1m0HVprfCiFhVURx3KYrDrYxQUCEBphIuGOel2FoCCAGykrnP8z7EuZ6t9dCA0LQKhSv6lyKolX_6-5u96wmqCkWtS4qJBdbXxtdO2m82QdD8vM7bMXKa5BnI_ziMjyN12UoIN8Evar2eXr7o6S9vPIPEtFIP1IZDNP7HGCzByu6rVKPYvTXlXjtD39"/>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Shampoo Detox Carbon</p>
<p className="text-xs text-on-surface-variant">Barba de Respeito</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant font-mono">BDR-DET-042</td>
<td className="px-6 py-4">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">Shampoos</span>
</td>
<td className="px-6 py-4">
<div className="text-sm">
<p className="text-on-surface-variant">Custo: <span className="text-on-surface">R$ 32,00</span></p>
<p className="text-on-surface-variant">Venda: <span className="text-primary-container">R$ 64,00</span></p>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-primary-container">50.0%</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-bold mb-1">
<span>5 un</span>
<span className="text-amber-400 uppercase text-[9px] animate-pulse">Baixo</span>
</div>
<div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[15%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Product Row 3 (Out of Stock) */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 opacity-50">
<img alt="Product Image" className="w-full h-full object-cover" data-alt="Close up of a professional metal straight razor with intricate handle detail against a dark wood background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxkK8-LYPlo4PbDel9XMnoCblaLBmFZJqwrU4Fw8ePD-lbfPRGWCj5Ax408ZCNrSB5lUh4qxYOfLcLlbJd5zSSNzs4cSgWN6xIgJv2fh9Iq5dPScC92PySyaV6Mgk7xn6rF2YWk0wiI_by2MJlv4m0buy7iXhLoyvAJR5Ga9_1zvM2svbvwCg4ixNUQRq3pLvydqf6XjYlfpNbVMjuW4wufDLw4phyDsnuHmqTENVIo6vJuQa9we5XSCKAqYodMSk4W0WdQmbEi2PP"/>
</div>
<div className="opacity-50">
<p className="font-bold text-sm text-on-surface">Navalha Profissional Inox</p>
<p className="text-xs text-on-surface-variant">SteelPro Tools</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant font-mono opacity-50">STP-NAV-099</td>
<td className="px-6 py-4 opacity-50">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">Acessórios</span>
</td>
<td className="px-6 py-4 opacity-50">
<div className="text-sm">
<p className="text-on-surface-variant">Custo: <span className="text-on-surface">R$ 120,00</span></p>
<p className="text-on-surface-variant">Venda: <span className="text-primary-container">R$ 250,00</span></p>
</div>
</td>
<td className="px-6 py-4 opacity-50">
<span className="text-sm font-bold text-primary-container">52.0%</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-bold mb-1">
<span className="text-error">0 un</span>
<span className="text-error uppercase text-[9px]">Esgotado</span>
</div>
<div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-error w-0"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Product Row 4 */}
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
<img alt="Product Image" className="w-full h-full object-cover" data-alt="Elegant glass dropper bottle of beard oil with amber liquid on a dark rustic surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3y3miwJjw90Qhxai4_WLoIxV4CpmfWfxeRWhLgIp2Yoe6vrH9MXvtPkH7blIP6-AHk0Rd9RSqURspPiBciTzRPYCoOhMKHYBr3EhkFr49X8gaT8rh1rKsfDrt-v_gylr59w6-FtQJz0AsHdH2z5A0H3hOwOaN6OA7jgp1XACulhcQNX4FZcACBQcV8KyAksrwitNU-n03hk2sRdaOzjJw_WFnq7crHm0lu5DqGgDSE709BBu_GZu1hBPrGkQaMN-vaFAky_jn61iu"/>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Óleo de Barba Sândalo</p>
<p className="text-xs text-on-surface-variant">Viking Brand</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant font-mono">VIK-SAN-015</td>
<td className="px-6 py-4">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">Óleos</span>
</td>
<td className="px-6 py-4">
<div className="text-sm">
<p className="text-on-surface-variant">Custo: <span className="text-on-surface">R$ 28,00</span></p>
<p className="text-on-surface-variant">Venda: <span className="text-primary-container">R$ 55,00</span></p>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-primary-container">49.1%</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-bold mb-1">
<span>15 un</span>
<span className="text-primary-container uppercase text-[9px]">Normal</span>
</div>
<div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[45%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
{/* Pagination */}
<div className="px-6 py-4 bg-surface-container-highest/20 flex justify-between items-center">
<p className="text-xs text-on-surface-variant font-medium">Exibindo 1-10 de 86 produtos</p>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-lg bg-surface-container glass-border flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-not-allowed">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold shadow-sm">
                            1
                        </button>
<button className="w-8 h-8 rounded-lg bg-surface-container glass-border flex items-center justify-center text-xs text-on-surface-variant hover:text-on-surface transition-colors">
                            2
                        </button>
<button className="w-8 h-8 rounded-lg bg-surface-container glass-border flex items-center justify-center text-xs text-on-surface-variant hover:text-on-surface transition-colors">
                            3
                        </button>
<button className="w-8 h-8 rounded-lg bg-surface-container glass-border flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Contextual Footer */}
<div className="mt-8 border-t border-outline-variant/10 pt-6 flex justify-between items-center text-on-surface-variant">
<div className="flex gap-6 text-xs font-medium">
<a className="hover:text-primary-container transition-colors" href="#">Relatório Detalhado</a>
<a className="hover:text-primary-container transition-colors" href="#">Exportar CSV</a>
<a className="hover:text-primary-container transition-colors" href="#">Configurar Alertas</a>
</div>
<p className="text-[10px] uppercase tracking-widest opacity-50 italic">Última sincronização: Hoje, 14:32</p>
</div>
</div>
</main>

    </div>
  );
};

export default GestODeEstoqueDesktop;
