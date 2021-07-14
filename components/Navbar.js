export default function Navbar(){
    return(
        <nav className="shadow-md rounded-md mx-5 mt-2  transition duration-100 ease-in-out">           
                <form id="search" className="p-2 flex shadow rounded-lg flex-grow my-2 flex-shrink">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </label>
                    <input className="ml-2 w-full outline-none" placeholder="Search" type="text" />
                </form>
        </nav>
    )
}