"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 md:px-8 lg:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Lucky Mart Logo"
            width={48}
            height={48}
            priority
            className="rounded-xl object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1d4952]">
              Lucky Mart
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Electronics Store
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all hover:text-primary hover:scale-105 py-2",
                pathname === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild size="lg" className="font-semibold shadow-lg hover:shadow-xl transition-all">
            <Link href="/products">Buy Product</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-primary/10 bg-background shadow-lg">
          <nav className="max-w-7xl mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary py-3 px-4 rounded-lg",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Button asChild size="lg" className="w-full mt-2 font-semibold shadow-lg">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)}>
                Buy Product
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
