export const fetchData = async (url) => {
  try {
    const config = {
      method: 'GET'
    }
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`Error fetching from  ${url}`)
    }
    return response.json()
  } catch (error) {
    return error
  }
}

export const fetchAllDataName = async (url, key) => {
  try {
    const results = []
    let nextUrl = url
    while (nextUrl) {
      const response = await fetchData(nextUrl)
      const data = response.results.map((data) => data.name)
      results.push(data)
      nextUrl = response.info.next
    }
    return { [key]: results }
  } catch (error) {
    return error
  }
}

export const fetchAllEpisodes = async (url) => {
  try {
    const episodes = []
    let nextPage = url

    while (nextPage) {
      const response = await fetchData(nextPage)
      episodes.push(...response.results)
      nextPage = response.info.next
    }
    return episodes
  } catch (error) {
    return error
  }
}

export const fetchCharactersForEpisode = async (characterURLs) => {
  try {
    const characterPromises = characterURLs.map(async (characterURL) => {
      const characterResponse = await fetchData(characterURL);
      if (characterResponse?.origin?.name !== undefined) {
        return characterResponse.origin.name;
      } else {
        return null;
      }
    });
    return Promise.all(characterPromises)
  } catch (error) {
    return error;
  }
}

