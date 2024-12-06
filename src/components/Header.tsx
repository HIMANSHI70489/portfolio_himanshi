import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';

export function Header() {
  const [isDark, setIsDark] = React.useState(false);
  
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Himanshi
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden">
            <Menu className="w-5 h-5" />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#skills" className="hover:text-purple-600">Skills</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}