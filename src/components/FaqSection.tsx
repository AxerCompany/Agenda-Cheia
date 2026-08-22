import React, { useState } from 'react';
import { FAQS } from '../data/upsellData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#3A241C]" />
            Dúvidas Frequentes
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-3">
            Perguntas Frequentes sobre o <span className="text-[#E94F7A]">Agenda Cheia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31]">
            Tire todas as suas dúvidas antes de adicionar ao seu pedido:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#3A241C] cursor-pointer hover:text-[#E94F7A] transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className="w-7 h-7 rounded-xl bg-[#FFF4EC] border border-[#F0D5C7] flex items-center justify-center shrink-0 text-[#E94F7A] shadow-2xs">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 border-t border-[#F0CFBE] text-xs sm:text-sm text-[#5A3A31] leading-relaxed">
                    <div className="bg-[#FFF4EC] p-3.5 rounded-xl border border-[#F0D5C7]">
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
