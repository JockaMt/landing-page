'use client';
import { useEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const descriptions = [
    "Fullstack developer with experience in web, desktop, and mobile applications.",
    "Loves crafting elegant and functional user experiences.",
    "Specialized in React, Node.js, and Rust.",
    "Always learning, always building."
  ];

  const [displayText, setDisplayText] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (ref1.current) {
      ref1.current.scrollIntoView({ behavior: "smooth" });
      ref1.current.classList.remove("opacity-0");
      ref1.current.classList.add("opacity-100");
    }
  }, []);

  useEffect(() => {
    const currentText = descriptions[descIndex];
    ref2.current?.classList.remove("bg-[var(--foreground)]", "text-black", "rounded");
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 20); // velocidade de digitação
      return () => clearTimeout(timeout);
    } else {
      // Espera um pouco antes de limpar e trocar para o próximo
      const pauseTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setDescIndex((prev) => (prev + 1) % descriptions.length);
      }, 3000); // tempo de pausa após digitar a frase toda
      setTimeout(() => {
        ref2.current?.classList.add("bg-[var(--foreground)]", "text-black", "rounded");
      }, 2850); // tempo para adicionar a classe de destaque
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, descIndex, descriptions]);

  return (
    <div className="">
      <div ref={ref1} className="flex duration-500 opacity-0 flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-bold mb-4 shadow-[var(--primary)]-2xl">Jockson <span className="text-[var(--primary)]">Mateus</span></h1>
        <div ref={ref2} className="text-lg border border-transparent hover:border-[var(--primary)] bg-gray-800 w-96 rounded-lg text-white shadow-2xl-[var(--primary)] transition-all duration-500">
          <div className="flex items-center justify-between border-b p-3">
            <span className="flex gap-2"><FaCircle size={14} color="#FF605C" /><FaCircle size={14} color="#FFBD44" /><FaCircle size={14} color="#00CA4E" /></span>
            <p className="text-gray-500">../presentation.ts</p>
          </div>
          <p className="p-4">
            {displayText}
            <span className="animation-flash"> ▌</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
        <p className="text-md">I am a software developer with a passion for building web applications.</p>
      </div>
      <a href="/projects">a</a>
    </div>
  );
}
