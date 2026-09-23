import React from 'react';
import { Sparkles, CheckCircle2, Check } from 'lucide-react';

export const AllSweetsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-18 px-3.5 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 border border-[#F3CFBE]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Serve para Todo o Seu Cardápio</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight mb-3 break-words">
            Você vende outros doces além do bolo no pote? O <span className="text-[#E94F7A]">Agenda Cheia</span> funciona para você também.
          </h2>

          <p className="text-xs sm:text-base text-[#5A3A31] font-medium max-w-2xl mx-auto leading-relaxed">
            A psicologia de compra de quem deseja uma sobremesa artesanal é sempre a mesma: o cliente compra pelo desejo visual na hora certa e pela facilidade de pedir pelo WhatsApp.
          </p>
        </div>

        {/* Versatility Card */}
        <div className="mb-6">
          <div className="bg-[#3A241C] text-[#FFE3D3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden border border-[#4A2F25]">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#F4B84A] mb-2.5">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#F4B84A]" />
              <span>100% Adaptável</span>
            </div>
            
            <h3 className="text-lg sm:text-2xl font-black text-white leading-snug mb-2 break-words">
              Qualquer doce que você colocar no seu cardápio
            </h3>
            
            <p className="text-sm sm:text-base text-[#FFE3D3]/90 leading-relaxed max-w-2xl">
              Você não precisa reaprender tudo do zero se mudar o sabor ou o tipo de doce. O sistema de vendas é o mesmo.
            </p>

            <div className="mt-4 pt-3.5 border-t border-[#4A2F25] flex items-center gap-2 text-xs sm:text-sm text-[#F4B84A] font-bold">
              <Check className="w-4 h-4 shrink-0 stroke-[3]" />
              <span>Basta aplicar os mesmos roteiros e horários</span>
            </div>
          </div>
        </div>

        {/* Reassurance Callout Box */}
        <div className="bg-[#FFF4EC] border-2 border-[#2FA866]/30 rounded-2xl p-4 sm:p-5 space-y-2 text-left shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#2FA866]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Por que o método não depende de uma única receita:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#3A241C] font-semibold leading-relaxed">
            O Agenda Cheia não ensina receitas — ele ensina a <strong>atrair a atenção de quem quer comer um doce, quebrar a hesitação no WhatsApp e fechar o pedido na hora</strong>. Não importa se o doce está dentro de um pote, numa embalagem de fatia ou numa marmitinha: quem usa o método tem pedidos todos os dias.
          </p>
        </div>

      </div>
    </section>
  );
};
