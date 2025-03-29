import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step3 = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span>  Details of Authorized Signatory</p>
            
            <StepHeader/>

            <div className="flex my-4">
                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"></span>
                    <span className="icon-text"></span>
                    Business Details
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"></span>
                    <span className="icon-text"></span>
                    Promoters / Partners
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Authorized Signatory
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Authorized Representative
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Principal Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span><span className="icon-text"></span>
                    <span className=""></span></span>
                    Additional Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Goods and Servcies
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    State Specific Information
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Aadhaar Authentication
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="flex items-center justify-between">
                    <h1 className="header-text">Details of Authorized Signatory</h1>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                </div><hr/>
                <div className="mt-2 flex">
                    <input type="checkbox" />
                    <h1 className="header-text ml-2">Primary Authorized Signatory</h1>            
                </div>
                
                <form className="mt-4">                    
                    <div className="bg-gray-100 mt-4 p-4">
                        <div>
                            <h1 className="header-text">Name of Person</h1>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="header-text py-1">First Name <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Enter First Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Middle Name </label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Middle Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Last Name</label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Last Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 p-4">
                        <div>
                            <h1 className="header-text ">Name of Father</h1>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="header-text py-1">First Name <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Enter First Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Middle Name </label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Middle Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Last Name</label><br/>
                                <input type="text" id="panNumber" placeholder="Enter Last Name" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Date of Birth <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="tradeName" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Mobile Number <span className="text-red-600">*</span> </label><br/>
                            <div><span className="bg-slate-300 p-3">+91</span><input type="text" id="panNumber" placeholder="Enter Mobile Number" required className="w-[250px] my-1 p-2 border border-black" /></div>
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Email Address <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Email Address" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>

                    <div className="mt-4 p-4 flex justify-between">                        
                        <div className="header-text">
                            <label htmlFor="tradeName" className="py-">Gender <span className="text-red-600">*</span></label><br/>
                            <input type="radio" name="gender" value={"male"} className="mx-1 my-4 ml-3 cursor-pointer" /> Male
                            <input type="radio" name="gender" value={"female"} className="mx-1 my-4 ml-3 cursor-pointer" /> Female
                            <input type="radio" name="gender" value={"other"} className="mx-1 my-4 ml-3 cursor-pointer" /> Others                            
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Telephone Number (with STD Code) <span className="text-red-600">*</span> </label><br/>
                            <div><span className="bg-slate-300 p-3">STD</span><input type="text" id="panNumber" placeholder="Enter Mobile Number" required className="w-[250px] my-1 p-2 border border-black" /></div>
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Email Address <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Email Address" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>

                    <h1 className="header-text">Identity Information</h1>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Designation / Status <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter Designation" className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Director Identification NUmber </label><br/>
                            <input type="text" id="panNumber" placeholder="Enter DIN Number" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Are you citizen of India? <span className="text-red-600">*</span></label><br/>

                            {/* Toggle checkbox */}
                            <div className="mt-2 ml-2">
                                <input type="checkbox" id="toggle" className="toggle-checkbox"/>
                                <label for="toggle" className="toggle-label"></label>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Permanent Account Number (PAN) <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter PAN Number" className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Passport Number (In case of Foreigner) </label><br/>
                            <input type="text" id="panNumber" placeholder="Enter Passport Number" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> Aadhaar Number <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Aadhaar Number" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>

                    
                    <h1 className="header-text"> Residental Address</h1>

                    <div className="bg-gray-100 h-[300px]"></div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Country <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter Country" value={"India"} className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">PIN Code<span className="text-red-600">*</span> </label><br/>
                            <input type="text" id="panNumber" placeholder="Enter PIN Code" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1"> State <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter State Name" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>
                    
                    <div className="mt-4 p-4 flex justify-between">                        
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">District <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter District Name" value={"India"} className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">City / Town / Village <span className="text-red-600">*</span> </label><br/>
                            <input type="text" id="panNumber" placeholder="Enter City / Town / Village" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Locality / Sub Locality <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Locality / Sub Locality" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>
                    
                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Road / Street <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter Road / Street" value={"India"} className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Name of the Premises / Building </label><br/>
                            <input type="text" id="panNumber" placeholder="Enter Name of the Premises / Building" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Building No. / Flat No. <span className="text-red-600">*</span></label><br/>
                            <input type="email" id="panNumber" placeholder="Enter Building No. / Flat No. / Door No." required className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                    </div>
                    
                    <div className="mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Floor No. <span className="text-red-600">*</span></label><br/>
                            <input type="input" id="tradeName" placeholder="Enter Floor No." value={"India"} className="w-[250px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Nearby Landmark <span className="text-red-600">*</span></label><br/>
                            <input type="text" id="panNumber" placeholder="Enter Nearby Landmark" required className="w-[250px] my-1 p-2 border border-black" />
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 pt-1">
                        <button className="bg-blue-900 text-white px-4 py-2 m-auto my-4 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"> &nbsp;&nbsp;&nbsp;&nbsp; RESET ADDRESS</button>
                    </div>


                    <h1 className="header-text my-8"> Document Upload</h1>
                    
                    <div className="bg-gray-100 mt-4 p-4 pt-1 flex">
                        <div className="p-4">
                            <h1 className="header-text my-2">Upload photograph (of person whose information has been given above) <span className="text-red-600">*</span></h1>
                            <p className="my-2"> Only JPEG file format is allowed</p>
                            <p className="my-2"> Maximum file size for upload is 100 KB</p>
                            
                            <input type="file" className="my-2"/>
                        </div>

                        <div className="w-[2px] bg-gray-300"><span className="bg-white py-2 px-4 ml-[-20px] relative top-[40%] ">OR</span></div>

                        <div className="ml-[5%] pt-[3%]">
                            <button className="bg-blue-900 text-white px-4 py-2 m-auto my-4 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"> &nbsp;&nbsp;&nbsp;&nbsp; Take Picture</button>
                            <p className="header-text my-2">You can use your device camera to take selfie photograph</p>
                        </div>                    
                    </div>


                    <h1 className="header-text my-8">Other Information</h1>

                    <div className="bg-gray-100 mt-4 p-4 pt-1">
                        <h1 className="header-text">Also Authorized Signatory</h1>
                        
                        {/* Toggle checkbox */}
                        <div className="mt-2 ml-2">
                            <input type="checkbox" id="toggle" className="toggle-checkbox"/>
                            <label for="toggle" className="toggle-label"></label>
                        </div>
                    </div>

                </form>

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/promoters and partner details"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">SHOW LIST</div>
                    <div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">ADD NEW</div>
                    <Link to={"/authorized representative"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step3;