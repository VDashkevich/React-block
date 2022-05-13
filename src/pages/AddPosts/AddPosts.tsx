import React, {FC} from "react";
import "./AddPosts.css";
import CardPostList from "../../components/CardPostList";
import MainHeader from "../../components/MainHeader";
import Button from "../../components/Button";
import classnames from "classnames";
import {Theme, UseThemeContext} from './../../context/themeModeContext'
import { useParams, Link } from "react-router-dom";
import CardPost from "../../components/CardPost";

const AddPosts = ({data}:any) => {

    const { theme, onChangeTheme = () =>{}} = UseThemeContext()
    const isLightTheme = theme === Theme.Light;
  
  
    const MOCK_DATA = [
      {
        id: 1,
        image: "https://tinypng.com/images/social/website.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-04-18",
        lesson_num: 0,
        title: "What is Lorem ipsum?",
        author: 0,
      },
      {
        id: 2,
        image: "https://tinypng.com/images/social/website.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-02-10",
        lesson_num: 0,
        title: "What is Lorem ipsum?",
        author: 0,
      },
      {
        id: 3,
        image: "https://tinypng.com/images/social/website.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-01-01",
        lesson_num: 0,
        title: "What is Lorem ipsum?",
        author: 0,
      },
      {
        id: 4,
        image: "https://tinypng.com/images/social/website.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2021-12-18",
        lesson_num: 0,
        title: "What is Lorem ipsum?",
        author: 0,
      },
    ];
  
    return (
      <div 
      className={classnames('myPosts',{['container']: isLightTheme}, {['darkContainer']: !isLightTheme})}>
      
        <div className="titlePostsContainer">
        <h1 className="headerTitle">My posts</h1> <Button className={'btnAny'} text={'+Add'} onClick={() =>{}}/>
  
        </div>
        <div className="postsList">
        {
        
        MOCK_DATA.map((card : any) => {
              
         return(
          
            
            <Link key={card.id} to={`/cards-list/${card.id}`}>
              <CardPost image={card.image} title={card.title} text={card.text} date={card.date} />
            </Link>
          )
        })
        
        }
        </div>
        
      </div>
  
    );
  };

export default AddPosts;
