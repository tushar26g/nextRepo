import { Suspense } from "react";
import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";
import URL from "../../../../public/properties";

// 🔹 Fetch MCQ Data by ID
async function getMCQData(id: string): Promise<MCQ> {
  try {
    const res = await fetch(`${URL}public/mcqs?key=${encodeURIComponent(id)}`, {
      cache: "no-store", // Ensure fresh data on each request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch MCQ data (Status: ${res.status})`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching MCQ:", error);
    throw error; // Rethrow for proper handling
  }
}

// 🔹 Page Component
export default async function MCQPage({ params }: { params: { id: string } }) {
  try {
    const mcqData = await getMCQData(params.id);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MCQClient initialMCQ={mcqData} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error loading MCQ:", error);
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        ❌ Error loading MCQ. Please try again later.
      </div>
    );
  }
}

// 🔹 Metadata & Revalidation Settings
export const dynamic = "force-dynamic";
export const revalidate = 3600;
