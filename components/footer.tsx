import Image from "next/image"
import Link from "next/link" // Import Link for navigation

const paymentMethods = [
  { name: "Visa", logo: "/VISA-logo.jpg" },
  { name: "Mastercard", logo: "/mastercard.jpg" },
  { name: "JCB", logo: "/JCB_logo.png" },
  { name: "American Express", logo: "/American-Express.png" },
  { name: "UnionPay", logo: "/union pay.jpg" },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/10 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Copyright & About Section */}
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-foreground">© 2025 Lucky Mart</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Toko Elektronik Terpercaya di Indonesia. Menyediakan berbagai kebutuhan elektronik berkualitas tinggi.
            </p>
          </div>

          {/* Quick Links / Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-foreground">Informasi</span>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang Kami
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
            </nav>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-foreground">Metode Pembayaran Tersedia</span>
            <div className="flex flex-wrap items-center gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-center bg-background rounded-lg border-2 border-border p-2 h-12 w-16 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
                  title={method.name}
                >
                  <Image
                    src={method.logo || "/placeholder.svg?height=32&width=48&query=payment card logo"}
                    alt={method.name}
                    width={48}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}