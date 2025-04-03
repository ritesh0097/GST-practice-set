import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import { useState } from "react";


const Register = () => {

    let navigate = useNavigate();

    let [businessName,setBusinessName] = useState("")
    let [panNumber,setPanNumber] = useState("")
    let [email,setEmail] = useState("")
    let [mobNumber,setMobNumber] = useState("")

    function submit(e) {
        e.preventDefault();

        setBusinessName("")
        setPanNumber("")
        setEmail("")
        setMobNumber("")
        
        navigate('/register/new-registration/verification-otp');
    }

    
    // fetching states and cities

    /*
    var config = {
        sUrl : 'https://api.countrystatecity.in/v1/states',
        sKey : 'VzNtcXpkdmR5bVZlRjhjaVRtUWM1dGFoWWUxZVJhSWgwUG12MUU2Ug=='
    }

    var selectState = document.querySelector('.state')
    var selectCity = document.querySelector('.city')

    function loadStates(){
        
        let apiEndPoint = config.sUrl

        fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}}).then(response => response.json()).then(data => {

            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.iso2;
                option.textContent = state.name
                selectState.appendChild(option)
            })
        })
    }
    
    function loadCities(){
        const selectedStateCode = selectState.value
        selectCity.innerHTML = '<option value="">Select</option>' // for clearing the existing states

        fetch(`${config.cUrl}/${selectedStateCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}}).then(response => response.json()).then(data => {
    
          data.forEach(city => {
          const option = document.createElement('option');
          option.value = city.iso2;
          option.textContent = city.name
          selectCity.appendChild(option)
        })
    })
    }


    window.onload = loadStates();
    */

    return(
        <div>
            <Header/>

            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span>  Registration</p>

            <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                <div className="w-[250px] my-2 m-auto mb-8 ">
                    <div className="w-[70%] text-white m-auto py-1 flex justify-between items-center">
                        <div className="bg-orange-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">1</div>
                        <div className="bg-gray-400 w-[96px] h-[3px]"></div>
                        <div className="bg-gray-400 w-[40px] h-[40px] font-bold flex justify-center items-center rounded-[50px]">2</div>
                    </div>
                    
                    <div className="m-auto flex justify-between">
                        <h1 className=" text-orange-400">User Credentials</h1>
                        <h1 className="">OTP Verification</h1>
                    </div>
                </div>

                <h1 className="header-text font-bold"> New Registration </h1>
                <hr/>
                <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>
                
                <ul className="header-text flex flex-col lg:flex-row mb-4">
                    <label className="cursor-pointer"><Link to={"/register/new-registration"}><input type="radio" name={"registation-type"} className="m-2" checked/> New Registration</Link></label>
                    <label className="cursor-pointer"><Link to={"/register/temporary-reference-number"}><input type="radio" name={"registation-type"} className="m-2 lg:ml-4" /> Temporary Reference Number (TRN)</Link></label>
                </ul>

                <label htmlFor="businessName" className="header-text py-1 mt-2">I am a <span className="text-red-600">*</span></label>
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
                
                <label htmlFor="businessName" className="header-text py-1 mt-2">State / UT <span className="text-red-600">*</span></label>
                <select className="state my-1 p-2 border border-black" /*onChange={loadCities()}*/>
                    <option>Select</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Maharastra</option>
                    <option>Madhya Pradesh</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Tripura</option>
                    <option>Telangana</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>                    
                </select>
                
                <label htmlFor="businessName" className="header-text py-1 mt-2">District </label>
                <select className="city my-1 p-2 border border-black">
                    <option>Select</option>
                    <option>Almora</option>
                    <option>Bhageshwar</option>
                    <option>Gopeshwar</option>
                    <option>Champawat</option>
                    <option>Dehradun</option>
                    <option>Haridwar</option>
                    <option>Nainital</option>
                    <option>Pauri</option>
                    <option>Pithoragarh</option>
                    <option>Rudrapraya</option>
                    <option>Tehri</option>
                    <option>Rudrapur</option>
                    <option>Uttarkashi</option>                    
                </select>

                <label htmlFor="businessName" className="header-text py-1 mt-2">Legal Name of the Business (As mentioned in PAN) <span className="text-red-600">*</span></label>
                <input type="text" id="businessName" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Enter Legal Name of Business" className="my-1 p-2 border border-black"/>
                
                <label htmlFor="panNumber" className="header-text py-1 mt-2">Permanent Account Number (PAN) <span className="text-red-600">*</span></label>
                <input type="text" id="panNumber" value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder="Enter Permanent Account Number (PAN)" className="my-1 p-2 border border-black" />
                
                <label htmlFor="email" className="header-text py-1 mt-2">Email Address <span className="text-red-600">*</span></label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Adress" className="my-1 p-2 border border-black" />
                <p> OTP will be sent to this Email Address</p>

                <label htmlFor="mobNumber" className="header-text py-1 mt-2">Mobile Number <span className="text-red-600">*</span></label>
                <input type="text" id="mobNumber" value={mobNumber} onChange={(e) => setMobNumber(e.target.value)} placeholder="Enter Mobile Number" className="my-1 p-2 border border-black" />
                <p> Separate OTP will be sent to this mobile number</p>

                <button type="submit" onClick={submit} className="bg-blue-900 text-white header-text text-center py-2 my-4 mt-8"> PROCEED </button>
                
            </form>

            </div> 
            
            <Footer/>
            
        </div>
    )
}


export default Register;