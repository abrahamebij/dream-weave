'use client';

import Link from "next/link";
import Img from "./ui/Img";
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dream-nav bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex gap-2 text-2xl font-bold items-center">
          <Img className="w-8" src="/logo.png" alt="Site's Logo" />
          <span className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DreamWeave
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          >
            Home
          </Link>
          <Link
            href="/dream"
            className="text-white/80 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          >
            Dream
          </Link>
          <a
            href="#gallery"
            className="text-white/80 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          >
            Gallery
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dream"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dream
            </Link>
            <a
              href="#gallery"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
