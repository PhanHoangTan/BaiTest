import type { Product } from "../models/Product";
import { popularProducts as mockProducts } from "../models/Product";

class ProductController {
  private products: Product[] = [...mockProducts];

  // Lấy tất cả sản phẩm
  getAllProducts(): Product[] {
    return this.products;
  }

  // Lấy sản phẩm theo ID
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Lấy sản phẩm phổ biến nhất
  getPopularProducts(limit: number = 4): Product[] {
    // Giả lập phân loại theo số lượt đánh giá để xác định sản phẩm phổ biến
    return [...this.products]
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, limit);
  }

  // Lấy sản phẩm theo danh mục
  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((product) => product.categoryId === categoryId);
  }

  // Lấy sản phẩm đang khuyến mãi
  getOnSaleProducts(): Product[] {
    return this.products.filter((product) => product.isOnSale);
  }

  // Tìm kiếm sản phẩm theo từ khóa
  searchProducts(keyword: string): Product[] {
    const lowercaseKeyword = keyword.toLowerCase();
    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseKeyword) ||
        product.description.toLowerCase().includes(lowercaseKeyword) ||
        product.brand.toLowerCase().includes(lowercaseKeyword)
    );
  }

  // Thêm sản phẩm mới
  addProduct(product: Omit<Product, "id">): Product {
    const newProduct: Product = {
      ...product,
      id: Math.max(...this.products.map((p) => p.id)) + 1,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  // Cập nhật sản phẩm
  updateProduct(id: number, updates: Partial<Product>): Product | undefined {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return undefined;

    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  // Xóa sản phẩm
  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

// Singleton instance
const productController = new ProductController();
export default productController;
