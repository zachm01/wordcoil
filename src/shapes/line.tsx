import { Dot } from "./dot"
import { linspace } from "../math"
import type { LineProps } from "./types"

export function XLine(props: {x0: number, x1: number, y?: number, weight?: number}) {
  const weight = props.weight ?? 5
  const yval = props.y ?? 0
  const step = 1

  let startX = props.x0
  let endX = props.x1
  if (startX > endX) { [startX, endX] = [endX, startX] }

  return (
    <>
      {
        Array.from(
          { length: (endX - startX) / step + 1},
          (_, i) => startX + (i * step)
        ).map(value => {
          return (
            <Dot
              key={value}
              diameter={weight}
              x={value}
              y={yval}
            />
          )
        })
      }
    </>
  )
}

export function Line(props: LineProps) {
  const weight = props.weight ?? 5

  let [x0, x1] = [Math.round(props.x0), Math.round(props.x1)]
  let [y0, y1] = [Math.round(props.y0), Math.round(props.y1)]

  const numStepsX = Math.abs(x1 - x0)
  const numStepsY = Math.abs(y1 - y0)
  const numSteps = Math.max(numStepsX, numStepsY)

  const xValues = linspace(x0, x1, numSteps)
  const yValues = linspace(y0, y1, numSteps)

  return (
    <>
      {
        [...Array(numSteps).keys()].map(ix => {
          return (
            <Dot
              color="#000"
              key={ix}
              diameter={weight}
              x={xValues[ix]}
              y={yValues[ix]}
            />
          )
        })
      }
    </>
  )
}