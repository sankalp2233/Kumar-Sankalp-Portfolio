import React, { useEffect } from 'react';

const BackgroundAudio = () => {
  useEffect(() => {
    const audio = new Audio('/background-audio.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    const playAudio = () => {
      audio.play().catch(error => {
        console.log('Audio autoplay failed:', error);
      });
    };

    playAudio();

    const handleUserInteraction = () => {
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
      });
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      audio.pause();
    };
  }, []);

  return null;
};

export default BackgroundAudio;
