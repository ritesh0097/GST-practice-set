import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up5 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span></p>

            <div className="w-full p-4 text-left mb-[20%]">

            <h1 className="header-text font-bold"> Payments Quick Links </h1>
            <ol className="list-disc px-8 py-2">
                <li className="text-blue-600 hover:underline"><Link to={"/up6"}> Create Challan </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Saved Challan </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Challan History </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Grievance against Payments(GST PMT-07) </Link></li>                
            </ol>


            </div>
            
            </div> 
            <Footer/>
        </div>
    )
}

export default Up5;