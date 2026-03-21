import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "2348111834451";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I came across your work and I'm interested in discussing a project with you. Are you available for a quick chat?",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 800);
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-32 right-8 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={`
          bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl
          shadow-xl whitespace-nowrap pointer-events-none select-none relative
          transition-all duration-200
          ${showTooltip ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1.5 scale-95"}
        `}
      >
        💬 Let&apos;s talk about your project!
        {/* Tooltip arrow */}
        <span className="absolute -bottom-1.5 right-5 w-3 h-3 bg-gray-900 rotate-45" />
      </div>

      {/* Button + pulse ring container */}
      <div className="relative">
        {/* Pulse ring */}
        {pulse && (
          <span
            className="absolute inset-0 rounded-full border-2 border-green-400"
            style={{ animation: "waPulseRing 2s ease-out infinite" }}
          />
        )}

        {/* Online dot */}
        <span
          className="absolute top-0.5 right-0.5 z-10 w-3 h-3 bg-green-400 border-2 border-white rounded-full"
          style={{ animation: "waBlink 3s ease-in-out infinite" }}
        />

        {/* Main button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with me on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`
            relative flex items-center justify-center
            w-[60px] h-[60px] rounded-full
            bg-gradient-to-br from-[#25D366] to-[#128C7E]
            shadow-[0_4px_20px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.15)]
            hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)]
            active:scale-95
            transition-all duration-200 ease-out
          `}
          style={
            mounted
              ? {
                  animation:
                    "waEnter 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
                }
              : { opacity: 0 }
          }
        >
          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 fill-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Keyframe definitions — add these to your global CSS instead if preferred */}
      <style>{`
        @keyframes waEnter {
          from { opacity: 0; transform: scale(0.5) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes waPulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
        @keyframes waBlink {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
