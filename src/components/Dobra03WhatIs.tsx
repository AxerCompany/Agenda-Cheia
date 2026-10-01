import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

export const Dobra03WhatIs: React.FC = () => {
  const steps = [
    'divulgar seus doces;',
    'chamar clientes pelo WhatsApp;',
    'saber o que postar;',
    'fazer ofertas;',
    'recuperar clientes antigas;',
    'conseguir indicações;',
    'e buscar novos pedidos.'
  ];

  return (
    <section className="py-12 sm:py-18 px-4 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Tag */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
            O Que É o Método
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            Um plano simples para vender mais os doces que você já faz
          </h2>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="text-base sm:text-xl text-[#5A3A31] font-semibold leading-relaxed">
            Você não precisa ficar inventando estratégias todos os dias.
          </p>
        </div>

        {/* Path Checklist Card */}
        <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
          <p className="text-base sm:text-lg font-black text-[#3A241C] mb-4">
            Dentro do Método Agenda Cheia, você recebe um caminho pronto para:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl p-3 sm:p-3.5 flex items-center gap-3 shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#3A241C] leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#F0CFBE] text-center">
            <span className="inline-block bg-[#FFF4EC] text-[#E94F7A] font-extrabold text-sm sm:text-base px-4 py-2 rounded-xl border border-[#E94F7A]/30">
              Tudo de forma simples e fácil de aplicar.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
