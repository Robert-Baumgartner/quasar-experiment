import { defineStore } from 'pinia';
import products from '../assets/products.json';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: <Product[]>products,
    };
  },
  getters: {
    getProducts(): Product[] {
      return this.products;
    },
  },
  actions: {
    removeProduct(id: Number) {
      console.log(id);
      this.products = this.products.filter((el) => el.id !== id);
    },
  },
});
