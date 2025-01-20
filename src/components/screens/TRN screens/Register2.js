import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import { useState } from "react";


const Register2 = () => {

    let navigate = useNavigate();

    let [trn, setTrn] = useState("")
    let [char, setChar] = useState("")    

    function submit(e) {
        e.preventDefault();
        
        setTrn("")
        setTrn("")
        
        navigate('/register/temporary-reference-number/otp');
    }

    return(
        <div>
            <Header/>        

            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon> Registration</p>

            <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                <div className="w-[250px] my-2 m-auto mb-8 ">
                    <div className="w-[70%] text-white m-auto py-1 flex justify-between items-center">
                        <div className="bg-orange-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">1</div>
                        <div className="bg-gray-400 w-[96px] h-[3px]"></div>
                        <div className="bg-gray-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">2</div>
                    </div>
                    
                    <div className="m-auto flex justify-between">
                        <h1 className="text-orange-400">User Credentials</h1>
                        <h1 className="">OTP Verification</h1>
                    </div>
                </div>

                <h1 className="header-text font-bold"> New Registration </h1>
                <hr/>
                <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                
                <ul className="header-text flex flex-col lg:flex-row mb-4">
                    <label className="cursor-pointer"><Link to={"/register/new-registration"}><input type="radio" name={"registation-type"} className="m-2" /> New Registration</Link></label>
                    <label className="cursor-pointer"><Link to={"/register/temporary-reference-number"}><input type="radio" name={"registation-type"} className="m-2 lg:ml-4" checked/> Temporary Reference Number (TRN)</Link></label>
                </ul>

                <label htmlFor="trn" className="header-text py-1 mt-2">Temporary Reference Number (TRN) <span className="text-red-600">*</span></label>
                <input type="text" id="trn" placeholder="Enter Temporary Reference Number (TRN)" value={trn} onChange={(e) => setTrn(e.target.value)} className="my-1 p-2 border border-black" />
                
                <label htmlFor="char" className="header-text py-1 mt-2">Type the characters you see in the image below <span className="text-red-600">*</span></label>
                <input type="text" id="char" value={char} onChange={(e) => setChar(e.target.value)} placeholder="Enter characters as displayed in the CAPTCHA image" className="my-1 p-2 border border-black" />
                
                <button type="submit" onClick={submit} className="bg-blue-900 text-white header-text text-center py-2 my-4 mt-8"> PROCEED </button>
                
            </form>

            </div> 
            
            <Footer/>

            
        </div>
    )
}


export default Register2;