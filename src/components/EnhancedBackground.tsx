import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

type EnhancedBackgroundProps = {
  seed?: string;
  density?: number;           // 1 desktop, 0.5 mobile-friendly
  parallax?: boolean;         // pointer parallax
  vignette?: boolean;
  className?: string;
};

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function useReducedMotion(): boolean {
  const ref = useRef(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    ref.current = !!m?.matches;
    const handler = (e: MediaQueryListEvent) => (ref.current = e.matches);
    m?.addEventListener?.("change", handler);
    return () => m?.removeEventListener?.("change", handler);
  }, []);
  return ref.current;
}

export default function EnhancedBackground({
  seed = "propcore-2025",
  density = 1,
  parallax = true,
  vignette = true,
  className,
}: EnhancedBackgroundProps) {
  const reduced = useReducedMotion();

  // Clamp/normalize density
  const d = Math.max(0.25, Math.min(1.25, density || 1));

  // Seeded RNG
  const rnd = useMemo(() => {
    let acc = 2166136261;
    for (let i = 0; i < seed.length; i++) acc ^= seed.charCodeAt(i);
    return mulberry32(acc >>> 0);
  }, [seed]);

  // Generate stable elements
  const { stars, orbs, accents } = useMemo(() => {
    const starCount = Math.round(180 * d);
    const orbCount = Math.round(8 * d);
    const accentCount = 2;

    const makePct = () => `${Math.floor(rnd() * 10000) / 100}%`;
    const makePx = (min: number, max: number) =>
      `${Math.round(min + rnd() * (max - min))}px`;

    const s = Array.from({ length: starCount }, (_, i) => ({
      key: `s-${i}`,
      left: makePct(),
      top: makePct(),
      size: makePx(1, 3 + Math.round(2 * d)),
      delay: `${(rnd() * 4).toFixed(2)}s`,
      dur: `${(3 + rnd() * 4).toFixed(2)}s`,
      op: (0.35 + rnd() * 0.45).toFixed(2),
    }));

    const o = Array.from({ length: orbCount }, (_, i) => ({
      key: `o-${i}`,
      left: makePct(),
      top: makePct(),
      size: makePx(60, 140),
      delay: `${(rnd() * 6).toFixed(2)}s`,
      dur: `${(6 + rnd() * 10).toFixed(2)}s`,
      op: (0.16 + rnd() * 0.2).toFixed(2),
    }));

    const a = Array.from({ length: accentCount }, (_, i) => ({
      key: `a-${i}`,
      left: makePct(),
      top: makePct(),
      sizeW: makePx(60, 110),
      sizeH: makePx(60, 110),
      rotate: `${Math.round(rnd() * 60) - 30}deg`,
      delay: `${(rnd() * 5).toFixed(2)}s`,
      dur: `${(5 + rnd() * 6).toFixed(2)}s`,
      op: (0.12 + rnd() * 0.15).toFixed(2),
    }));

    return { stars: s, orbs: o, accents: a };
  }, [rnd, d]);

  // Pointer parallax
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced || !parallax) return;
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 2;
        const y = (e.clientY / h - 0.5) * 2;
        el.style.setProperty("--parallaxX", `${x}`);
        el.style.setProperty("--parallaxY", `${y}`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [parallax, reduced]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "absolute inset-0 -z-10 pointer-events-none select-none",
        className
      )}
      // Default vars if parallax is off
      style={{ ["--parallaxX" as any]: 0, ["--parallaxY" as any]: 0 }}
      aria-hidden
    >
      {/* Base gradient (never pure black) */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(20,184,166,0.07),transparent_40%),radial-gradient(120%_120%_at_100%_100%,rgba(56,189,248,0.06),transparent_45%),linear-gradient(to_br,#000,#0b0f14_35%,#000_100%)]" />

      {/* Stars */}
      <div className={cn("absolute inset-0", !reduced && "animate-none")}>
        {stars.map((st) => (
          <div
            key={st.key}
            className="absolute rounded-full bg-white"
            style={{
              left: st.left,
              top: st.top,
              width: st.size,
              height: st.size,
              opacity: st.op as any,
              animation: reduced ? "none" : `twinkle ${st.dur} infinite`,
              animationDelay: st.delay,
              willChange: "opacity",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.15))",
              transform: `translate(calc(var(--parallaxX) * 2px), calc(var(--parallaxY) * 2px))`,
            }}
          />
        ))}
      </div>

      {/* Orbs */}
      <div className="absolute inset-0">
        {orbs.map((o) => (
          <div
            key={o.key}
            className="absolute rounded-full"
            style={{
              left: o.left,
              top: o.top,
              width: o.size,
              height: o.size,
              background:
                "radial-gradient(circle at 30% 30%, rgba(45,212,191,0.5), rgba(45,212,191,0.0) 60%)",
              opacity: o.op as any,
              animation: reduced ? "none" : `float ${o.dur} ease-in-out infinite`,
              animationDelay: o.delay,
              willChange: "transform",
              transform: `translate(calc(var(--parallaxX) * 6px), calc(var(--parallaxY) * 6px))`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Accents */}
      <div className="absolute inset-0">
        {accents.map((a) => (
          <div
            key={a.key}
            className="absolute"
            style={{
              left: a.left,
              top: a.top,
              width: a.sizeW,
              height: a.sizeH,
              background:
                "linear-gradient(135deg, rgba(45,212,191,0.35), rgba(56,189,248,0.25))",
              transform: `rotate(${a.rotate}) translate(calc(var(--parallaxX) * 10px), calc(var(--parallaxY) * 10px))`,
              borderRadius: "12px",
              opacity: a.op as any,
              animation: reduced ? "none" : `pulse ${a.dur} ease-in-out infinite`,
              animationDelay: a.delay,
              boxShadow: "0 0 30px rgba(45,212,191,0.15)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Optional vignette to frame content */}
      {vignette && (
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      )}
    </div>
  );
}