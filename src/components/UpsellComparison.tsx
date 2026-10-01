import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const UpsellComparison: React.FC = () => {
  const dailyDoubts = [
    '“o que eu posto?”',
    '“como eu chamo uma cliente?”',
    '“o que eu ofereço hoje?”',
    '“como faço quem já comprou comprar de novo?”'
  ];

  return (
    <section className="py-12 sm:py-18 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Dual Headlines */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-[#3A241C] leading-tight">
            O Bolos Lucrativos organiza o que você vai vender.
          </h2>
          <h2 className="text-2xl sm:text-4xl font-black text-[#E94F7A] leading-tight">
            O Agenda Cheia te mostra como vender.
          </h2>
        </div>

        {/* Container */}
        <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
          
          <p className="text-center text-base sm:text-lg font-bold text-[#5A3A31]">
            Você não precisa ficar pensando todos os dias:
          </p>

          {/* Doubt Bubbles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dailyDoubts.map((doubt, idx) => (
              <div 
                key={idx}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-xl sm:rounded-2xl p-4 flex items-center gap-3 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 font-black">
                  ?
                </div>
                <span className="text-sm sm:text-base font-extrabold text-[#3A241C] italic">
                  {doubt}
                </span>
              </div>
            ))}
          </div>

          {/* Solution Callout */}
          <div className="bg-gradient-to-r from-[#FFE3D3] to-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-2xl p-5 sm:p-6 text-center shadow-xs">
            <p className="text-base sm:text-xl font-black text-[#3A241C] leading-snug">
              O <strong className="text-[#E94F7A]">Método Agenda Cheia</strong> te entrega um plano pronto para seguir e aplicar no doce que você vende.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
