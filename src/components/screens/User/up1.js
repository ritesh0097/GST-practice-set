import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const Up1 = () => {
    return(
        <div>
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Dashboard</span></p>

            <div className="w-full flex justify-between p-4">
                <h1>Last loggin in on <b>12/08/2020</b></h1>
                <h1>Currently logged in from IP: <b>IP Address</b></h1>
            </div>

            <div className="flex justify-around w-full p-2 text-left">

            <div className="w-full p-2 mb-[8%]">

                <h1 className="header-text text-center mt-8"> Welcome User to GST Common Portal </h1>

                <div className="w-[75%] m-auto px-2 p-2 border-2 border-black text-center my-12" >
                    <i> You can navigate to your choosen page through navigate panel given blew </i>
                </div>

                <div>
                    <Link to={"/up2"}><button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> RETURN DASHBOARD <ion-icon name="chevron-forward-outline"></ion-icon> </button></Link>
                    <button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> CREATE CHALLAN <ion-icon name="chevron-forward-outline"></ion-icon> </button>
                    <button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> VIEW NOTES(S) AND ORDER(S) <ion-icon name="chevron-forward-outline"></ion-icon> </button>
                    <button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> ANNUAL RETURN <ion-icon name="chevron-forward-outline"></ion-icon> </button>
                </div>

                <div className="flex justify-end items-center"> <b> Else Go to <ion-icon name="chevron-forward-outline"></ion-icon><ion-icon name="chevron-forward-outline"></ion-icon> </b> <Link to={"/up2"}><button className="bg-blue-900 text-white head-text py-2 px-4 m-2"> CONTINUE TO DASHBOARD <ion-icon name="chevron-forward-outline"></ion-icon> </button></Link></div>

            </div>

            <div className="w-[35%] p-2 header-text">

                <div className="mb-[20%]">
                    <h1 className="font-bold"> Username </h1>
                    <h1 className="font-bold"> User ID </h1>
                    
                    <hr/>

                    <Link to={"#"}> <h1 className="text-blue-600">View Profile <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span></h1> </Link>


                </div>
                
                <div className="">
                    <h1 className="border-b-2 border-blue-600 header-text"> Quick Links</h1>
                    <ol className="text-blue-600 text mt-2">
                        <li>Check Cash Balance</li>
                        <li>Liability Ledger</li>
                        <li>Current Ledger</li>
                    </ol>
                </div>                

            </div>

            </div>

            

            </div> 


            <Footer/>
        </div>
    )
}

export default Up1;