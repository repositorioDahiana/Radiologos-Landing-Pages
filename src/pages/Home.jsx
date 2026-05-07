import "../assets/styles/home.css";
import Hero from "../components/home/Hero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesPreview from "../components/home/ServicesPreview";
import LocationsPreview from "../components/home/LocationsPreview";
import ExternalPartners from "../components/home/ExternalPartners";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <AboutSummary />
      <ServicesPreview />
      <LocationsPreview />
    </main>
  );
}

export default Home;