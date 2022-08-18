import React, { useState } from "react";
import Login from "./Login";
import Modal from "./Modal";
import Register from "./Register";

const Profil = () => {
  const [openModal, setOpenModal] = useState(false);
  const clickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <Register />
      <Login />
      <button onClick={clickButton}>profil</button>
      <Modal isOpen={openModal} clickButton={clickButton} />
    </div>
  );
};

export default Profil;
