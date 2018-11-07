import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_LIST
} from '../actions/user.js'

const initialState = {
  userData: {},

}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_SUCCESS:
      return { ...state, userData: action.user, scores: action.scores}
    case CREATE_LIST:
      return { ...state, createList: action.createList}
    case GET_USER_FAILED:
      return action.value
    default:
      return state
  }
}
