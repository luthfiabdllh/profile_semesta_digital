"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ModeToggle from "../ui/modeToggle";
import Link from "next/link";

export default function ResizableNavbar() {
  const navItems = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Services", link: "/#services"},
    {name: "Products", link: "/statistic"},
    {name: "Contact", link: "/#contact"}
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <Navbar className="top-2 z-50 fixed">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center gap-4">
          <NavItems items={navItems} />
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <ModeToggle />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  );
}