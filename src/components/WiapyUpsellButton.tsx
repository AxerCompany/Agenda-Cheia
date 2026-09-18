import React, { useEffect } from 'react';

declare global {
  interface Window {
    initWiapyUpsell?: (config: {
      elementId?: string;
      linkUrl: string;
      linkText: string;
      styles?: {
        backgroundColor?: string;
        hoverBackgroundColor?: string;
        fontSize?: string;
        borderRadius?: string;
        padding?: string;
        fontWeight?: string;
        color?: string;
      };
      refusalLinkUrl?: string;
      refusalLinkText?: string;
      refusalLinkColor?: string;
    }) => void;
  }
}

interface WiapyUpsellButtonProps {
  elementId?: string;
  linkText?: string;
}

export const WiapyUpsellButton: React.FC<WiapyUpsellButtonProps> = ({
  elementId = 'wiapy_upsell',
  linkText = 'SIM, EU ACEITO ESSA OFERTA'
}) => {
  useEffect(() => {
    const initUpsell = () => {
      if (typeof window.initWiapyUpsell === 'function') {
        window.initWiapyUpsell({
          elementId,
          linkUrl: 'https://pay.wiapy.com/checkout/6a89032f8ec0ece76924f02d',
          linkText,
          styles: {
            backgroundColor: '#00d769',
            hoverBackgroundColor: '#00b85a',
            fontSize: '17px',
            borderRadius: '10px',
            padding: '16px 28px',
            fontWeight: '800'
          },
          refusalLinkUrl: 'https://wiapy.com/login',
          refusalLinkText: 'Recusar está oferta',
          refusalLinkColor: '#5A3A31'
        });
      }
    };

    // Try immediately and with small delay if script is still loading
    initUpsell();
    const timer = setTimeout(initUpsell, 400);

    return () => clearTimeout(timer);
  }, [elementId, linkText]);

  return (
    <div className="w-full flex flex-col items-center justify-center my-2">
      {/* Container targeted by Wiapy script */}
      <div id={elementId} className="w-full max-w-md mx-auto">
        {/* Fallback button in case script takes a moment */}
        <a
          href="https://pay.wiapy.com/checkout/6a89032f8ec0ece76924f02d"
          className="block w-full text-center py-4 px-6 rounded-[10px] bg-[#00d769] hover:bg-[#00b85a] text-white font-extrabold text-[17px] tracking-wide transition-all shadow-lg shadow-[#00d769]/25 no-underline"
        >
          {linkText}
        </a>
        <a
          href="https://wiapy.com/login"
          className="block mt-3 text-sm text-[#5A3A31] hover:text-[#3A241C] text-center font-semibold underline underline-offset-2"
        >
          Recusar está oferta
        </a>
      </div>
    </div>
  );
};
