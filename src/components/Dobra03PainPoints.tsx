import React from 'react';
import { 
  AlertTriangle, 
  HelpCircle, 
  MessageSquareOff, 
  DollarSign, 
  Users, 
  RotateCcw, 
  Sparkles,
  CalendarX2,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export const Dobra03PainPoints: React.FC = () => {
  const PAIN_POINTS = [
    {
      icon: CalendarX2,
      title: 'O que postar no status',
      desc: 'Acorda sem saber o que postar ou posta sempre a mesma foto sem texto atrativo.'
    },
    {
      icon: MessageSquareOff,
      title: 'Chamar clientes sem ser insistente',
      desc: 'Medo de mandar mensagem no WhatsApp e parecer chata ou desesperada por vendas.'
    },
    {
      icon: DollarSign,
      title: 'Responder quando perguntam preço',
      desc: 'Manda o valor cru (ex: "R$ 12") e a pessoa visualiza e nunca mais responde.'
    },
    {
      icon: Sparkles,
      title: 'Como oferecer combos',
      desc: 'Dificuldade em vender 2 ou 3 potes para o mesmo cliente para lucrar mais.'
    },
    {
      icon: RotateCcw,
      title: 'Fazer cliente antiga comprar de novo',
      desc: 'A cliente compra uma vez, adora, mas nunca mais pede porque você não tem rotina de contato.'
    },
    {
      icon: Users,
      title: 'Como conseguir indicação',
      desc: 'Esperar que os amigos indiquem sozinhos sem ter uma estratégia pronta para ativar a indicação.'
    },
    {
      icon: AlertTriangle,
      title: 'Movimentar pedidos durante a semana',
      desc: 'Ficar refém apenas do final de semana ou de datas comemorativas esporádicas.'
    }
  ];

  return (
    <section id="dobra-03" className="py-14 sm:py-20 bg-[#FFF4EC] text-[#5A3A31] border-b border-[#F0D5C7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E94F7A]/15 text-[#E94F7A] text-xs font-extrabold tracking-wider uppercase mb-4 border border-[#E94F7A]/30">
            <AlertTriangle className="w-3.5 h-3.5 text-[#E94F7A]" />
            Onde a Maioria Trava
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A241C] leading-tight mb-4">
            O problema não é só saber fazer bolo no pote
          </h2>

          <p className="text-base sm:text-lg text-[#5A3A31]">
            Muita gente até consegue escolher uma receita. <br className="hidden sm:inline" />
            <span className="text-[#E94F7A] font-bold">Mas trava na hora de vender.</span>
          </p>
        </div>

        {/* The 7 Confusion Points Grid */}
        <div className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-2 text-[#3A241C] font-extrabold text-sm sm:text-base uppercase tracking-wider mb-6 pb-3 border-b border-[#F0CFBE]">
            <HelpCircle className="w-5 h-5 text-[#E94F7A]" />
            <span>Fica sem saber exatamente:</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((point, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#FFF4EC] border border-[#F0D5C7] hover:border-[#E94F7A]/50 p-4 rounded-2xl flex items-start gap-3.5 transition-colors shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#E94F7A]/15 text-[#E94F7A] flex items-center justify-center shrink-0 mt-0.5 border border-[#E94F7A]/20">
                    <XCircle className="w-4 h-4 text-[#E94F7A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#3A241C] mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#5A3A31] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Dilemma and Solution Bridge */}
        <div className="bg-[#FFE3D3] border-2 border-[#E94F7A]/40 rounded-3xl p-6 sm:p-8 text-center shadow-md relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#5A3A31] text-sm sm:text-base leading-relaxed mb-3">
              Aí a pessoa prepara, posta uma vez e espera.
            </p>
            
            <p className="text-lg sm:text-xl font-bold text-[#E94F7A] mb-2">
              Mas venda não pode depender só da sorte.
            </p>
            
            <p className="text-base sm:text-lg font-black text-[#3A241C] mb-5">
              Você precisa de uma rotina simples de divulgação.
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#2FA866] text-white font-extrabold text-sm sm:text-base shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>E é exatamente isso que o Agenda Cheia entrega.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
