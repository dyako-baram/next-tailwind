export default function Notes({id,title,body,setLocal,local}){
    const removeItem=()=>{
        localStorage.removeItem(id)
        const item=local
        delete item.id
        setLocal(item)
    }
    return(
        <main className="shadow m-5  rounded-md">
            <form className="divide-y flex flex-col w-48 mx-3">
                <div className="flex justify-between items-center">
                    <p className="p-2 text-lg ">
                        {title}
                        </p>
                    <svg onClick={removeItem} xmlns="http://www.w3.org/2000/svg" className="text-red-500 cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>   
                </div>
                <textarea
                 defaultValue={body}
                 readOnly={true}
                 rows="5"  className="p-2 text-gray-500 text-sm overflow-hidden hover:overflow-auto resize-none outline-none" id="journal-scroll">
                    
                </textarea>
                <p className="text-sm capitalize py-1 text-gray-400">@ 13/7/2021</p>
            </form>

        <style jsx>{`
         #journal-scroll::-webkit-scrollbar {
            width: 4px;
            cursor: pointer;

        }
        #journal-scroll::-webkit-scrollbar-track {
            background-color: rgba(229, 231, 235, var(--bg-opacity));
            cursor: pointer;
        }
        #journal-scroll::-webkit-scrollbar-thumb {
            cursor: pointer;
            background-color: #60A5FA;
        }
      `}</style>
        </main>
    )
}
