import { Letter } from "./shapes/letter"
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


function DispLetters(props: {longWord: string}) {
  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  let word = props.longWord.padEnd(maxLetters, " ")

  return (
    <>
      {
        range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).map((deg, ix) => {
          const theta = (deg + degreeStep / 2) * Math.PI / 180

          return (
            <Letter
              key={deg}
              char={word[ix].toUpperCase()}
              x={(puzzleParams.spiralSize * theta - 40) * Math.cos(theta)}
              y={(puzzleParams.spiralSize * theta - 40) * Math.sin(theta)}
            />
          ) 
        })
      }
    </>
  )
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

      <DispLetters longWord="abcdefghijklmnopqrstuvwxyz"/>
    </>
  )
}

export default App
