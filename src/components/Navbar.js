import { NavLink } from "react-router-dom"
import './style.css'

/*const userId = 'German'*/

export default function Navbar() {
    
  return (
    <div className="navbar">
          <NavLink to="/003_module/">Home</NavLink>
          <NavLink to="/003_module/search">Search</NavLink>
          <NavLink to="/003_module/myphotos">My photos</NavLink>
    </div>
  )
}
