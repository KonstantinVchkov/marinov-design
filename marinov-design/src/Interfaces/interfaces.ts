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

export interface ProductType {
  id: string;
  image: string;
  brand: string;
  name: string;
  category: string;
  deliveryAdress: number;
  description: string;
  price: number;
  discount: string;
  material: [string];
  dimensions: [string];
  weight: [string];
  condition: string;
  odrzuvanje: {
    avoidMoisture: [string];
    storeProperly: [string];
    cleanRegularly: [string];
  };
  tags: [string];
}
