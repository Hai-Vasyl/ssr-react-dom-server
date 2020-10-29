import { SAY_HELLO, CHANGE_NAME } from "./types"

const initState = {
  hello: false,
  name: "Noname",
}

const helloReducer = (state = initState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return {
        hello: !state.hello,
        name: action.payload,
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}

export default helloReducer
