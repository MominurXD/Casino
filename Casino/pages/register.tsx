import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form>
          <input type="text" placeholder="Username" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 border border-gray-600" />
          <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 border border-gray-600" />
          <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 border border-gray-600" />
          <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">Already have an account? <Link href="/login" className="text-blue-400 underline">Login</Link></p>
      </div>
    </div>
  );
}
