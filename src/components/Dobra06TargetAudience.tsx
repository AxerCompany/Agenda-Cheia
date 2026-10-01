import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, UserCheck } from 'lucide-react';

export const Dobra06TargetAudience: React.FC = () => {
  const points = [
    'está começando a vender doces;',
    'já vende, mas os pedidos são irregulares;',
    'não sabe o que postar;',
    'posta no status e pouca gente chama;',
    'não sabe como oferecer seus produtos;',
    'quer vender novamente para clientes antigas;',
    'quer conseguir novos pedidos;',
    'quer uma rotina simples de vendas para seguir.'
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
            Identificação
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            O Método Agenda Cheia é para você que:
          </h2>
        </div>

        {/* Checklist Card */}
        <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {points.map((point, index) => (
              <div 
                key={index}
                className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs hover:border-[#E94F7A]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#3A241C] leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#F0CFBE] text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#5A3A31]">
              Se você se identificou com pelo menos 1 desses pontos, você está a um passo de destravar sua rotina de vendas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
