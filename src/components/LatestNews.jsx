import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center p-3 bg-base-200 rounded">
      <p className="bg-[#D72050] text-white px-3 py-2 rounded">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          temporibus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, tenetur.
        </Link>
        <Link to="/news">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          velit!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
