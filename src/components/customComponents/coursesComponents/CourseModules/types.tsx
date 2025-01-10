

interface Topic {
  id: number;
  title: string;
  content: string[];
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  topics: Topic[];
}


