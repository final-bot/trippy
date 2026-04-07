// import Footer from "./Footer";
// import HeroSection from "./HeroSection";

// export default function TravelBlog() {
//   return (
//     <>
//     <HeroSection />
//     <Footer />
//     </>
//   );
// }

import Box from "@mui/material/Box";
import HeroSection from "./HeroSection";
import TrendingSection from "./TrendingSection";
import PopularDestinationsSection from "./PopularSection";
import Footer from "./Footer";

export default function TravelBlog() {
  return (
    <Box sx={{ minHeight: "100vh" }}>      
      <HeroSection />
      <Box sx={{ backgroundColor: "#fafafa" }}>
        <TrendingSection />
        <PopularDestinationsSection />
        {/* Newsletter section with full-width light bg */}
        <Footer />
      </Box>

    </Box>
  );
}
