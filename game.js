import React, { useState } from 'react';

const Game = () => {
  const [balloonSize, setBalloonSize] = useState(50);
  const [gameOver, setGameOver] = useState(false);

  const pumpBalloon = () => {
    if (!gameOver) {
      setBalloonSize(balloonSize + 10);
      if (balloonSize >= 150) {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setBalloonSize(50);
    setGameOver(false);
  };

  return (
    <div>
      <h2>Balloon Pumping Game</h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <div
            style={{
              width: balloonSize + 'px',
              height: balloonSize + 'px',
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'width 0.5s, height 0.5s',
            }}
          ></div>
          {gameOver && <p>The balloon popped! Game Over!</p>}
        </div>
      </div>
      <br />
      <button onClick={pumpBalloon} disabled={gameOver}>
        Pump Balloon
      </button>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default Game;
