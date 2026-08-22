import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Zap,
  ShoppingBag
} from 'lucide-react';

interface Dobra10FinalReinforcementProps {
  onAddClick: () => void;
  onDeclineClick: () => void;
}

export const Dobra10FinalReinforcement: React.FC<Dobra10FinalReinforcementProps> = ({ 
  onAddClick, 
  onDeclineClick 
}) => {
  return (
    <section id="dobra-10" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Reinforcement Box */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl sm:rounded-[32px] p-6 sm:p-9 shadow-lg text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-5 border border-[#E5A532] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3A241C]" />
            Última Oportunidade
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#3A241C] leading-tight mb-4">
            Você já deu o primeiro passo ao garantir o Bolos Lucrativos.
          </h2>

          <p className="text-base sm:text-xl font-bold text-[#E94F7A] mb-4">
            Agora, dê o próximo: aprenda a vender todos os dias com uma rotina simples.
          </p>

          <p className="text-sm sm:text-base text-[#5A3A31] leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            Se você quer ter segurança para divulgar, chamar clientes, responder mensagens e buscar pedidos durante a semana, adicione o <strong className="text-[#3A241C]">Agenda Cheia</strong> agora ao seu pedido.
          </p>

          {/* Value Anchor reminder card */}
          <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-4 sm:p-5 max-w-lg mx-auto mb-8 text-left sm:text-center shadow-xs">
            <div className="text-xs text-[#5A3A31] font-semibold mb-1">
              Investimento único de oportunidade:
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#E94F7A]">
              Apenas R$ 37,00
            </div>
            <div className="text-xs text-[#2FA866] font-bold mt-1">
              (Menos que a venda de apenas 3 a 4 potes de bolo!)
            </div>
          </div>

          {/* Primary CTA Button (Rosa Goiaba with White text) */}
          <motion.button
            id="final-cta-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAddClick}
            className="w-full sm:w-auto px-8 py-5 sm:py-6 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-base sm:text-xl tracking-wide shadow-xl shadow-[#E94F7A]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-3 border border-[#F27598] mb-5"
          >
            <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
            <span>SIM, QUERO ADICIONAR AO MEU ACESSO POR R$37</span>
            <ArrowRight className="w-5 h-5 text-white shrink-0 hidden sm:inline-block" />
          </motion.button>

          {/* Micro guarantee badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#5A3A31] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#2FA866]" />
            <span>7 dias de garantia total • Acesso imediato liberado junto com seu acesso principal</span>
          </div>

          {/* Final Decline Link */}
          <div className="border-t border-[#F0CFBE] pt-4">
            <button
              id="final-decline-button"
              onClick={onDeclineClick}
              className="text-xs text-[#5A3A31] hover:text-[#E94F7A] transition-colors underline underline-offset-4 decoration-[#5A3A31]/40 hover:decoration-[#E94F7A] cursor-pointer max-w-md mx-auto block leading-relaxed"
            >
              Não, obrigado. Quero continuar apenas com o Bolos Lucrativos e abrir mão do Agenda Cheia por enquanto.
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
