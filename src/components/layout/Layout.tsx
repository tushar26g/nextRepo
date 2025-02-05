import { AdPanel } from "./AdPanel";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}
      `}
    >
      <Navbar />
      <div className="flex-1 flex pt-16">
        {/* <Sidebar /> */}
        <main
          className={`flex-1 mx-64 p-6 transition-colors duration-300 
            ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
          `}
        >
          {children}
        </main>
        <AdPanel />
      </div>
      <Footer />
    </div>
  );
}