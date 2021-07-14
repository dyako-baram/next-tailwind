import Head from 'next/head'
import AddNote from '../components/AddNote'
import Navbar from '../components/Navbar'
import Notes from '../components/Notes'

import { useEffect,useState } from 'react'

export default function Home() {
  function allStorage() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}

  const [local,setLocal]=useState({...localStorage})
  const [itemsArr,setItemsArr]=useState([])
  const [isloaded,setIsloaded]=useState(false)
console.log(typeof local)
   useEffect(() => {
     const items = allStorage()
     let arr=[]
     items.map(x=>{
      const parsed=JSON.parse(x)
      if(parsed.noteId != undefined)
      arr.push(parsed)
     })
     setItemsArr(arr)
     setIsloaded(true)
    },[local])
  return (
    <div className="container mx-auto ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <AddNote setLocal={setLocal} local={local}/>
      <div className="my-2 flex flex-wrap justify-center md:justify-center">
        {   
        isloaded ? itemsArr.map(x=><Notes local={local} setLocal={setLocal} key={x.noteId} id={x.noteId} title={x.noteTitle} body={x.noteBody} />):""
        }
          
        
      </div>
    </div>
  )
}
