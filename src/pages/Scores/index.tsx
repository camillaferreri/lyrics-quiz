import { Container, Row, Text } from "atomize"

import { useScores } from "../../hooks/useScores";

import { Score } from "../../components/Score";

export const Scores = () => {
	const [ scores ] = useScores()

	return (
		<main className="Scores">
			<Container>
				<Text 
					tag="h1" 
					textSize="title" 
					textColor="black900"
					textAlign="center"
					m={{ b: "1rem" }}
				>Top Players</Text>

				<Row justify="center" align="center">
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
		</main>
	)
}

export default Scores;