import { Container, Row, Button, Div } from "atomize";
import { Link } from "react-router-dom";

import { useUser } from "../../context/user"

export const Header = () => {
  const { user, logout } = useUser()
  
  if (!user) return null

  return (
    <nav>
      <Container p={{ y: "1rem" }}>
        <Row justify="space-between" align="center">
          <Div>
            <Link 
              to="/"
              style={{ marginRight: "1rem" }}
            >Home</Link>

            <Link 
              to="/scores"
            >Scores</Link>
          </Div>

          <Button
            bg="danger300"
            hoverBg="danger400"
            rounded="lg"
            textColor="danger700"
            h="3rem"
            onClick={logout}
          >Logout</Button>
        </Row>
      </Container>
    </nav>
  )
}