import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
