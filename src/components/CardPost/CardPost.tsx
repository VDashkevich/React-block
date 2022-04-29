import React from "react";
import "./CardPost.css";

const CardPost = ({ image, title, text, date }: any) => {
  return (
    <div className="card">
      <img className="imageCard" src={image} />
      <h1 className="titleCard">{title}</h1>
      <p className="textCard">{text}</p>
      <p className="dateCard">{date.split("-").reverse().join(".")}</p>
    </div>
  );
};

export default CardPost;
