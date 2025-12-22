import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderFormWrapper } from "./order-form-wrapper"

export const metadata = {
  title: "Form Pemesanan - Lucky Mart",
  description: "Isi form pemesanan untuk membeli produk elektronik di Lucky Mart",
}

export default function OrderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <OrderFormWrapper />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
