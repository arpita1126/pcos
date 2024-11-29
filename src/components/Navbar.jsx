import logo from "../assets/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex  flex-row justify-between p-3 ">
                <div> 
                    <img src={logo} alt="text"  width={50}/>
                </div>
                
                    <div className="flex  flex-direction-row space-x-4  ">
                        <Link to="/About">
                            <button className="">About</button>
                        </Link>
                        <Link to="/How_it_works">
                            <button className="">How_it_Works?</button>
                        </Link>
                        <Link to="/Resources">
                            <button className="">Resources</button>
                        </Link>
                        <Link to="/FAQ">
                            <button className="">FAQ's</button>
                        </Link>
                        <Link to="/Logout">
                            <button className="">Log_out</button>
                        </Link>
                    </div>
                
            </div>
        </div>
    );
};

export default Navbar;
