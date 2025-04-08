import SubjectiveClient from "@/components/subjective/SubjectiveClient";
import { SubjectivePaper } from "@/types/subjective";
import path from "path";
import { promises as fs } from "fs";

// // async function getSubjectiveData(id: string) {
// //   // Replace with your actual API endpoint
// //   const res = await fetch(
// //     `${process.env.NEXT_PUBLIC_API_URL}/api/subjective/${id}`
// //   );

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch data");
// //   }

// //   return res.json();
// // }

// async function getSubjectiveData(id: string): Promise<SubjectivePaper> {
//   // Get the path to the JSON file
//   const jsonDirectory = path.join(process.cwd(), "src/data");

//   // Read the JSON file
//   const fileContents = await fs.readFile(
//     jsonDirectory + "/subjective.json",
//     "utf8"
//   );

//   // Parse all papers
//   const papers = JSON.parse(fileContents);
//   // Find the paper with matching key
//   const paper = papers.find((paper: SubjectivePaper) => paper.key === id);

//   if (!paper) {
//     throw new Error("Paper not found");
//   }

//   return paper;
// }

export default async function SubjectivePage({ params }: SubjectivePageProps) {
  const resolvedParams = await params; // Ensure params is awaited
  const data = await getSubjectiveData(resolvedParams.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SubjectiveClient data={data} />
    </main>
  );
}
