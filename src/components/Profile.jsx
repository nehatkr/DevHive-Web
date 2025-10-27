import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store)=>store.user)  //getting the user from the store
  return ( user &&(
    <div>
      <EditProfile user= {user} />
    </div>
  ))
}

export default Profile
