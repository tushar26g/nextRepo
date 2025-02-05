"use client";

import { useState, useContext } from "react";
import { MCQ } from "@/types/mcq";
import { MCQQuestion } from "./MCQQuestion";
import { Pagination } from "../common/Pagination";
import { ThemeContext } from "../../context/ThemeContext";

interface MCQClientProps {
  initialMCQ: MCQ;
}

export function MCQClient({ initialMCQ }: MCQClientProps) {
  const [mcq] = useState<MCQ>(initialMCQ);
  const [currentPage, setCurrentPage] = useState(1);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  const questionsPerPage = 5;
  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = mcq.questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-4 rounded-lg shadow-md transition-all duration-300
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-purple-50 text-gray-900"}
      `}
    >
      <h1
        className={`text-2xl mb-4 font-semibold transition-colors duration-300
          ${theme === "dark" ? "text-purple-300" : "text-purple-700"}
        `}
      >
        {mcq.heading}
      </h1>
      <p className="mb-6 transition-colors duration-300">
        {mcq.description}
      </p>

      {currentQuestions.map((question, qIndex) => (
        <MCQQuestion
          key={startIndex + qIndex}
          question={question}
          index={startIndex + qIndex}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalItems={mcq.questions.length}
        itemsPerPage={questionsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}