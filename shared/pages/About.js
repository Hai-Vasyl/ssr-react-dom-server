import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sayHello } from "../../client/redux/hello/actions"

const About = ({ route }) => {
  const [form, setForm] = useState("Vasyl")
  const {
    person: { hello, name },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setForm(event.target.value)
  }

  return (
    <div>
      <div>About page</div>
      <span>{`${hello ? "Hello" : "Bye"} ${form}`}</span>
      <input type='text' value={form} onChange={handleChange} />
      <button onClick={() => dispatch(sayHello(form))}>Say Hello!</button>
    </div>
  )
}

export default About
