import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/upsellData';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: 'Preciso já vender doces para entrar no desafio?',
      answer: (
        <div className="space-y-2">
          <p>
            Não. O desafio também serve para quem está começando do zero e ainda não sabe como conseguir os primeiros pedidos.
          </p>
          <p>
            Você vai seguir um plano simples para divulgar, chamar clientes e começar com mais direção.
          </p>
        </div>
      )
    },
    {
      question: 'Funciona só para bolo no pote?',
      answer: (
        <div className="space-y-2">
          <p>
            Não. Você pode aplicar o plano para bolo no pote, brigadeiros, brownies, trufas, sobremesas no pote e outros doces simples.
          </p>
          <p>
            O foco é te ajudar a transformar seus doces em pedidos.
          </p>
        </div>
      )
    },
    {
      question: 'Vou aprender receitas dentro do desafio?',
      answer: (
        <div className="space-y-2">
          <p>
            O foco principal do <strong>Desafio 5K com Doces</strong> não é ensinar receitas.
          </p>
          <p>
            O foco é te mostrar como divulgar, vender, chamar clientes, criar ofertas e movimentar seus pedidos durante 30 dias.
          </p>
        </div>
      )
    },
    {
      question: 'Eu consigo fazer pelo celular?',
      answer: (
        <div className="space-y-2">
          <p>
            Sim. O desafio foi pensado para quem quer vender usando o celular, WhatsApp, Instagram e status.
          </p>
          <p>
            Você não precisa de estrutura grande para começar.
          </p>
        </div>
      )
    },
    {
      question: 'Preciso investir em anúncios?',
      answer: (
        <p>
          Não. O plano é feito para você começar com ações simples de venda orgânica, usando WhatsApp, status, Instagram, indicação e clientes próximas.
        </p>
      )
    },
    {
      question: 'R$5.000 de lucro em 30 dias é garantido?',
      answer: (
        <div className="space-y-2">
          <p>
            Não existe resultado garantido, porque depende da sua dedicação, dos seus produtos, preços, divulgação e execução diária.
          </p>
          <p>
            Mas o desafio te mostra um plano prático para buscar essa meta com mais direção, em vez de vender no improviso.
          </p>
        </div>
      )
    },
    {
      question: 'Como vou receber o acesso?',
      answer: (
        <p>
          Após a confirmação da compra, você recebe o acesso digital ao material com o plano de ação, calendário, campanhas prontas, scripts e estratégias do desafio.
        </p>
      )
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer: (
        <p>
          Você recebe acesso ao material para consultar e aplicar durante seus próximos 30 dias de ação.
        </p>
      )
    },
    {
      question: 'Tem garantia?',
      answer: (
        <p>
          Sim. Você tem <strong>7 dias de garantia</strong> para conhecer o material com segurança.
        </p>
      )
    }
  ];

  return (
    <section id="faq-garantia" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FFE3D3]/30 border-t border-[#F0D5C7]">
      <div className="max-w-3xl mx-auto">
        
        {/* ========================================================================= */}
        {/* SELO DE GARANTIA DE 7 DIAS */}
        {/* ========================================================================= */}
        <div className="mb-14 bg-[#FFF4EC] border-2 border-[#2FA866]/40 rounded-3xl p-6 sm:p-8 shadow-sm text-center relative overflow-hidden">
          
          <div className="max-w-xl mx-auto flex flex-col items-center">
            
            {/* Visual 7-Day Guarantee Seal Badge */}
            <div className="relative mb-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2FA866] to-[#1E7D49] p-1.5 shadow-lg flex items-center justify-center text-white">
                <div className="w-full h-full rounded-full border-2 border-dashed border-white/70 flex flex-col items-center justify-center text-center p-1 bg-[#238B53]">
                  <ShieldCheck className="w-6 h-6 text-white mb-0.5" />
                  <span className="text-xl sm:text-2xl font-black leading-none font-mono tracking-tighter">7 DIAS</span>
                  <span className="text-[9px] uppercase font-black tracking-wider text-white/90">GARANTIA</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#FFE3D3] text-[#2FA866] border border-[#2FA866]/40 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-xs">
                100% SEGURO
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#3A241C] mb-2">
              Garantia Incondicional de 7 Dias
            </h3>

            <p className="text-sm sm:text-base text-[#5A3A31] font-medium leading-relaxed mb-4">
              Você tem <strong>7 dias inteiros de garantia</strong> para entrar, baixar todo o plano de 30 dias, ver as campanhas e colocar as ações em prática. Se por qualquer motivo você achar que o material não é para você, basta solicitar o reembolso e <strong>100% do seu investimento é devolvido</strong>, sem questionamentos.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2FA866] bg-[#2FA866]/10 px-3.5 py-1.5 rounded-full border border-[#2FA866]/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Risco Zero: Seu investimento está totalmente protegido.</span>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PERGUNTAS FREQUENTES (FAQ) */}
        {/* ========================================================================= */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE3D3] text-[#E94F7A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F0D5C7]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A241C] leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#FFE3D3] border border-[#F3CFBE] rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#3A241C] hover:text-[#E94F7A] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold pr-2">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#E94F7A] text-white' : 'bg-[#FFF4EC] text-[#5A3A31] border border-[#F0D5C7]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#5A3A31] leading-relaxed border-t border-[#F0CFBE]/60 bg-[#FFF4EC]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Fast CTA after FAQ */}
        <div className="mt-10 text-center">
          <motion.a
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#E94F7A] hover:bg-[#D83D69] text-white font-black text-sm sm:text-base tracking-wide shadow-lg shadow-[#E94F7A]/25 transition-all cursor-pointer inline-flex items-center justify-center gap-2 border border-[#F27598] no-underline"
          >
            <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
            <span>LIBERAR ACESSO AGORA</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};
