import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MessageSquareShare, 
  Sparkles, 
  RotateCcw, 
  UsersRound, 
  Rocket, 
  Check, 
  Copy,
  CheckCheck
} from 'lucide-react';
import { CALENDAR_SAMPLE, SCRIPT_EXAMPLES } from '../data/upsellData';

export const UpsellDeliverables: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#FFF4EC] border-b border-[#F0D5C7] overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] block mb-2">
            Conteúdo Prático
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight">
            Você vai receber:
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">

          {/* ========================================================
              ITEM 1: 📅 Calendário de Vendas de 30 Dias
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#E94F7A] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  📅 Calendário de Vendas de 30 Dias
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Saiba o que divulgar durante o mês sem ficar inventando postagem todos os dias.
                </p>
              </div>
            </div>

            {/* [ESPAÇO PARA EXEMPLO DO CALENDÁRIO] */}
            <div className="mt-5 bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-3 border-b border-[#F0CFBE] pb-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-[#E94F7A] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Exemplo do Calendário na Prática
                </span>
                <span className="text-[11px] font-bold text-[#8A6A61] bg-[#FFE3D3] px-2 py-0.5 rounded-full">
                  Semana Ativa
                </span>
              </div>

              <div className="space-y-2.5">
                {CALENDAR_SAMPLE.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#FFE3D3]/60 border border-[#F3CFBE] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#E94F7A] bg-[#FFF4EC] px-2.5 py-1 rounded-lg border border-[#F0D5C7] shrink-0">
                        {item.day.split('-')[0]}
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#3A241C] leading-snug">
                          {item.theme}
                        </p>
                        <p className="text-[11px] text-[#5A3A31] line-clamp-1">
                          {item.action}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#8A6A61] bg-[#FFF4EC] px-2 py-0.5 rounded shrink-0 self-start sm:self-auto">
                      {item.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* ========================================================
              ITEM 2: 📲 Campanhas Prontas para WhatsApp
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#2FA866] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <MessageSquareShare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  📲 Campanhas Prontas para WhatsApp
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Mensagens prontas para divulgar seus doces, chamar clientes e movimentar pedidos.
                </p>
              </div>
            </div>

            {/* [ESPAÇO PARA EXEMPLO DAS MENSAGENS] */}
            <div className="mt-5 bg-[#E6DDD4] border border-[#D5C7BB] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-inner">
              <div className="bg-[#075E54] text-white p-2.5 rounded-t-xl flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    🍰
                  </div>
                  <span>Exemplo de Mensagem Pronta</span>
                </div>
                <span className="text-[10px] opacity-80">WhatsApp Direct / Status</span>
              </div>

              <div className="bg-[#EFEAE2] p-4 rounded-b-xl space-y-3">
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs text-xs sm:text-sm text-[#202C33] leading-relaxed max-w-md border border-[#E0D8CE]">
                  <p className="font-semibold mb-1">
                    Oi! Passando rapidinho para avisar: 🍓✨
                  </p>
                  <p className="mb-2">
                    Acabaram de sair da produção nossos potes fresquinhos de hoje: Ninho com Nutella e Morango com Chocolate Nobre!
                  </p>
                  <p className="font-bold text-[#E94F7A] mb-2">
                    🔥 Só separei 10 potes para a rota das 15h. Quem pedir a duplinha hoje leva com condição especial!
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Quer que eu reserve o seu antes de fechar a rota? 🥰
                  </p>
                  <span className="text-[10px] text-gray-400 block text-right mt-1">11:15 ✓✓</span>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleCopy('campanha-zap-deliverable', 'Oi! Passando rapidinho para avisar: 🍓✨ Acabaram de sair da produção nossos potes fresquinhos de hoje...')}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#075E54] bg-white px-3 py-1.5 rounded-full shadow-xs border border-[#075E54]/20 cursor-pointer hover:bg-gray-50"
                  >
                    {copiedId === 'campanha-zap-deliverable' ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-[#2FA866]" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar mensagem</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* ========================================================
              ITEM 3: 💬 Scripts para Fechar Pedidos
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#E94F7A] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  💬 Scripts para Fechar Pedidos
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Saiba o que responder quando uma cliente perguntar preço, sabores, entrega ou disser que vai pensar.
                </p>
              </div>
            </div>

            {/* [ESPAÇO PARA EXEMPLO DOS SCRIPTS] */}
            <div className="mt-5 space-y-3">
              {SCRIPT_EXAMPLES.slice(0, 2).map((script) => (
                <div 
                  key={script.id}
                  className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl sm:rounded-2xl p-4 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-[#E94F7A] uppercase tracking-wider bg-[#FFE3D3] px-2.5 py-0.5 rounded-full border border-[#F3CFBE]">
                      {script.objection}
                    </span>
                    <span className="text-[10px] font-bold text-[#8A6A61]">Resposta Pronta</span>
                  </div>

                  <div className="bg-[#FFE3D3]/50 p-2.5 rounded-lg mb-2 text-xs text-[#5A3A31] italic">
                    Cliente: "{script.customerQuery}"
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#F0D5C7] text-xs sm:text-sm text-[#3A241C] leading-relaxed">
                    <p className="font-medium">{script.recommendedResponse}</p>
                  </div>

                  <p className="text-[11px] text-[#2FA866] font-bold mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Dica: {script.salesTip}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* ========================================================
              ITEM 4: 🔁 Sistema de Recompra
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#2FA866] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  🔁 Sistema de Recompra
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Aprenda como chamar quem já comprou para fazer um novo pedido.
                </p>
              </div>
            </div>
          </div>


          {/* ========================================================
              ITEM 5: 🤝 Campanha de Indicação
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#F4B84A] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <UsersRound className="w-5 h-5 sm:w-6 sm:h-6 text-[#3A241C]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  🤝 Campanha de Indicação
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Use suas próprias clientes para fazer seus doces chegarem até novas pessoas.
                </p>
              </div>
            </div>
          </div>


          {/* ========================================================
              ITEM 6: 🚀 Plano para Primeiros ou Novos Pedidos
             ======================================================== */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF4EC] text-[#E94F7A] flex items-center justify-center shrink-0 border border-[#F0D5C7] shadow-2xs">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3A241C]">
                  🚀 Plano para Primeiros ou Novos Pedidos
                </h3>
                <p className="text-sm sm:text-base text-[#5A3A31] font-medium mt-1">
                  Um passo a passo simples para quem está começando e também para quem já vende, mas quer movimentar mais as encomendas.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
