import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Product, formatPrice } from "@/lib/data"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400&query=modern electronics product"}
            alt={product.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5 space-y-3">
          <Badge
            variant="secondary"
            className="text-xs font-semibold bg-secondary/20 text-secondary hover:bg-secondary/30"
          >
            {product.category}
          </Badge>
          <h3 className="font-bold text-foreground line-clamp-2 text-lg group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full font-semibold shadow-lg hover:shadow-xl transition-all group/btn">
          <Link href={`/order?product=${encodeURIComponent(product.name)}`}>
            <ShoppingCart className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
            Buy Product
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
