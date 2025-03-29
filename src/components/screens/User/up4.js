import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up4 = () => {

    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <Link to={"/up2"}><span className="text-blue-600">Dashboard</span></Link></p>

            <div className="w-full p-4 text-left mb-[20%]">

            <h1 className="header-text font-bold"> Vew/Download Certificates </h1>

            <table className="">
                <thead>
                    <tr>
                    <th className="p-4 border-2">Form No.</th>
                    <th className="p-4 border-2">Form Description</th>
                    <th className="p-4 border-2">Date of Issue</th>
                    <th className="p-4 border-2">Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 border-2">GST REG-05</td>
                        <td className="p-4 border-2">Registration Certificate</td>
                        <td className="p-4 border-2"> 27/10/2018 </td>
                        <td className="p-4 border-2 cursor-pointer hover:bg-slate-100"> <a href="GST REG-06 Certificate.pdf" download="GST REG-06 Certificate.pdf" className="text-2xl"><img src="icons/download.png" alt="download button" width={"30"}/></a></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-2">GSTR7A</td>
                        <td className="p-4 border-2">TDS Certificate</td>
                        <td className="p-4 border-2 bg-gray-300" colSpan={2}></td>                                          
                    </tr>
                </tbody>
            </table>

            </div>
            
            </div> 
            <Footer/>
        </div>
    )
}

export default Up4;