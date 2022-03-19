import { Text } from "atomize"

interface QuizLevelProps {
  currentLevel: number;
}

export const QuizLevel = ({ currentLevel }: QuizLevelProps) => {
  return (
    <Text
      textSize="title"
      textColor="black500"
      textWeight="700"
      textAlign="center"
      m={{ b: "3rem" }}
    >{currentLevel + 1}/10</Text>
  )
}