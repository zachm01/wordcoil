import { puzzleParams, range } from "../math"
import { Letter } from "../shapes/letter"
import { useState } from "react";

export function LetterDisplay(props: {longWord: string, setWord: React.Dispatch<React.SetStateAction<string>>}) {
  const [selectedLetter, setSelectedLetter] = useState<number>(-1);

  const degreeStep = 360 / puzzleParams.numSpokes
  const maxLetters = range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).length

  let word = props.longWord.padEnd(maxLetters, " ")

  const keydownHandler = (e: KeyboardEvent) => {
    const advanceCursor = () => {
      selectedLetter === maxLetters - 1 ? setSelectedLetter(0) : setSelectedLetter(selectedLetter + 1)
    }
    const demoteCursor = () => {
      selectedLetter === 0 ? setSelectedLetter(maxLetters - 1) : setSelectedLetter(selectedLetter - 1)
    }
    const replaceLetter = (char: string) => {
      let newWord = props.longWord.substring(0, selectedLetter)
       + char.toUpperCase()
       + props.longWord.substring(selectedLetter + 1)
      props.setWord(newWord)
    }


    if (e.key === "ArrowDown") { demoteCursor() }
    else if (e.key === "Backspace") {
      demoteCursor()
      replaceLetter(" ")
    }
    else if (e.key === "ArrowUp") { advanceCursor() }
    else if (e.key === " ") {
      advanceCursor()
      replaceLetter(" ")
    }
    else if (e.key.length == 1 && selectedLetter >= 0) {
      replaceLetter(e.key)
      advanceCursor()
    }

    window.removeEventListener('keydown', keydownHandler)
  }

  window.addEventListener("keydown", keydownHandler)

  return (
    <>
      {
        range(puzzleParams.spiralStartDegree, puzzleParams.spiralEndDegree, degreeStep).map((deg, ix) => {
          const theta = (deg + degreeStep / 2) * Math.PI / 180

          return (
            <div
              onClick={() => ix === selectedLetter ? setSelectedLetter(-1) : setSelectedLetter(ix)}
            >
              <Letter
                key={deg}
                char={word[ix].toUpperCase()}
                x={(puzzleParams.spiralSize * theta - 40) * Math.cos(theta)}
                y={(puzzleParams.spiralSize * theta - 40) * Math.sin(theta)}
                bgColor={ix === selectedLetter ? "#ffdf6d" : "#dbeafe"}
              />
            </div>
          )
        })
      }
    </>
  )
}
