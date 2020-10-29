import React, { useEffect } from "react"
import { userFetch } from "../redux/users/actions"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Users = () => {
  const {
    users: { users, load, error },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!users.length) {
      dispatch(userFetch())
    }
  }, [dispatch])

  if (load) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Errors happend (</div>
  }
  return (
    <div>
      <div>Users page</div>
      <div>
        {users.map((user) => {
          return (
            <div className='box' key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
              <div className='box__item'>Name: {user.name}</div>
              <div className='box__item'>Username: {user.username}</div>
              <div className='box__item'>Email: {user.email}</div>
              <div className='box__item'>
                Address: {JSON.stringify(user.address)}
              </div>
              <div className='box__item'>Phone: {user.phone}</div>
              <div className='box__item'>Website: {user.website}</div>
              <div className='box__item'>
                Company: {JSON.stringify(user.company)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const fetchData = (store) => store.dispatch(userFetch())

export default {
  component: Users,
  fetchData,
}
