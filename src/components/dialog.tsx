import { type JSX } from 'react'

interface DialogProps {
  show: boolean
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
  children?: JSX.Element
}

export function Dialog(props: DialogProps) {
  return (
    <>
      {
        props.show && (
          <div className="fixed top-0 right-0 left-0 z-1000 flex items-center justify-center w-screen h-screen">
            <div className="w-full h-full bg-white opacity-50"/>
            <div className="absolute w-128 bg-white rounded-2xl border-2 border-black p-4">
              {props.children}
            </div>
          </div>
        )
      }
    </>
  )
}
