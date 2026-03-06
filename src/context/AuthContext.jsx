import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase/firebase';

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Listen to user auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register function with email/password
  const register = async (name, email, password) => {
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Save user data to Firestore
      await addDoc(collection(db, 'users'), {
        name,
        email: newUser.email,
        uid: newUser.uid,
        authMethod: 'email',
        createdAt: new Date().toISOString(),
      });

      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Register/Login with Google
  const registerWithGoogle = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      // Check if user already exists in Firestore
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uid', '==', googleUser.uid));
      const existingUser = await getDocs(q);

      if (existingUser.empty) {
        // New user - save to Firestore
        await addDoc(usersRef, {
          name: googleUser.displayName || 'Google User',
          email: googleUser.email,
          uid: googleUser.uid,
          authMethod: 'google',
          photoURL: googleUser.photoURL || null,
          createdAt: new Date().toISOString(),
        });
      }

      return googleUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Login function
  const login = async (email, password) => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout function
  const logout = async () => {
    setError('');
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    registerWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
