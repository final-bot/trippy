import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const FOOTER_GROUPS = [
  {
    title: "Explore",
    links: ["Destinations", "Experiences", "Journals"],
  },
  {
    title: "Company",
    links: ["About", "Partners", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact", "Privacy", "Terms"],
  },
] as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        px: { xs: 3, md: 8, lg: 12 },
        pb: { xs: 5, md: 6 },
        background:
          "linear-gradient(180deg, #eef5f2 0%, #f5f5f3 100%)",
        scrollMarginTop: "24px",
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid rgba(20,20,20,0.08)",
          pt: { xs: 4, md: 5 },
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#141414",
              mb: 1.25,
            }}
          >
            Trippy
          </Typography>
          <Typography
            sx={{
              maxWidth: 420,
              color: "#5A5A5A",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            Designed for travelers who want their next trip to feel considered,
            effortless, and memorable from first inspiration to final booking.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {FOOTER_GROUPS.map((group) => (
            <Box key={group.title}>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#141414",
                  mb: 1.25,
                }}
              >
                {group.title}
              </Typography>
              <Box sx={{ display: "grid", gap: 1 }}>
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    underline="none"
                    sx={{
                      color: "#5A5A5A",
                      fontSize: "14px",
                      "&:hover": { color: "#141414" },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          mt: 4,
          pt: 2.5,
          borderTop: "1px solid rgba(20,20,20,0.08)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1.5,
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "#5A5A5A", fontSize: "13px" }}>
          © 2026 Trippy. Curated travel for modern explorers.
        </Typography>
        <Typography sx={{ color: "#5A5A5A", fontSize: "13px" }}>
          Melbourne, Australia
        </Typography>
      </Box>
    </Box>
  );
}
