import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";
import URL from "../../../../public/properties";

// 🔹 Define Props Type
interface MCQPageProps {
  params: Promise<{ id: string }>; // Make params async to match Next.js expectations
}

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
export default async function MCQPage({ params }: MCQPageProps) {
  try {
    const resolvedParams = await params; // Ensure params is awaited
    const mcqData = await getMCQData(resolvedParams.id);

    return <MCQClient initialMCQ={mcqData} />;
  } catch (error) {
    console.error("Error loading MCQ:", error);

    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        ❌ Error loading MCQ. Please try again later.
      </div>
    );
  }
}

// 🔹 Dynamic Page Handling
export const dynamic = "force-dynamic"; // Ensures fresh data on each request
