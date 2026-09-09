import { puzzleParams, range } from "../math"
import { Letter } from "../shapes/letter"
import type { PuzzleContext } from "../types"
import { charBelongsToClue, clueSets } from "./clue_display"
import puzzle from "../puzzle.json"
import { useEffect } from "react"

export const letterColorSets = ["#ffffff", "#dbeafe", "#bcefd1", "#ddd5fb", "#fedbdb"]
const lettersPerRotation = puzzle.dimensions.num_spokes

export function LetterDisplay(props: {puzzleContext: PuzzleContext}) {
  const [selectedLetter, setSelectedLetter] = [props.puzzleContext.selectedLetter, props.puzzleContext.setSelectedLetter]

  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  let word = props.puzzleContext.word.padEnd(maxLetters, " ")

  const keydownHandler = (e: KeyboardEvent) => {
    document.body.removeEventListener('keydown', keydownHandler)

    const incrementCursor = (n?: number) => {
      const nextIx = selectedLetter + (n ?? 1)
      setSelectedLetter(nextIx >= maxLetters ? nextIx - (maxLetters) : nextIx)
    }
    const decrementCursor = (n?: number) => {
      const nextIx = selectedLetter - (n ?? 1)
      setSelectedLetter(nextIx < 0 ? nextIx + maxLetters : nextIx)
    }
    const replaceLetter = (char: string) => {
      const newWord = props.puzzleContext.word.substring(0, selectedLetter)
       + char.toUpperCase()
       + props.puzzleContext.word.substring(selectedLetter + 1)
      props.puzzleContext.setWord(newWord)
    }

    switch (e.key) {
      case "ArrowLeft":
        decrementCursor(); break;
      case "ArrowRight":
        incrementCursor(); break;
      case "ArrowUp":
        incrementCursor(lettersPerRotation); break;
      case "ArrowDown":
        decrementCursor(lettersPerRotation); break;
      case "Backspace":
        decrementCursor(lettersPerRotation); replaceLetter(" "); break;
      default:
        if (e.key.length === 1 && selectedLetter >= 0) {
          replaceLetter(e.key)
          incrementCursor(lettersPerRotation)
        }
        break
    }

    document.body.removeEventListener('keydown', keydownHandler)
  }
  
  useEffect(() => {
    document.body.addEventListener("keydown", keydownHandler)
    return () => {
      document.body.removeEventListener('keydown', keydownHandler)
    }
  }, [selectedLetter])
  

  interface Clue { char: number; direction: string; number: number; text: string; }
  function getClueFromChar(selectedChar: number): Clue | null {
    for (let clue of puzzle.clues) {
      if (clue.number == 0) { continue }
      if (charBelongsToClue(selectedChar, clue.number)) {
        return clue
      }
    }
    return null
  }

  return (
    <>
      {
        range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).map((deg, ix) => {
          const theta = (deg + degreeStep / 2) * Math.PI / 180

          const correspondingClue = getClueFromChar(ix + 1)
          const clueDirection = correspondingClue ? correspondingClue.direction : ""

          const inactiveColor = letterColorSets[clueSets.indexOf(clueDirection)]
          const activeColor = "#ffdf6d"

          return (
            <div
              onClick={() => ix === selectedLetter ? setSelectedLetter(-1) : setSelectedLetter(ix)}
            >
              <Letter
                key={deg}
                char={word[ix].toUpperCase()}
                x={(puzzleParams.spiralSize * theta - 40) * Math.cos(theta)}
                y={(puzzleParams.spiralSize * theta - 40) * Math.sin(theta)}
                bgColor={ix === selectedLetter ? activeColor : inactiveColor}
              />
            </div>
          )
        })
      }
    </>
  )
}
