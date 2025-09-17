import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const [prepOpen, setPrepOpen] = useState(false);
  const [cookOpen, setCookOpen] = useState(false);

  const [prepValue, setPrepValue] = useState("");
  const [cookValue, setCookValue] = useState("");
  const [search, setSearch] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const prepOptions = ["0 min", "5 min", "10 min"];
  const cookOptions = ["0 min", "5 min", "10 min", "15 min", "20 min"];

  useEffect(() => {
    setLoading(true);
    let url = "https://json-api.uz/api/project/recipes/recipes?";
    if (prepValue) url += `prepMinutes=${parseInt(prepValue)}&`;
    if (cookValue) url += `cookMinutes=${parseInt(cookValue)}&`;
    if (search) url += `slug=${search.toLowerCase().replace(/\s+/g, "-")}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(Array.isArray(data) ? data : data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [prepValue, cookValue, search]);

  return (
    <div className="px-4 lg:px-8">
      <div className="flex flex-col items-center gap-3 pb-8">
        <p className="text-preset-2 text-[var(--neutral-900)]">
          Explore our simple, healthy recipes
        </p>
        <p className="text-preset-6 text-[var(--neutral-600)] lg:text-center lg:max-w-[724px] md:px-8">
          Discover quick, whole-food dishes that fit real-life schedules and
          taste amazing. Use the filters or search to find a recipe you like.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between mb-8 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 w-full md:w-auto">
          <div className="relative w-full md:w-[181px]">
            <button
              className="select-btn w-full text-center md:text-left flex gap-[11px] justify-center"
              onClick={() => {
                setPrepOpen(!prepOpen);
                setCookOpen(false);
              }}
            >
              {prepValue || "Max Prep Time"}
              <img src="../assets/images/icon-chevron-down.svg" alt="" />
            </button>
            {prepOpen && (
              <div className="absolute z-10 mt-2 bg-white shadow rounded w-full">
                {prepOptions.map((option) => (
                  <label key={option} className="filter-item">
                    <input
                      type="radio"
                      name="prep"
                      checked={prepValue === option}
                      onChange={() => {
                        setPrepValue(option);
                        setPrepOpen(false);
                      }}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
                <button
                  className="clear-btn"
                  onClick={() => {
                    setPrepValue("");
                    setPrepOpen(false);
                  }}
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          <div className="relative w-full md:w-[181px]">
            <button
              className="select-btn w-full flex gap-[11px] justify-center"
              onClick={() => {
                setCookOpen(!cookOpen);
                setPrepOpen(false);
              }}
            >
              {cookValue || "Max Cook Time"}
              <img src="../assets/images/icon-chevron-down.svg" alt="" />
            </button>
            {cookOpen && (
              <div className="absolute z-10 mt-2 bg-white shadow rounded w-full">
                {cookOptions.map((option) => (
                  <label key={option} className="filter-item">
                    <input
                      type="radio"
                      name="cook"
                      checked={cookValue === option}
                      onChange={() => {
                        setCookValue(option);
                        setCookOpen(false);
                      }}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
                <button
                  className="clear-btn"
                  onClick={() => {
                    setCookValue("");
                    setCookOpen(false);
                  }}
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-[310px] relative ">
          <img
            className="absolute py-[13px] pl-[15px] "
            src="../assets/images/icon-search.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="Search by name or ingredient…"
            className="search-bar w-full border rounded px-3 py-2 !pl-[45px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] justify-items-center max-w-[1200px] mx-auto px-4 lg:px-0">
        {loading ? (
          <p className="col-span-full text-center text-preset-6 mt-5">
            Loading...
          </p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="w-full lg:max-w-[376px]">
              <RecipeCard recipe={recipe} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-preset-6 mt-5">
            No recipes found
          </p>
        )}
      </div>
    </div>
  );
}

export default Recipes;