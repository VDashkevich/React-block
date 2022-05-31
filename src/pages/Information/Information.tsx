import React from "react";
import "./Information.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "./../../context/themeModeContext";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";

const Information = () => {
  const dispatch = useDispatch();

  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;

  const activeTab = useSelector((state: any) => state.activeTabs.activeTab);

  const onClickActiveTab = (name: string) => {
    switch (true) {
      case name === "tab1":
        dispatch({ type: "activeTab1" });
        break;
      case name === "tab2":
        dispatch({ type: "activeTab2" });
        break;
      case name === "tab3":
        dispatch({ type: "activeTab3" });
        break;
    }
  };

  const MOCK_DATA = [
    "!!!!!!!!!!",
    "@@@@@@@@@@@@@@@@@@@@@@@",
    "###########################",
  ];

  const TABS = [
    { tabName: "Post 1", id: "tab1" },
    { tabName: "Post 2", id: "tab2" },
    { tabName: "Post 3", id: "tab3" },
  ];

  return (
    <div
      className={classnames(
        "Information",
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <h1 className="informationTitle">Information</h1>
      <div className="tabsContainer">
        {TABS.map((tab) => {
          return (
            <Button
              key={tab.id}
              className={classnames(isLightTheme ? "btnTab" : "btnTabDark", {
                ["btnTabActive"]: tab.id === activeTab,
              })}
              btnContent={tab.tabName}
              onClick={() => onClickActiveTab(tab.id)}
            />
          );
        })}
      </div>

      <div
        className={classnames("textContainer", {
          ["textContainerDark"]: !isLightTheme,
        })}
      >
        <p>
          {activeTab === "tab1"
            ? MOCK_DATA[0]
            : activeTab === "tab2"
            ? MOCK_DATA[1]
            : MOCK_DATA[2]}
        </p>
      </div>
    </div>
  );
};

export default Information;
