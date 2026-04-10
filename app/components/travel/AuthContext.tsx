"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  hydrated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const STORAGE_KEY = "trippy-auth-user";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedUser = window.localStorage.getItem(STORAGE_KEY);

      if (storedUser) {
        setUser(JSON.parse(storedUser) as AuthUser);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      hydrated,
      login: (nextUser) => {
        setUser(nextUser);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
      },
      logout: () => {
        setUser(null);
        window.localStorage.removeItem(STORAGE_KEY);
      },
    }),
    [hydrated, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
