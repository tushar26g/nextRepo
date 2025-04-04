import { QPaperTableViewFull } from "@/types/qPaperTableView";
import Link from "next/link";

interface QPaperViewClientProps {
  qPaperView: QPaperTableViewFull;
}

const QPaperViewClient = ({ qPaperView }: QPaperViewClientProps) => {
  return (
    <>
      <div className={`min-h-screen px-4 py-6 transition-colors duration-300`}>
        <h1 className="text-3xl font-bold text-left mb-6">
          {qPaperView.description}
        </h1>

        <h2 className="text-2xl font-semibold text-left mt-6 mb-3">
          Select a Year to Start Practicing
        </h2>

        <div
          className={`overflow-x-auto shadow-md rounded-lg transition-colors duration-300 
            
          `}
        >
          <table className="w-full border border-gray-300 dark:border-gray-700 table-section">
            <thead>
              <tr
                className={`border-b 
                  
                `}
              >
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {qPaperView.qPaperLinks.map(({ year, key }) => (
                <tr
                  key={key}
                  className={`
                    border-t border-gray-300 dark:border-gray-600 
                    
                  `}
                >
                  <td className="p-3 text-left">{year}</td>
                  <td className="p-3 text-left">
                    <Link
                      href={`/mcqs/${key}`}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View MCQs
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-left mt-6 mb-3">
          Additional Study Resources
        </h2>
        <p className="text-left mb-4">
          In addition to PYQs, explore our{" "}
          <Link
            href="/mcqs"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            CA Foundation MCQ Practice
          </Link>{" "}
          section for chapter-wise quizzes and topic-specific tests.
        </p>

        <p className="text-left">
          Stay updated with{" "}
          <strong>latest exam patterns, syllabus changes,</strong> and
          <strong> ICAI guidelines</strong> by regularly checking our platform.
        </p>
      </div>
    </>
  );
};

export default QPaperViewClient;
