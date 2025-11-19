import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/newsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_trending == true
      );

      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => id == news.category_id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <p className="text-xl font-semibold text-center">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        found
      </p>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
