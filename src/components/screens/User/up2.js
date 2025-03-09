import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up2 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span></p>

            <div className="flex justify-around w-full p-2 text-left">

            <div className="w-full p-2 mb-[8%]">

                <div className="header-text font-bold flex mb-3"> <h1 className=""> Ledger Balance |</h1><p>12/08/2020</p> </div>
                <h1 className="">Download <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span></h1>
                <hr/>

                <table>
                    <thead>

                    <tr className="bg-slate-300">
                        <th>  </th>
                        <th className="px-6 py-4"> IGST (₹) </th>
                        <th className="px-6 py-4"> CGST (₹) </th>
                        <th className="px-6 py-4"> SGST (₹) </th>
                        <th className="px-6 py-4"> CESS (₹) </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className="px-6 py-4 font-bold"> Electronic Liability <br/> Register (Return related) </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                    </tr>

                    <tr className="bg-slate-100">
                        <td className="px-6 py-4 font-bold"> Electronic Cash Ledger </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                    </tr>
                    </tbody>                    
                    
                    <tfoot>
                    <tr>
                        <td className="px-6 py-4 font-bold"> Electronic Credit Ledger </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                        <td className="px-6 py-4 text-right"> 0 </td>
                    </tr>
                    </tfoot>

                </table>

                <div className="my-[6%] flex justify-center">
                    <Link to={"/up8"}><button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> FILE RETURNS <ion-icon name="chevron-forward-outline"></ion-icon> </button></Link>
                    <button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> PAY TAX <ion-icon name="chevron-forward-outline"></ion-icon> </button>
                </div>
                <hr/>
                
            </div>

            <div className="w-[35%] p-2 header-text">

                <div className="mb-[20%]">
                    <h1 className="font-bold"> Username </h1>
                    <h1 className="font-bold"> User ID </h1>
                    
                    <hr/>

                    <Link to={"#"}> <h1 className="text-blue-600">View Profile <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span></h1> </Link>


                </div>

                <div>
                    <div className="flex justify-around">
                        <h1 className="border-b-2 border-blue-600"> Notices/orders </h1>
                        <h1> Saved Forms </h1>
                    </div>

                    <h1 className="text p-4"> No Record Found </h1>

                </div>

            </div>

            </div>

            

            </div> 


            <Footer/>
        </div>
    )
}

export default Up2;