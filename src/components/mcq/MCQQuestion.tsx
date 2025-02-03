  // components/mcq/MCQQuestion.tsx
  "use client";

  import { useState } from "react";
  import { MCQQuestion as MCQQuestionType } from "@/types/mcq";
  import { MathJax, MathJaxContext } from "better-react-mathjax";

  interface MCQQuestionProps {
    question: MCQQuestionType;
    index: number;
  }

  const renderTextWithMath = (text: string) => {
    const parts = text.split(/(\\\(.*?\\\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("\\(") && part.endsWith("\\)")) {
        return (
          <span key={index} className="inline-block max-w-full">
            <MathJax inline>{part}</MathJax>
            <span className="mr-1" />
          </span>
        );
      }
      return (
        <span key={index} className="whitespace-pre-wrap break-words">
          {part}
        </span>
      );
    });
  };

  export function MCQQuestion({ question, index }: MCQQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showSolution, setShowSolution] = useState(false);

    const config = {
      loader: { load: ["input/tex", "output/svg"] },
      tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
      },
    };

    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
      setShowSolution(true);
    };

    const getOptionClassName = (option: string) => {
      if (!selectedOption) return "";

      if (option === question.ans) {
        return "bg-green-500 text-white";
      }
      if (option === selectedOption && option !== question.ans) {
        return "bg-red-500 text-white";
      }
      return "";
    };

    return (
      <MathJaxContext config={config}>
        <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-medium dark:text-white">
            {index + 1}. {renderTextWithMath(question.question)}
          </h3>

          <ul className="space-y-2">
            {question.options.map((option, optIndex) => (
              <li key={optIndex}>
                <label
                  className={`
                  flex items-center p-3 rounded-lg cursor-pointer
                  transition-colors duration-200
                  ${getOptionClassName(option)}
                  ${!selectedOption && "hover:bg-gray-100 dark:hover:bg-gray-700"}
                `}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                    disabled={selectedOption !== null}
                    className="mr-3"
                  />
                  {renderTextWithMath(option)}
                </label>
              </li>
            ))}
          </ul>

          {showSolution && question.solution && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-lg font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                Solution:
              </h4>
              <ul className="space-y-2 list-none max-w-full overflow-x-auto">
                {question.solution.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {renderTextWithMath(step)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </MathJaxContext>
    );
  }
