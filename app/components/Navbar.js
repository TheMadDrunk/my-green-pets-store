"use client"


export default function MyNavbar(){

    const handleShowMenu = ()=>{
        document.getElementById("navbar-sticky").classList.toggle("hidden")
    }

    return (
        <>
            <nav className="bg-white dark:bg-emerald-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/plant.png" className="h-10" alt="MyGreenPets Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Green Pets</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={handleShowMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-green-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-green-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-emerald-800 md:dark:bg-emerald-900 dark:border-gray-700">
                            <li>
                                <a href="#products" className="block py-2 px-3 text-white bg-emerald-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" >Products</a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}