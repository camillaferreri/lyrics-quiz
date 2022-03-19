import { useEffect } from "react"
import { useUser } from "../context/user"

interface Props {
  currentLevel: number;
  points: number;
}

export const useEndGameScores = ({ currentLevel, points }: Props) => {
  const { user } = useUser()

  useEffect(() => {
    // save scores
		if (currentLevel === 10) {
			let scores = localStorage.getItem("scores") || "[]"
			scores = JSON.parse(scores)
			const newScores = [...scores, { user: user?.username, points: points }]
			localStorage.setItem("scores", JSON.stringify(newScores))
		}
	}, [ currentLevel ])
}