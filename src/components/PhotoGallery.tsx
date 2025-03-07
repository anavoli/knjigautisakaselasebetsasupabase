 Kolo
import React from 'react';
import { Camera } from 'lucide-react';
// Local photos will be loaded from /public/images/village
const localPhotos = [
  {
    src: "/images/village/1.jpg",
    alt: "Пејзаж",
    caption: "Природне лепоте околине"
  },
   {
    src: "/images/village/2.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/3.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/4.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/5.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/6.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/7.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/8.jpg",
    alt: "Локална фотографија",
    caption: ""
  },   
   {
    src: "/images/village/11.jpg",
    alt: "Mesto-vrh Kolo",
    caption: "Mesto-vrh Kolo"
  },
   {
    src: "/images/village/12.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/13.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/14.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/15.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/16.jpg",
    alt: "Шума",
    caption: "Шумски предели"
  },
   {
    src: "/images/village/17.jpg",
    alt: "Традиционална кућа",
    caption: "Традиционална архитектура села"
  },
   {
    src: "/images/village/18.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/19.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/20.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/21.jpg",
    alt: "Планине",
    caption: "Планински предели"
  },
   
   {
    src: "/images/village/22.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/23.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   {
    src: "/images/village/24.jpg",
    alt: "Локална фотографија",
    caption: ""
  },
   
   
];

const externalPhotos = [
  {
    src: "/images/village/17.jpg",
    alt: "Традиционална кућа",
    caption: "Традиционална архитектура села"
  },
    {
    src: "/images/village/10.png",
    alt: "Локална фотографија",
    caption: ""
  },
  

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
