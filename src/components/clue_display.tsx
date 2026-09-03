import puzzle from "../puzzle.json"
import type { PuzzleContext } from "../types"

export function ClueDisplay(props: {puzzleContext: PuzzleContext}) {
  let directions = puzzle.clues.map(clue => clue.direction)
  directions = Array.from([...new Set(directions)]).toSorted()

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center m-10">
        {
          directions.map(direction => {
            return (
              <>
                <div className="font-bold italic">
                  {direction.toUpperCase()}
                </div>
                {
                  puzzle.clues.filter(clue => clue.direction === direction).map(clue => {
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
                        <div className="flex flex-row gap-x-1">
                          <span className="w-5 flex flex-row justify-end">{clue.number}.</span>
                          <span>{clue.text}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </>
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
                  PUZZLE CLUE
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