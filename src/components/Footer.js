// import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <div className="steal-blue2 text-white text-1xl py-8 flex flex-col justify-around items-center">

            <div className="w-[60%] mb-12 text-[14px] text-left flex justify-between leading-10">
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
                        <li className="hover:underline cursor-pointer leading-6 mt-2"> Central Board of Indirect <br/> Taxes and Customs </li>
                        <li className="hover:underline cursor-pointer"> State Tax Website </li>
                        <li className="hover:underline cursor-pointer"> National Portal </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Help and Taxpayer Facilities</h1>
                    <ul>
                        <li className="hover:underline cursor-pointer"> System Requirements </li>
                        <li className="hover:underline cursor-pointer"> GST Knowledge Portal </li>
                        <li className="hover:underline cursor-pointer"> GST Media </li>
                        <li className="hover:underline cursor-pointer"> Site Map </li>
                        <li className="hover:underline cursor-pointer"> Grievance Nodal Officers </li>
                        <li className="hover:underline cursor-pointer"> Fire Accounting and Billing Services </li>
                        <li className="hover:underline cursor-pointer"> GST Suvidha Providers </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-sky-500 font-bold hover:underline cursor-pointer">Contact Us</h1>
                    <ul>
                        <li className="hover:underline cursor-pointer"> Help Desk Number: <br/> 1800-103-4786 </li>
                        <li className="hover:underline cursor-pointer"> Log/Track Your Issue: <br/> Grievance Redressal Portal for GST </li>
                    </ul>

                    <ul className="text-2xl flex">
                        <li className="m-2 hover:underline cursor-pointer"><ion-icon name="logo-facebook"></ion-icon></li>
                        <li className="m-2 hover:underline cursor-pointer"><ion-icon name="logo-youtube"></ion-icon></li>
                        <li className="m-2 hover:underline cursor-pointer"><ion-icon name="logo-twitter"></ion-icon></li>
                        <li className="m-2 hover:underline cursor-pointer"><ion-icon name="logo-linkedin"></ion-icon></li>
                    </ul>
                </div>
            </div>
            <hr className="bg-white w-full border-none h-[1px]" />
            <div className="w-[60%] text-[14px] my-4 flex justify-between">
                <p>&copy; 2024-25 Goods and Services Tax Network</p>
                <p>Site Last Updated on 24-10-2024</p>
                <p>Designed & Developed by GSTN</p>
            </div>
            
        </div>
    )
}

export default Footer;