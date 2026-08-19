import { puzzleParams } from "../math"
import { Spiral } from "../shapes/spiral"
import { SpiralSpokes } from "./spiral_spokes"
import { LetterDisplay } from "./letter_display"
import { useState } from "react"

export function PuzzleBoard() {
  const [word, setWord] = useState<string>("abcdefghijklmnopqrstuvwxyz")

  return (
    <>
      <Spiral
        size={puzzleParams.spiralSize}
        startDegree={puzzleParams.spiralStartDegree}
        endDegree={puzzleParams.spiralEndDegree}
      />

      <SpiralSpokes/>

      <LetterDisplay longWord={word} setWord={setWord}/> 
    </>
  )
}