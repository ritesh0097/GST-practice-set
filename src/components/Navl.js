import { Link } from "react-router-dom"
import { list } from "./NavList"
import Menu from "./Menu"

const Navs = () => {

    return (
        <nav className="steal-blue w-full text-white">
            <ul className="w-[60%] m-auto text-[15px] flex justify-between">
                {
                list.map((lst) => {
                        
                    if (lst.subLists) {
                        return <Menu list={lst} key={lst.name} />
                    }

                    return (
                        <li className="px-6 py-3 cursor-pointer hover:bg-cyan-500">
                        <Link to={lst.link} key={lst.name} >{lst.name}</Link>
                        </li>
                    )
                })
                }

            </ul>                        
        </nav>
    )
}

export default Navs;