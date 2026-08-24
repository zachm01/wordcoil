import { center, offset } from "../math"
import type { NumberProps } from "./props"

export function Number(props: NumberProps) {
  return (
    <div
      style={{
        "position": "absolute",
        "left": center.x + props.x + offset.x - 5,
        "top": center.y - props.y + offset.y - 10
      }}
    >
      {props.num > 0 && props.num}
    </div>
  )
}