import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import CardPostList from "../../components/CardPostList";
import AutorizationPage from "../AutorizationPage";
import Registration from "../Registration";
import PostPage from "../PostPage";
import CardPost from "../../components/CardPost";


const Router = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<MainHeader />}>
            <Route
              path={"cards-list"}
              element={<CardPostList />}
            />
            <Route
              path={"autorization"}
              element={<AutorizationPage/>}
            />
            <Route
              path={"cards-list/:id"}
              element={<PostPage/>}
            />
          </Route>
        </Routes>
      ) : (
        <Routes>
            <Route path={"/auth"} element={<AutorizationPage />}/>
            <Route path={"/confirm"} element={<Registration />}/>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
