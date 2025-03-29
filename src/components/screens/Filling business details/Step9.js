import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step9 = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> Aadhaar Information</p>
            
            <StepHeader/>

            <div className="text-[12px] flex my-4">
                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Business Details
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Promoters / Partners
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Authorized Signatory
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Authorized Representative
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Principal Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Additional Place of Business
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Goods and Servcies
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    State Specific Information
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    Aadhaar Authentication
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="flex items-center justify-start">
                    <h1 className="header-text mx-2 cursor-pointer">Aadhaar Authentication</h1>
                </div><hr/>
                
                <div className="bg-gray-100 mt-2 p-4">
                    <h1 className="">Do you want to otp for Aadhaar Authentication of details of Promoter/Partners, Primary Authorized Signatory added by you?<span className="text-red-600">*</span></h1>

                    {/* Toggle checkbox */}
                    <div className="mt-2 ml-2">
                        <input type="checkbox" id="toggle" className="toggle-checkbox"/>
                        <label for="toggle" className="toggle-label"></label>
                    </div>
                </div>
                
                <div className="p-4 flex justify-start">
                    <ol className="list-decimal pl-4">
                        <li>Authentication request shall be shared on mobile number, email upon submission of application of Promotor/Partner, and Primary Authorized Signatory which are selected.</li>
                        <li>ARN would be generated once Aadhaar Authentication exercise is completed for all application person whose name are selected in this table.</li>
                        <li>Kindly select at least one person from Promotor/Partner for Aadhaar Authentication.</li>
                    </ol>
                </div>                

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/state specific information"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>                    
                    <Link to={"/verification"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step9;