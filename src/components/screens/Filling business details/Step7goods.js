import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step7g = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> Goods and Servcies</p>
            
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

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    Additional Place of Business
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">                    
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
                <div className="flex items-center justify-start">
                    <Link to={"/goods and serivces/goods"}><h1 className="header-text mx-2 cursor-pointer border-b-2 border-indigo-500">Goods</h1></Link>
                    <Link to={"/goods and serivces/services"}><h1 className="header-text mx-2 cursor-pointer">Services</h1></Link>
                </div><hr/>
                
                <div className="flex items-center justify-start">
                    <h1 className="header-text mx-2 mt-4">Details of Goods / Commodities by the business</h1>
                </div><hr/>
                
                <div className="flex items-center justify-start">
                    <h1 className="header-text mx-2 mt-4">Please specifiy top 5 Commodities</h1>
                </div><hr/>
                
                <div className="p-2">
                    <h1 className="header-text mx-2 mt-8">Search HSN Chapter by Name or Code</h1>                    
                    <input type="text" id="panNumber" placeholder="Search HSN Chapter" required className="w-[500px] my-1 p-2 ml-2 border border-black" />
                </div>
                        
                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/pricipal place"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>
                    <Link to={"/state specific information"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Step7g;