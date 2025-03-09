import { NavLink } from "react-router-dom";

const Bank = () => {
    return(
        <div className="bg-white text-blue-600">


            <h1 className="text-2xl my-2 mt-12 font-bold"> Welcome to <span></span> Bank </h1>
            <h2 className="text-xl my-2"> GSTN Payment Gateway </h2>

            <p> Retail Users (Pay using Netbanking) <span className="underline">Click here</span> </p>
            <p className="mb-12"> Corporate Users (Pay using ENET) <span className="underline">Click here</span> </p>



            <NavLink to={"/up2"} className={"underline"}> Go Back to Dashboard </NavLink>

        </div>
    )
}

export default Bank;