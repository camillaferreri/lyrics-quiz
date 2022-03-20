import { useState } from "react"
import { Container, Row, Text, Icon, Div, Button } from "atomize"
import { Link } from "react-router-dom"

import { useSetupGameLevels } from "../../hooks/useSetupGameLevels"
import { useEndGameScores } from "../../hooks/useEndGameScores"

import { Artist } from "../../components/Artist"
import { QuizLevel } from "../../components/QuizLevel"

export const Quiz = () => {
	const [ currentLevel, setCurrentLevel ] = useState<number>(0)
	const [ points, setPoints ] = useState<number>(0)
	const [ selectedCorrectArtist, setSelectedCorrectArtist ] = useState<number | undefined>(undefined)
	const [ selectedWrongArtist, setSelectedWrongArtist ] = useState<number | undefined>(undefined)

	const [ levels ] = useSetupGameLevels()
	useEndGameScores({ currentLevel, points })

	const onArtistSelected = (id: number) => {
		if (levels[currentLevel].artistOwner === id) {
			setPoints(prevPoints => prevPoints + 100)
			setSelectedCorrectArtist(id)
		} else {
			setSelectedWrongArtist(id)
		}

		setTimeout(() => {
			setSelectedCorrectArtist(undefined)
			setSelectedWrongArtist(undefined)
			setCurrentLevel(prevLevel => prevLevel + 1)
		}, 600)
	}

	return (
		<main className="Quiz">
			{(levels.length && currentLevel < 10) &&
				<QuizLevel currentLevel={currentLevel} />
			}

			<Container h="65vh" d="flex" flexDir="column" justify="center">
				{levels.length === 0 &&
					<Div textAlign="center">
						<Icon name="Loading" size="20px" />
					</Div>
				}

				{(levels.length > 0 && currentLevel < 10 && levels[currentLevel]) &&
					<>
						<Text
							textSize="display1"
							textColor="info900"
							textWeight="700"
							textAlign="center"
							m={{ b: "3rem" }}
						>“{levels[currentLevel]?.snippet}”</Text>

						<Row justify="center" align="center">
							{levels[currentLevel]?.artists.map((artist, index) => (
								<Artist 
									key={index}
									name={artist.name}
									onClick={() => onArtistSelected(artist.id)}
									success={artist.id === selectedCorrectArtist}
									error={artist.id === selectedWrongArtist}
								/>
							))}
						</Row>
					</>
				}

				{currentLevel === 10 &&
					<>
						<Text 
							textSize="display1" 
							textAlign="center"
							m={{ b: "1rem" }}
						>Congrats! You made {points} points!</Text>

						<Link to="/">
							<Button
								bg="info300"
								hoverBg="info400"
								rounded="lg"
								textColor="info700"
								h="3rem"
								p={{ x: "3rem" }}
								m={{ x: "auto" }}
							>Go back</Button>
						</Link>
					</>
				}

			</Container>
		</main>
	)
}

export default Quiz;