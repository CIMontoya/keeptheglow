import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from 'react-native-firebase'
import user from './reducers/login.js'
import userScores from './reducers/scores.js'

const rootReducer = combineReducers({
  user,
  userScores
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
