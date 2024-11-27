import { NavLink } from "react-router-dom";

const SideNav = () => {

    

    return (
        <nav id="sidenav" className="steal-blue w-[60%] sm:w-[40%] md:w-[30%] text-white mt-[3px] hidden lg:hidden justify-end absolute top-[97px] lg:top-0 right-0 z-20">
            <ul className="text-1xl flex flex-col items-center">
                <NavLink to={"/"} className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Home</NavLink>
                <li className="bg-cyan-500 text-slate-800 mx-1 lg:mx-1 px-12 py-4 cursor-pointer flex items-end">Services <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">GST Law</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Downloads <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer flex items-end hover:text-cyan-500">Search Taxpayer <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Help and Taxpayer Facilities</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">e-Invoice</li>
                <li className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">News and Updates</li>
                <NavLink to={"/register/new-registration"} className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Register</NavLink>
                <NavLink to={"/login"} className="mx-4 lg:mx-1 px-4 py-4 cursor-pointer hover:text-cyan-500">Login</NavLink>
            </ul>
        </nav>
    )
}

export default SideNav;