import puzzle from "../puzzle.json"

export function ClueDisplay(props: {selectedLetter: number, setSelectedLetter: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <>
      {
        puzzle.clues.map(clue => {
          return (
            <div onClick={() => {
              if (props.selectedLetter != clue.char) {
                props.setSelectedLetter(clue.char)
              } else {
                props.setSelectedLetter(-1)
              }
            }}
            >
              {clue.number}. {clue.text}
            </div>
          )
        })
      }
    </>
  )
}