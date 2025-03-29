import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step10 = () => {
    
    function otpbox(){
        document.getElementById("otpBox").classList.toggle("hidden") 
    }

    function otpboxClose(){
        document.getElementById("otpBox").classList.toggle("hidden") 
    }

    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> Verification</p>
            
            <StepHeader/>

            <div className="flex my-4">
                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Business Details
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Promoters / Partners
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
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

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Aadhaar Authentication
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
            <div className="flex items-center justify-between">
                    <h1 className="header-text"> Verification</h1>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                </div><hr/>
                
                <div className="bg-gray-100 mt-2 p-4 flex justify-start">
                    <h1 className=""> <input type="checkbox" checked /> I hereby solemnly affirm and declare that the information given herein above is true and correct to the best of my knowledge and belief and nothing has been concealed therefrom.</h1>
                </div>
                
                <div className="mt-2 p-4 flex justify-start">
                    <div>
                        <label htmlFor="tradeName" className="header-text">Name of Authorized Signatory<span className="text-red-600">*</span></label><br/>
                        <input type="text" id="tradeName" placeholder="Select" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                    <div className="mx-12"></div>
                    <div>
                        <label htmlFor="panNumber" className="header-text py-1">Place<span className="text-red-600">*</span></label><br/>
                        <input type="text" id="panNumber" placeholder="Enter place" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                </div>
                
                <div className="bg-gray-100 mt-2 p-4 flex justify-start">
                    <div>
                        <label htmlFor="tradeName" className="header-text">Designation / Status<span className="text-red-600">*</span></label><br/>                        
                    </div>
                    <div className="mx-12"></div>
                    <div>
                        <label htmlFor="panNumber" className="header-text py-1">Date<span className="text-red-600">*</span></label><br/>
                        Not Available
                    </div>
                </div>

                <div className="mt-2 p-4">
                    <h1 className="text-blue-500 header-text"><span className="text-black"><ion-icon name="alert-circle" class="text-[18px]"></ion-icon></span> Facing problem using DSC? click here for help</h1>                    

                    <p className="bg-orange-100 p-4 mt-4">Submit buttons will get enabled only after all mandatory fields are filled. Please check that you have filled all mandatory fields in the Form.</p>
                </div>



                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/aadhar authentication"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>                    
                    <div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SUBMIT WITH DSC</div>
                    <button onClick={otpbox} className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SUBMIT WITH EVC</button>
                </div>
                </div>

            </div>

            <Footer/>

            {/* OTP Verification box */}

            <div id="otpBox" className="bg-white w-[600px] p-4 text fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden">
                <h1 className="header-text font-bold text-start mb-[20px]">OTP Verification</h1>
                <hr />

                <h1 className="header-text text-start py-4 pb-1">Please enter OTP</h1>
                <input type="text" className="w-full my-1 p-2 border border-black" />

                <p className="bg-green-100 text-green-800 p-4 my-4 mb-8 text-start">
                    OTP has been sent to your Email and Mobile number registered at the GST portal                
                </p>

                <hr/>

                <div className="mt-12 flex justify-end items-center">
                    <button onClick={otpboxClose} className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">CLOSE</button>                    
                    <Link to={"/success"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">VALIDATE OTP</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Step10;