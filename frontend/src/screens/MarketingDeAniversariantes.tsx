
import React from 'react';

const MarketingDeAniversariantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
{/* Sidebar Navigation (Desktop) */}
<aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-[#0D0D0D] border-r border-[#C8FF00]/15 z-40">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-3 mb-10">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(200,255,0,0.3)]">
<span className="material-symbols-outlined text-on-primary-container font-bold">content_cut</span>
</div>
<div>
<h1 className="text-[#C8FF00] font-black text-2xl tracking-tighter">BarberPro</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Premium Management</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8FF00] px-4 py-3 hover:bg-[#1A1919] rounded-lg transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8FF00] px-4 py-3 hover:bg-[#1A1919] rounded-lg transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-medium">Agendamentos</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8FF00] px-4 py-3 hover:bg-[#1A1919] rounded-lg transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-medium">Clientes</span>
</a>
<a className="flex items-center gap-3 bg-[#C8FF00] text-[#4f6700] rounded-xl px-4 py-3 shadow-[0_0_20px_rgba(200,255,0,0.3)] transform scale-[1.02] transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="celebration" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
<span className="font-bold">Marketing</span>
</a>
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8FF00] px-4 py-3 hover:bg-[#1A1919] rounded-lg transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-medium">Financeiro</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant/20 space-y-2">
<a className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8FF00] px-4 py-3 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help_center">help_center</span>
<span className="text-sm font-medium">Suporte</span>
</a>
<div className="flex items-center gap-3 px-4 py-4 mt-2 bg-surface-container rounded-2xl border border-outline-variant/10">
<img alt="Manager Profile" className="w-10 h-10 rounded-full object-cover" data-alt="Close-up portrait of a professional barber with a well-groomed beard in a stylish dark studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApmzzh0Wx6R1IhOU_pPbyU1AafUydt1aGdd4JU4rJT8xtvUNZT6MV5t9BBNNVi92idvv9Mj4Su0Rv5g52QiH1G_YQP4SwMDT7w4gUFQbtcP5d5ic31Dk7YufWZwXuPrlTeXESZhfRZoccu910vqHjPzKDURdNKhBi7YWb6ooy4zdHiKVLzLD9zR1lKXbLZvQIOLKOc8Ofl3hfQtrgkjeozcd6aX5Wj78uYdZ3k2zjWMIiMC7rfdah7LWrnCaDPudHecjNp4wYL-cC5"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-bold truncate">Marcos Silva</p>
<p className="text-[10px] text-on-surface-variant truncate">Master Admin</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:text-error" data-icon="logout">logout</span>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="md:ml-64 min-h-screen pb-24 md:pb-10">
{/* Top Bar */}
<header className="sticky top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#C8FF00]/15 px-6 py-4 flex justify-between items-center">
<div className="flex flex-col">
<h2 className="text-xl font-extrabold text-[#C8FF00] tracking-tight">Marketing de Aniversariantes</h2>
<p className="text-xs text-on-surface-variant font-medium">Fidelize seus clientes em datas especiais</p>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:text-white transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-[#C8FF00] rounded-full border-2 border-[#0D0D0D]"></span>
</button>
<button className="p-2 text-on-surface-variant hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</header>
<div className="p-6 space-y-8 max-w-7xl mx-auto">
{/* Bento Grid Summary */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Card 1: Monthly Birthdays */}
<div className="glass-card p-6 rounded-2xl group hover:border-[#C8FF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-container/10 rounded-xl text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="cake">cake</span>
</div>
<span className="text-xs font-bold text-[#C8FF00] bg-[#C8FF00]/10 px-2 py-1 rounded-md">+12% vs mês ant.</span>
</div>
<h3 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Aniversariantes do Mês</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-4xl font-black text-white">48</span>
<span className="text-on-surface-variant text-sm">clientes</span>
</div>
</div>
{/* Card 2: Messages Sent */}
<div className="glass-card p-6 rounded-2xl group hover:border-[#C8FF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-container/10 rounded-xl text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-[#0D0D0D] bg-surface-container-highest"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#0D0D0D] bg-primary-container"></div>
</div>
</div>
<h3 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Mensagens Enviadas</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-4xl font-black text-white">342</span>
<span className="text-on-surface-variant text-sm">este ano</span>
</div>
</div>
{/* Card 3: Coupons Redeemed */}
<div className="glass-card p-6 rounded-2xl group hover:border-[#C8FF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-container/10 rounded-xl text-[#C8FF00]">
<span className="material-symbols-outlined" data-icon="confirmation_number">confirmation_number</span>
</div>
<span className="text-xs font-bold text-primary-container">Taxa: 24%</span>
</div>
<h3 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Cupons Resgatados</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-4xl font-black text-white">82</span>
<span className="text-on-surface-variant text-sm">conversões</span>
</div>
</div>
</section>
{/* Main Automation Section */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
{/* Left Column: Configs */}
<div className="xl:col-span-8 space-y-6">
{/* Automation & Template Editor */}
<section className="glass-card rounded-3xl overflow-hidden">
<div className="p-6 border-b border-outline-variant/10 flex flex-wrap justify-between items-center gap-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="bolt">bolt</span>
<h3 className="font-bold text-lg">Automação de WhatsApp</h3>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
<span className="ml-3 text-sm font-medium text-white">Ativa</span>
</label>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Settings */}
<div className="space-y-6">
<div className="space-y-4">
<label className="block text-sm font-bold text-on-surface-variant uppercase tracking-widest">Horário de Envio</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm" data-icon="schedule">schedule</span>
<select className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary-container transition-all appearance-none text-white font-medium">
<option>09:00 AM</option>
<option selected="">10:00 AM</option>
<option>02:00 PM</option>
</select>
</div>
</div>
<div className="space-y-4">
<label className="block text-sm font-bold text-on-surface-variant uppercase tracking-widest">Dias de Antecedência</label>
<div className="flex gap-2">
<button className="flex-1 py-3 bg-surface-container-low text-white rounded-xl font-bold border border-transparent hover:border-primary-container/30 transition-all">No dia</button>
<button className="flex-1 py-3 bg-primary-container/10 text-primary-container rounded-xl font-bold border border-primary-container/40 transition-all">1 dia antes</button>
<button className="flex-1 py-3 bg-surface-container-low text-white rounded-xl font-bold border border-transparent hover:border-primary-container/30 transition-all">3 dias</button>
</div>
</div>
</div>
{/* Template Editor */}
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="block text-sm font-bold text-on-surface-variant uppercase tracking-widest">Template da Mensagem</label>
<div className="flex gap-1">
<span className="material-symbols-outlined text-xs p-1 bg-surface-container rounded cursor-help" title="Variáveis disponíveis">info</span>
</div>
</div>
<div className="relative group">
<textarea className="w-full h-40 bg-surface-container-low border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary-container transition-all text-sm leading-relaxed text-white custom-scrollbar resize-none" placeholder="Digite sua mensagem aqui...">Olá {nome_cliente}! 🎂 

A {barbearia} deseja um feliz aniversário! Para comemorar, preparamos um presente: use o cupom {cupom} e ganhe 20% de desconto no seu próximo corte.

Esperamos você!</textarea>
<div className="absolute bottom-3 right-3 flex gap-2">
<button className="px-2 py-1 bg-surface-container-highest text-[10px] rounded font-bold hover:text-primary-container transition-colors uppercase">{nome_cliente}</button>
<button className="px-2 py-1 bg-surface-container-highest text-[10px] rounded font-bold hover:text-primary-container transition-colors uppercase">{cupom}</button>
</div>
</div>
</div>
</div>
</section>
{/* Promotion Config */}
<section className="glass-card p-6 rounded-3xl">
<h3 className="font-bold text-lg mb-6 flex items-center gap-3">
<span className="material-symbols-outlined text-[#C8FF00]" data-icon="card_giftcard">card_giftcard</span>
                            Configuração do Presente
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="p-6 rounded-2xl bg-primary-container text-on-primary-container flex flex-col items-center text-center gap-3 group transition-all duration-300 shadow-[0_0_30px_rgba(200,255,0,0.15)]">
<span className="material-symbols-outlined text-3xl" data-icon="percent" style={{ fontVariationSettings: "'FILL' 1" }}>percent</span>
<span className="font-bold">Desconto de %</span>
<p className="text-[10px] opacity-70">Ex: 20% em qualquer serviço</p>
</button>
<button className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center gap-3 hover:bg-surface-container-highest transition-all duration-300">
<span className="material-symbols-outlined text-3xl text-[#C8FF00]" data-icon="content_cut">content_cut</span>
<span className="font-bold">Serviço Grátis</span>
<p className="text-[10px] text-on-surface-variant">Ex: Sobrancelha ou Barba</p>
</button>
<button className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center gap-3 hover:bg-surface-container-highest transition-all duration-300">
<span className="material-symbols-outlined text-3xl text-[#C8FF00]" data-icon="redeem">redeem</span>
<span className="font-bold">Presente/Mimo</span>
<p className="text-[10px] text-on-surface-variant">Ex: Pomada ou Cerveja</p>
</button>
</div>
</section>
</div>
{/* Right Column: List */}
<div className="xl:col-span-4">
<section className="glass-card rounded-3xl h-full flex flex-col overflow-hidden">
<div className="p-6 border-b border-outline-variant/10">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg">Próximos 7 Dias</h3>
<span className="text-[10px] font-bold text-[#C8FF00] bg-[#C8FF00]/10 px-2 py-1 rounded-full uppercase tracking-tighter">12 Clientes</span>
</div>
<p className="text-xs text-on-surface-variant">Envio manual ou agendado</p>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
{/* Client Item 1 */}
<div className="bg-surface-container-low rounded-2xl p-4 border border-transparent hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Customer" className="w-12 h-12 rounded-full object-cover" data-alt="Professional headshot of a smiling young man with a modern skin-fade haircut and dark hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZXv3vj379tg4pPIHudcM9HcC0VWmTplM264IYFhb0tATS5L8TTizRCHCzjKcP7TDAmASMnsWR0_-GAvXYKUAxRiTjAbLpu-SVa698WFRbuLcEFyH-yoCgYmEK29jopTYc7uqmIzcaafaKz_DMlbq3eIk8vyhgFgtoVpir4bS482bqQfxYkHp8PonAn2ke3QtjWcs_pTKAr7UwYfX0WUYue3Y7Ban5OJm23NZm0c8Xegvw0Pl95piD6fH75qw3k9QR7_zolh-fVtVK"/>
<div className="absolute -bottom-1 -right-1 bg-[#C8FF00] text-[#4f6700] p-1 rounded-full shadow-lg">
<span className="material-symbols-outlined text-[10px] font-bold" data-icon="cake">cake</span>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">Ricardo Mendes</h4>
<p className="text-[10px] text-on-surface-variant font-medium">Amanhã • 22 de Outubro</p>
</div>
<button className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container shadow-lg hover:scale-105 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
</button>
</div>
</div>
{/* Client Item 2 */}
<div className="bg-surface-container-low rounded-2xl p-4 border border-transparent hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Customer" className="w-12 h-12 rounded-full object-cover" data-alt="Modern close-up of a stylish black man with short hair and a perfectly trimmed beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv4e2YLxzTrskDgGIw9_DRgXmbYAIUNaqQZt4hR9xGxZoSq4XB4X2a5oHKPIBJmIeZl6rzVdn_OJedaqfXBhinyo4KRjdQsGCPcuhmZJUFTwUHfyg8P6nBBnertXSAVtU0wCjz0uFJ9NW96NmqJMK75Q4az2oIemBrS6ZxIhz5opfQSHE5u3wtbDpDP7OhgQBunGQME0GoCPhwNlZ7Z2eEw4_n-DEbxo0B6O0hxWRv9JUcfS7gYMrw4iTn4umJjS4J9jRITGVXxQ1X"/>
<div className="absolute -bottom-1 -right-1 bg-surface-container-highest text-[#A0A0A0] p-1 rounded-full border border-outline-variant/20">
<span className="material-symbols-outlined text-[10px] font-bold" data-icon="check">check</span>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">Gustavo Oliveira</h4>
<p className="text-[10px] text-on-surface-variant font-medium">Quinta-feira • 24 Out</p>
</div>
<button className="w-10 h-10 bg-surface-container-highest text-on-surface-variant rounded-xl flex items-center justify-center cursor-not-allowed">
<span className="material-symbols-outlined text-sm" data-icon="history">history</span>
</button>
</div>
</div>
{/* Client Item 3 */}
<div className="bg-surface-container-low rounded-2xl p-4 border border-transparent hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-black text-on-surface-variant">FL</div>
<div className="absolute -bottom-1 -right-1 bg-[#C8FF00] text-[#4f6700] p-1 rounded-full">
<span className="material-symbols-outlined text-[10px] font-bold" data-icon="cake">cake</span>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">Fernando Lima</h4>
<p className="text-[10px] text-on-surface-variant font-medium">Sábado • 26 Out</p>
</div>
<button className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container shadow-lg hover:scale-105 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
</button>
</div>
</div>
{/* Client Item 4 */}
<div className="bg-surface-container-low rounded-2xl p-4 border border-transparent hover:border-[#C8FF00]/20 transition-all group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Customer" className="w-12 h-12 rounded-full object-cover" data-alt="Portrait of a young man with a casual messy hairstyle and stubble, looking relaxed at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfq89OCSGHB-dma_jViWXgjVDY7wykIgFlxSo8tLzu93_pVpoBQkHc8SUENCdPiLmuWKall2T1Hr0aRV6yCdK9UOzC0gt5u_w7IBb_7ZC_Zvl4Or8jINNLkD7wdHDJD_i05yri-4rUPbFS3B-fsT1ncLrMEzG_w956xaLkBh-wqaVeaw8crEjlfI9UgdIincBFzzdFeDHBo-WB7Z2ibD8EBCGA5iHSMzNE1oQWH5y3RwRNKSyaplTIbETnL-JiYJlu_552FjIJH5bJ"/>
<div className="absolute -bottom-1 -right-1 bg-[#C8FF00] text-[#4f6700] p-1 rounded-full">
<span className="material-symbols-outlined text-[10px] font-bold" data-icon="cake">cake</span>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">Tiago Castro</h4>
<p className="text-[10px] text-on-surface-variant font-medium">Segunda • 28 Out</p>
</div>
<button className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container shadow-lg hover:scale-105 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
</button>
</div>
</div>
</div>
<div className="p-4 bg-surface-container border-t border-outline-variant/10">
<button className="w-full py-3 text-xs font-bold text-on-surface-variant hover:text-white transition-all uppercase tracking-widest">Ver todos os aniversariantes</button>
</div>
</section>
</div>
</div>
</div>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#0D0D0D]/80 backdrop-blur-lg border-t border-[#C8FF00]/10 z-50 rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2" href="#">
<span className="material-symbols-outlined" data-icon="cake">cake</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Nívers</span>
</a>
<a className="flex flex-col items-center justify-center bg-[#C8FF00] text-[#4f6700] rounded-2xl p-2 scale-110 shadow-lg shadow-primary-container/20" href="#">
<span className="material-symbols-outlined" data-icon="campaign" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Marketing</span>
</a>
<a className="flex flex-col items-center justify-center text-[#A0A0A0] p-2" href="#">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
<span className="text-[10px] font-bold uppercase tracking-widest mt-1">Mensagens</span>
</a>
</nav>
{/* FAB (Floating Action Button) - Contextual */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(200,255,0,0.4)] hover:scale-110 active:scale-95 transition-all z-40 group">
<span className="material-symbols-outlined text-2xl" data-icon="add">add</span>
<span className="absolute right-16 bg-surface-container px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-outline-variant/20">Novo Campanha</span>
</button>

    </div>
  );
};

export default MarketingDeAniversariantes;
