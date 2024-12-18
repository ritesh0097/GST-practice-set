import { NavLink } from "react-router-dom";
import NestedNav from "./NestedNav";

const Nav = () => {

    return (
        <nav className="nav-parent">
        <nav id="nav" className="steal-blue w-full text-white hidden lg:flex justify-center hide">
            <ul className="text-1xl lg:text-[11px] xl:text-[14px] mb-12 lg:mb-0 flex flex-col lg:flex-row items-center">
                <NavLink to={"/"} className="px-6 py-4 cursor-pointer hover:text-cyan-500">Home</NavLink>
                <li id="servies" className="px-6 py-4 cursor-pointer flex items-end hover:text-cyan-500">Services <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="px-6 py-4 cursor-pointer hover:text-cyan-500">GST Law</li>
                <li className="px-6 py-4 cursor-pointer flex items-end hover:text-cyan-500">Downloads <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="px-6 py-4 cursor-pointer flex items-end hover:text-cyan-500">Search Taxpayer <ion-icon name="caret-down-outline" class="ml-4"></ion-icon></li>
                <li className="px-6 py-4 cursor-pointer hover:text-cyan-500">Help and Taxpayer Facilities</li>
                <li className="px-6 py-4 cursor-pointer hover:text-cyan-500">e-Invoice</li>
                <li className="px-6 py-4 cursor-pointer hover:text-cyan-500">News and Updates</li>
            </ul>
        </nav>

        <NestedNav />
        </nav>
    )
}

export default Nav;