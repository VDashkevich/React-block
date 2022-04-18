import React from "react";
import './CardPost.css'

const CardPost = (props: any) => {
    return <div className="Card">
    <img className="ImageCard" src="{props.image}"/>
    <h1 className="TitleCard">{props.title}</h1>
    <p className="TextCard">{props.text}</p>
    <p className="DateCard">{props.date}</p>
    </div>
}


export default CardPost