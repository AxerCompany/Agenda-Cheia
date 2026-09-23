import React, { useEffect } from 'react';
import { CHECKOUT_URL } from '../data/upsellData';

declare global {
  interface Window {
    initWiapyUpsell?: (config: any) => void;
  }
}

export const WiapyUpsell: React.FC = () => {
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
          refusalLinkUrl: 'https://wiapy.com/login',
          refusalLinkText: 'Não, obrigada. Quero continuar sem o plano de vendas.',
          refusalLinkColor: '#8A6A61'
        });
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
      <div id="wiapy_upsell" className="w-full max-w-lg"></div>
    </div>
  );
};
