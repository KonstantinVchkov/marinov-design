export interface FAQType {
  PageTitle: string;
  questionsAndAnswers: [
    {
      id: string;
      question: string;
      answer: string;
    }
  ];
}
