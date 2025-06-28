import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Dice() {
  const [roll, setRoll] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);
    setMessage(result === 6 ? '🎉 You win!' : '😢 Try again!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">🎲 Dice Game</h1>
      <p className="mb-6 text-gray-400">Roll a 6 to win!</p>
      <Button className="bg-yellow-500 hover:bg-yellow-600" onClick={rollDice}>
        Roll Dice
      </Button>
      {roll !== null && (
        <div className="mt-6">
          <p className="text-3xl">You rolled: {roll}</p>
          <p className="mt-2 text-xl">{message}</p>
        </div>
      )}
    </div>
  );
}