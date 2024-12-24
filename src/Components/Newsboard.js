import React, { useEffect, useState } from 'react';
import NewsItem from './Newsitems';

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  
  
  let apiKey = process.env.REACT_APP_API_KEY;  
  const api = "3a26c1ef92804c1fb54dd62f4eb82f98";

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch(() => setArticles([])); 
  }, [category, apiKey]);
  

  return (
    <div>
      <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
      {articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
  
};

export default Newsboard;
