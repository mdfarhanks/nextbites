
import Link from "next/link";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="recipe-card-link"
    >
      <article className="recipe-card">
        <h2>{recipe.title}</h2>
        <p>{recipe.cuisine}</p>
        <p>{recipe.minutes} minutes</p>
        <p>{recipe.difficulty}</p>
      </article>
    </Link>
  );
}
