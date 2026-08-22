import { linspace, puzzleParams } from "../math"
import { Number } from "../shapes/number"

export function NumberDisplay() {
  return (
    <>
      {
        linspace(puzzleParams.spiralEndDegree - 360, puzzleParams.spiralEndDegree, puzzleParams.numSpokes + 1).map((deg, ix) => {
          const theta = (deg - 5) * Math.PI / 180

          return (
            <Number
              x={(puzzleParams.spiralSize - 0.7) * theta * Math.cos(theta)}
              y={(puzzleParams.spiralSize - 0.7) * theta * Math.sin(theta)}
              num={ix}
            />
          )
        })
      }
    </>
  )
}