import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const multipliers = [7, 2, 1, 0.8, 0.7, 0.8, 1, 2, 7];
const gridRows = 12;

export default function Plinko() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [ballPath, setBallPath] = useState<number[]>([]);
  const [dropping, setDropping] = useState(false);
  const [finalSlot, setFinalSlot] = useState<number | null>(null);

  const startDrop = () => {
    if (dropping || betAmount <= 0 || balance < betAmount) return;
    setDropping(true);
    setFinalSlot(null);
    const path: number[] = [];
    let slot = 4;
    for (let i = 0; i < gridRows; i++) {
      const move = Math.random() < 0.5 ? -1 : 1;
      slot = Math.max(0, Math.min(multipliers.length - 1, slot + move));
      path.push(slot);
    }
    setBallPath(path);
    setTimeout(() => {
      const end = path[path.length - 1];
      const win = betAmount * multipliers[end];
      setBalance(prev => prev - betAmount + win);
      setFinalSlot(end);
      setDropping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Plinko</h1>
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        <div className="bg-[#0f3460] p-4 rounded-xl w-full max-w-xs">
          <div className="mb-2">Balance: €{balance.toFixed(2)}</div>
          <div className="mb-2">
            <label className="block mb-1">Bet Amount:</label>
            <input
              type="number"
              className="w-full rounded px-3 py-2 text-black"
              value={betAmount}
              onChange={(e) => setBetAmount(parseFloat(e.target.value))}
              min="1"
            />
          </div>
          <Button onClick={startDrop} className="w-full bg-green-500 hover:bg-green-600 mt-2">BET</Button>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="relative w-full flex justify-center min-h-[300px] mb-4">
            {dropping && (
              <div className="absolute top-0 h-4 w-4 bg-blue-400 rounded-full animate-bounce transition-all duration-1000" />
            )}
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${multipliers.length}, 1fr)` }}>
              {multipliers.map((mult, idx) => (
                <div key={idx} className="text-xs text-center text-white">{mult}x</div>
              ))}
            </div>
          </div>
          {finalSlot !== null && (
            <p className="text-lg text-yellow-400">Ball landed in slot {finalSlot + 1} — You won {betAmount * multipliers[finalSlot]}!</p>
          )}
        </div>
      </div>
    </div>
  );
}