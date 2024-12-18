import { Link } from "react-router-dom";

const Menu = ({ list }) => {

    return (
        <nav className="relative inline-block group">
            <h1 className="px-6 py-3 cursor-pointer hover:bg-slate-200 hover:text-black hover:underline">{list.name}</h1>
            <ul className="bg-slate-200 w-[1200px] absolute flex justify-start left-[50%] translate-x-[-12%] invisible ease-in-out duration-300 group-hover:visible">
                {
                    list.subLists.map((subList) => {
                        return (
                            <li className="px-6 py-3 text-black hover:bg-slate-50 cursor-pointer hover:underline"><Link to={subList.link} key={subList.name}>{subList.name}</Link></li>
                        )
                    })                
                }
            </ul>            
        </nav>
    )
}

export default Menu;