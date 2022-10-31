import React from "react";

function Recipe({ title, type, time, labels, cal, img, ingredients }) {
  return (
    <div className="recipe-card" style={{}}>
      <div className="img-con">
        <img src={img} alt={title} />
      </div>
      <article>
        <h2>{title}</h2>
        <h3>{type}</h3>
        <h4>
          <b>Time :</b> {time} min
        </h4>

        <h4>
          <b>Calories :</b> {cal.toFixed(2)}
        </h4>

        <div className="label-con">
          {labels.map((label, index) => (
            <div className="label" key={index}>
              {label}
            </div>
          ))}
        </div>

        <div className="ingredients">
          <span className="ingredients-heading">Ingredients:&nbsp;</span>
          {ingredients.map((text, index) => (
            <span>{text}, </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Recipe;
