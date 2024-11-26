import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="bg-blue-950 py-8 flex justify-around items-center">

            <div className="flex justify-start">
                <img src="//static.gst.gov.in/uiassets/images/Emblem_of_India-white.svg" alt="" width={"40px"}/>
                
                <div className="w-[500px] text-white flex flex-col items-start justify-center pl-4">
                    <h1 className="font-bold text-3xl">Goods and Services Tax</h1>
                    <p className="text-xl">Government of India, States and Union Territories</p>
                </div>

            </div>

            <div className="flex ">
                <NavLink to={"/register/new-registration"} className="bg-slate-100 text-blue-900 font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">REGISTER</NavLink>
                <NavLink to={"/login"} className="bg-slate-100 text-blue-900 font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">LOGIN</NavLink>
            </div>            
        </div>
    )
}

export default Header;