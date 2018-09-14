export const GET_SCORES_SUCCESS = 'GET_SCORES_SUCCESS'
export const GET_SCORES_FAILED = 'GET_SCORES_FAILED'

export const setUserScores = (id) => {
  return async dispatch => {
    try {
      let response = await fetch(`https://keeptheglow.herokuapp.com/api/users/${id}/scores`)
      let userScores = await response.json()

      console.log("userScores from action", userScores )

      dispatch({
        type: GET_SCORES_SUCCESS,
        value: userScores
      })
    }
    catch (err) {
      dispatch({
        type: GET_SCORES_FAILED,
        value: err
      })
    }
  }
}
