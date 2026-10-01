import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Layers } from 'lucide-react';
import bundleImg from '../assets/images/agenda_cheia_bundle_1790864748108.jpg';

export const Dobra05Benefit: React.FC = () => {
  const routineItems = [
    'Você sabe o que divulgar.',
    'Sabe quem chamar.',
    'Sabe o que oferecer.',
    'E sabe como fazer clientes antigas lembrarem de você novamente.'
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
            A Transformação na Sua Rotina
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            Você não precisa mais ficar sem saber o que fazer para vender
          </h2>
        </div>

        {/* Contrast Card */}
        <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm mb-8 space-y-5">
          
          <div className="text-center">
            <span className="text-sm sm:text-lg font-bold text-[#8A6A61] line-through decoration-[#E94F7A]">
              Em vez de postar uma foto e esperar...
            </span>
            <p className="text-xl sm:text-3xl font-black text-[#3A241C] mt-2">
              Você passa a ter uma rotina.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {routineItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-[#2FA866]/15 text-[#2FA866] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#3A241C] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Core Goal Quote */}
          <div className="bg-gradient-to-r from-[#FFE3D3] to-[#FFF4EC] border-2 border-[#E94F7A]/40 rounded-2xl p-5 sm:p-7 text-center space-y-2">
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#5A3A31]">
              O objetivo do <strong className="text-[#3A241C]">Método Agenda Cheia</strong> é simples:
            </p>
            <h3 className="text-xl sm:text-3xl font-black text-[#E94F7A] leading-tight">
              te ajudar a transformar seus doces em pedidos com mais frequência.
            </h3>
          </div>

        </div>

        {/* [ESPAÇO PARA MOCKUP + EXEMPLOS DOS MATERIAIS JUNTOS] */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#E94F7A]" />
              <span className="text-xs sm:text-sm font-black text-[#3A241C] uppercase tracking-wider">
                Todos os Materiais Juntos
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#E94F7A] bg-[#FFF4EC] px-3 py-1 rounded-full border border-[#F0D5C7]">
              Acesso Digital Completo
            </span>
          </div>

          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#F0D5C7] bg-[#FFF4EC] group">
            <img 
              src={bundleImg} 
              alt="Mockup do Método Agenda Cheia com todos os materiais juntos" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px] mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="mt-3 text-center">
            <p className="text-xs sm:text-sm text-[#5A3A31] font-semibold">
              Calendário 30 Dias + Campanhas WhatsApp + Scripts de Fechamento + Sistema de Recompra + Indicação + Plano de Pedidos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
