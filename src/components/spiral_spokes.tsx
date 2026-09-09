import { linspace, puzzleParams } from "../math"
import { Line } from "../shapes/line"

export function SpiralSpokes() {
  return (
    <>
      {
        linspace(puzzleParams.spiralEndDegree - 360, puzzleParams.spiralEndDegree, puzzleParams.numSpokes + 1).map((deg, ix) => {
          const theta = (deg) * Math.PI / 180

          return (
            <Line
              key={ix}
              x0={0}
              y0={0}
              x1={puzzleParams.spiralSize * theta * Math.cos(theta)}
              y1={puzzleParams.spiralSize * theta * Math.sin(theta)}
            />
          )
        })
      }
    </>
  )
}