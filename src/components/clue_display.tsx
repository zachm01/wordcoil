import puzzle from "../puzzle.json"
import type { PuzzleContext } from "../types"
import { letterColorSets } from "./letter_display"

const numCellsPerRotation = puzzle.dimensions.num_spokes

export function charBelongsToClue(selectedChar: number, clueChar: number): boolean {
  if (selectedChar === clueChar) {
    return true
  }
  else if (selectedChar < clueChar) {
    for (let test = clueChar; test >= 0; test -= numCellsPerRotation) {
      if (selectedChar === test) { return true }
    }
  }
  else if (selectedChar > clueChar) {
    for (let test = clueChar; test <= puzzle.answer.length; test += numCellsPerRotation) {
      if (selectedChar === test) { return true}
    }
  }
  return false
}

export const clueSets = Array.from([...new Set(puzzle.clues.map(clue => clue.direction))])


export function ClueDisplay(props: {puzzleContext: PuzzleContext}) {
  let directions = puzzle.clues.map(clue => clue.direction)
  directions = Array.from([...new Set(directions)])

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center gap-y-2 m-10">
        {
          directions.map((direction, ix) => {
            const directionColor = letterColorSets[ix]

            return (
              <div key={ix}>
                <div
                  style={{backgroundColor: directionColor}}
                  className="px-1 font-bold italic"
                >
                  {direction.toUpperCase()}
                </div>
                {
                  puzzle.clues.filter(clue => clue.direction === direction).map((clue, ix) => {
                    if (clue.number === 0) { return (
                      <div key={ix} className="px-6">{clue.text}</div>
                    ) }
            
                    const belongsToClue = charBelongsToClue(props.puzzleContext.selectedLetter, clue.char)

                    if (belongsToClue) {
                      props.puzzleContext.setCurrentClue(clue)
                    }

                    const highlighted = belongsToClue
                    
                    return (
                      <div 
                        key={ix}
                        className={`p-1 cursor-pointer ${highlighted ? "bg-yellow-300" : ""}`}
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
