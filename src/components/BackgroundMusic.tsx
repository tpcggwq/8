import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  play: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ play }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (play && audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current!.play();
        } catch (err) {
          console.warn("Otomatik çalma engellendi, kullanıcı etkileşimi bekleniyor.");
        }
      };
      playAudio();
    } else if (!play && audioRef.current) {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      {/* mp4 dosyasını direkt ses kaynağı olarak kullanıyoruz */}
      <source src="/music.mp4" type="audio/mp4" />
      <source src="/music.mp3" type="audio/mpeg" />
      Tarayıcınız ses oynatmayı desteklemiyor.
    </audio>
  );
};

export default BackgroundMusic;
