export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER__FAILED = 'GET_USER_FAILED'
export const CREATE_LIST = 'CREATE_LIST'




export const setUserData = (email) => {
  return async dispatch => {
    try {
// https://keeptheglow.herokuapp.com/api/users/
      let userResponse = await
       fetch(`http://localhost:8000/api/users/${email}`)
      let userData = await userResponse.json()

      // console.log("userData", userData)

      let id = userData.user[0].id


      let scoresResponse = await fetch(`http://localhost:8000/api/users/${id}/scores`)
      let scores = await scoresResponse.json()
        console.log("scores", scores)
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

export const createList = list => {
  return {
    type: CREATE_LIST,
    createList: createList
  }
}
