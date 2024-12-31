import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Otp2 = () => {
    return(
        <div>
            <Header/>
                <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon>  <span className="text-blue-600"> Registration </span> <ion-icon name="chevron-forward-outline"></ion-icon> Verify</p>
                    
                <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                    <div className="w-[250px] text-1xl my-2 m-auto mb-8 ">
                        <div className="w-[70%] text-white m-auto py-1 flex justify-between items-center">
                            <div className="bg-green-600 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">1</div>
                            <div className="bg-gray-400 w-[96px] h-[3px]"></div>
                            <div className="bg-orange-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">2</div>
                        </div>

                        <div className="m-auto flex justify-between">
                            <h1 className="text-[14px] text-green-600">User Credentials</h1>
                            <h1 className="text-[14px] text-orange-400">OTP Verification</h1>
                        </div>
                    </div>

                    <h1 className="text-xl font-bold"> New Registration </h1>
                    <hr/>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>

                    <label htmlFor="mobileOTP" className="py-1 mt-2"> Mobile / Email OTP <span className="text-red-600">*</span></label>
                    <input type="text" id="mobileOTP" placeholder="Enter Mobile OTP" required className="my-1 p-2 border border-black"/>
                    <p><ion-icon name="alert-circle" class="text-[18px]"></ion-icon> Fill OTP sent to mobile and Email </p>
                    <p className="my-2 py-1"><ion-icon name="alert-circle" class="text-[18px]"></ion-icon> Please check the junk/span folder in case you do not get email. </p>

                    <p className="text-blue-600"> Need OTP to be recent? <span className="cursor-pointer hover:underline"> Click here </span></p>

                    <div className="flex justify-end mb-[100px]">
                        <Link to={"/register/new-registration"} ><button className="w-[120px] text-1xl p-2 mx-1 border-2 border-black">BACK</button></Link>
                        <Link to={"/dashboard"} ><button className="w-[120px] bg-blue-900 text-white text-1xl p-2 mx-1 border-2 border-black">PROCEED</button></Link>
                    </div>
                
                </form>
                </div>
            <Footer/>
        </div>
    )
}

export default Otp2;