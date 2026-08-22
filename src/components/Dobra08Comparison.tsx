import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export const Dobra08Comparison: React.FC = () => {
  const COMPARISONS = [
    {
      without: 'Fica dependendo só de amigos e parentes comprarem por consideração.',
      with: 'Tem um método ativo para atrair pessoas novas e clientes de verdade.'
    },
    {
      without: 'Posta uma foto aleatória no status e torce para alguém chamar.',
      with: 'Segue uma rotina estratégica de 30 dias com ofertas e temas testados.'
    },
    {
      without: 'Manda o preço cru no WhatsApp e toma vácuo constante.',
      with: 'Usa scripts persuasivos para conduzir o cliente e fechar o pedido.'
    },
    {
      without: 'Esquece de quem já comprou e deixa dinheiro na mesa.',
      with: 'Aplica mensagens de recompra para os mesmos clientes pedirem toda semana.'
    },
    {
      without: 'Vende 1 pote por vez com lucro pequeno.',
      with: 'Oferece combos irresistíveis de 2 a 4 potes aumentando o faturamento.'
    }
  ];

  return (
    <section id="dobra-08" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            Comparativo Direto
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-3">
            O que muda na sua rotina com o <span className="text-[#E94F7A]">Agenda Cheia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31]">
            A diferença prática entre quem improvisa e quem tem um sistema de vendas:
          </p>
        </div>

        {/* Side by side comparison table / blocks */}
        <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-5 sm:p-8 shadow-sm">
          
          {/* Table Headers */}
          <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-[#F0CFBE] mb-4">
            <div className="text-center sm:text-left font-black text-sm text-[#3A241C] flex items-center justify-center sm:justify-start gap-2">
              <span className="w-5 h-5 rounded-full bg-[#E94F7A]/20 text-[#E94F7A] inline-flex items-center justify-center text-xs">✕</span>
              <span>Sem o Agenda Cheia</span>
            </div>
            <div className="text-center sm:text-left font-black text-sm text-[#E94F7A] flex items-center justify-center sm:justify-start gap-2">
              <span className="w-5 h-5 rounded-full bg-[#2FA866] text-white inline-flex items-center justify-center text-xs">✓</span>
              <span>Com o Agenda Cheia</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {COMPARISONS.map((row, index) => (
              <div
                key={index}
                className="grid sm:grid-cols-2 gap-3.5 items-center p-3 rounded-2xl bg-[#FFF4EC] border border-[#F0D5C7]"
              >
                {/* Without */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A3A31]">
                  <X className="w-4 h-4 text-[#E94F7A] shrink-0 mt-0.5" />
                  <span>{row.without}</span>
                </div>

                {/* With */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A241C] font-extrabold bg-[#FFFFFF] p-2.5 rounded-xl border border-[#2FA866]/30 shadow-2xs">
                  <Check className="w-4 h-4 text-[#2FA866] shrink-0 mt-0.5 stroke-[3]" />
                  <span>{row.with}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
