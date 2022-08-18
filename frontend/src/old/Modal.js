import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, clickButton }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="content-modal">
          modal
          <button onClick={clickButton}>zatvori</button>
        </div>
      </div>
    )
  );
};

export default Modal;
