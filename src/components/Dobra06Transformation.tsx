import React from 'react';
import { 
  Sparkles, 
  X, 
  Check, 
  Eye, 
  Send, 
  DollarSign, 
  Users
} from 'lucide-react';

export const Dobra06Transformation: React.FC = () => {
  const CONTRASTS = [
    {
      before: 'Em vez de acordar sem saber o que postar…',
      after: 'Você olha o calendário e sabe exatamente qual oferta divulgar.',
      icon: Eye
    },
    {
      before: 'Em vez de travar para chamar uma cliente…',
      after: 'Você usa uma mensagem pronta e adapta do seu jeito.',
      icon: Send
    },
    {
      before: 'Em vez de perder venda quando alguém pergunta preço…',
      after: 'Você tem scripts simples para responder e conduzir o pedido.',
      icon: DollarSign
    },
    {
      before: 'Em vez de vender uma vez e sumir…',
      after: 'Você aprende a chamar clientes antigas para comprar de novo.',
      icon: Users
    }
  ];

  return (
    <section id="dobra-06" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3A241C]" />
            Sua Nova Realidade
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-4">
            Imagine ter uma direção clara para divulgar seus bolos todos os dias
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31]">
            Veja a diferença de vender com método em vez de tentar adivinhar tudo sozinha:
          </p>
        </div>

        {/* Before vs After Cards */}
        <div className="space-y-4 mb-10">
          {CONTRASTS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-4 sm:p-5 grid sm:grid-cols-2 gap-4 items-center shadow-xs"
            >
              {/* Before state */}
              <div className="flex items-start gap-3 bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7]">
                <div className="w-6 h-6 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-[#5A3A31] font-medium">
                  {item.before}
                </span>
              </div>

              {/* After state with Agenda Cheia */}
              <div className="flex items-start gap-3 bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#2FA866]/40 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#2FA866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-[#3A241C] font-extrabold">
                  {item.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Goal Banner */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-8 text-center shadow-md">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#E94F7A] font-black mb-2">
            O objetivo do Agenda Cheia é simples:
          </p>
          <h3 className="text-xl sm:text-3xl font-black text-[#3A241C] leading-tight">
            te ajudar a transformar seus bolos no pote em pedidos durante a semana.
          </h3>
        </div>

      </div>
    </section>
  );
};
