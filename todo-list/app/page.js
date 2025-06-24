"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const handlesumbit = (e) => {
    setMainTask([...mainTask, { title, desc }])
    e.preventDefault()
    settitle("")
    setdesc("")

    console.log(mainTask)
  }

  const deleteHandle = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 >No Task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li>
          <div className='flex justify-between items-center m-5 w-2/3'>
            <h4>{t.title}</h4>
            <h6>{t.desc}</h6>
          </div>
          <button className='bg-red-400 px-4 py-1' onClick={() => { deleteHandle(i) }}>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-red-500 text-5xl py-5'>My Todo list</h1>
      <form action="" onSubmit={handlesumbit}>
        <input type="text" className='border-4 m-8 px-4 py-1 border-zinc-700' placeholder='Enter your task' value={title} onChange={(e) => {
          settitle(e.target.value)
        }} />
        <input type="text" className='border-4 m-8 px-4 py-1 border-zinc-700' placeholder='Enter your description' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }} />
        <button className='bg-black text-white m-8 px-4 py-1 '>Add Task </button>
      </form>

      <hr />

      <div className='p-8 bg-slate-200 m-1'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
