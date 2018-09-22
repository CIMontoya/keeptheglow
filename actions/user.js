export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER__FAILED = 'GET_USER_FAILED'

export const setUserData = (email) => {
  return async dispatch => {
    try {

      let userResponse = await fetch(`https://keeptheglow.herokuapp.com/api/users/${email}`)
      let userData = await userResponse.json()

      let id = userData.user[0].id


      let scoresResponse = await fetch(`https://keeptheglow.herokuapp.com/api/users/${id}/scores`)
      let scores = await scoresResponse.json()

      dispatch({
        type: GET_USER_SUCCESS,
        user: userData,
        scores: scores
      })
    }
    catch (err) {
      dispatch({
        type: GET_USER_FAILED,
        value: err
      })
    }
  }
}
