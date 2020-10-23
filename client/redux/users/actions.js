import {
  FETCH_START_USERS,
  FETCH_SUCCESS_USERS,
  FETCH_FAILURE_USERS,
} from "./types"
import axios from "axios"

export const fetchStart = () => {
  return { type: FETCH_START_USERS }
}

export const fetchSuccess = (users) => {
  return { type: FETCH_SUCCESS_USERS, payload: users }
}

export const fetchFailure = (errors) => {
  return { type: FETCH_FAILURE_USERS, payload: errors }
}

export const userFetch = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart())
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      dispatch(fetchSuccess(res.data))
    } catch (error) {
      dispatch(fetchFailure(JSON.stringify(error.message)))
    }
  }
}
