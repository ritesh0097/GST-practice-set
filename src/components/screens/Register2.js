import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";

const Register2 = () => {
    return(
        <div>
            <Header/>
            <Nav/>

            <div className="bg-white w-[60%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon> Registration</p>

            <form className="w-[60%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                <div className="w-[250px] text-1xl my-2 m-auto mb-8 ">
                    <div className="w-[70%] text-white m-auto py-1 flex justify-between items-center">
                        <div className="bg-orange-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">1</div>
                        <div className="bg-gray-400 w-[96px] h-[3px]"></div>
                        <div className="bg-gray-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">2</div>
                    </div>
                    
                    <div className="m-auto flex justify-between">
                        <h1 className="text-[14px] text-orange-400">User Credentials</h1>
                        <h1 className="text-[14px]">OTP Verification</h1>
                    </div>
                </div>

                <h1 className="text-xl font-bold"> New Registration </h1>
                <hr/>
                <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                
                <ul className="flex my-4">
                    <label className="cursor-pointer"><NavLink to={"/register/new-registration"}><input type="radio" name={"registation-type"} className="m-2" /> New Registration</NavLink></label>
                    <label className="cursor-pointer"><NavLink to={"/register/temporary-reference-number"}><input type="radio" name={"registation-type"} className="m-2 ml-12" checked/> Temporary Reference Number (TRN)</NavLink></label>
                </ul>

                <label htmlFor="panNumber" className="py-1 mt-2">Temporary Reference Number (TRN) <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" placeholder="Enter Temporary Reference Number (TRN)" required className="my-1 p-2 border border-black" />
                
                <label htmlFor="panNumber" className="py-1 mt-2">Type the characters you see in the image below <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" placeholder="Enter characters as displayed in the CAPTCHA image" required className="my-1 p-2 border border-black" />

                
                <button type="submit" className="bg-blue-900 text-white py-2 my-4 mt-8"> PROCEED </button>
                
            </form>

            </div> 
            
            <Footer/>

            
        </div>
    )
}


export default Register2;