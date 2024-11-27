import { NavLink } from "react-router-dom";

const Header = () => {

    function menu() {
        document.getElementById("nav").classList.toggle("hidden")
    }

    return(
        <div className="bg-blue-950 py-6 lg:py-8 flex justify-around items-center">

            <div className="lg:ml-[8%] xl:ml-[10%] flex items-center">
                <img src="Aasraa-logo.jpg" alt="aasraa-logo" className="w-[120px]"/>
                
                <div className="w-[220px] lg:w-[400px] text-white flex flex-col items-start justify-center pl-4">
                    <h1 className="font-bold text-1xl lg:text-3xl">GST Practice Set</h1>
                    <p className="text-[8px] lg:text-[14px]">Aasraa Skillability Center</p>
                </div>

            </div>

            <div className="ml-[5%] hidden lg:flex">
                <NavLink to={"/register/new-registration"} className="bg-slate-100 text-blue-900 lg:text-[12px] xl:text-[14px] font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">REGISTER</NavLink>
                <NavLink to={"/login"} className="bg-slate-100 text-blue-900 lg:text-[12px] xl:text-[14px] font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">LOGIN</NavLink>
            </div>

            <div>
                <ion-icon name="menu" id="menu" onClick={menu} class="text-white text-4xl cursor-pointer lg:hidden"></ion-icon>
            </div>      
        </div>
    )
}

export default Header;