/**
 * Firebase configuration — ready for integration.
 *
 * 1. Create a Firebase project at https://console.firebase.google.com
 * 2. Copy your config values into .env.local:
 *    NEXT_PUBLIC_FIREBASE_API_KEY=
 *    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
 *    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
 *    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
 *    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
 *    NEXT_PUBLIC_FIREBASE_APP_ID=
 * 3. Uncomment the initialization below and install firebase:
 *    npm install firebase
 */

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "",
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

// Firebase App initialization
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (isFirebaseConfigured) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  // Create mock objects for development without Firebase config
  app = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
}

export { app, auth, db };
export default app;