import { Dot } from "./shapes/dot"
import { Letter } from "./shapes/letter"
import { XLine, Line, linspace } from "./shapes/line"
import { Spiral } from "./shapes/spiral"

const spiralEndDegree = 360 * 4
const spiralStartDegree = 270
const spiralSize = 12

const numSpokes = 8

export const center = {
  x: window.outerWidth / 2,
  y: window.outerHeight / 2
}
export const offset = {
  x: -18,
  y: -43
}

function range(start: number, stop: number, step?: number) {
  const increment = step ?? 1
  return Array(
    Math.ceil((stop - start) / increment)
  ).fill(start)
   .map((x, y) => x + y * increment)
}


function DispLetters() {
  const degreeStep = 360 / numSpokes

  return (
    <>
      {
        range(spiralStartDegree, spiralEndDegree, degreeStep).map(deg => {
          const theta = (deg + degreeStep / 2) * Math.PI / 180

          return (
            <Dot
              key={deg}
              diameter={20}
              x={(spiralSize * theta - 40) * Math.cos(theta)}
              y={(spiralSize * theta - 40) * Math.sin(theta)}
              color="#f00"
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

      <DispLetters/>
    </>
  )
}

export default App
