import React, { useState } from 'react';
import { Camera, Video, Heart } from 'lucide-react';
import MediaLightbox from './MediaLightbox';
interface MediaGalleryProps {
  isAuthenticated: boolean;
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ isAuthenticated }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    // Fotoğraflar
    { type: 'image', src: '/images/r1.jpg', alt: 'r 1', title: '💕' },
    { type: 'image', src: '/images/r2.jpg', alt: 'r 2', title: '💕' },
    { type: 'image', src: '/images/r3.jpg', alt: 'r 3', title: '💕' },
    { type: 'image', src: '/images/r4.jpg', alt: 'r 4', title: '💕' },
    { type: 'image', src: '/images/r5.jpg', alt: 'r 5', title: '💕' },
    { type: 'image', src: '/images/r6.jpg', alt: 'r 6', title: '💕' },
    { type: 'image', src: '/images/r7.jpg', alt: 'r 7', title: '💕' },

    // Videolar
    { type: 'video', src: '/videos/v1.mp4', title: '💕' },
    { type: 'video', src: '/videos/v2.mp4', title: '💕' },
    { type: 'video', src: '/videos/v3.mp4', title: '💕' },
    { type: 'video', src: '/videos/v4.mp4', title: '💕' },
    { type: 'video', src: '/videos/v5.mp4', title: '💕' },
    { type: 'video', src: '/videos/v6.mp4', title: '💕' },
    { type: 'video', src: '/videos/v7.mp4', title: '💕' },
    { type: 'video', src: '/videos/v8.mp4', title: '💕' },
    { type: 'video', src: '/videos/v9.mp4', title: '💕' },
  ];

  const openLightbox = (index: number) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentMediaIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <div className="relative z-20 w-full px-4 py-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 flex items-center justify-center space-x-3">
              <Camera className="w-10 h-10 text-pink-500" />
              <span>Anılarımız</span>
              <Heart className="w-10 h-10 text-purple-500" />
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Birlikte yaşadığımız güzel anların fotoğraf ve videoları
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Fotoğraflar */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-8 flex items-center justify-center space-x-3">
              <Camera className="w-6 h-6 text-pink-500" />
              <span>Fotoğraflarımız</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems.filter(i => i.type === 'image').map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 border transition-all duration-500 group cursor-pointer hover:shadow-xl hover:scale-105 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 border-pink-200/50 hover:border-pink-300/70"
                  onClick={() => openLightbox(mediaItems.findIndex(i => i === item))}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.alt || `Fotoğraf ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videolar */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-8 flex items-center justify-center space-x-3">
              <Video className="w-6 h-6 text-purple-500" />
              <span>Videolarımız</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems.filter(i => i.type === 'video').map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 border transition-all duration-500 group cursor-pointer hover:shadow-xl hover:scale-105 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 border-purple-200/50 hover:border-purple-300/70"
                  onClick={() => openLightbox(mediaItems.findIndex(i => i === item))}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <video
                      src={item.src}
                      className="w-full h-48 object-cover rounded-lg"
                      muted
                      loop
                      playsInline
                      onMouseOver={e => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseOut={e => (e.currentTarget as HTMLVideoElement).pause()}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <MediaLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        mediaItems={mediaItems}
        currentIndex={currentMediaIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

export default MediaGallery;
