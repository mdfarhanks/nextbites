
"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const query = searchQuery.toLowerCase();

    return (
      recipe.title.toLowerCase().includes(query) ||
      recipe.cuisine.toLowerCase().includes(query)
    );
  });

  return (
    <section>
      <input
        type="search"
        placeholder="Search recipes by name or cuisine..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="search-input"
      />

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="no-results">
          No recipes found. Try searching for another recipe or cuisine.
        </p>
      )}
    </section>
  );
}
