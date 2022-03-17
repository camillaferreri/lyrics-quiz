import { Container, Row, Text } from "atomize"

import { Artist } from "../../components/Artist";

interface QuizProps {}

export const Quiz = ({  }: QuizProps) => {

	return (
		<main className="Quiz">
			<Container h="80vh" d="flex" flexDir="column" justify="center">
				<Text
					textSize="display1"
					textColor="info900"
					textWeight="700"
					textAlign="center"
					m={{ b: "3rem" }}
				>“You shoot me down, but I won't fall”</Text>

				<Row justify="center">
					<Artist name="Rihanna"/>
					<Artist name="Eminem"/>
					<Artist name="Beyonce"/>
				</Row>
			</Container>
		</main>
	)
}

export default Quiz;