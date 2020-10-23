import {
  FETCH_START_USERS,
  FETCH_SUCCESS_USERS,
  FETCH_FAILURE_USERS,
} from "./types"

const initState = {
  users: [],
  load: false,
  error: "",
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_START_USERS:
      return {
        ...state,
        load: true,
      }
    case FETCH_SUCCESS_USERS:
      return {
        users: action.payload,
        load: false,
        error: "",
      }
    case FETCH_FAILURE_USERS:
      return {
        users: [],
        load: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
