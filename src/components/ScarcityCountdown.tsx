import React, { useState, useEffect } from 'react';
import { Timer, Flame } from 'lucide-react';

interface ScarcityCountdownProps {
  initialMinutes?: number;
  initialSeconds?: number;
}

export const ScarcityCountdown: React.FC<ScarcityCountdownProps> = ({
  initialMinutes = 14,
  initialSeconds = 47
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const totalSeconds = initialMinutes * 60 + initialSeconds;
    const saved = sessionStorage.getItem('desafio_timer_deadline');
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved, 10) - Date.now()) / 1000));
      return remaining > 0 ? remaining : totalSeconds;
    } else {
      const deadline = Date.now() + totalSeconds * 1000;
      sessionStorage.setItem('desafio_timer_deadline', deadline.toString());
      return totalSeconds;
    }
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-[#FFF4EC] border-2 border-[#E94F7A]/30 rounded-2xl p-3.5 sm:p-4 shadow-xs my-4 text-center max-w-md mx-auto">
      <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E94F7A] mb-2">
        <Flame className="w-4 h-4 animate-bounce text-[#E94F7A]" />
        <span>Oferta Especial Por Tempo Limitado</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        {/* Minutes box */}
        <div className="bg-[#FFE3D3] border border-[#F0D5C7] rounded-xl px-3 py-1.5 min-w-[62px]">
          <span className="text-xl sm:text-2xl font-black text-[#3A241C] font-mono block">
            {formatNumber(minutes)}
          </span>
          <span className="text-[10px] uppercase font-bold text-[#5A3A31] block">
            Minutos
          </span>
        </div>

        <span className="text-2xl font-black text-[#E94F7A] pb-3">:</span>

        {/* Seconds box */}
        <div className="bg-[#FFE3D3] border border-[#F0D5C7] rounded-xl px-3 py-1.5 min-w-[62px]">
          <span className="text-xl sm:text-2xl font-black text-[#E94F7A] font-mono block">
            {formatNumber(seconds)}
          </span>
          <span className="text-[10px] uppercase font-bold text-[#5A3A31] block">
            Segundos
          </span>
        </div>
      </div>

      <p className="text-[11px] sm:text-xs text-[#5A3A31] font-medium mt-2">
        Condição promocional de <strong className="text-[#3A241C]">R$67,00</strong> válida somente enquanto o cronômetro estiver ativo.
      </p>
    </div>
  );
};
