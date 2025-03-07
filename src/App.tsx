import React, { useState } from 'react';
import { Book, Camera, Home, PenTool } from 'lucide-react';
import GuestbookForm from './components/GuestbookForm';
import GuestbookEntries from './components/GuestbookEntries';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'guestbook' | 'gallery'>('home');

  return (
    <div className="min-h-screen bg-cream-100">
      <nav className="bg-brown-800 text-cream-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Село Шебет</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeSection === 'home' ? 'bg-brown-500' : 'hover:bg-brown-500'
              }`}
            >
              <Home size={20} />
              <span>Почетна</span>
            </button>
            <button
              onClick={() => setActiveSection('guestbook')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeSection === 'guestbook' ? 'bg-brown-500' : 'hover:bg-brown-500'
              }`}
            >
              <Book size={20} />
              <span>Књига утисака</span>
            </button>
            <button
              onClick={() => setActiveSection('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeSection === 'gallery' ? 'bg-brown-500' : 'hover:bg-brown-500'
              }`}
            >
              <Camera size={20} />
              <span>Галерија</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        {activeSection === 'home' && (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brown-800 mb-6">Добродошли у Шебет</h2>
            <p className="text-xl text-brown-800 mb-8">
              Откријте лепоту нашег села кроз приче и утиске посетилаца
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <button
                onClick={() => setActiveSection('guestbook')}
                className="bg-cream-200 p-6 rounded-lg shadow-book hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Book size={48} className="mx-auto mb-4 text-brown-500" />
                <h3 className="text-2xl font-bold text-brown-800 mb-4">Књига утисака</h3>
                <p className="text-brown-800">
                  Поделите своје искуство и утиске о посети нашем селу
                </p>
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className="bg-cream-200 p-6 rounded-lg shadow-book hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Camera size={48} className="mx-auto mb-4 text-brown-500" />
                <h3 className="text-2xl font-bold text-brown-800 mb-4">Галерија</h3>
                <p className="text-brown-800">
                  Погледајте фотографије које приказују лепоту нашег села
                </p>
              </button>
            </div>
          </div>
        )}

        {activeSection === 'guestbook' && (
          <div className="book max-w-4xl mx-auto bg-cream-200 rounded-lg shadow-book p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <GuestbookForm />
              <GuestbookEntries />
            </div>
          </div>
        )}

        {activeSection === 'gallery' && <PhotoGallery />}
      </main>
    </div>
  );
}

export default App;