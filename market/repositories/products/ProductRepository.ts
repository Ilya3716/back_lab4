import {
  Product,
  ProductAttributes,
  ProductCreationAttributes,
} from "../../models/products/Product";
import { Op } from "sequelize";

class ProductRepository {
  async create(data: ProductCreationAttributes): Promise<Product> {
    return await Product.create(data);
  }

  async findAll(): Promise<Product[]> {
    return await Product.findAll();
  }

  async update(
    id: number,
    data: Partial<ProductAttributes>
  ): Promise<[number, Product[]]> {
    return await Product.update(data, {
      where: { id: id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    return await Product.destroy({
      where: { id: id },
    });
  }

  async findById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async findByName(name: string): Promise<Product[]> {
    return await Product.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
  }

  async findSales(): Promise<Product[]> {
    return await Product.findAll({
      where: { sale: { [Op.gt]: "0" } },
    });
  }
}

export default ProductRepository;
