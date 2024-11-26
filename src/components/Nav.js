const Nav = () => {
    return (
        <nav className="steal-blue text-white flex justify-center">
            <ul className="text-1xl flex">
                <li className="mx-4 px-4 py-4 cursor-pointer hover:text-cyan-500">Home</li>
                <li className="bg-cyan-500 text-slate-800 mx-4 px-4 py-4 cursor-pointer flex items-end">Services <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 px-4 py-4 cursor-pointer hover:text-cyan-500">GST Law</li>
                <li className="mx-4 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Downloads <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Search Taxpayer <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 px-4 py-4 cursor-pointer hover:text-cyan-500">Help and Taxpayer Facilities</li>
                <li className="mx-4 px-4 py-4 cursor-pointer hover:text-cyan-500">e-Invoice</li>
                <li className="mx-4 px-4 py-4 cursor-pointer hover:text-cyan-500">News and Updates</li>
            </ul>

        </nav>
    )
}

export default Nav;