import { useEffect, useState } from "react"

import { User } from "../context/user"
import { Score } from "../models/score"

export const useScores = (user?: User) => {
  const [ scores, setScores ] = useState<Score[]>([])

  useEffect(() => {
		let localScores = localStorage.getItem("scores") || "[]"
		let scoresList = JSON.parse(localScores)

    if (user) {
      scoresList = scoresList.filter(score => score.user === user?.username)
    }

		scoresList = scoresList
      .sort((a, b) => b.points - a.points)

		setScores(scoresList)
	}, [])

  return [ scores ]
}