import React, { useState } from "react";
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
import { Theme } from "./context/themeModeContext";
import AutorizationPage from "./pages/AutorizationPage";

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

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
        <AutorizationPage />
      </div>
    </ThemeModeProvider>
  );
}

export default App;
