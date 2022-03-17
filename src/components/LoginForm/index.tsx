import { useState } from "react"
import { Container, Col, Row, Input, Text, Button } from "atomize";

import { useUser } from "../../context/user";

interface LoginFormProps {
}

export const LoginForm = ({  }: LoginFormProps) => {
  const [ username, setUsername ] = useState<string>("")
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const { login } = useUser()

  const onSubmit = () => {    
    setIsLoading(true)
    login(username)
    setIsLoading(false)
  }

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
            Input your username to play
          </Text>

          <Input 
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
            m={{ b: "1rem" }}
          />

          <Button
            bg="warning300"
            hoverBg="warning400"
            rounded="lg"
            textColor="warning700"
            h="3rem"
            p={{ x: "3rem" }}
            m={{ x: "auto" }}
            onClick={onSubmit}
            isLoading={isLoading}
            disabled={!username.length}
          >Login</Button>
        </Col>
      </Row>
    </Container>
	)
}

export default LoginForm;