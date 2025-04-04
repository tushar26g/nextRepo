"use client";

import { Questions } from "@/types/subjective";

interface SubjectiveQuestionProps {
  questions: Questions;
}

const SubjectiveQuestion = ({ questions }: SubjectiveQuestionProps) => {
  return (
    <div>
      {
        <div style={{ border: "5px solid black" }}>
          <h2>
            {questions.questionId}. {questions.questionHeading}
          </h2>
          <br />
          {questions.questionList.map((ques, index) => (
            <>
              <b>{index + 1}</b>
              <div style={{ marginLeft: "24px" }}>
                {Array.isArray(ques.content) ? (
                  <div>
                    {ques.content.map((subQues, index) => (
                      <div key={index}>
                        <p>
                          <b>{index + 1}</b>
                        </p>
                        <p>
                          <b>{subQues.type}</b>
                        </p>
                        <div>
                          <p>
                            <b>Question: </b>
                            {subQues.question}
                          </p>
                        </div>
                        <br />
                        <div>
                          <p>
                            <b>Answer: </b>
                            {subQues.ans ? subQues.ans : subQues.solution}
                          </p>
                        </div>
                        <br />
                        <h2>
                          <b>Options</b>
                        </h2>
                        {subQues?.options?.map((opt: string, index: number) => {
                          return (
                            <p key={index}>
                              {index + 1}) {opt}
                            </p>
                          );
                        })}
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p>
                      <b>{ques.content.type}</b>
                    </p>
                    <div>
                      <p>
                        <b>Question: </b>
                        {ques.content.question}
                      </p>
                    </div>
                    <br />
                    <div>
                      <p>
                        <b>Answer: </b>
                        <span>{ques.content.solution?.slice(0, 20)}</span>
                      </p>
                    </div>
                    <br />
                    <br />
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      }
    </div>
  );
};

export default SubjectiveQuestion;
