"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  gaEvent: string;
  gaParams?: Record<string, string>;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  gaEvent,
  gaParams,
  className,
  target,
  rel,
  children,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => sendGAEvent("event", gaEvent, gaParams ?? {})}
    >
      {children}
    </a>
  );
}
