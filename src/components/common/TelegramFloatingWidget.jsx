import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function TelegramFloatingWidget() {
  const telegramUrl = "https://t.me/AllYonowebsit";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 select-none">
      {/* 90% Trending Pill Badge */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 bg-[#00c980] hover:bg-[#00b070] text-white px-3 py-1 rounded-full text-xs font-black shadow-md hover:scale-105 transition-all duration-200"
        title="90% Activity Score"
      >
        <TrendingUp className="w-3.5 h-3.5 stroke-[3]" />
        <span>90%</span>
      </a>

      {/* Telegram Round Floating Button */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0088cc] hover:bg-[#0077b5] flex items-center justify-center text-white shadow-xl shadow-sky-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Join Telegram"
        title="Join Telegram Channel"
      >
        {/* Subtle Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-25 pointer-events-none" />

        {/* Inner concentric circle matching reference image */}
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1b9fe8] flex items-center justify-center shadow-inner">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 fill-white -translate-x-0.5 translate-y-0.5 drop-shadow-xs"
          >
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
