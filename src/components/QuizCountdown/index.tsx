import { Text } from "atomize"

interface QuizCountdownProps {
  countdown: number
}

export const QuizCountdown = ({ countdown }: QuizCountdownProps) => {
  return (
    <Text
      textSize="title"
      textColor="black500"
      textWeight="700"
      textAlign="center"
      m={{ b: "3rem" }}
    >{countdown}s</Text>
  )
}