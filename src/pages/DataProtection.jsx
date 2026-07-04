import "../assets/styles/protection.css";
import DataProtectionHero from "../components/dataprotection/DataProtectionHero";
import DataProtectionInformation from "../components/dataprotection/DataProtectionInformation";


function DataProtection() {
  return (
    <main className="about-page">
        <DataProtectionHero />
        <DataProtectionInformation />
    </main>
  );
}

export default DataProtection;