export type Review = {
  id: number;
  user: string;
  content: string;
  rating: number;
  date: string;
  productId?: number; // set to show this review on that product's page
};
