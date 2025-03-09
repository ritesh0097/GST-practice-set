import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up8 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span></p>

            <div className="marquee-container">
                <div className="marquee-text">
                    Nill return for GSTR-3B & GSTR-1 can now be filed through SMS.
                </div>
            </div>

            <div className="w-full p-4 text-left mb-[20%]">

            <h1 className="header-text font-bold"> File Returns </h1><hr/>
            <p className="text-right mb-4"><span className="text-red-600">*</span> Indicates Mandatory Fields</p>
            
            <div className="mt-2 flex justify-start items-center">
                <div className="mx-4">
                    <label htmlFor="tradeName" className="header-text py-1">Financial year <span className="text-red-600">*</span></label><br/>
                    <select className="w-[250px] my-1 p-2 border border-black">
                        <option>Select</option>
                        <option> 2024-25 </option>
                        <option> 2023-24 </option>
                        <option> 2022-23 </option>
                        <option> 2021-22 </option>
                        <option> 2020-21 </option>
                        <option> 2019-20 </option>
                        <option> 2018-19 </option>
                        <option> 2017-18 </option>
                        <option> 2016-17 </option>
                        <option> 2015-16 </option>
                        <option> 2014-15 </option>                        
                    </select>
                </div>                        
                <div>
                    <label htmlFor="panNumber" className="header-text py-1">Return Filing Period <span className="text-red-600">*</span></label><br/>
                    <select className="w-[250px] my-1 p-2 border border-black">
                        <option>Select</option>
                        <option> January </option>
                        <option> February </option>
                        <option> March </option>
                        <option> April </option>
                        <option> May </option>
                        <option> June </option>
                        <option> July </option>
                        <option> August </option>
                        <option> September </option>
                        <option> October </option>
                        <option> November </option>
                        <option> December </option>                                
                    </select>
                    
                    <Link to={"/up9"}><button className="bg-blue-900 text-white head-text py-2 px-4 m-2">SEARCH</button></Link>
                </div>

                
            </div>
            </div>
            
            </div> 
            <Footer/>
        </div>
    )
}

export default Up8;