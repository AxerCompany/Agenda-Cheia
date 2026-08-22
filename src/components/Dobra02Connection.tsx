import React from 'react';
import { ChefHat, ShoppingBag, CheckCircle, HelpCircle } from 'lucide-react';

export const Dobra02Connection: React.FC = () => {
  return (
    <section id="dobra-02" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Dual Headlines */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 shadow-xs border border-[#E5A532]">
            A Combinação Perfeita
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-2">
            O Bolos Lucrativos te mostra o que preparar.
          </h2>
          <h3 className="text-2xl sm:text-4xl font-black text-[#E94F7A] leading-tight">
            O Agenda Cheia te mostra como vender.
          </h3>
        </div>

        {/* Synergy Cards Comparison */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch mb-10">
          
          {/* Card: Bolos Lucrativos */}
          <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF4EC] border border-[#F0D5C7] flex items-center justify-center text-[#E94F7A] shadow-xs">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E94F7A] uppercase tracking-wider">Base de Produção</span>
                  <h4 className="text-lg font-black text-[#3A241C]">Bolos Lucrativos</h4>
                </div>
              </div>

              <p className="text-sm text-[#5A3A31] mb-4 leading-relaxed font-medium">
                Com o <strong className="text-[#3A241C] font-bold">Bolos Lucrativos</strong>, você aprende a organizar sua produção:
              </p>

              <ul className="space-y-2.5 text-sm text-[#5A3A31]">
                {[
                  'quais receitas fazer;',
                  'quais ingredientes comprar;',
                  'quanto custa produzir;',
                  'quanto cobrar;',
                  'quanto pode sobrar de lucro;',
                  'e como começar com mais direção.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#2FA866] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0CFBE] text-xs text-[#2FA866] font-bold flex items-center gap-1.5">
              <span>✓ Garantido no seu acesso de hoje</span>
            </div>
          </div>

          {/* Card: The Missing Question & Agenda Cheia */}
          <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94F7A]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#E94F7A] text-white flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E94F7A] uppercase tracking-wider">Aceleração de Pedidos</span>
                  <h4 className="text-lg font-black text-[#3A241C]">Agenda Cheia</h4>
                </div>
              </div>

              {/* The big question quote */}
              <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 mb-4 shadow-xs">
                <div className="flex items-center gap-2 text-[#E94F7A] text-xs font-bold uppercase tracking-wider mb-1">
                  <HelpCircle className="w-4 h-4 text-[#E94F7A]" />
                  Mas depois disso vem outra pergunta:
                </div>
                <p className="text-base sm:text-lg font-black text-[#3A241C] italic">
                  “Tá, mas como eu faço as pessoas pedirem?”
                </p>
              </div>

              <p className="text-sm text-[#5A3A31] mb-2 leading-relaxed font-medium">
                É exatamente aqui que entra o <strong className="text-[#E94F7A] font-bold">Agenda Cheia</strong>.
              </p>
              <p className="text-sm text-[#5A3A31] mb-3 leading-relaxed">
                Ele foi criado para quem não quer ficar parada esperando cliente aparecer.
              </p>
              <p className="text-sm text-[#3A241C] font-semibold leading-relaxed bg-[#FFF4EC] p-3.5 rounded-xl border border-[#F0D5C7]">
                Você recebe um plano pronto para divulgar seus bolos no pote todos os dias, chamar clientes, fechar pedidos e fazer quem já comprou voltar a comprar.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0CFBE] flex items-center justify-between text-xs text-[#3A241C] font-bold">
              <span>Oferta especial disponível nesta página</span>
              <span className="bg-[#2FA866] text-white px-2.5 py-0.5 rounded-full text-[11px] font-black">Adição Imediata</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
