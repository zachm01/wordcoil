import { Dot } from "./dot"
import type { SpiralProps } from "./props"

export function Spiral(props: SpiralProps) {
  const weight = props.weight ?? 5
  const size = props.size ?? 12
  const startDegree = props.startDegree ?? 0
  const endDegree = props.endDegree ?? 360 * 4

  return (
    <>
      {
        [...Array(endDegree * 2).keys()].map(deg => {
          if (deg / 2 <= startDegree) { return }
          
          const theta = (deg / 2) * Math.PI / 180

          return (
            <Dot
              key={deg}
              diameter={weight}
              x={size * theta * Math.cos(theta)}
              y={size * theta * Math.sin(theta)}
            />
          )
        })
      }
    </>
  )
}