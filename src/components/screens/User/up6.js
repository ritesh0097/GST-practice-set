import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up6 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">

                <div className="w-full header-text p-4 pb-1 flex justify-evenly">
                    <h1 className="border-b-2 border-purple-600">Create Challan</h1>
                    <h1>Saved Challan</h1>
                    <h1>Challan History</h1>
                </div>

                <div className="mt-6 p-4">
                    <h1 className="header-text text-left font-bold my-4">Tax Liability</h1>

                    <table border={1} className="w-full">
                        <thead>
                            <th className="border px-4 py-2"></th>
                            <th className="border px-4 py-2">Tax (₹)</th>
                            <th className="border px-4 py-2">Interest (₹)</th>
                            <th className="border px-4 py-2">Penalty (₹)</th>
                            <th className="border px-4 py-2">Fees (₹)</th>
                            <th className="border px-4 py-2">Other (₹)</th>
                            <th className="border px-4 py-2">Total (₹)</th>                            
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">CGST(0005)</td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">IGST(0008)</td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">CESS(0009)</td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">Telengana SGST(0006)</td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                                <td className="border p-1"><input type="text" className="w-[60px] p-1"/></td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">Total Challan Amount: </td>
                                <td colSpan={"6"} className="border px-4 py-2 font-bold text-left"> ₹ 0 </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-left font-bold">Total Challan Amount (In Words): </td>
                                <td colSpan={"6"} className="border px-4 py-2"> </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="p-4">
                    <h1 className="header-text text-left">Payment Modes <span className="text-red-600 w-[300px]">*</span></h1>

                    <div className="p-2">
                        <button className="bg-gray-200 w-[200px] px-4 py-3 border border-gray-400 flex items-center hover:bg-gray-300 cursor-pointer"><ion-icon name="card-outline"></ion-icon> <span className="ml-2">E-Payment</span></button>
                        <button className="bg-gray-200 w-[200px] px-4 py-3 border border-gray-400 flex items-center hover:bg-gray-300 cursor-pointer"><ion-icon name="cash-outline"></ion-icon> <span className="ml-2">Over The Counter</span></button>
                        <button className="bg-gray-200 w-[200px] px-4 py-3 border border-gray-400 flex items-center hover:bg-gray-300 cursor-pointer"><ion-icon name="earth"></ion-icon> <span className="ml-2">NEFT/RTGS</span></button>
                    </div>
                    
                </div>
                <div className="w-full mt-12 flex justify-end items-center mb-[15%]">
                    <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">SAVE</div>
                    <Link to="/up7"><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">GENERATE CHALLAN</div></Link>
                
                </div>
                



            </div>

            <Footer/>
        </div>
    )
}

export default Up6;