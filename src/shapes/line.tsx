import { Dot } from "./dot"

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

export function linspace(startValue: number, stopValue: number, cardinality: number) {
  let start = Math.round(startValue)
  let stop = Math.round(stopValue)

  let reversed = false
  
  if (stop < start) {
    stop = [start, start = stop][0];
    reversed = true
  }

  var arr = []
  var step = (stop - start) / (cardinality - 1)
  for (var i = 0; i < cardinality; i++) {
    arr.push(start + (step * i))
  }
  if (reversed)
    return arr.reverse()
  return arr;
}

export function Line(props: {
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  weight?: number
}) {
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
              color="#ff0000"
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