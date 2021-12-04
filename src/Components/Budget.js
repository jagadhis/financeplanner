import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, SetIsEditing] = useState(false);
  const handleEditClick = () => {
    SetIsEditing(true);
  };
  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    SetIsEditing(false);
  };
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
