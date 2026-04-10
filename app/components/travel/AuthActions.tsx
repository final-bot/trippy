"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAuth } from "./AuthContext";

interface AuthActionsProps {
  variant?: "navbar" | "hero";
  showSignUp?: boolean;
}

export default function AuthActions({
  variant = "navbar",
  showSignUp = false,
}: AuthActionsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, hydrated, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isHero = variant === "hero";

  const loginLabel = useMemo(() => {
    if (!user) {
      return "Login";
    }

    return user.name.split(" ")[0];
  }, [user]);

  function handleLogin() {
    if (!name.trim() || !email.trim()) {
      return;
    }

    login({
      name: name.trim(),
      email: email.trim(),
    });
    setOpen(false);
    router.push("/dashboard");
  }

  function handleLogout() {
    logout();

    if (pathname === "/dashboard") {
      router.push("/");
    }
  }

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {showSignUp && !user && (
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
        )}

        {user ? (
          <>
            <Button
              component="a"
              href="/dashboard"
              sx={{
                px: isHero ? 2.8 : 2.4,
                py: isHero ? 1.2 : 1.05,
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: isHero ? "#141414" : "#fff",
                backgroundColor: isHero ? "rgba(255,255,255,0.92)" : "#141414",
                border: isHero ? "1px solid rgba(255,255,255,0.8)" : "none",
                "&:hover": {
                  backgroundColor: isHero ? "#fff" : "#2A2A2A",
                },
              }}
            >
              {loginLabel}
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                px: isHero ? 2.8 : 2.2,
                py: isHero ? 1.2 : 1.05,
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: isHero ? "#fff" : "#141414",
                backgroundColor: isHero ? "#141414" : "#fff",
                border: "1px solid rgba(20,20,20,0.08)",
                "&:hover": {
                  backgroundColor: isHero ? "#2A2A2A" : "#F7F7F7",
                },
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setOpen(true)}
            sx={{
              px: isHero ? 3 : 2.4,
              py: isHero ? 1.25 : 1.15,
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "none",
              color: "#fff",
              backgroundColor: "#141414",
              letterSpacing: isHero ? "0.05em" : "normal",
              boxShadow: isHero
                ? "0 2px 12px rgba(0,0,0,0.25)"
                : "0 12px 24px rgba(20,20,20,0.14)",
              "&:hover": { backgroundColor: "#2A2A2A" },
            }}
          >
            Login
          </Button>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 480,
            borderRadius: "28px",
            p: 1,
            background:
              "radial-gradient(circle at top, rgba(200,240,208,0.28), transparent 40%), #fff",
          },
        }}
      >
        <DialogTitle sx={{ pb: 0.5 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.1rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#141414",
            }}
          >
            Welcome Back
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#747474",
              mb: 2.5,
            }}
          >
            This is a lightweight front-end sign in for now. Enter your details
            and we&apos;ll take you straight to your travel dashboard.
          </Typography>

          <Box sx={{ display: "grid", gap: 1.6 }}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            <TextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
            <Button
              onClick={handleLogin}
              sx={{
                mt: 1,
                py: 1.45,
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 800,
                textTransform: "none",
                color: "#fff",
                backgroundColor: "#141414",
                "&:hover": { backgroundColor: "#2A2A2A" },
              }}
            >
              Sign In
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
