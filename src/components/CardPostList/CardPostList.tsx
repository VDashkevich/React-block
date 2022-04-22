import React from "react";
import "./CardPostList.css";
import CardPost from "../CardPost/CardPost";

const CardPostList = (props: any) => {
  const listCards = props.data.map((item: any) => {
    return (
      <>
        <CardPost
          key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      </>
    );
  });
  return <div className="cardLists">{listCards}</div>;
};

export default CardPostList;
