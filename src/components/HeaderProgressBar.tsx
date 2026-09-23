import React from 'react';
import { MailCheck, AlertTriangle } from 'lucide-react';

export const HeaderProgressBar: React.FC = () => {
  return (
    <div className="w-full bg-[#3A241C] text-[#FFE3D3] border-b border-[#2C1B15]">
      {/* Top Banner Alert */}
      <div className="bg-[#E94F7A] text-white px-4 py-2 text-center text-xs sm:text-sm font-black tracking-wide flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0 animate-pulse text-[#FFE3D3]" />
        <span>ATENÇÃO: NÃO FECHE OU ATUALIZE ESTA PÁGINA AINDA</span>
      </div>

      {/* Access Confirmation & Next Step */}
      <div className="max-w-4xl mx-auto px-4 py-3.5 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#2FA866] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 sm:mt-0 shadow-sm">
              <MailCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-xs sm:text-sm">
              <span className="text-[#2FA866] font-extrabold uppercase tracking-wide">Compra Aprovada:</span>{' '}
              <span className="text-white font-medium">Seu acesso já foi enviado para o seu e-mail.</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm font-extrabold text-[#F4B84A] flex items-center gap-1.5 self-start sm:self-auto">
            <span>Passo 2 de 2 • Proposta Exclusiva</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-3 flex items-center gap-3">
          <div className="h-2.5 flex-1 bg-[#231510] rounded-full overflow-hidden p-0.5 border border-[#4A2F25]">
            <div
              className="h-full bg-gradient-to-r from-[#2FA866] via-[#F4B84A] to-[#E94F7A] rounded-full transition-all duration-500"
              style={{ width: '90%' }}
            />
          </div>
          <span className="text-[11px] font-black text-[#FFE3D3] tracking-wider shrink-0">
            90% CONCLUÍDO
          </span>
        </div>
      </div>
    </div>
  );
};
