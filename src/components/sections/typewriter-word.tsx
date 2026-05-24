"use client";

import { useEffect, useState } from "react";

type TypewriterWordProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export function TypewriterWord({
  words,
  typingSpeed = 90,
  deletingSpeed = 55,
  pauseMs = 1200,
  className,
}: TypewriterWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const current = words[wordIndex % words.length];
    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setCharIndex((prev) => prev + 1);
          return;
        }

        setIsDeleting(true);
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          return;
        }

        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, timeout);

    if (!isDeleting && charIndex === current.length) {
      window.clearTimeout(timer);
      const pauseTimer = window.setTimeout(() => setIsDeleting(true), pauseMs);
      return () => window.clearTimeout(pauseTimer);
    }

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  const currentWord = words.length > 0 ? words[wordIndex % words.length] : "";
  const display = currentWord.slice(0, charIndex);

  return (
    <span className={className}>
      {display}
      <span className="ml-1 inline-block h-[0.95em] w-[0.08em] animate-pulse bg-zinc-900 align-[-0.08em] dark:bg-zinc-200" aria-hidden="true" />
    </span>
  );
}
