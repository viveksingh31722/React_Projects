import React from "react";
import Tabs from "./tabs";
import './tabs.css';

export default function TabTest() {
  function RandomComponent() {
    return <h1>Some Random content</h1>;
  }

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currTabIndex) {
    console.log(currTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
