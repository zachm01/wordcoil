export function Dot(props: {diameter: number, x: number, y: number, color?: string}) {
  const radius = props.diameter / 2
  const center = {
    x: window.outerWidth / 2,
    y: window.outerHeight / 2
  }
  const offset = {
    x: -18,
    y: -43
  }

  return (
    <div
      className={`rounded-full`}
      style={{
        "backgroundColor": props.color ?? "#000",
        "borderRadius": 9999999,
        "position": "absolute",
        "height": props.diameter,
        "width": props.diameter,
        "left": center.x + props.x - radius + offset.x,
        "top": center.y - props.y - radius + offset.y
      }}
    />
  )
}