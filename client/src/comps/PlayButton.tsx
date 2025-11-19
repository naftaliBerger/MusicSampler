const PlayButton: React.FC = () => {
  const playSound = () => {
    const audio = new Audio("/sounds/CLFQD_Snare_0.wav");
    audio.play().catch(err => console.error(err));
  };

  return (
    <button onClick={playSound}>
      נגן צליל
    </button>
  );
};

export default PlayButton;
