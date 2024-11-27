import logo from "../assets/logo.png"
import "../App.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="flex flex-row  flex-wrap justify-between p-10  border-b-2 border-black">
                <div> <img src={logo} alt="text" /> </div>


               <div id="lang" className=" flex  flex-row flex-wrap  justify-center place-content-center  p-5 gap-8 text-black text-center ">
                <Link to="/About"> <button   className="">About</button></Link>
                    <div className="">How_it_works</div>
                    <Link to="/About"> <button  className="">Resource</button></Link>
                    <div className=" ">FAQ's</div>
                    <div className="">Logout</div>
                </div>
            </div>

        </div>
    )
}
export default Navbar;