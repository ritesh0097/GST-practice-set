import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up3 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span></p>

            <div className="w-full p-4 text-left mb-[20%]">

            <h1 className="header-text font-bold"> User Services Quick Links </h1>
            <ol className="list-disc px-8 py-2">
                <li className="text-blue-600 hover:underline"><Link> My Saved Applications </Link></li>
                <li className="text-blue-600 hover:underline"><Link> View My Submissions </Link></li>
                <li className="text-blue-600 hover:underline"><Link> View Notices and Orders </Link></li>
                <li className="text-blue-600 hover:underline"><Link to={"/up4"}> View/Download Certificates </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Search HSN / Service Classification Code </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Search Taxpayer Opted In / Out of Composition </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Holiday List </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Feedback </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Locate GST Practitioners (GSTP) </Link></li>
                <li className="text-blue-600 hover:underline"><Link> Engage / Disengage GST Practitioners (GSTP) </Link></li>                
            </ol>


            </div>
            
            </div> 
            <Footer/>
        </div>
    )
}

export default Up3;