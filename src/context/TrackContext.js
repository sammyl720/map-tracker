import createDataContext from './createDataContext'
import trackerApi  from '../api/tracker'
const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload
    default:
      return state
  }
}

/// actions
const fetchTracks = dispatch => async () => {
  try {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data })
  } catch (err) {
    console.log(err)
  }
}
const createTrack = dispatch => async (name, locations) => {
  try {
    await trackerApi.post('/tracks', { name, locations })
  } catch (error) {
    console.log(error)
  }
}

export const { Context, Provider } = createDataContext(reducer, { fetchTracks, createTrack }, [])
