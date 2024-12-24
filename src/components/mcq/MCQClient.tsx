// components/mcq/MCQClient.tsx
"use client";

import { useState } from "react";
import { MCQ } from "@/types/mcq";
import { MCQQuestion } from "./MCQQuestion";
import { Pagination } from "../common/Pagination";

interface MCQClientProps {
  initialMCQ: MCQ;
}

export function MCQClient({ initialMCQ }: MCQClientProps) {
  const [mcq] = useState<MCQ>(initialMCQ);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  // Calculate current questions
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
    <div className="max-w-4xl mx-auto p-6 bg-purple-50 dark:bg-gray-900">
      <h1 className="text-2xl mb-4 dark:text-white">{mcq.heading}</h1>
      <p className="mb-6 dark:text-gray-200">{mcq.description}</p>

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
