const initState = {
  results: {results: []}
}

const searchReducer = (state=initState, action) => {
  switch (action.type) {
    case 'search':
      let newState = {...state, results: action.payload.results}
      return newState
    default:
      return state
  }
}

export default searchReducer