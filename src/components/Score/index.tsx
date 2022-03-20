import { Div, Text, Col } from "atomize"
import { Score as ScoreProps } from "../../models/score";


export const Score = ({ user, points }: ScoreProps) => {
  return (
    <Col size={{ sx: "12", md: "8"}}>
      <Div
        rounded="lg"
        border="4px solid"
        borderColor="black400"
        p={{ y: "2rem", x: { xs: "2rem", md: "4rem" } }}
        m={{ y: "0.5rem" }}
        cursor="pointer"
        d="flex"
        justify="space-between"
      >
        <Text 
          textSize="title"
          textColor="black900"
          textAlign="center"
          
        >{user}</Text>
        <Text 
          textSize="title"
          textColor="black900"
          textWeight="700"
          textAlign="center"
          
        >{points}</Text>
      </Div>
    </Col>
  )
}