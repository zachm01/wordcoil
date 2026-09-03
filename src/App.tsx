import { useState } from "react"
import { PuzzleBoard } from "./components/puzzle_board"
import { SpiralWord } from "./components/spiral_word"
import { ClueDisplay } from "./components/clue_display"
import type { PuzzleContext } from "./types"
import puzzle from "./puzzle.json"
import { Dialog } from "./components/dialog"


function App() {
  const [word, setWord] = useState<string>("")
  const [selectedLetter, setSelectedLetter] = useState<number>(-1)
  const [showFinishedDialog, setShowFinishedDialog] = useState<boolean>(true)

  const puzzleContext: PuzzleContext = {
    word, setWord,
    selectedLetter, setSelectedLetter
  }

  const isCorrect = word.toUpperCase() == puzzle.answer.toUpperCase()

  return (
    <>
      <div className="border-black border-b-2 h-[4rem] text-2xl font-bold flex items-center p-4">wordcoil</div>
      <div
        className="m-10`" 
        style={{"float": "right"}}
      >
        <ClueDisplay puzzleContext={puzzleContext}/>
      </div>
      <div style={{position: "relative"}}>
        <PuzzleBoard puzzleContext={puzzleContext}/>
      </div>
      <SpiralWord puzzleContext={puzzleContext}/>

      <Dialog show={isCorrect && showFinishedDialog}>
        <div
          className="h-[16rem] flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setShowFinishedDialog(false)}
        >
          Congratulations! You completed the puzzle!
        </div>
      </Dialog>

    </>
  )
}

export default App
