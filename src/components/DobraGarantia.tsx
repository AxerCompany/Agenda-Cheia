import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const DobraGarantia: React.FC = () => {
  return (
    <section className="py-12 sm:py-18 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        <div className="bg-[#FFF4EC] border-2 border-[#2FA866] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2FA866]/15 border-2 border-[#2FA866] text-[#2FA866] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
          </div>

          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2FA866]">
              <span>Garantia Incondicional</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#3A241C] leading-tight">
              Você tem 7 dias para conhecer o Método Agenda Cheia
            </h3>

            <p className="text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed">
              Acesse o material, veja como funciona e comece a aplicar.
            </p>

            <p className="text-xs sm:text-sm text-[#5A3A31] font-medium leading-relaxed">
              Se dentro do período de garantia você decidir que não é para você, basta solicitar o reembolso conforme as condições da plataforma.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
