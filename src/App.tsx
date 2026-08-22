import React, { useState } from 'react';
import { HeaderProgressBar } from './components/HeaderProgressBar';
import { Dobra01Hero } from './components/Dobra01Hero';
import { Dobra02Connection } from './components/Dobra02Connection';
import { Dobra03PainPoints } from './components/Dobra03PainPoints';
import { Dobra04Presentation } from './components/Dobra04Presentation';
import { Dobra05Deliverables } from './components/Dobra05Deliverables';
import { Dobra06Transformation } from './components/Dobra06Transformation';
import { Dobra07TargetAudience } from './components/Dobra07TargetAudience';
import { Dobra08Comparison } from './components/Dobra08Comparison';
import { Dobra09Offer } from './components/Dobra09Offer';
import { Dobra10FinalReinforcement } from './components/Dobra10FinalReinforcement';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { DeclineConfirmModal } from './components/DeclineConfirmModal';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

  const handleAddOffer = () => {
    setIsDeclineModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleDeclineClick = () => {
    setIsDeclineModalOpen(true);
  };

  const handleProceedWithDecline = () => {
    setIsDeclineModalOpen(false);
    // Smooth custom notification or redirect simulation
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#5A3A31] font-sans antialiased selection:bg-[#E94F7A] selection:text-white flex flex-col">
      {/* Top Warning & Progress Bar */}
      <HeaderProgressBar onAddClick={handleAddOffer} />

      {/* Main Landing Sections: 10 Dobras */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* Dobra 01 — Topo da Página */}
        <Dobra01Hero 
          onAddClick={handleAddOffer} 
          onDeclineClick={handleDeclineClick} 
        />

        {/* Dobra 02 — Conexão com o Produto Principal */}
        <Dobra02Connection />

        {/* Dobra 03 — Dor Principal */}
        <Dobra03PainPoints />

        {/* Dobra 04 — Apresentação do Agenda Cheia */}
        <Dobra04Presentation />

        {/* Dobra 05 — O Que Recebe (com simulador de scripts e prévia do calendário) */}
        <Dobra05Deliverables />

        {/* Dobra 06 — Transformação */}
        <Dobra06Transformation />

        {/* Dobra 07 — Para Quem É */}
        <Dobra07TargetAudience />

        {/* Dobra 08 — Comparação */}
        <Dobra08Comparison />

        {/* Dobra 09 — Oferta Especial */}
        <Dobra09Offer 
          onAddClick={handleAddOffer} 
          onDeclineClick={handleDeclineClick} 
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Dobra 10 — Reforço Final & Link de Recusa */}
        <Dobra10FinalReinforcement 
          onAddClick={handleAddOffer} 
          onDeclineClick={handleDeclineClick} 
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#3A241C] text-[#FFE3D3] border-t border-[#2C1B15] py-10 px-4 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#FFE3D3] font-bold text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2FA866]" />
              Compra 100% Segura
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#F4B84A]" />
              Privacidade Protegida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2FA866]" />
              Garantia Incondicional de 7 Dias
            </span>
          </div>

          <p className="text-[#FFE3D3]/80">
            © {new Date().getFullYear()} Bolos Lucrativos & Agenda Cheia — Todos os direitos reservados.
          </p>

          <p className="text-[11px] text-[#FFE3D3]/60 max-w-xl mx-auto leading-relaxed">
            Este treinamento ensina estratégias práticas de vendas e rotinas de divulgação para bolos no pote. Os resultados podem variar de acordo com a aplicação e dedicação de cada confeiteira.
          </p>
        </div>
      </footer>

      {/* Sticky Bottom Floating Bar */}
      <StickyBottomBar onAddClick={handleAddOffer} />

      {/* Interactive Modals */}
      <OrderSuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />

      <DeclineConfirmModal
        isOpen={isDeclineModalOpen}
        onConfirmDecline={handleProceedWithDecline}
        onCancelDecline={handleAddOffer}
      />
    </div>
  );
}
