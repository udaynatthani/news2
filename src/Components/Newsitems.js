import React from 'react';
import img from '../assets/images.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:img} alt="News Image" style={{height:"200px",width:"100%"}} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description?description.slice(0,90):"Kuch nahi" }</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
