import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Truck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-28 lg:py-36">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit text-sm font-semibold">
              <Zap className="w-4 h-4" />
              Elektronik Berkualitas Premium
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              Lucky Mart
              <br />
              <span className="text-primary">Toko Elektronik</span>
              <br />
              <span className="text-secondary">Terpercaya</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px] text-pretty leading-relaxed">
              Menyediakan katalog elektronik berkualitas untuk kebutuhan rumah Anda dengan harga terbaik dan pelayanan
              profesional
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span>Garansi Resmi</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-secondary" />
                </div>
                <span>Gratis Ongkir</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base font-semibold shadow-xl hover:shadow-2xl transition-all">
                <Link href="/products">Lihat Katalog Produk</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base font-semibold border-2 hover:bg-primary/5 transition-all bg-transparent"
              >
                <Link href="/about">Tentang Kami</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/10 h-full">
              <Image
                src="/modern-electronics-store-showroom-with-ac-tv-refri.jpg"
                alt="Lucky Mart Electronics - Showroom dengan AC, TV LED, Kulkas, dan Mesin Cuci"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
