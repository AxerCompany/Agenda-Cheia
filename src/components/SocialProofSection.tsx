import React from 'react';
import { Star, MessageCircle, CheckCheck, TrendingUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS, SOCIAL_PROOF_STATS } from '../data/upsellData';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FFE3D3]/40 border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4EC] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F0D5C7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados de Quem Já Está Aplicando</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight mb-3">
            O que acontece quando você troca o improviso por um método de vendas
          </h2>

          <p className="text-sm sm:text-base text-[#5A3A31] font-medium max-w-2xl mx-auto">
            Mais de <strong className="text-[#3A241C] font-black">{SOCIAL_PROOF_STATS.studentsCount} confeiteiras</strong> já destravam pedidos diários sem precisar ficar implorando por clientes.
          </p>
        </div>

        {/* Stats Strip - Zero Pill Discipline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-[#E94F7A]">
              {SOCIAL_PROOF_STATS.studentsCount}
            </span>
            <span className="text-xs font-bold text-[#5A3A31] mt-1 block">
              Alunas aplicando
            </span>
          </div>

          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-[#2FA866]">
              {SOCIAL_PROOF_STATS.satisfactionRate}
            </span>
            <span className="text-xs font-bold text-[#5A3A31] mt-1 block">
              Taxa de satisfação
            </span>
          </div>

          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-[#F4B84A]">
              {SOCIAL_PROOF_STATS.rating}
            </span>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#F4B84A] text-[#F4B84A]" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-[#5A3A31] mt-0.5 block">
              Nota média
            </span>
          </div>

          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-[#3A241C]">
              24 a 48h
            </span>
            <span className="text-xs font-bold text-[#5A3A31] mt-1 block">
              Para primeiros pedidos
            </span>
          </div>
        </div>

        {/* WhatsApp Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* WhatsApp Chat Styled Card */}
              <div>
                {/* Header with avatar & name */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#F0D5C7]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E94F7A]/30 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-[#3A241C] truncate">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-[#8A6A61] truncate font-medium">
                      {item.city}
                    </p>
                  </div>
                </div>

                {/* Speech Bubble (WhatsApp style) */}
                <div className="bg-[#FFE3D3]/60 rounded-2xl p-3.5 border border-[#F3CFBE] text-xs sm:text-sm text-[#3A241C] leading-relaxed mb-4 relative">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#2FA866] font-extrabold mb-1.5">
                    <MessageCircle className="w-3 h-3" />
                    <span>Mensagem no WhatsApp</span>
                  </div>
                  <p className="italic">
                    "{item.message}"
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#8A6A61] mt-2">
                    <span>{item.timeAgo}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#2FA866]" />
                  </div>
                </div>
              </div>

              {/* Result Pill */}
              <div className="bg-[#FFE3D3] p-2.5 rounded-xl border border-[#F3CFBE] flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#2FA866] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#8A6A61] block leading-none">Resultado</span>
                  <span className="text-xs font-black text-[#3A241C] truncate block">{item.highlight}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small reassuring note */}
        <p className="text-center text-xs text-[#8A6A61] mt-6 font-medium">
          Depoimentos reais enviados por alunas que aplicaram o passo a passo nos primeiros dias.
        </p>

      </div>
    </section>
  );
};
