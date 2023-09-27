export const countCharacter = (charter, resource, array) => {
    const result = {
      char: charter,
      resource,
      count: 0
    }
    for (const str of array) {
      for (const char of str) {
        if (char.toLowerCase() === charter) {
          result.count++
        }
      }
    }

    return result
  }