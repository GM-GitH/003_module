import { NavLink } from "react-router-dom"
import './style.css'

/*const userId = 'German'*/

export default function Navbar() {
    
  return (
    <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/myphotos">My photos</NavLink>
          {/*<NavLink to="/users">Users</NavLink>
          <NavLink to={`/users/${userId}`}>User</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/Go06Le">Whatever</NavLink>*/}
    </div>
  )
}
