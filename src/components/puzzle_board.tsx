import { puzzleParams } from "../math"
import { Spiral } from "../shapes/spiral"
import { SpiralSpokes } from "./spiral_spokes"
import { LetterDisplay } from "./letter_display"

export function PuzzleBoard() {
  return (
    <>
      <Spiral
        size={puzzleParams.spiralSize}
        startDegree={puzzleParams.spiralStartDegree}
        endDegree={puzzleParams.spiralEndDegree}
      />

      <SpiralSpokes/>

      <LetterDisplay longWord="abcdefghijklmnopqrstuvwxyz"/> 
    </>
  )
}