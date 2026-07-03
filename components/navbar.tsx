"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-sm font-medium tracking-wide">
          <span className="text-muted">[</span>
          <span className="text-foreground">NHN</span>
          <span className="text-muted">]</span>
          <span className="ml-2 hidden text-muted sm:inline font-sans font-normal">
            Naymul Hossain Nahian
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="/resume.pdf" className="btn-secondary" download>
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link py-2 text-base"
                >
                  {item.label}
                </a>
              ))}
              <a href="/resume.pdf" className="btn-primary mt-3 w-full" download>
                <Download className="h-3.5 w-3.5" />
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
