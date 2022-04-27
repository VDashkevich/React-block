import React from "react";
import CardPost from "../../components/CardPost";
import "./BigPostPage.css";

const BigPostPage = (props: any) => {
    const bigCard = props.data.map((item: any) => {
        return (
            <CardPost
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
              date={item.date}
            />
        );
      });
      return <div className="cardLists">{bigCard}</div>;

};

export default BigPostPage;
