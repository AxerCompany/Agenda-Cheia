import React, { useState } from 'react';
import { SCRIPT_EXAMPLES } from '../data/upsellData';
import { Sparkles, Check, Lightbulb, Copy, CheckCheck } from 'lucide-react';

export const InteractiveScriptsSimulator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(SCRIPT_EXAMPLES[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeScript = SCRIPT_EXAMPLES.find((s) => s.id === selectedId) || SCRIPT_EXAMPLES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeScript.recommendedResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-3.5 sm:p-6 my-6 shadow-sm w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-3.5 pb-2.5 border-b border-[#F0D5C7]">
        <div className="flex items-center gap-2 text-[#3A241C] font-extrabold text-xs sm:text-sm">
          <Sparkles className="w-4 h-4 text-[#E94F7A] shrink-0" />
          <span>Simulador Interativo de Scripts (Teste ao vivo)</span>
        </div>
        <span className="text-[11px] sm:text-xs text-[#5A3A31] font-medium">Clique na dúvida para ver a resposta:</span>
      </div>

      {/* Tab Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mb-4">
        {SCRIPT_EXAMPLES.map((script) => (
          <button
            key={script.id}
            onClick={() => setSelectedId(script.id)}
            className={`p-2 sm:px-3 sm:py-2.5 rounded-xl text-xs font-bold transition-all text-left flex flex-col gap-0.5 cursor-pointer border min-w-0 ${
              selectedId === script.id
                ? 'bg-[#E94F7A] text-white border-[#E94F7A] shadow-sm font-black'
                : 'bg-[#FFE3D3] text-[#3A241C] border-[#F3CFBE] hover:bg-[#FFD6C2]'
            }`}
          >
            <span className="text-[9px] sm:text-[10px] opacity-80 uppercase tracking-wider truncate">{script.tag}</span>
            <span className="text-[11px] sm:text-xs truncate block">{script.objection}</span>
          </button>
        ))}
      </div>

      {/* WhatsApp Message Mockup */}
      <div className="bg-[#FFE3D3]/60 rounded-2xl p-3 sm:p-4 border border-[#F0D5C7] relative space-y-3 shadow-inner">
        {/* Customer bubble */}
        <div className="flex justify-start">
          <div className="max-w-[92%] sm:max-w-[75%] bg-[#FFF4EC] text-[#3A241C] p-3 rounded-2xl rounded-tl-sm text-xs sm:text-sm border border-[#F0D5C7] shadow-xs">
            <span className="text-[9px] sm:text-[10px] font-extrabold text-[#E94F7A] block mb-0.5 uppercase tracking-wider">Cliente interessada pergunta:</span>
            <p className="font-semibold break-words">{activeScript.customerQuery}</p>
          </div>
        </div>

        {/* You with Agenda Cheia bubble */}
        <div className="flex justify-end">
          <div className="w-full sm:max-w-[85%] bg-[#FFFFFF] border-2 border-[#2FA866]/50 text-[#3A241C] p-3.5 sm:p-4 rounded-2xl rounded-tr-sm text-xs sm:text-sm shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5 pb-1 border-b border-stone-100">
              <span className="text-[10px] font-black text-[#2FA866] uppercase tracking-wider">
                Sua resposta com o Agenda Cheia:
              </span>
              <button
                onClick={handleCopy}
                className="text-[10px] sm:text-[11px] inline-flex items-center gap-1 text-[#E94F7A] hover:text-[#D83D69] font-bold cursor-pointer bg-[#FFF4EC] px-2 py-0.5 rounded-md border border-[#F0D5C7] shrink-0"
              >
                {copied ? <Check className="w-3 h-3 text-[#2FA866]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            <p className="text-[#3A241C] leading-relaxed font-medium break-words">
              {activeScript.recommendedResponse}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#2FA866] font-bold">
              <span>Entregue</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#2FA866]" />
            </div>
          </div>
        </div>

        {/* Strategy Insight */}
        <div className="bg-[#FFF4EC] border border-[#F4B84A] rounded-xl p-2.5 sm:p-3 text-xs text-[#3A241C] flex items-start gap-2 mt-2 shadow-2xs">
          <Lightbulb className="w-4 h-4 text-[#F4B84A] shrink-0 mt-0.5" />
          <p className="break-words">
            <strong className="text-[#3A241C] font-bold">Por que funciona:</strong> {activeScript.salesTip}
          </p>
        </div>
      </div>
    </div>
  );
};
