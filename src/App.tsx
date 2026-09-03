import { useState } from "react"
import { PuzzleBoard } from "./components/puzzle_board"
import { SpiralWord } from "./components/spiral_word"
import { ClueDisplay } from "./components/clue_display"
import type { PuzzleContext } from "./types"


function App() {
  const [word, setWord] = useState<string>("")
  const [selectedLetter, setSelectedLetter] = useState<number>(-1)

  const puzzleContext: PuzzleContext = {
    word, setWord,
    selectedLetter, setSelectedLetter
  }

  return (
    <>
      <div style={{
        "float": "right"
      }}>
        <ClueDisplay puzzleContext={puzzleContext}/>
      </div>
      <div style={{position: "relative"}}>
        <PuzzleBoard puzzleContext={puzzleContext}/>
      </div>
      <SpiralWord puzzleContext={puzzleContext}/>

    </>
  )
}

export default App
