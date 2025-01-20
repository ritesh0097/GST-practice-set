import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import StepHeader from "./stepHeader";

const Step8 = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> <ion-icon name="chevron-forward-outline"></ion-icon> State Specific Information</p>
            
            <StepHeader/>

            <div className="flex my-4">
                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="icon-text"><ion-icon name="bag-handle-outline"></ion-icon></span>
                    Business Details
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="icon-text"><ion-icon name="person-outline"></ion-icon></span>
                    Promoters / Partners
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"><ion-icon name="sync-outline"></ion-icon></span>
                    Authorized Signatory
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"><ion-icon name="sync-circle-outline"></ion-icon></span>
                    Authorized Representative
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="icon-text"><ion-icon name="location-outline"></ion-icon></span>
                    Principal Place of Business
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span><span className="icon-text"><ion-icon name="location-outline"></ion-icon></span>
                    <span className=""><ion-icon name="location-outline"></ion-icon></span></span>
                    Additional Place of Business
                </div>

                <div className="bg-blue-900 text-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="relative check-text text-right"><ion-icon name="checkmark-sharp"></ion-icon></span>
                    <span className="icon-text"><ion-icon name="cart-outline"></ion-icon></span>
                    Goods and Servcies
                </div>

                <div className="bg-white flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"><ion-icon name="reader-outline"></ion-icon></span>
                    State Specific Information
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"><ion-icon name="person-circle-outline"></ion-icon></span>
                    Aadhaar Authentication
                </div>

                <div className="flex flex-col justify-center p-2 border border-black cursor-pointer hover:drop-shadow-xl">
                    <span className="icon-text"><ion-icon name="checkmark-circle-outline"></ion-icon></span>
                    Verification
                </div>
            </div>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="flex items-center justify-start">
                    <h1 className="header-text mx-2 cursor-pointer">State Specific Information</h1>
                </div><hr/>
                
                <div className="bg-gray-100 mt-2 p-4 flex justify-start">
                    <div>
                        <label htmlFor="tradeName" className="header-text">Professional Tax Employee Code (EC) No. </label><br/>
                        <input type="text" id="tradeName" placeholder="Enter Professional Tax E.C Number" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                    <div className="mx-12"></div>
                    <div>
                        <label htmlFor="panNumber" className="header-text py-1">Professinal Tax Registration Certificate (RC) No.</label><br/>
                        <input type="text" id="panNumber" placeholder="Enter Professional Tax RC Number" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                </div>
                
                <div className="mt-2 p-4 flex justify-start">
                    <div>
                        <label htmlFor="tradeName" className="header-text">State Excise License No.</label><br/>
                        <input type="text" id="tradeName" placeholder="Enter State Excise License Number" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                    <div className="mx-12"></div>
                    <div>
                        <label htmlFor="panNumber" className="header-text py-1">Name of the person in whose name Excise License is held</label><br/>
                        <input type="text" id="panNumber" placeholder="Enter Name of the Person in whose name Excise License is held" required className="w-[400px] my-1 p-2 border border-black" />
                    </div>
                </div>




                <div className="mt-12 flex justify-end items-center">
                    <Link to={"/goods and serivces/goods"}><div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">BACK</div></Link>                    
                    <Link to={"/aadhar authentication"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">SAVE & CONTINUE</div></Link>
                </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Step8;