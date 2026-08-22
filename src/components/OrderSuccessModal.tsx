import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#FFF4EC] border-2 border-[#2FA866] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl text-[#5A3A31] relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-full bg-[#2FA866]/15 border-2 border-[#2FA866] text-[#2FA866] mx-auto flex items-center justify-center mb-4 shadow-sm">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2FA866]/15 text-[#2FA866] text-xs font-black uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Item Adicionado com Sucesso!
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#3A241C] mb-2">
            Parabéns! Seu Acesso Foi Atualizado
          </h3>

          <p className="text-sm text-[#5A3A31] mb-6 leading-relaxed">
            O <strong className="text-[#E94F7A]">Agenda Cheia</strong> foi adicionado ao seu pedido junto com o <strong className="text-[#3A241C]">Bolos Lucrativos</strong>.
          </p>

          <div className="bg-[#FFE3D3] p-4 rounded-2xl border border-[#F3CFBE] text-left mb-6 space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between text-[#3A241C]">
              <span className="font-semibold">Bolos Lucrativos (Manual & Custos):</span>
              <span className="text-[#2FA866] font-extrabold">✓ Confirmado</span>
            </div>
            <div className="flex items-center justify-between text-[#3A241C]">
              <span className="font-semibold">Agenda Cheia (Sistema de Vendas R$37):</span>
              <span className="text-[#2FA866] font-extrabold">✓ Adicionado</span>
            </div>
            <div className="pt-2 border-t border-[#F0CFBE] flex items-center gap-2 text-xs text-[#5A3A31]">
              <Mail className="w-4 h-4 text-[#E94F7A]" />
              <span>Instruções enviadas para seu e-mail e WhatsApp cadastrado.</span>
            </div>
          </div>

          <button
            id="success-modal-continue-button"
            onClick={onClose}
            className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 transition-all border border-[#F27598]"
          >
            <span>ACESSAR MINHA ÁREA DE MEMBROS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mt-4 text-xs text-[#5A3A31] flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2FA866]" />
            <span>Compra 100% Segura e com Garantia de 7 Dias</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
