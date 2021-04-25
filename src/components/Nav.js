import React from "react";
import { useGlobalContext } from "./Context";
import AddForm from "./AddForm";
const Nav = () => {
  const { setShowAddForm } = useGlobalContext();
  const handleClick = () => {
    setShowAddForm(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.body.classList.add("noscroll");
  };
  return (
    <>
      <nav className="nav">
        <button onClick={handleClick} className="add-service">
          Add Service
        </button>
      </nav>
      <AddForm />
    </>
  );
};

export default Nav;
