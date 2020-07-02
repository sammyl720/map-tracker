import CreateDataContext from './createDataContext'
import createDataContext from './createDataContext'
import { AsyncStorage } from 'react-native'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return { errorMessage: '', token: null }
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message'})
}

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to signop with email password
  try {
    const response = await trackerApi.post('/signup', { email, password })
    console.log(response)
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })

    // navigate to main flow
    navigate('TrackList')
  } catch (err) {
    // console.log(err.message)
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
}

const signin = (dispatch) => async ({ email, password}) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    // console.log(response)
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })

    // navigate to main flow
    navigate('TrackList')
  } catch (err) {
    // console.log(err.message)
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
  }
}

const signout = (dispatch) => async () => {
  // signout
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin
    
  },
  { token: null, errorMessage: '' }
)
