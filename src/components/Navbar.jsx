import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-neutral rounded">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
