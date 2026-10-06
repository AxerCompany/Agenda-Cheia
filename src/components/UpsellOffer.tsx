import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { WiapyUpsell } from './WiapyUpsell';

interface UpsellOfferProps {
  onDeclineClick: (e?: React.MouseEvent) => void;
}

export const UpsellOffer: React.FC<UpsellOfferProps> = ({ onDeclineClick }) => {
  return (
    <section id="oferta" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden scroll-mt-6">
      <div className="max-w-2xl mx-auto text-center w-full">

        <div className="bg-[#FFE3D3] border-2 sm:border-3 border-[#E94F7A] rounded-2xl sm:rounded-[36px] p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-[#F0D5C7]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Oferta Especial de Adição ao Pedido</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] mb-3 leading-tight">
            Complete seu acesso agora
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed max-w-lg mx-auto mb-6">
            <p>
              Você já garantiu o <strong className="text-[#3A241C] font-extrabold">Bolos Lucrativos</strong> para organizar receitas, custos, preços e lucro.
            </p>
            <p className="font-bold text-[#3A241C]">
              Agora adicione o <strong className="text-[#E94F7A] font-black">Método Agenda Cheia</strong> e tenha um plano de vendas que você poderá aplicar no bolo no pote e em qualquer outro doce que decidir vender.
            </p>
          </div>

          {/* Price Callout */}
          <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-xl sm:rounded-2xl p-5 mb-5 max-w-sm mx-auto shadow-sm">
            <h3 className="text-xs sm:text-sm font-bold text-[#8A6A61] uppercase tracking-wider block mb-1">
              Adicione agora ao seu pedido por apenas:
            </h3>
            <div className="text-3xl sm:text-5xl font-black text-[#E94F7A]">
              R$27,00
            </div>
            <p className="text-xs text-[#5A3A31] font-bold mt-2">
              É só clicar uma vez e o Método Agenda Cheia será adicionado ao seu acesso.
            </p>
          </div>

          {/* Main Wiapy One-Click Upsell */}
          <div className="w-full">
            <WiapyUpsell onDeclineClick={onDeclineClick} />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#5A3A31] font-bold mt-2">
            <span className="inline-flex items-center gap-1 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2FA866]" />
              Garantia de 7 Dias
            </span>
            <span aria-hidden="true" className="text-[#F0CFBE] hidden xs:inline">·</span>
            <span className="inline-flex items-center gap-1 shrink-0">
              <Lock className="w-3.5 h-3.5 text-[#2FA866]" />
              Acesso Digital Imediato
            </span>
            <span aria-hidden="true" className="text-[#F0CFBE] hidden xs:inline">·</span>
            <span className="inline-flex items-center gap-1 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B84A]" />
              Pagamento 100% Seguro
            </span>
          </div>

          {/* Refusal Link that triggers the R$ 27 Downsell Modal */}
          <div className="pt-4 text-center">
            <button
              type="button"
              id="offer-decline-button"
              onClick={onDeclineClick}
              className="text-xs text-[#8A6A61] hover:text-[#3A241C] underline cursor-pointer transition-colors"
            >
              Não, obrigado. Quero continuar apenas com o Bolos Lucrativos.
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
