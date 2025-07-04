import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
     const { userid } = useParams()
     return (
          <div className='text-center bg-gray-600 text-cyan-300 text-2xl'>User : {userid} </div>
     )
}

export default User