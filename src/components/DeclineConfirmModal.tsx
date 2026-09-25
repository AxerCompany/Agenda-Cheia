import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, X, ShieldCheck, Check, Tag } from 'lucide-react';
import { DOWNSELL_URL, getDownsellCheckoutUrl } from '../data/upsellData';

interface DeclineConfirmModalProps {
  isOpen: boolean;
  onConfirmDecline: () => void;
  onCancelDecline: () => void;
}

export const DeclineConfirmModal: React.FC<DeclineConfirmModalProps> = ({
  isOpen,
  onConfirmDecline,
  onCancelDecline
}) => {
  const downsellLink = useMemo(() => {
    return getDownsellCheckoutUrl();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-[#FFF4EC] border-2 border-[#E94F7A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 max-w-lg w-full text-center shadow-2xl text-[#5A3A31] relative max-h-[94vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onCancelDecline}
            aria-label="Fechar"
            className="absolute top-3.5 right-3.5 text-[#5A3A31]/70 hover:text-[#3A241C] p-2 rounded-full hover:bg-[#FFE3D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top urgency tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 border border-[#F3CFBE]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Espere! Última Chance Nesta Página</span>
          </div>

          {/* Headline */}
          <h3 className="text-lg sm:text-2xl font-black text-[#3A241C] mb-2 leading-snug">
            Eu não quero que você fique no improviso e com a agenda vazia por causa de <span className="text-[#E94F7A]">R$ 10</span>.
          </h3>

          {/* Emotional connection & reality check */}
          <p className="text-xs sm:text-sm text-[#5A3A31] mb-4 leading-relaxed font-medium">
            Você já deu o primeiro passo e investiu para aprender as receitas. Mas ver ingrediente comprado e <strong className="text-[#3A241C] font-black">bolo parado na geladeira</strong> é a pior sensação que existe. Para você não sair sem um plano diário de vendas, liberei um <strong className="text-[#E94F7A] font-black">desconto exclusivo de última oportunidade</strong>:
          </p>

          {/* Special Price Callout: 37 -> 27 */}
          <div className="bg-[#FFE3D3] border-2 border-[#E94F7A] rounded-2xl p-4 sm:p-5 mb-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#E94F7A] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>R$ 10 OFF</span>
            </div>

            <span className="text-[11px] sm:text-xs font-bold text-[#8A6A61] uppercase tracking-wider block mb-1">
              De <span className="line-through font-extrabold text-[#8A6A61]">R$ 37,00</span> por apenas:
            </span>

            <div className="text-2xl sm:text-4xl font-black text-[#3A241C] flex items-baseline justify-center gap-1">
              <span className="text-base sm:text-xl font-extrabold text-[#E94F7A]">R$</span>
              <span className="text-[#E94F7A] text-3xl sm:text-5xl font-black tracking-tight">27</span>
              <span className="text-base sm:text-xl font-extrabold text-[#E94F7A]">,00</span>
            </div>

            <p className="text-[11px] sm:text-xs text-[#5A3A31] font-bold mt-1.5 leading-snug">
              Pagamento único • Menos do que você lucra vendendo <span className="text-[#3A241C] underline decoration-[#E94F7A]">1 único bolo no pote</span>.
            </p>
          </div>

          {/* What she takes with the discount */}
          <div className="bg-[#FFF4EC] p-3.5 sm:p-4 rounded-xl border border-[#F0D5C7] text-left mb-5 text-xs text-[#3A241C] space-y-2">
            <p className="text-[11px] font-black uppercase tracking-wider text-[#E94F7A] mb-1">
              Você recebe exatamente o sistema completo:
            </p>
            <div className="flex items-start gap-2 font-bold leading-tight">
              <Check className="w-4 h-4 text-[#2FA866] shrink-0 mt-0.5" />
              <span><strong>Calendário de 30 dias:</strong> o que postar e oferecer todo dia</span>
            </div>
            <div className="flex items-start gap-2 font-bold leading-tight">
              <Check className="w-4 h-4 text-[#2FA866] shrink-0 mt-0.5" />
              <span><strong>Scripts para WhatsApp:</strong> respostas prontas para "quanto custa?"</span>
            </div>
            <div className="flex items-start gap-2 font-bold leading-tight">
              <Check className="w-4 h-4 text-[#2FA866] shrink-0 mt-0.5" />
              <span><strong>Sistema de Recompra:</strong> clientes antigas pedindo toda semana</span>
            </div>
            <div className="flex items-start gap-2 font-bold leading-tight">
              <Check className="w-4 h-4 text-[#2FA866] shrink-0 mt-0.5" />
              <span><strong>Garantia incondicional de 7 dias:</strong> risco 100% nosso</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <a
              id="downsell-accept-button"
              href={downsellLink}
              className="w-full py-4 px-4 sm:px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 transition-all border border-[#F27598] no-underline hover:scale-[1.01] active:scale-[0.99] text-center"
            >
              <span>SIM! QUERO O AGENDA CHEIA POR R$ 27</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#2FA866] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Acesso imediato enviado para o seu e-mail</span>
            </div>

            <button
              id="downsell-decline-button"
              type="button"
              onClick={onConfirmDecline}
              className="w-full py-2 px-3 text-[11px] sm:text-xs text-[#8A6A61] hover:text-[#3A241C] transition-colors cursor-pointer underline hover:no-underline leading-snug"
            >
              Não, quero abrir mão do desconto de R$ 27 e continuar vendendo no improviso.
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
