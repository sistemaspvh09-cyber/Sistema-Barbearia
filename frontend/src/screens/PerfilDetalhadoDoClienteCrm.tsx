
import React from 'react';

const PerfilDetalhadoDoClienteCrm: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* SideNavBar (JSON Derived) */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#C8FF00]/15 bg-[#1A1919]/70 backdrop-blur-xl flex flex-col h-full py-8 z-50 shadow-[40px_0_80px_rgba(0,0,0,0.5)]">
<div className="px-6 mb-10">
<h1 className="text-2xl font-black italic text-[#C8FF00] tracking-tighter">BarberPro</h1>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">Premium Management</p>
</div>
<nav className="flex-1 space-y-1">
<div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-medium">Agenda</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-[#C8FF00] bg-[#C8FF00]/10 border-r-4 border-[#C8FF00] font-bold cursor-pointer active:scale-95">
<span className="material-symbols-outlined">group</span>
<span className="font-medium">Clientes</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-medium">Equipe</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium">Financeiro</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] cursor-pointer active:scale-95">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Configurações</span>
</div>
</nav>
<div className="px-6 mt-auto">
<div className="flex items-center gap-3 p-3 glass-card rounded-xl">
<img className="w-10 h-10 rounded-lg object-cover border border-[#C8FF00]/20" data-alt="Close-up portrait of a professional barber with a groomed beard and stylish undercut haircut in a dimly lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2syBp0WeLNjNX2xMAizIkBAsUUhel2WEUtYIvxqeHC3jYUNID0PoSgi09JRq39L-RVIJ2zpI5-w70DA7xIu1zBHE-yf9JrKcDz0tOk6vVETqI85YnvqaD0F2QLrX9NSpahIN67iWleFmjJhJtyNIggpXkSfiNJ9HW99sS1Kg6Z6bQnzoEsD_h-ZLjPgiKPk3xQU3GhTIdvJYRnNU3NAkRXSCtAxFZ0snhIf3qZ13hpj-gDb2INCURUGMA-s7c8GwkE0aQKg8v3k2"/>
<div>
<p className="text-xs font-bold text-on-surface">Admin</p>
<p className="text-[10px] text-on-surface-variant">BarberPro Admin</p>
</div>
</div>
</div>
</aside>
{/* TopAppBar (JSON Derived) */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 bg-[#0D0D0D]/80 backdrop-blur-md flex justify-between items-center px-8 z-40 border-b border-white/5">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">arrow_back</span>
<h2 className="text-xl font-bold tracking-tight">Perfil do Cliente</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<input className="bg-surface-container-low border-none rounded-full py-2 px-10 text-sm focus:ring-1 focus:ring-primary-fixed w-64 transition-all duration-300" placeholder="Buscar cliente..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-xl">search</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed transition-colors">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed transition-colors">dark_mode</span>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" data-alt="Portrait of a young male professional with modern glasses and short hair for a user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPAAsgKocDfq1qZxft_jiwamqaH9bHQWILpQOsPoIPTFnHn8yGQ93Wtvlb-58swFs1Ew_K0GqQ72sH-m_70FK-yJaFbGak71yjP3H2hceFWMVyoGly4p8LfeAVfL_0VLxtZV3GsvYNiX_D4i4itCBQ8zc0chtTwNUYc85ZQ579dXt_vRmMHw-W7TehCzs975KZL5LtG_19EDBVHtxJ9daAqvvoy1pFtg6MbN-YPAx8mcs5G7F3lhuiNvfxwZFB1PXl7mUhZ22G6u9B"/>
</div>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="ml-64 pt-28 pb-12 px-8 min-h-screen">
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
{/* Profile Overview Card (Column 1-4) */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<section className="glass-card rounded-[2rem] p-8 flex flex-col items-center text-center relative overflow-hidden">
{/* Decor Overlay */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="relative mb-6">
<div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary-fixed/30 p-1">
<img className="w-full h-full object-cover rounded-2xl" data-alt="Stylish man with a groomed beard and classic haircut looking confidently at the camera, portrait photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4syEVKCsK7GXspVk27t-OoJUH5-J9xvYKJvF86pnOIOrFijwxDLvrBGlO0jXcpwlNDDwlhObR0LYoZf0pE1ZF638ReNmZVMbXvdWG6KSDMRgyLjjjiVLJCMZGF8ZFjVmqJMXlFxI1dDeVDXCvdWnYy0U4F9BlNiMjrlTRCGkXuKOWDFNJzltLsLxCiuknlqMdzICDgXDYT1jlltsrzyDzU-plxPkJrXsXzKQyrjoyEeh0u24z9H0r4O-n6zLKBMGu0OAtYIf4elQ4"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary-fixed text-on-primary w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
</div>
<h3 className="text-2xl font-extrabold tracking-tight mb-1">Ricardo Almeida</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-xs">location_on</span> São Paulo, SP
                    </p>
<div className="flex gap-2 w-full">
<button className="flex-1 bg-primary-fixed text-on-primary font-bold py-3 rounded-xl neon-glow transition-all duration-300 flex items-center justify-center gap-2 text-sm">
<span className="material-symbols-outlined text-lg">calendar_add_on</span> Agendar
                        </button>
<button className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 w-full mt-8 pt-8 border-t border-white/5">
<div>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Gasto</p>
<p className="text-base font-bold text-primary-fixed">R$ 1.250</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Visitas</p>
<p className="text-base font-bold">14</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Pontos</p>
<p className="text-base font-bold">120 pts</p>
</div>
</div>
</section>
{/* Technical Notes Section */}
<section className="glass-card rounded-[2rem] p-6">
<div className="flex items-center justify-between mb-6">
<h4 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed">description</span> Notas Técnicas
                        </h4>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer text-lg">edit</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-l-2 border-primary-fixed">
<span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5">check_circle</span>
<p className="text-sm text-on-surface-variant">Usa navalha no acabamento</p>
</li>
<li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-l-2 border-primary-fixed">
<span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5">check_circle</span>
<p className="text-sm text-on-surface-variant">Prefere degradê médio (mid fade)</p>
</li>
<li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-l-2 border-primary-fixed">
<span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5">check_circle</span>
<p className="text-sm text-on-surface-variant">Alergia a loção pós-barba mentolada</p>
</li>
</ul>
</section>
</div>
{/* Tabs & Details (Column 5-12) */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
{/* Services Favorites */}
<section className="glass-card rounded-[2rem] p-6">
<h4 className="font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed">star</span> Serviços Favoritos
                    </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 p-4 bg-surface-container-high rounded-2xl group cursor-pointer hover:bg-surface-bright transition-colors">
<div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold">Corte Executivo</p>
<p className="text-xs text-on-surface-variant">Frequência: Quinzenal</p>
</div>
<span className="material-symbols-outlined text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
<div className="flex items-center gap-4 p-4 bg-surface-container-high rounded-2xl group cursor-pointer hover:bg-surface-bright transition-colors">
<div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>face</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold">Barba Completa (Toalha)</p>
<p className="text-xs text-on-surface-variant">Frequência: Mensal</p>
</div>
<span className="material-symbols-outlined text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
</div>
</section>
{/* History Table Section */}
<section className="glass-card rounded-[2rem] overflow-hidden flex flex-col flex-1">
<div className="p-6 border-b border-white/5 flex items-center justify-between">
<h4 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed">history</span> Histórico de Agendamentos
                        </h4>
<div className="flex gap-2">
<button className="px-4 py-1.5 text-xs font-bold bg-white/5 rounded-full text-on-surface-variant hover:text-white transition-colors">Ver Tudo</button>
<button className="px-4 py-1.5 text-xs font-bold bg-primary-fixed/10 text-primary-fixed rounded-full">Filtrar</button>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left">
<thead className="bg-white/5 text-[10px] uppercase tracking-widest text-on-surface-variant">
<tr>
<th className="px-6 py-4 font-semibold">Data</th>
<th className="px-6 py-4 font-semibold">Serviço</th>
<th className="px-6 py-4 font-semibold">Barbeiro</th>
<th className="px-6 py-4 font-semibold">Valor</th>
<th className="px-6 py-4 font-semibold">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors cursor-pointer group">
<td className="px-6 py-5">
<p className="text-sm font-medium">15 Out, 2023</p>
<p className="text-[10px] text-on-surface-variant">14:30h</p>
</td>
<td className="px-6 py-5">
<p className="text-sm">Corte + Barba</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up face of a barber with tattooed arms and professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5MpVosJ3ygfqz91goH3l5VaR4128l30O4aVlIQx1UpjnvWMk7XxaNhun6vUR1ZBF-iiEpWG7pJJ7etVwPC5RAaKUz7VzxazBZNg5miYA2A9gUlDXtcQYVZRvFjF_0cVMR2eupquHOs-cwCOzvAJp8y9gyQuJa7UEKJLkdfAUzZ7EnwnGWXTzC89BbhWOM-r76wMK_IkjTU6DWlXvz9-PKMdrrFI5p4d0BWiQyWRipwpY3BRNzLmSsEHGh5vFhKlD4Rbc_W_kDGjlU"/>
</div>
<p className="text-sm text-on-surface-variant">Enzo Silva</p>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm font-bold">R$ 120,00</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary-fixed/10 text-primary-fixed">Concluído</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group">
<td className="px-6 py-5">
<p className="text-sm font-medium">28 Set, 2023</p>
<p className="text-[10px] text-on-surface-variant">10:00h</p>
</td>
<td className="px-6 py-5">
<p className="text-sm">Barba (Toalha Quente)</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a modern barber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJNTiOjPesXtnG8VpcjXH0VvyMA2oU5jAEO3ekrdzdaxKqv-lEQSHJzawvP5O8re2YZXSv2Eh4BE4LR_oSlnhnGn2QRz3sn2uJxW4gp8AEN61syiG8vHH-h7Nz82B5gFKqxMeuFS2h_3eAWhfdQrwsBCc4WRvKzDYumXex3LMUetJOutuNhLdjC0hH_FZPUV8WwEOnUSl-ey6xrhnZcy1_GSd_5QE9zCbQ2XatHE-yZwGqd-VkXK9wdBQqtha4ePnx4C7LcVOulxn"/>
</div>
<p className="text-sm text-on-surface-variant">Enzo Silva</p>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm font-bold">R$ 55,00</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary-fixed/10 text-primary-fixed">Concluído</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group">
<td className="px-6 py-5">
<p className="text-sm font-medium">10 Set, 2023</p>
<p className="text-[10px] text-on-surface-variant">17:00h</p>
</td>
<td className="px-6 py-5">
<p className="text-sm">Corte Executivo</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANQLhk0A-KaimNfglzsmmdg37uXug9sw9P46ts4-8Pv_KVJGmdeFFcgdNJG_zjzVdWP7ZwgXtYmv0q0p3Fr9tWCRCBHUCUTTuc2flS7mpUxp2gc28NBE3tyX6n38xs9Gor8rBIYocj8BHkYLCKRCpe4sRkwc79hz4KAzTP5wfV1n7MFCnruUxAlioe0ZrAibq_BmNNsUtu_Zdway60uq3sgl49uexBWY3ZIcf4asDUAY40vURepPC9DTiJeEAs1h9h9ti074sDGlf3"/>
</div>
<p className="text-sm text-on-surface-variant">Marcos Jr.</p>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm font-bold">R$ 85,00</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-error-container/20 text-error-dim">Faltou</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-pointer group">
<td className="px-6 py-5">
<p className="text-sm font-medium">25 Ago, 2023</p>
<p className="text-[10px] text-on-surface-variant">09:30h</p>
</td>
<td className="px-6 py-5">
<p className="text-sm">Selagem Capilar</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Barber profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK5KGFtl0P_YtKtK6lkDZcad9uQuMIPccBCAZqUnB4uLFO3xRI_WSir5rKCbjhAPSeReYfEgDb_on1hsDINpfh9_PeE2sdTudkwRU4751naBAiFm3brnLGmVNbbdSQNZotWBXFt5bn0VNRF0Nq1CDQdg3CsdDV52aWYBgbWGPE8vzTTzHovUjAVzJ90peI5xTrnN7Wguie955bhUTHEZAo9MxOmAlaj01TSDYVfdua9MplYZBiZ376yZTSwmMawxUq9KcVK9nhcQOu"/>
</div>
<p className="text-sm text-on-surface-variant">Enzo Silva</p>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm font-bold">R$ 150,00</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary-fixed/10 text-primary-fixed">Concluído</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
</main>
{/* Floating Action for New Note (Contextual suppression applied - only on Dashboard/Agenda usually, but here we add a contextual small FAB for quick profile editing) */}
<div className="fixed bottom-8 right-8 z-50">
<button className="bg-primary-fixed text-on-primary w-14 h-14 rounded-2xl flex items-center justify-center neon-glow shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_comment</span>
</button>
</div>

    </div>
  );
};

export default PerfilDetalhadoDoClienteCrm;
