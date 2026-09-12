import type { PuzzleContext } from "../types"

export function WriteOptions(props: {puzzleContext: PuzzleContext}) {
  const setEditDirection = props.puzzleContext.setEditDirection

  return (
    <div className="absolute w-48 bg-gray-200 rounded-2xl border-2 border-gray-300 p-3 flex flex-col items-center justify-center m-1 gap-y-1">
      <div className="font-bold italic">
        EDIT DIRECTION
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-x-2">
          <input
            defaultChecked
            type="radio"
            name="edit-direction"
            onClick={() => { setEditDirection("always-outwards") }}
          />
          <span>Always outwards</span>
        </div>

        <div className="flex flex-row gap-x-2">
          <input
            type="radio"
            name="edit-direction"
            onClick={() => { setEditDirection("clue-direction") }}
          />
          <span>Clue direction</span>
        </div>

        <div className="flex flex-row gap-x-2">
          <input
            type="radio"
            name="edit-direction"
            onClick={() => { setEditDirection("along-coil") }}
          />
          <span>Along coiled word</span>
        </div>
      </div>
    </div>
  )
}