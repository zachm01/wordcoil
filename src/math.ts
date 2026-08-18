import type { PuzzleParameters } from "./types"

export const puzzleParams: PuzzleParameters = {
  spiralStartDegree: 360,
  spiralEndDegree: 360 * 4,
  spiralSize: 12,
  numSpokes: 8
}

export const center = {
  x: window.outerWidth / 2,
  y: window.outerHeight / 2
}

export const offset = {
  x: -18,
  y: -43
}

export function range(start: number, stop: number, step?: number) {
  const increment = step ?? 1
  return Array(
    Math.ceil((stop - start) / increment)
  ).fill(start)
   .map((x, y) => x + y * increment)
}

export function linspace(startValue: number, stopValue: number, cardinality: number) {
  let start = Math.round(startValue)
  let stop = Math.round(stopValue)

  let reversed = false
  
  if (stop < start) {
    stop = [start, start = stop][0];
    reversed = true
  }

  var arr = []
  var step = (stop - start) / (cardinality - 1)
  for (var i = 0; i < cardinality; i++) {
    arr.push(start + (step * i))
  }
  if (reversed)
    return arr.reverse()
  return arr;
}