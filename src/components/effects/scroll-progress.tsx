"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height ? (scrollTop / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="fixed left-0 top-0 z-[60] h-1 bg-black dark:bg-white" style={{ width: `${progress}%` }} />;
}

