import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

const middleware = [thunk]

let state
if (typeof window !== "undefined") {
  state = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
}

const store = createStore(rootReducer, state, applyMiddleware(...middleware))

export default store
