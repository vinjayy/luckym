import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldAlert, Info } from "lucide-react"

export const metadata = {
  title: "Terms and Conditions - Lucky Mart",
  description: "Syarat dan Ketentuan penggunaan layanan Lucky Mart",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: October 2025
              </p>
            </div>

            {/* Crucial Notice: Refund Policy */}
            <Card className="mb-12 border-2 border-destructive/20 bg-destructive/5 shadow-none">
              <CardContent className="pt-6 flex gap-4 items-center">
                <ShieldAlert className="w-8 h-8 text-destructive flex-shrink-0" />
                <p className="text-sm md:text-base font-medium text-destructive">
                  <strong>Important:</strong> All electronic sales at Lucky Mart are strictly non-refundable. Please review Section 5 carefully before purchasing.
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-slate max-w-none space-y-12">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground m-0">1. General Provisions</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Lucky Mart (the "Site"). By accessing our Site or purchasing a product, you represent that you are at least the age of majority in your jurisdiction and agree to be bound by these Terms. Lucky Mart reserves the right to refuse service, terminate accounts, or cancel orders at our sole discretion.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground m-0">2. Product Information and Pricing</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl border border-border">
                    <h3 className="font-semibold mb-2">Accuracy</h3>
                    <p className="text-sm text-muted-foreground">We strive to be as accurate as possible with descriptions and images, however, we do not warrant that content is error-free.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border">
                    <h3 className="font-semibold mb-2">Pricing</h3>
                    <p className="text-sm text-muted-foreground">Prices are subject to change. We reserve the right to cancel orders placed at incorrect prices even if confirmed.</p>
                  </div>
                </div>
              </section>

              <Card className="shadow-xl border-2 border-primary/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <ShieldAlert className="text-primary" /> 5. Refund and Return Policy
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-bold text-foreground underline text-lg">STRICTLY NON-REFUNDABLE</p>
                    <p><strong>Final Sale Policy:</strong> All sales made through Lucky Mart are final. Once an order is processed, the transaction is complete.</p>
                    <p><strong>Non-Refundable:</strong> We do not offer cash refunds, credit card reversals, or store credit for "change of mind" or "purchased by mistake."</p>
                    <p><strong>No Returns:</strong> We do not accept returns once packaging has been opened or factory seals broken due to the sensitive nature of electronics.</p>
                    <div className="bg-muted p-4 rounded-lg text-sm italic">
                      <strong>Exceptions:</strong> If a product arrives physically damaged from shipping, you must notify us within 24 hours with photographic evidence for an exchange (same model only).
                    </div>
                  </div>
                </CardContent>
              </Card>

              <section className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">6. Warranty Disclaimer</h3>
                  <p className="text-muted-foreground">Lucky Mart provides no additional "in-house" warranty. Most products are covered by manufacturer warranty; technical issues must be addressed to authorized service centers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">7. Limitation of Liability</h3>
                  <p className="text-muted-foreground">Lucky Mart shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use purchased products.</p>
                </div>
              </section>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground italic">
                  Lucky Mart reserves the right to update these Terms at any time. Continued use of the Site constitutes acceptance of new Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}