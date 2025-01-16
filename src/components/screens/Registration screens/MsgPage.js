import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const MsgPage = () => {
    return (
        <div>
            <Header/>
            
            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon>  <span className="text-blue-600"> Registration </span> <ion-icon name="chevron-forward-outline"></ion-icon> Verify</p>

                <div className=" bg-green-100 text-green-800 text-left p-4 m-2">
                    You have successfully submitted Part A of the registration process. Your Temporary Reference Number (TRN) is 0123245235TRN.
                </div>

                <div className="m-2 text-left p-4">
                    Using this TRN you can access the application from My saved Applications and Submit on GST Portal. Part B of the application from needs to be completed within 15 days, i.e. by '23/07/2002' using this TRN.
                </div>

                <div className="w-full flex justify-end mb-[300px]">
                    <Link to={"/register/temporary-reference-number"} ><button className="w-[120px] bg-blue-900 text-white text-1xl p-2 mx-1 border-2 border-black">PROCEED</button></Link>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default MsgPage;