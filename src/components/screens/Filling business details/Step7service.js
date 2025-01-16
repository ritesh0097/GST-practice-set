import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Step7s = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[60%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> &nbsp;&nbsp;&nbsp;&nbsp; Business Details</p>
            
            <div className="bg-yellow-200 w-[100%] text-red-600 text-[14px] font-bold items-center p-1 mb-4 flex">
                <div className=""><ion-icon name="notifications"></ion-icon></div>

                <div className="marquee-container">
                    <div className="marquee-text">
                        Mobile number/e-mail id linked with Aadhar can be verified at <span className="text-green-600">https://residental.uidai.gov.in/verify-email-mobile.</span> Please wait 45 seconds before regenerating the OTP for Aadhar Authentication.
                    </div>
                </div>
            </div>

            <div className="bg-yellow-200 w-[100%] text-xl text-left">
                    <div className="flex">
                        <div className="w-[25%] p-2">Application Type</div>
                        <div className="w-[25%] p-2">Due Date to Complete</div>
                        <div className="w-[25%] p-2">Last Modified</div>
                        <div className="w-[25%] p-2">Profile</div>
                    </div>
                    <div className="flex">
                        <div className="w-[25%] p-2">New Registration</div>
                        <div className="w-[25%] p-2">23/07/2022</div>
                        <div className="w-[25%] p-2">08/07/2022</div>
                        <div className="w-[25%] p-2">0%</div>
                    </div>
            </div>

            <div className="text-[12px] flex my-4">
                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative text-[12px] text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="text-3xl"><ion-icon name="bag-handle-outline"></ion-icon></span>
                    Business Details
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative text-[12px] text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="text-3xl"><ion-icon name="person-outline"></ion-icon></span>
                    Promoters / Partners
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="sync-outline"></ion-icon></span>
                    Authorized Signatory
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="sync-circle-outline"></ion-icon></span>
                    Authorized Representative
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative text-[12px] text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span>
                    Principal Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span><span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span>
                    <span className="text-xl"><ion-icon name="location-outline"></ion-icon></span></span>
                    Additional Place of Business
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="cart-outline"></ion-icon></span>
                    Goods and Servcies
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="reader-outline"></ion-icon></span>
                    State Specific Information
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="person-circle-outline"></ion-icon></span>
                    Aadhaar Authentication
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="checkmark-circle-outline"></ion-icon></span>
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="flex items-center justify-start">
                    <Link to={"/goods and serivces/goods"}><h1 className="text-[18px] mx-2 cursor-pointer">Goods</h1></Link>
                    <Link to={"/goods and serivces/services"}><h1 className="text-[18px] mx-2 cursor-pointer border-b-2 border-indigo-500">Services</h1></Link>
                </div><hr/>
                
                <div className="flex items-center justify-start">
                    <h1 className="text-[20px] mx-2 mt-4">Details of Servcies offered by the Business</h1>
                </div><hr/>
                
                <div className="flex items-center justify-start">
                    <h1 className="text-[18px] mx-2 mt-4">Please specifiy top 5 Services</h1>
                </div><hr/>
                
                <div className="p-2">
                    <h1 className="text-[18px] mx-2 mt-8">Search by Name or Code</h1>                    
                    <input type="text" id="panNumber" placeholder="Search Name or Code" required className="w-[500px] my-1 p-2 ml-2 border border-black" />
                </div>

                

                

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/pricipal place"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <div className="bg-blue-400 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div>
                    <Link to={"/state specific information"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step7s;