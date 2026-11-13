import { Link } from "react-router-dom"

function NavBar(){
    return  <div className="navbar"> 
                <div>
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div>
                    <Link to="/info" className="nav-link">Code Info</Link>
                </div>
                <div>
                    <Link to="/media" className="nav-link">Display Products</Link>
                </div>
            </div>
}

export default NavBar