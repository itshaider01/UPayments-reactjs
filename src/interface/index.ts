export interface IProduct {
  createdAt?: number;
  name: string;
  avatar: string;
  developerEmail?: string;
  price: string;
  id?: string;
  category: string;
  description: string;
}

export interface ICategory {
  createdAt?: number;
  name: string;
  id?: string;
}
