import HeroSection from "../components/ui/BannerSection/BannerSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SidebarTabsSection from "./components/SidebarTabsSection/SidebarTabsSection";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import MeetingsSection from "./components/MeetingsSection/MeetingsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import CollegesSection from "./components/CollegesSection/CollegesSection";
import RegistrationModal from "../components/ui/RegistrationModal";

export default function RoyalCollegePage() {
    return (
        <div style={{ fontFamily: "var(--font-ibm-plex-sans-thai), sans-serif" }}>
           
            <HeroSection />
            <AboutSection />
            <SidebarTabsSection />
            <HighlightSection/>
            <CollegesSection/>
            <MeetingsSection />
            <NewsSection />
        </div>
    );
}