"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedMainProps = {
  children: ReactNode;
};

export function AnimatedMain({ children }: AnimatedMainProps) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        return;
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.from(".nav", {
            y: -18,
            autoAlpha: 0,
            duration: 0.65,
            ease: "power3.out",
          });

          ScrollTrigger.create({
            start: 72,
            end: 99999,
            toggleClass: { targets: ".nav", className: "is-scrolled" },
          });

          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .from(".hero-copy .eyebrow", { y: 24, autoAlpha: 0, duration: 0.55 })
            .from(".hero-copy h1", { y: 44, autoAlpha: 0, duration: 0.8 }, "-=0.3")
            .from(".hero-copy .lead", { y: 28, autoAlpha: 0, duration: 0.65 }, "-=0.42")
            .from(".hero-copy .actions", { y: 22, autoAlpha: 0, duration: 0.55 }, "-=0.38")
            .from(
              ".hero-panel > *",
              { y: 32, autoAlpha: 0, duration: 0.6, stagger: 0.1 },
              "-=0.45",
            )
            .from(
              ".hero-principles dt",
              { y: 16, autoAlpha: 0, duration: 0.45, stagger: 0.08 },
              "-=0.35",
            );

          gsap.set(
            ".project, .section-heading, .service-row, .process-line, .stack-list div, footer > *",
            {
              y: 48,
              autoAlpha: 0,
            },
          );

          ScrollTrigger.batch(".project", {
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                overwrite: true,
              });

              elements.forEach((project) => {
                const visual = project.querySelector(".project-visual");
                const image = project.querySelector(".project-visual img");

                if (visual) {
                  gsap.fromTo(
                    visual,
                    { clipPath: "inset(12% 8% 12% 8% round 24px)" },
                    {
                      clipPath: "inset(0% 0% 0% 0% round 24px)",
                      duration: 1,
                      ease: "power3.out",
                    },
                  );
                }

                if (image) {
                  gsap.fromTo(
                    image,
                    { scale: 1.12, yPercent: 6 },
                    { scale: 1, yPercent: 0, duration: 1.1, ease: "power3.out" },
                  );

                  gsap.fromTo(
                    image,
                    { yPercent: -6 },
                    {
                      yPercent: 6,
                      ease: "none",
                      scrollTrigger: {
                        trigger: project,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.8,
                      },
                    },
                  );
                }
              });
            },
            start: "top 88%",
            once: true,
          });

          ScrollTrigger.batch(".section-heading", {
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: "power3.out",
                overwrite: true,
              });
            },
            start: "top 86%",
            once: true,
          });

          ScrollTrigger.batch(".service-row", {
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.65,
                stagger: 0.1,
                ease: "power3.out",
                overwrite: true,
              });
            },
            start: "top 88%",
            once: true,
          });

          ScrollTrigger.batch(".process-line", {
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.6,
                stagger: 0.09,
                ease: "power2.out",
                overwrite: true,
              });
            },
            start: "top 90%",
            once: true,
          });

          ScrollTrigger.batch(".stack-list div", {
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.65,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: true,
              });
            },
            start: "top 90%",
            once: true,
          });

          ScrollTrigger.create({
            trigger: "footer",
            start: "top 92%",
            once: true,
            onEnter: () => {
              gsap.to("footer > *", {
                y: 0,
                autoAlpha: 1,
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.out",
              });
            },
          });
      }, mainRef);

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className="animated-main">
      {children}
    </main>
  );
}
