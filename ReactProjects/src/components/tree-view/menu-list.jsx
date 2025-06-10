import React from "react";
import MenuItem from "./menu-item";
import './style.css';

export default function MenuList({ list = [] }) {
  return (
    <ul className="tree-view-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
