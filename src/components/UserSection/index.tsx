import { Container, Col, Row, Text, Button } from "atomize";
import { Link } from "react-router-dom";

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

          <Link to="/quiz">
            <Button
              bg="warning300"
              hoverBg="warning400"
              rounded="lg"
              textColor="warning700"
              h="3rem"
              p={{ x: "3rem" }}
              m={{ x: "auto" }}
            >Play!</Button>
          </Link>
        </Col>
      </Row>
      
      <Row>
        TODO:
        list of games
      </Row>
    </Container>
	)
}

export default UserSection;