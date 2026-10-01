import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AgendaMockup } from './AgendaMockup';

interface Dobra01HeroProps {
  onCtaClick?: (e: React.MouseEvent) => void;
}

export const Dobra01Hero: React.FC<Dobra01HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      {/* Background ambient decorative light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE3D3]/80 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Subtle top indicator */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-5 border border-[#F3CFBE] shadow-2xs"
        >
          <Sparkles className="w-4 h-4 fill-current text-[#E94F7A]" />
          <span>Método Agenda Cheia • Sistema de Vendas</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#3A241C] leading-[1.18] sm:leading-[1.15] tracking-tight mb-5 max-w-2xl mx-auto break-words"
        >
          Pare de esperar os pedidos aparecerem
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl font-bold text-[#E94F7A] leading-relaxed max-w-2xl mx-auto mb-6"
        >
          Aprenda uma rotina simples para divulgar seus doces, chamar clientes e conseguir novos pedidos durante a semana.
        </motion.h2>

        {/* Descriptive Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3 text-sm sm:text-lg text-[#5A3A31] font-medium leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 text-left sm:text-center bg-[#FFE3D3]/50 p-4 sm:p-5 rounded-2xl border border-[#F3CFBE]"
        >
          <p>
            O <strong className="text-[#3A241C] font-extrabold">Método Agenda Cheia</strong> foi criado para quem quer parar de postar no improviso e começar a vender com mais direção.
          </p>
          <p className="text-xs sm:text-base text-[#3A241C] font-semibold">
            Serve tanto para quem está começando quanto para quem já vende e quer ter mais constância nos pedidos.
          </p>
        </motion.div>

        {/* [ESPAÇO PARA MOCKUP PRINCIPAL DO MÉTODO AGENDA CHEIA] */}
        <div className="w-full">
          <AgendaMockup />
        </div>

        {/* Fast Action CTA button */}
        <div className="max-w-md mx-auto pt-4 w-full">
          <a
            href="#oferta"
            onClick={onCtaClick}
            className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-lg shadow-xl shadow-[#E94F7A]/25 transition-all flex items-center justify-center gap-2 border border-[#F27598] no-underline cursor-pointer text-center leading-tight hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>SIM, QUERO O MÉTODO AGENDA CHEIA</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          <p className="text-xs text-[#8A6A61] mt-2 font-medium">
            Acesso digital imediato • Apenas R$ 37
          </p>
        </div>

      </div>
    </section>
  );
};
