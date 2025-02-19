import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";
import { getApiUrl } from "@/utils/api";

interface MCQPageProps {
  params: { id: string };
}

async function getMCQData(id: string): Promise<MCQ> {
  try {
    const url = await getApiUrl(`/api/data?key=${encodeURIComponent(id)}`);

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch MCQ data (Status: ${res.status})`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching MCQ:", error);
    throw error;
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
