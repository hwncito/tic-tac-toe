'use client';
import { useState } from 'react';
import Square from './Square';
import ResetButton from './ResetButton';

export default function Board() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [values, setValues] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const modifyValues = (index) => {
    if (winner) return;

    let newValues = [...values];
    if (newValues[index]) return;
    newValues[index] = nextPlayer;

    setValues(newValues);
    checkWinner(newValues);
    changeNextPlayer();
  };

  const changeNextPlayer = () => {
    if (nextPlayer == 'X') {
      setNextPlayer('O');
    } else {
      setNextPlayer('X');
    }
  };

  const checkWinner = (newValues) => {
    let hasPlayerWon = false;
    let winnerStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerStates.length; i++) {
      let [a, b, c] = winnerStates[i];
      if (
        newValues[a] &&
        newValues[a] == newValues[b] &&
        newValues[a] == newValues[c]
      ) {
        setWinner(newValues[a]);
        hasPlayerWon = true;
      }
    }
    if (!newValues.includes(null) && !hasPlayerWon) {
      setWinner('Draw');
    }
  };

  const handleReset = () => {
    setNextPlayer('X');
    setValues(new Array(9).fill(null));
    setWinner(null);
  };

  return (
    <div>
      <h2
        className={`mb-10 text-center text-lg ${
          winner ? 'opacity-0' : 'opacity-1'
        }`}
      >
        Next player: {nextPlayer}
      </h2>
      <div className="flex">
        <Square
          style={''}
          values={values[0]}
          modifyValues={() => modifyValues(0)}
        />
        <Square
          style={'border-x'}
          values={values[1]}
          modifyValues={() => modifyValues(1)}
        />
        <Square
          style={''}
          values={values[2]}
          modifyValues={() => modifyValues(2)}
        />
      </div>
      <div className="flex">
        <Square
          style={'border-y'}
          values={values[3]}
          modifyValues={() => modifyValues(3)}
        />
        <Square
          style={'border'}
          values={values[4]}
          modifyValues={() => modifyValues(4)}
        />
        <Square
          style={'border-y'}
          values={values[5]}
          modifyValues={() => modifyValues(5)}
        />
      </div>
      <div className="flex">
        <Square
          style={''}
          values={values[6]}
          modifyValues={() => modifyValues(6)}
        />
        <Square
          style={'border-x'}
          values={values[7]}
          modifyValues={() => modifyValues(7)}
        />
        <Square
          style={''}
          values={values[8]}
          modifyValues={() => modifyValues(8)}
        />
      </div>
      {winner && winner != 'Draw' && (
        <div className="mt-10 text-center text-xl flex flex-col items-center gap-5">
          <span>Winner is {winner}</span>
          <ResetButton handleReset={handleReset} />
        </div>
      )}
      {winner && winner == 'Draw' && (
        <div className="mt-10 text-center text-xl flex flex-col items-center gap-5">
          <span>{winner}</span>
          <ResetButton handleReset={handleReset} />
        </div>
      )}
    </div>
  );
}
