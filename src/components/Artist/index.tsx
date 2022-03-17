import { Div, Text, Col } from "atomize"

export const Artist = ({ name }) => {
  return (
    <Col size={{ xs: "12", md: "3" }} >
      <Div
        rounded="lg"
        border="4px solid"
        borderColor="info400"
        hoverBg="info200"
        p="2rem"
        m={{ y: { xs: "0.5rem", md: "0" } }}
      >
        <Text 
          textSize="title"
          textColor="info900"
          textWeight="700"
          textAlign="center"
        >{name}</Text>
      </Div>
    </Col>
  )
}