export type DataState = {
  id: number | undefined;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export interface IFormCard {
  id?: number | undefined;
  title: string;
  description: string;
  date: number;
  price: number;
  category: string;
  status: 'New product' | 'Used product';
  thumbnail: string;
  isAgree: boolean;
}
