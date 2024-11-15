import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {


  const { title, author, rating, total_view, image_url, details, others_info } =
    news;

  return (
    <div className="card  bg-base-100  rounded-lg border ">
      {/* Trending Badge */}
      {/* {others_info.is_trending && (
        <div className="badge badge-secondary absolute top-2 right-2">
      
      </div>
      )} */}

      {/* Card Header */}
      <div className="flex items-center p-4">
        <img
          src={author.img}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="text-sm">
          <p className="font-semibold">{author.name || "Unknown Author"}</p>
          <p className="text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <FaShareAlt className="ml-auto cursor-pointer text-gray-500" />
      </div>

      {/* Card Title */}
      <div className="px-4 text-lg font-bold text-gray-800">{title}</div>

      {/* Card Image */}
      <figure className="px-4 py-4">
        <img src={image_url} alt="News" className="rounded-lg" />
      </figure>

      {/* Card Content */}
      <div className="px-4 pb-4 text-sm text-gray-700">
        {details.slice(0, 150)}...
        <Link to={`/news/${news._id}`} className="text-blue-500 hover:underline ml-1">
          Read More
        </Link>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <AiFillStar className="mr-1" />
          <span className="font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
