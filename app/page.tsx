import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Mission } from "@/components/mission";
import { Objetivos } from "@/components/objetivos";
import { Talleres } from "@/components/talleres";
import { Schedule } from "@/components/schedule";
import { Gallery } from "@/components/gallery";
import { Pricing } from "@/components/pricing";
import { BookingForm } from "@/components/booking-form";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6FF]">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Objetivos />
      <Talleres />
      <Schedule />
      <Gallery />
      <Pricing />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
