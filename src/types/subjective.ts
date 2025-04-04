export interface SubjectivePaper {
  heading: string;
  key: string;
  description: string;
  sections: Section[];
}

export interface Section {
  sectionName: string;
  description: string;
  questions: Questions[];
}

export interface Questions {
  questionId: string;
  questionHeading: string;
  questionList: QuestionList[];
}

export interface QuestionList {
  content: QuestionContent;
}

export interface QuestionContent {
  type: string;
  question: string;
  solution: string[] | string;
}
