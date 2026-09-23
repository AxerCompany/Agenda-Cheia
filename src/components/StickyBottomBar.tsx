import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offerSection = document.getElementById('oferta');
      const offerTop = offerSection ? offerSection.getBoundingClientRect().top : Infinity;

      // Show when scrolled down more than 400px, but hide when reaching the offer section
      if (window.scrollY > 400 && offerTop > window.innerHeight * 0.35) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta') || document.getElementById('main-offer-cta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#3A241C] text-white border-t-2 border-[#E94F7A] p-2.5 sm:py-3.5 shadow-2xl overflow-x-hidden"
        >
          <div className="max-w-4xl mx-auto px-3 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            
            <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left w-full sm:w-auto justify-between sm:justify-start">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#FFE3D3] items-center justify-center text-[#E94F7A] shrink-0 font-bold shadow-xs">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] text-[#FFE3D3] font-bold uppercase tracking-wider leading-tight">
                  Sistema de Vendas para Confeitaria
                </div>
                <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                  Agenda Cheia
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                id="sticky-bar-cta-link"
                href="#oferta"
                onClick={handleScrollToOffer}
                className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-xs sm:text-base tracking-wide shadow-lg shadow-[#E94F7A]/30 cursor-pointer flex items-center justify-center gap-2 border border-[#F27598] transition-all no-underline text-center"
              >
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="flex-1 sm:flex-none">SIM! QUERO O AGENDA CHEIA</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </a>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
