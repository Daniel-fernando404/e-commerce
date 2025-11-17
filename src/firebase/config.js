import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_4jvSvauuFUXJj1kdN8wnDnD_0uCgQV4",
  authDomain: "coder-f7570.firebaseapp.com",
  projectId: "coder-f7570",
  storageBucket: "coder-f7570.firebasestorage.app",
  messagingSenderId: "415429630052",
  appId: "1:415429630052:web:6f1247b0f7759899722771"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)