
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            ✨ YOUR DAILY DOSE OF DELICIOUS
          </span>

          <h1>
            Discover recipes.
            <br />
            <span>Make every bite count.</span>
          </h1>

          <p>
            Find inspiration for your next meal with simple,
            delicious recipes made for everyday cooking.
          </p>

          <a href="#recipes" className="hero-button">
            Explore Recipes →
          </a>
        </div>

        <div className="hero-emoji">
          🍲
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="recipes-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              FRESH INSPIRATION
            </span>

            <h2>Explore Our Recipes</h2>

            <p>Something delicious is always cooking.</p>
          </div>

          <span className="recipe-count">
            {recipes.length} Recipes
          </span>
        </div>

        {/* Responsive Recipe Grid */}
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
