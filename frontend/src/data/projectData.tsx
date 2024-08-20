export interface CardData {
  id?: number;
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  { id: 1, title: 'Card 1', description: 'This is the first card.' },
  { id: 2, title: 'Card 2', description: 'This is the second card.' },
  { id: 3, title: 'Card 3', description: 'This is the third card.' },
];
