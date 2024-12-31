import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";


const Register = () => {
    return(
        <div>
            <Header/>    

            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon> Registration</p>

            <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

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
                
                <ul className="flex flex-col lg:flex-row mb-4">
                    <label className="cursor-pointer"><Link to={"/register/new-registration"}><input type="radio" name={"registation-type"} className="m-2" checked/> New Registration</Link></label>
                    <label className="cursor-pointer"><Link to={"/register/temporary-reference-number"}><input type="radio" name={"registation-type"} className="m-2 lg:ml-4" /> Temporary Reference Number (TRN)</Link></label>
                </ul>

                <label htmlFor="businessName" className="py-1 mt-2">I am a <span className="text-red-600">*</span></label>
                <select className="my-1 p-2 border border-black">
                    <option>Select</option>
                    <option>Taxpayer</option>
                    <option>Tax Deductor</option>
                    <option>Tax Collector (e-commerce)</option>
                    <option>GST Practitioner</option>
                    <option>Non Resident Taxable Person</option>
                    <option>United Nation Body</option>
                    <option>Consulate or Embassy of Foreign Country</option>
                    <option>Other Notified Person</option>
                    <option>Non-Resident Online Services Provider and/or Non-Resident Online Money Gaming Supplier</option>
                </select>
                
                <label htmlFor="businessName" className="py-1 mt-2">State / UT <span className="text-red-600">*</span></label>
                <select className="my-1 p-2 border border-black">
                    <option>Select</option>
                    <option>Andaman and Nicobar Islands</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chandigarh</option>
                    <option>Chhattisgarh</option>
                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu and Kashmir</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Ladakh</option>
                    <option>Lakshadweep</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Other Teritory</option>
                    <option>Puducherry</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telengana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>                    
                </select>
                
                <label htmlFor="businessName" className="py-1 mt-2">District </label>
                <select className="my-1 p-2 border border-black">
                    <option>Select</option>                    
                </select>

                <label htmlFor="businessName" className="py-1 mt-2">Legal Name of the Business (As mentioned in PAN) <span className="text-red-600">*</span></label>
                <input type="text" id="businessName" placeholder="Enter Legal Name of Business" required className="my-1 p-2 border border-black"/>
                
                <label htmlFor="panNumber" className="py-1 mt-2">Permanent Account Number (PAN) <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" placeholder="Enter Permanent Account Number (PAN)" required className="my-1 p-2 border border-black" />
                
                <label htmlFor="email" className="py-1 mt-2">Email Address <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" placeholder="Enter Email Adress" required className="my-1 p-2 border border-black" />
                <p><ion-icon name="alert-circle" class="text-[18px]"></ion-icon> OTP will be sent to this Email Address</p>

                <label htmlFor="email" className="py-1 mt-2">Mobile Number <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" placeholder="Enter Mobile Number" required className="my-1 p-2 border border-black" />
                <p><ion-icon name="alert-circle" class="text-[18px]"></ion-icon> Separate OTP will be sent to this mobile number</p>

                <Link to={"verification-otp"} className="bg-blue-900 text-white text-center py-2 my-4 mt-8"><button type="submit"> PROCEED </button></Link>
                
            </form>

            </div> 
            
            <Footer/>
            
        </div>
    )
}


export default Register;