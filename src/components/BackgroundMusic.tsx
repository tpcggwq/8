import React, { useRef, useEffect } from "react";

interface BackgroundMusicProps {
  play: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ play }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay engellendi:", err);
      });
    } else if (!play && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // başa sar
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
      Tarayıcınız ses dosyasını desteklemiyor.
    </audio>
  );
};

export default BackgroundMusic;
