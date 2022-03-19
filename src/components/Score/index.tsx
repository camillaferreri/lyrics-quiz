import { Div, Text, Col } from "atomize"
import { Score as ScoreProps } from "../../models/score";


export const Score = ({ user, points }: ScoreProps) => {
  return (
    <Col size="8">
      <Div
        rounded="lg"
        border="4px solid"
        borderColor="info400"
        p={{ y: "2rem", x: "4rem" }}
        m={{ y: "0.5rem" }}
        cursor="pointer"
        d="flex"
        justify="space-between"
      >
        <Text 
          textSize="title"
          textColor="info900"
          textAlign="center"
          
        >{user}</Text>
        <Text 
          textSize="title"
          textColor="info900"
          textWeight="700"
          textAlign="center"
          
        >{points}</Text>
      </Div>
    </Col>
  )
}