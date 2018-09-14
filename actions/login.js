export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER__FAILED = 'GET_USER_FAILED'

export const setUserData = (email) => {
  return async dispatch => {
    try {
      let response = await fetch(`https://keeptheglow.herokuapp.com/api/users/${email}`)
      let userData = await response.json()

      // console.log("userData from action",userData.user[0].id)

      dispatch({
        type: GET_USER_SUCCESS,
        value: userData
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
