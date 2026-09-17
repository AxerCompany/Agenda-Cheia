import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Share2, 
  Target, 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles,
  Zap,
  TrendingUp,
  Lock,
  Calculator,
  Flame,
  Clock,
  HeartHandshake,
  ShoppingBag,
  Instagram
} from 'lucide-react';
import { AgendaMockup, MOCKUP_IMAGE_URL } from './components/AgendaMockup';
import { ScarcityCountdown } from './components/ScarcityCountdown';
import { FaqSection } from './components/FaqSection';
import { CHECKOUT_URL } from './data/upsellData';

export default function App() {
  const offerItems = [
    {
      title: 'Plano de ação de 30 dias',
      description: 'O passo a passo diário para saber exatamente o que executar.',
      icon: Target,
      tag: 'Direcionamento'
    },
    {
      title: 'Calendário de vendas',
      description: 'Datas, formatos e temas para postar e movimentar seus pedidos.',
      icon: Calendar,
      tag: 'Rotina Diária'
    },
    {
      title: 'Campanhas prontas para WhatsApp',
      description: 'Mensagens prontas para status, grupos e clientes para chamar pedidos.',
      icon: MessageSquare,
      tag: 'Divulgação Rápida'
    },
    {
      title: 'Scripts para fechar pedidos',
      description: 'Respostas prontas para perguntas de preço, cardápio e objeções.',
      icon: Zap,
      tag: 'Conversão'
    },
    {
      title: 'Sistema de recompra',
      description: 'Estratégia para fazer quem já comprou pedir novamente toda semana.',
      icon: RefreshCw,
      tag: 'Fidelização'
    },
    {
      title: 'Campanha de indicação',
      description: 'Método simples para amigas e clientes indicarem seus doces.',
      icon: Share2,
      tag: 'Multiplicação'
    },
    {
      title: 'Plano para primeiros ou novos pedidos',
      description: 'Roteiro prático para destravar vendas mesmo começando do absoluto zero.',
      icon: TrendingUp,
      tag: 'Início Rápido'
    }
  ];

  const targetAudienceItems = [
    'quer começar do zero vendendo doces;',
    'quer vender doces e não sabe por onde começar;',
    'já vende, mas sente que vende pouco;',
    'posta no status e quase ninguém chama;',
    'não sabe o que escrever para vender;',
    'quer vender mais pelo WhatsApp;',
    'quer fazer clientes antigas comprarem de novo;',
    'quer parar de depender só da sorte;',
    'quer ter um plano claro por 30 dias;',
    'quer buscar uma meta maior com doces.'
  ];

  const channelSources = [
    'pedidos pelo WhatsApp;',
    'combos de doces;',
    'encomendas para família;',
    'clientes antigas comprando novamente;',
    'indicação de amigas e vizinhas;',
    'ofertas simples no status;',
    'divulgação diária no Instagram.'
  ];

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#5A3A31] font-sans antialiased selection:bg-[#E94F7A] selection:text-white flex flex-col">
      
      {/* Main Content Container */}
      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* DOBRA 01 — HERO */}
        {/* ========================================================================= */}
        <section id="dobra-hero" className="pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-4 border border-[#F3CFBE]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Página de Vendas — Desafio 5K com Doces</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#3A241C] leading-tight mb-5 tracking-tight">
              Desafio <span className="text-[#E94F7A]">R$5.000 de lucro</span> em 30 dias com doces
            </h1>

            {/* Subheadline / Pitch */}
            <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#5A3A31] font-medium leading-relaxed mb-6">
              <p>
                Mesmo começando do zero, entre no plano de 30 dias para transformar seus doces em pedidos todos os dias, vender mais e buscar <strong className="text-[#3A241C] font-extrabold">R$5.000 de lucro</strong> com uma rotina simples de vendas.
              </p>
            </div>

            {/* [ESPAÇO PARA MOCKUP DO DESAFIO 5K COM DOCES] */}
            <AgendaMockup />

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 02 — URGÊNCIA */}
        {/* ========================================================================= */}
        <section id="dobra-urgencia" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E94F7A]/10 text-[#E94F7A] text-xs font-bold uppercase tracking-wider mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>Alerta de Vendas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight">
                Você está perdendo pedidos todos os dias sem perceber
              </h2>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 text-base sm:text-lg text-[#5A3A31] leading-relaxed">
              <p>
                Toda vez que você deixa de postar, deixa de chamar clientes ou não sabe como oferecer seus doces, alguém que poderia comprar de você acaba comprando de outra pessoa que apareceu primeiro.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FFF4EC] p-4 rounded-2xl border border-[#F0D5C7] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-bold text-[#3A241C] text-sm sm:text-base">Não é falta de talento.</span>
                </div>
                <div className="bg-[#FFF4EC] p-4 rounded-2xl border border-[#F0D5C7] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-bold text-[#3A241C] text-sm sm:text-base">Não é porque seus doces não são bons.</span>
                </div>
              </div>

              <div className="bg-[#FFF4EC] p-4 sm:p-5 rounded-2xl border border-[#F0D5C7] space-y-2">
                <p className="font-medium text-[#5A3A31]">
                  O problema é que, sem uma rotina de vendas, você fica dependendo da sorte.
                </p>
                <p className="text-[#E94F7A] font-black text-lg sm:text-xl">
                  E sorte não enche agenda.
                </p>
              </div>

              <p className="text-sm sm:text-base font-semibold text-[#3A241C] pt-2 border-t border-[#F0CFBE]">
                Mesmo que você esteja começando do zero, o que você precisa agora é de um plano simples para saber o que fazer todos os dias e transformar bolos no pote e doces em geral em uma fonte de renda de verdade.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 03 — PROMESSA */}
        {/* ========================================================================= */}
        <section id="dobra-promessa" className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] mb-6 leading-tight">
              Em 30 dias, você pode ter um plano para vender com muito mais direção
            </h2>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 text-left space-y-5 shadow-sm">
              <p className="text-base sm:text-lg text-[#5A3A31] leading-relaxed">
                O <strong className="text-[#3A241C] font-extrabold">Desafio 5K com Doces</strong> foi criado para quem quer fazer renda direto da cozinha de casa e começar a vender com mais estratégia e previsibilidade.
              </p>

              <div className="bg-[#FFF4EC] p-4 sm:p-5 rounded-2xl border border-[#F0D5C7] space-y-3">
                <span className="text-xs uppercase font-black text-[#E94F7A] tracking-wider block">
                  A ideia é simples:
                </span>
                <p className="text-sm sm:text-base text-[#3A241C] font-medium leading-relaxed">
                  Você vai seguir um plano de ação para divulgar seus doces todos os dias, chamar clientes pelo WhatsApp, criar ofertas, recuperar clientes antigas e movimentar seus pedidos durante o mês.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#5A3A31] leading-relaxed">
                Mesmo começando do zero, você não precisa ficar perdida sem saber o que postar, como chamar clientes ou como buscar seus primeiros pedidos.
              </p>

              {/* Goal Highlight Box */}
              <div className="pt-2">
                <div className="bg-[#FFF4EC] border-2 border-[#E94F7A] rounded-2xl p-5 sm:p-6 text-center shadow-xs">
                  <span className="text-xs sm:text-sm font-extrabold text-[#5A3A31] uppercase tracking-wider block mb-1">
                    O objetivo é buscar uma meta clara:
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-[#E94F7A] leading-tight">
                    chegar a até R$5.000 de lucro em 30 dias vendendo doces.
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 04 — COMO ISSO PODE SER POSSÍVEL NA PRÁTICA */}
        {/* ========================================================================= */}
        <section id="dobra-pratica" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/30 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE3D3] text-[#3A241C] text-xs font-bold uppercase tracking-wider mb-3 border border-[#F0D5C7]">
                <Calculator className="w-3.5 h-3.5 text-[#E94F7A]" />
                <span>Matemática Simples de Vendas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight">
                R$5.000 em 30 dias parece longe… até você quebrar em metas simples
              </h2>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="space-y-3 text-base sm:text-lg text-[#5A3A31] leading-relaxed">
                <p>
                  Para buscar <strong className="text-[#3A241C] font-extrabold">R$5.000 de lucro em 30 dias</strong>, você não precisa pensar no mês inteiro de uma vez.
                </p>
                <p className="font-semibold text-[#3A241C]">
                  Você precisa quebrar isso em uma meta diária.
                </p>
              </div>

              {/* Math breakdown card */}
              <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-2xl p-5 sm:p-6 text-center space-y-3 shadow-xs">
                <p className="text-base sm:text-lg font-bold text-[#3A241C]">
                  <strong>R$5.000 dividido por 30 dias dá cerca de R$167 de lucro por dia.</strong>
                </p>
                <div className="py-2 border-y border-[#F0CFBE]">
                  <span className="text-xs uppercase font-extrabold text-[#E94F7A] tracking-wider block mb-1">
                    Ou seja:
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-[#3A241C]">
                    <span className="text-[#E94F7A]">17 doces</span> vendidos por dia com <span className="text-[#2FA866]">R$10 de lucro</span> em cada um.
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A3A31] font-medium">
                  Quando você olha dessa forma, a meta começa a ficar mais clara.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed">
                Mesmo começando do zero, essa meta fica muito mais possível quando você tem um plano para seguir todos os dias.
              </p>

              {/* Channels List */}
              <div className="bg-[#FFF4EC] rounded-2xl p-5 border border-[#F0D5C7]">
                <p className="font-extrabold text-sm sm:text-base text-[#3A241C] mb-3">
                  Você pode buscar esse lucro com:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {channelSources.map((channel, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#5A3A31]">
                      <div className="w-4 h-4 rounded-full bg-[#2FA866]/20 text-[#2FA866] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{channel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clarity conclusion */}
              <div className="space-y-3 text-sm sm:text-base text-[#5A3A31] leading-relaxed pt-2">
                <p>Você não precisa começar com uma estrutura perfeita.</p>
                <p className="font-bold text-[#3A241C]">Você precisa começar com uma direção clara.</p>
                <p>O segredo não é fazer tudo perfeito.</p>
                <p className="font-extrabold text-[#E94F7A]">
                  É aparecer todos os dias, chamar clientes e transformar seus doces em pedidos.
                </p>
                <p>
                  Quando você para de vender no aleatório e começa a seguir um plano, a meta deixa de parecer impossível e começa a virar uma rotina de ação.
                </p>
                <div className="bg-[#FFF4EC] p-4 rounded-xl border border-[#F0D5C7] mt-3">
                  <p className="font-bold text-[#3A241C]">
                    É isso que o <strong className="text-[#E94F7A]">Desafio 5K com Doces</strong> te entrega: um caminho simples, prático e direto para você buscar uma meta maior nos próximos 30 dias, mesmo que esteja começando agora.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 05 — PARA QUEM É */}
        {/* ========================================================================= */}
        <section id="dobra-publico" className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight mb-2">
                Esse desafio é para você que:
              </h2>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-3 mb-6">
                {targetAudienceItems.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#2FA866] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#3A241C] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#FFF4EC] p-4 sm:p-5 rounded-2xl border border-[#E94F7A]/30 text-center">
                <p className="text-sm sm:text-base font-extrabold text-[#3A241C]">
                  Se você quer levar suas vendas mais a sério nos próximos 30 dias, esse desafio é para você.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 06 — OFERTA */}
        {/* ========================================================================= */}
        <section id="dobra-oferta" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E94F7A]/10 text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Acesso Completo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight mb-4">
                Comece agora o Desafio 5K com Doces
              </h2>
              <p className="text-sm sm:text-base text-[#5A3A31] font-medium max-w-xl mx-auto leading-relaxed">
                Receba acesso imediato ao plano de 30 dias para divulgar seus doces, chamar clientes, vender pelo WhatsApp e buscar <strong className="text-[#3A241C] font-extrabold">R$5.000 de lucro em 30 dias</strong>, mesmo começando do zero.
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
              <h3 className="text-base sm:text-lg font-black text-[#3A241C] mb-4">
                Você vai receber:
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {offerItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 shadow-2xs flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#FFE3D3] text-[#E94F7A] flex items-center justify-center shrink-0 border border-[#F0CFBE]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-[#E94F7A] tracking-wider block">
                          {item.tag}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-[#3A241C] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#5A3A31] font-medium leading-tight mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOBRA 07 — CTA FINAL */}
        {/* ========================================================================= */}
        <section id="dobra-cta-final" className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="bg-[#FFE3D3] border-3 border-[#E94F7A] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] mb-6 leading-tight">
                Seus próximos 30 dias podem ser diferentes
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#5A3A31] font-medium max-w-xl mx-auto mb-6 leading-relaxed">
                <div className="bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7] space-y-1.5 text-left">
                  <p className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#E94F7A] shrink-0" />
                    <span>Você não precisa continuar sem saber o que postar.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#E94F7A] shrink-0" />
                    <span>Você não precisa esperar cliente aparecer.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#E94F7A] shrink-0" />
                    <span>Você não precisa vender só quando alguém lembra de você.</span>
                  </p>
                </div>

                <p className="pt-2 text-base text-[#3A241C] font-semibold">
                  Mesmo começando do zero, você pode seguir um plano simples para divulgar seus doces, chamar clientes e buscar pedidos durante os próximos 30 dias.
                </p>
                
                <p className="text-sm font-extrabold text-[#E94F7A] bg-[#FFF4EC] py-2.5 px-4 rounded-xl border border-[#F0D5C7]">
                  Entre agora no <strong>Desafio 5K com Doces</strong> e comece com direção.
                </p>
              </div>

              {/* Product Mockup in Final CTA Block */}
              <div className="my-6 max-w-md mx-auto bg-[#FFF4EC] border-2 border-[#F0D5C7] rounded-2xl p-2.5 sm:p-3 shadow-md group">
                <img 
                  src={MOCKUP_IMAGE_URL} 
                  alt="Mockup do Desafio 5K com Doces" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* Scarcity Countdown in Final CTA Block */}
              <ScarcityCountdown />

              {/* Final Pricing Badge */}
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold text-[#5A3A31] tracking-wider block mb-1">
                  Acesso Imediato
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#3A241C]">
                  Por apenas <strong className="text-[#E94F7A] text-3xl sm:text-4xl">R$67,00</strong>
                </span>
              </div>

              {/* Official CTA Button */}
              <motion.a
                id="main-final-cta"
                href={CHECKOUT_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 px-6 sm:px-8 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base sm:text-xl tracking-wide shadow-xl shadow-[#E94F7A]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-3 border border-[#F27598] mb-4 no-underline"
              >
                <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                <span>LIBERAR ACESSO AGORA</span>
                <ArrowRight className="w-5 h-5 text-white shrink-0" />
              </motion.a>

              {/* Security & Access Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#5A3A31] font-medium pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#2FA866]" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-[#2FA866]" />
                  Acesso Imediato
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#F4B84A]" />
                  Pagamento Seguro
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* RODAPÉ — PERGUNTAS FREQUENTES & GARANTIA DE 7 DIAS */}
        {/* ========================================================================= */}
        <FaqSection />

      </main>

      {/* Footer */}
      <footer className="bg-[#3A241C] text-[#FFE3D3] border-t border-[#2C1B15] py-8 px-4 text-center text-xs">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-[#FFE3D3]/90 font-bold">
            Desafio 5K com Doces — R$5.000 de Lucro em 30 Dias
          </p>
          <p className="text-[11px] text-[#FFE3D3]/60">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
