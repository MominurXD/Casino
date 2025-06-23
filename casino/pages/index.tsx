import React from 'react';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Welcome to CryptoCasino</h1>
        <p className="mb-8 text-lg text-gray-300">Play provably fair games and win real crypto in a secure and fun environment.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/register">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-2xl shadow-lg">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-transparent border border-white text-white px-6 py-2 text-lg rounded-2xl hover:bg-white hover:text-black transition">Login</Button>
          </Link>
        </div>
        <div className="mt-6">
          <Link href="/dice">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 text-lg rounded-2xl shadow-lg">
              Play Dice 🎲
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
