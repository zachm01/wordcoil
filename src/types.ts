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
}
