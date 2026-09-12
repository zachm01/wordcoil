export interface PuzzleParameters {
  spiralStartDegree: number,
  spiralEndDegree: number,
  spiralSize: number,
  numSpokes: number
}

export interface PuzzleContext {
  word: string,
  setWord: React.Dispatch<React.SetStateAction<string>>,
  selectedLetter: number,
  setSelectedLetter: React.Dispatch<React.SetStateAction<number>>
  editDirection: string,
  setEditDirection: React.Dispatch<React.SetStateAction<string>>
  currentClue: Clue | undefined,
  setCurrentClue: React.Dispatch<React.SetStateAction<Clue | undefined>>
}

export interface Clue {
  char: number,
  direction: string,
  number: number,
  text: string
}
