import { Container, Col, Row, Text, Button } from "atomize";
import { Link } from "react-router-dom";

import { useUser } from "../../context/user";
import { useScores } from "../../hooks/useScores";
import { Score } from "../Score";

export const UserSection = () => {
  const { user } = useUser()
  const [ scores ] = useScores(user)

	return (
    <Container>
      <Row justify="center" m={{ t: "4rem", b: "6rem" }}>
        <Col size={{ xs: "12", md: "5" }}>
          <Text 
            tag="h1" 
            textSize="heading" 
            textColor="warning800"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Hi {user?.username}!
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
            >Let's play!</Button>
          </Link>
        </Col>
      </Row>

      <Row justify="center" align="center">
        <Col size="8">
          <Text 
            tag="h2"
            textSize="title" 
            textColor="black900"
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
          <Col size="8">
            <Text 
              textSize="subheader"
              textAlign="center"
            >You haven't played yet!</Text>
          </Col>
        }
      </Row>
    </Container>
	)
}

export default UserSection;