import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProgressBarProps {
  onAddClick?: () => void;
}

export const HeaderProgressBar: React.FC<HeaderProgressBarProps> = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#3A241C] text-white shadow-md border-b border-[#2C1B15]">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#2FA866] text-white flex items-center justify-center text-xs font-black shrink-0 shadow-sm">
              ✓
            </div>
            <div className="text-xs sm:text-sm text-stone-200">
              <span className="text-[#2FA866] font-bold">Passo 1 Concluído:</span>{' '}
              <span className="text-[#FFE3D3]">Bolos Lucrativos garantido com sucesso!</span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-[#F4B84A] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B84A] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Passo 2 de 2: Oferta Especial Exclusiva</span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-2.5 flex items-center gap-3">
          <div className="h-2.5 flex-1 bg-[#2C1B15] rounded-full overflow-hidden p-0.5 border border-[#4A2F25]">
            <div
              className="h-full bg-gradient-to-r from-[#2FA866] via-[#F4B84A] to-[#E94F7A] rounded-full transition-all duration-500"
              style={{ width: '85%' }}
            />
          </div>
          <span className="text-[11px] font-bold text-[#FFE3D3] shrink-0">85% CONCLUÍDO</span>
        </div>
      </div>
    </header>
  );
};
