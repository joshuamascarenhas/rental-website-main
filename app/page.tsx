'use client';

import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
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
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg border border-indigo-100 p-10 max-w-md w-full"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        {isSignUp ? "Create Account" : "Sign In"}
      </h2>
      <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
        Email address
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Your email"
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:outline-none"
      />

      <label htmlFor="password" className="block font-semibold text-gray-700 mb-1">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        placeholder="Your password"
        className="w-full px-4 py-3 mb-7 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow transition"
      >
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>

      <p className="mt-7 text-center text-gray-600">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-indigo-600 font-semibold hover:underline focus:outline-none"
        >
          {isSignUp ? "Sign in" : "Sign up"}
        </button>
      </p>
      {error && (
        <p className="mt-4 text-center text-red-600 font-semibold" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
