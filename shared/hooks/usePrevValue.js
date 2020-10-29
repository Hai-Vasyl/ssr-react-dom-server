import { useRef, useEffect } from "react"

const usePrevValue = (value) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = value
  })

  return { value: ref.current }
}

export default usePrevValue
