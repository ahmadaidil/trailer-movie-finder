const setResults = (res) => {
  return {
    type: 'search',
    payload: {
      results: res
    }
  }
}

export default setResults