import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles, Flame, Cookie } from 'lucide-react';
import { AgendaMockup } from './AgendaMockup';

interface UpsellHeroProps {
  onCtaClick?: (e: React.MouseEvent) => void;
}

export const UpsellHero: React.FC<UpsellHeroProps> = ({ onCtaClick }) => {
  const bolosLucrativosPoints = [
    'quais receitas preparar',
    'o que comprar',
    'quanto custa produzir',
    'quanto cobrar',
    'quanto pode sobrar de lucro'
  ];

  const allSweetsList = [
    'Brigadeiros',
    'Brownies',
    'Trufas',
    'Sobremesas no pote',
    'Bolos caseiros',
    'Doces para festas'
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      {/* Background ambient decorative light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE3D3]/80 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        {/* Top Attention Alert Box */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 shadow-sm text-left sm:text-center w-full"
        >
          <div className="flex items-center sm:justify-center gap-2 text-xs font-black uppercase text-[#E94F7A] tracking-wider mb-1.5">
            <Flame className="w-4 h-4 fill-current text-[#E94F7A]" />
            <span>Mensagem Importante do Seu Pedido</span>
          </div>
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#3A241C] leading-snug">
            ESPERE! SEU ACESSO AO BOLOS LUCRATIVOS ESTÁ GARANTIDO 🍰
          </h1>
          <h2 className="text-sm sm:text-lg font-extrabold text-[#E94F7A] mt-2">
            Agora falta uma parte importante: transformar seus doces em pedidos durante a semana
          </h2>
        </motion.div>

        {/* Bolos Lucrativos Recap Checklist */}
        <div className="bg-[#FFE3D3]/60 border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-8 text-left shadow-2xs">
          <p className="text-base sm:text-lg font-bold text-[#3A241C] mb-3">
            Com o <strong className="text-[#E94F7A] font-black">Bolos Lucrativos</strong>, você já tem o caminho para saber:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {bolosLucrativosPoints.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#3A241C] bg-[#FFF4EC] p-3 rounded-xl border border-[#F0D5C7]">
                <div className="w-5 h-5 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#F0CFBE] space-y-2">
            <p className="text-sm sm:text-base text-[#5A3A31] font-semibold">
              Mas saber o que vender é só uma parte.
            </p>
            <p className="text-base sm:text-lg font-black text-[#3A241C] bg-[#FFF4EC] p-3.5 rounded-xl border-l-4 border-[#E94F7A]">
              Agora você precisa saber <span className="text-[#E94F7A]">como divulgar, chamar clientes e fazer as pessoas pedirem seus doces.</span>
            </p>
          </div>
        </div>

        {/* Transition Header */}
        <div className="my-6 text-center">
          <span className="text-xs font-black uppercase tracking-wider text-[#8A6A61] block mb-1">
            Por isso criamos o:
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#3A241C] tracking-tight">
            MÉTODO AGENDA CHEIA
          </h2>
          <p className="text-base sm:text-xl font-bold text-[#E94F7A] mt-2 max-w-xl mx-auto">
            Um plano simples para conseguir clientes e movimentar seus pedidos durante a semana
          </p>
        </div>

        {/* E o melhor: Não serve apenas para bolo no pote */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-6 text-left sm:text-center shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-2 border border-[#F0D5C7]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>E o melhor:</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-[#3A241C] mb-2 leading-snug">
            O método não serve apenas para bolo no pote.
          </h3>

          <p className="text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed max-w-2xl mx-auto mb-4">
            Você pode aplicar as estratégias para vender brigadeiros, brownies, trufas, sobremesas no pote, bolos caseiros, doces para festas e praticamente qualquer tipo de doce que você já faça ou queira começar a vender.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSweetsList.map((sweet, idx) => (
              <span 
                key={idx}
                className="bg-[#FFF4EC] border border-[#F0D5C7] text-[#3A241C] text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl shadow-2xs"
              >
                🍬 {sweet}
              </span>
            ))}
          </div>
        </div>

        {/* [ESPAÇO PARA MOCKUP DO MÉTODO AGENDA CHEIA] */}
        <div className="w-full">
          <AgendaMockup />
        </div>

        {/* Quick scroll action */}
        <div className="max-w-md mx-auto pt-2 w-full">
          <a
            href="#oferta"
            onClick={onCtaClick}
            className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base shadow-xl shadow-[#E94F7A]/25 transition-all flex items-center justify-center gap-2 border border-[#F27598] no-underline cursor-pointer text-center leading-tight hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>SIM, QUERO ADICIONAR O MÉTODO AGENDA CHEIA</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
