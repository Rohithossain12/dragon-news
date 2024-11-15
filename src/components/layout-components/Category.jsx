import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const Category = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-bold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">
        {news.length} News Found on this Category.
      </p>
      <div className="pt-2 space-y-5">
        {news.map((singleNews) => (
          <NewsCard news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
