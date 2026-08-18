import { LetterDisplay } from "./letter_display"
import { Line } from "./shapes/line"
import { Spiral } from "./shapes/spiral"
import { puzzleParams, linspace } from "./math"


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
