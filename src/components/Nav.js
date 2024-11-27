import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav" className="steal-blue w-[60%] lg:w-full text-white hidden lg:flex justify-end lg:justify-center absolute lg:relative top-[97px] lg:top-0 right-0 ">
            <ul className="text-1xl lg:text-[11px] xl:text-[14px] mb-12 lg:mb-0 flex flex-col lg:flex-row items-center">
                <NavLink to={"/"} className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Home</NavLink>
                <li className="bg-cyan-500 text-slate-800 mx-1 lg:mx-1 px-12 py-4 cursor-pointer flex items-end">Services <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">GST Law</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Downloads <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Search Taxpayer <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Help and Taxpayer Facilities</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">e-Invoice</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">News and Updates</li>
            </ul>
        </nav>
    )
}

export default Nav;