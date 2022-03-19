import { useEffect, useState } from "react"

export const useLevelCountdown = ({ currentLevel }) => {
  const [ countdown, setCountdown ] = useState<number>(30)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCountdown(prevCountdown => prevCountdown -1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [ currentLevel ])

  return [ countdown ]
}