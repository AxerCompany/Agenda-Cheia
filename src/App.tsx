import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CalendarCheck, 
  MessageSquareShare, 
  Sparkles, 
  RotateCcw, 
  UsersRound, 
  Target, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  AlertTriangle,
  Clock,
  TrendingUp,
  XCircle,
  HelpCircle,
  Flame,
  CheckCheck
} from 'lucide-react';
import { HeaderProgressBar } from './components/HeaderProgressBar';
import { AgendaMockup } from './components/AgendaMockup';
import { SocialProofSection } from './components/SocialProofSection';
import { InteractiveScriptsSimulator } from './components/InteractiveScriptsSimulator';
import { AllSweetsSection } from './components/AllSweetsSection';
import { FaqSection } from './components/FaqSection';
import { DeclineConfirmModal } from './components/DeclineConfirmModal';
import { WiapyUpsell } from './components/WiapyUpsell';
import { CHECKOUT_URL, EXACT_DELIVERABLES } from './data/upsellData';

export default function App() {
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [hasDeclined, setHasDeclined] = useState(false);

  const handleOpenDeclineModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDeclineModalOpen(true);
  };

  const handleConfirmDecline = () => {
    setIsDeclineModalOpen(false);
    setHasDeclined(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta') || document.getElementById('main-offer-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const deliverableIcons = [
    CalendarCheck,
    MessageSquareShare,
    Sparkles,
    RotateCcw,
    UsersRound,
    Target
  ];

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#5A3A31] font-sans antialiased selection:bg-[#E94F7A] selection:text-white flex flex-col w-full max-w-full overflow-x-hidden">
      
      {/* Top Header with Progress Bar & Purchase Status */}
      <HeaderProgressBar />

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">

        {/* Notice banner if user declined */}
        {hasDeclined && (
          <div className="bg-[#FFE3D3] border-b border-[#F0D5C7] px-4 py-3 text-center text-xs sm:text-sm text-[#3A241C] font-semibold">
            Você optou por não adicionar o plano de vendas. Seu acesso padrão já foi enviado para seu e-mail. Caso mude de ideia antes de fechar a aba, você ainda pode garantir por R$ 37.
          </div>
        )}

        {/* ========================================================
            HERO / NOTICE / HEADLINE DOBRA
           ======================================================== */}
        <section className="pt-6 pb-10 sm:pt-14 sm:pb-16 px-3.5 sm:px-6 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto text-center w-full">

            {/* Post-Purchase Context Box */}
            <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-2xl p-3.5 sm:p-5 mb-6 sm:mb-8 shadow-sm text-left sm:text-center w-full">
              <div className="flex items-center sm:justify-center gap-2 text-xs font-black uppercase text-[#E94F7A] tracking-wider mb-1.5">
                <Flame className="w-4 h-4 fill-current text-[#E94F7A]" />
                <span>Mensagem Importante do Seu Pedido</span>
              </div>
              <p className="text-base sm:text-lg font-black text-[#3A241C] leading-snug">
                Parabéns pela sua compra! Seu acesso já foi enviado para o seu e-mail.
              </p>
              <p className="text-sm sm:text-base font-extrabold text-[#E94F7A] mt-1">
                Mas antes de acessar, você precisa ver isso agora.
              </p>
            </div>

            {/* Main Headline requested by user */}
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-black text-[#3A241C] leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-6 tracking-tight break-words">
              APRENDER A FAZER BOLO NO POTE NÃO BASTA. AGORA VOCÊ PRECISA TRANSFORMAR SEUS DOCES EM PEDIDOS TODOS OS DIAS.
            </h1>

            {/* Sub-headline connector */}
            <p className="text-sm sm:text-lg lg:text-xl text-[#5A3A31] font-medium leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 break-words">
              Existe uma diferença enorme entre <strong className="text-[#3A241C] font-bold">saber fazer</strong> e <strong className="text-[#E94F7A] font-black">conseguir vender</strong>. Veja como sair do improviso e nunca mais ver bolo parado na sua geladeira.
            </p>

            {/* Visual Mockup Container */}
            <AgendaMockup />

            {/* Quick action bar */}
            <div className="max-w-md mx-auto pt-2 w-full px-1 sm:px-0">
              <a
                href="#oferta"
                onClick={handleScrollToOffer}
                className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-xs sm:text-base md:text-lg shadow-lg shadow-[#E94F7A]/25 transition-all flex items-center justify-center gap-1.5 sm:gap-2 border border-[#F27598] no-underline cursor-pointer text-center leading-tight"
              >
                <span className="flex-1 sm:flex-none">SIM! QUERO O AGENDA CHEIA</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
            </div>

          </div>
        </section>


        {/* ========================================================
            A REALIDADE QUE NINGUÉM CONTA (PAIN POINTS & CYCLE)
           ======================================================== */}
        <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto w-full">

            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
                A Realidade da Confeitaria
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight">
                Existe uma diferença enorme entre saber fazer e conseguir vender.
              </h2>
            </div>

            <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-4 sm:space-y-6 w-full">

              <p className="text-sm sm:text-lg font-medium text-[#3A241C] leading-relaxed">
                Muita gente aprende, monta os potinhos, capricha na receita... e depois não sabe o que postar, não sabe como chamar clientes, não sabe o que escrever no WhatsApp.
              </p>

              {/* The 2 classic roadblocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-xl bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✕
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-[#3A241C] leading-snug">Posta no status e ninguém responde.</h3>
                    <p className="text-xs text-[#5A3A31] mt-0.5 leading-relaxed">As pessoas olham, passam reto e não pedem.</p>
                  </div>
                </div>

                <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-xl bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✕
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-[#3A241C] leading-snug">Vende uma vez e a cliente some.</h3>
                    <p className="text-xs text-[#5A3A31] mt-0.5 leading-relaxed">Sem um plano de recompra, cada venda vira um recomeço do zero.</p>
                  </div>
                </div>
              </div>

              {/* The heartbreaking truth callout */}
              <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E94F7A]">
                  <AlertTriangle className="w-4 h-4 text-[#E94F7A] shrink-0" />
                  <span>E aí vem a parte que ninguém conta:</span>
                </div>
                <p className="text-base sm:text-lg font-black text-[#3A241C] leading-snug">
                  Você passa o dia olhando o celular, esperando alguém chamar.
                </p>
                <p className="text-xs sm:text-base text-[#5A3A31] leading-relaxed font-medium">
                  Compra ingrediente, faz o bolo, e o bolo fica parado. Sobra, estraga, vira prejuízo. O dinheiro do material sai do seu bolso e a venda não entra.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================
            O ALERTA DOS 30 DIAS & O SISTEMA VS IMPROVISO
           ======================================================== */}
        <section className="py-10 sm:py-16 px-3.5 sm:px-6 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto w-full">

            <div className="bg-[#3A241C] text-[#FFE3D3] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-xl relative overflow-hidden w-full">
              <div className="relative z-10 space-y-5 sm:space-y-6">

                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F4B84A]">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>O Custo de Continuar no Improviso</span>
                </div>

                <h2 className="text-xl sm:text-3xl font-black text-white leading-snug break-words">
                  Se você sair dessa página sem um plano de vendas, daqui a 30 dias pode estar no mesmo lugar: aprendeu a fazer, mas a agenda continua vazia.
                </h2>

                <div className="bg-[#2C1B15] border border-[#4A2F25] rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-3">
                  <p className="text-xs sm:text-base text-[#FFE3D3] leading-relaxed">
                    Enquanto isso, outra confeiteira, que nem faz bolo melhor que o seu, está com pedido todo dia, porque <strong className="text-[#F4B84A] font-bold">ela tem um sistema e você tem improviso</strong>.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#4A2F25]">
                  <p className="text-sm sm:text-lg font-black text-white leading-snug">
                    O que tira você desse ciclo não é fazer mais bolo.{' '}
                    <span className="text-[#E94F7A]">É ter um plano pronto de vendas.</span>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ========================================================
            APRESENTAÇÃO: É O AGENDA CHEIA
           ======================================================== */}
        <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-[#FFE3D3]/30 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto text-center w-full">

            <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
              A Solução Pronta para Usar
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight mb-3 sm:mb-4">
              É o <span className="text-[#E94F7A]">AGENDA CHEIA</span>
            </h2>

            <p className="text-sm sm:text-xl text-[#3A241C] font-extrabold max-w-2xl mx-auto leading-relaxed">
              O sistema simples que mostra o que postar, como chamar clientes e como movimentar seus pedidos durante a semana.
            </p>

          </div>
        </section>


        {/* ========================================================
            O QUE VOCÊ RECEBE (DELIVERABLES RIGOROSAMENTE FIÉIS)
           ======================================================== */}
        <section className="py-10 sm:py-18 px-3.5 sm:px-6 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto w-full">

            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A241C]">
                Você recebe:
              </h2>
            </div>

            {/* 6 Deliverables matching user request exactly */}
            <div className="space-y-3 sm:space-y-4">
              {EXACT_DELIVERABLES.map((item, index) => {
                const IconComponent = deliverableIcons[index] || Check;
                return (
                  <div 
                    key={item.id}
                    className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs hover:border-[#E94F7A]/40 transition-colors w-full overflow-hidden"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      
                      {/* Check & Icon */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#FFF4EC] text-[#2FA866] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs mt-0.5">
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-sm sm:text-lg font-black text-[#3A241C] leading-snug">
                            {item.title}: <span className="font-extrabold text-[#E94F7A]">{item.subtitle.toLowerCase()}</span>
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#5A3A31] font-medium leading-relaxed mt-1">
                          {item.description}
                        </p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-[#F0CFBE]">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-1.5 text-xs text-[#3A241C] font-semibold min-w-0">
                              <span className="text-[#2FA866] font-black text-xs shrink-0 mt-0.5">✓</span>
                              <span className="leading-tight break-words">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Scripts Simulator to demonstrate the value */}
            <InteractiveScriptsSimulator />

          </div>
        </section>


        {/* ========================================================
            SERVE PARA TODO TIPO DE DOCE (NÃO SÓ BOLO NO POTE)
           ======================================================== */}
        <AllSweetsSection />


        {/* ========================================================
            A TRANSFORMAÇÃO (IMAGINE O SEU DIA A DIA)
           ======================================================== */}
        <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto w-full">

            <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-sm space-y-4 sm:space-y-6 w-full">

              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
                  Uma Nova Rotina para o Seu Negócio
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-[#3A241C] leading-tight">
                  Imagine abrir o WhatsApp e ter gente chamando.
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg text-[#3A241C] leading-relaxed font-medium">
                <p>
                  Imagine abrir o WhatsApp e ter gente chamando. Postar no status sabendo exatamente o que escrever. Cliente antiga voltando, cliente nova chegando por indicação.
                </p>

                <div className="bg-[#FFE3D3] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#F3CFBE]">
                  <p className="font-black text-[#3A241C] text-sm sm:text-xl leading-snug">
                    Seus bolos param de ficar parados e a agenda se enche durante a semana, com a chance de faturar até <span className="text-[#E94F7A]">R$5.000 por mês</span>.
                  </p>
                </div>

                <p className="text-xs sm:text-base text-[#5A3A31] font-semibold">
                  Você não precisa inventar nada. Está tudo pronto: é só abrir, copiar, enviar e seguir o plano.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================
            GARANTIA DE 7 DIAS
           ======================================================== */}
        <section className="py-10 sm:py-16 px-3.5 sm:px-6 border-b border-[#F0D5C7] overflow-hidden">
          <div className="max-w-3xl mx-auto w-full">

            <div className="bg-[#FFF4EC] border-2 border-[#2FA866] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left w-full">
              
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#2FA866]/15 border-2 border-[#2FA866] text-[#2FA866] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2FA866]">
                  <span>Sem Risco para Você</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#3A241C] break-words">
                  E o risco é todo nosso: 7 DIAS DE GARANTIA.
                </h3>

                <p className="text-xs sm:text-base text-[#5A3A31] font-semibold leading-relaxed">
                  Se não for para você, devolvemos 100% do seu dinheiro. Sem burocracia, sem letras miúdas. Você acessa o material, aplica os scripts e se não fizer sentido, é só nos avisar.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================
            PROVA SOCIAL (ALUNAS E PRINTS DE PEDIDOS)
           ======================================================== */}
        <SocialProofSection />


        {/* ========================================================
            A OFERTA, DECISÃO FINAL & CTA
           ======================================================== */}
        <section id="oferta" className="py-12 sm:py-20 px-3.5 sm:px-6 overflow-hidden scroll-mt-8">
          <div className="max-w-2xl mx-auto text-center w-full">

            <div className="bg-[#FFE3D3] border-2 sm:border-3 border-[#E94F7A] rounded-2xl sm:rounded-[36px] p-4 sm:p-10 shadow-2xl relative overflow-hidden w-full">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-[#F0D5C7]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Oportunidade Única Nesta Página</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-[#3A241C] mb-3 sm:mb-4 leading-tight">
                Você já investiu para aprender. Agora é a hora de colocar isso para vender.
              </h2>

              <p className="text-xs sm:text-sm font-black text-[#E94F7A] uppercase tracking-wide mb-4 sm:mb-6">
                Esta oferta aparece só agora, nesta página. Se você sair, ela não volta com esse valor.
              </p>

              {/* Price Callout */}
              <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 max-w-sm mx-auto shadow-sm w-full">
                <span className="text-xs font-bold text-[#5A3A31] uppercase tracking-wider block mb-1">
                  Pagamento Único Promocional
                </span>
                <div className="text-2xl sm:text-4xl font-black text-[#3A241C]">
                  Por apenas <span className="text-[#E94F7A]">R$37,00</span>
                </div>
                <p className="text-xs text-[#5A3A31] font-semibold mt-2">
                  Menos do que você fatura em um único pedido de bolos no pote.
                </p>
              </div>

              {/* Urgency & Closing Argument */}
              <div className="space-y-3 text-xs sm:text-base text-[#3A241C] font-medium max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed text-left sm:text-center">
                <p>
                  Você acabou de dar o primeiro passo. Já sabe fazer e já viu o que falta.
                </p>
                <p>
                  Se recusar agora e voltar ao improviso, daqui a 30 dias vai estar com o conhecimento na mão e a agenda vazia. A diferença é que você sabia o caminho e não usou.
                </p>
                <p className="font-black text-sm sm:text-lg text-[#E94F7A] bg-[#FFF4EC] p-3 rounded-xl border border-[#F0D5C7]">
                  Quem paga por essa decisão é a sua agenda.
                </p>
              </div>

              {/* Main Wiapy One-Click Upsell */}
              <div className="w-full">
                <WiapyUpsell />
              </div>

              {/* Security line requested by user */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#5A3A31] font-bold mt-2">
                <span className="inline-flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2FA866]" />
                  Garantia de 7 Dias
                </span>
                <span aria-hidden="true" className="text-[#F0CFBE] hidden xs:inline">·</span>
                <span className="inline-flex items-center gap-1 shrink-0">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2FA866]" />
                  Acesso Imediato
                </span>
                <span aria-hidden="true" className="text-[#F0CFBE] hidden xs:inline">·</span>
                <span className="inline-flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4B84A]" />
                  Pagamento Seguro
                </span>
              </div>

            </div>

          </div>
        </section>


        {/* FAQ Section */}
        <FaqSection />

      </main>


      {/* Decline Confirmation Modal */}
      <DeclineConfirmModal
        isOpen={isDeclineModalOpen}
        onConfirmDecline={handleConfirmDecline}
        onCancelDecline={() => setIsDeclineModalOpen(false)}
      />


      {/* Footer */}
      <footer className="bg-[#3A241C] text-[#FFE3D3] border-t border-[#2C1B15] py-8 px-4 text-center text-xs w-full overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-[#FFE3D3] font-bold text-sm">
            Agenda Cheia — Sistema de Vendas para Bolos no Pote
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#FFE3D3]/70 font-medium">
            <span>Garantia de 7 Dias</span>
            <span>·</span>
            <span>Acesso Imediato</span>
            <span>·</span>
            <span>Pagamento Seguro</span>
          </div>
          <p className="text-[11px] text-[#FFE3D3]/50 pt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
