import Footer from "../../Footer";
import Header from "../../Header";

const Success = () => {
    return (
        <div>
            <Header/>

            <div className="w-[98%] sm:w-[80%] md:w-[80%] lg:w-[60%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span> &nbsp;&nbsp;&nbsp;&nbsp; Application for New Registration</p>

            <div className="bg-white w-[100%] m-auto mb-[5%] p-4 text-left justify-start">
                <div className="text-[18px]">
                    <h1 className="text-2xl"><span className="text-green-800 text-xl"><ion-icon name="checkmark-circle-sharp"></ion-icon></span> Success</h1>                    
                </div><hr/>
                
                <div className="mt-2 p-4 mb-[300px]">
                    <h1>Thank you for submission</h1>

                    <p className="mt-2">System is verifying / validating the information submitted by you. Acknowledgement (ARN) will be made available at your registred email and mobile No. shortly.</p>
                </div>
            
            </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Success;