import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const AddForm = () => {
  const {
    addName,
    setAddName,
    addLocation,
    setAddLocation,
    addPr,
    setAddPr,
    showAddForm,
    setShowAddForm,
    createRestaurant,
    setLoading,
  } = useGlobalContext();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setShowAddForm(false);
    setAddName("");
    setAddLocation("");
    setAddPr(0);
    createRestaurant();
  };
  return (
    <div
      className={`addform-container ${showAddForm && "show-addform-container"}`}
      onClick={(e) => {
        if (
          e.target.classList.contains("show-addform-container") ||
          e.target.classList.contains("addform-container")
        ) {
          setShowAddForm(false);
          document.body.classList.remove("noscroll");
        }
      }}
    >
      <form
        className={`addform ${showAddForm && "show-addform"}`}
        onSubmit={handleSubmit}
      >
        <button
          className="cancel"
          type="button"
          onClick={() => {
            document.body.classList.remove("noscroll");
            setShowAddForm(false);
            setAddName("");
            setAddLocation("");
            setAddPr(0);
          }}
        >
          <FaTimes />
        </button>
        <input
          required
          type="text"
          className="addName"
          placeholder="Enter Name..."
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter Location..."
          className="addLocation"
          value={addLocation}
          onChange={(e) => setAddLocation(e.target.value)}
        />
        <select
          name="price_range"
          id=""
          value={addPr}
          placeholder="Select it"
          onChange={(e) => setAddPr(parseInt(e.target.value))}
        >
          <option value="" hidden>
            Choose Price Range
          </option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
        <button type="submit" className="add">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
