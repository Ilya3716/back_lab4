import {
  Order,
  OrderAttributes,
  OrderCreationAttributes,
} from "../../models/orders/Order";
import { Op } from "sequelize";

class OrderRepository {
  async create(data: OrderCreationAttributes): Promise<Order> {
    try {
      const order = await Order.create(data);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Order[]> {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const deletedRowsCount = await Order.destroy({
        where: { id: id },
      });
      return deletedRowsCount;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<Order | null> {
    try {
      const order = await Order.findByPk(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async findByUser(userId: Number): Promise<Order[]> {
    try {
      const orders = await Order.findAll({
        where: { userId: userId },
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async findByProduct(productId: string): Promise<Order[]> {
    try {
      const orders = await Order.findAll({
        where: { productId: productId },
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }
}

export default OrderRepository;
