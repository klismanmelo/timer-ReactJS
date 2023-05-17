import { useContext, useEffect, useState } from 'react'
import { CycleContext } from '..'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CycleContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSecond) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSecond)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSecond, activeCycleId, markCurrentCycleAsFinished])

  const currentSecond = activeCycle ? totalSecond - amountSecondsPassed : 0

  const minuteAmount = Math.floor(currentSecond / 60)
  const secondAmout = currentSecond % 60

  const minutes = String(minuteAmount).padStart(2, '0')
  const seconds = String(secondAmout).padStart(2, '0')

  useEffect(() => {
    document.title = `${minutes} : ${seconds}`
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
