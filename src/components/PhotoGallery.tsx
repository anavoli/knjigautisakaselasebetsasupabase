import React from 'react';
import { Camera } from 'lucide-react';

// Local photos will be loaded from /public/images/village
const localPhotos = [
  {
    src: "/images/village/placeholder.txt",
    alt: "Локална фотографија",
    caption: "Додајте своје фотографије у public/images/village фолдер"
  }
];

const externalPhotos = [
  {
    src: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
    alt: "Традиционална кућа",
    caption: "Традиционална архитектура села"
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    alt: "Пејзаж",
    caption: "Природне лепоте околине"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    alt: "Планине",
    caption: "Планински предели"
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    alt: "Шума",
    caption: "Шумски предели"
  }
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Camera className="text-brown-500" size={24} />
        <h2 className="text-2xl font-bold text-brown-800">Галерија фотографија</h2>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-brown-800 mb-4">Локалне фотографије</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localPhotos.map((photo, index) => (
            <div
              key={`local-${index}`}
              className="bg-white rounded-lg shadow-book overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-brown-800 text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brown-800 mb-4">Остале фотографије</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalPhotos.map((photo, index) => (
            <div
              key={`external-${index}`}
              className="bg-white rounded-lg shadow-book overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-brown-800 text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;