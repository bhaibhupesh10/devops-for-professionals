export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface FAQCategory {
    id: string;
    label: string;
    faqs: FAQItem[];
  }
  
  