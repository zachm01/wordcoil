import puzzle from "../puzzle.json"
import type { PuzzleContext } from "../types"

export function ClueDisplay(props: {puzzleContext: PuzzleContext}) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center m-10">
        <div className="font-bold italic">
          Inwards & Outwards
        </div>
        {
          puzzle.clues.map(clue => {
            if (clue.number === 0) { return }
            
            const highlighted = props.puzzleContext.selectedLetter == clue.char ||
            props.puzzleContext.selectedLetter == clue.char - 8 ||
            props.puzzleContext.selectedLetter == clue.char - 16
            
            return (
              <div 
                className={`p-1 ${highlighted ? "bg-yellow-300" : ""}`}
                onClick={() => {
                  if (props.puzzleContext.selectedLetter != clue.char) {
                    props.puzzleContext.setSelectedLetter(clue.char)
                  } else {
                    props.puzzleContext.setSelectedLetter(-1)
                  }
                }}
              >
                {clue.number}. {clue.text}
              </div>
            )
          })
        }
      </div>
      <div className="flex flex-col justify-center mx-10">
        {
          puzzle.clues.map(clue => {
            if (clue.number !== 0) { return }

            return (
              <div>
                <div className="font-bold italic">
                  Puzzle Clue
                </div>
                {clue.text}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}