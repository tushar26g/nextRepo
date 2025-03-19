"use client";

import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { ThemeContext } from "../context/ThemeContext";

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
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme } = themeContext;

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
        <meta name="CA Foundation" content="index, follow" />
      </Head>

      <div
        className={`min-h-screen px-4 py-6 transition-colors duration-300 
          ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-[#f4e7fb] text-gray-900"}
        `}
      >
        <h1 className="text-3xl font-bold text-left mb-6">
          CA Foundation PYQ – Business Economics & BCK
        </h1>

        <h2 className="text-2xl font-semibold text-left mt-6 mb-3">
          Select a Year to Start Practicing
        </h2>

        <div
          className={`overflow-x-auto shadow-md rounded-lg transition-colors duration-300 
            ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-[#f4e7fb] text-gray-900"}
          `}
        >
          <table className="w-full border border-gray-300 dark:border-gray-700 table-section">
            <thead>
              <tr
                className={`border-b 
                  ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-purple-200 text-gray-900"}
                `}
              >
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {PYQS.map(({ year, key }, index) => (
                <tr
                  key={key}
                  className={`
                    border-t border-gray-300 dark:border-gray-600 
                    ${theme === "light"
                      ? index % 2 === 0
                        ? "bg-white text-black"
                        : "bg-[#FAF6F1] text-black"
                      : index % 2 === 0
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-700 text-gray-200"}
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

        <h2 className="text-2xl font-semibold text-left mt-6 mb-3">Additional Study Resources</h2>
        <p className="text-left mb-4">
          In addition to PYQs, explore our{" "}
          <Link href="/mcqs" className="text-blue-600 hover:underline dark:text-blue-400">
            CA Foundation MCQ Practice
          </Link>{" "}
          section for chapter-wise quizzes and topic-specific tests.
        </p>

        <p className="text-left">
          Stay updated with <strong>latest exam patterns, syllabus changes,</strong> and
          <strong> ICAI guidelines</strong> by regularly checking our platform.
        </p>
      </div>
    </>
  );
}
