import { MCQClient } from "@/components/mcq/MCQClient";
import { MCQ } from "@/types/mcq";
import { getApiUrl } from "@/utils/api";

async function getMCQData(id: string): Promise<MCQ> {
  try {
    const url = await getApiUrl(`/api/mcqs?key=${encodeURIComponent(id)}`);

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch MCQ data (Status: ${res.status})`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching MCQ:", error);
    throw error;
  }
}

// 🔹 Page Component
export default async function MCQPage({ params }: { params: { id: string } }) {
  try {
    const mcqData = await getMCQData(params.id);
    return <MCQClient initialMCQ={mcqData} />;
  } catch (error) {
    console.log(error);
    return <div>Error loading MCQ</div>;
  }
}
