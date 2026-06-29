import { useState, useEffect } from "react";

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "fade">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fade"), 1800);
    const t2 = setTimeout(() => onComplete(), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-600 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/images/logo.jpg"
        alt="WaltBell"
        className="w-48 md:w-64 animate-[logoIn_1.2s_ease-out_forwards]"
      />
    </div>
  );
}
