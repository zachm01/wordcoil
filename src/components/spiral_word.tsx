import { range } from "../math"

export function SpiralWord(props: {
  word: string,
  length: number,
  selectedLetter: number,
  setSelectedLetter: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className="flex flex-col h-screen justify-end pb-3 bg-white">
      <div className="flex flex-row justify-center">
        {
          range(0, props.length).map((_, ix) => {
            return (
              <div
                className={`text-2xl text-center w-8 h-12 p-1 py-2 ${ix == props.selectedLetter ? "bg-yellow-300" : ""} cursor-pointer`}
                onClick={() => props.selectedLetter === ix ? props.setSelectedLetter(-1) : props.setSelectedLetter(ix)}
              >
                <div className="h-full">
                  {ix < props.word.length ? props.word[ix] : ""}
                </div>
                <div className="w-full border-t-3 border-black"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}