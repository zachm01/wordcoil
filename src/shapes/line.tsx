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