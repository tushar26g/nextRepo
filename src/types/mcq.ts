export interface MCQQuestion {
  question: string;
  options: string[];
  ans: string;
  solution?: string[];
}

export interface MCQ {
  heading: string;
  description: string;
  questions: MCQQuestion[];
  next?: string;
  previous?: string;
}
