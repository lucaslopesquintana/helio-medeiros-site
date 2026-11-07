export type ArticleCategory = 'Todos' | 'Direito Processual Civil' | 'Provas' | 'Direito Municipal';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Direito Processual Civil' | 'Provas' | 'Direito Municipal';
  date: string;
  readTime: string;
  abstract: string;
  fullContent: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    conclusion: string;
    footnotes?: string[];
  };
  abntCitation: string;
  tags: string[];
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  edition: string;
  publisher: string;
  year: string;
  pages: number;
  isbn: string;
  synopsis: string;
  forewordBy: {
    name: string;
    title: string;
    note: string;
  };
  presentationBy: {
    name: string;
    title: string;
    note: string;
  };
  keyTopics: string[];
  purchaseUrl?: string;
}

export interface CredentialCard {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  description: string;
  period?: string;
  highlights: string[];
  badge: string;
  icon: 'scale' | 'graduation-cap' | 'book-open';
}
