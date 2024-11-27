import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <div className="steal-blue2 text-white text-[6px] sm:text-[8px] lg:text-[10px] xl:text-[14px] py-8 flex flex-col justify-around items-center">

            <div className="w-[98%] sm:w-[94%] lg:w-[80%] 2xl:w-[70%] mb-4 text-left flex justify-between leading-4 xl:leading-6">
                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">About GST</h1>
                    <ul>
                        <li className="hover:underline cursor-pointer"> GST Council Structure </li>
                        <li className="hover:underline cursor-pointer"> GST History </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Website Policies</h1>
                    <ul>
                        <li className="hover:underline cursor-pointer"> Website Policy </li>
                        <li className="hover:underline cursor-pointer"> Terms and Conditions </li>
                        <li className="hover:underline cursor-pointer"> Hyperlink Policy </li>
                        <li className="hover:underline cursor-pointer"> Disclaimer </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Related Sites</h1>
                    <ul>                        
                        <li className="hover:underline cursor-pointer"> State Tax Website </li>
                        <li className="hover:underline cursor-pointer"> National Portal </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Help and Taxpayer Facilities</h1>
                    <ul>
                        <li className="hover:underline cursor-pointer"> GST Knowledge Portal </li>
                        <li className="hover:underline cursor-pointer"> GST Media </li>
                        <li className="hover:underline cursor-pointer"> Site Map </li>                        
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Follow Us</h1>                    
                    <ul className="w-[60px] 2xl:w-[100px] text-[10px] 2xl:text-[18px] flex justify-between">
                        <li className="cursor-pointer"><ion-icon name="logo-facebook"></ion-icon></li>
                        <li className="cursor-pointer"><ion-icon name="logo-youtube"></ion-icon></li>
                        <li className="cursor-pointer"><ion-icon name="logo-twitter"></ion-icon></li>
                        <li className="cursor-pointer"><ion-icon name="logo-linkedin"></ion-icon></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center">
                <img src="https://github.com/ritesh0097/GST-practice-set/blob/main/public/Aasraa-banner.png?raw=true" alt="aasraa-banner" className="w-[100%] xl:w-[80%] 2xl:w-[60%] my-4"/>
            </div>
            <hr className="bg-white w-full border-none h-[1px]" />
            <div className="w-[100%] xl:w-[80%] 2xl:w-[60%] my-4 flex justify-around">
                <p>Design and Developed by Ritesh Kumar</p>
                <p className="underline">Ritesh Kumar Portfolio</p>
                <NavLink to={"https://github.com/ritesh0097"} target="_blank">Github: <span className="underline"> https://github.com/ritesh0097 </span></NavLink>
            </div>
            
        </div>
    )
}

export default Footer;