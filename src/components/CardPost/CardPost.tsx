import React from "react";
import './CardPost.css'

const CardPost = ({image, title, text, date}: any) => {
    return <div className="Card">
    <img className="ImageCard" src="{image}"/>
    <h1 className="TitleCard">{title}</h1>
    <p className="TextCard">{text}</p>
    <p className="DateCard">{date}</p>
    </div>
}


export default CardPost