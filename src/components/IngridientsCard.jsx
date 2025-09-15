import React from "react";

function IngridientsCard({ ingredient }) {
  return (
    <div className="bg-white border p-4 rounded shadow-sm">
      <h4 className="font-semibold">{ingredient.name}</h4>
      {ingredient.quantity && <p>{ingredient.quantity}</p>}
    </div>
  );
}

export default IngridientsCard;
