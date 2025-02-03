import Link from "next/link";
import Head from "next/head";

const PYQS = [
  { year: "June 2023", key: "june-2023-eco" },
  { year: "June 2022", key: "june-2022-eco" },
  { year: "July 2021", key: "july-2021-eco" },
  { year: "December 2020", key: "dec-2020-eco" },
  { year: "November 2019", key: "nov-2019-eco" },
  { year: "June 2019", key: "june-2019-eco" },
  { year: "November 2018", key: "nov-2018-eco" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>CA Foundation PYQ | Business Economics & BCK</title>
        <meta
          name="description"
          content="Download and practice CA Foundation Past Year Questions (PYQs) for Business Economics and Business & Commercial Knowledge (BCK). Get topic-wise MCQs with detailed solutions."
        />
        <meta name="keywords" content="CA Foundation, PYQ, Business Economics, BCK, past year papers, MCQs, ICAI" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        {/* 🔹 Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          CA Foundation PYQ – Business Economics & BCK
        </h1>

        {/* 🔹 SEO Optimized Content */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
          Prepare for your CA Foundation exams with past year question papers. 
          Practice MCQs from <strong>ICAI CA Foundation Business Economics</strong> 
          and <strong>Business and Commercial Knowledge (BCK)</strong> to strengthen 
          your concepts and improve your scores.
        </p>

        {/* 🔹 Table of Past Year Papers */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Select a Year to Start Practicing</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {PYQS.map(({ year, key }) => (
                <tr key={key} className="border-t border-gray-300 dark:border-gray-700">
                  <td className="p-3">{year}</td>
                  <td className="p-3">
                    <Link href={`/mcqs/${key}`} className="text-blue-600 hover:underline dark:text-blue-400">
                      View MCQs
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔹 Additional Resources Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Additional Study Resources</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In addition to PYQs, explore our <Link href="/mcqs" className="text-blue-600 hover:underline dark:text-blue-400">
            CA Foundation MCQ Practice
          </Link> section for chapter-wise quizzes and topic-specific tests.
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          Stay updated with <strong>latest exam patterns, syllabus changes,</strong> and 
          <strong>ICAI guidelines</strong> by regularly checking our platform.
        </p>
      </div>
    </>
  );
}
