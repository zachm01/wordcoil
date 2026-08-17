import { XLine, Line, linspace } from "./shapes/line"
import { Spiral } from "./shapes/spiral"

const spiralEndDegree = 360 * 4
const spiralStartDegree = 360 + 270
const spiralSize = 12

const numSpokes = 8

function App() {
  const endTheta = (spiralEndDegree * Math.PI / 180)
  const endBarX = spiralSize * endTheta * Math.cos(endTheta)

  return (
    <>
      <XLine x0={0} x1={-38}/>
      <XLine x0={endBarX - spiralSize * 6} x1={endBarX}/>
      <Spiral
        size={spiralSize}
        startDegree={spiralStartDegree}
        endDegree={spiralEndDegree}
      />

      {
        linspace(spiralEndDegree - 360, spiralEndDegree, numSpokes + 1).map(deg => {
          const theta = (deg) * Math.PI / 180

          return (
            <Line
              x0={0}
              y0={0}
              x1={spiralSize * theta * Math.cos(theta)}
              y1={spiralSize * theta * Math.sin(theta)}
            />
          )
        })
      }
    </>
  )
}

export default App
