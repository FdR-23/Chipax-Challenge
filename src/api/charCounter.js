const URL_CHARACTER = 'https://rickandmortyapi.com/api/character'
const URL_LOCATION = 'https://rickandmortyapi.com/api/location'
const URL_EPISODE = 'https://rickandmortyapi.com/api/episode'
import { formatMillisegSegMin } from "../helpers/formatHour.js"
import { countCharacter } from "../helpers/countCharacter.js"
import { fetchAllDataName } from "../helpers/fetchData.js"

export const CharCounter = async () => {
  const startDate = +new Date()
  const results = [];
  const data = {
    exercise_name: 'Char counter',
  }
  const [{ locations }, { characters }, { episodes }] = await Promise.all([
    fetchAllDataName(URL_LOCATION, 'locations'),
    fetchAllDataName(URL_CHARACTER, 'characters'),
    fetchAllDataName(URL_EPISODE, 'episodes')
  ])

  const locationsNames = locations.map((location) => location).flat()
  const episodeNames = episodes.map((episode) => episode).flat()
  const characterNames = characters.map((character) => character).flat()

  const resultLocation = countCharacter('l', 'location', locationsNames)
  const resultEpisode = countCharacter('e', 'episode', episodeNames)
  const resultCharacter = countCharacter('c', 'character', characterNames)

  results.push(resultLocation)
  results.push(resultEpisode)
  results.push(resultCharacter)

  const endDate = +new Date()
  data.time = formatMillisegSegMin(endDate - startDate)
  data.results = results
  return data
}


