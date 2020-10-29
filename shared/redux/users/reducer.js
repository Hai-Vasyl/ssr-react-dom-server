import {
  FETCH_START_USERS,
  FETCH_SUCCESS_USERS,
  FETCH_FAILURE_USERS,
  FETCH_SUCCESS_USER,
  FETCH_FAILURE_USER,
} from "./types"

const initState = {
  users: [],
  user: {},
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
        ...state,
        users: action.payload,
        load: false,
        error: "",
      }
    case FETCH_FAILURE_USERS:
      return {
        ...state,
        users: [],
        load: false,
        error: action.payload,
      }
    case FETCH_SUCCESS_USER:
      return {
        ...state,
        user: action.payload,
        load: false,
        error: "",
      }
    case FETCH_FAILURE_USER:
      return {
        ...state,
        user: [],
        load: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
