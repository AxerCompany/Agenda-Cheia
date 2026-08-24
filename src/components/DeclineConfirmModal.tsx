import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, ArrowRight, X, Sparkles } from 'lucide-react';

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#FFF4EC] border-2 border-[#E94F7A]/50 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl text-[#5A3A31] relative"
        >
          <button
            onClick={onCancelDecline}
            className="absolute top-4 right-4 text-[#5A3A31] hover:text-[#3A241C] p-1.5 rounded-full hover:bg-[#FFE3D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-[#F4B84A]/30 border border-[#F4B84A] text-[#3A241C] mx-auto flex items-center justify-center mb-4">
            <AlertCircle className="w-7 h-7 text-[#E94F7A]" />
          </div>

          <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#F4B84A] text-[#3A241C] text-[11px] font-black uppercase mb-2 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#3A241C]" />
            Apenas uma confirmação rápida
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#3A241C] mb-2">
            Tem certeza de que deseja abrir mão do Agenda Cheia?
          </h3>

          <p className="text-xs sm:text-sm text-[#5A3A31] mb-6 leading-relaxed">
            Esta condição especial de <strong className="text-[#E94F7A] font-bold">R$ 37</strong> está disponível apenas nesta etapa após a compra do <strong className="text-[#3A241C]">Bolos Lucrativos</strong>. Ao fechar, você não verá mais este valor.
          </p>

          <div className="bg-[#FFE3D3] p-3.5 rounded-2xl border border-[#F3CFBE] text-left mb-6 text-xs text-[#3A241C] space-y-1.5 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#E94F7A] font-bold">•</span>
              <span>30 dias de calendário de postagens</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E94F7A] font-bold">•</span>
              <span>Scripts anti-vácuo para WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E94F7A] font-bold">•</span>
              <span>Campanhas de recompra e indicação</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              id="confirm-stay-button"
              onClick={onCancelDecline}
              className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 transition-all border border-[#F27598]"
            >
              <span>LIBERAR MEU ACESSO AGORA</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="confirm-decline-button"
              onClick={onConfirmDecline}
              className="w-full py-2.5 px-4 rounded-xl text-xs text-[#5A3A31] hover:text-[#3A241C] transition-colors cursor-pointer hover:bg-[#FFE3D3]"
            >
              Não, prefiro abrir mão e ir apenas para o Bolos Lucrativos
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
