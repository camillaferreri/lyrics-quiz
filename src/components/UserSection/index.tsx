import { Container, Col, Row, Text, Button } from "atomize";

import { useUser } from "../../context/user";

interface UserSectionProps {
}

export const UserSection = ({  }: UserSectionProps) => {
  const { user } = useUser()

	return (
    <Container>
      <Row justify="center">
        <Col size={{ xs: "12", md: "5" }}>
          <Text 
            tag="h1" 
            textSize="heading" 
            textColor="warning800"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Hi {user?.username}
          </Text>

          <Button
            bg="warning300"
            hoverBg="warning400"
            rounded="lg"
            textColor="warning700"
            h="3rem"
            p={{ x: "3rem" }}
            m={{ x: "auto" }}
          >Play!</Button>
        </Col>
      </Row>
      
      <Row>

      </Row>
    </Container>
	)
}

export default UserSection;