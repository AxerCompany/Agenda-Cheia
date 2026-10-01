import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

export const UpsellRoutine: React.FC = () => {
  const routinePoints = [
    'divulgar',
    'chamar clientes',
    'criar ofertas',
    'buscar novos pedidos',
    'vender novamente para quem já comprou'
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F0D5C7]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Versatilidade Total</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            Use o mesmo método para vender qualquer tipo de doce
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-[#5A3A31] font-medium leading-relaxed max-w-2xl mx-auto mt-4">
            <p>
              Hoje você pode começar com <strong className="text-[#3A241C] font-black">bolo no pote</strong>.
            </p>
            <p>
              Amanhã pode adicionar brigadeiros, brownies, trufas, sobremesas, bolos ou outros doces ao seu cardápio.
            </p>
            <p className="font-bold text-[#E94F7A]">
              O Agenda Cheia continua funcionando, porque o método não depende de uma receita específica.
            </p>
          </div>
        </div>

        {/* Routine Card */}
        <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-4">
          <p className="text-base sm:text-lg font-black text-[#3A241C]">
            Ele te ensina a parte que todo negócio de doces precisa:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {routinePoints.map((point, idx) => (
              <div 
                key={idx}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#3A241C]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
