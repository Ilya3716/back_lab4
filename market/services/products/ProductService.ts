// services/productService.ts
import {
  Product,
  ProductAttributes,
  ProductCreationAttributes,
} from "../../models/products/Product";
import ProductRepository from "../../repositories/products/ProductRepository";

class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(userData: ProductCreationAttributes): Promise<Product> {
    return await this.productRepository.create(userData);
  }

  async getAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async update(
    id: number,
    productData: Pick<ProductAttributes, "price" | "name" | "count" | "sale">
  ): Promise<Product> {
    const [updatedRowsCount, updatedProduct] =
      await this.productRepository.update(id, {
        name: productData.name,
        price: productData.price,
        count: productData.count,
        sale: productData.sale,
      });

    if (updatedRowsCount === 0) {
      throw new Error("Product not found");
    }
    return updatedProduct[0];
  }

  async delete(id: number): Promise<number> {
    const deletedRowsCount = await this.productRepository.delete(id);
    if (deletedRowsCount === 0) {
      throw new Error("Product not found");
    }
    return deletedRowsCount;
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async findByName(name: string): Promise<Product[]> {
    return await this.productRepository.findByName(name);
  }

  async findSales(): Promise<Product[]> {
    return await this.productRepository.findSales();
  }
}

export default ProductService;
