import { center, offset } from "../App"

const diameter = 10

export function Letter(props: {char: string, x: number, y: number}) {
  return (
    <div style={{
      "position": "absolute",
      "left": center.x + props.x + offset.x - 2 * diameter,
      "top": center.y + props.y + offset.y - 2 * diameter
    }}>
      <div className={`rounded-full w-${diameter} h-${diameter} flex items-center justify-center text-xl bg-blue-100`}>
        {props.char}
      </div>
    </div>
  )
}