import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, XCircle, ArrowRight, Sparkles } from 'lucide-react';

export const Dobra02Problem: React.FC = () => {
  const painPoints = [
    'Não sabe o que postar.',
    'Não sabe como chamar clientes.',
    'Não sabe como fazer uma oferta.',
    'Não sabe como fazer quem já comprou voltar.'
  ];

  return (
    <section className="py-12 sm:py-18 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Tag */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
            A Realidade de Quem Vende Doces
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            Fazer um doce gostoso não é suficiente
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-5">
          
          <div className="space-y-3 text-base sm:text-lg font-medium text-[#3A241C] leading-relaxed">
            <p>
              Você pode ter boas receitas e saber quanto cobrar.
            </p>
            <p className="font-semibold">
              Mas ainda precisa fazer as pessoas saberem que você está vendendo.
            </p>
            <div className="bg-[#FFF4EC] border-l-4 border-[#E94F7A] p-3.5 sm:p-4 rounded-r-xl">
              <p className="font-black text-[#E94F7A] text-lg sm:text-xl">
                É nessa parte que muita gente trava.
              </p>
            </div>
          </div>

          {/* Pain point list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-4 flex items-center gap-3 shadow-2xs hover:border-[#E94F7A]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 font-bold">
                  ✕
                </div>
                <span className="text-sm sm:text-base font-bold text-[#3A241C]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Consequence callout */}
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center space-y-2">
            <p className="text-base sm:text-lg font-extrabold text-[#8A4432]">
              E acaba esperando alguém aparecer.
            </p>
          </div>

          {/* Bridge to Solution */}
          <div className="bg-gradient-to-r from-[#E94F7A]/10 to-[#F4B84A]/10 border-2 border-[#E94F7A]/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center">
            <p className="text-base sm:text-xl font-black text-[#3A241C] leading-snug">
              O <span className="text-[#E94F7A]">Método Agenda Cheia</span> te mostra o que fazer para movimentar seus pedidos durante a semana.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
