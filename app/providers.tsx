// app/providers.tsx
"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AuthProvider } from "./components/travel/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppRouterCacheProvider>
  );
}
