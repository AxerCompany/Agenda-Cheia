import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Check, 
  Gift
} from 'lucide-react';
import { DELIVERABLES, CHECKOUT_URL } from '../data/upsellData';

interface Dobra09OfferProps {
  onAddClick: () => void;
  onDeclineClick: () => void;
}

export const Dobra09Offer: React.FC<Dobra09OfferProps> = ({ onAddClick, onDeclineClick }) => {
  return (
    <section id="dobra-09" className="py-14 sm:py-24 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE3D3] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Offer Card Container */}
        <div className="bg-[#FFE3D3] border-3 border-[#E94F7A] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-xl relative overflow-hidden text-center">
          
          {/* Top Ribbons & Badges */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs sm:text-sm font-black tracking-wider uppercase mb-5 border border-[#E5A532] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#3A241C]" />
            <span>OFERTA ESPECIAL APÓS A SUA COMPRA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight mb-2">
            Adicione o <span className="text-[#E94F7A]">Agenda Cheia</span> ao seu acesso
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31] max-w-xl mx-auto mb-8 font-medium">
            Você acabou de desbloquear as receitas e a estrutura de custos no Bolos Lucrativos. Leve o sistema completo de divulgação e vendas por um valor simbólico de oportunidade única:
          </p>

          {/* Deliverables Checklist Recap */}
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-5 sm:p-6 text-left mb-8 space-y-3 shadow-inner">
            <div className="text-xs font-black text-[#E94F7A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#E94F7A]" />
              <span>Tudo o que está incluso no seu acesso:</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {DELIVERABLES.map((item) => (
                <div key={item.id} className="flex items-start gap-2 text-xs sm:text-sm text-[#3A241C]">
                  <Check className="w-4 h-4 text-[#2FA866] mt-0.5 shrink-0 stroke-[3]" />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box (Rosa Goiaba & Dourado Suave) */}
          <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
            <div className="text-xs text-[#5A3A31] uppercase tracking-widest font-bold mb-1">
              Valor Individual: <span className="line-through decoration-[#E94F7A] decoration-2">R$ 97,00</span>
            </div>
            
            <div className="text-sm font-extrabold text-[#2FA866] mb-2">
              CONDIÇÃO EXCLUSIVA NESTA PÁGINA:
            </div>

            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-xl sm:text-2xl font-bold text-[#3A241C]">R$</span>
              <span className="text-5xl sm:text-7xl font-black text-[#E94F7A] tracking-tight">37</span>
              <span className="text-lg sm:text-xl font-bold text-[#5A3A31]">,00</span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#3A241C] mb-4">
              Pagamento único • Acesso imediato • Sem mensalidades
            </p>

            <div className="inline-flex items-center gap-1.5 bg-[#F4B84A]/30 text-[#3A241C] text-xs font-black px-3.5 py-1.5 rounded-full border border-[#F4B84A]">
              <Zap className="w-3.5 h-3.5 text-[#E94F7A]" />
              Economia imediata de mais de 60%
            </div>
          </div>

          {/* Primary CTA Button (Rosa Goiaba with white text) */}
          <motion.a
            id="offer-cta-button"
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 sm:py-6 px-8 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-lg sm:text-2xl tracking-wide shadow-xl shadow-[#E94F7A]/30 transition-all cursor-pointer flex items-center justify-center gap-3 border border-[#F27598] mb-4 no-underline"
          >
            <CheckCircle2 className="w-7 h-7 text-white shrink-0" />
            <span>QUERO MINHA AGENDA CHEIA POR R$37</span>
            <ArrowRight className="w-6 h-6 text-white shrink-0 hidden sm:inline-block" />
          </motion.a>

          {/* Security & Guarantee badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#3A241C] pt-2 mb-6">
            <div className="flex items-center justify-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2FA866]" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-bold">
              <Lock className="w-4 h-4 text-[#2FA866]" />
              <span>Adição em 1 Clique</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-bold">
              <Zap className="w-4 h-4 text-[#F4B84A]" />
              <span>Liberação Imediata</span>
            </div>
          </div>

          {/* Decline link */}
          <div className="border-t border-[#F0CFBE] pt-4">
            <button
              id="offer-decline-button"
              onClick={onDeclineClick}
              className="text-xs sm:text-sm text-[#5A3A31] hover:text-[#E94F7A] transition-colors underline underline-offset-4 decoration-[#5A3A31]/40 hover:decoration-[#E94F7A] cursor-pointer"
            >
              Não, obrigado. Quero continuar apenas com o Bolos Lucrativos.
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
