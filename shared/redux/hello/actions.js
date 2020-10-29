import { SAY_HELLO, CHANGE_NAME } from "./types"

export const sayHello = () => {
  return {
    type: SAY_HELLO,
  }
}

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  }
}
