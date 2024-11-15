import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 py-4">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400 ">Journalism Without Fear or Favour</h2>
      <p className="text-lg font-semibold text-gray-500">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
