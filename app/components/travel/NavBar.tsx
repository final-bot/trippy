"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Trips", href: "#trips" },
  { label: "Community", href: "#community" },
  { label: "Plans", href: "#plans" },
  { label: "About", href: "#newsletter" },
  { label: "Contact", href: "#footer" },
] as const;

export default function NavBar() {
  const [activeHref, setActiveHref] = useState<string>("#home");

  useEffect(() => {
    const syncFromHash = () => {
      const currentHash = window.location.hash || "#home";
      setActiveHref(currentHash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          px: 1,
          py: 0.75,
          borderRadius: "999px",
          backgroundColor: "rgba(255,255,255,0.70)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.90)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <Button
              key={item.label}
              component="a"
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              sx={{
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "inherit",
                textTransform: "none",
                minWidth: 0,
                color: isActive ? "#fff" : "#5a5a5a",
                backgroundColor: isActive ? "#141414" : "transparent",
                boxShadow: isActive ? "0 8px 18px rgba(20,20,20,0.18)" : "none",
                scrollBehavior: "smooth",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: isActive ? "#141414" : "rgba(255,255,255,0.8)",
                  color: isActive ? "#fff" : "#141414",
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>

      <Button
        component="a"
        href="/sign-up"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          px: 2.6,
          py: 1.15,
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: "#fff",
          backgroundColor: "#141414",
          boxShadow: "0 12px 24px rgba(20,20,20,0.14)",
          "&:hover": { backgroundColor: "#2A2A2A" },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}
