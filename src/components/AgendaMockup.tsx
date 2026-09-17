import React from 'react';
import { Calendar, MessageSquare, Sparkles, ShoppingBag, CheckCircle2, ShieldCheck, Target } from 'lucide-react';

export const MOCKUP_IMAGE_URL = "https://i.postimg.cc/3Rh8CHSD/Chat-GPT-Image-17-de-set-de-2026-20-37-33.webp";

export const AgendaMockup: React.FC = () => {
  return (
    <div className="my-8 sm:my-10 max-w-2xl mx-auto">
      {/* Mockup Container Frame */}
      <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/30 rounded-3xl p-4 sm:p-7 shadow-xl relative overflow-hidden text-center">
        
        {/* High-Resolution Mockup Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F0D5C7] bg-[#FFF4EC] mb-6 group">
          <img 
            src={MOCKUP_IMAGE_URL} 
            alt="Mockup do Desafio 5K com Doces — Sistema de Vendas" 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[580px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Micro Features / Highlights Banner below mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
          
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl p-2.5 shadow-2xs">
            <span className="text-[10px] uppercase font-black text-[#E94F7A] block">Meta 30 Dias</span>
            <p className="text-xs font-bold text-[#3A241C] leading-tight">Plano de Ação 5K</p>
          </div>

          <div className="bg-[#FFF4EC] border border-[#2FA866]/30 rounded-xl p-2.5 shadow-2xs">
            <span className="text-[10px] uppercase font-black text-[#2FA866] block">WhatsApp</span>
            <p className="text-xs font-bold text-[#3A241C] leading-tight">Campanhas Prontas</p>
          </div>

          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-xl p-2.5 shadow-2xs">
            <span className="text-[10px] uppercase font-black text-[#E94F7A] block">Fechamento</span>
            <p className="text-xs font-bold text-[#3A241C] leading-tight">Scripts de Vendas</p>
          </div>

          <div className="bg-[#FFF4EC] border border-[#F4B84A]/40 rounded-xl p-2.5 shadow-2xs">
            <span className="text-[10px] uppercase font-black text-[#5A3A31] block">Recorrência</span>
            <p className="text-xs font-bold text-[#3A241C] leading-tight">Recompra & Indicação</p>
          </div>

        </div>

      </div>
    </div>
  );
};
