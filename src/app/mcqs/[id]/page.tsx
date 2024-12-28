import { Suspense } from "react";
import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";
import URL from "../../../../public/properties";

// Fetch MCQ data by ID
async function getMCQData(id: string): Promise<MCQ> {
  const res = await fetch(`${URL}/public/mcqs?key=${encodeURIComponent(id)}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  console.log(res);
  if (!res.ok) throw new Error("Failed to fetch MCQ data");
  return res.json();
}

type Params = Promise<{ id: string }>;

export default async function MCQPage({ params }: { params: Params }) {
  let mcqData: MCQ;
  try {
    const { id } = await params;
    mcqData = await getMCQData(id);
    console.log(mcqData);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MCQClient initialMCQ={mcqData} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching MCQ data:", error);
    return <div>error</div>;
  }
}

// Optionally, you can add these metadata exports
export const dynamic = "force-dynamic";
export const revalidate = 3600;
