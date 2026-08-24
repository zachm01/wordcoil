import puzzle from "../puzzle.json"
import type { PuzzleContext } from "../types"

export function ClueDisplay(props: {puzzleContext: PuzzleContext}) {
  return (
    <>
      {
        puzzle.clues.map(clue => {
          return (
            <div onClick={() => {
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
    </>
  )
}