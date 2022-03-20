import axios from "axios"
import { useEffect, useState } from "react"

import { GameLevel } from "../models/gameLevel"
import { apiKey } from "../utils/apiKey"

export const useSetupGameLevels = () => {
  const [ levels, setLevels ] = useState<GameLevel[]>([])

	const getAvailableArtists = (artists: any, artist_id: number) => {
		return artists
			.filter((artist: any) => artist.artist.artist_id !== artist_id)
			.sort(() => 0.5 - Math.random())
	}

	const getTrackArtists = (artist_id: number, artist_name: string, availableArtists: any) => {
		const [ firstAvailableArtist, secondAvailableArtist ] = availableArtists

		return [
			{
				id: artist_id,
				name: artist_name
			},
			{
				id: firstAvailableArtist.artist.artist_id,
				name: firstAvailableArtist.artist.artist_name
			},
			{
				id: secondAvailableArtist.artist.artist_id,
				name: secondAvailableArtist.artist.artist_name
			}
		].sort(() => 0.5 - Math.random())
	}

  useEffect(() => {
		setLevels([])
		// setup levels
		const randomSongsPage = Math.round(Math.random() * 8)
		const randomArtistsPage = Math.round(Math.random() * 3)

		const getSongs = axios.get(`chart.tracks.get?chart_name=top&page=${randomSongsPage}&page_size=10&f_has_lyrics=1&apikey=${apiKey}`)
		const getArtists = axios.get(`chart.artists.get?page=${randomArtistsPage}&page_size=30&apikey=${apiKey}`)

		axios.all([getSongs, getArtists])
			.then(axios.spread((...responses) => {
				const [ songResult, artistsResult ] = responses
				const tracks = songResult.data.message.body.track_list
				const artists = artistsResult.data.message.body.artist_list

				tracks.map((item: any) => {
					const track = item.track
					const { track_id, artist_id, artist_name } = track

					const availableArtists = getAvailableArtists(artists, artist_id)
					const trackArtists = getTrackArtists(artist_id, artist_name, availableArtists)
        
					// get snippet
					axios.get(`track.snippet.get?track_id=${track_id}&apikey=${apiKey}`)
						.then(snippetResult => {
							const snippet = snippetResult.data.message.body.snippet.snippet_body
             
              setLevels(prevLevels => [
                ...prevLevels, 
                {
                  id: track_id,
                  snippet: snippet,
                  artistOwner: artist_id,
                  artists: trackArtists,
                }
              ])
						})
				})

			})).catch(error => {
				console.log(error)
			})

	}, [])

  return [ levels ]
}