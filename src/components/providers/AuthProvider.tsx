"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Context,
} from "react";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  type AuthError,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<User | null>;
  signUp: (email: string, password: string) => Promise<User | null>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
}

const AuthContext: Context<AuthContextValue | undefined> = createContext<
  AuthContextValue | undefined
>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth || typeof (auth as { onAuthStateChanged?: unknown }).onAuthStateChanged !== "function") {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthError = (err: AuthError): string => {
    switch (err.code) {
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Invalid email or password.";
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your connection.";
      default:
        return err.message || "An unexpected error occurred.";
    }
  };

  const signIn = async (email: string, password: string): Promise<User | null> => {
    if (!isFirebaseConfigured || !auth || typeof signInWithEmailAndPassword !== "function") {
      setError("Firebase not configured. Please add your config to .env.local");
      return null;
    }

    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      const message = handleAuthError(err as AuthError);
      setError(message);
      return null;
    }
  };

  const signUp = async (email: string, password: string): Promise<User | null> => {
    if (!isFirebaseConfigured || !auth || typeof createUserWithEmailAndPassword !== "function") {
      setError("Firebase not configured. Please add your config to .env.local");
      return null;
    }

    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      const message = handleAuthError(err as AuthError);
      setError(message);
      return null;
    }
  };

  const signOut = async (): Promise<void> => {
    if (!isFirebaseConfigured || !auth || typeof firebaseSignOut !== "function") {
      setError("Firebase not configured");
      return;
    }

    setError(null);
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      setError((err as Error).message || "Failed to sign out");
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    if (!isFirebaseConfigured || !auth || typeof sendPasswordResetEmail !== "function") {
      setError("Firebase not configured");
      return;
    }

    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(handleAuthError(err as AuthError));
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        resetPassword,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}