import { Container, Col, Row, Text, Button } from "atomize";
import { Link } from "react-router-dom";

import { useUser } from "../../context/user";
import { useScores } from "../../hooks/useScores";
import { Score } from "../Score";

interface UserSectionProps {
}

export const UserSection = ({  }: UserSectionProps) => {
  const { user } = useUser()
  const [ scores ] = useScores(user)

	return (
    <Container>
      <Row justify="center" m={{ b: "3rem" }}>
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

      <Row justify="center" align="center">
        <Col size="8">
          <Text 
            tag="h2"
            textSize="title" 
            textColor="info900"
            textAlign="center"
            m={{ b: "1rem" }}
          >Your games</Text>
        </Col>

        {scores && scores.map((score, index) => (
          <Score
            key={index}
            user={score.user} 
            points={score.points} 
          />
        ))}

        {scores.length === 0 &&
          <Text 
            textSize="subheader"
            textAlign="center"
          >Nobody played yet, be the first!</Text>
        }
      </Row>
    </Container>
	)
}

export default UserSection;