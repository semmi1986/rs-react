export type DataState = {
  readonly id: number;
  title: string;
  description: string;
  price: number;
  readonly discountPercentage: number;
  readonly rating: number;
  readonly stock: number;
  readonly brand: string;
  readonly category: string;
  thumbnail: string;
  readonly images: string[];
};
