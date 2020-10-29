import {
  FETCH_START_USERS,
  FETCH_SUCCESS_USERS,
  FETCH_FAILURE_USERS,
  FETCH_SUCCESS_USER,
  FETCH_FAILURE_USER,
} from "./types"
import axios from "axios"

export const fetchStart = () => {
  return { type: FETCH_START_USERS }
}

export const fetchSuccess = (users) => {
  return { type: FETCH_SUCCESS_USERS, payload: users }
}
export const fetchSuccessUser = (user) => {
  return { type: FETCH_SUCCESS_USER, payload: user }
}

export const fetchFailure = (errors) => {
  return { type: FETCH_FAILURE_USERS, payload: errors }
}
export const fetchFailureUser = (errors) => {
  return { type: FETCH_FAILURE_USER, payload: errors }
}

export const userFetch = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart())
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId ? userId : ""}`
      )
      userId
        ? dispatch(fetchSuccessUser(res.data))
        : dispatch(fetchSuccess(res.data))
    } catch (error) {
      const errorMsg = JSON.stringify(error.message)
      userId
        ? dispatch(fetchFailureUser(errorMsg))
        : dispatch(fetchFailure(errorMsg))
    }
  }
}
