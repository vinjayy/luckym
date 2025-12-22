import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "Products - Lucky Mart",
  description: "Lihat katalog lengkap produk elektronik berkualitas di Lucky Mart",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Complete Collection
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Katalog Produk
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Temukan berbagai produk elektronik berkualitas untuk kebutuhan rumah Anda dengan harga terbaik
            </p>
          </div>
          <ProductCatalog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
