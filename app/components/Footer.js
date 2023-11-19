


export default function MyFooter() {
    return (
        <>
            <div className="bg-white w-full dark:bg-emerald-800">
                <div className="w-full mx-auto text-center flex flex-col items-center  p-4 ">
                    <span className="text-sm text-emerald-500 dark:text-emerald-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">MyGreenPets™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-emerald-500 dark:text-emerald-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}