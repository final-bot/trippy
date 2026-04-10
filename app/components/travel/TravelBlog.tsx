import Box from "@mui/material/Box";
import HeroSection from "./HeroSection";
import TrendingSection from "./TrendingSection";
import PopularDestinationsSection from "./PopularSection";
import WhyChooseSection from "./WhyChooseSection";
import PricingSection from "./PricingSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

export default function TravelBlog() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <HeroSection />
      <Box sx={{ backgroundColor: "#fafafa" }}>
        <TrendingSection />
        <PopularDestinationsSection />
        <WhyChooseSection />
        <PricingSection />
        <NewsletterSection />
        <Footer />
      </Box>
    </Box>
  );
}
