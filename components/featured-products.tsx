import { getFeaturedProducts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Sparkles } from "lucide-react"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Best Sellers
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Produk Unggulan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilihan terbaik dengan kualitas premium dan harga terjangkau
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
