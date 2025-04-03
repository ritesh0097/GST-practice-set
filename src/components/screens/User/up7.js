import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up7 = () => {
    
    function banktoggle(){    
        document.getElementById("netbanking").classList.toggle("hidden");
    }


    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] p-4 m-auto my-1 text flex flex-col items-start">

                <div className="bg-green-200 w-full header-text text-left p-4 pb-1">
                    <h1 className="text-green-900 font-bold"> Challan successfully generated </h1>
                </div>

                <div className="w-full mt-4 text-left">
                    <h1 className="header-text"> GST Challan </h1>

                    <div className="bg-slate-100 w-full p-4 border-t-2 flex justify-around">
                        <div className="">
                            <h1>CPIN</h1>
                            <span className="font-bold">20083600031458</span>
                        </div>
                        <div className="">
                            <h1>Challan Generation Date</h1>
                            <span className="font-bold">12/02/2023</span>
                        </div>
                        <div className="">
                            <h1>Challan Expiry Date</h1>
                            <span className="font-bold">27/08/2023</span>
                        </div>
                    </div>                
                </div>

                <div className="w-full mt-4 pr-4 text-left font-bold flex ">
                    <h1>Mode of Payment :- </h1>
                    <h1 className="ml-12">E-Payment</h1>
                </div>

                <div className="w-full mt-4 text-left">
                    <h1 className="header-text"> Details of Taxpayer </h1>

                    <div className="bg-slate-100 w-full p-4 border-t-2 flex justify-around">
                        <div className="">
                            <h1>GSTIN/Other Id</h1>
                            <span className="font-bold">36BDGPM4598RZ4</span>
                        </div>
                        <div className="">
                            <h1>Email Address</h1>
                            <span className="font-bold">resxxxxxx@gmail.com</span>
                        </div>
                        <div className="">
                            <h1>Mobile Number</h1>
                            <span className="font-bold">9xxxxxx4525</span>
                        </div>
                    </div>                
                </div>

                <div className="w-full mt-4 text-left flex justify-around">
                    
                    <div className="">
                        <h1>Name</h1>
                        <span className="font-bold">Username</span>
                    </div>
                    <div className="">
                        <h1>Email Address</h1>
                        <span className="font-bold">xxxxxxxxxxxxxx, Dehradun, 248008</span>
                    </div>                    
                </div>


                <div className="mt-6">
                    <h1 className="header-text text-left my-4">Details of Deposit</h1>

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
                
                <div className="w-full p-4 mt-8"><hr/>

                    <h1 className="header-text text-left">Select Mode of E-payment <span className="text-red-600 w-[300px]">*</span></h1>

                    <div className="flex">
                        <div className="p-2 mr-12">
                            <button className="bg-gray-200 w-[200px] px-4 py-3 border border-gray-400 flex items-center hover:bg-gray-300 cursor-pointer"> <span className="ml-2">Preferred Banks</span></button>
                            <button onClick={banktoggle} className="bg-gray-200 w-[200px] px-4 py-3 border border-gray-400 flex items-center hover:bg-gray-300 cursor-pointer"> <span className="ml-2">Net Banking</span></button>
                        </div>

                        <div id="netbanking" className="text-left p-4 hidden">
                            <h1 className="mb-4 italic"> Please Select a bank <span className="text-red-600 w-[300px]">*</span></h1>

                            <div className="flex">
                                <ul className="">
                                    <li><input type="radio" name="bank"/> State Bank of India </li>
                                    <li><input type="radio" name="bank"/> HDFC Bank </li>
                                    <li><input type="radio" name="bank"/> Punjab National Bank </li>
                                    <li><input type="radio" name="bank"/> ICICI Bank </li>
                                    <li><input type="radio" name="bank"/> Union Bank of India </li>
                                </ul>

                                <ul className="ml-12">
                                    <li><input type="radio" name="bank"/> Kotak Mahindra Bank </li>
                                    <li><input type="radio" name="bank"/> Axis Bank </li>
                                    <li><input type="radio" name="bank"/> Indusind Bank </li>
                                    <li><input type="radio" name="bank"/> Yes Bank </li>
                                    <li><input type="radio" name="bank"/> Bank of Baroda </li>
                                </ul>
                            </div>

                            <p className="my-12 underline text-blue-600"><input type="checkbox"/> Term and Conditions apply</p>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-12 flex justify-end items-center mb-[15%]">
                    <div className="px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-slate-400">DOWNLOAD</div>
                    <Link to={"/bank"}><div className="bg-blue-900 text-white px-8 py-2 mx-2 font-bold border border-black flex items-center cursor-pointer hover:bg-blue-500">MAKE PAYMENT</div></Link>
                
                </div>
                



            </div>

            <Footer/>
        </div>
    )
}

export default Up7;