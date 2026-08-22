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
    <div className="bg-[#FFF4EC] border border-[#F0D5C7] rounded-2xl p-5 sm:p-6 my-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#F0D5C7]">
        <div className="flex items-center gap-2 text-[#3A241C] font-extrabold text-sm">
          <Sparkles className="w-4 h-4 text-[#E94F7A]" />
          <span>Simulador Interativo de Scripts (Teste ao vivo)</span>
        </div>
        <span className="text-xs text-[#5A3A31] font-medium">Clique na dúvida para ver a resposta:</span>
      </div>

      {/* Tab Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {SCRIPT_EXAMPLES.map((script) => (
          <button
            key={script.id}
            onClick={() => setSelectedId(script.id)}
            className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex flex-col gap-0.5 cursor-pointer border ${
              selectedId === script.id
                ? 'bg-[#E94F7A] text-white border-[#E94F7A] shadow-sm font-black'
                : 'bg-[#FFE3D3] text-[#3A241C] border-[#F3CFBE] hover:bg-[#FFD6C2]'
            }`}
          >
            <span className="text-[10px] opacity-80 uppercase tracking-wider">{script.tag}</span>
            <span className="truncate">{script.objection}</span>
          </button>
        ))}
      </div>

      {/* WhatsApp Message Mockup */}
      <div className="bg-[#FFE3D3]/60 rounded-2xl p-4 border border-[#F0D5C7] relative space-y-3.5 shadow-inner">
        {/* Customer bubble */}
        <div className="flex justify-start">
          <div className="max-w-[85%] sm:max-w-[75%] bg-[#FFF4EC] text-[#3A241C] p-3.5 rounded-2xl rounded-tl-sm text-xs sm:text-sm border border-[#F0D5C7] shadow-xs">
            <span className="text-[10px] font-extrabold text-[#E94F7A] block mb-0.5 uppercase tracking-wider">Cliente interessada pergunta:</span>
            <p className="font-semibold">{activeScript.customerQuery}</p>
          </div>
        </div>

        {/* You with Agenda Cheia bubble */}
        <div className="flex justify-end">
          <div className="max-w-[90%] sm:max-w-[80%] bg-[#FFFFFF] border-2 border-[#2FA866]/50 text-[#3A241C] p-4 rounded-2xl rounded-tr-sm text-xs sm:text-sm shadow-md">
            <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-stone-100">
              <span className="text-[10px] font-black text-[#2FA866] uppercase tracking-wider">
                Sua resposta com o Agenda Cheia:
              </span>
              <button
                onClick={handleCopy}
                className="text-[11px] inline-flex items-center gap-1 text-[#E94F7A] hover:text-[#D83D69] font-bold cursor-pointer bg-[#FFF4EC] px-2 py-0.5 rounded-md border border-[#F0D5C7]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#2FA866]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            <p className="text-[#3A241C] leading-relaxed font-medium">
              {activeScript.recommendedResponse}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#2FA866] font-bold">
              <span>Entregue</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#2FA866]" />
            </div>
          </div>
        </div>

        {/* Strategy Insight */}
        <div className="bg-[#FFF4EC] border border-[#F4B84A] rounded-xl p-3 text-xs text-[#3A241C] flex items-start gap-2 mt-2 shadow-2xs">
          <Lightbulb className="w-4 h-4 text-[#F4B84A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#3A241C] font-bold">Por que funciona:</strong> {activeScript.salesTip}
          </p>
        </div>
      </div>
    </div>
  );
};
