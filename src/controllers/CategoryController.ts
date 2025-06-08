import type { Category } from "../models/Category";
import { categories as mockCategories } from "../models/Category";

class CategoryController {
  private categories: Category[] = [...mockCategories];

  // Get all categories
  getAllCategories(): Category[] {
    return this.categories.filter((category) => category.isActive);
  }

  // Get a category by ID
  getCategoryById(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  // Get categories by parent ID (for nested categories)
  getCategoriesByParentId(parentId: number | null): Category[] {
    return this.categories.filter((category) => category.parentId === parentId);
  }

  // Add a new category
  addCategory(category: Omit<Category, "id">): Category {
    const newCategory: Category = {
      ...category,
      id: Math.max(...this.categories.map((c) => c.id)) + 1,
    };

    this.categories.push(newCategory);
    return newCategory;
  }

  // Update a category
  updateCategory(id: number, updates: Partial<Category>): Category | undefined {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) return undefined;

    this.categories[index] = { ...this.categories[index], ...updates };
    return this.categories[index];
  }

  // Delete a category
  deleteCategory(id: number): boolean {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) return false;

    this.categories.splice(index, 1);
    return true;
  }
}

// Singleton instance
const categoryController = new CategoryController();
export default categoryController;
