import React, { useState } from 'react';
import { FAQS } from '../data/upsellData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-12 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-[11px] sm:text-xs font-extrabold tracking-wider uppercase mb-3 sm:mb-4 border border-[#E5A532] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#3A241C] shrink-0" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A241C] leading-tight mb-2.5 sm:mb-3 break-words">
            Perguntas Frequentes sobre o <span className="text-[#E94F7A]">Agenda Cheia</span>
          </h2>
          <p className="text-xs sm:text-base text-[#5A3A31]">
            Tire suas dúvidas e veja como o Agenda Cheia se aplica na sua rotina:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-xl sm:rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-base text-[#3A241C] cursor-pointer hover:text-[#E94F7A] transition-colors min-w-0"
                >
                  <span className="leading-snug break-words flex-1">{faq.q}</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-[#FFF4EC] border border-[#F0D5C7] flex items-center justify-center shrink-0 text-[#E94F7A] shadow-2xs">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 pt-1 sm:px-5 sm:pb-5 border-t border-[#F0CFBE] text-xs sm:text-sm text-[#5A3A31] leading-relaxed">
                    <div className="bg-[#FFF4EC] p-3 sm:p-3.5 rounded-xl border border-[#F0D5C7] break-words">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
