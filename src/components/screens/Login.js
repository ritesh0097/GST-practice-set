import { NavLink } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

const Login = () => {

    function submit(e) {
        e.preventDefault();
    }

    return(
        <div className="">
            <Header/>
            <Nav/>

            <div className="bg-white w-[60%] m-auto my-1 flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> <ion-icon name="chevron-forward-outline"></ion-icon> Login</p>

            <form className="w-[60%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                <h1 className="text-xl font-bold my-2 py-1"> Login </h1>
                <hr/>
                <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>

                <label htmlFor="username" className="py-1 mt-2">Username <span className="text-red-600">*</span></label>
                <input type="text" id="username" placeholder="Enter Username" required className="my-1 p-2 border border-black"/>
                
                <label htmlFor="Password" className="py-1 mt-2">Password <span className="text-red-600">*</span></label>
                <input type="text" id="password" placeholder="Enter Password" required className="my-1 p-2 border border-black" />

                <button type="submit" onClick={submit} className="bg-blue-900 w-[120px] text-white py-2 my-2"> LOGIN </button>

                <div className="my-2 py-1 flex justify-between">
                    <NavLink to={"forgot"} className={"text-sky-800"}>Forgot Username</NavLink>
                    <NavLink to={"forgot"} className={"text-sky-800"}>Forgot Password</NavLink>
                </div>

                <p className="my-4 mb-[8%]">
                    <b><ion-icon name="alert-circle" class="text-[18px]"></ion-icon> First time Login:</b> If you are loggin in for the first time, click <NavLink to={"/login"} className={"text-sky-800 underline"}>here</NavLink> to log in.
                </p>
            </form>

            </div> 

            <Footer/>
        </div>
    )
}


export default Login;