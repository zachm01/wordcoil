import { center, offset } from "../math"
import type { LetterProps } from "./props"

const DIAMETER = 30

export function Letter(props: LetterProps) {
  const centerCoords = props.center ?? center
  const offsetCoords = props.offset ?? offset

  return (
    <div
      className="flex justify-center items-center rounded-full cursor-pointer"
      style={{
        "position": "absolute",
        "backgroundColor": props.bgColor ?? "#dbeafe",
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