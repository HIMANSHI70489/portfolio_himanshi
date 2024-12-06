import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  React.useEffect(() => {
    const fileInput = document.getElementById('profile-upload') as HTMLInputElement;
    const imagePreview = document.getElementById('profile-preview') as HTMLImageElement;

    if (fileInput && imagePreview) {
      fileInput.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              imagePreview.src = e.target.result as string;
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Himanshi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;