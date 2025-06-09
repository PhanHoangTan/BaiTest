export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice: number;
  categoryId: number;
  brand: string;
  imageUrl: string;
  isOnSale: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

// Mock data cho sản phẩm phổ biến nhất
export const popularProducts: Product[] = [
  {
    id: 1,
    name: "Pure Pineapple",
    slug: "pure-pineapple-1",
    description: "Kem dưỡng da từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=1",
    isOnSale: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 24,
  },
  {
    id: 2,
    name: "Pure Pineapple",
    slug: "pure-pineapple-2",
    description: "Kem dưỡng AR+ từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=2",
    isOnSale: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 32,
  },
  {
    id: 3,
    name: "Pure Pineapple",
    slug: "pure-pineapple-3",
    description: "Kem dưỡng da từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=3",
    isOnSale: true,
    inStock: true,
    rating: 4.2,
    reviewCount: 18,
  },
  {
    id: 4,
    name: "Pure Pineapple",
    slug: "pure-pineapple-4",
    description: "Kem dưỡng da từ chiết xuất dứa premium",
    price: 18.0,
    originalPrice: 42.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=4",
    isOnSale: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 36,
  },
];
