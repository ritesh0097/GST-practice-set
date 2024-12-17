const NestedNav = () => {



    return(
        <nav id="nlist" className="bg-slate-100 w-[60.5%] m-auto absolute left-[50%] translate-x-[-53%] hidden">
            <ul className="text-[14px] flex items-center justify-start">
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">Registration</li>
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">Payments</li>
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">User Services</li>
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">Refunds</li>
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">e-Way Bill System</li>
                <li className="nested-nav-list mx-1 px-4 py-3 hover:bg-slate-300 hover:underline cursor-pointer ">Track Application Status</li>                
            </ul>
            
            <ul id="registration" className="text-[14px] text-left items-center justify-start hidden">
                <div>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">New Registration</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Track Application Status</li>
                </div>
                <div>
                    <li className="mx-1 mt-[-17%] px-4 py-3 hover:underline cursor-pointer">Application for Filing Clarifications</li>
                </div>
            </ul>

            <ul id="Payments" className="text-[14px] text-left items-center justify-start hidden">
                <div>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Create Challan</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Grievance against Payment(GST PMT-07)</li>
                </div>
                <div>
                    <li className="mx-1 mt-[-26%] px-4 py-3 hover:underline cursor-pointer">Track Payment Status</li>
                </div>
            </ul>
            
            <ul id="UserServices" className="text-[14px] text-left items-center justify-start hidden">
                <div className="">
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Search HSN Code</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Genrate User ID for Unregistered Applicant</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Cause List</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Verify RFN</li>
                </div>
                <div className="ml-[20%]">
                    <li className="mx-1 mt-[-20%] px-4 py-3 hover:underline cursor-pointer">Holiday List</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Locate GST Practitioner (GSTP)</li>
                    <li className="mx-1 px-4 py-3 hover:underline cursor-pointer">Search Advance Ruling</li>
                </div>
            </ul>
            
            <ul id="Refunds" className="text-[14px] items-center justify-start flex-wrap hidden">
                <li className="mx-1 px-4 py-3 hover:underline cursor-pointer mr-[35%]">Track Application Status</li>                
            </ul>                        

        </nav>
    )
}

export default NestedNav;