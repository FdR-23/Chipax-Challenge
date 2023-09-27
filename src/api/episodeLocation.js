const URL_EPISODE = 'https://rickandmortyapi.com/api/episode'
import { fetchAllEpisodes, fetchCharactersForEpisode } from "../helpers/fetchData.js"
import { formatMillisegSegMin } from "../helpers/formatHour.js"


export const EpisodeLocation = async () => {
  try {
    const startDate = +new Date()
    const data = {
      exercise_name: 'Episode locations',
    };

    const episodes = await fetchAllEpisodes(URL_EPISODE, 'episodes')

    // Mapear los episodios y sus personajes
    const locationCharactersForEpisode = await Promise.all(episodes.map(async (episode) => {
      const characterURLs = episode.characters
      const locationForcharacters = await fetchCharactersForEpisode(characterURLs)
      const uniqueLocations = locationForcharacters.reduce((unique, location) => {
        if (!unique.includes(location)) {
          unique.push(location)
        }
        return unique
      }, [])
      return {
        name: episode.name,
        episode: episode.episode,
        locations: uniqueLocations
      }
    }))

    const endDate = +new Date()
    data.time = formatMillisegSegMin(endDate - startDate)
    data.results = locationCharactersForEpisode
    return data
  }
  catch (error) {
    return error
  }
}




