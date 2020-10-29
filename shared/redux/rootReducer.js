import { combineReducers } from "redux"
import helloReducer from "./hello/reducer"
import usersReducer from "./users/reducer"

const rootReducer = combineReducers({
  person: helloReducer,
  users: usersReducer,
})

export default rootReducer
