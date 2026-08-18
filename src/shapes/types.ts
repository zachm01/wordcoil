export interface DotProps {
  diameter: number,
  x: number,
  y: number,
  color?: string,
  center?: {x: number, y: number},
  offset?: {x: number, y: number}
}

export interface LetterProps {
  char: string,
  x: number,
  y: number,
  bgColor?: string,
  center?: {x: number, y: number},
  offset?: {x: number, y: number}
}

export interface LineProps {
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  weight?: number
}

export interface SpiralProps {
  weight?: number,
  size?: number,
  startDegree?: number,
  endDegree?: number
}