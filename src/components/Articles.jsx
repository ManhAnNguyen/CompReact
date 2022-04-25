import React, { useEffect } from "react";
import { useState } from "react";
import SkeletonArticle from "../skeleton/SkeletonArticle";

const Articles = () => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticle(data);
    }, 5000);
  });
  return (
    <div className="articles">
      <h2>Articles</h2>

      {article &&
        article.map((a) => (
          <div className="article" key={a.id}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </div>
        ))}
      {!article &&
        [...Array(5)].map((n) => <SkeletonArticle theme={"dark"} key={n} />)}
    </div>
  );
};

export default Articles;
