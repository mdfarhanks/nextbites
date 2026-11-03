
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Discover simple, delicious recipes for every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/" className="logo">
            🍴 NextBites
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#recipes">Recipes</a>
            <a href="#about">About</a>
          </div>

          <a href="#recipes" className="nav-button">
            Explore Recipes
          </a>
        </nav>

        {children}

        <footer id="about" className="footer">
          <p>
            © 2026 NextBites. Made with ❤️ for food lovers.
          </p>
        </footer>
      </body>
    </html>
  );
}
