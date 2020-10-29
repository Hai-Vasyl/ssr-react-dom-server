import React, { useEffect, useState } from "react"
import { userFetch } from "../redux/users/actions"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import usePrevValue from "../hooks/usePrevValue"

let initLoad = true

const User = () => {
  const { userId } = useParams()
  const [initLoad, setInitLoad] = useState(true)
  const { value: userIdPrev } = usePrevValue(userId)
  const {
    users: { user, load, error },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!initLoad) {
      if (!user.name || userIdPrev !== userId) {
        dispatch(userFetch(userId))
      }
    } else {
      if (!user.name) {
        dispatch(userFetch(userId))
      }
      setInitLoad(false)
    }
    setInitLoad(false)
  }, [dispatch, userId, userIdPrev])

  // if (load) {
  //   return <div>Loading...</div>
  // }
  if (error) {
    return <div>Errors happend (</div>
  }
  return (
    <div>
      <div className={`loader ${(initLoad || load) && "loader--active"}`}>
        <div>Loading</div>
      </div>
      <div>
        <div>ID: {user.id}</div>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Address: {JSON.stringify(user.address)}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
      </div>
    </div>
  )
}

const fetchData = (store, param) => store.dispatch(userFetch(param))

export default { component: User, fetchData }
