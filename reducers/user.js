import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_LIST,
  CREATE_LIST_FAILED
} from '../actions/user.js'

const initialState = {
  userData: {},

}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_SUCCESS:
      return { ...state, userData: action.user, scores: action.scores, staticFeelings: action.staticFeelings}
    case GET_USER_FAILED:
      return action.value
    case CREATE_LIST:
      return { ...state, createList: action.createList}
    case CREATE_LIST_FAILED:
      return action.value
    default:
      return state
  }
}
