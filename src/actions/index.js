export const AURAL_UPDATE = "AURAL_UPDATE";
export const generateAuralUpdate = () => ({
  type: AURAL_UPDATE
});

export const RESTART = "RESTART";
export const restartGame = correctAnswer => ({
  type: RESTART,
  correctAnswer
});

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});
