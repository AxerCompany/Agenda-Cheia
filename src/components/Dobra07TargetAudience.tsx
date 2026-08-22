import React from 'react';
import { Check, X, Users, Sparkles } from 'lucide-react';

export const Dobra07TargetAudience: React.FC = () => {
  const FOR_WHOM = [
    'para quem acabou de comprar o Bolos Lucrativos;',
    'para quem quer começar a vender da forma certa;',
    'para quem já faz bolo no pote, mas vende pouco;',
    'para quem tem vergonha ou trava para chamar clientes;',
    'para quem quer ter uma rotina simples de divulgação sem complicação.'
  ];

  const NOT_FOR_WHOM = [
    'quem acha que só ter uma boa receita vai fazer o cliente brotar sozinho;',
    'quem quer fórmulas mágicas ou atalhos milagrosos sem aplicar nada;',
    'quem não tem disposição para mandar mensagens ou postar seus bolos.'
  ];

  return (
    <section id="dobra-07" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#3A241C]" />
            Alinhamento de Expectativas
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-3">
            Para quem é o <span className="text-[#E94F7A]">Agenda Cheia</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31]">
            Veja com clareza se este sistema foi feito sob medida para o seu momento:
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Column 1: For Whom (Positive) */}
          <div className="bg-[#FFE3D3] border-2 border-[#2FA866]/40 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#F0CFBE]">
              <div className="w-8 h-8 rounded-full bg-[#2FA866] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                ✓
              </div>
              <h3 className="text-lg font-black text-[#3A241C]">
                Este sistema É para você que:
              </h3>
            </div>

            <ul className="space-y-3.5">
              {FOR_WHOM.map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-[#FFF4EC] p-3 rounded-2xl border border-[#F0D5C7]">
                  <div className="w-5 h-5 rounded-full bg-[#2FA866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#3A241C] font-semibold leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Not For Whom (Negative) */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#F0CFBE]">
              <div className="w-8 h-8 rounded-full bg-[#E94F7A]/20 text-[#E94F7A] flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="text-lg font-black text-[#3A241C]">
                NÃO é para quem:
              </h3>
            </div>

            <ul className="space-y-3.5">
              {NOT_FOR_WHOM.map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-[#FFF4EC] p-3 rounded-2xl border border-[#F0D5C7]">
                  <div className="w-5 h-5 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#5A3A31] font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-[#F0CFBE] text-xs text-[#5A3A31] italic">
              Buscamos confeiteiras e produtoras comprometidas em aplicar um passo a passo prático para colher resultados reais.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
