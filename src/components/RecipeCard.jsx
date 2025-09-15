import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col">
      
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image?.large || "/images/placeholder.jpg"}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4 py-4 flex flex-col gap-3 flex-grow">
        <h3 className="text-preset-5 truncate text-[var(--neutral-900)]">
          {recipe.title}
        </h3>
        <p className="text-preset-9 text-[var(--neutral-900)]">
          {recipe.overview}
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          <span className="flex items-center gap-1 text-preset-7">
            <img
              src="../assets/images/icon-servings.svg"
              className="w-10 h-10"
              alt="Servings"
            />
            {recipe.servings} Servings
          </span>

          <span className="flex items-center gap-1 text-preset-7">
            <img
              src="../assets/images/icon-prep-time.svg"
              className="w-10 h-10"
              alt="Prep Time"
            />
            Prep: {recipe.prepMinutes} min
          </span>

          <span className="flex items-center gap-1 text-preset-7">
            <img
              src="../assets/images/icon-cook-time.svg"
              className="w-10 h-10"
              alt="Cook Time"
            />
            Cook: {recipe.cookMinutes} min
          </span>
        </div>

        <Link
          className="btn !btn rounded-full !rounded-full h-[48px] mt-3"
          to={`/ingredients/${recipe.id}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
