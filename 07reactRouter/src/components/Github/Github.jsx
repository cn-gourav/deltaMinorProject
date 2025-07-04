import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
     const data = useLoaderData()
     // const [data, setdata] = useState([])
     // useEffect(() => {
     //      fetch('https://api.github.com/users/cn-gourav')
     //           .then(res => res.json())
     //           .then(data => {
     //                console.log(data)
     //                setdata(data)
     //           })
     // }, [])
     return (
          <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl flex flex-col justify-center items-center gap-6'>Github Followers : {data.followers}
               <img src={data.avatar_url} alt="Github" width={300} /></div>
     )
}

export default Github

export const githubInfoLoader = async () => {
     const response = await fetch('https://api.github.com/users/cn-gourav')
     return response.json()

}