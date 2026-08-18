import { center, offset } from "../App"

const DIAMETER = 30

export function Letter(props: {
  char: string,
  x: number,
  y: number,
  center?: {x: number, y: number},
  offset?: {x: number, y: number}
}) {
  const centerCoords = props.center ?? center
  const offsetCoords = props.offset ?? offset

  return (
    <div
      className="flex justify-center items-center rounded-full bg-blue-100 hover:bg-blue-200"
      style={{
        "position": "absolute",
        "height": DIAMETER,
        "width": DIAMETER,
        "left": centerCoords.x + props.x - DIAMETER / 2 + offsetCoords.x,
        "top": centerCoords.y - props.y - DIAMETER / 2 + offsetCoords.y
      }}
    >
      {props.char}
    </div>
  )
}