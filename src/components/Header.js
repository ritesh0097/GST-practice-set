import { NavLink } from "react-router-dom";
import Navs from "./Navs";
import SideNav from "./SideNav";
import BlankDiv from "./BlankDiv";

const Header = () => {

    function menu() {
        document.getElementById("sidenav").classList.toggle("hidden")
        document.getElementById("blankDiv").classList.toggle("hidden")
        document.getElementById("menu").classList.toggle("hidden")
        document.getElementById("close").classList.toggle("hidden")
    }

    return(
        <>
            <div className="bg-blue-950 py-6 lg:py-8 flex justify-around items-center">
        
                <div className="ml-2 lg:ml-[8%] xl:ml-[10%] flex items-center">                    
                    <img src="https://github.com/ritesh0097/GST-practice-set/blob/main/public/Aasraa-logo.jpg?raw=true" alt="aasraa-logo" className="w-[120px] lg:w-[150px] xl:w-[180px]"/>
                    
                    <div className="w-[220px] lg:w-[400px] text-white flex flex-col items-start justify-center pl-4">
                        <h1 className="font-bold text-1xl lg:text-3xl">GST Practice Set</h1>
                        <p className="text-[8px] lg:text-[14px]">Aasraa Skillability Center</p>
                    </div>
        
                </div>
        
                <div className="ml-[5%] hidden lg:flex">
                    <NavLink to={"/register/new-registration"} className="bg-slate-100 text-blue-900 lg:text-[12px] xl:text-[14px] font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">REGISTER</NavLink>
                    <NavLink to={"/login"} className="bg-slate-100 text-blue-900 lg:text-[12px] xl:text-[14px] font-bold px-3 py-2 m-2 rounded-[5px] hover:bg-slate-500 hover:text-white">LOGIN</NavLink>
                </div>
        
                <div className="mr-2">
                    <ion-icon name="menu" id="menu" onClick={menu} class="text-white text-4xl cursor-pointer lg:hidden"></ion-icon>
                    <ion-icon name="close" id="close" onClick={menu} class="text-white text-4xl cursor-pointer hidden lg:hidden"></ion-icon>
                </div>
        
            </div>
                                
            <Navs/>
            <SideNav/>
            <BlankDiv/>
        </>
    )
}

export default Header;