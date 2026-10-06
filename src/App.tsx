import React, { useState } from 'react';
import { HeaderProgressBar } from './components/HeaderProgressBar';
import { UpsellHero } from './components/UpsellHero';
import { UpsellComparison } from './components/UpsellComparison';
import { UpsellDeliverables } from './components/UpsellDeliverables';
import { UpsellRoutine } from './components/UpsellRoutine';
import { UpsellOffer } from './components/UpsellOffer';
import { DobraGarantia } from './components/DobraGarantia';
import { FaqSection } from './components/FaqSection';
import { DeclineConfirmModal } from './components/DeclineConfirmModal';
import { getDownsellCheckoutUrl } from './data/upsellData';

export default function App() {
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [hasDeclined, setHasDeclined] = useState(false);

  const handleOpenDeclineModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDeclineModalOpen(true);
  };

  const handleConfirmDecline = () => {
    setIsDeclineModalOpen(false);
    setHasDeclined(true);
    try {
      const params = new URLSearchParams(window.location.search);
      const wiapySell = params.get('wiapy_sell');
      const targetUrl = wiapySell
        ? `https://wiapy.com/login?wiapy_sell=${encodeURIComponent(wiapySell)}`
        : 'https://wiapy.com/login';
      window.location.href = targetUrl;
    } catch {
      window.location.href = 'https://wiapy.com/login';
    }
  };

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#5A3A31] font-sans antialiased selection:bg-[#E94F7A] selection:text-white flex flex-col w-full max-w-full overflow-x-hidden">
      
      {/* Top Header with Progress Bar & Purchase Status */}
      <HeaderProgressBar />

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">

        {/* Notice banner if user declined */}
        {hasDeclined && (
          <div className="bg-[#FFE3D3] border-b border-[#F0D5C7] px-4 py-3 text-center text-xs sm:text-sm text-[#3A241C] font-semibold">
            Você optou por não adicionar o plano de vendas. Seu acesso padrão já foi enviado para seu e-mail. Caso ainda queira aproveitar o desconto exclusivo por R$ 19,90 antes de sair,{' '}
            <a href={getDownsellCheckoutUrl()} className="text-[#E94F7A] underline font-black ml-1">
              clique aqui para garantir por R$ 19,90
            </a>.
          </div>
        )}

        {/* DOBRA 01: HERO / CONFIRMAÇÃO DO BOLOS LUCRATIVOS & APRESENTAÇÃO DO MÉTODO AGENDA CHEIA */}
        <UpsellHero onCtaClick={handleScrollToOffer} />

        {/* DOBRA 02: O BOLOS LUCRATIVOS ORGANIZA / O AGENDA CHEIA TE MOSTRA COMO VENDER */}
        <UpsellComparison />

        {/* DOBRA 03: VOCÊ VAI RECEBER (COM OS EXEMPLOS DE CADA ITEM) */}
        <UpsellDeliverables />

        {/* DOBRA 04: VOCÊ JÁ SABE O QUE PREPARAR (ROTINA & MATERIAIS JUNTOS) */}
        <UpsellRoutine />

        {/* DOBRA 05: COMPLETE SEU ACESSO AGORA & WIAPY ONE-CLICK UPSELL */}
        <UpsellOffer onDeclineClick={handleOpenDeclineModal} />

        {/* GARANTIA DE 7 DIAS */}
        <DobraGarantia />

        {/* PERGUNTAS FREQUENTES */}
        <FaqSection />

      </main>

      {/* Decline Confirmation Modal (Discount from 37 to 27) */}
      <DeclineConfirmModal
        isOpen={isDeclineModalOpen}
        onConfirmDecline={handleConfirmDecline}
        onCancelDecline={() => setIsDeclineModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-[#2C1B15] text-[#FFE3D3] border-t border-[#1F120E] py-8 px-4 text-center text-xs w-full overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-[#FFE3D3] font-bold text-sm">
            Método Agenda Cheia • Complemento Exclusivo para o Bolos Lucrativos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#FFE3D3]/70 font-medium">
            <span>Garantia de 7 Dias</span>
            <span>·</span>
            <span>Acesso Digital Imediato</span>
            <span>·</span>
            <span>Pagamento Seguro</span>
          </div>
          <p className="text-[11px] text-[#FFE3D3]/50 pt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
