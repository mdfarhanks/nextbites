
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecipeDetailPage({
  params,
}: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipe(Number(id));

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link href="/">← Back to recipes</Link>

      <h1>{recipe.title}</h1>

      <p>
        {recipe.cuisine} | {recipe.minutes} minutes | {recipe.difficulty}
      </p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={`${recipe.id}-ingredient-${index}`}>
            {ingredient}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={`${recipe.id}-step-${index}`}>
            {step}
          </li>
        ))}
      </ol>
    </main>
  );
}
