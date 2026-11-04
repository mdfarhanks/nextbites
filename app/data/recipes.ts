
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 30,
    difficulty: "Easy",
    ingredients: [
      "1 pizza base",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    steps: [
      "Preheat the oven to 220°C.",
      "Spread pizza sauce evenly over the pizza base.",
      "Add mozzarella cheese on top.",
      "Bake for 10–12 minutes until the cheese melts.",
      "Garnish with fresh basil leaves and serve.",
    ],
  },
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 60,
    difficulty: "Medium",
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "2 onions, sliced",
      "1 cup yogurt",
      "2 tablespoons biryani masala",
      "Ginger-garlic paste",
      "Fresh coriander and mint",
      "Salt to taste",
    ],
    steps: [
      "Wash and soak the basmati rice.",
      "Marinate chicken with yogurt, biryani masala, ginger-garlic paste, and salt.",
      "Cook sliced onions until golden.",
      "Add the marinated chicken and cook until partially done.",
      "Cook the rice separately until partially cooked.",
      "Layer the rice over the chicken and add coriander and mint.",
      "Cover and cook on low heat until the rice and chicken are fully cooked.",
    ],
  },
  {
    id: 3,
    title: "Caesar Salad",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    ingredients: [
      "2 cups chopped lettuce",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "3 tablespoons Caesar dressing",
      "Black pepper to taste",
    ],
    steps: [
      "Wash and dry the lettuce.",
      "Place lettuce in a large salad bowl.",
      "Add croutons and Parmesan cheese.",
      "Pour Caesar dressing over the salad.",
      "Toss gently and season with black pepper.",
    ],
  },
  {
    id: 4,
    title: "Chocolate Brownies",
    cuisine: "Dessert",
    minutes: 40,
    difficulty: "Easy",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1/3 cup cocoa powder",
      "1/2 cup all-purpose flour",
      "1 teaspoon vanilla extract",
    ],
    steps: [
      "Preheat the oven to 175°C.",
      "Melt the butter and mix it with sugar.",
      "Add eggs and vanilla extract and mix well.",
      "Stir in cocoa powder and flour.",
      "Pour the batter into a greased baking pan.",
      "Bake for 20–25 minutes and allow to cool before serving.",
    ],
  },
  {
    id: 5,
    title: "Vegetable Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    difficulty: "Easy",
    ingredients: [
      "2 cups cooked rice",
      "1/2 cup chopped carrots",
      "1/2 cup chopped beans",
      "1/2 cup chopped capsicum",
      "2 tablespoons soy sauce",
      "1 tablespoon cooking oil",
      "Salt and pepper to taste",
    ],
    steps: [
      "Heat oil in a large pan.",
      "Add carrots, beans, and capsicum.",
      "Cook the vegetables until slightly tender.",
      "Add the cooked rice and mix well.",
      "Pour in soy sauce and season with salt and pepper.",
      "Stir-fry for a few minutes and serve hot.",
    ],
  },
  {
    id: 6,
    title: "Pancakes",
    cuisine: "American",
    minutes: 20,
    difficulty: "Easy",
    ingredients: [
      "1 cup all-purpose flour",
      "1 tablespoon sugar",
      "1 teaspoon baking powder",
      "3/4 cup milk",
      "1 egg",
      "2 tablespoons melted butter",
    ],
    steps: [
      "Mix flour, sugar, and baking powder in a bowl.",
      "In another bowl, whisk milk, egg, and melted butter.",
      "Combine the wet and dry ingredients.",
      "Heat a lightly greased pan.",
      "Pour a small amount of batter into the pan.",
      "Cook until bubbles appear, then flip and cook the other side.",
      "Serve warm with your favorite toppings.",
    ],
  },
];

export function getRecipe(id: number): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
