import { LetterDisplay } from "./letter_display"
import { Line, linspace } from "./shapes/line"
import { Spiral } from "./shapes/spiral"
import type { PuzzleParameters } from "./types"


export const puzzleParams: PuzzleParameters = {
  spiralStartDegree: 360,
  spiralEndDegree: 360 * 4,
  spiralSize: 12,
  numSpokes: 8
}

export const center = {
  x: window.outerWidth / 2,
  y: window.outerHeight / 2
}
export const offset = {
  x: -18,
  y: -43
}

export function range(start: number, stop: number, step?: number) {
  const increment = step ?? 1
  return Array(
    Math.ceil((stop - start) / increment)
  ).fill(start)
   .map((x, y) => x + y * increment)
}



function App() {

  return (
    <>
      <Spiral
        size={puzzleParams.spiralSize}
        startDegree={puzzleParams.spiralStartDegree}
        endDegree={puzzleParams.spiralEndDegree}
      />

      {
        linspace(puzzleParams.spiralEndDegree - 360, puzzleParams.spiralEndDegree, puzzleParams.numSpokes + 1).map(deg => {
          const theta = (deg) * Math.PI / 180

          return (
            <Line
              x0={0}
              y0={0}
              x1={puzzleParams.spiralSize * theta * Math.cos(theta)}
              y1={puzzleParams.spiralSize * theta * Math.sin(theta)}
            />
          )
        })
      }

      <LetterDisplay longWord="abcdefghijklmnopqrstuvwxyz"/>
    </>
  )
}

export default App
