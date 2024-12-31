import Footer from "../../Footer";
import Header from "../../Header";

const Step1 = () => {
    return (
        <div>
            <Header/>

            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> &nbsp;&nbsp;&nbsp;&nbsp; Business Details</p>
            
            <table className="bg-yellow-300 w-[100%] text-xl">
                <tbody>
                    <tr className="">
                        <td className="w-[20%]">Application Type</td>
                        <td className="w-[20%]">Due Date to Complete</td>
                        <td className="w-[20%]">Last Modified</td>
                        <td className="w-[20%]">Profile</td>
                    </tr>
                    <tr className="">
                        <td>New Registration</td>
                        <td>23/07/2022</td>
                        <td>08/07/2022</td>
                        <td>0%</td>
                    </tr>
                
                </tbody>                        
            </table>

            <div className="text-[12px] flex my-4">
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="bag-handle-outline"></ion-icon></span>Business Details</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="person-outline"></ion-icon></span>Promoters / Partners</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="sync-outline"></ion-icon></span>Authorized Signatory</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="sync-circle-outline"></ion-icon></span>Authorized Representative</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span>Principal Place of Business</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span><span className="text-3xl"><ion-icon name="location-outline"></ion-icon></span><span className="text-xl"><ion-icon name="location-outline"></ion-icon></span></span>Additional Place of Business</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="cart-outline"></ion-icon></span>Goods and Servcies</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="reader-outline"></ion-icon></span>State Specific Information</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="person-circle-outline"></ion-icon></span>Aadhaar Authentication</div>
                <div className="flex flex-col justify-center p-2 border border-black"><span className="text-3xl"><ion-icon name="checkmark-circle-outline"></ion-icon></span>Verification</div>

            </div>

            <div className="w-[90%] m-auto mb-[5%] py-4 text-left justify-start">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Details of your Business</h1>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                </div><hr/>

                <div className="bg-gray-100 flex justify-between px-3 py-4">
                    <div className="">
                        <h1>Legal Name of the Business</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                    <div className="">
                        <h1>Permanent Account Number (PAN)</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                    <div className="">
                        <h1>Date of Creation of PAN</h1>
                        <p className="font-bold">Not Available</p>
                    </div>
                </div>
                
                <form className="text-[15px] mt-4">
                    <div className="mt-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="py-">Trade Name </label><br/>
                            <input type="text" id="tradeName" placeholder="Enter Trade Name" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                        <div className="mx-4"></div>
                        <div>
                            <label htmlFor="panNumber" className="py-1">Temporary Reference Number (TRN) <span className="text-red-600">*</span></label><br/>
                            <input type="text" id="panNumber" placeholder="Enter Temporary Reference Number (TRN)" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                    </div>

                    <div className="mt-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="py-">Additional Trade Name </label><br/>
                            <input type="text" id="tradeName" placeholder="Enter Trade Name" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                        <div className="mx-4"></div>
                        <div className="mt-4 flex items-center">
                            <div className="bg-blue-300 px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"><ion-icon name="add-outline"></ion-icon> ADD</div>
                            <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"><ion-icon name="close-outline"></ion-icon> CANCEL</div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-start">
                        <div>
                            <label htmlFor="tradeName" className="py-">Name of the State </label><br/>
                            <span>Not Available</span>
                        </div>
                        <div className="mx-4"></div>
                        <div>
                            <label htmlFor="panNumber" className="py-1">District<span className="text-red-600">*</span></label><br/>
                            <input type="text" id="panNumber" placeholder="Enter Temporary Reference Number (TRN)" required className="w-[300px] my-1 p-2 border border-black" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>Are you applying for registration as a casual <br/> Taxable person? <ion-icon name="alert-circle" class="text-[18px]"></ion-icon></p>
                    </div>

                    <div className="mt-4">
                        <p>Option For Composition <ion-icon name="alert-circle" class="text-[18px]"></ion-icon></p>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <label htmlFor="tradeName" className="py-">Reason to obtain registration <span className="text-red-600">*</span></label><br/>
                            <input type="text" id="tradeName" placeholder="Select" required className="w-[200px] my-1 p-2 border border-black" />
                        </div>                        
                        <div>
                            <label htmlFor="panNumber" className="py-1">Date of commencement of Business <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="panNumber" required className="w-[200px] my-1 p-2 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="panNumber" className="py-1">Date on which liability to register aries <span className="text-red-600">*</span></label><br/>
                            <input type="date" id="panNumber" required className="w-[200px] my-1 p-2 border border-black" />
                        </div>
                    </div>
                    
                    <div className="mt-4">

                        <div>
                            <h1 className="text-xl">Indicate Existing Registration</h1>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="tradeName" className="py-">Type of Registration <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="tradeName" placeholder="Select" required className="w-[200px] my-1 p-2 border border-black" />
                            </div>                        
                            <div>
                                <label htmlFor="panNumber" className="py-1">Registration no. <span className="text-red-600">*</span></label><br/>
                                <input type="text" id="panNumber" required className="w-[200px] my-1 p-2 border border-black" />
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="py-1">Date of Registration <span className="text-red-600">*</span></label><br/>
                                <input type="date" id="panNumber" required className="w-[200px] my-1 p-2 border border-black" />
                            </div>
                            
                            <div className="mt-4 flex items-center">
                                <div className="bg-blue-300 px-4 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500"><ion-icon name="add-outline"></ion-icon> ADD</div>
                                <div className="px-4 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400"><ion-icon name="close-outline"></ion-icon> CANCEL</div>
                            </div>
                        </div>
                    </div>                
                </form>

                <div className="mt-12 flex justify-end items-center">
                    <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div>
                    <div className="bg-blue-300 px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step1;