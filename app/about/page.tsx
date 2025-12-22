import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Clock } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About - Lucky Mart",
  description: "Tentang Lucky Mart - Toko elektronik terpercaya untuk kebutuhan rumah Anda",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                Tentang <span className="text-primary">Lucky Mart</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Mitra terpercaya Anda dalam memilih elektronik berkualitas
              </p>
            </div>

            {/* Store Image */}
            <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/10">
              <Image
                src="/lucky-mart-electronics-store-interior.jpg"
                alt="Lucky Mart Store"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-8 pb-8 px-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Tentang Kami</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Lucky Mart adalah toko elektronik yang menyediakan berbagai produk elektronik rumah tangga
                    berkualitas. Kami berkomitmen untuk memberikan pelayanan terbaik dengan harga yang kompetitif.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Dengan pengalaman bertahun-tahun, kami menjadi pilihan utama pelanggan untuk kebutuhan elektronik
                    dari berbagai brand ternama.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-2 border-secondary/10 hover:border-secondary/30 transition-colors">
                <CardContent className="pt-8 pb-8 px-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Hubungi Kami</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                        <p className="text-foreground font-medium">info@luckymart.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">WhatsApp</p>
                        <p className="text-foreground font-medium">+62 812-3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Jam Operasional</p>
                        <p className="text-foreground font-medium">Senin - Sabtu: 09.00 - 21.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
