import axios from "axios"
import { useEffect, useState } from "react"
import { GameLevel } from "../models/gameLevel"

import { songs as songsData } from "../mocks/songs"
import { artists as artistsData } from "../mocks/artists"
import { snippets as snippetsData } from "../mocks/snippets"

export const useSetupGameLevels = () => {
  const [ levels, setLevels ] = useState<GameLevel[]>([])

  // useEffect(() => {
	// 	// setup levels
	// 	const randomSongsPage = Math.round(Math.random() * 10)
	// 	const randomArtistsPage = Math.round(Math.random() * 3)

	// 	const getSongs = axios.get(`chart.tracks.get?chart_name=top&page=${randomSongsPage}&page_size=10&f_has_lyrics=1&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)
	// 	const getArtists = axios.get(`chart.artists.get?page=${randomArtistsPage}&page_size=30&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)

	// 	axios.all([getSongs, getArtists])
	// 		.then(axios.spread((...responses) => {
	// 			const [ songResult, artistsResult ] = responses
	// 			const tracks = songResult.data.message.body.track_list
	// 			const artists = artistsResult.data.message.body.artist_list

	// 			// for each song
	// 			tracks.map(item => {
	// 				const track = item.track
	// 				console.log("track", track)

	// 				// get snippet
	// 				const { track_id, artist_id, artist_name } = track
	// 				const availableArtists = artists
	// 					.filter(artist => artist.artist.artist_id !== artist_id)
	// 					.sort(() => 0.5 - Math.random())
          
  //         console.log("availableArtists", availableArtists)
					
	// 				const [ firstAvailableArtist, secondAvailableArtist ] = availableArtists
	// 				const trackArtists = [
	// 					{
	// 						id: artist_id,
	// 						name: artist_name
	// 					},
	// 					{
	// 						id: firstAvailableArtist.artist.artist_id,
	// 						name: firstAvailableArtist.artist.artist_name
	// 					},
	// 					{
	// 						id: secondAvailableArtist.artist.artist_id,
	// 						name: secondAvailableArtist.artist.artist_name
	// 					}
	// 				].sort(() => 0.5 - Math.random())
        
  //         console.log("trackArtists", trackArtists)

	// 				axios.get(`track.snippet.get?track_id=${track_id}&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)
	// 					.then(snippetResult => {
	// 						const snippet = snippetResult.data.message.body.snippet.snippet_body
              
  //             setLevels(prevLevels => [
  //               ...prevLevels, 
  //               {
  //                 id: track_id,
  //                 snippet: snippet,
  //                 artistOwner: artist_id,
  //                 artists: trackArtists,
  //               }
  //             ])
	// 					})
	// 			})

	// 			// console.log("tempLevels", tempLevels)
  //       // setLevels(tempLevels)
	// 		})).catch(error => {
	// 			console.log(error)
	// 		})
	// }, [])

  // mock
  useEffect(() => {
		// setup levels
		// const randomSongsPage = Math.round(Math.random() * 10)
		// const randomArtistsPage = Math.round(Math.random() * 3)

		// const getSongs = axios.get(`chart.tracks.get?chart_name=top&page=${randomSongsPage}&page_size=10&f_has_lyrics=1&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)
		// const getArtists = axios.get(`chart.artists.get?page=${randomArtistsPage}&page_size=30&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)

		// axios.all([getSongs, getArtists])
		// 	.then(axios.spread((...responses) => {
		// 		const [ songResult, artistsResult ] = responses
				const tracks = songsData.data.message.body.track_list
				const artists = artistsData.data.message.body.artist_list

				// for each song
				tracks.map(item => {
					const track = item.track
					console.log("track", track)

					// get snippet
					const { track_id, artist_id, artist_name } = track
					const availableArtists = artists
						.filter(artist => artist.artist.artist_id !== artist_id)
						.sort(() => 0.5 - Math.random())
          
          console.log("availableArtists", availableArtists)
					
					const [ firstAvailableArtist, secondAvailableArtist ] = availableArtists
					const trackArtists = [
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
        
          console.log("trackArtists", trackArtists)

					// axios.get(`track.snippet.get?track_id=${track_id}&apikey=e80fbaa8d9fe4c1e5636ac25f58adbc5`)
					// 	.then(snippetResult => {
							// const snippet = snippetResult.data.message.body.snippet.snippet_body
              const snippet = snippetsData.find(snippet => snippet.track_id === track_id)?.snippet_body
              
              setLevels(prevLevels => [
                ...prevLevels, 
                {
                  id: track_id,
                  snippet: snippet,
                  artistOwner: artist_id,
                  artists: trackArtists,
                }
              ])
						// })
				})

				// console.log("tempLevels", tempLevels)
        // setLevels(tempLevels)
			// })).catch(error => {
			// 	console.log(error)
			// })
	}, [])

  return [ levels ]
}