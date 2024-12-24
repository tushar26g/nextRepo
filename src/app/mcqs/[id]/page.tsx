import { Suspense } from "react";
import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";

// Fetch MCQ data by ID
async function getMCQData(id: string): Promise<MCQ> {
  const res = await fetch(
    `http://localhost:8080/public/mcqs?key=${encodeURIComponent(id)}`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!res.ok) throw new Error("Failed to fetch MCQ data");
  return res.json();
}

export default async function MCQPage({ params }: { params: { id: string } }) {
  // Fetch MCQ data based on the route's dynamic parameter

  const mcqData = await getMCQData(params.id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MCQClient initialMCQ={mcqData} />
    </Suspense>
  );
}
