'use client';

import { Instagram, Mail, Smile, Star, Github, Twitter, Sun, Sparkles } from 'lucide-react';

export default function Home() {
  const links = [
    { icon: <Smile size={18} />, label: 'My Website', url: 'https://sanzy.dev' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://instagram.com/sanzy' },
    { icon: <Mail size={18} />, label: 'Contact Me', url: 'mailto:sanzy@email.com' },
  ];

  const socials = [
    { icon: <Github size={20} />, url: 'https://github.com/sanzy' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/sanzy' },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-emerald-100 relative overflow-hidden px-4">

      {/* 🌟 Floating Shapes */}
      <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow -top-32 -left-32" />
      <div className="absolute w-64 h-64 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float-alt top-16 right-10" />
      <div className="absolute w-56 h-56 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-2xl opacity-40 -bottom-12 left-12" />

      {/* ✨ Sparkle & Star */}
      <Sparkles className="absolute top-10 right-6 text-yellow-400 opacity-70 animate-pulse" />
      <Star className="absolute bottom-6 left-10 text-pink-300 opacity-60 animate-ping-slow" />

      {/* ✨ Core Glass Card */}
      <div className="relative max-w-md w-full p-6 rounded-3xl border border-white/20 bg-white/60 backdrop-blur-2xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] text-center space-y-6 z-10">

        {/* Avatar */}
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition duration-300">
          <img src="https://i.pravatar.cc/100?img=12" alt="Sanzy" className="w-full h-full object-cover" />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-extrabold text-pink-600 tracking-tight">NamaAnda 💖</h1>
          <p className="text-sm text-gray-600 mt-1">Frontend Dev • UI Worshipper • Soft Glow Advocate</p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map(({ icon, label, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white hover:bg-pink-50 border border-pink-100 shadow-md hover:shadow-xl transition-all duration-200 text-pink-700 font-medium backdrop-blur-sm"
            >
              {icon} {label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-4 pt-2">
          {socials.map(({ icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              className="text-pink-500 hover:text-pink-700 hover:scale-110 transition-transform duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400 pt-4">© 2025 Sanzystore. Made with love & sparkles ✨</p>
      </div>
    </main>
  );
}
