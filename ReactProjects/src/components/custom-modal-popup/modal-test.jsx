import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModelTest() {
  const [showModelPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModelPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
}
