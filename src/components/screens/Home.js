import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
    return(
    <div className="">
        <Header/>

        <div className="text">
            <nav>
                <img src="banner_image_large.jpg" alt="" className="h-[100px] sm:h-auto"/>
                <div className="bg-yellow-200 text-red-600 font-bold flex items-center p-1">                    
                    
                    <div className="marquee-container">
                        <div className="marquee-text">
                            We shall be enhancing services on the GST portal on 15th Dec'24 12:00 AM onwards. GST Portal services will not be available until 15th Dec'24 06:30 AM. The inconvenience caused is regretted.
                        </div>
                    </div>
                </div>
            </nav>
        
            <main className="my-8">
                <div className="w-[100%] md:w-[90%] lg:w-[80%] 2xl:w-[60%] m-auto">
                    <div className="flex flex-wrap justify-between mb-8">
                        <div className="w-[94%] lg:w-[55%] m-auto text-left mt-4">
                            <div className="mb-2 flex justify-between">
                                <h1 className="header-text font-bold">News and Updates</h1>
                                <span className="header-text hover:underline">View all</span>
                            </div>

                            <div className="border border-blue-200 rounded-lg shadow-md">
                                <div className="px-2 py-6 cursor-pointer hover:bg-blue-200">
                                    <p className="header-text font-bold pl-6 hover:underline">Advisory on difference in value of Table 8A and 8C of Annual FY 23-24</p>
                                    <div className="w-[90%] m-auto mt-2 flex justify-between">
                                        <div>Dec 9th, 2024</div>
                                        <div className="bg-gray-300 px-2 rounded-lg">RETURNS</div>
                                    </div>
                                </div>

                                <div className="px-2 py-6 cursor-pointer hover:bg-blue-200">
                                    <p className="header-text font-bold pl-6 hover:underline">Advisory for Biometric-Based Aadhaar Authentication and Document Verification for GST Registration Applicants of Haryana, manipur, Meghalya and Tripura</p>
                                    <div className="w-[90%] m-auto mt-2 flex justify-between">
                                        <div>Dec 9th, 2024</div>
                                        <div className="bg-gray-300 px-2 rounded-lg">RETURNS</div>
                                    </div>
                                </div>

                                <div className="px-2 py-6 cursor-pointer hover:bg-blue-200">
                                    <p className="header-text font-bold pl-6 hover:underline">Advisory on mandatory Sequential Filling of G S TR-7 Return as per Notification No. 17/2024</p>
                                    <div className="w-[90%] m-auto mt-2 flex justify-between">
                                        <div>Dec 9th, 2024</div>
                                        <div className="bg-gray-300 px-2 rounded-lg">RETURNS</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[94%] lg:w-[40%] m-auto mt-4">
                            <h1 className="header-text font-bold mb-2 text-left"> Popular Help Topics </h1>
                            <div className="text-left border border-blue-200 cursor-pointer rounded-lg shadow-md">
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How do I register width GST?</p>                                    
                                </div><hr/>
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How do I apply for refund?</p>                                    
                                </div><hr/>
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How do I file returns?</p>
                                </div><hr/>
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How can I use Returns offline Tool?</p>                                    
                                </div><hr/>
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How do I file an appeal?</p>                                    
                                </div><hr/>
                                <div className="p-2 flex justify-between hover:underline hover:bg-blue-200">
                                    <p>How do I file intimation about voluntary payment?</p>                                    
                                </div>
                            </div>

                            <div className="mt-4 p-4 flex justify-around border border-blue-200 rounded-lg shadow-md">
                                <div>
                                    <h1>Help Desk Number:</h1>
                                    <span className="text-blue-700 font-bold">1800-103-4786</span>
                                </div>
                                <div className="border border-gray-400 "></div>
                                <div>
                                    <h1>Log/Track Your Issues here</h1>
                                    <span className="text-blue-700 font-bold cursor-pointer hover:underline">Grievance Redressal</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    

                    <div className="flex flex-wrap justify-between">
                        <div className="w-[94%] lg:w-[55%] m-auto mt-4">
                            <div className="mb-2 flex justify-between">
                                <h1 className="header-text font-bold">Upcoming Due Dates</h1>
                                <span className="header-text">DOWNLOAD PDF </span>
                            </div>

                            <table className="text-left">
                                <tbody>                                                                    
                                <tr className="text-center font-bold">
                                    <td className="header-text border border-black">Monthly</td>
                                    <td className="header-text border border-black">Quarterly</td>
                                    <td colSpan={"2"} className="header-text pl-4 border border-black">Other Due Dates</td>
                                </tr>

                                <tr>
                                    <td className="w-[25%] pl-2 border border-black">
                                        <h1>GSTR-3B (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 20th, 2024 </p>
                                    </td>
                                    <td className="w-[25%] pl-2 border border-black">
                                        <h1>GSTR-3B (Oct-Dec, 2024)</h1>
                                        <p className="font-bold">Jan 22nd, 24th, 2025 </p>
                                    </td>
                                    <td className="w-[25%] pl-2 border border-black">
                                        <h1>GSTR-5 (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 13th, 2024</p>
                                    </td>
                                    <td className="w-[25%] pl-2 border border-black">
                                        <h1>GSTR-5A (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 20th, 2024</p>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="pl-2 border border-black">
                                        <h1>GSTR-1 (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 11th, 2024 </p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>GSTR-1 (Oct-Dec, 2024)</h1>
                                        <p className="font-bold">Jan 13th, 2025 </p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>GSTR-5 (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 13th, 2024</p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>GSTR-5A (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 10th, 2024</p>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="pl-2 border border-black">
                                        <h1>IFF (Optional Nov, 2024)</h1>
                                        <p className="font-bold">Dec 13th, 2024 </p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>CMP-08 (Oct-Dec, 2024)</h1>
                                        <p className="font-bold">Jan 18th, 2025</p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>GSTR-8 (Nov, 2024)</h1>
                                        <p className="font-bold">Dec 10th, 2024</p>
                                    </td>
                                    <td className="pl-2 border border-black">
                                        <h1>RFD-10</h1>
                                        <p className="font-bold">2 years from the last day of the quarter in which supply was received</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w-[94%] lg:w-[40%] m-auto mt-4">
                            <div className="mb-2 flex justify-between">
                                <h1 className="header-text font-bold">GST Media</h1>
                                <span className="header-text">View All </span>
                            </div>

                            <div className="p-2 border border-blue-200 shadow-md rounded-lg">
                                <div className="p-2 flex ">
                                    <img src="youtube.png" alt="" className="w-[50px] h-[50px]"/>
                                    <NavLink to={"https://www.youtube.com/watch?v=uwyubFFLFkU"} target="_blank" className="text-blue-600 text-left font-bold pl-4 hover:underline">Know more about Map-based Geocoding in the <br/>Registration precess, Watch live Video.</NavLink>
                                </div><hr/>

                                <div className="p-2 flex ">
                                    <img src="youtube.png" alt="" className="w-[50px] h-[50px]"/>
                                    <NavLink to={"https://www.youtube.com/watch?v=RgR7XqJr1Tc"} target="_blank" className="text-blue-600 text-left font-bold pl-4 hover:underline">How to validate Digital Signature affixted to the <br/>downloaded document from the GST Portal?</NavLink>
                                </div><hr/>

                                <div className="p-2 flex ">
                                    <img src="youtube.png" alt="" className="w-[50px] h-[50px]"/>
                                    <NavLink to={"https://www.youtube.com/watch?v=OszCwJymYWc"} target="_blank" className="text-blue-600 text-left font-bold pl-4 hover:underline">How to utilise Cash/ITC for Payment of Demand? <br/>Watch video...</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>        
        </div>

        <Footer/>
    </div>
    )
}

export default Home;