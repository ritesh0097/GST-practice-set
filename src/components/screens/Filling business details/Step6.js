import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step6 = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> Details of Additional Places of your Business</p>
            
            <StepHeader/>

            <div className="flex my-4">
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

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Additional Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                
                    Goods and Servcies
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    State Specific Information
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Aadhaar Authentication
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="flex items-center justify-between">
                    <h1 className="header-text font-bold">Details of Additional Places of your Business</h1>                    
                </div><hr/>

                <div className="bg-orange-50 mt-4 p-4">
                    <h1 className="header-text font-bold text-amber-900">Important! If you need to add details on additional places of business:</h1>
                    <p>1. Go to <b className="text-amber-900">Principal Place of Business tab.</b></p>
                    <p>2. Select <b className="text-amber-900">Yes</b> for <b className="text-amber-900">Have Additional Places of Business</b></p>
                </div>

                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/authorized representative"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <div className="bg-blue-400 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">ADD NEW</div>
                    <Link to={"/goods and serivces/goods"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">CONTINUE</div></Link>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step6;