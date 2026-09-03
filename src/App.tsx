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
      <div className="border-black border-b-2 h-[4rem] text-2xl font-bold flex items-center p-4">wordcoil</div>
      <div
        className="m-10" 
        style={{"float": "right"}}
      >
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
