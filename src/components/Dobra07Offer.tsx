import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { WiapyUpsell } from './WiapyUpsell';

interface Dobra07OfferProps {
  onDeclineClick: (e?: React.MouseEvent) => void;
}

export const Dobra07Offer: React.FC<Dobra07OfferProps> = ({ onDeclineClick }) => {
  const checklist = [
    'Calendário de Vendas de 30 Dias',
    'Campanhas para WhatsApp',
    'Scripts para Fechar Pedidos',
    'Sistema de Recompra',
    'Campanha de Indicação',
    'Plano para Primeiros ou Novos Pedidos'
  ];

  return (
    <section id="oferta" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden scroll-mt-6">
      <div className="max-w-2xl mx-auto text-center w-full">

        <div className="bg-[#FFE3D3] border-2 sm:border-3 border-[#E94F7A] rounded-2xl sm:rounded-[36px] p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-[#F0D5C7]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Oferta Especial</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] mb-3 leading-tight">
            Comece agora com o Método Agenda Cheia
          </h2>

          <p className="text-sm sm:text-lg text-[#5A3A31] font-semibold mb-6">
            Receba todos os materiais e comece a aplicar ainda hoje.
          </p>

          {/* Checklist Card */}
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 text-left shadow-2xs space-y-2.5">
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#E94F7A] mb-2">
              Você recebe:
            </p>
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#3A241C]">
                <div className="w-5 h-5 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Price Callout */}
          <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-5 max-w-sm mx-auto shadow-sm">
            <span className="text-xs font-bold text-[#8A6A61] uppercase tracking-wider block mb-1">
              Acesso digital imediato
            </span>
            <div className="text-2xl sm:text-4xl font-black text-[#3A241C]">
              Por apenas <span className="text-[#E94F7A]">R$27</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#5A3A31] font-semibold mt-1">
              Pagamento único • Sem mensalidades
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
              Pagamento Seguro
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
              Não, obrigada. Quero continuar sem o plano de vendas.
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
