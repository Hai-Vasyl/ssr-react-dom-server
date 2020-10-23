import { SAY_HELLO } from "./types"

export const sayHello = (name) => {
  return {
    type: SAY_HELLO,
    payload: name,
  }
}
