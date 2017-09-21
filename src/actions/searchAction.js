const setResults = (results) => {
  return {
    type: 'search',
    payload: {
      results: results
    }
  }
}

export default setResults