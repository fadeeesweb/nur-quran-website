"use client";

import { useEffect } from "react";

/**
 * Gentle section reveals. Elements tagged with `data-reveal` fade up once
 * when they first enter the viewport. Respects prefers-reduced-motion and
 * simply stays visible if JavaScript is unavailable (see globals.css).
 */
export function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));

    /* Printing (or exporting) the page should never hide content. */
    const revealAll = () => nodes.forEach((node) => node.classList.add("is-visible"));
    window.addEventListener("beforeprint", revealAll);

    return () => {
      observer.disconnect();
      window.removeEventListener("beforeprint", revealAll);
    };
  }, []);

  return null;
}
