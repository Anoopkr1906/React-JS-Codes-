import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {

    const {userid} = useParams()

  return (
    <div className='bg-blue-400 text-2xl text-black p-4 text-center shadow-lg border-2 border-gray-200'>
      User: {userid}
    </div>
  )
}

export default User
