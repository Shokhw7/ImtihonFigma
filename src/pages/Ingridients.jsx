import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Ingridients() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://json-api.uz/api/project/recipes/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  const imageUrl = recipe.image?.large
    ? recipe.image.large.replace("./assets", "/assets")
    : "/images/placeholder.jpg";

  return (
    <div className="px-4 lg:px-[124px] py-6 w-full ">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-[1192px] mx-auto">

        <div className="flex-shrink-0 w-full lg:w-[580px] h-[580px] rounded-[16px]">
          <img
            src={imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        <div className="flex flex-col gap-[20px] w-full lg:w-[572px]">
          <h1 className="text-preset-2 text-[var(--neutral-600)] ">
            {recipe.title}
          </h1>

          <p className="text-[var(--neutral-900)] text-preset-6">
            {recipe.overview}
          </p>

          <div className="flex flex-wrap mt-2 w-full lg:w-[344px] gap-[16px]">
            <span className="flex items-center gap-[8px] text-preset-7">
              <img
                src="../assets/images/icon-servings.svg"
                className="w-10 h-10"
                alt="Servings"
              />
              Servings: {recipe.servings}
            </span>

            <span className="flex items-center gap-[8px] text-preset-7">
              <img
                src="../assets/images/icon-prep-time.svg"
                className="w-10 h-10"
                alt="Prep Time"
              />
              Prep: {recipe.prepMinutes} mins
            </span>

            <span className="flex items-center gap-[8px] text-preset-7">
              <img
                src="../assets/images/icon-cook-time.svg"
                className="w-10 h-10"
                alt="Cook Time"
              />
              Cooks: {recipe.cookMinutes} mins
            </span>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h2 className="text-preset-4 text-[var(--neutral-900)]">
              Ingredients:
            </h2>

            <ul className="flex flex-col gap-2">
              {recipe.ingredients.map((item, i) => (
                <li key={i} className="flex flex-row items-center gap-2">
                  <img
                    src="../assets/images/icon-bullet-point.svg"
                    className="w-[24px] h-[24px]"
                    alt="Bullet"
                  />
                  <span className="text-[var(--neutral-900)] text-preset-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[24px] font-bold leading-[130%] -tracking-1 text-[#163A34]">
              Instructions
            </h2>
            <ol className="flex flex-col gap-2">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex flex-row items-start gap-2">
                  <img
                    src="../assets/images/icon-bullet-point.svg"
                    className="w-[24px] h-[24px]"
                    alt="Bullet"
                  />
                  <span className="text-[20px] font-medium leading-[150%] -tracking-[0.4px] text-[#395852]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Ingridients;
