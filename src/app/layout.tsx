import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Genealogger - Apps for Genealogists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100">
          <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-brand-600"
            >
              <div className="flex">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="Genealogger"
                  width={32}
                  height={32}
                />
                <span className="pl-0.5">
                  enealog<span className="text-slate-900">ger</span>
                </span>
              </div>
            </Link>
            {/* <div className="space-x-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-brand-600 transition">
                Features
              </a>
              <a href="/devlog" className="hover:text-brand-600 transition">
                Dev Log
              </a>
              <a
                href="https://github.com"
                className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                GitHub
              </a>
            </div> */}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
