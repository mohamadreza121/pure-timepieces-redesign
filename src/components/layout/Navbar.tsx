"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-white/[0.08] bg-black/75 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex w-full max-w-none items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 xl:px-10 2xl:px-12",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <Link
          href="/"
          aria-label="Pure Timepieces homepage"
          className="group flex items-center gap-4"
        >
          <span className="font-display text-xl tracking-[-0.03em] text-white/42 transition duration-300 group-hover:text-white/70">
            PT
          </span>

          <span className="h-5 w-px bg-white/[0.14]" />

          <span className="font-display text-[1.55rem] tracking-[-0.025em] text-white/92 transition duration-300 group-hover:text-white">
            Pure Timepieces
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-11">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[1.05rem] font-medium tracking-[-0.015em] text-white/66 transition duration-300 hover:text-white xl:text-[1.12rem]"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white/65 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-white/[0.12] bg-black/20 text-white transition hover:border-white/25 hover:bg-white/[0.05] lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="overflow-hidden border-t border-white/[0.07] bg-black/92 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid px-4 py-6 sm:px-6">
              {siteConfig.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{
                    opacity: 0,
                    y: 12
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.045
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-white/[0.07] py-5 font-display text-3xl tracking-[-0.03em] text-white/80 transition hover:text-white"
                  >
                    {item.label}

                    <span className="font-sans text-xs tracking-[0.24em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}