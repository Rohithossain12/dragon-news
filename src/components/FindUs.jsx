import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>
      <div className="join join-vertical flex *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook size={20} className="text-blue-500"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter size={20} className="text-blue-400"></FaTwitter>Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram size={20} className="text-red-500"></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
