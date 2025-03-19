import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MCQQuestion as MCQQuestionType } from "@/types/mcq";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface MCQQuestionProps {
  question: MCQQuestionType;
  index: number;
}

const renderTextWithMath = (text: string, theme: string) => {
  const parts = text.split(/(\\\(.*?\\\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("\\(") && part.endsWith("\\)")) {
      return (
        <span
          key={index}
          className={`inline-block max-w-full font-mono ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <MathJax inline>{part}</MathJax>
          <span className="mr-1" />
        </span>
      );
    }
    return (
      <span
        key={index}
        className={`whitespace-pre-wrap break-words ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        {part}
      </span>
    );
  });
};

export function MCQQuestion({ question, index }: MCQQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

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
      <div
        className={`mb-4 sm:mb-6 p-1 sm:p-4 border rounded-lg shadow-md transition-all ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700 text-gray-100"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold">
          {index}. {renderTextWithMath(question.question, theme)}
        </h3>

        <ul className="space-y-1">
          {question.options.map((option, optIndex) => (
            <li key={optIndex}>
              <label
                className={`flex items-center p-1 sm:p-3 rounded-lg cursor-pointer transition-colors duration-200 text-sm sm:text-base
                  ${getOptionClassName(option)}
                  ${
                    !selectedOption &&
                    "hover:bg-gray-200 dark:hover:bg-gray-600"
                  }
                  ${
                    theme === "light" && !selectedOption
                      ? optIndex % 2 === 0
                        ? "bg-[#f4e7fb] text-gray-900"
                        : "bg-[#FAF6F1] text-gray-900"
                      : ""
                  }
                  ${
                    theme === "dark" && !selectedOption
                      ? optIndex % 2 === 0
                        ? "bg-[#3D3B5E] text-gray-200" // Even - Violet
                        : "bg-[#4B4A67] text-gray-200" // Odd - Purple-Gray
                      : ""
                  }
                `}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className="mr-2 sm:mr-3"
                />
                {renderTextWithMath(option, theme)}
              </label>
            </li>
          ))}
        </ul>

        {showSolution && question.solution && (
          <div
            className={`mt-3 p-1 rounded-lg text-sm sm:text-base leading-relaxed ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <h4 className="text-base sm:text-lg font-semibold text-yellow-700 dark:text-yellow-400 mb-1 sm:mb-2">
              Solution:
            </h4>
            <ul className="space-y-1 list-none max-w-full overflow-x-auto">
              {question.solution.map((step, stepIndex) => (
                <li
                  key={stepIndex}
                  className="text-gray-700 dark:text-gray-300 font-mono"
                >
                  {renderTextWithMath(step, theme)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </MathJaxContext>
  );
}
