import { Letter } from "./shapes/letter"
import { puzzleParams, range } from "./math"

export function LetterDisplay(props: {longWord: string}) {
  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  let word = props.longWord.padEnd(maxLetters, " ")

  return (
    <>
      {
        range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).map((deg, ix) => {
          const theta = (deg + degreeStep / 2) * Math.PI / 180

          return (
            <Letter
              key={deg}
              char={word[ix].toUpperCase()}
              x={(puzzleParams.spiralSize * theta - 40) * Math.cos(theta)}
              y={(puzzleParams.spiralSize * theta - 40) * Math.sin(theta)}
            />
          ) 
        })
      }
    </>
  )
}
