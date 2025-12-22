"use client"

import { useSearchParams } from "next/navigation"
import { OrderForm } from "@/components/order-form"

export function OrderFormWrapper() {
  const searchParams = useSearchParams()
  const product = searchParams.get("product") || ""

  return <OrderForm selectedProduct={product} />
}
