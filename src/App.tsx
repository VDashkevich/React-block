import React, { useState } from "react";
import "./App.css";
import CardPost from "./components/CardPost";
import Login from "./pages/Login";
import CardPostList from "./components/CardPostList";
import Button from "./components/Button";
import Template from "./pages/Template";
import PostPage from "./pages/PostPage";
import RegistrationPage from "./pages/RegistrationPage";
import BigPostPage from "./pages/BigPostPage";
import MainHeader from "./components/MainHeader";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme, UseThemeContext } from "./context/themeModeContext";
import AutorizationPage from "./pages/AutorizationPage";
import Toggle from "./components/Toggle";
import classNames from "classnames";
import Registration from "./pages/Registration";
import Router from "./pages/Router";

const LIST_DATA = [
  {
    id: 0,
    image:
      "https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg",
    text: "Lorem ipsum dolor sit amet consectetur.",
    date: "2022-04-16",
    lesson_num: 0,
    title: "What is Lorem Ipsum?",
    author: 0,
  },
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi.",
    date: "2022-03-10",
    lesson_num: 1,
    title: "What is Lorem?",
    author: 1,
  },
  {
    id: 2,
    text: "Dolorum, eligendi. Lorem consectetur adipisicing elit.",
    date: "2022-06-18",
    lesson_num: 2,
    title: "What is Ipsum?",
    author: 2,
  },
  {
    id: 3,
    image:
      "https://images.hdqwalls.com/download/colorful-polygons-1920x1080.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-08",
    lesson_num: 3,
    title: "What is Dolorum?",
    author: 3,
  },
  {
    id: 4,
    image:
      "https://www.teahub.io/photos/full/128-1284836_desktop-wallpaper-laptop-mac-macbook-air-vk42-rainbow.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-09",
    lesson_num: 4,
    title: "Avocado runs the world!",
    author: 4,
  },
  {
    id: 5,
    image:
      "https://stackify.com/wp-content/uploads/2017/11/OOPS-concept-abstraction-881x441.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum. Eligendi, dolorum.",
    date: "2022-05-07",
    lesson_num: 5,
    title: "The Voyager's Courage",
    author: 5,
  },
];


const MOCK_DATA1 = [
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8aUkoB598KoaT2PcbRQfj0KV0CVrDLIM6g&usqp=CAU",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-08",
    lesson_num: 3,
    title: "What is Dolorum?",
    author: 3,
  },
];
function App() {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isLightTheme = theme === Theme.Light;

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div
        className={classNames(
          {
            ["App"]: isLightTheme,
          },
          { ["darkApp"]: !isLightTheme }
        )}
      >
        <Router/>
        <Toggle />
      </div>
    </ThemeModeProvider>
  );
}

export default App;
