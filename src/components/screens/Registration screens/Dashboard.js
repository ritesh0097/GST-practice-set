import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            
            <div className="bg-white w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 flex flex-col items-start">
                <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600"> Dashboard </span></p>

                <h1 className="text-2xl p-2"> My Saved Applications </h1>

                <table className="m-auto my-2">
                    <body>
                        <tr className="">
                            <td className="w-[1%] px-8 py-2 border border-black">Creation Date</td>
                            <td className="w-[1%] px-8 py-2 border border-black">Form No.</td>
                            <td className="w-[1%] px-8 py-2 border border-black">form Description</td>
                            <td className="w-[1%] px-8 py-2 border border-black">Expiry Date</td>
                            <td className="w-[1%] px-8 py-2 border border-black">Status</td>
                            <td className="w-[1%] px-8 py-2 border border-black">Action</td>
                        </tr>
                        <tr>
                            <td className="py-2 border border-black">08/07/2022</td>
                            <td className="py-2 border border-black">GST REG-01</td>
                            <td className="py-2 border border-black">Application for New Registration</td>
                            <td className="py-2 border border-black">23/07/2022</td>
                            <td className="py-2 border border-black">Draft <span className="text-blue-600"><ion-icon name="alert-circle" class="text-[18px]"></ion-icon></span></td>
                            <td className="py-2 border border-black"><span className="text-blue-800 text-[25px] cursor-pointer"><Link to={"/step1"}><ion-icon name="create"></ion-icon></Link></span></td>
                        </tr>
                    
                    </body>
                
                </table>



                <div className="text-left p-2 mb-[300px]">
                    <h1 className="text-2xl">Track Application Status</h1>
                    <p className="text-1xl p-1">You do not have any submitted applications</p>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Dashboard;