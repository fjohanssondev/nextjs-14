import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-12 md:pt-48">
      <div className="flex flex-col md:flex-row container mx-auto gap-8">
        <section className="flex flex-col min-h-[50vh]">
          <h1 className="text-5xl max-w-6xl leading-snug font-bold text-slate-900">Transforming Transactions: Your Path to Effortless Invoicing</h1>
          <h2 className="text-slate-700 text-base max-w-2xl mt-4 leading-loose">Elevate your billing process to a pinnacle of efficiency with our intuitive invoicing solutions. Transform every invoice into a smooth pathway toward bolstered cash flow and fortified business relationships.</h2>
        </section>
        <section>
          <Image className="block md:hidden" width={560} height={620} src="/hero-mobile.png" alt="Showcase of the platform" />
          <Image className="hidden md:block" width={1000} height={760} src="/hero-desktop.png" alt="Showcase of the platform" />
        </section>
      </div>
    </main>
  )
}
