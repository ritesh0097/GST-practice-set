import { Link, NavLink } from "react-router-dom";

const Nav = () => {    

    function showNav2() {
        document.getElementById("nav2").classList.toggle("invisible")
    }

    return (
        <div>
        <nav className="steal-blue">
            <ul className="w-[62%] lg:w-[85%] xl:w-[80%] lg:text-[10px] xl:text-[14px] 2xl:w-[70%] m-auto text-white lg:flex hidden z-10">
                <NavLink to="/"><li className="px-6 py-3 cursor-pointer">Home</li></NavLink>
                <li onClick={showNav2} className="px-6 py-3 cursor-pointer flex items-end">Services <span className="text-[12px] ml-1"><ion-icon name="caret-down-outline"></ion-icon></span></li>
                <li className="px-6 py-3 cursor-pointer">GST Law</li>
                <li className="px-6 py-3 cursor-pointer flex items-end">Downloads <span className="text-[12px] ml-1"><ion-icon name="caret-down-outline"></ion-icon></span></li>
                <li className="px-6 py-3 cursor-pointer flex items-end">Search Taxpayer <span className="text-[12px] ml-1"><ion-icon name="caret-down-outline"></ion-icon></span></li>
                <li className="px-6 py-3 cursor-pointer">Help and Taxpayer Facilities</li>
                <li className="px-6 py-3 cursor-pointer">e-Invoice</li>
                <li className="px-6 py-3 cursor-pointer">News and Updates</li>
            </ul>
        </nav>

        <ul id="nav2" className="bg-slate-200 w-[64%] text text-blue-900 flex absolute left-[50%] translate-x-[-50%] invisible">
                <li className="cursor-pointer hover:bg-slate-100 group">
                    <h1 className="px-6 py-3 border-b-2 hover:border-indigo-500">Registration</h1>

                    <ul className="bg-slate-100 w-[100%] text-left absolute left-[-0.001%] hidden group-hover:flex">
                        <div>
                            <li className="px-6 py-3 hover:underline"><Link to="/register/new-registration">New Registration</Link></li>
                            <li className="px-6 py-3 hover:underline">Track Application Status</li>
                        </div>
                        <div className="mx-[10%]"></div>
                        <div>
                            <li className="px-6 py-3 hover:underline">Application for Filling Clarification</li>
                        </div>
                    </ul>
                </li>

                <li className="cursor-pointer hover:bg-slate-100 group">
                    <h1 className="px-6 py-3 border-b-2 hover:border-indigo-500">Payments</h1>

                    <ul className="bg-slate-100 w-[100%] text-left absolute left-[-0.001%] hidden group-hover:flex">
                        <div>
                            <Link to={"/up5"}><li className="px-6 py-3 hover:underline">Create Challan</li></Link>
                            <li className="px-6 py-3 hover:underline">Governance against Payment (GST PMT-07)</li>
                        </div>
                        <div className="mx-[10%]"></div>
                        <div>
                            <li className="px-6 py-3 hover:underline">Track Payment Status</li>
                        </div>
                    </ul>
                </li>

                <li className="cursor-pointer hover:bg-slate-100 group">
                    <Link to={"/up3"}><h1 className="px-6 py-3 border-b-2 hover:border-indigo-500">User Services</h1></Link>

                    <ul className="bg-slate-100 w-[100%] text-left absolute left-[-0.001%] hidden group-hover:flex">
                        <div>
                            <li className="px-6 py-3 hover:underline">Search HSN Code</li>
                            <li className="px-6 py-3 hover:underline">Generate User ID for Unregistered Applicant</li>
                            <li className="px-6 py-3 hover:underline">Cause List</li>
                            <li className="px-6 py-3 hover:underline">Verify RFN</li>
                        </div>
                        <div className="mx-[10%]"></div>
                        <div>
                            <li className="px-6 py-3 hover:underline">Holiday List</li>
                            <li className="px-6 py-3 hover:underline">Locate GST Practitioner(GSTP)</li>
                            <li className="px-6 py-3 hover:underline">Search Advance Ruling</li>                        
                        </div>
                    </ul>
                </li>

                <li className="cursor-pointer hover:bg-slate-100 group">
                    <h1 className="px-6 py-3 border-b-2 hover:border-indigo-500">Refunds</h1>

                    <ul className="bg-slate-100 w-[100%] text-left absolute left-[-0.001%] hidden group-hover:flex">
                        <li className="px-6 py-3 hover:underline">Track Application Status</li>                        
                    </ul>
                </li>

                <li className="px-6 py-3 cursor-pointer hover:bg-slate-100 group">e-Way Bill System</li>

                <li className="px-6 py-3 cursor-pointer hover:bg-slate-100 group">Track Application Status</li>                
        </ul>

        </div>
    )
}

export default Nav;