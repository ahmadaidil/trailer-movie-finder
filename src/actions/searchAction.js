import MovieDB from 'moviedb'
const mdb = MovieDB('bb1a087efcf138ae57a0fdb10c961bf5')

export const setResults = (res) => {
  return {
    type: 'search',
    payload: {
      results: res
    }
  }
}

export const getResults = (state) => {
  return (dispatch) => {
    mdb.searchMovie({ ...state }, (err, res) => {
      if (err) console.error(err)
      if(res !== null) {
        dispatch(setResults(res))
      }
    })
  }
}