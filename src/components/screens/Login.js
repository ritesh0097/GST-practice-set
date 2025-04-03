import { NavLink, Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

const Login = () => {
    
    let navigate = useNavigate();

    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    function submit(e) {
        e.preventDefault();

        setUsername("")
        setPassword("")
        
        // navigate('/');
        navigate('/up1');

        localStorage.setItem("login",true)
    }


    return(
        <div className="">
            <Header/>

            <div className="bg-white w-[96%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] m-auto my-1 text flex flex-col items-start">
            <p className="bg-slate-100 w-full p-2 text-left"> <span className="text-blue-600">Home</span> Login</p>

            <form className="w-[90%] m-auto mb-[5%] py-4 flex flex-col text-left justify-start">

                <h1 className="header-text font-bold my-2 py-1"> Login </h1>
                <hr/>
                <span className="text-right my-2 py-1"><span className="text-red-600">*</span> indicates mandatory fields</span>

                <label htmlFor="username" className="header-text py-1 mt-2">Username <span className="text-red-600">*</span></label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" className="my-1 p-2 border border-black"/>
                
                <label htmlFor="Password" className="header-text py-1 mt-2">Password <span className="text-red-600">*</span></label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="my-1 p-2 border border-black" />

                <button type="submit" onClick={submit} className="bg-blue-900 w-[120px] text-white py-2 my-2"> LOGIN </button>

                <div className="my-2 py-1 flex justify-between">
                    <NavLink to={"forgot"} className={"text-sky-800"}>Forgot Username</NavLink>
                    <NavLink to={"forgot"} className={"text-sky-800"}>Forgot Password</NavLink>
                </div>

                <p className="my-4 mb-[8%]">
                    <b> First time Login:</b> If you are loggin in for the first time, click <Link to={"/register/new-registration"} className={"text-sky-800 underline"}>here</Link> to log in.
                </p>
            </form>

            </div> 

            <Footer/>
        </div>
    )
}


export default Login;