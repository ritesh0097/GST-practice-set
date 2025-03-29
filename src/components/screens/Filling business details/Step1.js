import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step1 = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> Business Details</p>

            <StepHeader/> 

            <div className="flex my-4">
                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Business Details
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"></span>
                    Promoters / Partners
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
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
                    <h1 className="header-text">Details of your Business</h1>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                </div><hr/>

                <div className="bg-gray-100 flex justify-between px-3 p-4">
                    <div>
                        <h1 className="header-text">Legal Name of the Business</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                    <div>
                        <h1 className="header-text">Permanent Account Number (PAN)</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                    <div>
                        <h1 className="header-text">Date of Creation of PAN</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                </div>
                
                <form className="mt-4">
                    <div className="mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="header-text">Trade Name </label><br/>
                            <input type="text" id="tradeName" placeholder="Enter Trade Name" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                        <div className="mx-4"></div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Constitution of Business (Select Appropriate) <span className="text-red-600 w-[300px]">*</span></label><br/>                    
                            <select className="my-1 p-2 border border-black">
                                <option>Select</option>
                                <option>Foreign Company</option>
                                <option>Foreign Limited liability Partnership</option>
                                <option>Government Department</option>
                                <option>Hindu Undivided Family</option>
                                <option>Limited Liability Partnership</option>
                                <option>Local Authority</option>
                                <option>Others</option>
                                <option>Partnership</option>
                                <option>Private Limited Company</option>
                                <option>Proprietorship</option>
                                <option>Public Limited Company</option>
                                <option>Public Sector Undertaking</option>
                                <option>Society/ Club/ Trust/ AOP</option>
                                <option>Statutory Body</option>
                                <option>Unlimited Company</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="header-text py-">Additional Trade Name </label><br/>
                            <input type="text" id="tradeName" placeholder="Enter Trade Name" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                        <div className="mx-4"></div>
                        <div className="mt-4 flex items-center">
                            <div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"> ADD</div>
                            <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"> CANCEL</div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Name of the State </label><br/>
                            <span>Not Available</span>
                        </div>
                        <div className="mx-4"></div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">District<span className="text-red-600">*</span></label><br/>
                            <input type="text" id="panNumber" placeholder="Select District" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4">
                        <p className="header-text">Are you applying for registration as a casual <br/> Taxable person?</p>
                        
                        {/* Toggle checkbox */}
                        <div className="mt-2 ml-2">
                            <input type="checkbox" id="toggle" className="toggle-checkbox"/>
                            <label for="toggle" className="toggle-label"></label>
                        </div>
                    </div>

                    <div className="header-text mt-4 p-4">
                        <p>Option For Composition </p>
                        
                        {/* Toggle checkbox */}
                        <div className="mt-2 ml-2">
                            <input type="checkbox" id="toggle2" className="toggle-checkbox2"/>
                            <label for="toggle2" className="toggle-label2"></label>
                        </div>
                    </div>

                    <div className="bg-gray-100 mt-4 p-4 flex justify-between">
                        <div>
                            <label htmlFor="tradeName" className="header-text py-1">Reason to obtain registration <span className="text-red-600">*</span></label><br/>
                            <select className="w-[200px] my-1 p-2 border border-black">
                                <option>Select</option>
                                <option>Crossing the Threshold</option>
                                <option>Inter-State supply</option>
                                <option>Limited to pay as recipient of goods or servcies</option>
                                <option>Transfer / Succession of business</option>
                                <option>Death of the Proprietor</option>
                                <option>De-merger</option>
                                <option>Change in constitution of business</option>
                                <option>Merger / Amalgamation</option>
                                <option>E-commerce Operator</option>
                                <option>Selling through e-Commerce portal</option>
                                <option>Voluntary Basic</option>
                                <option>Input Service Distributor only</option>
                                <option>Supplies on behalf of other taxable Person</option>
                                <option>SEZ Unit</option>

                            </select>
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Date of commencement of Business <span className="text-red-600">*</span></label><br/>
                            <div><span className="bg-slate-300 p-3">From</span><input type="date" id="panNumber" required className="w-[150px] my-1 p-2 border border-black" /></div>
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="header-text py-1">Date on which liability to register aries <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="panNumber" required className="w-[150px] my-1 p-2 border border-black" />
                        </div>
                    </div>
                    
                    <div className="mt-4">

                        <div>
                            <h1 className="header-text">Indicate Existing Registration</h1>
                        </div>

                        <div className="bg-gray-100 mt-4 p-4 flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="header-text py-1">Type of Registration </label><br/>
                                <select className="w-[200px] my-1 p-2 border border-black">
                                    <option>Select</option>
                                    <option>GSTIN</option>
                                    <option>Temporary ID</option>
                                    <option>Registration Number Under Value Added Tax (TIN)</option>
                                    <option>Central Sales Tax Registration Number</option>
                                    <option>Central Excise Registration Number</option>
                                    <option>Service Tax Registration Number</option>
                                    <option>Importer/Exporter Code Number</option>
                                    <option>Entry Tax Registration Number</option>
                                    <option>Entertainment Tax Registration Number</option>
                                    <option>Hotel And Luxury Tax Registration Number</option>
                                    <option>Corporate Identity Number / Foreign Company Registration Number</option>
                                    <option>Limited Liability Partnership / Foreign Limited Liability Partnership Identification Number</option>
                                    <option>Registration number under Medicinal and Toilet Preparations (Excise Duties) Act</option>
                                    <option>Registration under Shops and Establishment Act</option>
                                    <option>Others (Please specify)</option>
                                </select>
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Registration no. <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="panNumber" required className="w-[250px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="header-text py-1">Date of Registration <span className="text-red-600">*</span></label><br/>
                                <input type="date" id="panNumber" required className="w-[150px] my-1 p-2 border border-black" />
                            </div>
                            
                            <div className="mt-4 flex items-center">
                                <div className="bg-blue-900 text-white px-4 py-2 mx-1 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"> ADD</div>
                                <div className="px-4 py-2 mx-1 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"> CANCEL</div>
                            </div>
                        </div>
                    </div>                
                </form>

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/dashboard"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <Link to={"/promoters and partner details"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Step1;