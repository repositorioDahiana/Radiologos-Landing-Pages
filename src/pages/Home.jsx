import "../assets/styles/home.css";
import Hero from "../components/home/Hero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesPreview from "../components/home/ServicesPreview";
import ExternalPartners from "../components/home/ExternalPartners";
import OurSpecialists from "../components/home/OurSpecialists";
import AgreementsPreview from "../components/home/AgreementsPreview";
import LocationIntro from "../components/location/LocationIntro";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ServicesPreview />
      <AboutSummary />
      <OurSpecialists />
      <LocationIntro />
      <AgreementsPreview />
      
    </main>
  );
}

export default Home;