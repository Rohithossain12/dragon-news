import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-3 ">Login With</h2>
      <div className="flex flex-col space-y-2 mb-12">
        <button className="btn">
          <FaGoogle size={20}></FaGoogle>Login With Google
        </button>
        <button className="btn ">
          <FaGithub size={20} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
