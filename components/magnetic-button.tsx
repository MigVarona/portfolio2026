"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { sendGAEvent } from "@next/third-parties/google";

gsap.registerPlugin(useGSAP);

type MagneticButtonProps = {
  href: string;
  className: string;
  children: ReactNode;
  gaEvent?: string;
  gaParams?: Record<string, string>;
};

export function MagneticButton({ href, className, children, gaEvent, gaParams }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const button = buttonRef.current;
      if (!button || !contextSafe) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const onMove = contextSafe((event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.18,
          y: y * 0.18,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
        });
      });

      const onLeave = contextSafe(() => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: "elastic.out(1, 0.55)",
        });
      });

      button.addEventListener("mousemove", onMove);
      button.addEventListener("mouseleave", onLeave);

      return () => {
        button.removeEventListener("mousemove", onMove);
        button.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: buttonRef },
  );

  return (
    <a
      ref={buttonRef}
      href={href}
      className={className}
      onClick={() => gaEvent && sendGAEvent("event", gaEvent, gaParams ?? {})}
    >
      {children}
    </a>
  );
}
