import { SubjectivePaper } from "@/types/subjective";
import SubjectiveQuestion from "./SubjectiveQuestion";

interface SubjectiveClientProps {
  data: SubjectivePaper;
}

const SubjectiveClient = ({ data }: SubjectiveClientProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{data.heading}</h1>
      <p className="text-gray-600 mt-2">{data.description}</p>

      {/* Section Quick Links */}
      <div className="flex gap-4 mt-4 flex-wrap">
        {data.sections.map((section) => (
          <a
            key={section.sectionName}
            href={`#section-${section.sectionName}`}
            className="px-4 py-2 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
          >
            Section {section.sectionName}
          </a>
        ))}
      </div>

      <hr className="my-6 border-t border-gray-200" />

      {/* Main Content */}
      {data.sections.map((section) => (
        <div key={section.sectionName} id={`section-${section.sectionName}`}>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Section {section.sectionName}
            </h2>
            <p className="text-gray-600 mt-2">{section.description}</p>
            {section.questions.map((question, index) => {
              // console.log(index, question); // Logs each question before rendering

              return (
                <SubjectiveQuestion
                  key={question.questionId}
                  question={question}
                />
              );
            })}
          </div>
        </div>
      ))}

      {/* Bottom Section Links */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Quick Navigation</h3>
        <div className="flex gap-4 flex-wrap">
          {data.sections.map((section) => (
            <a
              key={section.sectionName}
              href={`#section-${section.sectionName}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Section {section.sectionName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectiveClient;
