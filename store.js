import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from 'react-native-firebase'
import user from './reducers/user.js'

const rootReducer = combineReducers({
  user
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
