import { range } from "../math"
import type { PuzzleContext } from "../types"
import puzzle from "../puzzle.json"

const wordLength = puzzle.answer.length

export function SpiralWord(props: {puzzleContext: PuzzleContext}) {
  return (
    <div style={{position: "absolute", bottom: 0}} className="w-screen pb-3">
      <div className="flex flex-row justify-center">
        {
          range(0, wordLength).map((_, ix) => {
            return (
              <div
                className={`text-2xl text-center w-8 h-12 p-1 py-2 ${ix == props.puzzleContext.selectedLetter ? "bg-yellow-300" : ""} cursor-pointer`}
                onClick={() => props.puzzleContext.selectedLetter === ix ? props.puzzleContext.setSelectedLetter(-1) : props.puzzleContext.setSelectedLetter(ix)}
              >
                <div className="h-full">
                  {ix < props.puzzleContext.word.length ? props.puzzleContext.word[ix] : ""}
                </div>
                <div className="w-full border-t-3 border-black"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}