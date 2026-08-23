import { useState } from "react"
import { PuzzleBoard } from "./components/puzzle_board"
import { SpiralWord } from "./components/spiral_word"
import { range, puzzleParams } from "./math"
import { ClueDisplay } from "./components/clue_display"


function App() {
  const [word, setWord] = useState<string>("")
  const [selectedLetter, setSelectedLetter] = useState<number>(-1)
  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  return (
    <>
      <div style={{
        "float": "right"
      }}>
        <ClueDisplay selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>
      </div>
      <PuzzleBoard word={word} setWord={setWord} selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>
      <SpiralWord word={word} length={maxLetters} selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>

    </>
  )
}

export default App
