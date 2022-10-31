import React from "react";

import Recipe from "./Recipe";

function Recipes({ recipes }) {
  return recipes.map((data, index) => (
    <Recipe
      key={index}
      title={data.recipe.label}
      type={data.recipe.mealType}
      time={data.recipe.totalTime}
      labels={data.recipe.healthLabels}
      cal={data.recipe.calories}
      img={data.recipe.image}
      ingredients={data.recipe.ingredientLines}
    />
  ));
}

export default Recipes;
