import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Dice() {
  const [result, setResult] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setResult(random);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">🎲 Dice Game</h1>
        <p className="mb-4 text-gray-400">Click the button to roll a 6-sided die.</p>
        <Button onClick={rollDice} className="bg-yellow-500 hover:bg-yellow-600 w-full">
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
        {result !== null && (
          <div className="mt-6 text-2xl font-bold">You rolled a {result}!</div>
        )}
        <Link href="/">
          <p className="mt-6 text-sm underline text-blue-400">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}
