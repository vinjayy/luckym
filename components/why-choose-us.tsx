import { Award, BadgeDollarSign, Zap } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Produk Berkualitas",
    description: "Semua produk kami terjamin kualitasnya dari brand terpercaya",
    color: "primary",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description: "Harga terbaik dengan berbagai promo menarik untuk Anda",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Pelayanan Cepat",
    description: "Proses pemesanan cepat dan pengiriman tepat waktu",
    color: "accent",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Mengapa Pilih Lucky Mart?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pengalaman berbelanja elektronik yang berbeda dengan layanan terbaik
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card shadow-lg border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-${benefit.color}/10 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className={`w-10 h-10 text-${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

              {/* Decorative number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
