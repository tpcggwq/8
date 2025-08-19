import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
}

interface MediaLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  mediaItems: MediaItem[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const MediaLightbox: React.FC<MediaLightboxProps> = ({
  isOpen,
  onClose,
  mediaItems,
  currentIndex,
  onPrevious,
  onNext,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScrollY(window.scrollY);
      document.body.style.overflow = "hidden"; // Scroll disable
    } else {
      document.body.style.overflow = ""; // Scroll enable
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || mediaItems.length === 0) return null;

  const currentItem = mediaItems[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="absolute left-0 w-full h-screen z-50 bg-black/80 flex items-center justify-center p-4"
      style={{ top: scrollY }}
      onClick={handleBackdropClick}
    >
      {/* Kapat */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Geri & İleri */}
      {mediaItems.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* İçerik */}
      <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center">
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt={currentItem.alt || "Fotoğraf"}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Başlık */}
      {currentItem.title && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-md text-sm">
          {currentItem.title}
        </div>
      )}
    </div>
  );
};

export default MediaLightbox;
