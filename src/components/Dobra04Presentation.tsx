import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Instagram, 
  Share2
} from 'lucide-react';

export const Dobra04Presentation: React.FC = () => {
  return (
    <section id="dobra-04" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3A241C]" />
            Visão Geral do Método
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#3A241C] tracking-tight mb-4">
            Conheça o <span className="text-[#E94F7A]">Agenda Cheia</span>
          </h2>

          <p className="text-base sm:text-xl text-[#3A241C] leading-relaxed font-semibold">
            O <strong className="text-[#E94F7A]">Agenda Cheia</strong> é um sistema de vendas para bolos no pote feito para quem quer transformar receitas, preços e produtos prontos em pedidos reais.
          </p>
        </div>

        {/* Core Highlight Box */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/30 rounded-3xl p-6 sm:p-9 shadow-md mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94F7A]/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-black text-[#3A241C] mb-4 text-center sm:text-left">
            Ele te mostra o que fazer depois que você já sabe o que vender.
          </h3>

          <p className="text-[#5A3A31] text-sm sm:text-base leading-relaxed mb-6 font-medium">
            Você vai ter em mãos <strong className="text-[#3A241C]">campanhas prontas</strong>, <strong className="text-[#3A241C]">calendário de postagens</strong>, <strong className="text-[#3A241C]">scripts de venda</strong>, <strong className="text-[#3A241C]">mensagens para clientes antigas</strong>, <strong className="text-[#3A241C]">estratégia de indicação</strong> e um <strong className="text-[#3A241C]">plano de ação</strong> para buscar seus primeiros ou novos pedidos.
          </p>

          {/* Channel badges */}
          <div className="pt-6 border-t border-[#F0CFBE]">
            <p className="text-xs font-bold text-[#E94F7A] uppercase tracking-wider mb-4 text-center sm:text-left">
              Tudo de forma simples, prática e pensada para quem vende pelo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 flex items-center gap-3 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#2FA866] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3A241C]">WhatsApp & Direct</h4>
                  <p className="text-[11px] text-[#5A3A31]">Conversas que fecham pedidos</p>
                </div>
              </div>

              <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 flex items-center gap-3 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#E94F7A] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3A241C]">Instagram & Stories</h4>
                  <p className="text-[11px] text-[#5A3A31]">Desejo visual e bastidores</p>
                </div>
              </div>

              <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 flex items-center gap-3 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#F4B84A] flex items-center justify-center text-[#3A241C] shrink-0 shadow-xs font-black">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3A241C]">Status & Indicação</h4>
                  <p className="text-[11px] text-[#5A3A31]">Vendas sem gastar 1 centavo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
