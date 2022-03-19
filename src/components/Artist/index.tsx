import { Div, Text, Col } from "atomize"

interface ArtistProps {
  name: string;
  onClick: () => void;
  success?: boolean
  error?: boolean
}

export const Artist = ({ name, onClick, success, error }: ArtistProps) => {
  return (
    <Col size={{ xs: "12", md: "3" }} >
      <Div
        rounded="lg"
        border="4px solid"
        borderColor={success ? "success400" : (error ? "danger400" : "info400")}
        hoverBg={success ? "success200" : (error ? "danger200" : "info200")}
        p="2rem"
        m={{ y: { xs: "0.5rem", md: "0" } }}
        onClick={onClick}
        cursor="pointer"
      >
        <Text 
          textSize="title"
          textColor={success ? "success900" : (error ? "danger900" : "info900")}
          textWeight="700"
          textAlign="center"
          
        >{name}</Text>
      </Div>
    </Col>
  )
}