import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sayHello, changeName } from "../redux/hello/actions"

const About = () => {
  const {
    person: { hello, name },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <div>About page</div>
      <span>{`${hello ? "Hello" : "Bye"} ${name}`}</span>
      <input
        type='text'
        value={name}
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
      <button onClick={() => dispatch(sayHello())}>Say Hello!</button>
    </div>
  )
}

export default {
  component: About,
}
