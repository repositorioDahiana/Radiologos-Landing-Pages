import "../assets/styles/location.css";

import LocationsHero from "../components/location/LocationsHero";
import LocationsPreview from "../components/home/LocationsPreview";

function Ppss() {
  return (
    <div className="ppss-page">
      <LocationsHero />
      <LocationsPreview />
    </div>
  );
}

export default Ppss;