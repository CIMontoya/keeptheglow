import {
  GET_SCORES_SUCCESS,
  GET_SCORES_FAILED
} from '../actions/scores.js'

const initialState = {
  userScores: {}
}
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SCORES_SUCCESS:
      return { ...state, userScores: action.value }
    case GET_SCORES_FAILED:
      return action.value
    default:
      return state
  }
}
