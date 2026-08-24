import { useState } from "react"
import { PuzzleBoard } from "./components/puzzle_board"
import { SpiralWord } from "./components/spiral_word"
import { range, puzzleParams } from "./math"
import { ClueDisplay } from "./components/clue_display"
import type { PuzzleContext } from "./types"


function App() {
  const [word, setWord] = useState<string>("")
  const [selectedLetter, setSelectedLetter] = useState<number>(-1)

  const puzzleContext: PuzzleContext = {
    word, setWord,
    selectedLetter, setSelectedLetter
  }

  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  return (
    <>
      <div style={{
        "float": "right"
      }}>
        <ClueDisplay puzzleContext={puzzleContext}/>
      </div>
      <PuzzleBoard puzzleContext={puzzleContext}/>
      <SpiralWord puzzleContext={puzzleContext} length={maxLetters}/>

    </>
  )
}

export default App
