import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {

    
    const currentDate = new Date();
    const cyear = currentDate.getFullYear(); // Gets the year (e.g., 2025)
    const cmonth = currentDate.getMonth() + 1; // Gets the month (0-11, so add 1)
    const cday = currentDate.getDate(); // Gets the day of the month
    
    const finalDate = new Date();
    finalDate.setDate(currentDate.getDate() + 15);
    const fyear = finalDate.getFullYear();
    const fmonth = finalDate.getMonth() + 1;
    const fday = finalDate.getDate();
    
        

    return (
        <div>
            <Header/>
            
            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto my-1 text flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600"> Dashboard </span></p>

                <h1 className="header-text p-2"> My Saved Applications </h1>

                <div className="w-[90%] m-auto my-2 border border-black">
                        <div className="flex">
                            <div className="w-[16%] px-8 py-2 border border-black">Creation Date</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Form No.</div>
                            <div className="w-[20%] px-8 py-2 border border-black">form Description</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Expiry Date</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Status</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Action</div>
                        </div>
                        <div className="flex">
                            <div className="w-[16%] px-8 py-2 border border-black">{cday}/{cmonth}/{cyear}</div>
                            <div className="w-[16%] px-8 py-2 border border-black">GST REG-01</div>
                            <div className="w-[20%] px-8 py-2 border border-black">Application for New Registration</div>
                            <div className="w-[16%] px-8 py-2 border border-black">{fday}/{fmonth}/{fyear}</div>
                            <div className="w-[16%] px-8 py-2 border border-black">Draft <span className="text-blue-600"><ion-icon name="alert-circle" class=""></ion-icon></span></div>
                            <div className="w-[16%] px-8 py-2 border border-black"><Link to={"/business details"}><img src="icons/edit.png" alt="edit" className="w-[20px] h-[20px]"/></Link></div>
                        </div>
                </div>

                <div className="text-left p-2 mt-8 mb-[300px]">
                    <h1 className="header-text">Track Application Status</h1>
                    <p className="p-1">You do not have any submitted applications</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Dashboard;