import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DobraFinalClosingProps {
  onCtaClick?: (e: React.MouseEvent) => void;
}

export const DobraFinalClosing: React.FC<DobraFinalClosingProps> = ({ onCtaClick }) => {
  return (
    <section className="py-14 sm:py-22 px-4 sm:px-6 bg-[#3A241C] text-[#FFE3D3] text-center overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Subtle tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE3D3]/10 text-[#F4B84A] text-xs font-black uppercase tracking-wider border border-[#F4B84A]/30">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Sua Nova Fase na Confeitaria</span>
        </div>

        {/* Main Final Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          Pare de depender da sorte para vender
        </h2>

        {/* Sub-headline */}
        <p className="text-sm sm:text-lg text-[#FFE3D3]/90 font-medium leading-relaxed max-w-xl mx-auto">
          Tenha um plano simples para divulgar seus doces, chamar clientes e movimentar seus pedidos durante a semana.
        </p>

        {/* Big Final CTA Button */}
        <div className="pt-2 max-w-md mx-auto w-full">
          <a
            href="#oferta"
            onClick={onCtaClick}
            className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base sm:text-xl shadow-2xl shadow-[#E94F7A]/40 transition-all flex items-center justify-center gap-2 border border-[#F27598] no-underline cursor-pointer text-center leading-tight hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          <p className="text-xs text-[#FFE3D3]/60 mt-3 font-medium">
            Apenas R$ 37 • Acesso digital imediato
          </p>
        </div>

      </div>
    </section>
  );
};
