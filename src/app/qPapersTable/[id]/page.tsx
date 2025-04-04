import QPaperViewClient from "@/components/qPapersTable/QPapersTableClient";
import { getApiUrl } from "@/utils/api";

async function getQPaperTableData(id: string) {
  try {
    const url = await getApiUrl(
      `/api/qPapersTable?key=${encodeURIComponent(id)}`
    );

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch QuestionPapersTable data (Status: ${res.status})`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching MCQ:", error);
    throw error;
  }
}

export default async function QPaperView({
  params,
}: {
  params: { id: string };
}) {
  try {
    const qPaperView = await getQPaperTableData(params.id);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <QPaperViewClient qPaperView={qPaperView} />
      </main>
    );
  } catch (error) {
    console.log(error);
    return <div>Error loading question paper list</div>;
  }
}

// export const dynamic = "force-dynamic"; // Ensures fresh data on each request
