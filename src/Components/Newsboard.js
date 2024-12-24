import React, { useEffect, useState } from 'react';
import NewsItem from './Newsitems';

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  
  
  const apiKey = process.env.REACT_APP_API_KEY;  

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=3a26c1ef92804c1fb54dd62f4eb82f98`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch(() => setArticles([])); // Handle fetch errors
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
