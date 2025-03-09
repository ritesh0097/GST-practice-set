import Footer from "../../Footer";
import Header from "../../Header";

const Up9 = () => {
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

            <div className="w-full p-4 text-left">

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
                    
                    <button className="bg-blue-900 text-white head-text py-2 px-4 m-2">
                    SEARCH
                </button>
                </div>                
            </div>  
                        
            <div className="mt-8">
                <p className="bg-blue-100 p-4">
                    You have opted for GSTR-1 Quaterly Filling, please select the last month of the Quarter for example - June month for Quarter 1, September month for Quarter 2, December for Quarter 3 and March for Quarter 4.
                </p>
                
                <div className="header-text flex flex-row items-end">
                    <button className="bg-blue-900 text-white px-4 py-2 m-3">EDIT</button>
                    <p className="m-3">Please click here to edit your preference for Return Filing</p>
                </div>
            </div>         
            
            </div>
            

            <div className="bg-slate-100 mt-12 flex flex-wrap justify-between">
                
                <div className="bg-white w-[250px] h-[180px] m-4 text-center">
                    <div className="bg-blue-900 text-white px-4 py-2 mb-2"> <h1 className="header-text">Details of outwards supplies of goods or services</h1> <span>GSTR1</span> </div>
                    <span> Due Date - 11/08/2020 </span>

                    <button className="bg-blue-900 text-white flex justify-between items-center mt-2"> <span className="px-1 py-2">PREPARE ONLINE</span> <span className="px-1 py-2">PREPARE OFFLINE</span> </button>
                </div>
                
                <div className="bg-white w-[250px] h-[180px] m-4 text-center">
                    <div className="bg-blue-900 text-white px-4 py-2 mb-4"> <h1 className="header-text">Auto Drafted details (For view only)</h1> <span>GSTR1A</span> </div>

                    <div className="w-full flex justify-evenly"> <button className="bg-blue-900 text-white px-4 py-2">VIEW</button> <button className="bg-blue-900 text-white px-4 py-2">DOWNLOAD</button> </div>
                </div>
                
                <div className="bg-white w-[250px] h-[180px] m-4 text-center">
                    <h1 className="header-text bg-blue-900 text-white px-4 py-2 mb-2"> Details of outwards supplies of goods or services <span>GSTR3B</span> </h1>
                    <span> Due Date - 27/09/2020 </span>

                    <button className="bg-blue-900 text-white flex justify-between items-center mt-2"> <span className="px-1 py-2">PREPARE ONLINE</span> <span className="px-1 py-2">PREPARE OFFLINE</span> </button>
                </div>

                <div className="bg-white w-[250px] h-[180px] m-4 text-center">
                    <h1 className="header-text bg-blue-900 text-white px-4 py-2 mb-4"> Comparison of liability declared and ITC claimed </h1>

                    <button className="bg-blue-900 text-white px-4 py-2"> VIEW </button>
                </div>


            </div>

            
            
            </div> 

            

            
            <Footer/>
        </div>
    )
}

export default Up9;