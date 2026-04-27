import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("swiggyCurrentUser");
    if (!storedUser) return;

    try {
      setCurrentUser(JSON.parse(storedUser));
    } catch {
      localStorage.removeItem("swiggyCurrentUser");
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("swiggyCurrentUser", JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("swiggyCurrentUser");
    setCurrentUser(null);
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      login,
      logout,
    }),
    [currentUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
