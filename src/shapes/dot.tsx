import { center, offset } from "../math"
import type { DotProps } from "./types"

export function Dot(props: DotProps) {
  const radius = props.diameter / 2
  const centerCoords = props.center ?? center
  const offsetCoords = props.offset ?? offset

  return (
    <div
      className={`rounded-full`}
      style={{
        "backgroundColor": props.color ?? "#000",
        "borderRadius": 9999999,
        "position": "absolute",
        "height": props.diameter,
        "width": props.diameter,
        "left": centerCoords.x + props.x - radius + offsetCoords.x,
        "top": centerCoords.y - props.y - radius + offsetCoords.y
      }}
    />
  )
}