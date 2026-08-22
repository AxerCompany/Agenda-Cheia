import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface StickyBottomBarProps {
  onAddClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onAddClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 600px
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#3A241C] text-white border-t-2 border-[#E94F7A] p-3 sm:py-3.5 shadow-2xl"
        >
          <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#FFE3D3] items-center justify-center text-[#E94F7A] shrink-0 font-bold shadow-xs">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-[11px] text-[#FFE3D3] font-bold uppercase tracking-wider">
                  Oportunidade Especial de Acesso:
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  Agenda Cheia <span className="text-[#F4B84A] font-black">• R$ 37,00</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                id="sticky-bar-cta-button"
                onClick={onAddClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base tracking-wide shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 border border-[#F27598] whitespace-nowrap transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>QUERO MINHA AGENDA CHEIA POR R$37</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
