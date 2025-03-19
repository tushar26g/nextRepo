export interface SubQuestion {
  id: string;
  type: "subjective" | "MCQ";
  question: string;
  solution: string[] | string;
  options?: string[];
  answer?: string;
}

export interface Question {
  questionId: string;
  question: string;
  subQuestions: SubQuestion[];
}

export interface Section {
  sectionName: string;
  description: string;
  questions: Question[];
}

export interface SubjectivePaper {
  heading: string;
  key: string;
  description: string;
  sections: Section[];
}
