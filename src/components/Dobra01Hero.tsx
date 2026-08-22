import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  MessageCircle,
  Calendar
} from 'lucide-react';

interface Dobra01HeroProps {
  onAddClick: () => void;
  onDeclineClick: () => void;
}

export const Dobra01Hero: React.FC<Dobra01HeroProps> = ({ onAddClick, onDeclineClick }) => {
  return (
    <section id="dobra-01" className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      {/* Background ambient decorative light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE3D3]/70 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Selo no topo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-6 shadow-sm border border-[#E5A532]"
        >
          <Sparkles className="w-4 h-4 text-[#3A241C]" />
          <span>OFERTA ESPECIAL APÓS A COMPRA</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black text-[#3A241C] leading-tight sm:leading-tight tracking-tight mb-6"
        >
          Agora falta transformar suas receitas em{' '}
          <span className="text-[#E94F7A] underline decoration-[#E94F7A]/40 decoration-wavy decoration-2">
            pedidos durante a semana
          </span>
        </motion.h1>

        {/* Confirmation card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl p-5 sm:p-6 mb-8 text-left sm:text-center shadow-sm"
        >
          <p className="text-base sm:text-lg text-[#3A241C] leading-relaxed mb-3">
            Você acabou de garantir o acesso ao <strong className="text-[#E94F7A] font-extrabold">Bolos Lucrativos</strong>.
          </p>
          <p className="text-sm sm:text-base text-[#5A3A31] leading-relaxed mb-4">
            Agora você já tem receitas, lista de compras, cálculo de custo, preço sugerido e lucro estimado.
          </p>

          <div className="border-t border-[#F0CFBE] pt-4 mt-4">
            <p className="text-sm sm:text-base text-[#5A3A31] mb-2 font-medium">
              Mas existe uma parte que muita gente trava:
            </p>
            <p className="text-base sm:text-lg font-black text-[#E94F7A] bg-[#FFF4EC] border border-[#E94F7A]/30 px-4 py-2.5 rounded-xl inline-block shadow-xs">
              como divulgar, chamar clientes e conseguir pedidos de verdade.
            </p>
          </div>
        </motion.div>

        {/* Presentation Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-8 shadow-md mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94F7A]/10 rounded-full blur-2xl pointer-events-none" />

          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#E94F7A] uppercase mb-2">
            Por isso, antes de finalizar seu acesso, você pode adicionar o:
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-[#3A241C] tracking-tight mb-2">
            Agenda Cheia
          </h2>
          <h3 className="text-lg sm:text-2xl font-bold text-[#E94F7A] mb-5">
            Sistema de Vendas para Bolos no Pote
          </h3>

          {/* Feature Highlights Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-xs text-[#3A241C]">
            <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-lg p-2.5 flex items-center justify-center gap-1.5 font-bold shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#E94F7A] shrink-0" />
              <span>30 Dias de Posts</span>
            </div>
            <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-lg p-2.5 flex items-center justify-center gap-1.5 font-bold shadow-xs">
              <MessageCircle className="w-3.5 h-3.5 text-[#2FA866] shrink-0" />
              <span>Scripts WhatsApp</span>
            </div>
            <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-lg p-2.5 flex items-center justify-center gap-1.5 font-bold shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#F4B84A] shrink-0" />
              <span>Recompra Ativa</span>
            </div>
            <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-lg p-2.5 flex items-center justify-center gap-1.5 font-bold shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#E94F7A] shrink-0" />
              <span>Indicação Fácil</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#5A3A31] leading-relaxed max-w-xl mx-auto mb-6">
            Um plano simples para você saber o que postar, como divulgar, como chamar clientes, como responder interessadas e como buscar pedidos durante a semana usando WhatsApp, status, indicação e recompra.
          </p>

          {/* Primary CTA Button (Rosa Goiaba with White text - No price here) */}
          <motion.button
            id="hero-cta-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAddClick}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base sm:text-xl tracking-wide shadow-lg shadow-[#E94F7A]/25 transition-all cursor-pointer inline-flex items-center justify-center gap-3 border border-[#F27598]"
          >
            <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
            <span>SIM, QUERO ADICIONAR O AGENDA CHEIA</span>
            <ArrowRight className="w-5 h-5 text-white shrink-0 hidden sm:inline-block" />
          </motion.button>

          {/* Micro guarantee badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#5A3A31]">
            <ShieldCheck className="w-4 h-4 text-[#2FA866]" />
            <span>Garantia incondicional de 7 dias • 1 clique para adicionar</span>
          </div>
        </motion.div>

        {/* Decline link */}
        <button
          id="hero-decline-button"
          onClick={onDeclineClick}
          className="text-xs sm:text-sm text-[#5A3A31] hover:text-[#E94F7A] transition-colors underline underline-offset-4 decoration-[#5A3A31]/40 hover:decoration-[#E94F7A] cursor-pointer pt-2 pb-1 inline-block"
        >
          Não, obrigado. Quero continuar apenas com o Bolos Lucrativos.
        </button>
      </div>
    </section>
  );
};
