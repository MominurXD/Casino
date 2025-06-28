import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Welcome to CryptoCasino</h1>
        <p className="mb-8 text-lg text-gray-300">Play provably fair games and win real crypto in a secure and fun environment.</p>
        <div className="flex justify-center space-x-4 flex-wrap gap-4">
          <Link href="/register"><Button className="bg-green-500 hover:bg-green-600">Get Started</Button></Link>
          <Link href="/login"><Button className="bg-transparent border border-white text-white">Login</Button></Link>
          <Link href="/dice"><Button className="bg-yellow-500 hover:bg-yellow-600">Play Dice</Button></Link>
          <Link href="/plinko"><Button className="bg-blue-500 hover:bg-blue-600">Play Plinko</Button></Link>
        </div>
      </div>
    </div>
  );
}