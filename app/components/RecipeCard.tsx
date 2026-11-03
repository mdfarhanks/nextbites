
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <article className="recipe-card">
      <div className="recipe-image">
        <span>{recipe.emoji}</span>
        <span className="recipe-category">
          {recipe.category}
        </span>
      </div>

      <div className="recipe-content">
        <p className="recipe-cuisine">
          {recipe.cuisine}
        </p>

        <h2>{recipe.title}</h2>

        <p className="recipe-description">
          {recipe.description}
        </p>

        <div className="recipe-details">
          <span>⏱ {recipe.minutes} min</span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
