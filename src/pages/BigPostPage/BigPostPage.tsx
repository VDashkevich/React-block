import React from "react";
import CardPost from "../../components/CardPost";
import "./BigPostPage.css";

const BigPostPage = (props: any) => {
    const BigCard = props.data.map((item: any) => {
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
      return <div className="cardLists">{BigCard}</div>;

};

export default BigPostPage;
