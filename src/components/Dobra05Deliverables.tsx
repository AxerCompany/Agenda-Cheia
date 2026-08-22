import React, { useState } from 'react';
import { DELIVERABLES, CALENDAR_SAMPLE } from '../data/upsellData';
import { InteractiveScriptsSimulator } from './InteractiveScriptsSimulator';
import { 
  CalendarCheck, 
  MessageSquareShare, 
  Sparkles, 
  RotateCcw, 
  UsersRound, 
  Target, 
  CheckCircle,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const Dobra05Deliverables: React.FC = () => {
  const [showCalendarPreview, setShowCalendarPreview] = useState<boolean>(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'CalendarCheck': return CalendarCheck;
      case 'MessageSquareShare': return MessageSquareShare;
      case 'Sparkles': return Sparkles;
      case 'RotateCcw': return RotateCcw;
      case 'UsersRound': return UsersRound;
      case 'Target': return Target;
      default: return Sparkles;
    }
  };

  return (
    <section id="dobra-05" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B84A] text-[#3A241C] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E5A532] shadow-xs">
            Conteúdo Completo & Imediato
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-3">
            O que você vai receber dentro do <span className="text-[#E94F7A]">Agenda Cheia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A3A31] font-medium">
            6 pilares práticos e diretos ao ponto para destravar seus pedidos semanais.
          </p>
        </div>

        {/* 6 Modules Grid */}
        <div className="space-y-6">
          {DELIVERABLES.map((item) => {
            const Icon = getIcon(item.iconName);

            return (
              <div 
                key={item.id}
                className="bg-[#FFE3D3] border border-[#F3CFBE] hover:border-[#E94F7A]/40 rounded-3xl p-5 sm:p-7 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left: Icon and Core Info */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF4EC] border border-[#F0D5C7] text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-extrabold px-3 py-0.5 rounded-full bg-[#F4B84A] text-[#3A241C] uppercase tracking-wider shadow-2xs">
                          {item.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-black text-[#3A241C] mb-1">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-bold text-[#E94F7A] mb-3">
                        {item.subtitle}
                      </p>

                      <p className="text-sm text-[#5A3A31] leading-relaxed mb-4 font-medium">
                        {item.description}
                      </p>

                      {/* Key highlights bullet points */}
                      <div className="grid sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#F0CFBE]">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3A241C]">
                            <CheckCircle className="w-4 h-4 text-[#2FA866] mt-0.5 shrink-0" />
                            <span className="font-semibold">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Interactive Embeds based on module */}
                {item.id === 1 && (
                  <div className="mt-4 pt-4 border-t border-[#F0CFBE]">
                    <button
                      onClick={() => setShowCalendarPreview(!showCalendarPreview)}
                      className="text-xs font-bold text-[#3A241C] hover:text-[#E94F7A] inline-flex items-center gap-1.5 cursor-pointer bg-[#FFF4EC] px-3.5 py-2 rounded-xl border border-[#F0D5C7] shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#E94F7A]" />
                      <span>{showCalendarPreview ? 'Ocultar exemplo de dias' : 'Ver prévia da rotina semanal'}</span>
                      {showCalendarPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {showCalendarPreview && (
                      <div className="mt-3 grid gap-2.5 sm:grid-cols-2 bg-[#FFF4EC] p-3.5 rounded-2xl border border-[#F0D5C7] text-xs">
                        {CALENDAR_SAMPLE.map((day, dIdx) => (
                          <div key={dIdx} className="p-3 rounded-xl bg-[#FFE3D3] border border-[#F3CFBE]">
                            <div className="flex items-center justify-between text-[#E94F7A] font-black mb-1">
                              <span>{day.day}</span>
                              <span className="text-[10px] text-[#5A3A31] font-semibold">{day.format}</span>
                            </div>
                            <p className="text-[#3A241C] mb-1 font-bold">{day.theme}</p>
                            <p className="text-[11px] text-[#5A3A31] leading-normal">{day.action}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive Script Simulator inside Module 3 */}
                {item.id === 3 && (
                  <div className="mt-4">
                    <InteractiveScriptsSimulator />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
