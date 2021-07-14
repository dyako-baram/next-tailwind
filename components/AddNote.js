import cookie from 'cookie-cutter'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const AddNote=({setLocal,local})=>{
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const add=()=>{
        const id =nanoid(4)
        const obj={
            noteId:id,
            noteTitle:title,
            noteBody:body
        }
        const stringed=JSON.stringify(obj)
        localStorage.setItem(id,stringed)
        const newLocal=local[id]
        setLocal({newLocal:stringed})
        setTitle("")
        setBody("")
    }
    return(
        <div className="flex  justify-center shadow w-64 mx-auto">
            <form action="" id="form" className="flex flex-col px-4 divide-y">
                <input type="text" onChange={(e)=>setTitle(e.target.value)}  id="title" placeholder="Title" className="mt-1 text-lg w-full outline-none" />
                <textarea placeholder="Body" onChange={(e)=>setBody(e.target.value)} id="body" name="" id="" cols="30" rows="6" className="outline-none resize-none w-full"></textarea>
                <div className="flex justify-evenly">
                    <button type="button"  className="text-red-500 py-1 px-2 my-1 hover:bg-red-500 hover:text-white">Cancel</button>
                    <button type="button" onClick={add} className="text-blue-600 py-1 px-2 my-1 hover:bg-blue-500 hover:text-white">Add note</button>
                </div>
            </form>
      </div>
    )
}
export default AddNote