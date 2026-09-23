import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, ArrowRight, X, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data/upsellData';

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
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-md w-full text-center shadow-2xl text-[#5A3A31] relative max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onCancelDecline}
            aria-label="Fechar"
            className="absolute top-4 right-4 text-[#5A3A31] hover:text-[#3A241C] p-2 rounded-full hover:bg-[#FFE3D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-[#FFE3D3] border border-[#F3CFBE] text-[#E94F7A] mx-auto flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-[#E94F7A]" />
          </div>

          <p className="text-xs font-black uppercase tracking-wider text-[#E94F7A] mb-1">
            Espere! Esta oportunidade é única
          </p>

          <h3 className="text-xl sm:text-2xl font-black text-[#3A241C] mb-3">
            Tem certeza de que deseja recusar o plano de vendas?
          </h3>

          <p className="text-xs sm:text-sm text-[#5A3A31] mb-5 leading-relaxed font-medium">
            Se recusar agora e voltar ao improviso, daqui a 30 dias você pode estar com o conhecimento na mão e a <strong className="text-[#3A241C] font-black">agenda vazia</strong>. Esta oferta especial de <strong className="text-[#E94F7A] font-black">R$ 37,00</strong> só aparece nesta página.
          </p>

          <div className="bg-[#FFE3D3] p-4 rounded-2xl border border-[#F3CFBE] text-left mb-6 text-xs text-[#3A241C] space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <span className="text-[#E94F7A]">✔</span>
              <span>Calendário de vendas de 30 dias pronto</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <span className="text-[#E94F7A]">✔</span>
              <span>Campanhas e scripts para WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <span className="text-[#E94F7A]">✔</span>
              <span>Garantia total de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              id="confirm-modal-accept"
              href={CHECKOUT_URL}
              className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 transition-all border border-[#F27598] no-underline"
            >
              <span>SIM! QUERO ADICIONAR POR R$37</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="confirm-modal-decline"
              onClick={onConfirmDecline}
              className="w-full py-2.5 px-4 text-xs text-[#8A6A61] hover:text-[#3A241C] transition-colors cursor-pointer underline hover:no-underline"
            >
              Não, obrigada. Quero continuar sem o plano de vendas.
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
