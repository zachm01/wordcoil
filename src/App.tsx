import { useState } from "react"
import { PuzzleBoard } from "./components/puzzle_board"
import { SpiralWord } from "./components/spiral_word"
import { ClueDisplay } from "./components/clue_display"
import type { Clue, PuzzleContext } from "./types"
import puzzle from "./puzzle.json"
import { Dialog } from "./components/dialog"
import { WriteOptions } from "./components/write_options"


function App() {
  const [word, setWord] = useState<string>(" ".repeat(puzzle.answer.length))
  const [selectedLetter, setSelectedLetter] = useState<number>(-1)
  const [showFinishedDialog, setShowFinishedDialog] = useState<boolean>(true)
  const [editDirection, setEditDirection] = useState<string>("always-outwards")
  const [currentClue, setCurrentClue] = useState<Clue | undefined>()

  const puzzleContext: PuzzleContext = {
    word, setWord,
    selectedLetter, setSelectedLetter,
    editDirection, setEditDirection,
    currentClue, setCurrentClue
  }

  const isCorrect = word.toUpperCase() == puzzle.answer.toUpperCase()
  
  return (
    <>
      <div className="border-black border-b-2 h-[4rem] text-2xl font-bold flex items-center p-4">wordcoil</div>
      
      <div style={{float: "right"}}>
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

      <div style={{float: "left"}}>
        <WriteOptions puzzleContext={puzzleContext}/>
      </div>

    </>
  )
}

export default App
