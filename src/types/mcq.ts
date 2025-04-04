export interface MCQQuestion {
  ans: string;
  question: string;
  options: string[];
  solution?: string[];
}

export interface MCQ {
  description: string;
  heading: string;
  key: string;
  questions: MCQQuestion[];
  next?: string;
  previous?: string;
}
