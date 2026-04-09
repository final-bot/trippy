import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

import { TRAVEL_PLANS } from "../../data/travel";

export default function PricingSection() {
  return (
    <Box
      component="section"
      id="plans"
      sx={{
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 8, md: 10 },
        backgroundColor: "#fafafa",
        scrollMarginTop: "24px",
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 6 }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#141414",
            mb: 2,
          }}
        >
          Choose Your Travel Plan
        </Typography>
        <Box
          component="svg"
          viewBox="0 0 380 44"
          sx={{
            width: { xs: 220, md: 340 },
            height: "auto",
            mx: "auto",
            mt: -3,
            mb: 2,
          }}
          fill="none"
        >
          <path
            d="M6 24 C90 12, 168 12, 250 18"
            stroke="#F3B63F"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M205 34 C272 24, 324 20, 374 12"
            stroke="#F3B63F"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            lineHeight: 1.7,
            color: "#7A7A7A",
          }}
        >
          Flexible packages designed for every type of traveler. Start small or
          go premium, your journey, your choice.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {TRAVEL_PLANS.map((plan) => (
          <Box
            key={plan.id}
            sx={{
              borderRadius: "34px",
              border: "1px solid rgba(20,20,20,0.08)",
              p: { xs: 3, md: 4 },
              backgroundColor: "#fff",
              boxShadow: plan.featured
                ? "0 28px 60px rgba(20,20,20,0.10)"
                : "0 14px 30px rgba(20,20,20,0.04)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.55rem", md: "1.7rem" },
                color: "#141414",
                mb: 4,
              }}
            >
              {plan.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 3 }}>
              <Typography sx={{ fontSize: "15px", color: "#9A9A9A" }}>
                From
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.4rem", md: "2.7rem" },
                  lineHeight: 1,
                  color: "#141414",
                }}
              >
                ${plan.price}
              </Typography>
              <Typography sx={{ fontSize: "15px", color: "#9A9A9A" }}>
                / trip
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "15px",
                color: "#6F6F6F",
                lineHeight: 1.7,
                mb: 3.5,
                minHeight: { md: 52 },
              }}
            >
              {plan.description}
            </Typography>

            <Button
              component="a"
              href={`/sign-up?plan=${plan.id}`}
              sx={{
                justifyContent: "space-between",
                px: 2.3,
                py: 1.15,
                mb: 3.5,
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "none",
                color: plan.featured ? "#fff" : "#141414",
                backgroundColor: plan.featured ? "#141414" : "#fff",
                border: "1px solid rgba(20,20,20,0.08)",
                boxShadow: plan.featured
                  ? "0 14px 28px rgba(20,20,20,0.18)"
                  : "none",
                "&:hover": {
                  backgroundColor: plan.featured ? "#242424" : "#F7F7F7",
                },
              }}
            >
              {plan.cta}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: plan.featured ? "#fff" : "#EDEDED",
                  color: "#141414",
                  ml: 2,
                }}
              >
                <NorthEastRoundedIcon fontSize="small" />
              </Box>
            </Button>

            <Box sx={{ display: "grid", gap: 1.6 }}>
              {plan.features.map((feature) => (
                <Box
                  key={feature}
                  sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ fontSize: 18, color: "#141414", flexShrink: 0 }}
                  />
                  <Typography sx={{ fontSize: "15px", color: "#4F4F4F" }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
