// "use client";

// import { useState } from "react";
// import { Question } from "@/types/subjective";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { MCQQuestion } from "../mcq/MCQQuestion";

// interface SubjectiveQuestionProps {
//   question: Question;
// }

// const SubjectiveQuestion = ({ question }: SubjectiveQuestionProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>(
//     {}
//   );

//   const toggleSolution = (id: string) => {
//     setShowSolutions((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const renderSolution = (solution: string[] | string) => {
//     if (Array.isArray(solution)) {
//       return solution.map((item, index) => (
//         <p key={index} className="mt-2">
//           {item}
//         </p>
//       ));
//     }
//     return <p>{solution}</p>;
//   };

//   // Determine indentation level based on ID format
//   const getIndentation = (id) => {
//     const parts = id.split("_").length - 1; // Count underscores
//     return parts * 8; // Increase indentation per level
//   };

//   // Different border colors for different levels
//   const getBorderColor = (id: string) => {
//     const depth = id.split("_").length - 1;
//     switch (depth) {
//       case 1:
//         return "border-blue-500"; // Subquestions
//       case 2:
//         return "border-green-500"; // Sub-subquestions
//       default:
//         return "border-gray-500"; // Default
//     }
//   };

//   function extractNumber(input: string) {
//     const match = input.match(/^q(\d+)(?:_(\d+))?(?:_(\d+))?$/);
//     if (!match) return null; // Return null if format is incorrect

//     return match[2] || match[1]; // Return number2 if it exists, otherwise number1
//   }

//   return (
//     <div className="mt-4 bg-white rounded-lg shadow-md">
//       <div className="p-6">
//         <div
//           className="cursor-pointer flex justify-between items-center"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <h3 className="text-lg font-semibold">{question.question}</h3>
//           {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </div>

//         {isOpen && (
//           <div className="mt-4">
//             {question.subQuestions.map((subQ, subIndex) => {
//               console.log(subQ.id[subQ.id.length - 1]);

//               return (
//                 <div
//                   key={subQ.id}
//                   className={`mt-4 pl-${getIndentation(
//                     subQ.id
//                   )} border-l-4 ${getBorderColor(subQ.id)}`}
//                 >
//                   {/* 🏷️ Label: Properly formatted numbering */}
//                   <div className="font-medium text-lg">
//                     {/* {`${subQ.id[subQ.id.length - 1]}) ${subQ.question}`} */}
//                     {`${extractNumber(subQ.id)}) ${subQ.question}`}
//                   </div>
//                   {/* Subjective Question Handling */}
//                   {subQ.type === "subjective" && (
//                     <>
//                       {showSolutions[subQ.id] && (
//                         <div className="mt-2 bg-gray-50 p-4 rounded-md border border-gray-300">
//                           {renderSolution(subQ.solution)}
//                         </div>
//                       )}

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleSolution(subQ.id);
//                         }}
//                         className="mt-2 text-blue-600 hover:text-blue-800 flex items-center gap-1"
//                       >
//                         {showSolutions[subQ.id] ? (
//                           <>
//                             Hide Solution <ChevronUp size={16} />
//                           </>
//                         ) : (
//                           <>
//                             Show Solution <ChevronDown size={16} />
//                           </>
//                         )}
//                       </button>
//                     </>
//                   )}
//                   {/* MCQ Handling */}
//                   {subQ.type === "MCQ" && (
//                     <MCQQuestion
//                       question={subQ}
//                       index={+subQ.id[subQ.id.length - 1]}
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubjectiveQuestion;
