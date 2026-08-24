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
  ChevronRight
} from 'lucide-react';
import { AgendaMockup } from './components/AgendaMockup';
import { CHECKOUT_URL } from './data/upsellData';

export default function App() {
  const deliverables = [
    {
      title: 'Plano 5 mil reais em 30 dias',
      description: 'Plano simples e prático para faturar até R$5.000 por mês com doces.',
      icon: TrendingUp,
      tag: 'Meta R$5.000'
    },
    {
      title: 'Calendário de vendas de 30 dias',
      description: 'Para saber o que postar e oferecer durante o mês.',
      icon: Calendar,
      tag: 'Organização'
    },
    {
      title: 'Campanhas prontas para WhatsApp',
      description: 'Mensagens para divulgar seus bolos e chamar clientes.',
      icon: MessageSquare,
      tag: 'Divulgação'
    },
    {
      title: 'Scripts para fechar pedidos',
      description: 'Respostas prontas para conversar com interessadas e fechar vendas.',
      icon: Target,
      tag: 'Conversão'
    },
    {
      title: 'Sistema de recompra',
      description: 'Mensagens para fazer clientes antigas comprarem de novo.',
      icon: RefreshCw,
      tag: 'Fidelização'
    },
    {
      title: 'Campanha de indicação',
      description: 'Um modelo simples para suas clientes indicarem seus bolos.',
      icon: Share2,
      tag: 'Crescimento'
    },
    {
      title: 'Plano de ação para pedidos',
      description: 'Um passo a passo para buscar seus primeiros ou novos pedidos.',
      icon: Zap,
      tag: 'Passo a Passo'
    }
  ];

  const targetAudience = [
    'quer vender bolo no pote, mas não sabe como conseguir clientes;',
    'já vende, mas vende pouco;',
    'posta no status e quase ninguém chama;',
    'não sabe o que escrever para divulgar;',
    'quer fazer clientes antigas comprarem de novo;',
    'quer ter mais direção para vender.'
  ];

  const painPoints = [
    'Não sabe o que postar.',
    'Não sabe como chamar clientes.',
    'Não sabe como divulgar no WhatsApp.',
    'Não sabe como fazer a cliente comprar de novo.'
  ];

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#5A3A31] font-sans antialiased selection:bg-[#E94F7A] selection:text-white flex flex-col">
      
      {/* Main Content Container */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-4 border border-[#F3CFBE]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Página de Vendas — Agenda Cheia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#3A241C] leading-tight mb-5 tracking-tight">
              Como transformar seus doces em pedidos todos os dias e faturar até <span className="text-[#E94F7A]">R$5.000 por mês</span> com doces
            </h1>

            {/* Subheadline / Pitch */}
            <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#5A3A31] font-medium leading-relaxed mb-6">
              <p>
                Um sistema simples para você sair do improviso, saber o que postar, chamar clientes pelo WhatsApp, Instagram e status, e criar uma rotina de vendas para fazer seus doces venderem com mais frequência.
              </p>
            </div>

            {/* [ESPAÇO PARA MOCKUP DO AGENDA CHEIA] */}
            <AgendaMockup />

          </div>
        </section>

        {/* SECTION: O PROBLEMA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] leading-tight">
                O problema não é só fazer bolo no pote
              </h2>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="text-base sm:text-lg font-bold text-[#3A241C] mb-4 space-y-1">
                <p>Muita gente sabe preparar.</p>
                <p className="text-[#E94F7A] font-black">Mas não sabe vender.</p>
              </div>

              {/* List of struggles */}
              <div className="space-y-2.5 my-5">
                {painPoints.map((pain, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-[#FFF4EC] p-3 rounded-2xl border border-[#F0D5C7] text-sm sm:text-base font-semibold text-[#5A3A31]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{pain}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#F0CFBE] space-y-2 text-sm sm:text-base text-[#5A3A31]">
                <p className="italic">
                  E no final fica esperando alguém aparecer.
                </p>
                <p className="font-extrabold text-[#3A241C] text-base sm:text-lg">
                  O <strong className="text-[#E94F7A]">Agenda Cheia</strong> foi criado para resolver essa parte.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: O QUE É */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] mb-6 leading-tight">
              O que é o <span className="text-[#E94F7A]">Agenda Cheia</span>?
            </h2>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 text-left space-y-4 shadow-sm">
              <p className="text-base sm:text-lg font-black text-[#3A241C]">
                É um sistema simples de vendas para bolos no pote.
              </p>

              <p className="text-sm sm:text-base text-[#5A3A31] leading-relaxed font-medium">
                Ele te ajuda a saber o que divulgar, como oferecer, como chamar clientes e como movimentar seus pedidos durante a semana.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-[#F0CFBE]">
                <div className="bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA866] mt-0.5 shrink-0 stroke-[3]" />
                  <span className="text-xs sm:text-sm font-bold text-[#3A241C]">Serve para quem está começando agora.</span>
                </div>
                <div className="bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA866] mt-0.5 shrink-0 stroke-[3]" />
                  <span className="text-xs sm:text-sm font-bold text-[#3A241C]">E também para quem já vende, mas quer vender com mais frequência.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: O QUE VOCÊ RECEBE */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/30 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] leading-tight">
                O que você recebe
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FFF4EC] text-[#E94F7A] flex items-center justify-center border border-[#F0D5C7] shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFF4EC] text-[#5A3A31] border border-[#F0D5C7] uppercase">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-[#3A241C] mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5A3A31] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION: PARA QUEM É */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] leading-tight mb-2">
                Para quem é
              </h2>
              <p className="text-sm sm:text-base font-bold text-[#E94F7A]">
                O Agenda Cheia é para você que:
              </p>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-3">
                {targetAudience.map((item, index) => (
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
            </div>

          </div>
        </section>

        {/* SECTION: POR QUE ISSO PODE TE AJUDAR */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7]">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] mb-6 leading-tight">
              Por que isso pode te ajudar?
            </h2>

            <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-8 space-y-4 text-left shadow-sm">
              <p className="text-base sm:text-lg font-black text-[#E94F7A]">
                Porque não adianta só ter receita.
              </p>

              <p className="text-sm sm:text-base text-[#3A241C] font-semibold leading-relaxed">
                Você também precisa saber como mostrar seus bolos para as pessoas certas.
              </p>

              <div className="bg-[#FFF4EC] p-4 rounded-2xl border border-[#F0D5C7]">
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed">
                  Com o <strong className="text-[#3A241C] font-bold">Agenda Cheia</strong>, você para de divulgar no improviso e passa a seguir um plano simples para vender durante a semana.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: COMECE COM MAIS DIREÇÃO & CTA */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="bg-[#FFE3D3] border-3 border-[#E94F7A] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C] mb-4 leading-tight">
                Comece com mais direção
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#5A3A31] font-medium max-w-xl mx-auto mb-6 leading-relaxed">
                <p>
                  Você pode continuar tentando vender sem saber o que postar.
                </p>
                <p className="font-semibold text-[#3A241C]">
                  Ou pode seguir um plano simples para divulgar seus bolos, chamar clientes e gerar pedidos durante a semana.
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#E94F7A] bg-[#FFF4EC] py-2 px-3 rounded-xl border border-[#F0D5C7]">
                  Receba o <strong>Agenda Cheia</strong> com acesso digital imediato.
                </p>
              </div>

              {/* Price Banner */}
              <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-2xl p-4 sm:p-5 mb-6 max-w-sm mx-auto shadow-xs">
                <div className="text-xs font-bold text-[#5A3A31] uppercase tracking-wider mb-1">
                  Valor Único Promocional
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#3A241C]">
                  Por apenas <span className="text-[#E94F7A] text-3xl sm:text-4xl">R$37,00</span>
                </h3>
              </div>

              {/* Official CTA Button */}
              <motion.a
                id="main-offer-cta"
                href={CHECKOUT_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 px-6 sm:px-8 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base sm:text-xl tracking-wide shadow-xl shadow-[#E94F7A]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-3 border border-[#F27598] mb-4 no-underline"
              >
                <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                <span>LIBERAR MEU ACESSO AGORA</span>
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

      </main>

      {/* Footer */}
      <footer className="bg-[#3A241C] text-[#FFE3D3] border-t border-[#2C1B15] py-8 px-4 text-center text-xs">
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-[#FFE3D3]/80 font-bold">
            Agenda Cheia — Sistema de Vendas para Bolos no Pote
          </p>
          <p className="text-[11px] text-[#FFE3D3]/60">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
