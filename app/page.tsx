
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main>
      <h1>Discover Delicious Recipes</h1>
      <p>Find your next favorite meal with NextBites!</p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
