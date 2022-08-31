import { Outlet, useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Return</button>
      
      <br />

      <Link to="welcome">
        Descarga1
      </Link>
      
      <br />

      <Link to="goodbye">
        like2
      </Link>

      <Outlet />
    </div>
  );
}
