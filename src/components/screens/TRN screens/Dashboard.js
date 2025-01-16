import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            
            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600"> Dashboard </span></p>

                <h1 className="text-2xl p-2"> My Saved Applications </h1>

                <div className="w-[90%] m-auto my-2 border border-black">
                        <div className="flex">
                            <div className="w-[16%] px-8 py-2 border border-black">Creation Date</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Form No.</div>
                            <div className="w-[16%] px-8 py-2 border border-black">form Description</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Expiry Date</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Status</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Action</div>
                        </div>
                        <div className="flex">
                            <div className="w-[16%] py-2 border border-black">08/07/2022</div>
                            <div className="w-[16%] py-2 border border-black">GST REG-01</div>
                            <div className="w-[16%] py-2 border border-black">Application for New Registration</div>
                            <div className="w-[16%] py-2 border border-black">23/07/2022</div>
                            <div className="w-[16%] py-2 border border-black">Draft <span className="text-blue-600"><ion-icon name="alert-circle" class="text-[18px]"></ion-icon></span></div>
                            <div className="w-[20%] py-2 border border-black"><span className="text-blue-800 text-[25px] cursor-pointer"><Link to={"/business details"}><ion-icon name="create"></ion-icon></Link></span></div>
                        </div>                    
                </div>

                <div className="text-left p-2 mt-8 mb-[300px]">
                    <h1 className="text-2xl">Track Application Status</h1>
                    <p className="text-1xl p-1">You do not have any submitted applications</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Dashboard;