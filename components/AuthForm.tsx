'use client';

import { useState } from 'react';
import styles from './AuthForm.module.css';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <form onSubmit={handleSubmit} className={styles.outerBox}>
        <h2 className={styles.heading}>{isSignUp ? 'Create Account' : 'Sign In'}</h2>

        <label htmlFor="email" className={styles.label}>Email address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.button}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <p className={styles.switchText}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" onClick={() => setIsSignUp(!isSignUp)} className={styles.switchButton}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
}
