import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import { useState } from "react";

const Otp = () => {

    let navigate = useNavigate();

    let [mobotp, setMobotp] = useState("")
    let [emailotp, setEmailotp] = useState("")

    function submit(e) {
        e.preventDefault();

        setMobotp("")
        setEmailotp("")
        
        navigate('/register/new-registration/verification-otp/msg-page');
    }

    return(
        <div>
            <Header/>
                <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 text flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <span className="text-blue-600"> Registration </span> Verify</p>
                    
                <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                    <div className="w-[250px] my-2 m-auto mb-8 ">
                        <div className="w-[70%] text-white m-auto py-1 flex justify-between items-center">
                            <div className="bg-green-600 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">1</div>
                            <div className="bg-gray-400 w-[96px] h-[3px]"></div>
                            <div className="bg-orange-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">2</div>
                        </div>

                        <div className="m-auto flex justify-between">
                            <h1 className="text-green-600">User Credentials</h1>
                            <h1 className="text-orange-400">OTP Verification</h1>
                        </div>
                    </div>

                    <h1 className="header-text font-bold"> New Registration </h1>
                    <hr/>
                    <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>

                    <label htmlFor="mobileOTP" className="header-text py-1 mt-2"> Mobile OTP <span className="text-red-600">*</span></label>
                    <input type="text" id="mobileOTP" value={mobotp} onChange={(e) => setMobotp(e.target.value)} placeholder="Enter Mobile OTP" className="my-1 p-2 border border-black"/>
                    <p> Enter OTP sent to your mobile number </p>

                    <label htmlFor="emailOTP" className="header-text py-1 mt-2"> Email OTP <span className="text-red-600">*</span></label>
                    <input type="text" id="emailOTP" value={emailotp} onChange={(e) => setEmailotp(e.target.value)} placeholder="Enter Email OTP" className="my-1 p-2 border border-black" />
                    <p> Enter OTP sent to your Email Address </p>
                    
                    <p className="my-2 py-1"> Please check the junk/span folder in case you do not get email. </p>

                    <p className="text-blue-600"> Need OTP to be recent? <span className="cursor-pointer hover:underline"> Click here </span></p>

                    <div className="flex justify-end">
                        <Link to={"/register/new-registration"}><button className="w-[120px] p-2 mx-1 header-text border-2 border-black">BACK</button></Link>

                        <button type="submit" onClick={submit} className="w-[120px] bg-blue-900 text-white header-text p-2 mx-1 border-2 border-black">PROCEED</button>
                    </div>
                
                </form>
                </div>
            <Footer/>
        </div>
    )
}

export default Otp;