import HeroSection from "@/components/HeroSection";
import TopDestinations from  "@/components/TopDestinations";
import EventsSection from "@/components/EventsSection";
import AdSection from "@/components/AdSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" container m-auto">
      <HeroSection />
      <EventsSection />
      <TopDestinations/>
      <AdSection/>
      <EmailSection/>
      <Footer/>
      
    </main>
  );
}
