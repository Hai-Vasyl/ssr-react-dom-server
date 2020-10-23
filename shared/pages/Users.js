import React, { useState, useEffect } from "react"
import { userFetch } from "../../client/redux/users/actions"
import { useSelector, useDispatch } from "react-redux"

const Users = ({ route }) => {
  const {
    users: { users, load, errors },
  } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [initLoad, setInitLoad] = useState(true)

  useEffect(() => {
    dispatch(userFetch())
    setInitLoad(false)
  }, [dispatch])

  if (initLoad || load) {
    return <div>Loading...</div>
  }
  if (errors) {
    return <div>Errors happend (</div>
  }
  return (
    <div>
      <div>Users page</div>
      <div>
        {users.map((user) => {
          return (
            <div className='box' key={user.id}>
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

export default Users
