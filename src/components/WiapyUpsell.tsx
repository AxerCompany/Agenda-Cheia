import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/upsellData';

declare global {
  interface Window {
    initWiapyUpsell?: (config: any) => void;
  }
}

interface WiapyUpsellProps {
  onDeclineClick?: () => void;
}

export const WiapyUpsell: React.FC<WiapyUpsellProps> = ({ onDeclineClick }) => {
  const [isMountedInWiapy, setIsMountedInWiapy] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intercept refusal link click in capture phase to show discount downsell popup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleCaptureClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (link) {
        // Intercept refusal link click
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (onDeclineClick) {
          onDeclineClick();
        }
      }
    };

    container.addEventListener('click', handleCaptureClick, true);
    return () => {
      container.removeEventListener('click', handleCaptureClick, true);
    };
  }, [onDeclineClick]);

  useEffect(() => {
    const runInit = () => {
      if (typeof window.initWiapyUpsell === 'function') {
        window.initWiapyUpsell({
          elementId: 'wiapy_upsell',
          linkUrl: CHECKOUT_URL,
          linkText: 'SIM! QUERO ADICIONAR O AGENDA CHEIA POR R$37',
          styles: {
            backgroundColor: '#E94F7A',
            hoverBackgroundColor: '#D83D69',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '900',
            padding: '18px 24px',
            borderRadius: '16px',
            border: '1px solid #F27598',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            hoverTransform: 'scale(1.02)'
          },
          refusalLinkUrl: '#recusar',
          refusalLinkText: 'Não, obrigada. Quero continuar sem o plano de vendas.',
          refusalLinkColor: '#8A6A61'
        });
        setIsMountedInWiapy(true);
      }
    };

    if (typeof window.initWiapyUpsell === 'function') {
      runInit();
    } else {
      const timer = setInterval(() => {
        if (typeof window.initWiapyUpsell === 'function') {
          clearInterval(timer);
          runInit();
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="w-full my-4 flex flex-col items-center">
      {/* Wiapy Upsell Target Container */}
      <div
        ref={containerRef}
        id="wiapy_upsell"
        className="w-full max-w-lg [&_a]:underline [&_a]:decoration-[#8A6A61]/50 [&_a]:hover:text-[#3A241C] [&_a]:hover:decoration-[#3A241C] [&_a]:transition-colors [&_a]:cursor-pointer [&_button]:shadow-xl [&_button]:shadow-[#E94F7A]/25"
      ></div>

      {/* Fallback CTA if Wiapy script is blocked or hasn't loaded */}
      {!isMountedInWiapy && (
        <div className="w-full max-w-lg space-y-3">
          <a
            href={CHECKOUT_URL}
            className="w-full py-4 px-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base shadow-xl shadow-[#E94F7A]/25 flex items-center justify-center gap-2 border border-[#F27598] no-underline transition-all cursor-pointer text-center"
          >
            <span>SIM! QUERO ADICIONAR O AGENDA CHEIA POR R$37</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
          <button
            type="button"
            onClick={onDeclineClick}
            className="w-full block text-center text-xs sm:text-sm text-[#8A6A61] hover:text-[#3A241C] underline cursor-pointer transition-colors"
          >
            Não, obrigada. Quero continuar sem o plano de vendas.
          </button>
        </div>
      )}
    </div>
  );
};
