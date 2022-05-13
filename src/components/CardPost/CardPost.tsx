import "./CardPost.css";
import React, { FC, useState } from "react";
import classnames from "classnames";

const CardPost = ({ id, image, title, text, date }: any) => {
  return (
    <div className="card" key={id}>
      <img className="imageCard" src={image} />
      <h1 className="titleCard">{title}</h1>
      <p className="textCard">{text}</p>
      <p className="dateCard">{date.split("-").reverse().join(".")}</p>
    </div>
  );
};

export default CardPost;
