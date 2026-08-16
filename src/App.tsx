import { XLine } from "./shapes/line"
import { Spiral } from "./shapes/spiral"

function App() {
  return (
    <>
      <XLine x0={0} x1={-38}/>
      <XLine x0={227} x1={301}/>
      <Spiral startDegree={360} endDegree={360 * 8}/>
    </>
  )
}

export default App
