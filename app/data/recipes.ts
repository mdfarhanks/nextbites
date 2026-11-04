
export type Recipe = {
  id: number;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  emoji: string;
  category: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "Creamy pasta with garlic, parmesan and fresh herbs.",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    emoji: "🍝",
    category: "Dinner",
  },
  {
    id: 2,
    title: "Avocado Toast",
    description: "Crispy toast topped with fresh avocado and tomatoes.",
    cuisine: "American",
    minutes: 10,
    difficulty: "Easy",
    emoji: "🥑",
    category: "Breakfast",
  },
  {
    id: 3,
    title: "Fresh Garden Salad",
    description: "A refreshing salad with cucumber and lemon dressing.",
    cuisine: "Mediterranean",
    minutes: 15,
    difficulty: "Easy",
    emoji: "🥗",
    category: "Lunch",
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    description: "Fluffy chocolate pancakes for a sweet morning treat.",
    cuisine: "American",
    minutes: 20,
    difficulty: "Medium",
    emoji: "🥞",
    category: "Breakfast",
  },
  {
    id: 5,
    title: "Veggie Buddha Bowl",
    description: "A colorful bowl packed with vegetables and rice.",
    cuisine: "Asian",
    minutes: 30,
    difficulty: "Easy",
    emoji: "🥙",
    category: "Lunch",
  },
  {
    id: 6,
    title: "Berry Smoothie",
    description: "A refreshing blend of strawberries and blueberries.",
    cuisine: "International",
    minutes: 5,
    difficulty: "Easy",
    emoji: "🥤",
    category: "Drinks",
  },
];
