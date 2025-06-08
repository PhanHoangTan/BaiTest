export interface Category {
  id: number;
  name: string;
  slug: string;
  parentId?: number | null;
  children?: Category[];
  isActive: boolean;
  order?: number;
  icon?: string;
}

// Mock data for testing
export const categories: Category[] = [
  {
    id: 1,
    name: "Dresses",
    slug: "dresses",
    parentId: null,
    isActive: true,
    icon: "dress",
    children: [
      {
        id: 11,
        name: "Maxi Dresses",
        slug: "maxi-dresses",
        parentId: 1,
        isActive: true,
      },
      {
        id: 12,
        name: "Party Dresses",
        slug: "party-dresses",
        parentId: 1,
        isActive: true,
      },
      {
        id: 13,
        name: "Casual Dresses",
        slug: "casual-dresses",
        parentId: 1,
        isActive: true,
      },
    ],
  },
  { id: 2, name: "Shirts", slug: "shirts", parentId: null, isActive: true },
  { id: 3, name: "Jeans", slug: "jeans", parentId: null, isActive: true },
  { id: 4, name: "Swimwear", slug: "swimwear", parentId: null, isActive: true },
  {
    id: 5,
    name: "Sleepwear",
    slug: "sleepwear",
    parentId: null,
    isActive: true,
  },
  {
    id: 6,
    name: "Sportswear",
    slug: "sportswear",
    parentId: null,
    isActive: true,
  },
  {
    id: 7,
    name: "Jumpsuits",
    slug: "jumpsuits",
    parentId: null,
    isActive: true,
  },
  { id: 8, name: "Blazers", slug: "blazers", parentId: null, isActive: true },
  { id: 9, name: "Jackets", slug: "jackets", parentId: null, isActive: true },
  { id: 10, name: "Shoes", slug: "shoes", parentId: null, isActive: true },
];
