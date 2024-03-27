"use client";

import firebase, { auth } from '../utils/firebase';
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Inicio de sesión exitoso, puedes redirigir al usuario a otra página
      window.location.href = '/';
    } catch (error: any) { // Especifica el tipo como 'any'
      console.error('Error de inicio de sesión:', error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back. We exist to make entrepreneurism easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleLogin}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    className="form-input w-full text-gray-800"
                    placeholder="Ingresa tu correo"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  </div>
                  <input
                    id="password"
                    value={password}
                    type="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-600 ml-2">Keep me signed in</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">Do not you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
