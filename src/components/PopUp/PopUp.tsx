import React from "react";
import "./PopUp.css";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../redux/reducers/postsReducer";

const PopUp = ({ children }: any) => {
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(setSelectedImage(null));
  };

  return (
    <div>
      <div className="popUp">
        <div className="popUpContainer">
          <i onClick={onCardClick} className="fa-solid fa-xmark popUpClose"></i>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUp;