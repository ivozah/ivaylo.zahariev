'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-200">
      <nav className="max-w-5xl mx-auto flex gap-6 p-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}