import "../assets/styles/home.css";
import Hero from "../components/home/Hero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesPreview from "../components/home/ServicesPreview";
import LocationsPreview from "../components/home/LocationsPreview";
import ExternalPartners from "../components/home/ExternalPartners";
import OurSpecialists from "../components/home/OurSpecialists";
import AgreementsPreview from "../components/home/AgreementsPreview";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ServicesPreview />
      <AboutSummary />
      <OurSpecialists />
      <LocationsPreview />
      <AgreementsPreview />
      
    </main>
  );
}

export default Home;