import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Step2 = () => {
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

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
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

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span>
                    Principal Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span><span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span>
                    <span className="text-xl"><ion-icon name="location-outline"></ion-icon></span></span>
                    Additional Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
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
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Details of Proprietor</h1>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                </div><hr/>                
                
                <form className="text-[15px] mt-4">                    
                    <div className="bg-gray-100 mt-4 p-4">
                        <div>
                            <h1 className="text-xl">Name of Person</h1>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="py-">First Name <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Enter First Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="py-1">Middle Name </label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Middle Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="py-1">Last Name</label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Last Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 p-4">
                        <div>
                            <h1 className="text-xl">Name of Father</h1>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="py-">First Name <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Enter First Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="py-1">Middle Name </label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Middle Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="py-1">Last Name</label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Last Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="py-">Date of Birth <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="tradeName" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="py-1"><ion-icon name="phone-portrait-outline"></ion-icon> Mobile Number <span className="text-red-600">*</span> </label><br/>
                            <div><span className="bg-slate-300 p-3">+91</span><input type="text" id="panNumber" placeholder="Enter Mobile Number" required className="w-[250px] my-1 p-2 border border-black" /></div>
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="py-1"><ion-icon name="mail-open-outline"></ion-icon> Email Address <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Email Address" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>                    

                    <div className="bg-gray-100 mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="py-">Additional Trade Name </label><br/>
                            <input type="text" id="tradeName" placeholder="Enter Trade Name" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                        <div className="mx-4"></div>
                        <div className="mt-4 flex items-center">
                            <div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"><ion-icon name="add-outline"></ion-icon> ADD</div>
                            <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"><ion-icon name="close-outline"></ion-icon> CANCEL</div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="py-">Name of the State </label><br/>
                            <span>Not Available</span>
                        </div>
                        <div className="mx-4"></div>
                        <div>
                            <label htmlFor="panNumber" className="py-1">District<span className="text-red-600">*</span></label><br/>
                            <input type="text" id="panNumber" placeholder="Select District" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4">
                        <p>Are you applying for registration as a casual <br/> Taxable person? <ion-icon name="alert-circle" class="text-[18px]"></ion-icon></p>
                    </div>

                    <div className="mt-4 p-4">
                        <p>Option For Composition <ion-icon name="alert-circle" class="text-[18px]"></ion-icon></p>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">
                        <div>
                            <label htmlFor="tradeName" className="py-">Reason to obtain registration <span className="text-red-600">*</span></label><br/>
                            <input type="text" id="tradeName" placeholder="Select" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="py-1">Date of commencement of Business <span className="text-red-600">*</span></label><br/>
                            <div><span className="bg-slate-300 p-3">From</span><input type="date" id="panNumber" required className="w-[250px] my-1 p-2 border border-black" /></div>
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="py-1">Date on which liability to register aries <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="panNumber" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                    </div>
                    
                    <div className="mt-4">

                        <div>
                            <h1 className="text-xl">Indicate Existing Registration</h1>
                        </div>

                        <div className="bg-gray-100 mt-4 p-4 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="py-">Type of Registration <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Select" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="py-1">Registration no. <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="panNumber" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="py-1">Date of Registration <span className="text-red-600">*</span></label><br/>
                                <input type="date" id="panNumber" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            
                            <div className="mt-4 flex items-center">
                                <div className="bg-blue-900 text-white px-4 py-2 mx-1 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"><ion-icon name="add-outline"></ion-icon> ADD</div>
                                <div className="px-4 py-2 mx-1 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"><ion-icon name="close-outline"></ion-icon> CANCEL</div>
                            </div>
                        </div>
                    </div>                
                </form>

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/business details"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <Link to={"/authorized signatory"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step2;