import { puzzleParams } from "../math"
import { Spiral } from "../shapes/spiral"
import { SpiralSpokes } from "./spiral_spokes"
import { LetterDisplay } from "./letter_display"
import { NumberDisplay } from "./number_display"
import type { PuzzleContext } from "../types"

export function PuzzleBoard(props: {
  puzzleContext: PuzzleContext
}) {
  // all that glitters is not gold
  // absolute temperature scale
  // artery of the vestibule bulb
  // battle of the ardennes bulge
  // brassica bleracea botrytis
  // capital of st kitts and nevis
  // capital of marshall islands
  // coefficient of correlation
  // coefficient of performance
  // coordinated universal time
  // driving under the influence
  // economic and social council
  // electronic reconnaissance
  // thermodynamic equilibrium
  // mathematical statistician
  //  -> emancipation proclamation
  //    -> first law of thermodynamics
  //  -> hydrogen ion concentration
  //  -> internal combustion engine
  //  -> lactobacillus acidophilus

  return (
    <>
      <Spiral
        size={puzzleParams.spiralSize}
        startDegree={puzzleParams.spiralStartDegree}
        endDegree={puzzleParams.spiralEndDegree}
      />

      <SpiralSpokes/>

      <LetterDisplay puzzleContext={props.puzzleContext}/>

      <NumberDisplay/>
    </>
  )
}