import { Dot } from "./dot"

export function Spiral(props: {weight?: number, size?: number, startDegree?: number, endDegree?: number}) {
  const weight = props.weight ?? 5
  const size = props.size ?? 12
  const startDegree = props.startDegree ?? 0
  const endDegree = props.endDegree ?? 360 * 4

  return (
    <>
      {
        [...Array(endDegree * 2).keys()].map(deg => {
          if (deg <= startDegree) { return }
          
          const theta = (deg / 2) * Math.PI / 180

          return (
            <Dot
              key={deg}
              diameter={weight}
              y={size * theta * Math.sin(theta)}
              x={size * theta * Math.cos(theta)}
            />
          )
        })
      }
    </>
  )
}