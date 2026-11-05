
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import Logo from "./Logo";
import { nav } from "@/config/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onOutsideClick = (event: PointerEvent) => {
      if (
        !headerRef.current?.contains(
          event.target as Node
        )
      ) {
        setActiveDropdown(null);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener(
      "pointerdown",
      onOutsideClick
    );
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        onOutsideClick
      );
      document.removeEventListener(
        "keydown",
        onEscape
      );
    };
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center gap-4 px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="BSG — Build Something Great"
          className="flex shrink-0 items-center"
        >
          <Logo priority />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-0.5 xl:flex"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            const open =
              activeDropdown === item.name;

            return (
              <div
                key={item.name}
                className="relative"
              >
                {item.children?.length ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`menu-${item.name.replace(/\s+/g, "-")}`}
                      onClick={() =>
                        setActiveDropdown(
                          open ? null : item.name
                        )
                      }
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                        active || open
                          ? "bg-[#F0F9ED] text-[#438F32]"
                          : "text-[#333333] hover:bg-[#F0F9ED] hover:text-[#438F32]"
                      }`}
                    >
                      {item.name}

                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {open && (
                      <div
                        id={`menu-${item.name.replace(/\s+/g, "-")}`}
                        className="absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_18px_55px_rgba(15,23,42,0.12)]">

                          {/* Dropdown Heading */}
                          <div className="px-3 pb-3 pt-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#438F32]">
                              {item.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              Explore opportunities with BSG
                            </p>
                          </div>

                          <div className="border-t border-slate-100" />

                          {/* Dropdown Items */}
                          <div className="py-2">
                            {item.children.map(
                              (child) => (
                                <Link
                                  key={`${child.name}-${child.href}`}
                                  href={child.href}
                                  onClick={closeMenus}
                                  className="group flex items-start justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-[#F0F9ED]"
                                >
                                  <span>
                                    <span className="block text-sm font-semibold text-[#333333]">
                                      {child.name}
                                    </span>

                                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                                      {child.description}
                                    </span>
                                  </span>

                                  <ArrowUpRight
                                    size={15}
                                    className="mt-1 shrink-0 text-slate-400 transition-colors group-hover:text-[#438F32]"
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={
                      pathname === item.href
                        ? "page"
                        : undefined
                    }
                    className={`block whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                      active
                        ? "bg-[#F0F9ED] text-[#438F32]"
                        : "text-[#333333] hover:bg-[#F0F9ED] hover:text-[#438F32]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="ml-auto hidden shrink-0 items-center gap-4 xl:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-[#333333] transition-colors hover:text-[#438F32]"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-[#438F32] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#347429]"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setActiveDropdown(null);
          }}
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#333333] xl:hidden"
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-5 xl:hidden"
        >
          <div className="mx-auto max-w-xl space-y-1">
            {nav.map((item) => (
              <div key={item.name}>
                {item.children?.length ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={
                        activeDropdown === item.name
                      }
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name
                            ? null
                            : item.name
                        )
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#333333] hover:bg-[#F0F9ED]"
                    >
                      {item.name}

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 border-l-2 border-[#60BA45] pl-3">
                        {item.children.map(
                          (child) => (
                            <Link
                              key={`${child.name}-${child.href}`}
                              href={child.href}
                              onClick={closeMenus}
                              className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#F0F9ED]"
                            >
                              <span className="block text-sm font-semibold text-[#333333]">
                                {child.name}
                              </span>

                              <span className="mt-1 block text-xs text-slate-500">
                                {child.description}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                      isActive(item.href)
                        ? "bg-[#F0F9ED] text-[#438F32]"
                        : "text-[#333333] hover:bg-[#F0F9ED]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
              <Link
                href="/login"
                onClick={closeMenus}
                className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-[#333333]"
              >
                Log in
              </Link>

              <Link
                href="/register"
                onClick={closeMenus}
                className="rounded-xl bg-[#438F32] px-4 py-3 text-center text-sm font-bold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
